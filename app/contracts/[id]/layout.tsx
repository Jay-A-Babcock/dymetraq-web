// app/contracts/[id]/layout.tsx
export default function ContractDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const extraModules = (
    <>
      <div className="dynamic-module">
        <h4>Contract Details</h4>
        <p>Value, dates, status, etc.</p>
      </div>
      <div className="dynamic-module">
        <h4>Related Entities</h4>
      </div>
      <div className="dynamic-module">
        <h4>Timeline</h4>
      </div>
    </>
  );

  return (
    <div className="detail-layout">
      <div className="detail-content">{children}</div>
      <div className="detail-sidebar">
        <h2>Contract Overview</h2>
        <div className="dynamic-module">
          <h4>Search Tools</h4>
        </div>
        {extraModules}
      </div>
    </div>
  );
}