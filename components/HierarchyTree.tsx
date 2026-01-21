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
    const authId = node.AuthID ?? node.row?.AuthID ?? "no-id";
    const nodeKey = `${path}/${node.key}-${authId}`;

    return (
      <Tree
        key={nodeKey}
        label={
          authId !== "no-id" ? (
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

  return <>{nodes.map((n) => renderNode(n))}</>;
}
