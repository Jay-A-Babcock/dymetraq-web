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
          <p><a href="/dataset/matrix">Field Matrix</a></p>
          <h2 id="APIs">APIs</h2>
          <div className="coming-soon">
            Soon, users will be able to gain access to DymeTraq's datasets via
            APIs. Stay-tuned!
          </div>
          <h2 id="dataset_dashboard">Dataset Dashboard</h2>
          <div className="coming-soon">
            <p>
              A comprehensive dataset dashboard is in the works. This dashboard
              will show charts and graphs summarizing key aspects of the
              dataset.
            </p>
                        <a href="/img/visuals/authorities_by_state.png" target="_blank">
              <img
                src={"/img/visuals/authorities_by_state.png"}
                alt="Authorities by State"
                style={{ maxWidth: "25%", marginTop: "20px" }}
              />
            </a>
            <a href="/img/visuals/contracts_by_state.png" target="_blank">
              <img
                src={"/img/visuals/contracts_by_state.png"}
                alt="Contracts by State"
                style={{ maxWidth: "25%", marginTop: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
