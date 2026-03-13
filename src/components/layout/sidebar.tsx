"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, UserCircle, Settings, Link as LinkIcon, Building2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Leads", href: "/leads", icon: Users },
  { name: "Teams", href: "/teams", icon: Building2 },
  { name: "Members", href: "/members", icon: UserCircle },
  { name: "Integrations", href: "/integrations", icon: LinkIcon },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-100 bg-white">
      <div className="flex h-16 shrink-0 items-center px-6 font-bold text-xl border-b border-gray-100 text-indigo-600 tracking-tight">
        EstateFlow
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? "bg-indigo-50 text-indigo-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200"
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 flex-shrink-0 h-5 w-5 transition-colors"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center w-full max-w-full">
           <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold flex-shrink-0">
             JD
           </div>
           <div className="ml-3 truncate">
             <p className="text-sm font-medium text-gray-700 truncate">Jane Doe</p>
             <p className="text-xs text-gray-500 truncate">Admin</p>
           </div>
        </div>
      </div>
    </div>
  );
}
