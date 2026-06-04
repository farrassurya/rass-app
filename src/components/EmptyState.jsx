import PanelCard from './PanelCard.jsx';

export default function EmptyState({ icon, title, description, action }) {
  return (
    <PanelCard className="p-12 text-center">
      {icon ? <p className="mb-4 text-4xl">{icon}</p> : null}
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-[#B8C0CC]">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </PanelCard>
  );
}