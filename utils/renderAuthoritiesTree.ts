// utils/renderAuthoritiesTree.ts
export function groupAuthoritiesByState(authorities: Authority[]) {
  return authorities.reduce((acc, auth) => {
    if (!acc[auth.State]) {
      acc[auth.State] = [];
    }
    acc[auth.State].push(auth);
    return acc;
  }, {} as Record<string, Authority[]>);
}