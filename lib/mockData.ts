import authorities from "../mocks/authorities.json";

export const getAuthorities = () => authorities;
export const getAuthorityById = (id: string) =>
  authorities.find((a: any) => a.id === id);