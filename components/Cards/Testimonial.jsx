import Image from 'next/image';

export default function Testimonial({ message, name, media }) {
  return (
    <div className="flex bg-white  rounded-2xl">
      <div className="py-10 pl-6 pr-8 border-r border-[rgb(234,234,234)] w-[400px]">
        <p className="overflow-hidden text-[11px] text-body max-h-20">{message}</p>
        <p className="pt-6 text-sm font-medium text-heading">{name}</p>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={media[0].original_url}
          alt={name}
          className="w-60 h-40 rounded-md"
          draggable={false}
        />
      </div>
    </div>
  );
}
