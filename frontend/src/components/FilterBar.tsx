import { Filter } from 'lucide-react';

export interface FilterOptions {
  difficulty: string[];
  showCompleted: boolean;
  showInProgress: boolean;
  showLocked: boolean;
}

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const toggleDifficulty = (difficulty: string) => {
    const newDifficulties = filters.difficulty.includes(difficulty)
      ? filters.difficulty.filter(d => d !== difficulty)
      : [...filters.difficulty, difficulty];
    onFilterChange({ ...filters, difficulty: newDifficulties });
  };

  const getDifficultyButtonStyles = (difficulty: string) => {
    const isActive = filters.difficulty.includes(difficulty);
    const baseStyles = 'px-3 py-1.5 rounded-lg text-sm font-medium transition border';

    switch (difficulty) {
      case 'Beginner':
        return `${baseStyles} ${isActive
          ? 'bg-green-500 text-white border-green-600'
          : 'bg-white dark:bg-gray-800 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700 hover:bg-green-50 dark:hover:bg-gray-700'}`;
      case 'Intermediate':
        return `${baseStyles} ${isActive
          ? 'bg-yellow-500 text-white border-yellow-600'
          : 'bg-white dark:bg-gray-800 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-gray-700'}`;
      case 'Advanced':
        return `${baseStyles} ${isActive
          ? 'bg-red-500 text-white border-red-600'
          : 'bg-white dark:bg-gray-800 text-red-700 dark:text-red-400 border-red-300 dark:border-red-700 hover:bg-red-50 dark:hover:bg-gray-700'}`;
      default:
        return baseStyles;
    }
  };

  const getStatusButtonStyles = (isActive: boolean) => {
    return `px-3 py-1.5 rounded-lg text-sm font-medium transition border ${
      isActive
        ? 'bg-primary text-white border-blue-600'
        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
    }`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Filter size={18} className="text-gray-600 dark:text-gray-400" />
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Filters</h3>
      </div>

      <div className="space-y-4">
        {/* Difficulty Filter */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Difficulty Level
          </label>
          <div className="flex flex-wrap gap-2">
            {difficulties.map(difficulty => (
              <button
                key={difficulty}
                onClick={() => toggleDifficulty(difficulty)}
                className={getDifficultyButtonStyles(difficulty)}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Status
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange({ ...filters, showCompleted: !filters.showCompleted })}
              className={getStatusButtonStyles(filters.showCompleted)}
            >
              Completed
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, showInProgress: !filters.showInProgress })}
              className={getStatusButtonStyles(filters.showInProgress)}
            >
              In Progress
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, showLocked: !filters.showLocked })}
              className={getStatusButtonStyles(filters.showLocked)}
            >
              Locked
            </button>
          </div>
        </div>
      </div>

      {/* Reset button */}
      <button
        onClick={() =>
          onFilterChange({
            difficulty: [],
            showCompleted: true,
            showInProgress: true,
            showLocked: true,
          })
        }
        className="mt-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 underline"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterBar;
