"use client";

import { Plus, Check, X } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import { mockMembers } from "@/src/lib/mock-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";

export default function MembersPage() {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Team Members</h1>
          <p className="text-sm text-gray-500 mt-1">Manage access and roles for your real estate team.</p>
        </div>
        <Dialog>
          {/* @ts-expect-error asChild type issue */}
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm px-4">
              <Plus className="mr-2 h-4 w-4" /> Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Invite New Member</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="agent@estateflow.demo" className="rounded-lg" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <div className="flex gap-2 mt-1">
                   <Button variant="outline" className="flex-1 border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 rounded-lg">Agent</Button>
                   <Button variant="outline" className="flex-1 rounded-lg text-gray-600">Manager</Button>
                </div>
              </div>
              <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg" onClick={() => {}}>Send Invite</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="rounded-xl shadow-sm border-gray-100 overflow-hidden">
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow className="border-gray-100 hover:bg-transparent">
                <TableHead className="font-semibold text-gray-900 w-[250px]">Name</TableHead>
                <TableHead className="font-semibold text-gray-900">Email</TableHead>
                <TableHead className="font-semibold text-gray-900">Role</TableHead>
                <TableHead className="font-semibold text-gray-900">Assigned Team</TableHead>
                <TableHead className="text-right font-semibold text-gray-900">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMembers.map((member) => (
                <TableRow key={member.id} className="border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {member.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-500">{member.email}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={member.role === "Manager" ? "bg-purple-50 text-purple-700 hover:bg-purple-100" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600 font-medium">{member.team}</TableCell>
                  <TableCell className="text-right">
                     {member.active ? (
                       <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 pr-2">
                         <Check className="h-3 w-3" /> Active
                       </Badge>
                     ) : (
                       <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200 gap-1 pr-2">
                         <X className="h-3 w-3" /> Inactive
                       </Badge>
                     )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
