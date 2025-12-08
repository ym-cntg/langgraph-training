import React from 'react';
import { Trophy } from 'lucide-react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Trophy className="text-yellow-500" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Your Progress</h2>
        </div>
        <span className="text-lg font-semibold text-primary">
          {completed} / {total} Topics Completed
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-sm text-gray-600 mt-2">
        {percentage === 100 ? (
          <span className="text-green-600 font-semibold">
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
