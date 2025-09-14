'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { ArrowRight, Sparkles } from 'lucide-react';

export function ServiceCards() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/10 to-brand-emerald/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-orange/10 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal/10 to-brand-emerald/10 px-6 py-3 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">Complete Solutions</span>
          </div>
          
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            End-to-End
            <span className="text-gradient block"> Packaging Services</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to delivery, we provide comprehensive packaging solutions 
            with uncompromising quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.slug} 
              className="card-modern card-hover group animate-fade-in-up border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-teal/5 to-brand-emerald/5 rounded-bl-3xl"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-brand-emerald/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <CardTitle className="font-display text-2xl text-slate-900 group-hover:text-brand-teal transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-slate-600 leading-relaxed text-base">
                  {service.intro}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200/50 hover:bg-brand-teal/10 hover:text-brand-teal hover:border-brand-teal/20 transition-all duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/services/${service.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-slate-700 hover:text-brand-teal hover:bg-brand-teal/5 group/btn p-4 h-auto rounded-xl border border-transparent hover:border-brand-teal/20 transition-all duration-300"
                    >
                      <span className="font-semibold">Explore Service</span>
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
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