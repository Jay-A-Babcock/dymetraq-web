// lib/types.ts

// Authority as a tree node in the hierarchy
export interface AuthorityNode {
  key: string; // e.g., "State", "County", "OfficialName"
  value: string | null;
  row: AuthorityRow;
  children: AuthorityNode[];
}

// Authority data from SQL row (what comes from the JSON tree)
export interface AuthorityRow {
  State: string;
  AuthID: string;
  DisplayName: string;
}

// Authority as a simple entity (flat)
export interface Authority {
  _id: string;
  name: string;
  AuthID?: string; // Can map from JSON
  OfficialName?: string; // Can map from JSON
  State?: string;
}

export interface Bid {
  _id: string;
}

export interface Contract {
  _id: string;
  cont_status: string;
  auth_id: string;
  cont_no: string;
  auth_cont_no?: string;
  auth_name: string;
  cont_name: string;
  cont_type: string;
  bid_open_date?: string;
  bid_due_date?: string;
  cont_description?: string;
  bid_ids?: string[];
  entity_uid?: string;
  _is_open: boolean;
  last_ingested: string;
}

export interface Entity {
  _id: string;
  name: string;
  type: string;
}

export interface State {
  Code: string;
  File: string;
  StateName: string;
  Authorities: number;
  Contracts: number;
  Entities: number;
}

export interface StateEntity {
  state_abbr: string;
  AuthID: string;
  OfficialName: string;
  EntityUID: string;
  EntityName: string;
}

export interface NIGP {
  code: string;
  label: string;
}
