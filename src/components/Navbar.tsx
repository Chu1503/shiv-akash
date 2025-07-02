"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} relative group`}>
      <span className="relative z-10">{title}</span>
      <span
        className={`absolute left-0 -bottom-0.5 h-[2px] bg-black transition-all duration-300 ease-in-out
          ${isActive ? "w-full" : "w-0"} group-hover:w-full`}
      />
    </Link>
  );
};


const Navbar = () => {
  return (
    <header className="w-full px-120 py-8 font-medium flex items-center justify-between bg-[#4af6a0]">
      <nav className="flex gap-30">
        <CustomLink href="/about" title="About" />
        <CustomLink href="/experience" title="Experience" />
      </nav>
      <div className="absolute left-1/2 -translate-x-1/2">
        {/* <CustomLink href="/" title="Home" /> */}
        <Link href="/">Shiv Akash</Link>
      </div>
      <nav className="flex gap-30">
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/contact" title="Contact" />
      </nav>
    </header>
  );
};

export default Navbar;
