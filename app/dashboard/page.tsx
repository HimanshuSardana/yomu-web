"use client";

import { Rss, Mail, Bell } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-2">
            <Rss className="size-5 text-indigo-500" />
            <span className="font-medium">Total Feeds</span>
          </div>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="size-5 text-indigo-500" />
            <span className="font-medium">Unread Posts</span>
          </div>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="size-5 text-indigo-500" />
            <span className="font-medium">Digest Sent Today</span>
          </div>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
