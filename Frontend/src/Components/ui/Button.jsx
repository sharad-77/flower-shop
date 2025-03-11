import React from "react";
import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  Variant = "primary",
  size = "md",
  className,
  onClick,
  ...props
}) => {
  const VariantStyle = {
    primary: "bg-[#FF8F52] text-white border border-[#FF8F52] hover:text-[#FF8F52] hover:bg-white hover:border-[#FF8F52] transition-colors duration-300",
    secondry: "bg-white text-[#FF8F52] border border-[#FF8F52] hover:text-white hover:bg-[#FF8F52] transition-colors duration-300",
  };

  const SizeStyle = {
    xs: "px-3 py-1 text-xs",
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-2.5 text-lg",
    xl: "px-8 py-3 text-xl",
    full: "w-full py-2.5 text-base",
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex justify-center items-center font-medium rounded-md",
        VariantStyle[Variant],
        SizeStyle[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;