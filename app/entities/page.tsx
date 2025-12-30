import entities from "@/mocks/entities.json";
import { Entity } from "@/lib/types";

export default function EntitiesPage() {
  const data = entities as Entity[];

  return (
    <main>
      <h1>Entities</h1>

      <ul>
        {data.map((e) => (
          <li key={e.slug}>
            <a href={`/entities/${e.slug}`}>{e.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}