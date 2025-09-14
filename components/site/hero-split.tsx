'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Leaf } from 'lucide-react';

export function HeroSplit() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-lime/10 px-4 py-2 rounded-full">
                <Award className="h-4 w-4 text-lime" />
                <span className="text-sm font-medium text-charcoal">ISO 9001:2015 & GMP Certified</span>
              </div>
              
              <h1 className="font-tenor text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Healthcare & 
                <span className="text-gradient"> Decorative</span><br />
                Packaging Specialists
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Cartons, Labels & Leaflets — delivered together, on time. 
                Premium packaging solutions with 42 years of expertise.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-charcoal text-white hover:bg-ink group">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="border-2 border-lime text-lime hover:bg-lime hover:text-charcoal">
                  Book an Event Meeting
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-charcoal">42,000</div>
                <div className="text-sm text-gray-600">sq ft facility</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-charcoal">42+</div>
                <div className="text-sm text-gray-600">years experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-lime">100%</div>
                <div className="text-sm text-gray-600">quality assured</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-lime/20 to-brand-blue/20 rounded-2xl p-8 backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg"
                alt="Premium packaging solutions"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-lime" />
                  <div>
                    <div className="text-sm font-semibold text-charcoal">Sustainable</div>
                    <div className="text-xs text-gray-600">95% recyclable</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-sm font-semibold text-charcoal">GMP Certified</div>
                    <div className="text-xs text-gray-600">Healthcare ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-lime/20 to-brand-blue/20"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="1" height="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" className="text-charcoal"/>
        </svg>
      </div>
    </section>
  );
}