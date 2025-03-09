import React, { Children } from "react";
import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  Variant = "primary",
  size = "full",
  className,
  onClick,
  ...props
}) => {
  const VariantStyle = {
    primary: "bg-[#FF8F52] text-white hover:text-[#FF8F52] hover:bg-white hover:border-[#FF8F52] hover:border-2 duration-300",
    secondry: "bg-white text-[#FF8F52] hover:text-white hover:bg-[#FF8F52] hover:border-[#FF8F52] hover:border-2 duration-300",
  };

  const SizeStyle = {
    sm: "w-20 h-10",
    md: "w-40 h-20",
    full: "w-full h-full",
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "py-1 border border-orange-500 rounded rounded-lg",
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
