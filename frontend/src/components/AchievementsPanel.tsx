import { Award, Lock } from 'lucide-react';
import { Achievement } from '../hooks/useAchievements';

interface AchievementsPanelProps {
  achievements: Achievement[];
}

export const AchievementsPanel: React.FC<AchievementsPanelProps> = ({ achievements }) => {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  const categoryNames = {
    progress: 'Progress Milestones',
    difficulty: 'Difficulty Masters',
    streak: 'Consistency Achievements',
    special: 'Special Badges',
  };

  const groupedAchievements = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.category]) {
      acc[achievement.category] = [];
    }
    acc[achievement.category].push(achievement);
    return acc;
  }, {} as Record<string, Achievement[]>);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Award className="text-yellow-500" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Achievements</h2>
        </div>
        <div className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full">
          {unlockedCount} / {totalCount} Unlocked
        </div>
      </div>

      {Object.entries(groupedAchievements).map(([category, categoryAchievements]) => (
        <div key={category} className="mb-6 last:mb-0">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            {categoryNames[category as keyof typeof categoryNames]}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {categoryAchievements.map(achievement => (
              <div
                key={achievement.id}
                className={`
                  relative rounded-lg p-4 border-2 transition-all duration-200
                  ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 border-yellow-400 dark:border-yellow-600 shadow-md hover:shadow-lg'
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 opacity-60'
                  }
                `}
              >
                <div className="flex items-start gap-3">
                  <div className={`text-3xl ${!achievement.unlocked && 'grayscale opacity-50'}`}>
                    {achievement.unlocked ? achievement.icon : <Lock size={24} className="text-gray-400" />}
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-bold mb-1 ${
                        achievement.unlocked
                          ? 'text-gray-900 dark:text-gray-100'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {achievement.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        achievement.unlocked
                          ? 'text-gray-700 dark:text-gray-300'
                          : 'text-gray-500 dark:text-gray-500'
                      }`}
                    >
                      {achievement.description}
                    </p>
                    {achievement.unlocked && achievement.unlockedDate && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Unlocked: {new Date(achievement.unlockedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                {achievement.unlocked && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      ✓
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Achievement Progress
          </span>
          <span className="text-sm font-semibold text-primary dark:text-blue-400">
            {Math.round((unlockedCount / totalCount) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

