
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from '@/components/ui/toggle';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  const handleToggle = () => {
    toggleTheme();
    toast.success(`${theme === 'dark' ? 'Light' : 'Dark'} mode activated!`, {
      description: `Switched to ${theme === 'dark' ? 'light' : 'dark'} theme for better visibility.`,
      duration: 2000,
      icon: theme === 'dark' ? '☀️' : '🌙',
    });
  };

  return (
    <Toggle 
      aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
      pressed={theme === 'dark'}
      onPressedChange={handleToggle}
      className="p-2 rounded-md hover:bg-accent transition-colors duration-200 relative group focus-ring"
      role="switch"
      aria-checked={theme === 'dark'}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          rotate: theme === 'dark' ? [0, 15, 0] : [0, 360, 0] 
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        {theme === 'dark' ? 
          <Moon size={20} className="text-primary transition-all duration-300 group-hover:text-blue-300" aria-hidden="true" /> : 
          <Sun size={20} className="text-navy transition-all duration-300 group-hover:text-amber-500" aria-hidden="true" />
        }
      </motion.div>
      {/* Radial glow effect */}
      <span className={`absolute inset-0 rounded-md transition-opacity duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-radial from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100' 
          : 'bg-gradient-radial from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100'
      }`} aria-hidden="true"></span>
    </Toggle>
  );
};

export default ThemeToggle;
