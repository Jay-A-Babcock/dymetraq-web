// app/page.tsx
export default function HomePage() {
  return (
    <>
      <div className="detail-layout">
        <div className="detail-content">
          <h1>Welcome to DymeTraq's Beta Preview</h1>
          <p>This site will first contain the Municipal Contracts Project.</p>
          <p>
            Currently, the project is collecting information about
            publicly-awarded contracts from around the country.
          </p>
          <img
            src={"/img/visuals/contracts_by_state.png"}
            alt="Contracts by State"
            style={{ maxWidth: "50%", marginTop: "20px" }}
          />
        </div>
      </div>
    </>
  );
}
