"use client";

export default function GenerateReportButton({ state, hashed_id }) {
  return (
    <button
      className="generate-report"
      onClick={async () => {
        const res = await fetch("http://localhost:5050/render-full-report", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ state, hashed_id }),
        });

        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
        }
      }}
    >
      Generate Full Report
    </button>
  );
}
