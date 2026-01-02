// app/authorities/page.tsx
import authorities from "@/mocks/authorities.json";
import { Authority } from "@/lib/types";

export default function AuthoritiesPage() {
  const data = authorities as Authority[];

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h1>Authorities</h1>
        <p>This page provides a list of contracting authorities in the dataset. In the future the list will be presented in a hierarchy with metadata and be searchable.</p>
        <ul>
          {data.map((auth) => (
            <li key={auth._id}>
              <a href={`/authorities/${auth._id}`}>{auth.name}</a>
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