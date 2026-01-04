// components/AuthoritiesTree.tsx
import { Authority } from "@/lib/types";
import { Tree } from "@/data/official_names.json";

interface AuthoritiesTreeProps {
  authorities: Authority[];
}

export default function AuthoritiesTree({ authorities }: AuthoritiesTreeProps) {
  const byState = authorities.reduce((acc, auth) => {
    if (!acc[auth.State]) acc[auth.State] = [];
    acc[auth.State].push(auth);
    return acc;
  }, {} as Record<string, Authority[]>);

  return (
    <Tree>
      {Object.entries(byState).map(([state, auths]) => (
        <Tree key={state} label={<strong>{state}</strong>}>
          {auths.map((auth) => (
            <Tree
              key={auth.AuthID}
              label={
                <a href={`/authorities/${auth.AuthID}`}>
                  {auth.OfficialName}
                </a>
              }
            />
          ))}
        </Tree>
      ))}
    </Tree>
  );
}