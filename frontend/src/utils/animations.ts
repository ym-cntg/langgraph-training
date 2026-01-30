// Animation utilities for consistent animations across the app

export const animations = {
  fadeIn: 'animate-fadeIn',
  slideUp: 'animate-slideUp',
  slideDown: 'animate-slideDown',
  scaleIn: 'animate-scaleIn',
  bounce: 'animate-bounce',
};

export const transitions = {
  default: 'transition-all duration-200 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-100 ease-in-out',
  spring: 'transition-all duration-200 ease-spring',
};

// Tailwind animation classes (add these to tailwind.config.js)
export const tailwindAnimations = {
  animation: {
    fadeIn: 'fadeIn 0.3s ease-in-out',
    slideUp: 'slideUp 0.3s ease-out',
    slideDown: 'slideDown 0.3s ease-out',
    scaleIn: 'scaleIn 0.2s ease-out',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    spin: 'spin 1s linear infinite',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideUp: {
      '0%': { transform: 'translateY(10px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideDown: {
      '0%': { transform: 'translateY(-10px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    scaleIn: {
      '0%': { transform: 'scale(0.95)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
  },
};

// Stagger animation helper
export const staggerChildren = (index: number, baseDelay: number = 50) => {
  return {
    style: {
      animationDelay: `${index * baseDelay}ms`,
    },
  };
};
