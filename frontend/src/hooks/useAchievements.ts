import { useMemo } from 'react';
import { Topic } from '../types';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  category: 'progress' | 'difficulty' | 'streak' | 'special';
}

export const useAchievements = (
  topics: Topic[],
  completedTopics: number[],
  currentStreak: number,
  longestStreak: number
): Achievement[] => {
  return useMemo(() => {
    const achievements: Achievement[] = [];

    const beginnerTopics = topics.filter(t => t.difficulty === 'Beginner');
    const intermediateTopics = topics.filter(t => t.difficulty === 'Intermediate');
    const advancedTopics = topics.filter(t => t.difficulty === 'Advanced');

    const completedBeginnerCount = beginnerTopics.filter(t =>
      completedTopics.includes(t.id)
    ).length;
    const completedIntermediateCount = intermediateTopics.filter(t =>
      completedTopics.includes(t.id)
    ).length;
    const completedAdvancedCount = advancedTopics.filter(t =>
      completedTopics.includes(t.id)
    ).length;

    // First Steps
    achievements.push({
      id: 'first-topic',
      title: 'First Steps',
      description: 'Complete your first topic',
      icon: '🎯',
      unlocked: completedTopics.length >= 1,
      category: 'progress',
    });

    // Getting Started
    achievements.push({
      id: 'three-topics',
      title: 'Getting Started',
      description: 'Complete 3 topics',
      icon: '🚀',
      unlocked: completedTopics.length >= 3,
      category: 'progress',
    });

    // Half Way There
    achievements.push({
      id: 'half-complete',
      title: 'Half Way There',
      description: 'Complete 50% of all topics',
      icon: '⭐',
      unlocked: completedTopics.length >= Math.ceil(topics.length / 2),
      category: 'progress',
    });

    // Almost There
    achievements.push({
      id: 'almost-there',
      title: 'Almost There',
      description: 'Complete 75% of all topics',
      icon: '💫',
      unlocked: completedTopics.length >= Math.ceil(topics.length * 0.75),
      category: 'progress',
    });

    // Master Graduate
    achievements.push({
      id: 'complete-all',
      title: 'Master Graduate',
      description: 'Complete all topics',
      icon: '🏆',
      unlocked: completedTopics.length === topics.length,
      category: 'progress',
    });

    // Beginner Pro
    achievements.push({
      id: 'beginner-master',
      title: 'Beginner Pro',
      description: 'Complete all Beginner topics',
      icon: '🌱',
      unlocked: completedBeginnerCount === beginnerTopics.length && beginnerTopics.length > 0,
      category: 'difficulty',
    });

    // Intermediate Expert
    achievements.push({
      id: 'intermediate-master',
      title: 'Intermediate Expert',
      description: 'Complete all Intermediate topics',
      icon: '🌿',
      unlocked:
        completedIntermediateCount === intermediateTopics.length && intermediateTopics.length > 0,
      category: 'difficulty',
    });

    // Advanced Master
    achievements.push({
      id: 'advanced-master',
      title: 'Advanced Master',
      description: 'Complete all Advanced topics',
      icon: '🌳',
      unlocked: completedAdvancedCount === advancedTopics.length && advancedTopics.length > 0,
      category: 'difficulty',
    });

    // Dedicated Learner
    achievements.push({
      id: 'streak-3',
      title: 'Dedicated Learner',
      description: 'Maintain a 3-day streak',
      icon: '🔥',
      unlocked: currentStreak >= 3 || longestStreak >= 3,
      category: 'streak',
    });

    // Consistency Champion
    achievements.push({
      id: 'streak-7',
      title: 'Consistency Champion',
      description: 'Maintain a 7-day streak',
      icon: '⚡',
      unlocked: currentStreak >= 7 || longestStreak >= 7,
      category: 'streak',
    });

    // Unstoppable
    achievements.push({
      id: 'streak-14',
      title: 'Unstoppable',
      description: 'Maintain a 14-day streak',
      icon: '💥',
      unlocked: currentStreak >= 14 || longestStreak >= 14,
      category: 'streak',
    });

    // Quick Learner
    achievements.push({
      id: 'quick-learner',
      title: 'Quick Learner',
      description: 'Complete 3 topics in one day',
      icon: '⚡',
      unlocked: false, // Would need completion dates tracking per day
      category: 'special',
    });

    // Early Bird
    achievements.push({
      id: 'early-bird',
      title: 'Early Bird',
      description: 'Complete a topic before 8 AM',
      icon: '🌅',
      unlocked: false, // Would need time tracking
      category: 'special',
    });

    // Night Owl
    achievements.push({
      id: 'night-owl',
      title: 'Night Owl',
      description: 'Complete a topic after 10 PM',
      icon: '🦉',
      unlocked: false, // Would need time tracking
      category: 'special',
    });

    return achievements;
  }, [topics, completedTopics, currentStreak, longestStreak]);
};
