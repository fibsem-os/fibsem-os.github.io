"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RELATED_PROJECTS } from "@/app/data";
import CommunityCard from "./CommunityCard";
import communityMembers from "@/app/data/community.json";

const CONTENT = {
  brand: "fibsemOS",

  nav: [
    { name: "Hardware", url: "#hardware", type: "scroll" },
    { name: "Publications", url: "#publications", type: "scroll" },
    { name: "Documentation", url: "https://deepwiki.com/fibsem-os/fibsem-os", type: "external" },
    { name: "Get Started", url: "https://github.com/fibsem-os/fibsem-os", type: "external" }
  ],

  socials: {
    github: "https://github.com/fibsem-os",
    email: "mailto:contact@fibsemos.org",
  },

  hero: {
    title: "Unified control software for",
    highlight: "FIB-SEM",
    titleEnd: "microscopy",
    description:
      "Open-source platform unifying microscope drivers, automating complex workflows, and enabling reproducible cryo-electron tomography sample preparation.",
  },

  architecture: {
    title: "",
    diagramImage: "/Banner_3500x1500_v3.png",
    features: [
      {
        title: "Unified Drivers",
        desc: "Single API for Thermo Fisher, ZEISS, and TESCAN instruments.",
      },
      {
        title: "Automated Workflows",
        desc: "Built-in support for on-grid lamella, waffle milling, and custom workflows.",
      },
      {
        title: "3D Correlation",
        desc: "Correlate fluorescence and electron microscopy data for targeted prep.",
      },
      {
        title: "Light Microscope Integration",
        desc: "Control in-chamber fluorescence microscopes for correlative workflows.",
      },
      {
        title: "Data Management",
        desc: "Automatic organization and metadata tracking for reproducible science.",
      },
      {
        title: "User Friendly UI",
        desc: "Modern interface tailored to the imaging ecosystem.",
      },
    ],
  },

  // ... (hardware, publications, partners, footer content remains unchanged)
  hardware: {
    title: "Ecosystem",
    vendors: [
      { name: "Thermo Fisher Scientific", url: "https://www.thermofisher.com/at/en/home/electron-microscopy/products/software-em-3d-vis/autoscript-4-software.html" },
      { name: "ZEISS", url: "https://www.zeiss.com/metrology/en/software/zeiss-inspect/features/python-interface.html" },
      { name: "TESCAN", url: "https://tescan.com/product-portfolio/fib-sem" },
      { name: "Delmic", url: "https://www.delmic.com/en/" },
    ],
  },

  publications: {
    title: "Related Publications",
    list: [
      {
        title: "Reduction of SEM charging artefacts in native cryogenic biological samples",
        journal: "Nature Communications",
        year: "2025",
        url: "https://www.nature.com/articles/s41467-025-60545-3"
      },
      {
        title: "Mind the corner: Fillets in cryo-FIB lamella preparation to minimise sample loss",
        journal: "Journal of Structural Biology",
        year: "2025",
        url: "https://doi.org/10.1016/j.jsb.2025.108249"
      },
      {
        title: "Cryo-plasma FIB/SEM volume imaging of biological specimens",
        journal: "eLife",
        year: "2023",
        url: "https://doi.org/10.7554/eLife.83623"
      },
      {
        title: "OpenFIBSEM: A universal API for FIBSEM control",
        journal: "Journal of Structural Biology",
        year: "2023",
        url: "https://doi.org/10.1016/j.jsb.2023.107967"
      },
      {
        title: "SerialFIB: A modular platform for automated cryo-FIB workflows",
        journal: "eLife",
        year: "2021",
        url: "https://elifesciences.org/articles/70506"
      },
      {
        title: "Automated cryo-lamella preparation for high-throughput in-situ structural biology",
        journal: "Journal of Structural Biology",
        year: "2020",
        url: "https://doi.org/10.1016/j.jsb.2020.107488"
      },
      {
        title: "Site-Specific Cryo-focused Ion Beam Sample Preparation Guided by 3D Correlative Microscopy",
        journal: "Biophysical Journal",
        year: "2016",
        url: "https://doi.org/10.1016/j.bpj.2015.10.053"
      },
    ]
  },

  partners: {
    title: "Partner Organizations",
    orgs: [
      { name: "Monash University", logo: "/related_orgs/Monash.svg" },
      { name: "Biohub", logo: "/related_orgs/biohub.webp" },
      { name: "Vienna Biocenter", logo: "/related_orgs/VBC.png" },
      { name: "IMBA", logo: "/related_orgs/IMBA.png" },
      { name: "IMP", logo: "/related_orgs/IMP.png" },
    ],
  },

  footer: {
    description: "Open-source control software for FIB-SEM microscopy.",
    sections: {
      Resources: [
        { name: "Documentation", url: "https://deepwiki.com/fibsem-os/fibsem-os" },
        { name: "Downloads", url: "https://github.com/fibsem-os/fibsem-os/releases" }
      ],
      Community: [
        { name: "GitHub", url: "https://github.com/fibsem-os" },
        { name: "Discussions", url: "https://github.com/fibsem-os/fibsem-os/issues" }
      ],
      Legal: [
        { name: "License", url: "https://github.com/fibsem-os/fibsem-os/blob/main/LICENSE" }
      ]
    },
    copyright: "© 2025 fibsemOS Contributors. Open source under MIT license.",
  },
};

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DeepwikiIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allCommunityMembers = [
    ...communityMembers
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br  via-orange-100/50 to-blue-100/50 text-dark-navy">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-8">
            <span className="text-xl font-bold text-primary-blue font-[family-name:var(--font-ibm-plex)]">
              {CONTENT.brand}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-8">
            {CONTENT.nav.map((item) => (
              item.type === "scroll" ? (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-sm text-slate-500 hover:text-primary-blue transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-primary-blue transition-colors font-medium"
                >
                  {item.name}
                </a>
              )
            ))}

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <a
                href={CONTENT.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-blue transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={CONTENT.socials.email}
                className="text-slate-400 hover:text-primary-blue transition-colors"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <button
            className="md:hidden text-dark-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-t border-gray-200 px-4 py-2 shadow-lg">
            {CONTENT.nav.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.type === "external" ? "_blank" : undefined}
                rel={item.type === "external" ? "noopener noreferrer" : undefined}
                className="block py-2 text-sm text-slate-600 hover:text-primary-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Text Section: Tightened top padding and left-aligned */}
      <section className="pt-10 pb-2 px-4 md:text-left">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-md md:text-2xl font-semibold mb-3 text-dark-navy font-[family-name:var(--font-ibm-plex)] tracking-tight">
            {CONTENT.hero.title}{" "}
            <span className="text-primary-blue font-bold">
              {CONTENT.hero.highlight}
            </span>{" "}
            {CONTENT.hero.titleEnd}
          </h3>
          <p className="text-slate-500 text-md mb-4 max-w-2xl leading-relaxed">
            {CONTENT.hero.description}
          </p>
        </div>
      </section>

      {/* Architecture/Image Section: Merged flow with negative margins */}
      <section id="architecture" className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Image Container with Blur Overlay */}
          <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-200">
            <div className="w-full">
              <Image
                src={CONTENT.architecture.diagramImage}
                alt="Architecture Diagram"
                width={3500}
                height={1500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
                priority
              />
            </div>
            {/* Bottom Blur Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/90 via-white/40 to-transparent backdrop-blur-[2px] pointer-events-none" />
          </div>

          {/* Feature Grid: "Flying" over the image with negative margin */}
          <div className="relative z-10 -mt-24 px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT.architecture.features.map((f) => (
              <div
                key={f.title}
                className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-5 shadow-xl hover:border-primary-blue/40 transition-all"
              >
                <h3 className="font-semibold text-dark-navy mb-1.5 text-sm font-[family-name:var(--font-ibm-plex)]">{f.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-dark-navy mb-8 font-[family-name:var(--font-ibm-plex)]">
            Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCommunityMembers.map((member, index) => (
              <CommunityCard key={index} {...member} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="https://github.com/fibsem-os"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-primary-blue hover:text-dark-navy font-medium font-[family-name:var(--font-ibm-plex)]"
            >
              Get involved →
            </Link>
          </div>
        </div>
      </section>

      <section id="hardware" className="py-10 px-4 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-dark-navy mb-6 font-[family-name:var(--font-ibm-plex)]">
            {CONTENT.hardware.title}
          </h2>

          <div className="mb-6">
            <p className="text-xs text-slate-400 uppercase tracking-wide mb-3 font-medium">Supported Hardware</p>
            <div className="flex flex-wrap gap-2">
              {CONTENT.hardware.vendors.map((vendor) => (
                <a
                  key={vendor.name}
                  href={vendor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-200 bg-white text-slate-700 hover:text-primary-blue hover:border-primary-blue/30 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {vendor.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide mb-3 font-medium">Related Projects</p>
            <div className="flex flex-wrap gap-2">
              {RELATED_PROJECTS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary-blue/30 text-primary-blue px-4 py-2 rounded-md text-sm hover:bg-primary-blue hover:text-white transition-colors font-medium"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-dark-navy mb-6 font-[family-name:var(--font-ibm-plex)]">
            {CONTENT.publications.title}
          </h2>
          <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] gap-x-6 gap-y-3 items-baseline">
            {CONTENT.publications.list.map((pub, idx) => (
              <div key={idx} className="contents group">
                <div className="text-sm font-mono text-slate-400 tabular-nums">
                  {pub.year}
                </div>

                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-dark-navy group-hover:text-primary-blue transition-colors font-[family-name:var(--font-ibm-plex)] leading-snug"
                >
                  {pub.title}
                  <span className="sm:hidden block text-xs text-slate-400 italic font-normal mt-0.5">
                    {pub.journal}
                  </span>
                </a>

                <div className="hidden sm:block text-sm text-slate-500 italic text-right whitespace-nowrap">
                  {pub.journal}
                </div>

                <div className="col-span-full border-b border-gray-100 sm:hidden my-2 last:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-6 text-dark-navy font-[family-name:var(--font-ibm-plex)]">
            {CONTENT.partners.title}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {CONTENT.partners.orgs.map((org) => (
              <div
                key={org.name}
                className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all"
              >
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={120}
                  height={60}
                  className="object-contain h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 px-4 bg-white/80">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-primary-blue font-bold mb-2 font-[family-name:var(--font-ibm-plex)]">
              {CONTENT.brand}
            </h3>
            <p className="text-sm text-slate-500">{CONTENT.footer.description}</p>
            <div className="flex gap-3 mt-3">
              <a
                href={CONTENT.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-blue transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={CONTENT.socials.email}
                className="text-slate-400 hover:text-primary-blue transition-colors"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          {Object.entries(CONTENT.footer.sections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium text-dark-navy mb-2 text-sm font-[family-name:var(--font-ibm-plex)]">{title}</h4>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-primary-blue"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-gray-100 text-center text-xs text-slate-400">
          {CONTENT.footer.copyright}
        </div>
      </footer>
    </main>
  );
}
