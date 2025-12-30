export interface Authority {
  slug: string;
  name: string;
  jurisdiction: string;
  updated: string;
}

export interface Contract {
  id: string;
  authoritySlug: string;
  vendor: string;
  amount: number;
  description: string;
  date: string;
}

export interface Entity {
  slug: string;
  name: string;
  type: string;
}
