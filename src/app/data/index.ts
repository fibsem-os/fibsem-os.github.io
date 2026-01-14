import { CoreContributor, CommunityMember, Project } from "@/app/types";

export const CORE_CONTRIBUTORS: CoreContributor[] = [

  {
    name: "Patrick Cleeve",
    // title: "OpenFIBSEM Developer",
    org: "OpenFIBSEM",
    location: "Australia",
    website: "https://github.com/patrickcleeve",
    image: "/contributors/patrick_cleeve.jpg",
  },
  {
    name: "Sven Klumpe",
    // title: "Project Lead",
    org: "Vienna Biocenter",
    location: "Austria",
    website: "https://www.imp.ac.at/groups/sven-klumpe",
    image: "/contributors/sven_klumpe.jpg",
  },
  {
    name: "Georg Ramm",
    // title: "Microscopy Specialist",
    org: "Monash University",
    location: "Australia",
    website: "https://research.monash.edu/en/persons/georg-ramm",
    image: "/contributors/georg_ramm.jpg",
  },
  {
    name: "Alex de Marco",
    // title: "Head of Cryo-EM",
    org: "NY Structural Biology Center",
    location: "USA",
    website: "https://nysbc.org/",
    image: "/contributors/alex_de_marco.jpg",
  },
];

export const RELATED_PROJECTS: Project[] = [
  { name: "fibsemOS Organization", url: "https://github.com/fibsem-os" },
  { name: "SerialFIB", url: "https://github.com/sklumpe/SerialFIB/tree/dev" },
  { name: "3DCT", url: "https://github.com/hermankhfung/3DCT" },
  { name: "OpenFIBSEM", url: "https://github.com/openfibsem" },
];
