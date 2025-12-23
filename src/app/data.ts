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

export const COMMUNITY_MEMBERS: CommunityMember[] = [
  {
    name: "Sven Klumpe",
    website: "https://github.com/sklumpe",
    image: "/community/sven.jpg", // Example path
    affiliations: [
      { name: "Vienna Biocenter", logo: "/related_orgs/VBC.png" }
    ]
  },
  // Add more members here
];

export const RELATED_PROJECTS: Project[] = [
  { name: "fibsemOS", url: "https://github.com/fibsem-os" },
  { name: "SerialFIB", url: "https://github.com/sklumpe/SerialFIB/tree/dev" },
  { name: "3DCT", url: "https://github.com/hermankhfung/3DCT" },
];