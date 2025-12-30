import contracts from "@/mocks/contracts.json";
import entities from "@/mocks/entities.json";
import { Contract, Entity } from "@/lib/types";

interface ContractPageProps {
  params: { id: string };
}

export default function ContractPage({ params }: ContractPageProps) {
  const contract = (contracts as Contract[]).find(
    (c) => c.id === params.id
  );

  if (!contract) return <p>Contract not found.</p>;

  const vendor = (entities as Entity[]).find(
    (e) => e.slug === contract.vendorSlug
  );

  return (
    <>
      <h1>{contract.description}</h1>

      <p>Amount: ${contract.amount.toLocaleString()}</p>
      <p>Date: {contract.date}</p>

      {vendor && (
        <p>
          Vendor: <a href={`/entities/${vendor.slug}`}>{vendor.name}</a>
        </p>
      )}
    </>
  );
}