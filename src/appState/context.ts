import { createContext, useContext } from 'react';

export interface Feed {
  userName: string;
  postedAt: number;
  description: string;
  comments: Array<string>;
  editedAt: number;
  emoji: string;
  image: string;
}

interface AppState {
  user: {
    name?: string;
    feed: Array<Feed>;
  };
  isLoggedIn: boolean;
}

export const AppContext = createContext({} as AppState);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context.user) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
