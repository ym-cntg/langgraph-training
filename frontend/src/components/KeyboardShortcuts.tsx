import { useEffect } from 'react';
import { X, Keyboard } from 'lucide-react';

interface KeyboardShortcutsProps {
  onClose: () => void;
}

const shortcuts = [
  { key: '?', description: 'Show keyboard shortcuts' },
  { key: '/', description: 'Focus search' },
  { key: 'n', description: 'Next topic' },
  { key: 'p', description: 'Previous topic' },
  { key: 'm', description: 'Mark current topic complete' },
  { key: 'd', description: 'Toggle dark mode' },
  { key: 's', description: 'Show statistics' },
  { key: 'r', description: 'Reset progress' },
  { key: 'Esc', description: 'Close modals' },
  { key: '1-9', description: 'Jump to topic' },
];

export const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Keyboard className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Keyboard Shortcuts</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            {shortcuts.map((shortcut) => (
              <div
                key={shortcut.key}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <span className="text-gray-700 dark:text-gray-300">{shortcut.description}</span>
                <kbd className="px-3 py-1.5 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm">
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Tip:</strong> Press <kbd className="px-2 py-1 text-xs bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700 rounded">?</kbd> anytime to view this help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook for keyboard shortcuts
export const useKeyboardShortcuts = (callbacks: {
  onSearch?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onMarkComplete?: () => void;
  onToggleDarkMode?: () => void;
  onShowStats?: () => void;
  onShowShortcuts?: () => void;
  onReset?: () => void;
  onJumpToTopic?: (topicId: number) => void;
}) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case '?':
          e.preventDefault();
          callbacks.onShowShortcuts?.();
          break;
        case '/':
          e.preventDefault();
          callbacks.onSearch?.();
          break;
        case 'n':
          e.preventDefault();
          callbacks.onNext?.();
          break;
        case 'p':
          e.preventDefault();
          callbacks.onPrevious?.();
          break;
        case 'm':
          e.preventDefault();
          callbacks.onMarkComplete?.();
          break;
        case 'd':
          e.preventDefault();
          callbacks.onToggleDarkMode?.();
          break;
        case 's':
          e.preventDefault();
          callbacks.onShowStats?.();
          break;
        case 'r':
          if (e.ctrlKey || e.metaKey) return; // Allow browser refresh
          e.preventDefault();
          callbacks.onReset?.();
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          e.preventDefault();
          callbacks.onJumpToTopic?.(parseInt(e.key));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [callbacks]);
};
