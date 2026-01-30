import { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';

interface BookmarkButtonProps {
  topicId: number;
  onToggle?: (topicId: number, isBookmarked: boolean) => void;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({ topicId, onToggle }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('langgraph-bookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(topicId));
  }, [topicId]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    const bookmarks = JSON.parse(localStorage.getItem('langgraph-bookmarks') || '[]');

    let newBookmarks: number[];
    if (isBookmarked) {
      newBookmarks = bookmarks.filter((id: number) => id !== topicId);
    } else {
      newBookmarks = [...bookmarks, topicId];
    }

    localStorage.setItem('langgraph-bookmarks', JSON.stringify(newBookmarks));
    setIsBookmarked(!isBookmarked);
    onToggle?.(topicId, !isBookmarked);
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`p-2 rounded-lg transition-all ${
        isBookmarked
          ? 'text-yellow-500 hover:text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
      }`}
      title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
    </button>
  );
};
