import React from 'react';
import { Trophy } from 'lucide-react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Trophy className="text-yellow-500 dark:text-yellow-400" size={24} />
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Your Progress</h2>
        </div>
        <span className="text-lg font-semibold text-primary dark:text-blue-400">
          {completed} / {total} Topics Completed
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary to-secondary dark:from-blue-500 dark:to-purple-600 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {percentage === 100 ? (
          <span className="text-green-600 dark:text-green-400 font-semibold">
            Congratulations! You've completed the entire training!
          </span>
        ) : (
          `${Math.round(percentage)}% Complete - Keep up the great work!`
        )}
      </p>
    </div>
  );
};

export default ProgressBar;
