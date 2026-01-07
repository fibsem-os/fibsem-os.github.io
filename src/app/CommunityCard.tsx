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
      <div className="w-5 h-5 flex-shrink-0 rounded bg-slate-200 flex items-center justify-center">
        <span className="text-[8px] text-slate-400 font-medium">
          {alt.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-5 h-5 flex-shrink-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="20px"
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
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-primary-blue/30 transition-all h-full">
      <div className="flex flex-col h-full">
        {/* Profile Image and Name */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 ring-2 ring-slate-100">
            <ProfileImage src={image} name={name} />
          </div>

          <div className="flex-1 min-w-0">
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
          </div>
        </div>

        {/* Organization/Affiliations */}
        <div className="mt-auto space-y-2">
          {/* Simple org/location display for core contributors */}
          {org && !affiliations && (
            <>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs text-slate-500 truncate">{org}</span>
              </div>
              {location && (
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs text-slate-400 truncate">{location}</span>
                </div>
              )}
            </>
          )}
          
          {/* Affiliations display for community members */}
          {affiliations && affiliations.map((affiliation, index) => (
            <div key={index} className="flex items-center gap-2 min-w-0">
              {affiliation.logo && (
                <AffiliationLogo src={affiliation.logo} alt={affiliation.name} />
              )}
              <span className="text-xs text-slate-500 truncate">
                {affiliation.url ? (
                  <Link
                    href={affiliation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-blue transition-colors"
                  >
                    {affiliation.name}
                  </Link>
                ) : (
                  affiliation.name
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}