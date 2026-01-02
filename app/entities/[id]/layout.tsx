// app/entities/[id]/layout.tsx
export default function EntityDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const extraModules = (
    <>
      <div className="dynamic-module">
        <h4>Stats</h4>
        <p>Contract counts, totals, etc.</p>
      </div>
      <div className="dynamic-module">
        <h4>Related Authorities</h4>
      </div>
      <div className="dynamic-module">
        <h4>Compliance Flags</h4>
      </div>
    </>
  );

  return (
    <div className="detail-layout">
      <div className="detail-content">{children}</div>
      <div className="detail-sidebar">
        <h2>Entity Overview</h2>
        <div className="dynamic-module">
          <h4>Search Tools</h4>
        </div>
        {extraModules}
      </div>
    </div>
  );
}