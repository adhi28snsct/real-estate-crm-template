"use client";

import { Instagram, Facebook, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/src/components/ui/card";
import { mockIntegrations } from "@/src/lib/mock-data";
import { Badge } from "@/src/components/ui/badge";

export default function IntegrationsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Integrations</h1>
        <p className="text-sm text-gray-500 mt-1">Connect your favorite tools and automate your lead flow pipeline.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockIntegrations.map((integration) => (
          <Card key={integration.id} className="rounded-xl shadow-sm border-gray-100 flex flex-col transition-all hover:shadow-md hover:border-indigo-100 group">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 ${integration.platform === 'Instagram' ? 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500' : 'bg-[#1877F2]'}`}>
                  {integration.platform === 'Instagram' ? <Instagram className="h-7 w-7" /> : <Facebook className="h-7 w-7" />}
                </div>
                {integration.connected ? (
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Connected
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
                    Not Connected
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg text-gray-900 line-clamp-1">{integration.platform}</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-1 line-clamp-2 h-10">
                {integration.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              {integration.connected && integration.lastSynced && (
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <RefreshCw className="h-3 w-3 mr-1.5" />
                  Last synced: {integration.lastSynced}
                </div>
              )}
            </CardContent>
            <CardFooter className="pt-4 border-t border-gray-50 bg-gray-50/30 rounded-b-xl">
               {integration.connected ? (
                 <Button variant="outline" className="w-full text-red-600 border-gray-200 hover:bg-red-50 hover:text-red-700 hover:border-red-200 rounded-lg">
                   Disconnect
                 </Button>
               ) : (
                 <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                   Connect {integration.platform}
                 </Button>
               )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
