import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Compass } from 'lucide-react';
import { personalInfo } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { styleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '教育飛輪', href: '#flywheel' },
    { name: '感動故事', href: '#stories' },
    { name: '親筆推薦', href: '#recommendations' },
    { name: '殊榮歷練', href: '#honors' },
    { name: '媒體報導', href: '#media' },
    { name: '光影藝廊', href: '#gallery' },
    { name: '治校願景', href: '#vision' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-2.5'
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-3.5 border-b border-slate-200/60 dark:border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand: 網站名稱「愛，讓孩子比昨天更優秀」 */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="./images/portrait/avatar.jpg"
                alt="董勳遠主任"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-500 shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 bg-amber-500 text-white rounded-full p-0.5 shadow-sm">
                <Sparkles className="w-3 h-3" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                  愛，讓孩子比昨天更優秀
                </span>
                {styleTheme === 'chinese' && (
                  <span className="chinese-seal text-[11px] hidden md:inline-block">
                    卓越
                  </span>
                )}
                {styleTheme === 'japanese' && (
                  <span className="text-[11px] px-1.5 py-0.2 rounded-full border border-emerald-600 text-emerald-700 dark:text-emerald-300 hidden md:inline-block font-mono">
                    和
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide flex items-center gap-1.5">
                <span>董勳遠 主任</span>
                <span>·</span>
                <span className="text-amber-600 dark:text-amber-400 font-semibold">116年國中校長甄選</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick CTA to Vision Blueprint */}
          <div className="hidden sm:flex items-center">
            <a
              href="#vision"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl text-white bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 shadow-md hover:shadow-lg transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>治校願景藍圖</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-fade-in shadow-xl">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 mb-2">
            <strong>網站名稱：</strong>愛，讓孩子比昨天更優秀
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#vision"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-amber-500 to-red-600 shadow-md"
            >
              <Compass className="w-4 h-4" />
              <span>閱覽治校願景藍圖</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
