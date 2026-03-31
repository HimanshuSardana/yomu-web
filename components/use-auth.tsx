"use client";

import { signOut as authSignOut } from "@/lib/client-auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data } = await fetch("/api/auth/get-session").then((res) => res.json());
      setIsAuthenticated(!!data?.session);
    } catch {
      setIsAuthenticated(false);
    }
  };

  const signOut = async () => {
    await authSignOut();
    router.push("/signin");
  };

  return { isAuthenticated, signOut };
}
