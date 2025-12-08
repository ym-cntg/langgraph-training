import React from 'react';
import { KeyRound, BookOpen } from 'lucide-react';

interface HeaderProps {
  hasApiKey: boolean;
  onOpenApiKeyModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ hasApiKey, onOpenApiKeyModal }) => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen size={36} />
            <div>
              <h1 className="text-3xl font-bold">LangGraph Training</h1>
              <p className="text-blue-100">Master AI Workflows with Interactive Learning</p>
            </div>
          </div>

          <button
            onClick={onOpenApiKeyModal}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition
              ${hasApiKey
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-yellow-500 hover:bg-yellow-600 animate-pulse'
              }
            `}
          >
            <KeyRound size={20} />
            {hasApiKey ? 'API Key Set' : 'Set API Key'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
