import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`
        glass-card transition-all duration-300
        ${
          hover
            ? "hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)]"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};
