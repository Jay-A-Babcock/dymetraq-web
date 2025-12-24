import Link from "next/link";
import { getEntities } from "@/lib/mockData";

export default function EntitiesPage() {
  const entities = getEntities();

  return (
    <div>
      <h1>Entities</h1>
      <ul>
        {entities.map((entity) => (
          <li key={entity.id}>
            <Link href={`/entity/${entity.id}`}>
              {entity.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}