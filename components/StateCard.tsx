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
    <div className="state-card">
      <h3>
        <Link href={`/authorities/${code}`}>
          {name}
        </Link>
      </h3>

      {description && <p>{description}</p>}

      {authorityCount !== undefined && (
        <small>{authorityCount} authorities</small>
      )}
    </div>
  );
}