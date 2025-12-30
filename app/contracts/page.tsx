// app/contracts/page.tsx
import contracts from "@/mocks/contracts.json";
import { Contract } from "@/lib/types";

export default function ContractsPage() {
  const data = contracts as Contract[];

  return (
    <>
      <h1>Contracts</h1>

      <ul>
        {data.map((c) => (
          <li key={c.id}>
            <a href={`/contracts/${c.id}`}>{c.name}</a>  {/* Changed from c.description */}
          </li>
        ))}
      </ul>
    </>
  );
}