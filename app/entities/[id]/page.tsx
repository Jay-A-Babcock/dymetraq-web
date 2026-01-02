// app/entities/[id]/page.tsx
import entities from "@/mocks/entities.json";
import contracts from "@/mocks/contracts.json";
import { Entity, Contract } from "@/lib/types";
import EntityStats from "@/components/EntityStats";

interface EntityPageProps {
  params: Promise<{ id: string }>;
}

export default async function EntityPage({ params }: EntityPageProps) {
  const { id } = await params;

  const entity = (entities as Entity[]).find(
    (e) => e._id === id
  );

  if (!entity) return <p>Entity not found.</p>;

  const entityContracts = (contracts as Contract[]).filter(
    (c) => c.entity_uid === entity._id
  );

  return (
    <>
      <h1>{entity.name}</h1>
      <p>Basic information about the entity will be here.</p>

      <EntityStats contracts={entityContracts} />

      <h2>Contracts</h2>
      <div className="coming-soon" style={{ height: "200px" }}>
        Coming soon…
      </div>

      <ul>
        {entityContracts.map((c) => (
          <li key={c._id}>
            <a href={`/contracts/${c._id}`}>{c.cont_name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}