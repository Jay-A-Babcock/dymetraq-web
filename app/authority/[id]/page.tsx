import { getAuthorityById } from "@/lib/mockData";

export default function AuthorityDetailPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("IS SERVER:", typeof window === "undefined");
  console.log("PARAMS:", params);

  const authority = getAuthorityById(params.id);

  if (!authority) {
    return <div>Authority not found</div>;
  }

  return (
    <div>
      <h2>{authority.name}</h2>
      <p>ID: {authority.id}</p>
    </div>
  );
}
