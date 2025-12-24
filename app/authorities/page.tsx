import Link from "next/link";
import { getAuthorities } from "@/lib/mockData";

export default function AuthoritiesListPage() {
  const authorities = getAuthorities();

  return (
    <div>
      <h2>Authorities</h2>
      <ul>
        {authorities.map(a => (
          <li key={a.id}>
            <Link href={`/authority/${a.id}`}>{a.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
