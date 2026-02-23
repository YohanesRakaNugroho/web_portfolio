"use client";

export default function SecondaryButton({ children, className = "", ...props }) {
  const baseStyle =
    "inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium transition text-white hover:border-white hover:bg-white/10 transition-all duration-300";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
