// app/entities/page.tsx
import entities from "@/mocks/entities.json";
import { Entity } from "@/lib/types";

export default function EntitiesPage() {
  const data = entities as Entity[];

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>Entities</h1>
        <p>This page provides a list of entities in the dataset. In the future the list will be presented in a hierarchy with metadata and be searchable.</p>
        <ul>
          {data.map((entity) => (
            <li key={entity._id}>
              <a href={`/entities/${entity._id}`}>{entity.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="detail-sidebar">
        <h2>Entity Overview</h2>
        <div className="dynamic-module">
          <h4>Search Tools</h4>
        </div>
      </div>
    </div>
  );
}