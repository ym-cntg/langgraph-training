import { useState, useEffect } from 'react';
import Header from './components/Header';
import TopicCard from './components/TopicCard';
import ProgressBar from './components/ProgressBar';
import ApiKeyModal from './components/ApiKeyModal';
import NotebookInstructionsModal from './components/NotebookInstructionsModal';
import { topics } from './data/topics';
import { UserProgress } from './types';
import { BookOpen, AlertCircle } from 'lucide-react';

const STORAGE_KEY = 'langgraph-training-progress';

function App() {
  const [progress, setProgress] = useState<UserProgress>({
    completedTopics: [],
    currentTopic: 1,
    apiKey: ''
  });

  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isNotebookModalOpen, setIsNotebookModalOpen] = useState(false);
  const [selectedNotebook, setSelectedNotebook] = useState({ filename: '', title: '' });
  const [showWelcome, setShowWelcome] = useState(true);

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
        return {
          ...prev,
          completedTopics: prev.completedTopics.filter(id => id !== topicId)
        };
      } else {
        // Add to completed
        return {
          ...prev,
          completedTopics: [...prev.completedTopics, topicId],
          currentTopic: topicId < topics.length ? topicId + 1 : topicId
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
        apiKey: progress.apiKey
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        hasApiKey={!!progress.apiKey}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
      />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {showWelcome && (
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-8 mb-6">
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
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}

        {!progress.apiKey && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">API Key Required</h3>
                <p className="text-yellow-700 text-sm">
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

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Learning Path</h2>
          {progress.completedTopics.length > 0 && (
            <button
              onClick={handleResetProgress}
              className="text-sm text-red-600 hover:text-red-700 underline"
            >
              Reset Progress
            </button>
          )}
        </div>

        <div className="space-y-4">
          {topics.map((topic) => (
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

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-3">How to Use This Training</h3>
          <ol className="space-y-3 text-gray-700">
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

export default App;
