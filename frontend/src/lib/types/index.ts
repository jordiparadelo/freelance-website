export interface Project {
  id: string;
  href?: string;
  image: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  title: string;
  details?: {
    brief: string;
    blob: string;
    client: string;
    type: string[];
    industries: string[];
    year: string;
    roles: string[];
    collaboration: string[];
    logo: string;
    preview?: string;
  };
  challenge?: string;
  services?: string[];
  categories?: string[];
  gallery?: Array<{
    url: string;
    alt: string;
    width: number;
    height: number;
  }>;
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export interface Tags {
  id: number;
  label: string;
  group: string[];
}

export interface Capability {
  title: string;
  description: string;
}

import type { StaticImageData } from "next/image";

export interface ProjectDetails {
  brief: string;
  blob: string;
  client: string;
  type: string[];
  industries: string[];
  year: string;
  roles: string[];
  collaboration: string[];
}

export interface StrapiProject {
  id: number;
  documentId: string;
  nameID: string;
  title: string;
  challenge: string;
  image: {
    id: number;
    documentId: string;
    url: string;
    width: number;
    height: number;
  };
  details: {
    id: number;
    brief: string;
    client: string;
    year: string;
    preview: string;
    blob: object;
    type: {
      id: number;
      label: string;
    }[];
    industries: {
      id: number;
      label: string;
    }[];
    collaboration: {
      id: number;
      label: string;
    }[];
    roles: {
      id: number;
      label: string;
    }[];
    logo: Logos[];
  };
}

export interface Logos {
  id: number;
  documentId?: string;
  url: string;
  width: number;
  height: number;
}

export interface ProjectGalleryItem {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  width?: number;
  height?: number;
}

export interface Tags {
  id: number;
  label: string;
  group: string[];
}

export interface Carer {
  title: string;
  company: string;
  role: string;
  description: string;
  duration: string;
  years?: string;
}

export interface BusinessType {
  id: number;
  documentId: string;
  legalName: string;
  displayName: string;
  vatId: string;
  country: string;
  city: string;
  timezone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  social_links: SocialLink[];
  publishedAt: string;
  locale: string;
  cv?: {
    id: number;
    documentId: string;
    url: string;
  };
}

export interface SocialLink {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  href: string;
  displayName: string;
  type: string;
  order: number | null;
  nameID: string | null;
}
