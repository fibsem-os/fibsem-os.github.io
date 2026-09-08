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
      <div className="w-full h-full flex items-center justify-center text-lg font-bold text-slate-400 dark:text-neutral-500 bg-slate-100 dark:bg-neutral-800">
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
      <div className="h-6 w-6 flex-shrink-0 rounded bg-slate-100 dark:bg-neutral-800 flex items-center justify-center" title={alt}>
        <span className="text-[9px] text-slate-400 dark:text-neutral-500 font-medium">
          {alt.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-10 w-auto min-w-[1.5rem] flex-shrink-0" title={alt}>
      <img 
        src={src} 
        alt={alt}
        className="h-full w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 dark:invert dark:group-hover:invert-0 transition-all duration-300"
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
    <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-neutral-800 rounded-lg p-4 hover:border-gray-400 dark:hover:border-neutral-500 transition-colors h-full group">
      <div className="flex items-start gap-4">
        {/* Avatar Section */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-100 dark:bg-neutral-800 flex-shrink-0 ring-2 ring-slate-100 dark:ring-neutral-800">
          <ProfileImage src={image} name={name} />
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0">
          
          {/* Header Row: Name/Title (Left) vs Pills (Right) */}
          <div className="flex justify-between items-start gap-2">
            
            {/* Left: Name & Title */}
            <div className="min-w-0 flex-1">
              {website ? (
                <Link
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:underline underline-offset-4 decoration-gray-300 dark:decoration-neutral-600 truncate">
                    {name}
                  </h3>
                </Link>
              ) : (
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                  {name}
                </h3>
              )}

              {title && (
                <p className="text-sm text-slate-500 dark:text-neutral-400 mt-0.5 truncate">{title}</p>
              )}
            </div>

            {/* Right: Pills Stack */}
            <div className="flex flex-col items-end gap-1.5 shrink-0 ml-1">
              {location && (
                <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 dark:bg-neutral-800 border border-slate-200">
                  <span className="text-[10px] font-medium text-slate-500 dark:text-neutral-400 leading-none">{location}</span>
                </div>
              )}
              {org && (!affiliations || affiliations.length === 0) && (
                <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 dark:text-neutral-500 leading-none max-w-[100px] truncate">{org}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Row: Affiliation Logos */}
          {affiliations && affiliations.length > 0 && (
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
              {affiliations.map((affiliation, index) => (
                affiliation.logo ? (
                  <AffiliationLogo key={index} src={affiliation.logo} alt={affiliation.name} />
                ) : null
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}