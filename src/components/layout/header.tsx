import { Search, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-x-4 border-b border-gray-100 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 transition-shadow">
      <div className="flex items-center gap-2 flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
           <input
            type="text"
            placeholder="Search leads, teams, members..."
            className="w-full pl-9 pr-4 py-2 border border-transparent bg-gray-50 rounded-full focus:bg-white focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 sm:text-sm text-gray-900 focus:outline-none transition-all"
           />
        </div>
      </div>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-full hover:bg-gray-50">
          <span className="sr-only">View notifications</span>
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
