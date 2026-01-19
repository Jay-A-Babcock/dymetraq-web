// app/authorities/[state]/page.tsx
import rawStates from "@/data/states.json";

import Tree from "@/components/AuthoritiesTree";

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

  console.log("State param:", state);

  const stateData = States.find((s) => s.Code === state);

  if (!stateData) {
    return <p>State not found.</p>;
  }

  // Load the authority hierarchy JSON for this state
  const { default: authorities } = await import(
    `@/data/authorities/${stateData.File}.json`
  );

  function renderNode(node: TreeNode, parentPath = "") {
    const authId = node.AuthID ?? node.row?.AuthID;
    const nodeKey = `${parentPath}-${node.key}-${node.value}`;

    return (
      <Tree
        key={nodeKey}
        label={
          authId ? (
            <a href={`/authorities/${state}/${authId}`}>{node.value}</a>
          ) : (
            <span>{node.value}</span>
          )
        }
      >
        {node.children?.map((child) => renderNode(child, nodeKey))}
      </Tree>
    );
  }

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>{stateData.StateName}</h1>

        <p className="coming-soon">
          Proper List is still being arranged into a hierarchy.
        </p>

        <div className="tree-view">
          {authorities.map((node: TreeNode) => renderNode(node))}
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
