export default function Feature({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center px-5 py-6 text-center">
      <div className="">{icon}</div>
      <h4 className="my-4 text-xl font-semibold text-heading">{title}</h4>
      <p className="max-w-sm text-sm text-body">{description}</p>
    </div>
  );
}
