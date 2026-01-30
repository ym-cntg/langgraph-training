import { Topic } from '../types';
import { CheckCircle2, Circle, Lock, Clock, BookOpen, Check } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  isCompleted: boolean;
  isCurrent: boolean;
  isLocked: boolean;
  onClick: () => void;
  onMarkComplete: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  isCompleted,
  isCurrent,
  isLocked,
  onClick,
  onMarkComplete
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case 'Advanced':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200';
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't trigger onClick if clicking on the mark complete button
    if ((e.target as HTMLElement).closest('.mark-complete-btn')) {
      return;
    }
    if (!isLocked) {
      onClick();
    }
  };

  const handleMarkComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMarkComplete();
  };

  return (
    <div
      onClick={handleCardClick}
      className={`
        relative p-6 rounded-lg border-2 transition-all duration-200
        ${isLocked ? 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-800' : 'cursor-pointer hover:shadow-lg'}
        ${isCurrent ? 'border-primary bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}
        ${isCompleted ? 'border-green-500 dark:border-green-600 bg-green-50 dark:bg-green-900/20' : ''}
      `}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          {isLocked ? (
            <Lock className="text-gray-400 dark:text-gray-500" size={24} />
          ) : isCompleted ? (
            <CheckCircle2 className="text-green-600 dark:text-green-400" size={24} />
          ) : (
            <Circle className="text-gray-400 dark:text-gray-500" size={24} />
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {topic.id}. {topic.title}
              </h3>
              <div className="flex gap-2 mb-3">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(topic.difficulty)}`}>
                  {topic.difficulty}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center gap-1">
                  <Clock size={12} />
                  {topic.duration}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4">{topic.description}</p>

          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
              <BookOpen size={16} />
              Learning Objectives:
            </h4>
            <ul className="space-y-1">
              {topic.learningObjectives.map((objective, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-primary dark:text-blue-400 mt-1">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {topic.prerequisites && topic.prerequisites.length > 0 && (
            <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              Prerequisites: Topic {topic.prerequisites.join(', ')}
            </div>
          )}

          {!isLocked && !isCompleted && (
            <div className="mt-4 flex gap-2">
              <div className="flex-1 px-3 py-2 bg-primary dark:bg-blue-600 text-white rounded-md text-center font-medium">
                {isCurrent ? 'Continue Learning' : 'Start Topic'}
              </div>
              <button
                onClick={handleMarkComplete}
                className="mark-complete-btn px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-800 transition font-medium flex items-center gap-2"
                title="Mark as complete"
              >
                <Check size={18} />
                Complete
              </button>
            </div>
          )}

          {isCompleted && (
            <div className="mt-4 flex items-center justify-between">
              <div className="flex-1 px-3 py-2 bg-green-600 dark:bg-green-700 text-white rounded-md text-center font-medium">
                Completed ✓
              </div>
              <button
                onClick={handleMarkComplete}
                className="mark-complete-btn ml-2 px-3 py-2 bg-gray-400 dark:bg-gray-600 text-white rounded-md hover:bg-gray-500 dark:hover:bg-gray-700 transition text-sm"
                title="Mark as incomplete"
              >
                Undo
              </button>
            </div>
          )}

          {isLocked && (
            <div className="mt-4 px-3 py-2 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-center font-medium">
              Complete Prerequisites First
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
