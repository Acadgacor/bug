import Link from "next/link";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "ai";
  href?: string;
};

export default function Button({ variant = "primary", className, children, href, ...rest }: Props) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  let variantStyles = "";
  if (variant === "ghost") {
    variantStyles = "bg-transparent text-brand-dark hover:bg-brand-secondary hover:text-brand-dark";
  } else if (variant === "ai") {
    variantStyles = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-indigo-500/50 hover:scale-105 border-none";
  } else {
    // primary
    variantStyles = "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm hover:shadow-md hover:-translate-y-0.5";
  }

  const cls = base + " " + variantStyles + (className ? " " + className : "");

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
