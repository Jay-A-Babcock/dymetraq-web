// app/contracts/page.tsx
import contracts from "@/mocks/contracts.json";
import { Contract } from "@/lib/types";

export default function ContractsPage() {
  const data = contracts as Contract[];

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>Contracts</h1>
        <p>
          This page provides a list of contracts in the dataset. In the future
          the list will be presented with filtering, sorting, and advanced
          search.
        </p><div className="coming-soon">Search form with options coming soon!</div>
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
