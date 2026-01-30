import { Download, Award, Share2 } from 'lucide-react';
import { useRef } from 'react';

interface CertificateGeneratorProps {
  userName?: string;
  completionDate: Date;
  topicsCompleted: number;
  totalTopics: number;
}

export const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({
  userName = 'Student',
  completionDate,
  topicsCompleted,
  totalTopics
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const isFullyCompleted = topicsCompleted === totalTopics;

  const downloadCertificate = () => {
    // In a real app, this would generate a PDF
    alert('Certificate download feature - would generate PDF in production');
  };

  const shareCertificate = () => {
    if (navigator.share) {
      navigator.share({
        title: 'LangGraph Training Certificate',
        text: `I completed ${topicsCompleted}/${totalTopics} topics in LangGraph Training!`,
      });
    } else {
      alert('Sharing not supported on this device');
    }
  };

  if (!isFullyCompleted) {
    return (
      <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-700">
        <div className="text-center">
          <Award className="mx-auto mb-4 text-purple-400" size={48} />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Certificate Available Soon!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Complete all {totalTopics} topics to unlock your certificate of completion.
          </p>
          <div className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full font-semibold">
            {topicsCompleted} / {totalTopics} Topics Completed
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        ref={certificateRef}
        className="p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg border-4 border-double border-primary shadow-2xl"
      >
        <div className="text-center space-y-6">
          <div className="inline-block p-4 bg-primary/10 rounded-full">
            <Award className="text-primary" size={64} />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Certificate of Completion
            </h2>
            <p className="text-gray-600 dark:text-gray-400">LangGraph Training Program</p>
          </div>

          <div className="py-6 border-y-2 border-gray-300 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">This certifies that</p>
            <h3 className="text-3xl font-bold text-primary mb-3">{userName}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              has successfully completed all {totalTopics} topics of the<br />
              comprehensive LangGraph training program
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{topicsCompleted}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Topics Mastered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {completionDate.toLocaleDateString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Completion Date</div>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Certificate ID: LG-{Date.now().toString(36).toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={downloadCertificate}
          className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Download Certificate
        </button>
        <button
          onClick={shareCertificate}
          className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2"
        >
          <Share2 size={20} />
          Share Achievement
        </button>
      </div>
    </div>
  );
};
