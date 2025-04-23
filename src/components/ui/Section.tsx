import { cn } from "@/lib/utils";

function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section {...props} className={cn("py-8 sm:pt-24", className)}>
      {children}
    </section>
  );
}

export default Section;
