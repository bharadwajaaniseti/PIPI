import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export function Footer() {
  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management' },
    { name: 'GMP Certified', description: 'Good Manufacturing Practice' },
    { name: 'FSC Certified', description: 'Forest Stewardship Council' },
    { name: 'Woodland Trust', description: 'Carbon Capture Partner' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 hero-pattern"></div>
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="/pipi-logo.png" 
                alt="PiPi Print & Packaging" 
                className="h-12 w-auto"
              />
              <div>
                <span className="font-display text-2xl font-bold">PiPi</span>
                <div className="text-sm text-slate-400 -mt-1">Print & Packaging</div>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Healthcare & Decorative Packaging Specialists. Delivering quality, 
              sustainability, and innovation since 1982.
            </p>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>42,000 sq ft facility</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-emerald rounded-full"></div>
                <span>In-house reproduction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                <span>Complete finishing services</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-8 text-white">Services</h3>
            <ul className="space-y-4">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-brand-teal transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-2 transition-transform">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-8 text-white">Company</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Sustainability', href: '/sustainability' },
                { name: 'Events', href: '/events' },
                { name: 'News', href: '/news' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-brand-teal transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-2 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-8 text-white">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-teal mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  Unit 5, Industrial Estate<br />
                  Manufacturing District<br />
                  Manchester M1 5TG, UK
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-teal flex-shrink-0" />
                <a href="tel:+441234567890" className="text-sm text-slate-300 hover:text-brand-teal transition-colors">
                  +44 (0) 123 456 7890
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-teal flex-shrink-0" />
                <a href="mailto:hello@pipiprint.co.uk" className="text-sm text-slate-300 hover:text-brand-teal transition-colors">
                  hello@pipiprint.co.uk
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-brand-teal mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  Mon-Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Link 
                href="/quote"
                className="block text-center bg-gradient-to-r from-brand-teal to-brand-emerald text-white px-6 py-3 rounded-xl font-semibold hover:from-brand-emerald hover:to-brand-teal hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Quote
              </Link>
              <Link 
                href="/events"
                className="block text-center border-2 border-slate-600 text-slate-300 px-6 py-3 rounded-xl font-semibold hover:border-brand-teal hover:text-brand-teal hover:scale-105 transition-all duration-300"
              >
                Book Meeting
              </Link>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-slate-700 pt-16 mb-16">
          <h4 className="font-display text-2xl font-semibold text-center mb-12">
            Certifications & Partnerships
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-brand-teal group-hover:to-brand-emerald group-hover:scale-110 transition-all duration-300">
                  <span className="text-brand-teal group-hover:text-white font-bold text-sm">{cert.name.split(' ')[0]}</span>
                </div>
                <h5 className="text-sm font-semibold text-white mb-1">{cert.name}</h5>
                <p className="text-xs text-slate-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2024 PiPi Print & Packaging Ltd. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="/legal/privacy" className="text-sm text-slate-400 hover:text-brand-teal transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-sm text-slate-400 hover:text-brand-teal transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/cookies" className="text-sm text-slate-400 hover:text-brand-teal transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}