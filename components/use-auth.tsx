"use client";

import { signOut as authSignOut } from "@/lib/client-auth";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/get-session");
      const json = await res.json();
      console.log("[useAuth] Session response:", json);
      const hasSession = !!(json?.session?.user);
      console.log("[useAuth] Has session:", hasSession);
      setIsAuthenticated(hasSession);
    } catch (err) {
      console.log("[useAuth] Session error:", err);
      setIsAuthenticated(false);
    } finally {
      console.log("[useAuth] Setting loading to false");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("[useAuth] Running checkAuth");
    checkAuth();
  }, [checkAuth]);

  const signOut = async () => {
    console.log("[useAuth] Signing out");
    await authSignOut();
    router.push("/signin");
  };

  return { isAuthenticated, loading, signOut };
}
