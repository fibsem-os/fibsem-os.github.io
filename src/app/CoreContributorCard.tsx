"use client";

import Image from "next/image";
import Link from "next/link";
import { CoreContributor } from "@/app/types";
import { useState } from "react";

interface CoreContributorCardProps {
  contributor: CoreContributor;
}

function ProfileImage({ src, name }: { src?: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-slate-400 bg-slate-100">
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
      sizes="80px"
      onError={() => setHasError(true)}
    />
  );
}

export default function CoreContributorCard({ contributor }: CoreContributorCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-primary-blue/30 transition-all text-center">
      <div className="relative w-20 h-20 rounded-full overflow-hidden bg-slate-100 mx-auto mb-3 ring-2 ring-slate-100">
        <ProfileImage src={contributor.image} name={contributor.name} />
      </div>
      
      <h3 className="font-semibold text-dark-navy mb-1 font-[family-name:var(--font-ibm-plex)]">
        {contributor.website ? (
          <Link
            href={contributor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-blue transition-colors"
          >
            {contributor.name}
          </Link>
        ) : (
          contributor.name
        )}
      </h3>
      
      {contributor.title && (
        <p className="text-sm text-slate-500 mb-1">{contributor.title}</p>
      )}
      
      <p className="text-sm text-slate-600 mb-1">{contributor.org}</p>
      <p className="text-xs text-slate-400">{contributor.location}</p>
    </div>
  );
}