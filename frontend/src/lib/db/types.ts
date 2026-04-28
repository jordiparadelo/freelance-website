type ProjectDetailsItem = {
  label: string;
};
export type Project = {
  id: string;
  nameID: string;
  title: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
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
