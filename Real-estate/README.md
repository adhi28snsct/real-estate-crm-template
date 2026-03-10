# 🚀 Modern SaaS CRM Dashboard Template

A clean, modern, and fully responsive CRM Dashboard built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

Perfect starter template for:

* SaaS products
* Lead management systems
* Startup admin panels
* Sales dashboards
* Internal tools

---

## ✨ Live Demo

> Deploy on Vercel or run locally (instructions below).

---

# 🛠 Tech Stack

* **Next.js 14+ (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Lucide Icons**

---

# 📦 Features

* ✅ Modern Sidebar Layout
* ✅ Responsive Dashboard UI
* ✅ Lead Management Table
* ✅ Status Filtering
* ✅ Dynamic Pipeline Calculation
* ✅ Add Lead Modal
* ✅ Clean TypeScript Types
* ✅ Reusable UI Components
* ✅ Mobile Responsive
* ✅ Production-ready folder structure

---

# 📂 Project Structure

```
src/
 ├── app/
 │   ├── dashboard/
 │   │   ├── leads/
 │   │   │   ├── page.tsx
 │   │   ├── layout.tsx
 │   │   ├── page.tsx
 │   ├── layout.tsx
 │   ├── page.tsx
 │
 ├── components/
 │   ├── LeadsTable.tsx
 │   ├── AddLeadModal.tsx
 │   ├── AppSidebar.tsx
 │   ├── Topbar.tsx
 │
 ├── types/
 │   ├── lead.ts
```

---

# 🧩 Lead Data Model

```ts
export type LeadStatus =
  | "NEW"
  | "FOLLOW_UP"
  | "NEGOTIATION"
  | "CLOSED";

export type LeadSource =
  | "Website"
  | "Email"
  | "Call"
  | "Referral";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  category: string; // Product / Plan / Service
  value: string;    // Monetary value
  source: LeadSource;
  status: LeadStatus;
  createdAt: string;
}
```

---

# 🚀 Getting Started

## 1️⃣ Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

## 2️⃣ Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 3️⃣ Build for Production

```bash
npm run build
```

---

# 🌐 Deployment

Recommended: **Vercel**

1. Push project to GitHub
2. Import into Vercel
3. Deploy

No extra configuration needed.

---

# 🎨 Customization Guide

### Change Branding

Edit:

* Sidebar logo
* Project name in layout
* Colors in Tailwind classes

---

### Modify Lead Fields

Update:

```
src/types/lead.ts
```

Then update:

* LeadsTable
* AddLeadModal
* Dashboard pages

---

### Connect to Backend

Replace static state with:

* REST API
* Firebase
* Supabase
* MongoDB
* Any custom backend

The UI is backend-agnostic.

---

# 💼 Ideal Use Cases

* SaaS Starter Kit
* CRM System
* Sales Pipeline Dashboard
* Admin Panel Template
* Startup MVP
* Internal Tools UI

---

# 📄 License

This template is licensed for personal and commercial use.

You may:

* Use in client projects
* Modify freely
* Build products on top of it

You may not:

* Resell as-is without modification (unless extended license purchased)

---

# 🤝 Support

If you have any issues or questions:

* Open an issue
* Or contact the author

---

# 🔥 Built For Developers Who Want To Ship Fast

Clean UI.
Modern stack.
Scalable structure.

Start building your SaaS today.
