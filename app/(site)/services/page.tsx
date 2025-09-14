import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle, Package, Zap, Shield, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Complete packaging solutions including cartons, labels, leaflets, decorative packaging, healthcare solutions, and sustainable options.',
};

export default function ServicesPage() {
  const capabilities = [
    {
      icon: Package,
      title: 'Complete Solutions',
      description: 'End-to-end packaging from design to delivery',
      color: 'from-brand-teal to-brand-emerald'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Industry-leading production speeds',
      color: 'from-brand-orange to-orange-500'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'ISO 9001:2015 & GMP certified processes',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: '42+ years of packaging expertise',
      color: 'from-brand-teal to-teal-600'
    }
  ];

  const processSteps = [
    { step: '1', title: 'Consultation', desc: 'Understanding your requirements' },
    { step: '2', title: 'Design & Pre-Press', desc: 'Color management and proofing' },
    { step: '3', title: 'Production', desc: 'High-quality manufacturing' },
    { step: '4', title: 'Finishing', desc: 'Premium decorative options' },
    { step: '5', title: 'Quality Control', desc: 'Rigorous inspection' },
    { step: '6', title: 'Delivery', desc: 'On-time logistics' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-full opacity-20 floating-element"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full opacity-20 floating-element" style={{ animationDelay: '1s' }}></div>

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-teal/20 shadow-lg mb-6">
              <Package className="h-5 w-5 text-brand-teal" />
              <span className="text-sm font-semibold text-brand-teal">Complete Solutions</span>
            </div>
            
            <h1 className="font-tenor text-5xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Premium
              <span className="block text-brand-teal"> Packaging Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              End-to-end packaging solutions designed for healthcare, consumer, and decorative markets. 
              From concept to delivery, we ensure quality at every step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-charcoal text-white hover:bg-ink group">
                  Get Your Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-lime text-lime hover:bg-lime hover:text-charcoal">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${capability.color} rounded-2xl mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-tenor text-lg font-bold text-charcoal mb-2">{capability.title}</h3>
                    <p className="text-sm text-gray-600">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive packaging solutions tailored to your industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={service.slug} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
                <div className="grid md:grid-cols-5 gap-0 h-full">
                  {/* Image */}
                  <div className="md:col-span-2 relative overflow-hidden">
                    <img
                      src={service.gallery[0]}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-lime text-charcoal">Premium Service</Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-3 flex flex-col">
                    <CardHeader className="flex-1">
                      <CardTitle className="font-tenor text-2xl text-charcoal group-hover:text-brand-teal transition-colors mb-3">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            <CheckCircle className="h-3 w-3 text-lime" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0 mt-auto">
                      <Link href={`/services/${service.slug}`}>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-between text-charcoal hover:text-white hover:bg-charcoal group/btn transition-all duration-300"
                        >
                          <span className="font-semibold">Explore Service</span>
                          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality, efficiency, and on-time delivery for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <div key={process.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-lime to-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-charcoal">{process.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-lime to-transparent -translate-x-10"></div>
                  )}
                </div>
                <h3 className="font-tenor text-xl font-bold text-charcoal mb-3 group-hover:text-brand-teal transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-charcoal to-ink text-white">
        <div className="container text-center">
          <h2 className="font-tenor text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your packaging project and how we can deliver exceptional results for your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-lime text-charcoal hover:bg-lime/90">
                Get Your Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}