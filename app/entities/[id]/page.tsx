import entities from "@/mocks/entities.json";
import contracts from "@/mocks/contracts.json";
import { Entity, Contract } from "@/lib/types";

interface EntityPageProps {
  params: { id: string };
}

export default function EntityPage({ params }: EntityPageProps) {
  const entity = (entities as Entity[]).find(
    (e) => e.slug === params.id
  );

  if (!entity) return <p>Entity not found.</p>;

  const relatedContracts = (contracts as Contract[]).filter(
    (c) => c.vendorSlug === entity.slug
  );

  return (
    <main>
      <h1>{entity.name}</h1>

      <h2>Related Contracts</h2>
      <ul>
        {relatedContracts.map((c) => (
          <li key={c.id}>
            <a href={`/contracts/${c.id}`}>{c.description}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}