// components/StateCard.tsx
import Link from "next/link";

interface StateCardProps {
  Code: string;
  File: string;
  StateName: string;
  Authorities: number;
  Contracts: number;
  Entities: number | null;
}

export default function StateCard({
  Code,
  StateName,
  Authorities,
  Contracts,
  Entities,
}: StateCardProps) {
  const safeEntities = Entities ?? 0;
  return (
    <div className="state-card">
      <Link href={`/authorities/${Code}`}>
        <h3>{StateName}</h3>
        <p>
          <b>Authorities:</b> {Authorities.toLocaleString()}
        </p>
        <p>
          <b>Contracts:</b> {Contracts.toLocaleString()}
        </p>
        <p>
          <b>Entities:</b> {safeEntities.toLocaleString()}
        </p>
      </Link>
    </div>
  );
}
