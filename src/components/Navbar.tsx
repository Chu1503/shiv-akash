"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
};

const CustomLink = ({
  href,
  title,
  className = "",
  onClick,
}: CustomLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  const handleClick = async () => {
    if (onClick) {
      await router.push(href);
      onClick();
    }
  };

  if (onClick) {
    return (
      <button onClick={handleClick} className={`${className} relative group`}>
        <span className="relative z-10">{title}</span>
        <span
          className={`absolute left-0 -bottom-0.5 h-[2px] bg-black transition-all duration-300 ease-in-out
            ${isActive ? "w-full" : "w-0"} group-hover:w-full`}
        />
      </button>
    );
  }

  return (
    <Link href={href} className={`${className} relative group`}>
      <span className="relative z-10">{title}</span>
      <span
        className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ease-in-out
          ${isActive ? "w-full" : "w-0"} group-hover:w-full`}
      />
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-8 px-4 font-medium flex items-center justify-between relative">
      {!isOpen && (
        <button className="lg:hidden z-50" onClick={handleClick}>
          <Menu size={30} className="text-white" />
        </button>
      )}

      {/* Desktop Nav Menu */}
      <div className="w-auto mx-auto justify-center items-center hidden lg:flex z-40 text-white relative rounded-[30px] overflow-hidden px-10 py-4">
        <div className="absolute inset-0 rounded-[30px] z-10 pointer-events-none shadow-[inset_2px_2px_0px_-2px_rgba(255,255,255,0.7),inset_0_0_3px_1px_rgba(255,255,255,0.7)]" />
        <div className="absolute inset-0 rounded-[30px] -z-10 [filter:url(#container-glass)] backdrop-blur-0" />
        <nav className="flex gap-30">
          {/* <CustomLink href="/about" title="About" /> */}
          <CustomLink href="/experience" title="Experience" />
          <Link href="/" className="mx-10">
            Shiv Akash
          </Link>
          <CustomLink href="/projects" title="Projects" />
          {/* <CustomLink href="/contact" title="Contact" /> */}
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-screen h-screen bg-amber-500 z-40 flex flex-col justify-center items-center px-6 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-12 text-4xl">
              <button onClick={handleClick} className=" text-black">
                <X size={36} />
              </button>
              <CustomLink
                href="/"
                title="Home"
                onClick={() => setIsOpen(false)}
              />
              {/* <CustomLink
                href="/about"
                title="About"
                onClick={() => setIsOpen(false)}
              /> */}
              <CustomLink
                href="/experience"
                title="Experience"
                onClick={() => setIsOpen(false)}
              />
              <CustomLink
                href="/projects"
                title="Projects"
                onClick={() => setIsOpen(false)}
              />
              {/* <CustomLink
                href="/contact"
                title="Contact"
                onClick={() => setIsOpen(false)}
              /> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
