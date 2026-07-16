import {
  Bell,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Logo } from "../logo";
import { SidebarTrigger } from "../ui/sidebar";

export function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#30363D] bg-[#0D1117]/90 px-8 backdrop-blur-xl">
      {/* Left */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

          <Input
            placeholder="Search repositories..."
            className="
              h-10
              w-[340px]
              rounded-xl
              border-[#30363D]
              bg-[#161B22]
              pl-10
              pr-14
              text-white
              placeholder:text-zinc-500
              focus-visible:ring-1
              focus-visible:ring-blue-500
            "
          />

          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-[#30363D] bg-[#0D1117] px-2 py-0.5 text-[10px] text-zinc-400">
            ⌘ K
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-xl border border-[#30363D] bg-[#161B22] hover:bg-[#21262D]"
        >
          <Bell className="h-5 w-5 text-zinc-300" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500" />
        </Button>

        <Avatar className="h-10 w-10 border border-[#30363D]">
          <AvatarImage src="/avatar.png" />
          <AvatarFallback className="bg-[#161B22] text-white">
            AM
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}