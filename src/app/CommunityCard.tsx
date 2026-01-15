"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Affiliation {
  name: string;
  logo?: string;
  url?: string;
}

interface CommunityCardProps {
  name: string;
  title?: string;
  org?: string;
  location?: string;
  image?: string;
  website?: string;
  affiliations?: Affiliation[];
}

function ProfileImage({ src, name }: { src?: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-full flex items-center justify-center text-lg font-bold text-slate-400 bg-slate-100">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      className="object-cover"
      sizes="64px"
      onError={() => setHasError(true)}
    />
  );
}

function AffiliationLogo({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="h-6 w-6 flex-shrink-0 rounded bg-slate-100 flex items-center justify-center" title={alt}>
        <span className="text-[9px] text-slate-400 font-medium">
          {alt.charAt(0)}
        </span>
      </div>
    );
  }

  // Increased size from h-7 to h-10 (40px)
  return (
    <div className="relative h-10 w-auto min-w-[1.5rem] flex-shrink-0 group" title={alt}>
      <img 
        src={src} 
        alt={alt}
        className="h-full w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
        onError={() => setHasError(true)} 
      />
    </div>
  );
}

export default function CommunityCard({ 
  name, 
  title, 
  org, 
  location, 
  image, 
  website,
  affiliations 
}: CommunityCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-primary-blue/30 transition-all h-full flex flex-col">
        {/* Top Section: Avatar + Name + Logos */}
        <div className="flex items-start gap-4 mb-2">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 ring-2 ring-slate-100">
            <ProfileImage src={image} name={name} />
          </div>

          <div className="flex-1 min-w-0 flex flex-col h-full justify-center">
            {website ? (
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3 className="font-semibold text-dark-navy group-hover:text-primary-blue transition-colors truncate font-[family-name:var(--font-ibm-plex)]">
                  {name}
                </h3>
              </Link>
            ) : (
              <h3 className="font-semibold text-dark-navy truncate font-[family-name:var(--font-ibm-plex)]">
                {name}
              </h3>
            )}

            {title && (
              <p className="text-sm text-slate-500 mt-0.5 truncate">{title}</p>
            )}

            {/* Affiliations Logos Row (Under Name) */}
            {affiliations && affiliations.length > 0 && (
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                {affiliations.map((affiliation, index) => (
                    affiliation.logo ? (
                      <AffiliationLogo key={index} src={affiliation.logo} alt={affiliation.name} />
                    ) : null
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Spacer to push pills to bottom */}
        <div className="flex-grow" />

        {/* Bottom Section: Location & Org Pills */}
        <div className="pt-3 flex flex-wrap gap-2 items-center mt-2">
          {/* Location Pill */}
          {location && (
             <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
               <span className="text-[11px] font-medium text-slate-500">{location}</span>
             </div>
          )}

          {/* Org Pill (Fallback if org is text-only and no affiliation images exist) */}
          {org && (!affiliations || affiliations.length === 0) && (
             <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-400">{org}</span>
             </div>
          )}
        </div>
    </div>
  );
}