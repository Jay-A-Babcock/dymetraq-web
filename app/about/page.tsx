// app/page.tsx
export default function HomePage() {
  return (
    <>
      <div className="detail-layout">
        <div className="detail-content">
          <h1>About DymeTraq</h1>
          <p>DymeTraq was founded in 2026 by <a href="https://jay-a-babcock.github.io/portfolio/" target="_blank">Jay Babcock</a>.</p>
          <p>
            Our mission is to increase transparency and accountability in public
            spending through accessible data and tools.
          </p>
          <p>
            We believe that informed citizens can drive better governance and
            more equitable resource allocation.
          </p>
          <h2 id="team">Our Team</h2>
          <div className="coming-soon" style={{ marginTop: "20px" }}>
            Coming soon
          </div>
          <h2 id="history">History</h2>
          <div className="coming-soon" style={{ marginTop: "20px" }}>
            Coming soon
          </div>
          <h2 id="current_projects">Current Projects</h2>
          <div className="coming-soon" style={{ marginTop: "20px" }}>
            Coming soon
          </div>
        </div>
      </div>
    </>
  );
}
