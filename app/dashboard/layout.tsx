"use client";

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/use-auth";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  Rss,
  Plus,
  Settings,
  LogOut,
  Home,
  BookMarked,
  Bell,
} from "lucide-react";

const dashboardItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Feeds",
    url: "/dashboard/feeds",
    icon: Rss,
  },
  {
    title: "Add Feed",
    url: "/dashboard/add-feed",
    icon: Plus,
  },
  {
    title: "Archive",
    url: "/dashboard/archive",
    icon: BookMarked,
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: Bell,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, loading, signOut } = useAuth();

  useEffect(() => {
    console.log("[Dashboard] Auth check:", { isAuthenticated, loading });
    if (loading) {
      console.log("[Dashboard] Still loading, returning");
      return;
    }
    
    if (isAuthenticated === false) {
      console.log("[Dashboard] Not authenticated, redirecting to /signin");
      router.push("/signin");
    } else if (isAuthenticated === true) {
      console.log("[Dashboard] Authenticated, showing dashboard");
    }
  }, [isAuthenticated, loading, router]);

  if (loading || isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex">
        <Sidebar>
          <SidebarHeader>
            <Link href="/" className="px-2">
              <span className="text-xl font-bold">Yomu</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {dashboardItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton>
                        <Link href={item.url} className="flex items-center gap-2">
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/dashboard/settings" className="flex items-center gap-2">
                    <Settings className="size-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <button onClick={signOut} className="flex items-center gap-2 w-full">
                    <LogOut className="size-4" />
                    <span>Sign Out</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b flex items-center justify-between px-4">
            <div />
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
