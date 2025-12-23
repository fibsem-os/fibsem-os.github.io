export interface Affiliation {
  name: string;
  logo?: string;
  url?: string;
}

export interface CommunityMember {
  name: string;
  title?: string;
  website?: string;
  image?: string;
  affiliations: Affiliation[];
}

export interface CoreContributor {
  name: string;
  org: string;
  location: string;
  title?: string;
  website?: string;
  image?: string;
}

export interface Project {
  name: string;
  url: string;
}