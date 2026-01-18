// app/authorities/page.tsx
import states from "@/data/states.json";
import StateCard from "@/components/StateCard";
import { REGION_GROUPS } from "@/data/regions";

interface State {
  Code: string;
  File: string;
  StateName: string;
  Authorities: number;
  Contracts: number;
  Entities: number;
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

        <div className="state-card-grid">
          {statesList.map((state) => (
            <StateCard key={state.Code} {...state} />
          ))}
        </div>
      </div>

      <div className="detail-sidebar">
        <h2>Authority Overview</h2>

        <div className="dynamic-module">
          {REGION_GROUPS.map((group) => (
            <div
              key={group.label}
              className={`region-group ${group.className}`}
            >
              <h4>{group.label}</h4>
              <div className="region-links">
                {group.states.map((code) => {
                  const state = statesList.find((s) => s.Code === code);

                  return (
                    <a
                      key={code}
                      href={`/authorities/${code}`}
                      className="region-link"
                    >
                      {state?.StateName ?? code}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
