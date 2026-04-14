import type { StaticImageData } from "next/image";

interface Image {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

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

export interface Project {
  id: string;
  href: string;
  image: Image;
  title: string;
  description: string;
  link?: string;
  github?: string;
  technologies: string[];
  featured: boolean;
  details: ProjectDetails;
  challenge: string;
  services: string[];
  preview: string;
  categories: string[];
  gallery: Image[];
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
