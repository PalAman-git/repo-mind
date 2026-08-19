'use client'

import type { ReactNode } from "react";
import { AppShell } from "@/components/app-shell/AppShell";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useEffect } from "react";
import Loader from "@/components/loader/Loader";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const router = useRouter();

  // const {
  //   data: user,
  //   isLoading,
  //   isError,
  // } = useCurrentUser();

  // useEffect(() => {
  //   if (isError) {
  //     router.replace("/login");
  //   }
  // }, [isError, router]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (!user) {
  //   return null;
  // }

  return <>{children}</>;
}