import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
}) => {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center";

  const variants = {
    primary: "primary-gradient text-black hover:shadow-[var(--shadow-glow)]",
    secondary:
      "bg-[var(--color-background-secondary)] text-[var(--color-foreground)] border border-[var(--color-primary)] hover:bg-[var(--color-background-tertiary)]",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:primary-gradient hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionButton>
  );
};
