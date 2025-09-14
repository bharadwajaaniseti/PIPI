'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      children: services.map(service => ({
        name: service.title,
        href: `/services/${service.slug}`,
        description: service.intro
      }))
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Events', href: '/events' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-lime rounded-lg flex items-center justify-center">
                <span className="text-charcoal font-bold text-lg">P</span>
              </div>
              <span className="font-tenor text-xl font-bold text-charcoal">
                PiPi Print & Packaging
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button 
                        className="flex items-center text-gray-700 hover:text-charcoal font-medium transition-colors"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {servicesOpen && (
                        <div 
                          className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-100 p-6 z-50"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <div className="grid gap-4">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="font-medium text-charcoal mb-1">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {child.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-charcoal font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/quote">
              <Button className="bg-charcoal text-white hover:bg-ink">
                Get a Quote
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="outline" className="border-lime text-lime hover:bg-lime hover:text-charcoal">
                Book Meeting
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <div className="mt-6">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-charcoal hover:bg-gray-50 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.children && (
                          <div className="ml-4 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-charcoal hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-charcoal text-white hover:bg-ink">
                        Get a Quote
                      </Button>
                    </Link>
                    <Link href="/events" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full border-lime text-lime hover:bg-lime hover:text-charcoal">
                        Book Meeting
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