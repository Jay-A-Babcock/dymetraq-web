// /path/to/LS2/app/authorities/[state]/[id]/page.tsx
import RenderOnLoad from "./RenderOnLoad";

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
    `@/public/data/authorities/${state}.json`
  );
  const authority = findAuthority(authoritiesData, id);

  if (!authority) return <p>Authority not found.</p>;

  // Read pre-generated HTML from LS2 file system
  let dynamicHtml: string | null = null;

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
  } catch {
    dynamicHtml = null;
  }

  return (
    <div className="detail-layout">
      <RenderOnLoad state={state} id={id} shouldRender={dynamicHtml === null} />

      <div className="detail-content">
        <h1>{authority.OfficialName}</h1>

        {/* Render pre-generated HTML */}
        {dynamicHtml && (
          <div
            className="authority-metadata"
            dangerouslySetInnerHTML={{ __html: dynamicHtml }}
          />
        )}
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
