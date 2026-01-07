"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RELATED_PROJECTS } from "@/app/data";
import { CORE_CONTRIBUTORS } from "@/app/data/index";
import CommunityCard from "./CommunityCard";
import communityMembers from "@/app/data/community.json";

const CONTENT = {
  brand: "fibsemOS",
  logo: "/prelim_FibsemOS_square.png",

  nav: ["Documentation", "Downloads", "Hardware", "Publications", "License"],

  socials: {
    github: "https://github.com/fibsem-os",
    slack: "#",
    email: "mailto:contact@fibsemos.org",
  },

  hero: {
    title: "Unified control software for",
    highlight: "FIB-SEM",
    titleEnd: "microscopy",
    description:
      "Open-source platform unifying microscope drivers, automating complex workflows, and enabling reproducible cryo-electron tomography sample preparation.",
    primaryButton: "Get Started",
    secondaryButton: "Documentation",
    deepwikiButton: "Deepwiki",
  },

  architecture: {
    title: "Architecture",
    diagramImage: "/diagram.png",
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
        title: "Napari-based UI",
        desc: "Modern interface built on the napari ecosystem.",
      },
    ],
  },

  hardware: {
    title: "Ecosystem",
    vendors: ["Thermo Fisher Scientific", "ZEISS", "TESCAN", "Delmic"],
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
      Resources: ["Documentation", "Downloads"],
      Community: ["GitHub", "Discussions"],
      Legal: ["License", "Publications"],
    },
    copyright: "© 2025 fibsemOS Contributors. Open source under MIT license.",
  },
};

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const SlackIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
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

  // Combine core contributors and community members
  const allCommunityMembers = [
    ...CORE_CONTRIBUTORS.map(contributor => ({
      name: contributor.name,
      title: contributor.title,
      org: contributor.org,
      location: contributor.location,
      image: contributor.image,
      website: contributor.website,
    })),
    ...communityMembers
  ];

  return (
    <main className="min-h-screen bg-cream text-dark-navy">
      <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src={CONTENT.logo}
              alt={CONTENT.brand}
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-xl font-bold text-primary-blue font-[family-name:var(--font-ibm-plex)]">
              {CONTENT.brand}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {CONTENT.nav.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-500 hover:text-primary-blue transition-colors font-medium"
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-200">
              <a
                href={CONTENT.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-blue transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={CONTENT.socials.slack}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-blue transition-colors"
              >
                <SlackIcon />
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
          <div className="md:hidden bg-cream border-t border-gray-200 px-4 py-2">
            {CONTENT.nav.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-sm text-slate-600 hover:text-primary-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex gap-4 py-3 border-t border-gray-100 mt-2">
              <a href={CONTENT.socials.github} className="text-slate-400">
                <GithubIcon />
              </a>
              <a href={CONTENT.socials.slack} className="text-slate-400">
                <SlackIcon />
              </a>
              <a href={CONTENT.socials.email} className="text-slate-400">
                <MailIcon />
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-dark-navy font-[family-name:var(--font-ibm-plex)]">
            {CONTENT.hero.title}{" "}
            <span className="text-primary-blue font-bold">
              {CONTENT.hero.highlight}
            </span>{" "}
            {CONTENT.hero.titleEnd}
          </h1>
          <p className="text-slate-500 text-base mb-6 max-w-2xl">
            {CONTENT.hero.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="border-2 border-dark-navy text-dark-navy hover:bg-dark-navy hover:text-cream px-5 py-2 rounded-md font-medium transition-colors text-sm font-[family-name:var(--font-ibm-plex)]">
              {CONTENT.hero.primaryButton}
            </button>
            <button className="border border-slate-300 text-slate-600 hover:border-dark-navy hover:text-dark-navy px-5 py-2 rounded-md font-medium transition-colors text-sm font-[family-name:var(--font-ibm-plex)]">
              {CONTENT.hero.secondaryButton}
            </button>
            <a
              href="https://deepwiki.com/fibsem-os/fibsem-os"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-blue/10 border border-primary-blue/30 text-primary-blue hover:bg-primary-blue hover:text-white px-5 py-2 rounded-md font-medium transition-colors text-sm font-[family-name:var(--font-ibm-plex)]"
            >
              <DeepwikiIcon />
              {CONTENT.hero.deepwikiButton}
            </a>
          </div>
        </div>
      </section>

      <section id="architecture" className="py-10 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-primary-blue mb-6 font-[family-name:var(--font-ibm-plex)]">
            {CONTENT.architecture.title}
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="relative w-full h-56 md:h-72">
              <Image
                src={CONTENT.architecture.diagramImage}
                alt="Architecture Diagram"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 896px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-slate-300">[Architecture Diagram]</div>';
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CONTENT.architecture.features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-blue/40 hover:shadow-sm transition-all"
              >
                <h3 className="font-medium text-dark-navy mb-1 text-sm font-[family-name:var(--font-ibm-plex)]">{f.title}</h3>
                <p className="text-xs text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Community Section */}
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

      <section id="hardware" className="py-10 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-dark-navy mb-6 font-[family-name:var(--font-ibm-plex)]">
            {CONTENT.hardware.title}
          </h2>

          <div className="mb-6">
            <p className="text-xs text-slate-400 uppercase tracking-wide mb-3 font-medium">Supported Hardware</p>
            <div className="flex flex-wrap gap-2">
              {CONTENT.hardware.vendors.map((vendor) => (
                <div
                  key={vendor}
                  className="border border-slate-200 bg-white text-slate-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  {vendor}
                </div>
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

      <section className="py-10 px-4 bg-white">
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
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-primary-blue font-bold mb-2 font-[family-name:var(--font-ibm-plex)]">
              {CONTENT.brand}
            </h3>
            <p className="text-sm text-slate-500">{CONTENT.footer.description}</p>
            <div className="flex gap-3 mt-3">
              <a
                href={CONTENT.socials.github}
                className="text-slate-400 hover:text-primary-blue transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={CONTENT.socials.slack}
                className="text-slate-400 hover:text-primary-blue transition-colors"
              >
                <SlackIcon />
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
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-primary-blue">
                      {link}
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
