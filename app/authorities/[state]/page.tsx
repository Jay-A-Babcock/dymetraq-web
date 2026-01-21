// app/authorities/[state]/page.tsx
import rawStates from "@/data/states.json";
import HierarchyTree from "@/components/HierarchyTree";

interface StateWithFile {
  Code: string;
  File: string;
  StateName: string;
  Authorities: number;
  Contracts: number;
  Entities: number;
}

interface TreeNode {
  key: string;
  value: string;
  AuthID?: string;
  row?: { AuthID: string };
  children?: TreeNode[];
}

const States: StateWithFile[] = rawStates;

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;

  const stateData = States.find((s) => s.Code === state);
  if (!stateData) return <p>State not found.</p>;

  // Load the authority hierarchy JSON for this state
  const { default: authorities } = await import(
    `@/public/data/authorities/${stateData.File}.json`
  );

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>{stateData.StateName}</h1>

        <p className="coming-soon">
          Proper List is still being arranged into a hierarchy.
        </p>

        <div className="tree-view">
          <HierarchyTree state={state} nodes={authorities} />
        </div>
      </div>

      <div className="detail-sidebar">
        <h2>State Overview</h2>
        <div className="dynamic-module">
          <h4>Search Tools</h4>
        </div>
      </div>
    </div>
  );
}
