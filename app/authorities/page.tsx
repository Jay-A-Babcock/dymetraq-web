// app/authorities/page.tsx
import states from "@/data/states.json";
import StateCard from "@/components/StateCard";

interface State {
  code: string;
  name: string;
  description?: string;
  authorityCount?: number;
}

export default function AuthoritiesPage() {
  const statesList = states as State[];

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>Contracting Authorities</h1>
        <p>
          Browse contracting authorities by state. Select a state to view its
          authorities and contracts.
        </p>

        <div className="states-grid">
          {statesList.map((state) => (
            <StateCard key={state.code} {...state} />
          ))}
        </div>
      </div>

      <div className="detail-sidebar">
        <h2>Authority Overview</h2>
        <div className="dynamic-module">
          <h4>Quick Navigation</h4>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {statesList.map((state) => (
              <li key={state.code} style={{ marginBottom: "8px" }}>
                <a href={`#${state.code}`}>{state.code}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="dynamic-module">
          <h4>Search Tools</h4>
        </div>
      </div>
    </div>
  );
}