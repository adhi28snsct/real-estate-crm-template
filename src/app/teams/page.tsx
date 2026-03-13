
"use client";

import { useRouter } from "next/navigation";
import { Plus, Users } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/src/components/ui/card";
import { mockTeams } from "@/src/lib/mock-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";

export default function TeamsPage() {
  const router = useRouter();

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Teams
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your sales teams and track their performance.
          </p>
        </div>

        <Dialog>
          <DialogTrigger
            render={
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm px-4">
                <Plus className="mr-2 h-4 w-4" /> Create Team
              </Button>
            }
          />

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Team</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="team-name">Team Name</Label>
                <Input
                  id="team-name"
                  placeholder="E.g., Alpha Squad"
                  className="rounded-lg"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="team-lead">Assign Team Lead</Label>
                <Input
                  id="team-lead"
                  placeholder="Search members..."
                  className="rounded-lg"
                />
              </div>

              <Button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                Create Team
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockTeams.map((team) => (
          <Card
            key={team.id}
            onClick={() =>
              router.push(`/members?team=${encodeURIComponent(team.name)}`)
            }
            className="cursor-pointer rounded-xl shadow-sm border-gray-100 transition-all hover:shadow-md hover:border-indigo-100 group"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex justify-between items-center text-gray-900">
                {team.name}

                <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <Users className="h-4 w-4 text-indigo-600" />
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Team Lead</p>

                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-bold">
                      {team.lead
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <span className="text-sm font-medium text-gray-900">
                      {team.lead}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="bg-gray-50/50 border-t border-gray-100 p-4 rounded-b-xl flex gap-4">
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">Members</p>
                <p className="text-sm font-semibold text-gray-900">
                  {team.membersCount}
                </p>
              </div>

              <div className="w-px h-8 bg-gray-200"></div>

              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">Assigned Leads</p>
                <p className="text-sm font-semibold text-gray-900">
                  {team.leadsAssigned}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
