// app/contracts/page.tsx
import { REGION_GROUPS } from "@/data/regions";
import { statesList } from "@/data/states"; // if you want full names

export default function ContractsPage() {
  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>Contracts</h1>
        <p>
          This page provides a list of contracts in the dataset. In the future
          the list will be presented with filtering, sorting, and advanced
          search.
        </p>

        <div className="filter-panel">
          <div className="filter-group region-state-box">
            <label className="filter-label">Region | State</label>

            <select id="state-select" name="states" multiple size={12}>
              <option value="ALL">– ALL –</option>

              {REGION_GROUPS.map((region) => (
                <optgroup
                  key={region.label}
                  label={region.label}
                  className={region.className}
                >
                  {region.states.map((code) => (
                    <option key={code} value={code}>
                      {statesList[code] ?? code}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="detail-sidebar">
        <h2>Contract Overview</h2>
        <div className="dynamic-module">
          <h4>Search Tools</h4>
        </div>
      </div>
    </div>
  );
}
