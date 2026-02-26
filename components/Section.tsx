type SectionProps = {
  id?: string;
  ariaLabelledBy?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  ariaLabelledBy,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`border-t border-zinc-200 py-20 ${className}`}
    >
      {children}
    </section>
  );
}
