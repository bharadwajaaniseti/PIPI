import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

export function Footer() {
  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management' },
    { name: 'GMP Certified', description: 'Good Manufacturing Practice' },
    { name: 'FSC Certified', description: 'Forest Stewardship Council' },
    { name: 'Woodland Trust', description: 'Carbon Capture Partner' }
  ];

  return (
    <footer className="bg-gradient-to-br from-charcoal-base to-navy-base text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/image.png" 
                alt="PiPi Print & Packaging" 
                className="h-8 w-auto"
              />
              <span className="font-tenor text-xl font-bold">
                PiPi Print & Packaging
              </span>
            </div>
            <p className="text-crisp-white/80 mb-6 leading-relaxed">
              Healthcare & Decorative Packaging Specialists. Delivering quality, 
              sustainability, and innovation since 1982.
            </p>
            <div className="space-y-2 text-sm text-crisp-white/60">
              <p>42,000 sq ft facility</p>
              <p>In-house reproduction</p>
              <p>Complete finishing services</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-tenor text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-crisp-white/80 hover:text-lime-accent transition-colors text-sm hover:translate-x-1 inline-block duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-tenor text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-crisp-white/80 hover:text-lime-accent transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-crisp-white/80 hover:text-lime-accent transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-crisp-white/80 hover:text-lime-accent transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-crisp-white/80 hover:text-lime-accent transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-crisp-white/80 hover:text-lime-accent transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-crisp-white/80 hover:text-lime-accent transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-tenor text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3 text-sm text-crisp-white/80">
              <p>
                Unit 5, Industrial Estate<br />
                Manufacturing District<br />
                Manchester M1 5TG, UK
              </p>
              <p>
                <a href="tel:+441234567890" className="hover:text-lime-accent transition-colors">
                  +44 (0) 123 456 7890
                </a>
              </p>
              <p>
                <a href="mailto:hello@pipiprint.co.uk" className="hover:text-lime-accent transition-colors">
                  hello@pipiprint.co.uk
                </a>
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3 text-sm">Quick Actions</h4>
              <div className="space-y-2">
                <Link 
                  href="/quote"
                  className="block text-sm bg-lime-accent text-charcoal-base px-3 py-2 rounded hover:bg-sunny-yellow hover:scale-105 transition-all duration-200 text-center font-medium"
                >
                  Get a Quote
                </Link>
                <Link 
                  href="/events"
                  className="block text-sm border border-crisp-white/30 px-3 py-2 rounded hover:border-lime-accent hover:bg-lime-accent/10 transition-all duration-200 text-center"
                >
                  Book Meeting
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="mt-16 pt-8 border-t border-crisp-white/20">
          <div className="mb-8">
            <h4 className="font-tenor text-lg font-semibold mb-6 text-center">
              Certifications & Partnerships
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-crisp-white/10 rounded-lg p-4 mb-2 h-16 flex items-center justify-center group-hover:bg-crisp-white/20 group-hover:scale-105 transition-all duration-300">
                    <span className="text-lime-accent font-medium text-sm">{cert.name}</span>
                  </div>
                  <p className="text-xs text-crisp-white/60">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-crisp-white/20 space-y-4 sm:space-y-0">
            <p className="text-sm text-crisp-white/60">
              © 2024 PiPi Print & Packaging Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/legal/privacy" className="text-sm text-crisp-white/60 hover:text-lime-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-sm text-crisp-white/60 hover:text-lime-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/cookies" className="text-sm text-crisp-white/60 hover:text-lime-accent transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}