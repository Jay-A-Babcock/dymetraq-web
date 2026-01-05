// app/dataset/page.tsx
export default function DatasetPage() {
  return (
    <>
      <div className="detail-layout">
        <div className="detail-content">
          <h1>DymeTraq's Dataset</h1>
          <p>
            This page will explain more about dataset contents, how it was
            compiled and curated, and alternative access methods.
          </p>
          <h2>Dataset Contents</h2>
          <p>
            DymeTraq's dataset includes comprehensive information on government
            contracts, authorities, and entities. The data is sourced from
            various public records and government databases to ensure accuracy
            and reliability.
          </p>
          <h2 id="APIs">APIs</h2>
          <div className="coming-soon">
            Soon, users will be able to gain access to DymeTraq's datasets via
            APIs. Stay-tuned!
          </div>
        </div>
      </div>
    </>
  );
}
