"use client";

import Image from "next/image";

type AuthorCardProps = {
  name: string;
  avatar: string;
  bio: string;
  socials?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
};

export default function AuthorCard({ name, avatar, bio, socials }: AuthorCardProps) {
  return (
    <div
      className="
        w-full p-6 rounded-2xl mt-12
        bg-[var(--bg-elevated)]/60 backdrop-blur-xl
        border border-[var(--border)]
        shadow-sm flex flex-col sm:flex-row gap-6
      "
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={avatar}
          alt={name}
          width={90}
          height={90}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-[var(--text)]">{name}</h3>
        <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
          {bio}
        </p>

        {/* Socials */}
        {socials && (
          <div className="flex items-center gap-4 mt-4">
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                className="hover:text-[var(--brand)] transition"
              >
                <img src="/icons/twitter.svg" className="w-5 h-5" />
              </a>
            )}

            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                className="hover:text-[var(--brand)] transition"
              >
                <img src="/icons/instagram.svg" className="w-5 h-5" />
              </a>
            )}

            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                className="hover:text-[var(--brand)] transition"
              >
                <img src="/icons/linkedin.svg" className="w-5 h-5" />
              </a>
            )}

            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                className="hover:text-[var(--brand)] transition"
              >
                <img src="/icons/github.svg" className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
