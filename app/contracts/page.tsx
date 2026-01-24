"use client";

import "./contract-selectors.css";
import { useState, useEffect, useMemo } from "react";
import { REGION_GROUPS } from "@/data/regions";
import { statesList } from "@/data/states";
import { StateEntity, AuthorityRow, NIGP } from "@/lib/types";
import Selector from "@/components/Selector";

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

  function toggleState(code: string) {
    setSelectedStates(
      (prev) =>
        prev.includes(code)
          ? prev.filter((s) => s !== code)
          : [...prev.filter((s) => s !== "ALL"), code] // remove ALL if selecting real states
    );
  }

  // -----------------------------
  // 2. Authorities loaded from JSON
  // -----------------------------
  const [authorities, setAuthorities] = useState<AuthorityRow[]>([]);

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
  // 4. Entities state
  // -----------------------------
  const [allEntities, setAllEntities] = useState<StateEntity[]>([]);

  // -----------------------------
  // 5. Entities loaded from JSON
  // -----------------------------
  useEffect(() => {
    async function loadAll() {
      const res = await fetch("/data/entities_per_authority.json");
      const json: StateEntity[] = await res.json();
      setAllEntities(json);
    }
    loadAll();
  }, []);

  // -----------------------------
  // 6. Filtered entities based on selected authorities
  // -----------------------------
  const filteredEntities = useMemo(() => {
    if (selectedAuthorities.length === 0) return [];

    const subset = allEntities.filter((row) =>
      selectedAuthorities.includes(row.AuthID)
    );

    const unique = Object.values(
      subset.reduce<Record<string, StateEntity>>((acc, row) => {
        acc[row.EntityUID] = row;
        return acc;
      }, {})
    );

    return unique;
  }, [allEntities, selectedAuthorities]);

  // -----------------------------
  // 7. Entity selection state
  // -----------------------------
  const [selectedEntityIds, setSelectedEntityIds] = useState<string[]>([]);

  function toggleEntity(entityId: string) {
    setSelectedEntityIds((prev) =>
      prev.includes(entityId)
        ? prev.filter((id) => id !== entityId)
        : [...prev, entityId]
    );
  }

  // -----------------------------
  // 8. NIGP state
  // -----------------------------
  const [selectedNIGP, setSelectedNIGP] = useState<string[]>([]);

  // -----------------------------
  // 9. Load NIGPs
  // -----------------------------
  useEffect(() => {
    async function loadNIGPs() {
      if (selectedAuthorities.length === 0) {
        setSelectedNIGP([]);
        return;
      }
      // TODO: fetch real NIGP data when ready
      setSelectedNIGP([]);
    }

    loadNIGPs();
  }, [selectedAuthorities]);

  // -----------------------------
  // 10. NIGP selection
  // -----------------------------
  function toggleNIGP(code: string) {
    setSelectedNIGP((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  }

  const NIGP_PLACEHOLDER: NIGP[] = [
    { code: "005", label: "Abrasives" },
    { code: "010", label: "Acids & Chemicals" },
    { code: "015", label: "Aircraft & Airport Equipment" },
  ];

  // -----------------------------
  // 11. Toggle switches
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
  // 12. Results state
  // -----------------------------
  const [results, setResults] = useState<any[]>([]);
  const [sortField, setSortField] = useState("auth_cont_no");
  const [sortDirection, setSortDirection] = useState("asc");

  function sortResults(field) {
    const direction =
      sortField === field && sortDirection === "asc" ? "desc" : "asc";

    setSortField(field);
    setSortDirection(direction);

    const sorted = [...results].sort((a, b) => {
      const x = a[field];
      const y = b[field];

      if (x < y) return direction === "asc" ? -1 : 1;
      if (x > y) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setResults(sorted);
  }

  // -----------------------------
  // 13. Reset button
  // -----------------------------
  function resetFilters() {
    setSelectedStates(["ALL"]);
    setAuthorities([]);
    setSelectedAuthorities([]);
    setSelectedEntityIds([]);
    setSelectedNIGP([]);
    setToggles({ open: true, awarded: true, activeOnly: false });
    setResults([]);
  }

  // -----------------------------
  // 14. Apply Filters
  // -----------------------------
  async function applyFilters() {
    const res = await fetch("/api/contracts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        states: selectedStates,
        authorities: selectedAuthorities,
        entities: selectedEntityIds,
        nigp: selectedNIGP,
        toggles,
      }),
    });

    const data = await res.json();
    setResults(data);
  }

  // -----------------------------
  // RENDER
  // -----------------------------
  return (
    <div className="contracts-page">
      <div className="detail-layout">
        <div className="detail-content">
          <h1>Contracts</h1>
          <p>
            This page provides a list of contracts in the dataset. In the future
            the list will be presented with filtering, sorting, and advanced
            search.
          </p>
          {/* FILTER ROW - All 4 selectors side by side */}
          <div className="filters-grid">
            {/* REGION | STATE */}
            <div className="filter-panel region-state-panel">
              <Selector
                label="Region | State"
                groups={REGION_GROUPS.map((g) => ({
                  label: g.label,
                  items: g.states.map((code) => ({
                    value: code,
                    label: statesList[code] ?? code,
                  })),
                }))}
                selected={selectedStates}
                onToggle={toggleState}
              />
            </div>

            {/* AUTHORITY SELECTOR */}
            <div className="filter-panel">
              <Selector
                label="Authorities"
                items={authorities.map((a) => ({
                  value: a.AuthID,
                  label: a.DisplayName,
                }))}
                selected={selectedAuthorities}
                onToggle={toggleAuthority}
              />
            </div>

            {/* ENTITY SELECTOR */}
            <div className="filter-panel">
              <Selector
                label="Entities"
                items={filteredEntities.map((e) => ({
                  value: e.EntityUID,
                  label: e.EntityName,
                }))}
                selected={selectedEntityIds}
                onToggle={toggleEntity}
              />
            </div>

            {/* NIGP SELECTOR */}
            <div className="filter-panel">
              <Selector
                label="NIGP Codes"
                items={NIGP_PLACEHOLDER.map((c) => ({
                  value: c.code,
                  label: `${c.code} – ${c.label}`,
                }))}
                selected={selectedNIGP}
                onToggle={toggleNIGP}
              />
            </div>

            {/* STATUS TOGGLES */}
            <div className="filter-panel span-full">
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
          </div>{" "}
          <button className="reset-btn action-btn" onClick={resetFilters}>
            Reset Filters
          </button>
          <button className="apply-btn action-btn" onClick={applyFilters}>
            Apply Filters
          </button>
          {/* RESULTS */}
          <div className="results-panel">
            <h2>Results</h2>

            <div className="results-header">
              <div onClick={() => sortResults("auth_cont_no")}>Contract ID</div>
              <div onClick={() => sortResults("auth_name")}>Authority</div>
              <div onClick={() => sortResults("cont_name")}>Contract Name</div>
              <div onClick={() => sortResults("bid_due_date")}>
                Bid Closing Date
              </div>
              <div onClick={() => sortResults("cont_status")}>Status</div>
            </div>
            <div className="results-list">
              {results.map((r) => (
                <div className="contract-row" key={r._id}>
                  <div className="contract-id">{r.auth_cont_no}</div>
                  <div className="contract-authority">{r.auth_name}</div>
                  <div className="contract-name">{r.cont_name}</div>
                  <div className="contract-date">{r.bid_due_date}</div>
                  <div className="contract-status">{r.cont_status}</div>
                </div>
              ))}
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
    </div>
  );
}
