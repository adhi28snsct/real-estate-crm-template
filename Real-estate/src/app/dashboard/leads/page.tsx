'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import LeadsTable from '@/components/LeadsTable';
import AddLeadModal from '@/components/AddLeadModal';
import { Lead, LeadStatus } from '@/src/types/lead';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export const INITIAL_LEADS: Lead[] = [
  {
    id: '1',
    name: 'John Doe',
    phone: '+1 202 555 0123',
    category: 'Product Inquiry',
    value: '$3,500',
    source: 'Website',
    status: 'NEW',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    phone: '+1 202 555 0199',
    category: 'Enterprise Plan',
    value: '$12,000',
    source: 'Email',
    status: 'NEGOTIATION',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Michael Brown',
    phone: '+1 202 555 0177',
    category: 'Consultation',
    value: '$6,200',
    source: 'Call',
    status: 'CLOSED',
    createdAt: new Date().toISOString(),
  },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<LeadStatus | "ALL">("ALL");

  const handleUpdateStatus = (id: string, newStatus: LeadStatus) => {
    setLeads(leads.map((lead) =>
      lead.id === id ? { ...lead, status: newStatus } : lead
    ));
  };

  const handleAddLead = (newLeadData: Omit<Lead, 'id' | 'createdAt'>) => {
    const newLead: Lead = {
      ...newLeadData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    };
    setLeads([newLead, ...leads]);
  };

  const filteredLeads =
    filter === "ALL"
      ? leads
      : leads.filter((l) => l.status === filter);

  const totalPipeline = leads
    .filter((l) => l.status !== "CLOSED")
    .reduce((acc, l) => {
      const num = Number(l.value.replace(/[^0-9.-]+/g, ""));
      return acc + num;
    }, 0);

  const formattedPipeline = totalPipeline.toLocaleString();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track your customer leads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Select
            value={filter}
            onValueChange={(val) => setFilter(val as LeadStatus | "ALL")}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All</SelectItem>
              <SelectItem value="NEW">New</SelectItem>
              <SelectItem value="FOLLOW_UP">Follow Up</SelectItem>
              <SelectItem value="NEGOTIATION">Negotiation</SelectItem>
              <SelectItem value="CLOSED">Closed</SelectItem>
            </SelectContent>
          </Select>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-all"
          >
            <Plus className="w-5 h-5" />
            Add Lead
          </button>
        </div>
      </div>

      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="font-semibold">Total Pipeline Value</div>
          <div className="text-xl font-bold text-indigo-600">
            ${formattedPipeline}
          </div>
        </CardContent>
      </Card>

      <LeadsTable
        leads={filteredLeads}
        onUpdateStatus={handleUpdateStatus}
      />

      <AddLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddLead}
      />
    </div>
  );
}