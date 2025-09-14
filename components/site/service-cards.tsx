'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { ArrowRight, Package } from 'lucide-react';

export function ServiceCards() {
  return (
    <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/10 to-brand-emerald/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-orange/10 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 animate-fade-in-up px-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal/10 to-brand-emerald/10 px-6 py-3 rounded-full mb-6">
            <Package className="h-5 w-5 text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">Complete Solutions</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
            End-to-End
            <span className="block text-brand-teal"> Packaging Services</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to delivery, we provide comprehensive packaging solutions 
            with uncompromising quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={service.slug} className="relative group h-full">
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal/30 to-brand-emerald/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              <Link href={`/services/${service.slug}`} className="block h-full">
                <Card 
                  className="card-modern animate-fade-in-up border border-slate-100 overflow-hidden relative z-10 cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                <CardHeader className="pb-4 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-teal/5 to-brand-emerald/5 rounded-bl-3xl"></div>

                  <div className="w-14 h-14 bg-gradient-to-br from-brand-teal/10 to-brand-emerald/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl leading-none">{service.icon}</span>
                  </div>

                  <CardTitle className="font-display text-xl sm:text-2xl text-slate-900 group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-slate-600 leading-relaxed text-sm mt-2">
                    {service.intro}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-4 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-50 text-slate-700 px-3 py-1 rounded-full border border-slate-100 hover:bg-brand-teal/10 hover:text-brand-teal transition-all duration-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="w-full flex items-center justify-between text-slate-700 group-hover:text-brand-teal p-3 rounded-lg border border-transparent group-hover:border-brand-teal/20 transition-all duration-300 mt-auto">
                      <span className="font-medium">Explore Service</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Link href="/services">
            <Button className="btn-primary text-lg">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}