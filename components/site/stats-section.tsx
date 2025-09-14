'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Factory, Users, Leaf } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Factory,
      number: '42,000',
      label: 'Square Feet Facility',
      description: 'State-of-the-art manufacturing space'
    },
    {
      icon: Users,
      number: '42+',
      label: 'Years Experience',
      description: 'Trusted packaging expertise since 1982'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Quality Assured',
      description: 'ISO 9001:2015 & GMP certified processes'
    },
    {
      icon: Leaf,
      number: '95%',
      label: 'Recyclable Materials',
      description: 'Committed to sustainable packaging'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four decades of excellence in packaging manufacturing, 
            delivering quality and innovation across healthcare and consumer markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-lime/10 rounded-full mb-6 group-hover:bg-lime/20 transition-colors">
                    <Icon className="h-8 w-8 text-lime" />
                  </div>
                  <div className="text-3xl font-bold text-charcoal mb-2 font-tenor">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Strip */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-sm">
          <h3 className="text-center font-tenor text-2xl font-bold text-charcoal mb-8">
            Certifications & Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management' },
              { name: 'GMP Certified', desc: 'Good Manufacturing Practice' },
              { name: 'FSC Certified', desc: 'Forest Stewardship Council' },
              { name: 'Woodland Trust', desc: 'Carbon Capture Partner' }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-lime" />
                </div>
                <h4 className="font-semibold text-charcoal text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}