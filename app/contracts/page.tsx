"use client";

import { useState, useEffect } from "react";
import { REGION_GROUPS } from "@/data/regions";
import { statesList } from "@/data/states";

export default function ContractsPage() {
  // -----------------------------
  // 1. State selection
  // -----------------------------
  const [selectedStates, setSelectedStates] = useState<string[]>(["ALL"]);

  function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const values = Array.from(e.target.selectedOptions).map((o) => o.value);

    if (values.includes("ALL") || values.length === 0) {
      setSelectedStates(["ALL"]);
    } else {
      setSelectedStates(values);
    }
  }

  // -----------------------------
  // 2. Authorities loaded from JSON
  // -----------------------------
  const [authorities, setAuthorities] = useState<any[]>([]);

  useEffect(() => {
    async function loadAuthorities() {
      if (selectedStates.includes("ALL")) {
        setAuthorities([]);
        return;
      }

      const files = selectedStates.map(
        (s) => `/data/authorities_flat/${s}.json`
      );

      const all = await Promise.all(
        files.map((f) => fetch(f).then((r) => r.json()))
      );

      setAuthorities(all.flat());
    }

    loadAuthorities();
  }, [selectedStates]);

  // -----------------------------
  // 3. Authority selection
  // -----------------------------
  const [selectedAuthorities, setSelectedAuthorities] = useState<string[]>([]);

  function toggleAuthority(authId: string) {
    setSelectedAuthorities((prev) =>
      prev.includes(authId)
        ? prev.filter((id) => id !== authId)
        : [...prev, authId]
    );
  }

  // -----------------------------
  // 4. Recursive Authority Node
  // -----------------------------
  function AuthorityNode({ node }) {
    const id = `${node.key}-${node.value}`;
    const authId = node.row?.AuthID;

    return (
      <div className="authority-node">
        <label>
          <input
            type="checkbox"
            checked={selectedAuthorities.includes(authId)}
            onChange={() => toggleAuthority(authId)}
          />
          {node.value}
        </label>

        {node.children?.length > 0 && (
          <div className="authority-children">
            {node.children.map((child) => (
              <AuthorityNode key={`${id}-${child.value}`} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // -----------------------------
  // 5. Entities loaded from JSON
  // -----------------------------
  const [entities, setEntities] = useState<any[]>([]);

  useEffect(() => {
    async function loadEntities() {
      if (selectedStates.includes("ALL")) {
        setEntities([]);
        return;
      }

      // Placeholder: eventually fetch real JSON
      // For now, simulate with empty array
      setEntities([]);
    }

    loadEntities();
  }, [selectedStates, selectedAuthorities]);

  // -----------------------------
  // 6. Entity selection
  // -----------------------------
  const [selectedEntities, setSelectedEntities] = useState<string[]>([]);

  function toggleEntity(entityId: string) {
    setSelectedEntities((prev) =>
      prev.includes(entityId)
        ? prev.filter((id) => id !== entityId)
        : [...prev, entityId]
    );
  }

  // -----------------------------
  // 5. Recursive Entities Node
  // -----------------------------
  function EntityNode({ entity }) {
    const id = entity.EntityUID;

    return (
      <div className="entity-node">
        <label>
          <input
            type="checkbox"
            checked={selectedEntities.includes(id)}
            onChange={() => toggleEntity(id)}
          />
          {entity.EntityName}
        </label>
      </div>
    );
  }

  // -----------------------------
  // 5. NIGP selection
  // -----------------------------
  const [selectedNIGP, setSelectedNIGP] = useState<string[]>([]);

  useEffect(() => {
    async function loadEntities() {
      if (selectedStates.includes("ALL")) {
        setEntities([]);
        return;
      }

      // Placeholder: eventually fetch real JSON
      // For now, simulate with empty array
      setEntities([]);
    }

    loadEntities();
  }, [selectedStates, selectedAuthorities]);

  // -----------------------------
  // 6. Entity selection
  // -----------------------------

  function toggleNIGP(code: string) {
    setSelectedNIGP((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  }

  const NIGP_PLACEHOLDER = [
    { code: "005", label: "Abrasives" },
    { code: "010", label: "Acids & Chemicals" },
    { code: "015", label: "Aircraft & Airport Equipment" },
  ];

  // -----------------------------
  // 6. Toggle switches
  // -----------------------------
  const [toggles, setToggles] = useState({
    open: true,
    awarded: true,
    activeOnly: false,
  });
  function toggleSwitch(key: keyof typeof toggles) {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  // -----------------------------
  // 6. Reset button
  // -----------------------------
  function resetFilters() {
    setSelectedStates(["ALL"]);
    setAuthorities([]);
    setSelectedAuthorities([]);
    setSelectedNIGP([]);
    setToggles({ open: true, awarded: true, activeOnly: false });
    setResults([]);
  }
  // -----------------------------
  // 6. Apply Filters
  // -----------------------------

  async function applyFilters() {
    const res = await fetch("/api/contracts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        states: selectedStates,
        authorities: selectedAuthorities,
        entities: selectedEntities,
        nigp: selectedNIGP,
        toggles,
      }),
    });

    const data = await res.json();
    setResults(data);
  }

  const [results, setResults] = useState<any[]>([]);

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>Contracts</h1>
        <p>
          This page provides a list of contracts in the dataset. In the future
          the list will be presented with filtering, sorting, and advanced
          search.
        </p>

        {/* REGION | STATE SELECTOR */}
        <div className="filter-panel">
          <label className="filter-label">Region | State</label>
          <div className="filter-group region-state-box">
            <select
              id="state-select"
              name="states"
              multiple
              size={12}
              value={selectedStates}
              onChange={handleStateChange}
            >
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

        {/* AUTHORITY SELECTOR */}
        <div className="filter-panel">
          <label className="filter-label">Authorities</label>

          <div className="authority-selector">
            {authorities.map((node) => (
              <label key={node.AuthID}>
                <input
                  type="checkbox"
                  checked={selectedAuthorities.includes(node.AuthID)}
                  onChange={() => toggleAuthority(node.AuthID)}
                />
                {node.DisplayName}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ENTITY SELECTOR */}
      <div className="filter-panel">
        <label className="filter-label">Entities</label>

        <div className="entity-selector">
          {entities.length === 0 && (
            <p className="coming-soon">
              Entities will appear once data is available.
            </p>
          )}

          {entities.map((entity) => (
            <EntityNode key={entity.EntityUID} entity={entity} />
          ))}
        </div>
      </div>

      {/* NIGP SELECTOR */}
      <div className="filter-panel">
        <label className="filter-label">NIGP Codes</label>

        <div className="nigp-selector">
          {NIGP_PLACEHOLDER.map((item) => (
            <label key={item.code} className="nigp-item">
              <input
                type="checkbox"
                checked={selectedNIGP.includes(item.code)}
                onChange={() => toggleNIGP(item.code)}
              />
              {item.code} – {item.label}
            </label>
          ))}
        </div>
      </div>
      <div className="filter-panel">
        <label className="filter-label">Status</label>

        <div className="toggle-group">
          <label className="toggle-item">
            <input
              type="checkbox"
              checked={toggles.open}
              onChange={() => toggleSwitch("open")}
            />
            Open
          </label>

          <label className="toggle-item">
            <input
              type="checkbox"
              checked={toggles.awarded}
              onChange={() => toggleSwitch("awarded")}
            />
            Awarded
          </label>

          <label className="toggle-item">
            <input
              type="checkbox"
              checked={toggles.activeOnly}
              onChange={() => toggleSwitch("activeOnly")}
            />
            Active Only
          </label>
        </div>
      </div>
      <button className="reset-btn" onClick={resetFilters}>
        Reset Filters
      </button>
      <button className="apply-btn" onClick={applyFilters}>
        Apply Filters
      </button>
      <div className="results-panel">
        <h2>Results</h2>
        {/* RESULTS TABLE */}
        <div className="results-table">
          {results.length === 0 ? (
            <p>No results yet. Apply filters to see contracts.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Contract ID</th>
                  <th>Authority</th>
                  <th>Awarded Vendor</th>
                  <th>Bid Closing Date</th>
                  <th>NIGP</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r._id}>
                    <td>{r.contract_id}</td>
                    <td>{r.auth_name}</td>
                    <td>{r.entity_name}</td>
                    <td>{r.nigp_code}</td>
                    <td>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="detail-sidebar">
        <h2>Contract Overview</h2>
        <div className="dynamic-module">
          <p className="coming-soon">
            Matrix of what data points the contract contains.
          </p>
          <button className="coming-soon">Generate Report</button>
        </div>
      </div>
    </div>
  );
}
