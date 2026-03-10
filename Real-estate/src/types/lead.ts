export type LeadStatus =
  | "NEW"
  | "FOLLOW_UP"
  | "NEGOTIATION"
  | "CLOSED";

export type LeadSource =
  | "Website"
  | "Email"
  | "Call"
  | "Referral";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  category: string; // generic (Product / Plan / Service)
  value: string;    // renamed from budget → more SaaS style
  source: LeadSource;
  status: LeadStatus;
  createdAt: string;
}