// lib/mockData.ts
import fs from 'fs';
import path from 'path';

export type Authority = {
  id: string;
  name: string;
};

export type Entity = {
  id: string;
  name: string;
  authorityId: string;
};

export type Contract = {
  id: string;
  title: string;
  entityId: string;
  amount: number;
};

// Load JSON files
const authoritiesPath = path.join(process.cwd(), 'mocks', 'authorities.json');
const entitiesPath = path.join(process.cwd(), 'mocks', 'entities.json');
const contractsPath = path.join(process.cwd(), 'mocks', 'contracts.json');

const authorities: Authority[] = JSON.parse(fs.readFileSync(authoritiesPath, 'utf8'));
const entities: Entity[] = JSON.parse(fs.readFileSync(entitiesPath, 'utf8'));
const contracts: Contract[] = JSON.parse(fs.readFileSync(contractsPath, 'utf8'));

// Authority functions
export function getAuthorities(): Authority[] {
  return authorities;
}

export function getAuthorityById(id: string): Authority | undefined {
  return authorities.find(a => a.id === id);
}

// Entity functions
export function getEntities(): Entity[] {
  return entities;
}

export function getEntityById(id: string): Entity | undefined {
  return entities.find(e => e.id === id);
}

export function getEntitiesByAuthorityId(authorityId: string): Entity[] {
  return entities.filter(e => e.authorityId === authorityId);
}

// Contract functions
export function getContracts(): Contract[] {
  return contracts;
}

export function getContractById(id: string): Contract | undefined {
  return contracts.find(c => c.id === id);
}

export function getContractsByEntityId(entityId: string): Contract[] {
  return contracts.filter(c => c.entityId === entityId);
}