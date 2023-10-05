// https://www.countryflags.com
import Image from 'next/image';

export default function Flag({ country }) {
  switch (country) {
    case 'Pakistan':
      return Pakistan();
  }
}

const Pakistan = () => {
  return <span>PK</span>;
};
