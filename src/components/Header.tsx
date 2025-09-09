'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/overview' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/bold-labs' },
    { label: 'Blog', href: '/bold-roast' },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-20 relative">
          <div className="bg-black text-white px-4 py-2 rounded text-sm font-medium">
            Anyssa
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-gray-600 ${
                pathname === item.href ? 'text-black font-medium' : 'text-gray-500'
              }`}
            >
              {String(index + 1).padStart(2, '0')} {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Inquiries Link */}
        <Link
          href="/inquiries"
          className="hidden sm:block text-sm text-black hover:text-gray-600 transition-colors underline underline-offset-4"
        >
          Inquiries →
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-20 relative w-6 h-6 flex flex-col justify-center items-center"
        >
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-50 z-10 lg:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl transition-colors hover:text-gray-600 ${
                    pathname === item.href ? 'text-black font-medium' : 'text-gray-500'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')} {item.label}
                </Link>
              ))}
              <Link
                href="/inquiries"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-black hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                Inquiries →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
