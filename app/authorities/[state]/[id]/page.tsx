// app/authorities/[state]/[id]/page.tsx
import states from "@/data/states.json";
import AuthorityStats from "@/components/AuthorityStats";
import contracts from "@/mocks/contracts.json";
import { Contract } from "@/lib/types";
import { findAuthority } from "@/utils/authorities";

interface AuthorityPageProps {
  params: Promise<{ state: string; id: string }>;
}

export default async function AuthorityPage({ params }: AuthorityPageProps) {
  const { state, id } = await params;

  const { default: authoritiesData } = await import(`@/data/authorities/${state}.json`);
  const authority = findAuthority(authoritiesData, id);

  if (!authority) return <p>Authority not found.</p>;

  const authorityContracts = (contracts as Contract[]).filter(
    (c) => c.auth_id === authority.AuthID
  );

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>{authority.OfficialName}</h1>
        <p>Basic information about the contracting authority will be here.</p>

        <AuthorityStats contracts={authorityContracts} />

        <h2>Contracts</h2>
        <div className="coming-soon" style={{ height: "200px" }}>
          Coming soon…
        </div>

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