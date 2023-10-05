export default function Heading({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center pb-14">
      <h1 className="text-sm font-medium text-center uppercase text-body">
        {title}
      </h1>
      <p className="max-w-2xl pt-2 mx-auto text-4xl font-semibold leading-10 tracking-wide text-center text-gray-600 text-heading">
        {description}
      </p>
    </div>
  );
}
