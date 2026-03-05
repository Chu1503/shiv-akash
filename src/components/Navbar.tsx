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
  target?: string;
  onClick?: () => void;
};

const CustomLink = ({ href, title, target, className = "", onClick }: CustomLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  const handleClick = async () => {
    if (onClick) {
      await router.push(href);
      onClick();
    }
  };

  const baseClass = `relative text-sm transition-colors duration-200 ${
    isActive ? "text-white" : "text-white/40 hover:text-white/80"
  } ${className}`;

  if (onClick) {
    return (
      <button onClick={handleClick} className={baseClass}>
        {title}
        {isActive && (
          <motion.span
            layoutId="nav-active"
            className="absolute -bottom-0.5 left-0 w-full h-px bg-white/40"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={baseClass}
    >
      {title}
      {isActive && (
        <motion.span
          layoutId="nav-active"
          className="absolute -bottom-0.5 left-0 w-full h-px bg-white/40"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </Link>
  );
};

const navLinks = [
  { href: "/education",    title: "Education"    },
  { href: "/experience",   title: "Experience"   },
  { href: "/",             title: "Home"         },
  { href: "/projects",     title: "Projects"     },
  { href: "/publications", title: "Publications" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname === "/") return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-6 pb-4">

      <button
        className="lg:hidden absolute left-4 top-6 z-50 text-white/50 hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={22} />
      </button>

      <nav className="hidden lg:flex items-center gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-3 backdrop-blur-md">
        {navLinks.map(({ href, title }) => (
          <CustomLink key={href} href={href} title={title} />
        ))}
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/80 lg:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 left-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={22} />
            </button>

            <nav className="flex flex-col items-center gap-10">
              {navLinks.map(({ href, title }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CustomLink
                    href={href}
                    title={title}
                    className="text-3xl font-medium"
                    onClick={() => setIsOpen(false)}
                  />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;