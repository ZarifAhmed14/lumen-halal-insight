import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ArrowUpRight } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 glass border-b border-hairline" />
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { to: "/assistant", label: "Assistant" },
            { to: "/transparency", label: "Transparency" },
            { to: "/enterprise", label: "Enterprise" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/assistant"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Sign in
          </Link>
          <Link
            to="/assistant"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-foreground/90"
          >
            Try the assistant
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
