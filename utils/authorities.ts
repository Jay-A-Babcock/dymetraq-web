// utils/authorities.ts
import { AuthorityRow } from "@/lib/types";

export function findAuthority(
  nodes: any[],
  targetId: string
): AuthorityRow | null {
  for (const node of nodes) {
    // Search by hashed_id at the node level
    if (node.hashed_id === targetId && node.row) {
      return node.row;
    }
    if (node.children) {
      const found = findAuthority(node.children, targetId);
      if (found) return found;
    }
  }
  return null;
}
