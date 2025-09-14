'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Leaf, Shield, Zap } from 'lucide-react';

export function HeroSplit() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-full opacity-20 floating-element"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full opacity-20 floating-element" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-brand-emerald to-emerald-400 rounded-full opacity-20 floating-element" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-teal/20 shadow-lg">
                <Award className="h-5 w-5 text-brand-teal" />
                <span className="text-sm font-semibold text-slate-700">ISO 9001:2015 & GMP Certified</span>
              </div>
              
              <h1 className="font-display text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Premium
                <span className="text-gradient block"> Packaging</span>
                Solutions
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Healthcare & decorative packaging specialists delivering cartons, labels & leaflets 
                with 42 years of expertise and uncompromising quality.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button className="btn-primary group text-lg">
                  Get Your Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button className="btn-secondary text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-brand-teal group-hover:scale-110 transition-transform">42K</div>
                <div className="text-sm text-slate-600">sq ft facility</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-brand-emerald group-hover:scale-110 transition-transform">42+</div>
                <div className="text-sm text-slate-600">years experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-brand-orange group-hover:scale-110 transition-transform">100%</div>
                <div className="text-sm text-slate-600">quality assured</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-brand-teal group-hover:scale-110 transition-transform">95%</div>
                <div className="text-sm text-slate-600">recyclable</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200/50">
                <img
                  src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg"
                  alt="Premium packaging solutions"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-xl flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Sustainable</div>
                      <div className="text-xs text-slate-600">95% recyclable materials</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-400 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">GMP Certified</div>
                      <div className="text-xs text-slate-600">Healthcare ready</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Fast Delivery</div>
                      <div className="text-xs text-slate-600">On-time guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-teal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}