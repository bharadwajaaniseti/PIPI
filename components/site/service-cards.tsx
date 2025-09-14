'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export function ServiceCards() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Complete Packaging Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to delivery, we provide end-to-end packaging services 
            with uncompromising quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-lime/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lime/20 transition-colors">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="font-tenor text-xl text-charcoal group-hover:text-brand-blue transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.intro}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-charcoal hover:text-brand-blue hover:bg-brand-blue/5 group/btn"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-charcoal text-white hover:bg-ink">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}