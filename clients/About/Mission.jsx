import { Stat } from '@/components/Cards';
import Image from 'next/image';

const STATS = [
  {
    title: 'Items Sold',
    value: '300+',
  },
  {
    title: 'Positive Reviews',
    value: '270+',
  },
  {
    title: 'Artists Listed',
    value: '15+',
  },
  {
    title: 'Complaints',
    value: '0',
  },
];

export default function Mission() {
  return (
    <div className="container mt-16 mb-32">
      <div className="flex flex-col items-center pb-20 text-center gap-y-8">
        <Image
          src="/assets/images/aboutus.png"
          height={320}
          width={500}
          alt="about"
        />
        <h1 className="flex flex-wrap items-center justify-center text-5xl font-semibold leading-normal">
          Empowering Pakistani Creators
        </h1>
        <p className="max-w-5xl mx-auto mt-4 text-2xl leading-10 tracking-wide text-gray-500">
          Funncart started when we saw local artists struggling to reach more
          people and boost sales. Our mission? Help artists and art lovers
          connect effortlessly. We&apos;re building a bridge for creativity to
          shine and relationships to bloom.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-10 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <Stat key={index} {...stat} variant="gray" />
        ))}
      </div>
    </div>
  );
}
