"use client";

import Tree from "@/components/AuthoritiesTree";

interface TreeNode {
  key: string;
  value: string;
  AuthID?: string;
  row?: { AuthID: string };
  children?: TreeNode[];
}

export default function HierarchyTree({
  state,
  nodes,
}: {
  state: string;
  nodes: TreeNode[];
}) {
  function renderNode(node: TreeNode, path = "") {
    const hashedId = node.hashed_id ?? "no-id";
    const nodeKey = `${path}/${node.key}-${hashedId}`;

    return (
      <Tree
        key={nodeKey}
        label={
          hashedId !== "no-id" ? (
            <a href={`/authorities/${state}/${hashedId}`}>{node.value}</a>
          ) : (
            <span>{node.value}</span>
          )
        }
      >
        {node.children?.map((child) => renderNode(child, nodeKey))}
      </Tree>
    );
  }

  return <>{nodes.map((n) => renderNode(n))}</>;
}
