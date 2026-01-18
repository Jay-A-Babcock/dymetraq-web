// app/authorities/[state]/[id]/RenderOnLoad.tsx
"use client";

import { useEffect } from "react";

export default function RenderOnLoad({ state, id, shouldRender }) {
  useEffect(() => {
    if (!shouldRender) return;

    async function triggerRender() {
      try {
        const res = await fetch("http://localhost:5050/render", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            state,
            auth_id: id,
            sections: []
          })
        });

        // After LS1 finishes, reload the page to pick up the new file
        window.location.reload();
      } catch (err) {
        console.error("Failed to trigger LS1 render:", err);
      }
    }

    triggerRender();
  }, [state, id, shouldRender]);

  return null;
}