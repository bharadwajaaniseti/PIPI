'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Leaf } from 'lucide-react';

export function HeroSplit() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-base via-charcoal-base to-navy-base/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-verdant-green/20 px-4 py-2 rounded-full backdrop-blur-sm border border-verdant-green/30">
                <Award className="h-4 w-4 text-lime-accent" />
                <span className="text-sm font-medium text-crisp-white">ISO 9001:2015 & GMP Certified</span>
              </div>
              
              <h1 className="font-tenor text-5xl lg:text-6xl font-bold text-crisp-white leading-tight">
                Healthcare & 
                <span className="text-gradient"> Decorative</span><br />
                Packaging Specialists
              </h1>
              
              <p className="text-xl text-off-white/80 leading-relaxed max-w-lg">
                Cartons, Labels & Leaflets — delivered together, on time. 
                Premium packaging solutions with 42 years of expertise.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-lime-accent text-charcoal-base hover:bg-sunny-yellow hover:scale-105 group transition-all duration-200 shadow-lg">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="border-2 border-verdant-green text-verdant-green hover:bg-verdant-green hover:text-white hover:scale-105 transition-all duration-200">
                  Book an Event Meeting
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-crisp-white/20">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-crisp-white animate-count-up">42,000</div>
                <div className="text-sm text-off-white/70">sq ft facility</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-crisp-white animate-count-up">42+</div>
                <div className="text-sm text-off-white/70">years experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-lime-accent animate-count-up">100%</div>
                <div className="text-sm text-off-white/70">quality assured</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-verdant-green/20 to-lime-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-crisp-white/10">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg"
                alt="Premium packaging solutions"
                className="w-full h-96 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-crisp-white rounded-lg p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-verdant-green" />
                  <div>
                    <div className="text-sm font-semibold text-charcoal-base">Sustainable</div>
                    <div className="text-xs text-charcoal-base/70">95% recyclable</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-crisp-white rounded-lg p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-navy-base" />
                  <div>
                    <div className="text-sm font-semibold text-charcoal-base">GMP Certified</div>
                    <div className="text-xs text-charcoal-base/70">Healthcare ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-verdant-green/20 to-lime-accent/20"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="1" height="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" className="text-crisp-white"/>
        </svg>
      </div>
    </section>
  );
}