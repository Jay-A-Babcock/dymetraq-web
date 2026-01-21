"use client";

import { useState } from "react";

export default function Tree({ label, children }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(children) && children.length > 0;

  return (
    <div className="tree-node">
      <div className="tree-row">
        {hasChildren ? (
          <span
            className="tree-arrow"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            {open ? "▼" : "▶"}
          </span>
        ) : (
          <span className="tree-arrow">•</span>
        )}

        <span className="tree-label">{label}</span>
      </div>

      {open && hasChildren && <div className="tree-children">{children}</div>}
    </div>
  );
}
