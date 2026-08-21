import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";

const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center min-w-[180px]">
          <div className="text-2xl font-bold tracking-tight">
            <span className="textGradient">RepoMind</span>
            <span className="text-white/70">.</span>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:block w-full max-w-md">
          <SearchBar />
        </div>

        {/* Auth */}
        <div className="flex min-w-[180px] justify-end items-center gap-3">
          <Button
            variant="ghost"
            className="
              h-10 rounded-xl px-5
              border border-white/10
              bg-white/[0.03]
              text-white/80
              hover:bg-white/[0.08]
              hover:text-white
              transition-all duration-200
            "
          >
            Log in
          </Button>

          <Button
            className="
              h-10 rounded-xl px-5
              bg-white text-black
              font-medium
              hover:bg-white/90
              transition-all duration-200
              shadow-[0_0_20px_rgba(255,255,255,0.08)]
            "
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;