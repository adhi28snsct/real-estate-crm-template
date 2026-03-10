'use client';

import { useState } from 'react';
import { Lead, LeadSource, LeadStatus } from '@/src/types/lead';
import { X } from 'lucide-react';

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (lead: Omit<Lead, 'id' | 'createdAt'>) => void;
}

export default function AddLeadModal({
  isOpen,
  onClose,
  onAdd,
}: AddLeadModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const [source, setSource] = useState<LeadSource>('Website');
  const [status, setStatus] = useState<LeadStatus>('NEW');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !category || !value) return;

    const formattedValue = value.startsWith('$')
      ? value
      : `$${Number(value.replace(/[^0-9.-]+/g, '')).toLocaleString()}`;

    onAdd({
      name,
      phone,
      category,
      value: formattedValue,
      source,
      status,
    });

    setName('');
    setPhone('');
    setCategory('');
    setValue('');
    setSource('Website');
    setStatus('NEW');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold">Add New Lead</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            required
            placeholder="Client Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 border rounded-xl"
          />

          <input
            required
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2.5 border rounded-xl"
          />

          <input
            required
            placeholder="Category (Product / Plan / Service)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 border rounded-xl"
          />

          <input
            required
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2.5 border rounded-xl"
          />

          <select
            value={source}
            onChange={(e) => setSource(e.target.value as LeadSource)}
            className="w-full px-4 py-2.5 border rounded-xl"
          >
            <option value="Website">Website</option>
            <option value="Email">Email</option>
            <option value="Call">Call</option>
            <option value="Referral">Referral</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as LeadStatus)}
            className="w-full px-4 py-2.5 border rounded-xl"
          >
            <option value="NEW">New</option>
            <option value="FOLLOW_UP">Follow Up</option>
            <option value="NEGOTIATION">Negotiation</option>
            <option value="CLOSED">Closed</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white"
            >
              Add Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}