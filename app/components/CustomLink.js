"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, children }) {
  const pathname = usePathname();

  const linkClass =
    pathname === path
      ? "text-blue-500 font-bold"
      : "text-gray-700 hover:text-gray-900";
  return (
    <Link href={path} className={linkClass}>
      {children}
    </Link>
  );
}
