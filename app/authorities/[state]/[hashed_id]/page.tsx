// /path/to/LS2/app/authorities/[state]/[hashed_id]/page.tsx
import { Contract } from "@/lib/types";
import { findAuthority } from "@/utils/authorities";
import GenerateReportButton from "./GenerateReportButton";

interface AuthorityPageProps {
  params: Promise<{ state: string; hashed_id: string }>;
}

async function fetchAuthorityHtml(state: string, hashed_id: string) {
  console.log("Fetching for state:", state, "hashed_id:", hashed_id);
  try {
    const res = await fetch("http://localhost:5050/render", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state,
        hashed_id,
        sections: [],
      }),
    });

    if (!res.ok) {
      console.error("Failed to fetch authority HTML:", res.status);
      return null;
    }

    const data = await res.json();
    return data.html || null;
  } catch (err) {
    console.error("Error fetching authority HTML:", err);
    return null;
  }
}

export default async function AuthorityPage({ params }: AuthorityPageProps) {
  const { state, hashed_id } = await params;

  const { default: authoritiesData } = await import(
    `@/public/data/authorities/${state}.json`
  );
  const authority = findAuthority(authoritiesData, hashed_id);

  if (!authority) return <p>Authority not found.</p>;

  // Fetch the generated HTML from the API
  const dynamicHtml = await fetchAuthorityHtml(state, hashed_id);

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>{authority.OfficialName}</h1>

        {/* Render the API-generated HTML */}
        {dynamicHtml ? (
          <div
            className="authority-metadata"
            dangerouslySetInnerHTML={{ __html: dynamicHtml }}
          />
        ) : (
          <p>Loading authority data...</p>
        )}
        <GenerateReportButton state={state} hashed_id={hashed_id} />
      </div>

      <div className="detail-sidebar">
        <h2>Authority Specific Zone</h2>
        <div className="dynamic-module">
          <h4>Dynamic Module 1</h4>
        </div>
        <div className="dynamic-module">
          <h4>Dynamic Module 2</h4>
        </div>
      </div>
    </div>
  );
}
