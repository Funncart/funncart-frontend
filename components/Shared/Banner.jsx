import { useMarquees } from '@/lib/hooks/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const backgroundColor = '#257925';
const color = 'white';
const display = true;

export default function Banner() {
  const { marquees: marqueeData } = useMarquees();

  const texts = [marqueeData?.data.message];

  return (
    <>
      {marqueeData.data.message && (
        <Marquee
          style={{
            backgroundColor: marqueeData.data.background_color,
            color: marqueeData.data.text_color,
          }}
          className="text-sm font-semibold tracking-widest uppercase"
          autoFill={true}
          loop={0}
          speed={90}
          gradient
        >
          {texts.map((text, index) => (
            <div className="flex gap-x-9 pr-9 py-2.5" key={index}>
              <div className="">{text}</div>
              <div className="w-16 border-b-2 border-white"></div>
            </div>
          ))}
        </Marquee>
      )}
    </>
  );
}
