// https://www.countryflags.com
import Image from 'next/image';

export default function Flag({ country }) {
  switch (country) {
    case 'Pakistan':
      return Pakistan();
    case 'World':
      return World();
  }
}

const Pakistan = () => {
  return <img src='/assets/icons/pak.svg' className='inline h-16 mb-3'/>;
};

const World = () => {
  return <img src='/assets/icons/world.svg' className='inline h-16'/>;
};
