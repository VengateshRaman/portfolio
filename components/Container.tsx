type ContainerProps = {
  as?: "div" | "main" | "section" | "header" | "footer";
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  as: Component = "div",
  children,
  className = "",
}: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-3xl px-6 sm:px-8 ${className}`}>
      {children}
    </Component>
  );
}
