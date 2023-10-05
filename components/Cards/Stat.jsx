export default function Stat({ title, value, variant }) {
  return (
    <div className={`py-6 text-center rounded-lg bg-${variant ?? 'white'}`}>
      <h4 className="text-3xl font-bold">{value}</h4>
      <p className="text-lg">{title}</p>
    </div>
  );
}
