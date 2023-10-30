'use client';
import { InstagramIcon } from '@/components/Assets/Icons';
import { Heading } from '@/components/UI';
import { INSTAGRAM_HANDLE } from '@/constants/social';
import { useSocials } from '@/lib/hooks';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function SocialMedia() {
  const scrollRef = useRef(null);
  const [snap, setSnap] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { socials } = useSocials();

  return (
    <div className="container relative pt-12 pb-20 rounded-3xl">
      <Heading title="Social Media" description="Our Social Presence" />
      <div
        ref={scrollRef}
        className="relative flex overflow-x-auto overflow-y-hidden select-none hide-scrollbar shrink-0 md:grid-cols-4 rounded-2xl"
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        onMouseLeave={() => setClicked(false)}
        onTouchStart={() => setSnap(true)}
        onTouchEnd={() => setSnap(false)}
        onMouseMove={(e) => {
          if (snap) {
            scrollRef.current.scrollLeft += e.movementX;
          }
          if (clicked) {
            scrollRef.current.scrollLeft -= e.movementX;
          }
        }}
      >
        {socials?.data?.map((social, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-64 h-64 shrink-0 group"
          >
            <div className="absolute inset-0 flex items-center justify-center transition group-hover:backdrop-saturate-150 group-hover:bg-black/50 bg-black/20">
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="hidden group-hover:block"
              >
                <InstagramIcon fill="white" />
              </a>
            </div>
            <img
              src={social.media[0].original_url}
              width={256}
              height={256}
              alt="Social Media Post"
              className="w-full h-full"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="absolute flex items-center justify-center transform -translate-x-1/2 translate-y-full bottom-60 left-1/2">
        <a
          className="flex items-center px-6 py-4 text-xl font-semibold bg-white rounded-lg shadow-lg jutify-center gap-x-2"
          href={INSTAGRAM_HANDLE}
        >
          <InstagramIcon />
          <span className="text-lg font-medium">Funncartstore</span>
        </a>
      </div>
    </div>
  );
}
