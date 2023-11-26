'use client';

import { Stat } from '@/components/Cards';
import { Heading } from '@/components/UI';

const STATS = [
  {
    title: 'Sellers',
    value: '5+',
  },
  {
    title: 'Positive Reviews',
    value: '47+',
  },
  {
    title: 'Items Sold',
    value: '100+',
  },
  {
    title: 'Complaints',
    value: '0',
  },
];

export default function Statistics() {
  return (
    <div className="container px-4 bg-gray py-14 md:px-8 lg:px-14 xl:px-24 rounded-3xl">
      <Heading title="Statistics" description="Loved by customers" />
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-10 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <Stat key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}
