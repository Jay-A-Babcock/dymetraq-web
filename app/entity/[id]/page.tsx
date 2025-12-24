import { getEntityById } from "@/lib/mockData";

export default async function EntityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entity = getEntityById(id);

  if (!entity) {
    return <div>Entity not found</div>;
  }

  return (
    <div>
      <h1>{entity.name}</h1>
      <p>ID: {entity.id}</p>
    </div>
  );
}