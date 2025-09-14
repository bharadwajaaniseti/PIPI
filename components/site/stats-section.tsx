'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Factory, Users, Leaf, Target, Globe, Clock, Shield } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Factory,
      number: '42,000',
      label: 'Square Feet',
      description: 'State-of-the-art manufacturing facility',
      color: 'from-brand-teal to-brand-emerald'
    },
    {
      icon: Users,
      number: '42+',
      label: 'Years Experience',
      description: 'Trusted expertise since 1982',
      color: 'from-brand-emerald to-emerald-500'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Quality Assured',
      description: 'ISO 9001:2015 & GMP certified',
      color: 'from-brand-orange to-orange-500'
    },
    {
      icon: Leaf,
      number: '95%',
      label: 'Recyclable',
      description: 'Sustainable packaging materials',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const certifications = [
    { icon: Shield, name: 'ISO 9001:2015', desc: 'Quality Management' },
    { icon: Award, name: 'GMP Certified', desc: 'Good Manufacturing Practice' },
    { icon: Leaf, name: 'FSC Certified', desc: 'Forest Stewardship Council' },
    { icon: Globe, name: 'Woodland Trust', desc: 'Carbon Capture Partner' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full hero-pattern"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-teal/20 mb-6">
            <Target className="h-5 w-5 text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">Trusted Excellence</span>
          </div>
          
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Industry
            <span className="text-gradient block"> Leadership</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Four decades of excellence in packaging manufacturing, delivering quality 
            and innovation across healthcare and consumer markets.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="card-modern card-hover text-center group border-0 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-3xl`}></div>
                  
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-slate-900 mb-2 font-display group-hover:text-brand-teal transition-colors">
                    {stat.number}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200/50 mb-20 animate-fade-in-up">
          <h3 className="text-center font-display text-3xl font-bold text-slate-900 mb-12">
            Certifications & Standards
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-brand-teal transition-colors">{cert.name}</h4>
                  <p className="text-xs text-slate-600">{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sustainability Dashboard */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-200/50 animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200/50 mb-6">
              <Leaf className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">Environmental Impact</span>
            </div>
            
            <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">
              Our Sustainability Commitment
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Real-time metrics showcasing our environmental initiatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Leaf className="h-12 w-12 text-white" />
              </div>
              <div className="text-5xl font-bold text-emerald-600 mb-3 font-display">
                12,450
              </div>
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Trees Planted</h4>
              <p className="text-sm text-slate-600">Through our Woodland Trust partnership</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Globe className="h-12 w-12 text-white" />
              </div>
              <div className="text-5xl font-bold text-teal-600 mb-3 font-display">
                89.3
              </div>
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Tons CO₂ Captured</h4>
              <p className="text-sm text-slate-600">This year through our green initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}