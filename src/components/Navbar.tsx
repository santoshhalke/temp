"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, Instagram, Facebook, Youtube, Twitter, Mail } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const navLinks = [
    { title: "Home", href: "/" },
    {
      title: "About",
      href: "#",
      dropdown: [
        { title: "Our Story", href : "/story"},
        { title: "Milestones & Achievements", href: "/milestones" },
        { title: "Certifications", href: "/certifications" },
        { title: "Gallery", href: "/gallery" },
      ],
    },
    { title: "Companies", href: "/companies" },
    { title: "Contact", href: "/contact" },
    { title: "Industries", href: "/industries" },
    { title: "Clients", href: "/clients" },
    { title: "Career", href: "/career" },
    { title: "Blogs", href: "/blog" },
  ];

  return (
    <>
      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-100 bg-[#0d1536] shadow-lg z-50 transition-transform duration-300  ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="h-5 w-5 text-white cursor-pointer" />
          </button>
        </div>
        <div className="h-full p-4 text-white flex flex-col justify-center items-start gap-3">
          <Link href={"https://instagram.com"} className="flex gap-3"> <Instagram />Instagram </Link>
          <Link href={"https://instagram.com"} className="flex gap-3"> <Facebook />Facebook </Link>
          <Link href={"https://instagram.com"} className="flex gap-3"> <Youtube />YouTube </Link>
          <Link href={"https://instagram.com"} className="flex gap-3"> <Twitter />TwitterX </Link>
          <Link href={"halkesantosh1577@gmail.com"} className="flex gap-3"> <Mail />Mail </Link>

        </div>
      </div>

      <nav className="bg-white fixed w-full top-0 z-40 font-poppins text-gray-800 px-4 py-2 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-17 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex flex-col">
                <div
                  className="h-14 w-32 bg-no-repeat bg-contain bg-center"
                  style={{ backgroundImage: `url('/images/logo.webp')` }}
                />
                Starken Groups
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {navLinks.map((link) => (
                <div key={link.title} className="relative">
                  {link.dropdown ? (
                    <div className="relative group">
                      <button
                        onClick={toggleAboutDropdown}
                        className="flex items-center text-gray-600 px-2 py-1 lg:px-3 lg:py-2 text-[10px] lg:text-sm font-medium"
                      >
                        {link.title}
                        {isAboutDropdownOpen ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </button>

                      {isAboutDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsAboutDropdownOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-600 px-3 py-2 text-sm font-medium"
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Extra Info Toggle - Hidden on Mobile */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2"
              >
                <Menu className="h-5 w-5 text-gray-700 cursor-pointer" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.title}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() =>
                        setIsAboutDropdownOpen(!isAboutDropdownOpen)
                      }
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-600"
                    >
                      {link.title}
                      {isAboutDropdownOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#EB7C19] hover:bg-gray-50"
                            onClick={() => {
                              setIsAboutDropdownOpen(false);
                              setIsOpen(false);
                            }}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#EB7C19] hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
