"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Building2, Mail, Link as LinkIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 pb-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account settings and workspace preferences.</p>
      </div>

      <div className="grid gap-6 flex-1">
        <Card className="rounded-xl shadow-sm border-gray-100">
          <CardHeader className="border-b border-gray-50 bg-gray-50/30">
            <div className="flex items-center gap-2 mb-1">
               <Building2 className="h-5 w-5 text-indigo-600" />
               <CardTitle>Workspace Profile</CardTitle>
            </div>
            <CardDescription>Update your workspace details and branding.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid gap-2">
              <Label htmlFor="workspace-name" className="text-gray-700">Workspace Name</Label>
              <Input id="workspace-name" defaultValue="EstateFlow Demo" className="max-w-md rounded-lg border-gray-200" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="workspace-url" className="text-gray-700">Workspace URL</Label>
              <div className="flex max-w-md">
                <span className="flex items-center px-4 border border-r-0 border-gray-200 bg-gray-50 text-gray-500 sm:text-sm rounded-l-lg">
                  <LinkIcon className="h-4 w-4" />
                </span>
                <Input id="workspace-url" defaultValue="estateflow.demo" className="rounded-l-none rounded-r-lg border-gray-200 focus-visible:ring-indigo-100 placeholder:text-gray-300" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-50 bg-gray-50/50 px-6 py-4 rounded-b-xl">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm">Save Changes</Button>
          </CardFooter>
        </Card>

        <Card className="rounded-xl shadow-sm border-gray-100">
          <CardHeader className="border-b border-gray-50 bg-gray-50/30">
            <div className="flex items-center gap-2 mb-1">
               <Mail className="h-5 w-5 text-indigo-600" />
               <CardTitle>Email Notifications</CardTitle>
            </div>
            <CardDescription>Configure how you want to be notified about activity.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-0 pt-0">
            <div className="flex items-center justify-between py-6 border-b border-gray-100">
              <div className="pr-4">
                <Label className="text-base font-medium text-gray-900 cursor-pointer" htmlFor="toggle1">New Lead Alerts</Label>
                <p className="text-sm text-gray-500 mt-1">Receive an email immediately when a new lead is captured.</p>
              </div>
              <div className="relative inline-flex items-center mr-2">
                 <input type="checkbox" id="toggle1" className="sr-only peer" defaultChecked />
                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 cursor-pointer"></div>
              </div>
            </div>
             <div className="flex items-center justify-between py-6">
              <div className="pr-4">
                <Label className="text-base font-medium text-gray-900 cursor-pointer" htmlFor="toggle2">Weekly Digest</Label>
                <p className="text-sm text-gray-500 mt-1">Receive a weekly summary of your team&apos;s performance data.</p>
              </div>
              <div className="relative inline-flex items-center mr-2">
                 <input type="checkbox" id="toggle2" className="sr-only peer" />
                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 cursor-pointer"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
