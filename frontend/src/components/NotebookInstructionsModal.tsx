import { X, Terminal, FileText, CheckCircle } from 'lucide-react';

interface NotebookInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  notebookFilename: string;
  topicTitle: string;
}

const NotebookInstructionsModal = ({
  isOpen,
  onClose,
  notebookFilename,
  topicTitle
}: NotebookInstructionsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FileText className="text-primary" size={24} />
            <h2 className="text-2xl font-bold">Open Notebook</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-lg text-gray-700">
            <strong>{topicTitle}</strong>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Notebook: <code className="bg-gray-100 px-2 py-1 rounded">{notebookFilename}</code>
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <Terminal size={20} />
            How to Open This Notebook
          </h3>
          <ol className="space-y-3 text-blue-800">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <div>
                <p className="font-medium">Open a terminal/command prompt</p>
                <p className="text-sm">Navigate to your project directory</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <div>
                <p className="font-medium">Activate your Python virtual environment:</p>
                <div className="mt-2 space-y-2">
                  <div className="bg-white rounded p-2 font-mono text-sm">
                    <span className="text-green-600"># Mac/Linux:</span><br />
                    source venv/bin/activate
                  </div>
                  <div className="bg-white rounded p-2 font-mono text-sm">
                    <span className="text-green-600"># Windows:</span><br />
                    venv\Scripts\activate
                  </div>
                </div>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <div>
                <p className="font-medium">Start Jupyter Notebook:</p>
                <div className="mt-2 bg-white rounded p-2 font-mono text-sm">
                  jupyter notebook notebooks/{notebookFilename}
                </div>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <div>
                <p className="font-medium">The notebook will open in your browser automatically!</p>
                <p className="text-sm">Start working through the cells with Shift+Enter</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">Alternative: If Jupyter is Already Running</h3>
          <p className="text-gray-700 text-sm mb-2">
            If you already have Jupyter running, simply navigate to this file in the Jupyter file browser:
          </p>
          <div className="bg-white rounded p-2 font-mono text-sm text-gray-800">
            notebooks/{notebookFilename}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle size={20} />
            Tips for Success
          </h3>
          <ul className="space-y-1 text-green-800 text-sm">
            <li>• Run each code cell in order (Shift+Enter)</li>
            <li>• Read the explanations between code cells</li>
            <li>• Complete the exercises at the end</li>
            <li>• Experiment by modifying the code</li>
            <li>• Your API key is already set in the dashboard</li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition font-medium"
          >
            Got it! Let's Start
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          Need help? Check GETTING_STARTED.md or README.md in the project directory
        </div>
      </div>
    </div>
  );
};

export default NotebookInstructionsModal;
