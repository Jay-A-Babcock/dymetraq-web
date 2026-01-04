// components/StateCard.tsx
import Link from "next/link";

interface StateCardProps {
  code: string;
  name: string;
  description?: string;
  authorityCount?: number;
}

export default function StateCard({
  code,
  name,
  description,
  authorityCount,
}: StateCardProps) {
  return (
    <Link href={`/authorities/${code}`}>
      <div className="state-card">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
        {authorityCount && (
          <small>{authorityCount} authorities</small>
        )}
      </div>
    </Link>
  );
}