import { getAuthorities } from "@/lib/mockData";
import AuthorityCard from "@/components/AuthorityCard";

export default function AuthorityListPage() {
  const authorities = getAuthorities();

  return (
    <div>
      <h1>Authorities</h1>
      {authorities.map((a) => (
        <AuthorityCard key={a.id} authority={a} />
      ))}
    </div>
  );
}