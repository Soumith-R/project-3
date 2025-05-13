import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "link" | "primary";
  size?: "default" | "icon" | "lg";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none transition-colors duration-200";
  const variantStyles = {
    default: "bg-navy-900 text-white hover:bg-opacity-90",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    link: "bg-transparent p-0 hover:opacity-80",
    primary: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizeStyles = {
    default: "text-base",
    icon: "p-2",
    lg: "text-lg px-6 py-3",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};