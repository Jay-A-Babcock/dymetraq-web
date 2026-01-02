// lib/types.ts
export interface Authority {
  _id: string;
  name: string;
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