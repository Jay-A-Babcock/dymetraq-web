// app/authorities/[state]/page.tsx
import states from "@/data/states.json";
import Tree from "@/components/Tree";

interface StateWithFile {
  code: string;
  name: string;
  file: string;
  auth_id: string;
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;

  const stateData = (states as StateWithFile[]).find((s) => s.code === state);

  if (!stateData) return <p>State not found.</p>;

  const { default: authorities } = await import(
    `@/data/authorities/${stateData.file}.json`
  );

  function renderNode(node: any, parentPath: string = "") {
    const nodeKey = `${parentPath}-${node.key}-${node.value}`;

    return (
      <Tree
        key={nodeKey} // ← Unique combination of path + key + value
        label={
          <a href={`/authorities/${state}/${node.row.AuthID}`}>{node.value}</a>
        }
      >
        {node.children?.map((child: any) => renderNode(child, nodeKey))}
      </Tree>
    );
  }

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>{stateData?.name}</h1>
        <div className="tree-view">
          {authorities.map((node: any) => renderNode(node))}
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
