import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Hours', href: '#hours' },
  { label: 'Location', href: '#location' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900/95 to-green-900/95 backdrop-blur-sm border-b border-yellow-500/30 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-yellow-300 group-hover:text-yellow-200 transition-colors" />
            <span className="text-xl md:text-2xl font-bold text-white">
              Tiny Town Holiday Village
            </span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-yellow-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white hover:text-yellow-300 transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-3 pb-4 border-t border-yellow-500/30 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-yellow-300 transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
