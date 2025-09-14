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
    <section className="section-padding bg-gradient-to-br from-off-white to-crisp-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal-base mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-charcoal-base/70 max-w-2xl mx-auto">
            Four decades of excellence in packaging manufacturing, 
            delivering quality and innovation across healthcare and consumer markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center group card-hover border-0 shadow-md bg-crisp-white">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-verdant-green/10 rounded-full mb-6 group-hover:bg-verdant-green/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-verdant-green" />
                  </div>
                  <div className="text-3xl font-bold text-charcoal-base mb-2 font-tenor animate-count-up">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-base mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-charcoal-base/70 leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Strip */}
        <div className="mt-16 p-8 bg-crisp-white rounded-2xl shadow-lg border border-verdant-green/10">
          <h3 className="text-center font-tenor text-2xl font-bold text-slate-dark mb-8">
            Certifications & Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management' },
              { name: 'GMP Certified', desc: 'Good Manufacturing Practice' },
              { name: 'FSC Certified', desc: 'Forest Stewardship Council' },
              { name: 'Woodland Trust', desc: 'Carbon Capture Partner' }
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 trust-badge flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-lime-accent" />
                </div>
                <h4 className="font-semibold text-charcoal-base text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-charcoal-base/70">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Dashboard */}
        <div className="mt-16 sustainability-panel">
          <div className="text-center mb-8">
            <h3 className="font-tenor text-2xl font-bold text-charcoal-base mb-2">
              Our Environmental Impact
            </h3>
            <p className="text-charcoal-base/70">Real-time sustainability metrics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-verdant-green/20 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-verdant-green" />
              </div>
              <div className="text-3xl font-bold text-verdant-green mb-2 font-tenor animate-count-up">
                12,450
              </div>
              <h4 className="font-semibold text-charcoal-base mb-1">Trees Planted</h4>
              <p className="text-sm text-charcoal-base/70">Through Woodland Trust partnership</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-verdant-green/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-verdant-green" />
              </div>
              <div className="text-3xl font-bold text-verdant-green mb-2 font-tenor animate-count-up">
                89.3
              </div>
              <h4 className="font-semibold text-charcoal-base mb-1">Tons CO₂ Captured</h4>
              <p className="text-sm text-charcoal-base/70">This year through our initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}