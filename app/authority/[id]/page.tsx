import { getAuthorityById } from "@/lib/mockData";

export default function AuthorityViewer({ params }: any) {
  const authority = getAuthorityById(params.id);

  if (!authority) return <div>Authority not found</div>;

  return (
    <div>
      <h1>{authority.name}</h1>
      <p><strong>Jurisdiction:</strong> {authority.jurisdiction}</p>
      <p><strong>Address:</strong> {authority.address}</p>

      <h2>Contracts</h2>
      <ul>
        {authority.contracts.map((c) => (
          <li key={c}>
            <a href={`/contract/${c}`}>Contract {c}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}