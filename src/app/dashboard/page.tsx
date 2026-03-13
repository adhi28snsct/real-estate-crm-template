import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import { mockStats, mockLeads } from "@/src/lib/mock-data";
import { Users, UserPlus, FileCheck, CircleDollarSign } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back! Here&apos;s an overview of your real estate leads pipeline.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-xl shadow-sm border-gray-100 transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-500">Total Leads</CardTitle>
            <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center">
              <Users className="h-4 w-4 text-indigo-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{mockStats.totalLeads}</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl shadow-sm border-gray-100 transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-500">Active Leads</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
              <UserPlus className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{mockStats.activeLeads}</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl shadow-sm border-gray-100 transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-500">Closed Deals</CardTitle>
            <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <FileCheck className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{mockStats.closedDeals}</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">+18.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl shadow-sm border-gray-100 transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-500">Revenue</CardTitle>
            <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center">
              <CircleDollarSign className="h-4 w-4 text-amber-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">${mockStats.revenue.toLocaleString()}</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">+8.4% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 rounded-xl shadow-sm border-gray-100">
          <CardHeader className="border-b border-gray-50 bg-gray-50/30">
            <CardTitle className="text-lg">Recent Leads</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-transparent">
                <TableRow className="border-gray-100 hover:bg-transparent">
                  <TableHead className="font-semibold text-gray-900">Name</TableHead>
                  <TableHead className="font-semibold text-gray-900">Source</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="text-right font-semibold text-gray-900">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLeads.slice(0, 5).map((lead) => (
                  <TableRow key={lead.id} className="border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <TableCell className="font-medium text-gray-900">{lead.name}</TableCell>
                    <TableCell className="text-gray-500">{lead.source}</TableCell>
                    <TableCell>
                      <Badge variant={lead.status === "New" ? "default" : lead.status === "Contacted" ? "secondary" : "outline"}
                        className={
                          lead.status === "New" ? "bg-indigo-100 text-indigo-800 hover:bg-indigo-100 border-indigo-200" :
                          lead.status === "Contacted" ? "bg-amber-100 text-amber-800 hover:bg-amber-100 border-transparent" : 
                          "bg-green-100 text-green-800 border-green-200 hover:bg-green-100"
                        }
                      >
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-gray-500">{lead.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 rounded-xl shadow-sm border-gray-100">
          <CardHeader className="border-b border-gray-50 bg-gray-50/30">
            <CardTitle className="text-lg">Leads by Source</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-full flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-900 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-indigo-500"/> Instagram
                    </span>
                    <span className="text-sm font-semibold text-gray-900">45%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full transition-all duration-1000" style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-900 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-sky-500"/> Website
                    </span>
                    <span className="text-sm font-semibold text-gray-900">35%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full transition-all duration-1000" style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-900 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-blue-600"/> Facebook
                    </span>
                    <span className="text-sm font-semibold text-gray-900">15%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-900 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500"/> Referral
                    </span>
                    <span className="text-sm font-semibold text-gray-900">5%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
