"use client";

export default function PrimaryButton({ children, className = "", ...props }) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition bg-blue text-white hover:opacity-90";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
