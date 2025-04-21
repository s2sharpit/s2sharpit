import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ badge, title, description, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      {badge && (
        <Badge
          variant="outline"
          className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4 border-primary/20"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
      {description && <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">{description}</p>}
    </div>
  )
}

