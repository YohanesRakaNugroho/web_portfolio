import { Badge } from "@/components/ui/badge";

export function TechBadge({ children }) {
  return (
    <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 techstack-badge">
      {children}
    </div>
  );
}
