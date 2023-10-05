import {
  DiamondIcon,
  MoonIcon,
  PeopleGroupIcon,
} from '@/components/Assets/Icons';
import { Feature } from '@/components/Cards';
import { Heading } from '@/components/UI';

const FEAT = [
  {
    title: 'Promoting Pakistan',
    description:
      'We passionately promote Pakistani culture and art, sharing its beauty with the world.',
    icon: <MoonIcon />,
  },
  {
    title: 'Exquisite Quality',
    description:
      'We offer handicrafts of exceptional quality, meticulously crafted with the finest materials.',
    icon: <DiamondIcon />,
  },
  {
    title: 'Empowering Artisans',
    description:
      'We empower artisans through fair compensation and promotion of their incredible craftsmanship.',
    icon: <PeopleGroupIcon />,
  },
];

export default function Features() {
  return (
    <div className="container">
      <div className="pt-12 pb-20">
        <Heading title="Features" description="Why choose us" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12 lg:gap-18">
          {FEAT.map((item, i) => (
            <Feature key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
