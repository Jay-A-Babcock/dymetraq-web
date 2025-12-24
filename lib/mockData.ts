// lib/mockData.ts
export type Authority = {
  id: string;
  name: string;
};

const authorities: Authority[] = [
  { id: "A1", name: "City of Madison" },
  { id: "A2", name: "Dane County" }
];

export function getAuthorities(): Authority[] {
  return authorities;
}

export function getAuthorityById(id: string): Authority | undefined {
  return authorities.find(a => a.id === id);
}