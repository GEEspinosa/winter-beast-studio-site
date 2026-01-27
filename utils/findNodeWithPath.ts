import { DirectoryNode } from "@/lib/types/directory";

export function findNodeWithPath(
  nodes: DirectoryNode[],
  predicate: (node: DirectoryNode) => boolean,
  path: DirectoryNode[] = []
): { node: DirectoryNode; path: DirectoryNode[] } | null {
  for (const node of nodes) {
    const currentPath = [...path, node];

    if (predicate(node)) {
      return { node, path: currentPath };
    }

    if (node.children) {
      const result = findNodeWithPath(node.children, predicate, currentPath);
      if (result) return result;
    }
  }

  return null;
}
