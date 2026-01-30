import { BarChart3, Clock, Trophy, Zap, TrendingUp, Target, Calendar } from 'lucide-react';
import { Stats } from '../hooks/useStats';

interface StatsPanelProps {
  stats: Stats;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ stats }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="text-primary" size={28} />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Progress Statistics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.totalProgress}%</span>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Overall Progress</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            {stats.completedCount} of {stats.totalCount} topics
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="text-green-600 dark:text-green-400" size={24} />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completedCount}</span>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Topics Completed</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Keep going!</div>
        </div>

        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-2">
            <Zap className="text-purple-600 dark:text-purple-400" size={24} />
            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.currentStreak}</span>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Current Streak</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            {stats.currentStreak > 0 ? 'Days in a row!' : 'Start your streak!'}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between mb-2">
            <Clock className="text-orange-600 dark:text-orange-400" size={24} />
            <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.timeSpent}</span>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Time Spent</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Minutes learning</div>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Target size={20} />
          Difficulty Progress
        </h3>
        <div className="space-y-3">
          {Object.entries(stats.difficultyBreakdown).map(([difficulty, data]) => {
            const percentage = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
            const color =
              difficulty === 'Beginner' ? 'bg-green-500' :
              difficulty === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500';

            return (
              <div key={difficulty}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{difficulty}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {data.completed}/{data.total} ({percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`${color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Longest Streak */}
      {stats.longestStreak > 0 && (
        <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <div className="flex items-center gap-3">
            <Calendar className="text-amber-600 dark:text-amber-400" size={24} />
            <div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Longest Streak</div>
              <div className="text-lg font-bold text-amber-600 dark:text-amber-400">
                {stats.longestStreak} {stats.longestStreak === 1 ? 'day' : 'days'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
