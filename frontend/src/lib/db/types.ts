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
  id: 10;
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

export type StrapiFetchOptions = {
  tags?: string[];
  revalidate?: number;
};

export type StrapiResponse<T> = {
  data: T;
};

export type StrapiFilterOperator = "$eq" | "$in" | "$containsi" | "$ne";

export type StrapiFilter = {
  field: string;
  operator: StrapiFilterOperator;
  value: string | number | Array<string | number>;
};

export type StrapiSort = {
  field: string;
  order?: "asc" | "desc";
};

export type StrapiPagination = {
  page?: number;
  pageSize?: number;
  start?: number;
  limit?: number;
};

export type StrapiQueryOptions = {
  filters?: StrapiFilter[];
  sort?: StrapiSort[];
  pagination?: StrapiPagination;
  // Optional escape hatch for endpoint-specific params
  extraParams?: Record<string, string | number | boolean>;
};

export type StrapiFetchConfig = {
  tags?: string[];
  revalidate?: number;
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
