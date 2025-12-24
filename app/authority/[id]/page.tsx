import { getAuthorityById } from "@/lib/mockData";

export default async function AuthorityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>; // params is now a Promise
}) {
  const { id } = await params; // Await the params
  
  console.log("=== DEBUG INFO ===");
  console.log("ID value:", id);
  
  const authority = getAuthorityById(id);
  
  console.log("Authority found:", authority);
  console.log("=== END DEBUG ===");

  if (!authority) {
    return <div>Authority not found. Looking for ID: {id}</div>;
  }

  return (
    <div>
      <h2>{authority.name}</h2>
      <p>ID: {authority.id}</p>
    </div>
  );
}