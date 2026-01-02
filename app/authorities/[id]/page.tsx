// app/authorities/[id]/page.tsx
import authorities from "@/mocks/authorities.json";
import contracts from "@/mocks/contracts.json";
import { Authority, Contract } from "@/lib/types";
import AuthorityStats from "@/components/AuthorityStats";

interface AuthorityPageProps {
  params: Promise<{ id: string }>;
}

export default async function AuthorityPage({ params }: AuthorityPageProps) {
  const { id } = await params;

  const authority = (authorities as Authority[]).find(
    (a) => a._id === id
  );

  if (!authority) return <p>Authority not found.</p>;

  const authorityContracts = (contracts as Contract[]).filter(
    (c) => c.auth_id === authority._id
  );

  return (
    <>
      <h1>{authority.name}</h1>
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
    </>
  );
}