'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, X } from 'lucide-react';
import { services } from '@/data/services';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      children: services.map(service => ({
        name: service.title,
        href: `/services/${service.slug}`,
        description: service.intro,
        icon: service.icon
      }))
    },
  // Case Studies and Events removed per request
  { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const pathname = usePathname() || '/';

  const isActive = (href: string, hasDropdown?: boolean) => {
    if (hasDropdown) return pathname.startsWith(href);
    return pathname === href;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container">
  <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/pipi%20logo.png" 
                  alt="PiPi Print & Packaging" 
                  className="h-40 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button 
                        className={`flex flex-col items-center px-4 py-2 font-medium transition-colors rounded-lg hover:bg-slate-100/50 ${isActive(item.href, true) ? 'text-brand-teal' : 'text-slate-700 hover:text-brand-teal'}`}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="flex items-center">
                          <span>{item.name}</span>
                          <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                        </div>
                        <span className={`mt-2 block h-0.5 rounded-full transition-all ${isActive(item.href, true) ? 'w-6 bg-gradient-to-r from-brand-teal to-brand-emerald opacity-100' : 'w-0 bg-transparent'}`}></span>
                      </button>
                      {servicesOpen && (
                        <div 
                          className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/50 p-6 z-50 animate-fade-in-down"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <div className="grid gap-3">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item"
                              >
                                <div className="text-2xl mt-1 group-hover/item:scale-110 transition-transform">
                                  {child.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-slate-900 group-hover/item:text-brand-teal transition-colors">
                                    {child.name}
                                  </div>
                                  <div className="text-sm text-slate-600 mt-1">
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Link
                        href={item.href}
                        className={`px-4 py-2 font-medium transition-colors rounded-lg ${isActive(item.href) ? 'text-brand-teal' : 'text-slate-700 hover:text-brand-teal'}`}
                      >
                        {item.name}
                      </Link>
                      <span className={`mt-2 block h-0.5 rounded-full transition-all ${isActive(item.href) ? 'w-6 bg-gradient-to-r from-brand-teal to-brand-emerald' : 'w-0 bg-transparent'}`}></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/quote">
              <Button className="btn-primary">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-white">
                <div className="mt-8">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-xl transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.children && (
                          <div className="ml-4 space-y-1 mt-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="flex items-center space-x-3 px-4 py-2 text-slate-600 hover:text-brand-teal hover:bg-slate-50 rounded-lg transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="text-lg">{child.icon}</span>
                                <span>{child.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-3">
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="w-full btn-primary">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}