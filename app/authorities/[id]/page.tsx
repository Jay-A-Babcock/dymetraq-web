import authorities from "@/mocks/authorities.json";
import contracts from "@/mocks/contracts.json";
import { Authority, Contract } from "@/lib/types";

interface AuthorityPageProps {
  params: { id: string };
}

export default function AuthorityPage({ params }: AuthorityPageProps) {
  const authority = (authorities as Authority[]).find(
    (a) => a.slug === params.id
  );

  if (!authority) return <p>Authority not found.</p>;

  const authorityContracts = (contracts as Contract[]).filter(
    (c) => c.authoritySlug === authority.slug
  );

  return (
    <>
      <h1>{authority.name}</h1>

      <h2>Contracts</h2>
      <ul>
        {authorityContracts.map((c) => (
          <li key={c.id}>
            <a href={`/contracts/${c.id}`}>{c.description}</a>
          </li>
        ))}
      </ul>
    </>
  );
}