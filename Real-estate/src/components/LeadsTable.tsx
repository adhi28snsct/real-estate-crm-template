'use client';

import { Lead, LeadStatus } from '@/src/types/lead';

interface LeadsTableProps {
    leads: Lead[];
    onUpdateStatus: (id: string, newStatus: LeadStatus) => void;
}

const statusColors: Record<LeadStatus, string> = {
    NEW: 'bg-blue-50 text-blue-700 border-blue-200',
    FOLLOW_UP: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    NEGOTIATION: 'bg-purple-50 text-purple-700 border-purple-200',
    CLOSED: 'bg-green-50 text-green-700 border-green-200',
};

// ✅ Hydration-safe date formatter
function formatDate(dateString: string) {
    return new Date(dateString).toISOString().split('T')[0];
}

export default function LeadsTable({ leads, onUpdateStatus }: LeadsTableProps) {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                            <th className="px-6 py-4 font-semibold">Client Name</th>
                            <th className="px-6 py-4 font-semibold">Contact</th>
                            <th className="px-6 py-4 font-semibold">Category</th>
                            <th className="px-6 py-4 font-semibold">Value</th>
                            <th className="px-6 py-4 font-semibold">Source</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold text-right">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {leads.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                    No leads found.
                                </td>
                            </tr>
                        ) : (
                            leads.map((lead) => (
                                <tr
                                    key={lead.id}
                                    className="hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                                >
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{lead.name}</p>
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {lead.phone}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {lead.category}
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {lead.value}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {lead.source}
                                    </td>

                                    <td className="px-6 py-4">
                                        <select
                                            value={lead.status}
                                            onChange={(e) =>
                                                onUpdateStatus(
                                                    lead.id,
                                                    e.target.value as LeadStatus
                                                )
                                            }
                                            className={`text-xs font-semibold px-3 py-1.5 rounded-full border outline-none cursor-pointer hover:opacity-80 transition-opacity appearance-none pr-8 ${statusColors[lead.status]}`}
                                        >
                                            <option value="NEW">New</option>
                                            <option value="FOLLOW_UP">Follow Up</option>
                                            <option value="NEGOTIATION">Negotiation</option>
                                            <option value="CLOSED">Closed</option>
                                        </select>
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-500 text-right whitespace-nowrap">
                                        {formatDate(lead.createdAt)}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}