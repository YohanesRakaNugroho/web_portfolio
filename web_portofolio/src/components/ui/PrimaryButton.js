"use client";

export default function PrimaryButton({ children, className = "", ...props }) {
  const baseStyle =
    "inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium transition bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
