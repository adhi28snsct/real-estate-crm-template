"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  mockLeads,
  Lead,
  LeadSource,
  LeadStatus,
} from "@/src/lib/mock-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Label } from "@/src/components/ui/label";

export default function LeadsPage() {
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState<"All" | LeadSource>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | LeadStatus>("All");

  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [open, setOpen] = useState(false);

  const [newLead, setNewLead] = useState<{
    name: string;
    phone: string;
    source: LeadSource;
  }>({
    name: "",
    phone: "",
    source: "Website",
  });

  const handleAddLead = () => {
    if (!newLead.name || !newLead.phone) return;

    const lead: Lead = {
      id: Date.now().toString(),
      name: newLead.name,
      phone: newLead.phone,
      source: newLead.source,
      assignedTo: "Admin",
      status: "New",
      date: new Date().toLocaleDateString(),
    };

    setLeads((prev) => [lead, ...prev]);

    setNewLead({
      name: "",
      phone: "",
      source: "Website",
    });

    setOpen(false);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search);

    const matchesSource =
      sourceFilter === "All" || lead.source === sourceFilter;

    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;

    return matchesSearch && matchesSource && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Leads
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your real estate leads and track their pipeline status.
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            render={
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm px-4">
                <Plus className="mr-2 h-4 w-4" /> Add Lead
              </Button>
            }
          />

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Lead</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={newLead.name}
                  onChange={(e) =>
                    setNewLead({ ...newLead, name: e.target.value })
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="(555) 000-0000"
                  value={newLead.phone}
                  onChange={(e) =>
                    setNewLead({ ...newLead, phone: e.target.value })
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="source">Lead Source</Label>
                <select
                  id="source"
                  className="h-10 rounded-lg border border-gray-200 px-3 text-sm"
                  value={newLead.source}
                  onChange={(e) =>
                    setNewLead({
                      ...newLead,
                      source: e.target.value as LeadSource,
                    })
                  }
                >
                  <option value="Website">Website</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Referral">Referral</option>
                </select>
              </div>

              <Button
                className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={handleAddLead}
              >
                Save Lead
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="rounded-xl shadow-sm border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

            <Input
              type="text"
              placeholder="Search leads..."
              className="pl-9 h-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors rounded-lg w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <select
              className="h-10 rounded-lg border border-gray-200 px-3 text-sm"
              value={sourceFilter}
              onChange={(e) =>
                setSourceFilter(e.target.value as "All" | LeadSource)
              }
            >
              <option value="All">All Sources</option>
              <option value="Website">Website</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Referral">Referral</option>
            </select>

            <select
              className="h-10 rounded-lg border border-gray-200 px-3 text-sm"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "All" | LeadStatus)
              }
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">
                    {lead.name}
                  </TableCell>

                  <TableCell>{lead.phone}</TableCell>

                  <TableCell>{lead.source}</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center text-[10px] font-bold">
                        {lead.assignedTo
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <span>{lead.assignedTo}</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge
                      className={
                        lead.status === "New"
                          ? "bg-indigo-100 text-indigo-800"
                          : lead.status === "Contacted"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-green-100 text-green-800"
                      }
                    >
                      {lead.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right text-gray-500">
                    {lead.date}
                  </TableCell>
                </TableRow>
              ))}

              {filteredLeads.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10">
                    No leads found matching your filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
