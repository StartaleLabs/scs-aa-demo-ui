export function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="sectionWrapper">
      <div className="sectionTitle">{title}</div>
      <div className="sectionContent">{children}</div>
    </div>
  );
}
