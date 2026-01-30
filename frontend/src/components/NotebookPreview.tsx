import { useState, useEffect } from 'react';
import { X, Code, BookOpen, ChevronRight } from 'lucide-react';

interface NotebookPreviewProps {
  notebookPath: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onOpenNotebook: () => void;
}

export const NotebookPreview: React.FC<NotebookPreviewProps> = ({
  notebookPath,
  title,
  isOpen,
  onClose,
  onOpenNotebook
}) => {
  const [preview, setPreview] = useState<{ cells: number; markdown: number; code: number } | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Simulate notebook preview (in real app, would fetch and parse notebook)
      setPreview({
        cells: 15 + Math.floor(Math.random() * 10),
        markdown: 8 + Math.floor(Math.random() * 5),
        code: 7 + Math.floor(Math.random() * 5),
      });
    }
  }, [isOpen, notebookPath]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="text-primary" size={24} />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Notebook Preview</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          {preview && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{preview.cells}</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">Total Cells</div>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">{preview.markdown}</div>
                <div className="text-sm text-green-700 dark:text-green-300">Markdown Cells</div>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{preview.code}</div>
                <div className="text-sm text-purple-700 dark:text-purple-300">Code Cells</div>
              </div>
            </div>
          )}

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Code className="text-primary" size={18} />
                <h3 className="font-semibold text-gray-900 dark:text-white">What's Inside</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Interactive code examples using Claude AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Step-by-step explanations and theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Hands-on exercises to test your knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Visual diagrams and flow charts</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">📝 Before You Start</h3>
              <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-400">
                <li>• Make sure Jupyter is running</li>
                <li>• Your Anthropic API key should be set</li>
                <li>• Expected completion time: varies by topic</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
            >
              Close Preview
            </button>
            <button
              onClick={onOpenNotebook}
              className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium flex items-center justify-center gap-2"
            >
              <BookOpen size={20} />
              Open Notebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
