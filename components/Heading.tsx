type HeadingProps = {
  id?: string;
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  id,
  level = 2,
  children,
  className = "",
}: HeadingProps) {
  if (level === 1) {
    return (
      <h1 id={id} className={`text-5xl font-semibold leading-tight text-heading ${className}`}>
        {children}
      </h1>
    );
  }

  if (level === 3) {
    return (
      <h3 id={id} className={`text-xl font-medium leading-snug text-heading ${className}`}>
        {children}
      </h3>
    );
  }

  return <h2 id={id} className={`text-2xl font-semibold leading-tight text-heading ${className}`}>{children}</h2>;
}
