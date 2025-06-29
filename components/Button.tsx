import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  target,
  rel,
}) => {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block text-center cursor-pointer";

  const variants = {
    primary: "primary-gradient text-black hover:shadow-[var(--shadow-glow)]",
    secondary:
      "bg-[var(--color-background-secondary)] text-[var(--color-foreground)] border border-[var(--color-primary)] hover:shadow-[var(--shadow-glow)]",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary-light)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    // Check if it's an external link or anchor
    if (
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("mailto:")
    ) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
          {children}
        </a>
      );
    }

    // Use Next.js Link for internal routes
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
