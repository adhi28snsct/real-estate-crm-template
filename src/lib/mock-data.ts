
export type LeadStatus = "New" | "Contacted" | "Closed";

export type LeadSource =
  | "Instagram"
  | "Facebook"
  | "Website"
  | "Referral";

export const leadSources: LeadSource[] = [
  "Instagram",
  "Facebook",
  "Website",
  "Referral",
];

export interface Lead {
  id: string;
  name: string;
  phone: string;
  source: LeadSource;
  assignedTo: string;
  status: LeadStatus;
  date: string;
}

export const mockLeads: Lead[] = [
  {
    id: "L001",
    name: "Sarah Jenkins",
    phone: "(555) 123-4567",
    source: "Instagram",
    assignedTo: "Michael Scott",
    status: "New",
    date: "2026-03-11",
  },
  {
    id: "L002",
    name: "David Chen",
    phone: "(555) 987-6543",
    source: "Website",
    assignedTo: "Pam Beesly",
    status: "Contacted",
    date: "2026-03-10",
  },
  {
    id: "L003",
    name: "Emily Watson",
    phone: "(555) 456-7890",
    source: "Facebook",
    assignedTo: "Jim Halpert",
    status: "Closed",
    date: "2026-03-08",
  },
  {
    id: "L004",
    name: "Marcus Johnson",
    phone: "(555) 789-0123",
    source: "Referral",
    assignedTo: "Dwight Schrute",
    status: "New",
    date: "2026-03-11",
  },
  {
    id: "L005",
    name: "Jessica Alba",
    phone: "(555) 321-6547",
    source: "Instagram",
    assignedTo: "Andy Bernard",
    status: "Contacted",
    date: "2026-03-09",
  },
  {
    id: "L006",
    name: "Tom Holland",
    phone: "(555) 111-2222",
    source: "Website",
    assignedTo: "Michael Scott",
    status: "Closed",
    date: "2026-03-01",
  },
];

/* ---------------- Teams ---------------- */

export interface Team {
  id: string;
  name: string;
  lead: string;
  membersCount: number;
  leadsAssigned: number;
}

export const mockTeams: Team[] = [
  {
    id: "T1",
    name: "Alpha Squad",
    lead: "Michael Scott",
    membersCount: 5,
    leadsAssigned: 120,
  },
  {
    id: "T2",
    name: "Bravo Team",
    lead: "Dwight Schrute",
    membersCount: 3,
    leadsAssigned: 85,
  },
  {
    id: "T3",
    name: "Charlie Force",
    lead: "Jim Halpert",
    membersCount: 4,
    leadsAssigned: 105,
  },
];

/* ---------------- Members ---------------- */

export type Role = "Manager" | "Agent";

export interface Member {
  id: string;
  name: string;
  email: string;
  role: Role;
  team: string;
  active: boolean;
  avatarUrl?: string;
}

export const mockMembers: Member[] = [
  {
    id: "M1",
    name: "Michael Scott",
    email: "michael@estateflow.demo",
    role: "Manager",
    team: "Alpha Squad",
    active: true,
  },
  {
    id: "M2",
    name: "Dwight Schrute",
    email: "dwight@estateflow.demo",
    role: "Manager",
    team: "Bravo Team",
    active: true,
  },
  {
    id: "M3",
    name: "Jim Halpert",
    email: "jim@estateflow.demo",
    role: "Manager",
    team: "Charlie Force",
    active: true,
  },
  {
    id: "M4",
    name: "Pam Beesly",
    email: "pam@estateflow.demo",
    role: "Agent",
    team: "Alpha Squad",
    active: true,
  },
  {
    id: "M5",
    name: "Andy Bernard",
    email: "andy@estateflow.demo",
    role: "Agent",
    team: "Bravo Team",
    active: false,
  },
  {
    id: "M6",
    name: "Stanley Hudson",
    email: "stanley@estateflow.demo",
    role: "Agent",
    team: "Charlie Force",
    active: true,
  },
];

/* ---------------- Dashboard Stats ---------------- */

export const mockStats = {
  totalLeads: 1245,
  activeLeads: 432,
  closedDeals: 189,
  revenue: 1250000,
};

/* ---------------- Integrations ---------------- */

export interface Integration {
  id: string;
  platform: string;
  description: string;
  connected: boolean;
  lastSynced?: string;
}

export const mockIntegrations: Integration[] = [
  {
    id: "I1",
    platform: "Instagram",
    description:
      "Sync leads from Instagram Direct Messages and Lead Ads instantly.",
    connected: true,
    lastSynced: "2 mins ago",
  },
  {
    id: "I2",
    platform: "Facebook",
    description:
      "Automatically pull leads from Facebook forms and Messenger chats.",
    connected: false,
  },
];