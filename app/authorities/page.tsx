// app/authorities/page.tsx
import hierarchy from "@/mocks/authorityHierarchy.json";
import Tree from "@/components/Tree";

function renderNode(node) {
  const isLeaf = !node.children || node.children.length === 0;

  return (
    <Tree
      key={node.auth_id}
      label={
        <a href={`/authorities/${node.auth_id}`}>
          {node.name}
        </a>
      }
    >
      {node.children?.map((child) => renderNode(child))}
    </Tree>
  );
}


export default function AuthoritiesPage() {
  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>Authorities</h1>
        <p>
          This page provides a hierarchical list of authorities.
        </p>

        {hierarchy.map((node) => renderNode(node))}
      </div>

      <div className="detail-sidebar">
        <h2>Authority Overview</h2>
        <div className="dynamic-module">
          <h4>Search Tools</h4>
        </div>
      </div>
    </div>
  );
}