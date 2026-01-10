// app/page.tsx
export default function HomePage() {
  return (
    <>
      <div className="detail-layout">
        <div className="detail-content">
          <h1>Welcome to DymeTraq's Beta Preview</h1>
          <h2>Current Projects</h2>
          <p>
            Tracing the lineage of spending on Municipal Contracts is DymeTraq's
            first project.
          </p>
          <h2>Future Projects</h2>
          <p>
            DymeTraq has plans to expand its tracing capabilities to include:
            <ul>
              <li>
                <b>Police Accountability</b>
              </li>
              <p>
                Tracing reports and statistics related to police actions to
                ensure transparency and accountability in law enforcement.
              </p>
              <li>
                <b>School Accountability</b>
              </li>
              <p>
                Tracking funding and performance metrics of public schools to
                promote educational equity and effectiveness.
              </p>
            </ul>
          </p>
          <h2>Products</h2>
          <ul>
            <li>
              Basic navigation and metadata about contracting authorities, the
              contracts they issue and the business entities receiving those
              contracts will be free fo charge.
            </li>
            <li>
              Curated reports with detailed information, including static plots,
              will be available for a nominal fee, generated on-demand and
              available for PDF download. Interactive visuals are in the works!
            </li>
            <li className="coming-soon">
              Premium services will include APIs for retrieval of data in bulk
              and access into the dataset's complete interactive visual library
              allowing for cross-referenced analyses.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
