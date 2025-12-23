"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { COMMUNITY_MEMBERS, RELATED_PROJECTS } from "./data";

const CONTENT = {
  brand: "fibsemOS",
  logo: "/prelim_FibsemOS_square.png",

  nav: [
    "Overview",
    "Features",
    "Documentation",
    "Downloads",
    "Demos",
    "Hardware",
    "Community",
    "Contributors",
    "Developers",
    "Publications",
    "License",
  ],

  hero: {
    title: "Unified control software for",
    highlight: "FIB-SEM",
    titleEnd: "microscopy",
    description:
      "Open-source platform unifying microscope drivers, automating complex workflows, and enabling reproducible cryo-electron tomography sample preparation and volume electron microscopy.",
    primaryButton: "Get Started",
    secondaryButton: "Documentation",
  },

  architecture: {
    title: "Architecture Overview",
    diagramPlaceholder: "[Architecture Diagram Placeholder]",
    pillars: [
      { title: "Unified Drivers", desc: "Support for Thermo Fisher, ZEISS, TESCAN" },
      { title: "Automated Workflows", desc: "Waffle milling, on-grid lamella, 3D correlation" },
      { title: "Open Source", desc: "Community-driven development and extensibility" },
      { title: "Friendly User Interface", desc: "Modern Python-based user interface" },
    ],
  },

  features: {
    title: "Features",
    subtitle: "Everything you need for modern cryo-FIB-SEM workflows",
    items: [
      {
        title: "Unify Existing Microscope Drivers",
        desc: "Single API to control instruments from all major manufacturers including Thermo Fisher Scientific, ZEISS, and TESCAN.",
      },
      {
        title: "Automate Advanced Workflows",
        desc: "Built-in support for on-grid lamella, waffle milling, and user-defined workflows.",
      },
      {
        title: "Intuitive 3D Correlation",
        desc: "Correlate fluorescence and electron microscopy data for targeted sample preparation.",
      },
      {
        title: "Integrate Light Microscopes",
        desc: "Control in-chamber fluorescence microscopes alongside FIB-SEM for correlative workflows.",
      },
      {
        title: "Experiment Data Management",
        desc: "Automatic organization and metadata tracking for reproducible science.",
      },
      {
        title: "Napari-based UI",
        desc: "Modern, extensible interface built on the napari ecosystem for visualization and analysis.",
      },
    ],
  },

  contributors: {
    title: "Contributors",
    subtitle: "The core team behind fibsemOS",
    people: [
      { name: "Sven Klumpe", org: "Vienna Biocenter", location: "Austria" },
      { name: "Patrick Cleeve", org: "OpenFIBSEM", location: "Australia" },
      { name: "Georg Ramm", org: "Monash University", location: "Australia" },
      { name: "Alex de Marco", org: "NY Structural Biology Center", location: "USA" },
    ],
  },

  hardware: {
    title: "Supported Hardware",
    vendors: ["Thermo Fisher Scientific", "ZEISS", "TESCAN", "Delmic"],
  },

  partners: {
    title: "Partner Organizations",
    orgs: [
      { name: "Vienna Biocenter", logo: "/related_orgs/VBC.png" },
      { name: "IMBA", logo: "/related_orgs/IMBA.png" },
      { name: "IMP", logo: "/related_orgs/IMP.png" },
      { name: "Monash University", logo: "/related_orgs/Monash.svg" },
      { name: "CZ Biohub", logo: "/related_orgs/cz_biohub.png" },
    ],
  },

  footer: {
    description: "Open-source control software for FIB-SEM microscopy.",
    sections: {
      Resources: ["Documentation", "Downloads", "Demos"],
      Community: ["GitHub", "Discussions", "Contributors"],
      Legal: ["License", "Publications"],
    },
    copyright: "© 2025 fibsemOS Contributors. Open source under MIT license.",
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-cream text-dark-navy">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={CONTENT.logo}
              alt={CONTENT.brand}
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-lg font-bold text-primary-blue">{CONTENT.brand}</span>
          </Link>

          <div className="hidden lg:flex items-center gap-5 ml-8">
            {CONTENT.nav.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-dark-navy/60 hover:text-primary-blue transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden text-dark-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream border-t border-gray-200 px-4 py-2">
            {CONTENT.nav.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-sm text-dark-navy/70 hover:text-primary-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark-navy">
            {CONTENT.hero.title}{" "}
            <span className="text-primary-blue">{CONTENT.hero.highlight}</span>{" "}
            {CONTENT.hero.titleEnd}
          </h1>
          <p className="text-dark-navy/60 text-lg mb-8 max-w-2xl mx-auto">
            {CONTENT.hero.description}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="border-2 border-dark-navy text-dark-navy hover:bg-dark-navy hover:text-cream px-6 py-2.5 rounded-md font-medium transition-colors">
              {CONTENT.hero.primaryButton}
            </button>
            <button className="border border-dark-navy/30 text-dark-navy/70 hover:border-dark-navy hover:text-dark-navy px-6 py-2.5 rounded-md font-medium transition-colors">
              {CONTENT.hero.secondaryButton}
            </button>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-12 px-4 bg-light-blue/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary-blue text-center mb-8">
            {CONTENT.architecture.title}
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg h-64 flex items-center justify-center mb-8">
            <span className="text-dark-navy/30">{CONTENT.architecture.diagramPlaceholder}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CONTENT.architecture.pillars.map((p) => (
              <div key={p.title} className="text-center">
                <div className="w-2 h-2 bg-primary-blue rounded-full mx-auto mb-2" />
                <h3 className="font-medium text-dark-navy mb-1">{p.title}</h3>
                <p className="text-xs text-dark-navy/50">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-2 text-dark-navy">
            {CONTENT.features.title}
          </h2>
          <p className="text-dark-navy/50 text-center mb-8">{CONTENT.features.subtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT.features.items.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-primary-blue/50 transition-colors"
              >
                <div className="w-8 h-8 border border-primary-blue/30 rounded mb-3" />
                <h3 className="font-medium text-dark-navy mb-2">{f.title}</h3>
                <p className="text-sm text-dark-navy/50">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-dark-navy text-center mb-2">Community</h2>
          <p className="text-dark-navy/50 text-center mb-10">Our growing global community of researchers and developers.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_MEMBERS.map((member) => (
              <div key={member.name} className="flex flex-col items-center p-6 border border-gray-100 rounded-xl bg-cream/20 hover:shadow-sm transition-shadow">
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-100 border-2 border-primary-blue/10">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl text-dark-navy/20 font-bold">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-dark-navy hover:text-primary-blue transition-colors mb-2"
                >
                  {member.name}
                </a>
                <div className="flex flex-col items-center gap-1">
                  {member.affiliations.map((aff, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {aff.logo && (
                        <Image src={aff.logo} alt="" width={14} height={14} className="grayscale opacity-60" />
                      )}
                      <span className="text-xs text-dark-navy/60 font-medium">{aff.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section id="contributors" className="py-12 px-4 bg-light-blue/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary-blue text-center mb-2">
            {CONTENT.contributors.title}
          </h2>
          <p className="text-dark-navy/50 text-center mb-8">{CONTENT.contributors.subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CONTENT.contributors.people.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center"
              >
                <h3 className="font-medium text-dark-navy">{c.name}</h3>
                <p className="text-sm text-primary-blue">Contributor</p>
                <p className="text-xs text-dark-navy/50">{c.org}</p>
                <p className="text-xs text-dark-navy/30">{c.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Hardware */}
      <section id="hardware" className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-dark-navy">{CONTENT.hardware.title}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CONTENT.hardware.vendors.map((vendor) => (
              <div
                key={vendor}
                className="border border-gray-300 text-dark-navy px-6 py-3 rounded-md font-medium hover:border-primary-blue transition-colors"
              >
                {vendor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 px-4 bg-light-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-dark-navy">Related Projects</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {RELATED_PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-blue/40 text-primary-blue px-5 py-2 rounded-md hover:bg-primary-blue hover:text-cream transition-colors cursor-pointer"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8 text-dark-navy">
            {CONTENT.partners.title}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {CONTENT.partners.orgs.map((org) => (
              <div key={org.name} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={140}
                  height={70}
                  className="object-contain h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary-blue font-bold mb-2">{CONTENT.brand}</h3>
            <p className="text-sm text-dark-navy/50">{CONTENT.footer.description}</p>
          </div>

          {Object.entries(CONTENT.footer.sections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium text-dark-navy mb-2">{title}</h4>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-dark-navy/50 hover:text-primary-blue">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-gray-100 text-center text-sm text-dark-navy/30">
          {CONTENT.footer.copyright}
        </div>
      </footer>
    </main>
  );
}
