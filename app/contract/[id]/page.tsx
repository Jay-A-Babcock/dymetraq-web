import { getContractById } from "@/lib/mockData";

export default async function ContractDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const contract = getContractById(id);

  if (!contract) {
    return <div>Contract not found</div>;
  }

  return (
    <div>
      <h1>{contract.title}</h1>
      <p>ID: {contract.id}</p>
    </div>
  );
}