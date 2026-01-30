import { useState, useEffect } from 'react';
import Header from './components/Header';
import TopicCard from './components/TopicCard';
import ProgressBar from './components/ProgressBar';
import ApiKeyModal from './components/ApiKeyModal';
import NotebookInstructionsModal from './components/NotebookInstructionsModal';
import LangGraphTutorial from './components/LangGraphTutorial';
import SearchBar from './components/SearchBar';
import FilterBar, { FilterOptions } from './components/FilterBar';
import { StatsPanel } from './components/StatsPanel';
import { AchievementsPanel } from './components/AchievementsPanel';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider, useToast } from './contexts/ToastContext';
import { useStats } from './hooks/useStats';
import { useAchievements } from './hooks/useAchievements';
import { topics } from './data/topics';
import { UserProgress } from './types';
import { BookOpen, AlertCircle, BarChart3, Award, Filter as FilterIcon } from 'lucide-react';

const STORAGE_KEY = 'langgraph-training-progress';

function AppContent() {
  const { showToast } = useToast();
  const [progress, setProgress] = useState<UserProgress>({
    completedTopics: [],
    currentTopic: 1,
    apiKey: '',
    completionDates: {},
    lastActivityDate: undefined,
  });

  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isNotebookModalOpen, setIsNotebookModalOpen] = useState(false);
  const [selectedNotebook, setSelectedNotebook] = useState({ filename: '', title: '' });
  const [showWelcome, setShowWelcome] = useState(true);
  const [showTutorial, setShowTutorial] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showStats, setShowStats] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    difficulty: [],
    showCompleted: true,
    showInProgress: true,
    showLocked: true,
  });

  // Get stats and achievements
  const stats = useStats(topics, progress.completedTopics, progress.completionDates);
  const achievements = useAchievements(
    topics,
    progress.completedTopics,
    stats.currentStreak,
    stats.longestStreak
  );

  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setProgress(parsed);
        setShowWelcome(false);
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    } else {
      setIsApiKeyModalOpen(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const handleSaveApiKey = (apiKey: string) => {
    setProgress(prev => ({ ...prev, apiKey }));
  };

  const handleTopicClick = (topicId: number) => {
    const topic = topics.find(t => t.id === topicId);
    if (!topic) return;

    // Check if prerequisites are met
    if (topic.prerequisites) {
      const hasPrerequisites = topic.prerequisites.every(preReq =>
        progress.completedTopics.includes(preReq)
      );
      if (!hasPrerequisites) {
        alert('Please complete the prerequisite topics first!');
        return;
      }
    }

    if (!progress.apiKey) {
      alert('Please set your Anthropic API key first! Click the "Set API Key" button in the header.');
      setIsApiKeyModalOpen(true);
      return;
    }

    // Extract notebook filename from path
    const notebookFilename = topic.notebookPath.split('/').pop() || '';

    // Show notebook instructions modal
    setSelectedNotebook({
      filename: notebookFilename,
      title: topic.title
    });
    setIsNotebookModalOpen(true);

    // Update current topic
    setProgress(prev => ({ ...prev, currentTopic: topicId }));
  };

  const handleMarkComplete = (topicId: number) => {
    setProgress(prev => {
      const isCurrentlyCompleted = prev.completedTopics.includes(topicId);

      if (isCurrentlyCompleted) {
        // Remove from completed (undo)
        const newCompletionDates = { ...prev.completionDates };
        delete newCompletionDates[topicId];

        showToast('Topic marked as incomplete', 'info');

        return {
          ...prev,
          completedTopics: prev.completedTopics.filter(id => id !== topicId),
          completionDates: newCompletionDates,
        };
      } else {
        // Add to completed
        const topic = topics.find(t => t.id === topicId);
        showToast(`Congratulations! You completed: ${topic?.title}`, 'success');

        return {
          ...prev,
          completedTopics: [...prev.completedTopics, topicId],
          currentTopic: topicId < topics.length ? topicId + 1 : topicId,
          completionDates: {
            ...prev.completionDates,
            [topicId]: new Date().toISOString(),
          },
          lastActivityDate: new Date().toISOString(),
        };
      }
    });
  };

  const isTopicLocked = (topic: typeof topics[0]) => {
    if (!topic.prerequisites) return false;
    return !topic.prerequisites.every(preReq =>
      progress.completedTopics.includes(preReq)
    );
  };

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setProgress({
        completedTopics: [],
        currentTopic: 1,
        apiKey: progress.apiKey,
        completionDates: {},
        lastActivityDate: undefined,
      });
      showToast('Progress has been reset', 'info');
    }
  };

  // Filter and search topics
  const filteredTopics = topics.filter(topic => {
    // Search filter
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      topic.title.toLowerCase().includes(searchLower) ||
      topic.description.toLowerCase().includes(searchLower);

    if (!matchesSearch) return false;

    // Difficulty filter
    if (filters.difficulty.length > 0 && !filters.difficulty.includes(topic.difficulty)) {
      return false;
    }

    // Status filter
    const isCompleted = progress.completedTopics.includes(topic.id);
    const isLocked = isTopicLocked(topic);
    const isInProgress = !isCompleted && !isLocked;

    if (isCompleted && !filters.showCompleted) return false;
    if (isInProgress && !filters.showInProgress) return false;
    if (isLocked && !filters.showLocked) return false;

    return true;
  });

  // If showing tutorial, render it instead of the main course
  if (showTutorial) {
    return (
      <>
        <LangGraphTutorial onStartTraining={() => setShowTutorial(false)} />
        <ApiKeyModal
          isOpen={isApiKeyModalOpen}
          onClose={() => setIsApiKeyModalOpen(false)}
          onSave={handleSaveApiKey}
          currentApiKey={progress.apiKey}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Header
              hasApiKey={!!progress.apiKey}
              onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
            />
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowStats(!showStats)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  showStats
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <BarChart3 size={18} />
                Stats
              </button>
              <button
                onClick={() => setShowAchievements(!showAchievements)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  showAchievements
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Award size={18} />
                Achievements
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Panel */}
        {showStats && (
          <div className="mb-6 animate-slideDown">
            <StatsPanel stats={stats} />
          </div>
        )}

        {/* Achievements Panel */}
        {showAchievements && (
          <div className="mb-6 animate-slideDown">
            <AchievementsPanel achievements={achievements} />
          </div>
        )}

        {showWelcome && (
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white rounded-lg shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4">
              <BookOpen size={48} className="flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-3">Welcome to LangGraph Training!</h2>
                <p className="text-lg mb-4">
                  Master the art of building AI workflows with our comprehensive, hands-on training program.
                  Each topic includes interactive Jupyter notebooks with real code examples using the Anthropic API.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-2xl">📚</span>
                    <span>10 comprehensive topics from beginner to advanced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl">💻</span>
                    <span>Interactive Jupyter notebooks with runnable code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    <span>Real examples using Claude via Anthropic API</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <span>Progressive learning path with prerequisites</span>
                  </li>
                </ul>
                <button
                  onClick={() => setShowWelcome(false)}
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 transition"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}

        {!progress.apiKey && (
          <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 mb-6 rounded">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">API Key Required</h3>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Please set your Anthropic API key to start working with the notebooks.
                  Click the "Set API Key" button in the header to get started.
                </p>
              </div>
            </div>
          </div>
        )}

        <ProgressBar
          completed={progress.completedTopics.length}
          total={topics.length}
        />

        {/* Search and Filter Section */}
        <div className="mb-6 space-y-4">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <details className="group">
            <summary className="cursor-pointer flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium hover:text-primary dark:hover:text-blue-400">
              <FilterIcon size={18} />
              <span>Advanced Filters</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({filters.difficulty.length > 0 || !filters.showCompleted || !filters.showInProgress || !filters.showLocked ? 'Active' : 'None'})
              </span>
            </summary>
            <div className="mt-3">
              <FilterBar filters={filters} onFilterChange={setFilters} />
            </div>
          </details>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Learning Path
            {filteredTopics.length !== topics.length && (
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                ({filteredTopics.length} of {topics.length} topics)
              </span>
            )}
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => setShowTutorial(true)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline"
            >
              View Tutorial
            </button>
            {progress.completedTopics.length > 0 && (
              <button
                onClick={handleResetProgress}
                className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 underline"
              >
                Reset Progress
              </button>
            )}
          </div>
        </div>

        {filteredTopics.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No topics match your filters. Try adjusting your search or filter settings.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                isCompleted={progress.completedTopics.includes(topic.id)}
                isCurrent={progress.currentTopic === topic.id}
                isLocked={isTopicLocked(topic)}
                onClick={() => handleTopicClick(topic.id)}
                onMarkComplete={() => handleMarkComplete(topic.id)}
              />
            ))}
          </div>
        )}

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">How to Use This Training</h3>
          <ol className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <span>Set your Anthropic API key using the button in the header</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <span>Click on a topic card to open its Jupyter notebook</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <span>Work through the notebook, running code cells and completing exercises</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">4.</span>
              <span>Topics unlock progressively as you complete prerequisites</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">5.</span>
              <span>Your progress is automatically saved in your browser</span>
            </li>
          </ol>
        </div>
      </main>

      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onSave={handleSaveApiKey}
        currentApiKey={progress.apiKey}
      />

      <NotebookInstructionsModal
        isOpen={isNotebookModalOpen}
        onClose={() => setIsNotebookModalOpen(false)}
        notebookFilename={selectedNotebook.filename}
        topicTitle={selectedNotebook.title}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  );
}
