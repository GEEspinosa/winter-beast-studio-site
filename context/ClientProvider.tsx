"use client";

import React, { useState } from "react";
import DirectoryToggleContext from "@/context/DirectoryToggleContext";
import { DirectoryNode } from "@/lib/types/directory";
import { findNodeWithPath } from "@/utils/findNodeWithPath";



export function ClientProvider({
  children,
  tree,
}: {
  children: React.ReactNode;
  tree: DirectoryNode[];
}) {
  const [sidebarCollapse, setSidebarCollapse] = useState(true)
  const [colorToggle, setColorToggle] = useState(true);
  const [highlightColor, setHighlightColor] = useState("rgba(0, 128, 255, 0.22)");
  const [verticalToggle, setVerticalToggle] = useState(true);
  const [horizontalToggle, setHorizontalToggle] = useState(true);
  const [selectedNode, setSelectedNode] = useState<DirectoryNode | null>(null);

  //openFolders state and toggle functions
  const [openFolders, setOpenFolders] = useState<Record<number, boolean>>({});

  function toggleFolder(id: number) {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function collectFolderIds(nodes: DirectoryNode[]): number[] {
    const ids: number[] = [];

    function walk(node: DirectoryNode) {
      if (node.type === "folder") {
        ids.push(node.id);
        node.children?.forEach(walk);
      }
    }

    nodes.forEach(walk);
    return ids;
  }

  function openAllFolders() {
    const ids = collectFolderIds(tree);
    const all: Record<number, boolean> = {};
    ids.forEach((id) => (all[id] = true));
    setOpenFolders(all);
  }

  function closeAllFolders() {
    setOpenFolders({});
  }


  function navigateToNode(
  predicate: (node: DirectoryNode) => boolean
) {
  const result = findNodeWithPath(tree, predicate);
  if (!result) return;

  const foldersToOpen: Record<number, boolean> = {};

  result.path.forEach((node) => {
    if (node.type === "folder") {
      foldersToOpen[node.id] = true;
    }
  });

  setOpenFolders((prev) => ({
    ...prev,
    ...foldersToOpen,
  }));

  setSelectedNode(result.node);
}

  return (
    <DirectoryToggleContext.Provider
      value={{
        sidebarCollapse,
        setSidebarCollapse,
        colorToggle,
        setColorToggle,
        highlightColor,
        setHighlightColor,
        verticalToggle,
        setVerticalToggle,
        horizontalToggle,
        setHorizontalToggle,
        selectedNode,
        setSelectedNode,
        openFolders,
        toggleFolder,
        openAllFolders,
        closeAllFolders,
        navigateToNode,
      }}
    >
      {children}
    </DirectoryToggleContext.Provider>
  );
}
