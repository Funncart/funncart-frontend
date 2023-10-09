import Image from 'next/image';

export default function Testimonial({ message, name, media }) {
  return (
    <div className="flex bg-white h-[200px] rounded-2xl">
      <div className="py-10 pl-6 pr-8 border-r border-[#D4D4D4] w-[300px]">
        <p className="overflow-hidden text-sm text-body max-h-20">{message}</p>
        <p className="pt-6 text-sm font-medium text-heading">{name}</p>
      </div>
      <div className="p-8 w-[160px] flex items-center justify-center">
        <img
          src={media[0].original_url}
          alt={name}
          className="w-20 h-20 rounded-full"
          draggable={false}
        />
      </div>
    </div>
  );
}
