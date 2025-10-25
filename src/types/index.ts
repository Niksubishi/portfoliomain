export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string[];
  image: string;
  repo: string;
  live: string;
  imageCaption: string;
  technologies: string[];
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}