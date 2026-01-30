import { useMemo } from 'react';
import { Topic } from '../types';

export interface Stats {
  totalProgress: number;
  completedCount: number;
  totalCount: number;
  timeSpent: number;
  difficultyBreakdown: {
    Beginner: { completed: number; total: number };
    Intermediate: { completed: number; total: number };
    Advanced: { completed: number; total: number };
  };
  currentStreak: number;
  longestStreak: number;
  completionTimeline: Array<{ date: string; count: number }>;
}

export const useStats = (
  topics: Topic[],
  completedTopics: number[],
  completionDates?: Record<number, string>
): Stats => {
  return useMemo(() => {
    const totalCount = topics.length;
    const completedCount = completedTopics.length;
    const totalProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    // Calculate time spent (estimate based on durations)
    const timeSpent = topics.reduce((total, topic) => {
      if (completedTopics.includes(topic.id)) {
        const minutes = parseInt(topic.duration);
        return total + (isNaN(minutes) ? 0 : minutes);
      }
      return total;
    }, 0);

    // Calculate difficulty breakdown
    const difficultyBreakdown = topics.reduce(
      (acc, topic) => {
        const difficulty = topic.difficulty;
        acc[difficulty].total++;
        if (completedTopics.includes(topic.id)) {
          acc[difficulty].completed++;
        }
        return acc;
      },
      {
        Beginner: { completed: 0, total: 0 },
        Intermediate: { completed: 0, total: 0 },
        Advanced: { completed: 0, total: 0 },
      }
    );

    // Calculate streaks
    const { currentStreak, longestStreak } = calculateStreaks(completionDates);

    // Calculate completion timeline
    const completionTimeline = calculateTimeline(completionDates);

    return {
      totalProgress,
      completedCount,
      totalCount,
      timeSpent,
      difficultyBreakdown,
      currentStreak,
      longestStreak,
      completionTimeline,
    };
  }, [topics, completedTopics, completionDates]);
};

function calculateStreaks(completionDates?: Record<number, string>): {
  currentStreak: number;
  longestStreak: number;
} {
  if (!completionDates || Object.keys(completionDates).length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  const dates = Object.values(completionDates)
    .map(d => new Date(d).toDateString())
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  const uniqueDates = [...new Set(dates)];

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 1;

  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  // Check if streak is still active (completed today or yesterday)
  if (uniqueDates[uniqueDates.length - 1] === today || uniqueDates[uniqueDates.length - 1] === yesterday) {
    currentStreak = 1;
    for (let i = uniqueDates.length - 2; i >= 0; i--) {
      const current = new Date(uniqueDates[i]);
      const next = new Date(uniqueDates[i + 1]);
      const diffDays = Math.floor((next.getTime() - current.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        currentStreak++;
      } else {
        break;
      }
    }
  }

  // Calculate longest streak
  for (let i = 1; i < uniqueDates.length; i++) {
    const current = new Date(uniqueDates[i - 1]);
    const next = new Date(uniqueDates[i]);
    const diffDays = Math.floor((next.getTime() - current.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 1;
    }
  }

  longestStreak = Math.max(longestStreak, tempStreak);

  return { currentStreak, longestStreak };
}

function calculateTimeline(completionDates?: Record<number, string>): Array<{ date: string; count: number }> {
  if (!completionDates || Object.keys(completionDates).length === 0) {
    return [];
  }

  const dateCounts: Record<string, number> = {};

  Object.values(completionDates).forEach(dateStr => {
    const date = new Date(dateStr).toISOString().split('T')[0];
    dateCounts[date] = (dateCounts[date] || 0) + 1;
  });

  return Object.entries(dateCounts)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(-30); // Last 30 days
}
