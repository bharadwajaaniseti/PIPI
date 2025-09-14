import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle, Package, Zap, Shield, Award, Sparkles, Users, Palette, Cog, Search, Truck } from 'lucide-react';
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
    { 
      icon: Users,
      step: '01', 
      title: 'Consultation', 
      desc: 'We dive deep into your requirements, understanding your brand vision and packaging goals',
      highlights: ['Requirements Analysis', 'Brand Understanding', 'Goal Setting']
    },
    { 
      icon: Palette,
      step: '02', 
      title: 'Design & Pre-Press', 
      desc: 'Our design team creates stunning visuals with precise color management and proofing',
      highlights: ['Creative Design', 'Color Management', 'Digital Proofing']
    },
    { 
      icon: Cog,
      step: '03', 
      title: 'Production', 
      desc: 'State-of-the-art manufacturing ensures high-quality output at scale',
      highlights: ['Advanced Printing', 'Precision Cutting', 'Scale Production']
    },
    { 
      icon: Award,
      step: '04', 
      title: 'Finishing', 
      desc: 'Premium decorative options that make your packaging stand out on the shelf',
      highlights: ['Foil Stamping', 'Embossing', 'Special Coatings']
    },
    { 
      icon: Search,
      step: '05', 
      title: 'Quality Control', 
      desc: 'Rigorous inspection at every stage ensures perfection in every package',
      highlights: ['Multi-point Inspection', 'Color Verification', 'Final Review']
    },
    { 
      icon: Truck,
      step: '06', 
      title: 'Delivery', 
      desc: 'On-time logistics with careful handling to get your packaging where it needs to be',
      highlights: ['Secure Packaging', 'Tracked Shipping', 'On-time Delivery']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-full opacity-20 floating-element"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full opacity-20 floating-element" style={{ animationDelay: '1s' }}></div>

        <div className="container relative z-10">
          <div className="text-center mb-8 animate-fade-in-up">
            
            <h1 className="font-tenor text-4xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
              Premium
              <span className="block text-brand-teal"> Packaging Services</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
              End-to-end packaging solutions designed for healthcare, consumer, and decorative markets. 
              From concept to delivery, we ensure quality at every step.
            </p>
            
            <div className="mt-6 flex justify-center">
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-brand-teal/20 text-brand-teal shadow-lg cta-anim cta-glow bg-transparent hover:bg-transparent">
                  <Package className="h-5 w-5 text-brand-teal" />
                  <span className="text-sm font-semibold text-brand-teal">Discuss Your Project</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
      <section className="py-8 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive packaging solutions tailored to your industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                        {service.description || service.intro}
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
        </div>
      </section>

      {/* Redesigned Process Section */}
      <section className="py-24 bg-gradient-to-b from-white via-brand-teal/5 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-full blur-3xl animate-pulse transform translate-x-1/2"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-brand-emerald/10 to-transparent rounded-full blur-3xl animate-pulse transform -translate-x-1/2" style={{ animationDelay: '2s' }}></div>
        
        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">            
            <h2 className="font-tenor text-4xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Your Journey to
              <span className="block text-brand-teal">Perfect Packaging</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every great package starts with a vision. We transform that vision into reality through our proven 6-step process.
            </p>
          </div>

          {/* Process Timeline - Desktop */}
          <div className="hidden lg:block relative mb-20">
            {/* Main Timeline Path */}
            <svg className="absolute top-32 left-0 w-full h-4 z-0" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#13BBBC" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#13BBBC" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 0 8 Q 160 2, 320 8 T 640 8 T 960 8 T 1280 8"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 4"
                className="animate-pulse"
              />
            </svg>

            {/* Process Cards */}
            <div className="grid grid-cols-6 gap-4 relative">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.step} className={`relative ${isEven ? 'mt-0' : 'mt-40'}`}>
                    {/* Card */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-emerald/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                      
                      <Card className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        <div className="absolute top-0 right-0 text-6xl font-bold text-brand-teal/5">{step.step}</div>
                        
                        <CardContent className="p-6 relative z-10">
                          {/* Icon Badge */}
                          <div className="mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                              <Icon className="h-7 w-7 text-white" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-bold text-brand-teal">{step.step}</span>
                              <div className="h-px flex-1 bg-gradient-to-r from-brand-teal/30 to-transparent"></div>
                            </div>
                            
                            <h3 className="font-tenor text-lg font-bold text-charcoal group-hover:text-brand-teal transition-colors">
                              {step.title}
                            </h3>
                            
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {step.desc}
                            </p>

                            {/* Feature Pills */}
                            <div className="pt-3 space-y-1">
                              {step.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full"></div>
                                  <span className="text-xs text-gray-500">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Timeline - Mobile */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.step} className="relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-full left-8 w-1 h-6 bg-gradient-to-b from-brand-teal to-brand-teal/30"></div>
                  )}

                  <div className="flex gap-4">
                    {/* Step Indicator */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <Card className="flex-1 border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-bold text-brand-teal">{step.step}</span>
                          <div className="h-px flex-1 bg-gradient-to-r from-brand-teal/30 to-transparent"></div>
                        </div>
                        
                        <h3 className="font-tenor text-xl font-bold text-charcoal mb-2">
                          {step.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 mb-4">
                          {step.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {step.highlights.map((highlight, idx) => (
                            <span key={idx} className="text-xs bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats & CTA */}
          <div className="mt-20 bg-gradient-to-r from-brand-teal/5 via-brand-emerald/5 to-brand-teal/5 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-brand-teal to-brand-emerald bg-clip-text text-transparent mb-2">500+</div>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-brand-teal to-brand-emerald bg-clip-text text-transparent mb-2">99%</div>
                <p className="text-gray-600">On-Time Delivery</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-brand-teal to-brand-emerald bg-clip-text text-transparent mb-2">42+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">Ready to experience our process firsthand?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-brand-teal to-brand-emerald text-white hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg rounded-2xl">
                    Start Your Journey
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/quote">
                  <Button size="lg" variant="outline" className="text-brand-teal border-brand-teal/20 hover:bg-brand-teal/5 px-8 py-3 text-lg rounded-2xl">
                    Get Your Quote
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}