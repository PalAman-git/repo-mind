'use client'
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
    const {data:user ,isLoading} = useCurrentUser();
    const router = useRouter();

    useEffect(() =>{
        if(!isLoading && user){
            router.replace("/dashboard");
            return;
        }
    },[router,isLoading,user])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background grid-bg px-6">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />

      <Card className="glass w-full max-w-md border-border">
        <CardContent className="space-y-8 p-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-2xl font-bold shadow-lg">
              RM
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gradient">
              RepoMind
            </h1>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              AI-powered software intelligence for GitHub repositories.
            </p>
          </div>

          {/* Login */}
          <Button
            size="lg"
            className="h-12 w-full text-base"
            onClick={() => {
                window.location.href = `${API_URL}/auth/github`
            }}
            disabled={isLoading}
          >
            
              <Plus className="mr-2 h-5 w-5" />
              Continue with GitHub
            
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            By continuing you agree to our Terms of Service and Privacy
            Policy.
          </div>

          <div className="rounded-xl border border-border bg-secondary/40 p-4">
            <h3 className="mb-3 font-medium">
              What you'll get
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                AI repository analysis
              </li>

              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Dependency graphs
              </li>

              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Architecture insights
              </li>

              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                AI code assistant
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}