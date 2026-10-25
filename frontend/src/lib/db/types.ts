export interface Capability {
  title: string;
  description: string;
}
type ProjectDetailsItem = {
  label: string;
};
export type Project = {
  id: string;
  nameID: string;
  title: string;
  challenge: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  gallery: {
    id: string;
    url: string;
    width: number;
    height: number;
  }[];
  details: {
    brief: string;
    year: string;
    industries: ProjectDetailsItem[];
    type: ProjectDetailsItem[];
    roles: ProjectDetailsItem[];
    collaboration: ProjectDetailsItem[];
    preview: string;
  };
};

export type BusinessInfo = {
  legalName: string;
  displayName: string;
  country: string;
  city: string;
  timezone: string;
  isAvailable: null | boolean;
  social_links: {
    displayName: string;
    nameID: string;
    href: string;
    type: string;
  }[];
  cv: {
    alternativeText: string;
    url: string;
  };
  avatar: {
    alternativeText: string;
    url: string;
    width: number;
    height: number;
  };
};

export type QueryOptions = {
  filters?: { column: string; op: "eq" | "neq"; value: string | number }[];
  sort?: { column: string; ascending?: boolean }[];
  limit?: number;
};

export type SocialLink = {
  displayName: string;
  href: string;
  type: string;
};

export type AboutContent = {
  id: string;
  title: string;
  description: string;
  capabilities: Capability[];
  previewProject: {
    id: string;
    title: string;
    image: { url: string; alt?: string };
  } | null;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  industry: string;
  year: number;
};

export type GalleryImage = {
  id: number;
  src: {
    id: number;
    url: string;
    width: number;
    height: number;
    alternativeText: string | null;
  };
};

export type HeroSection = {
  title: string;
  subtitle: string;
  description: string;
  social_link: { href: string };
  cta_text: string;
};

export type Processes = {
  id: string;
  name: string;
  description: string;
  order?: number;
  image: {
    alternativeText?: string;
    width: number;
    height: number;
    url: string;
  };
};
