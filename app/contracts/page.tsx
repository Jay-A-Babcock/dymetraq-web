import Link from "next/link";
import { getContracts } from "@/lib/mockData";

export default function ContractsPage() {
  const contracts = getContracts();

  return (
    <div>
      <h1>Contracts</h1>
      <ul>
        {contracts.map((contract) => (
          <li key={contract.id}>
            <Link href={`/contract/${contract.id}`}>
              {contract.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}