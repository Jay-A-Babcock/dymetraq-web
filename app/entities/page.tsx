// app/entities/page.tsx
import entities from "@/mocks/entities.json";
import { Entity } from "@/lib/types";

export default function EntitiesPage() {
  const data = entities as Entity[];

  return (
    <>
      <h1>Entities</h1>

      <ul>
        {data.map((e) => (
          <li key={e.id}>
            <a href={`/entities/${e.id}`}>{e.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}