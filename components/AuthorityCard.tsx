export default function AuthorityCard({ authority }: any) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginBottom: 12 }}>
      <h2>{authority.name}</h2>
      <p>{authority.jurisdiction}</p>
      <a href={`/authority/${authority.id}`}>View</a>
    </div>
  );
}
