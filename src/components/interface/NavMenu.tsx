"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  dropdown: boolean;
  items?: { name: string; href: string }[];
}

interface NavMenuProps {
  navigation: NavItem[];
  currentPath: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ navigation, currentPath }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-lg ${
        scrolled ? "bg-black/60 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/Images/Logos/mcslogo.png"
                alt="MCS Logo"
                className="w-10 sm:w-12 rounded-full"
                loading="lazy"
              />
              <div>
                <div className="text-lg font-bold text-blue-900">Montessori</div>
                <div className="text-sm text-blue-700">Cambridge School</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                      currentPath === item.href || currentPath.startsWith(item.href + "/")
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="h-4 w-4 inline-block ml-1" />
                    )}
                  </a>

                  {item.dropdown && item.items?.length && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                            role="menuitem"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavMenu;
