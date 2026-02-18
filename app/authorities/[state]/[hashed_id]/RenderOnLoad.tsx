// app/authorities/[state]/[hashed_id]/RenderOnLoad.tsx
"use client";

import { useEffect } from "react";

export default function RenderOnLoad({ state, hashed_id, shouldRender }) {
  useEffect(() => {
    if (!shouldRender) return;

    async function triggerRender() {
      try {
        const res = await fetch("http://localhost:5050/render", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            state,
            hashed_id: hashed_id,
            sections: [],
          }),
        });

        // After LS1 finishes, reload the page to pick up the new file
        window.location.reload();
      } catch (err) {
        console.error("Failed to trigger LS1 render:", err);
      }
    }

    triggerRender();
  }, [state, hashed_id, shouldRender]);

  return null;
}
