import { useState, useEffect } from 'react';
import { Clock, Play, Pause } from 'lucide-react';

interface TimeTrackerProps {
  topicId: number;
  isActive: boolean;
}

interface TimeEntry {
  topicId: number;
  totalSeconds: number;
  sessions: { start: number; end?: number }[];
}

export const TimeTracker: React.FC<TimeTrackerProps> = ({ topicId, isActive }) => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    // Load saved time
    const saved = localStorage.getItem(`time-topic-${topicId}`);
    if (saved) {
      const data: TimeEntry = JSON.parse(saved);
      setTimeSpent(data.totalSeconds);
    }
  }, [topicId]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isTracking && startTime) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTracking, startTime]);

  const toggleTracking = () => {
    if (isTracking) {
      // Stop tracking
      const saved = localStorage.getItem(`time-topic-${topicId}`);
      const data: TimeEntry = saved ? JSON.parse(saved) : { topicId, totalSeconds: 0, sessions: [] };

      const currentSession = data.sessions[data.sessions.length - 1];
      if (currentSession && !currentSession.end) {
        currentSession.end = Date.now();
      }

      localStorage.setItem(`time-topic-${topicId}`, JSON.stringify(data));
      setIsTracking(false);
      setStartTime(null);
    } else {
      // Start tracking
      const saved = localStorage.getItem(`time-topic-${topicId}`);
      const data: TimeEntry = saved ? JSON.parse(saved) : { topicId, totalSeconds: 0, sessions: [] };

      data.sessions.push({ start: Date.now() });
      localStorage.setItem(`time-topic-${topicId}`, JSON.stringify(data));

      setIsTracking(true);
      setStartTime(Date.now());
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  if (!isActive) return null;

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Clock size={16} className="text-gray-500 dark:text-gray-400" />
      <span className="text-sm font-mono text-gray-700 dark:text-gray-300 min-w-[60px]">
        {formatTime(timeSpent)}
      </span>
      <button
        onClick={toggleTracking}
        className={`p-1.5 rounded transition ${
          isTracking
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
        title={isTracking ? 'Pause timer' : 'Start timer'}
      >
        {isTracking ? <Pause size={14} /> : <Play size={14} />}
      </button>
    </div>
  );
};

// Hook to get total time spent across all topics
export const useTimeStats = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [timeByTopic, setTimeByTopic] = useState<Record<number, number>>({});

  useEffect(() => {
    let total = 0;
    const byTopic: Record<number, number> = {};

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('time-topic-')) {
        const data: TimeEntry = JSON.parse(localStorage.getItem(key)!);
        total += data.totalSeconds;
        byTopic[data.topicId] = data.totalSeconds;
      }
    }

    setTotalTime(total);
    setTimeByTopic(byTopic);
  }, []);

  return { totalTime, timeByTopic };
};
