import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Factory, Users, Award, Leaf, Target, Clock, Shield, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about PiPi Print & Packaging - 42+ years of expertise in healthcare and decorative packaging solutions.',
};

export default function AboutPage() {
  const milestones = [
    { year: '1982', title: 'Company Founded', description: 'Started as a small printing business in Manchester' },
    { year: '1995', title: 'Healthcare Focus', description: 'Specialized in pharmaceutical packaging solutions' },
    { year: '2008', title: 'GMP Certification', description: 'Achieved Good Manufacturing Practice certification' },
    { year: '2015', title: 'Sustainability Initiative', description: 'Launched comprehensive environmental program' },
    { year: '2020', title: 'Digital Transformation', description: 'Invested in cutting-edge digital printing technology' },
    { year: '2024', title: 'Carbon Neutral', description: 'Achieved carbon neutral manufacturing operations' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to quality in every aspect of our operations',
      color: 'from-brand-teal to-brand-emerald'
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'Building long-term relationships through exceptional service and support',
      color: 'from-brand-orange to-orange-500'
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Leading the industry in sustainable packaging solutions and practices',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Continuously investing in new technologies and processes',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const certifications = [
    { icon: Shield, name: 'ISO 9001:2015', desc: 'Quality Management System' },
    { icon: Award, name: 'GMP Certified', desc: 'Good Manufacturing Practice' },
    { icon: Leaf, name: 'FSC Certified', desc: 'Forest Stewardship Council' },
    { icon: Globe, name: 'Carbon Neutral', desc: 'Net Zero Manufacturing' }
  ];

  const stats = [
    { number: '42+', label: 'Years Experience', desc: 'Trusted expertise since 1982' },
    { number: '42K', label: 'Sq Ft Facility', desc: 'State-of-the-art manufacturing' },
    { number: '500+', label: 'Happy Clients', desc: 'Across healthcare & consumer markets' },
    { number: '95%', label: 'Recyclable', desc: 'Sustainable packaging materials' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-full opacity-20 floating-element"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full opacity-20 floating-element" style={{ animationDelay: '1s' }}></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-teal/20 shadow-lg">
                  <Factory className="h-5 w-5 text-brand-teal" />
                  <span className="text-sm font-semibold text-brand-teal">Since 1982</span>
                </div>
                
                <h1 className="font-tenor text-5xl lg:text-7xl font-bold text-charcoal leading-tight">
                  Crafting
                  <span className="block text-brand-teal"> Excellence</span>
                  Since 1982
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  For over four decades, PiPi Print & Packaging has been at the forefront of packaging innovation, 
                  delivering premium solutions that protect products and elevate brands across healthcare and consumer markets.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-brand-teal mb-2">{stat.number}</div>
                    <div className="text-sm font-semibold text-charcoal mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-600">{stat.desc}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button className="bg-charcoal text-white hover:bg-ink group">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-lime text-lime hover:bg-lime hover:text-charcoal">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-fade-in-right">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200/50">
                <img
                  src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg"
                  alt="PiPi Print & Packaging facility"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                {/* Floating Achievement Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-charcoal">ISO 9001:2015</div>
                      <div className="text-xs text-gray-600">Quality certified</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-charcoal">Carbon Neutral</div>
                      <div className="text-xs text-gray-600">Since 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, our journey has been defined by innovation, 
              quality, and an unwavering commitment to our clients' success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-lime to-emerald-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm font-bold text-charcoal">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="font-tenor text-xl font-bold text-charcoal mb-2 group-hover:text-brand-teal transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white group">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-tenor text-xl font-bold text-charcoal mb-4 group-hover:text-brand-teal transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality and compliance is validated by industry-leading certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-tenor text-lg font-bold text-charcoal mb-2 group-hover:text-brand-teal transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-charcoal to-ink text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-tenor text-4xl lg:text-5xl font-bold mb-6">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Four decades of growth, innovation, and client success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold text-lime mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="font-tenor text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-lime to-emerald-400">
        <div className="container text-center">
          <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our 42+ years of expertise can help bring your packaging vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-charcoal text-white hover:bg-ink">
                Get Your Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}