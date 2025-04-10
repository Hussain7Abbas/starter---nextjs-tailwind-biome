'use client';

import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Pages', hasDropdown: true, href: '#' },
    { label: 'About Us', href: '/about' },
    { label: 'Tours', href: '/tours' },
    { label: 'Blogs', href: '/blogs' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto px-[4em] py-[1.5em]">
        <div className="bg-[#F7F9FC]/90 backdrop-blur-sm rounded-[40px] shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-xl font-semibold font-serif">
                travely
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <IconChevronDown size={16} className="ml-1" />
                      )}
                    </Link>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-6 py-2 rounded-full text-white font-bold bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF] hover:opacity-90 transition-opacity shadow-md"
              >
                Get In Touch
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-0.5 bg-gray-900 mb-1.5" />
                <div className="w-6 h-0.5 bg-gray-900 mb-1.5" />
                <div className="w-6 h-0.5 bg-gray-900" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl">
            <div className="px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block py-2 px-4 mt-2 text-center rounded-full text-white font-bold bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF]"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
