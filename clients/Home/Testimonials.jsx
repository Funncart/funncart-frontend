'use client';
import { LeftArrowIcon, RightArrowIcon } from '@/components/Assets/Icons';
import { Testimonial } from '@/components/Cards';
import { Heading } from '@/components/UI';
import { useTestimonials } from '@/lib/hooks/data';
import { useRef, useState } from 'react';

const REVIEWS = [
  {
    customer: 'Hammad Baig',
    feedback:
      'Good material. Satisfied. Thanks for the mini gift of chocolate. That made my day.',
    image: '/assets/images/categories/globe.png',
  },
  {
    customer: 'Hammad Baig',
    feedback:
      'Good material. Satisfied. Thanks for the mini gift of chocolate. That made my day.',
    image: '/assets/images/categories/vintage.png',
  },
  {
    customer: 'Hammad Baig',
    feedback:
      'Good material. Satisfied. Thanks for the mini gift of chocolate. That made my day.',
    image: '/assets/images/categories/table-top.png',
  },
  {
    customer: 'Hammad Baig',
    feedback:
      'Good material. Satisfied. Thanks for the mini gift of chocolate. That made my day.',
    image: '/assets/images/categories/globe.png',
  },
  {
    customer: 'Hammad Baig',
    feedback:
      'Good material. Satisfied. Thanks for the mini gift of chocolate. That made my day.',
    image: '/assets/images/categories/vintage.png',
  },
  {
    customer: 'Hammad Baig',
    feedback:
      'Good material. Satisfied. Thanks for the mini gift of chocolate. That made my day.',
    image: '/assets/images/categories/table-top.png',
  },
];
export default function Testimonials() {
  const scrollRef = useRef(null);
  const [snap, setSnap] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { testimonials: testimonialsData } = useTestimonials();

  return (
    <div className="container bg-gray py-14 rounded-3xl">
      <Heading title="Testimonials" description="Words by our customers" />
      <div
        ref={scrollRef}
        className="px-8 flex gap-4 overflow-x-auto select-none hide-scrollbar shrink-0 md:gap-6 lg:gap-10 "
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
        {testimonialsData?.data?.map((review, index) => (
          <Testimonial key={index} {...review} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-12 mx-auto gap-x-4">
        <button
          onClick={() =>
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
          }
        >
          <LeftArrowIcon fill="inherit" />
        </button>
        <div className="h-6 border border-[#D4D4D4]"></div>
        <button
          onClick={() =>
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
          }
        >
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
}
