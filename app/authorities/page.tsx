import authorities from "@/mocks/authorities.json";
import { Authority } from "@/lib/types";

export default function AuthoritiesPage() {
  const data = authorities as Authority[];

  return (
    <main>
      <h1>Authorities</h1>

      <ul>
        {data.map((auth) => (
          <li key={auth.slug}>
            <a href={`/authorities/${auth.slug}`}>{auth.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}