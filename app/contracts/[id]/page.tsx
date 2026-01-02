// app/contracts/[id]/page.tsx
import contracts from "@/mocks/contracts.json";
import authorities from "@/mocks/authorities.json";
import entities from "@/mocks/entities.json";
import { Contract, Authority, Entity } from "@/lib/types";
import ContractStats from "@/components/ContractStats";

interface ContractPageProps {
  params: Promise<{ id: string }>;
}

export default async function ContractPage({ params }: ContractPageProps) {
  const { id } = await params;

  const contract = (contracts as Contract[]).find(
    (c) => c._id === id
  );

  if (!contract) return <p>Contract not found.</p>;

  const authority = (authorities as Authority[]).find(
    (a) => a._id === contract.auth_id
  );

  const contractEntity = (entities as Entity[]).find(
    (e) => e._id === contract.entity_uid
  );

  return (
    <>
      <h1>{contract.cont_name}</h1>
      <p>Basic information about the contract will be here.</p>

      <ContractStats
        authority={authority}
        entity={contractEntity}
        contractValue={contract.value}
      />

      <h2>Contract Details</h2>
      <div className="coming-soon" style={{ height: "200px" }}>
        Coming soon…
      </div>
    </>
  );
}