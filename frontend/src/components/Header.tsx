import React from 'react';
import { KeyRound, BookOpen } from 'lucide-react';

interface HeaderProps {
  hasApiKey: boolean;
  onOpenApiKeyModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ hasApiKey, onOpenApiKeyModal }) => {
  return (
    <div className="flex items-center gap-3">
      <BookOpen size={36} className="text-primary dark:text-blue-400" />
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">LangGraph Training</h1>
        <p className="text-gray-600 dark:text-gray-400">Master AI Workflows with Interactive Learning</p>
      </div>
      <button
        onClick={onOpenApiKeyModal}
        className={`
          ml-auto flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition
          ${hasApiKey
            ? 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white'
            : 'bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white animate-pulse'
          }
        `}
      >
        <KeyRound size={20} />
        {hasApiKey ? 'API Key Set' : 'Set API Key'}
      </button>
    </div>
  );
};

export default Header;
