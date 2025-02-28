export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  technologies: string[];
  featured: boolean;
  createdAt: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
} 