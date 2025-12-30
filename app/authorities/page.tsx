// app/authorities/page.tsx
import authorities from "@/mocks/authorities.json";
import { Authority } from "@/lib/types";

export default function AuthoritiesPage() {
  const data = authorities as Authority[];

  return (
    <>
      <h1>Authorities</h1>

      <ul>
        {data.map((auth) => (
          <li key={auth.id}>
            <a href={`/authorities/${auth.id}`}>{auth.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}