// /path/to/LS2/app/authorities/[state]/[id]/page.tsx
import states from "@/data/states.json";
import AuthorityStats from "@/components/AuthorityStats";
import contracts from "@/mocks/contracts.json";
import { Contract } from "@/lib/types";
import { findAuthority } from "@/utils/authorities";
import fs from "fs/promises";
import path from "path";

interface AuthorityPageProps {
  params: Promise<{ state: string; id: string }>;
}

export default async function AuthorityPage({ params }: AuthorityPageProps) {
  const { state, id } = await params;

  const { default: authoritiesData } = await import(
    `@/data/authorities/${state}.json`
  );
  const authority = findAuthority(authoritiesData, id);

  if (!authority) return <p>Authority not found.</p>;

  const authorityContracts = (contracts as Contract[]).filter(
    (c) => c.auth_id === authority.AuthID
  );

  // Read pre-generated HTML from LS2 file system
  let dynamicHtml = "";
  try {
    const htmlPath = path.join(
      process.cwd(),
      "public",
      "authorities",
      state,
      id,
      "index.html"
    );
    dynamicHtml = await fs.readFile(htmlPath, "utf-8");
  } catch (error) {
    console.error("Failed to read generated HTML:", error);
    dynamicHtml = "<p>Authority metadata not available.</p>";
  }

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>{authority.OfficialName}</h1>

        {/* Render pre-generated HTML */}
        {dynamicHtml && (
          <div
            className="authority-metadata"
            dangerouslySetInnerHTML={{ __html: dynamicHtml }}
          />
        )}

        <AuthorityStats contracts={authorityContracts} />

        <h2>Contracts</h2>
        <ul>
          {authorityContracts.map((c) => (
            <li key={c._id}>
              <a href={`/contracts/${c._id}`}>{c.cont_name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="detail-sidebar">
        <h2>Authority Overview</h2>
        <div className="dynamic-module">
          <h4>Search Tools</h4>
        </div>
      </div>
    </div>
  );
}