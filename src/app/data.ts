export interface Affiliation {
  name: string;
  logo?: string; // Path to logo image
  url?: string; // Website URL for the institution
}

export interface CommunityMember {
  name: string;
  title?: string;
  website?: string;
  image?: string; // Path to profile image
  affiliations: Affiliation[];
}

export interface Project {
  name: string;
  url: string;
}


export const RELATED_PROJECTS: Project[] = [
  { name: "fibsemOS", url: "https://github.com/fibsem-os" },
  { name: "SerialFIB", url: "https://github.com/sklumpe/SerialFIB/tree/dev" },
  { name: "3DCT", url: "https://github.com/hermankhfung/3DCT" },
];