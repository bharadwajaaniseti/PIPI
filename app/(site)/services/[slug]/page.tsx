import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services, getServiceBySlug } from '@/data/services';
import { ArrowLeft, ArrowRight, CheckCircle, Star, Clock, Shield, Award, Zap, Users, Package, Quote } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Package, label: 'Projects Delivered', value: '2000+' },
    { icon: Award, label: 'Years Experience', value: '42+' },
    { icon: Star, label: 'Quality Rating', value: '4.9/5' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-emerald/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8 animate-fade-in-up">
            <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-teal transition-colors">Services</Link>
            <span>/</span>
            <span className="text-brand-teal font-medium">{service.title}</span>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  {service.icon}
                </div>
                <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal border-brand-teal/20 px-4 py-1">
                  Premium Service
                </Badge>
              </div>
              
              <h1 className="font-tenor text-4xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/quote">
                  <Button size="lg" className="bg-gradient-to-r from-brand-teal to-brand-emerald text-white hover:from-brand-emerald hover:to-brand-teal hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg group">
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl font-semibold">
                    Discuss Project
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:shadow-md transition-all duration-300">
                      <Icon className="h-6 w-6 text-brand-teal mx-auto mb-2" />
                      <div className="font-bold text-lg text-charcoal">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Main Image with Overlay */}
              <div className="relative group">
                {
                  (() => {
                    // Try to load images from public/<slug>/, fallback to service.gallery
                    let galleryImages: string[] = [];
                    try {
                      const publicDir = path.join(process.cwd(), 'public', service.slug);
                      if (fs.existsSync(publicDir)) {
                        const files = fs.readdirSync(publicDir).filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f));
                        galleryImages = files.map((f) => `/${service.slug}/${f}`);
                      }
                    } catch (e) {
                      galleryImages = [];
                    }

                    const mainSrc = galleryImages.length ? galleryImages[0] : service.gallery[0];

                    return (
                      <img
                        src={mainSrc}
                        alt={service.title}
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    );
                  })()
                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-teal rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-emerald rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Gallery Preview */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {
                  (() => {
                    try {
                      const publicDir = path.join(process.cwd(), 'public', service.slug);
                      let galleryImages: string[] = [];
                      if (fs.existsSync(publicDir)) {
                        const files = fs.readdirSync(publicDir).filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f));
                        galleryImages = files.map((f) => `/${service.slug}/${f}`);
                      }

                      const preview = galleryImages.length ? galleryImages.slice(1, 4) : service.gallery.slice(1, 4);
                      return preview.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${service.title} ${index + 2}`}
                          className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md"
                        />
                      ));
                    } catch (e) {
                      return service.gallery.slice(1, 4).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${service.title} ${index + 2}`}
                          className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md"
                        />
                      ));
                    }
                  })()
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-tenor text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Service Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the comprehensive capabilities that make our {service.title.toLowerCase()} services exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="group text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-teal/10 to-brand-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-brand-teal" />
                  </div>
                  <p className="text-sm font-medium text-charcoal group-hover:text-brand-teal transition-colors">
                    {feature}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-tenor text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality and efficiency at every step
            </p>
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-emerald to-brand-teal rounded-full opacity-30"></div>
            
            <div className="grid grid-cols-6 gap-4 items-end">
              {service.process.map((step, index) => (
                <div key={index} className="relative group animate-fade-in-up h-full flex flex-col" style={{ animationDelay: `${index * 0.15}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-brand-teal rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300 z-10">
                    <div className="absolute inset-1 bg-brand-teal rounded-full group-hover:bg-brand-emerald transition-colors duration-300"></div>
                  </div>
                  
                  {/* Process Card */}
                  <Card className="mt-12 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 border-0 bg-white h-full flex flex-col min-h-[200px]">
                    <CardContent className="p-6 text-center flex flex-col h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-tenor text-lg font-bold text-charcoal mb-2 group-hover:text-brand-teal transition-colors">
                        {step.step}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1 flex items-center justify-center">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {service.process.map((step, index) => (
              <div key={index} className="relative flex gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-brand-teal to-brand-emerald mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-tenor text-xl font-bold text-charcoal mb-2">
                      {step.step}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery */}
      {/* Enhanced Gallery */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-tenor text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Work Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore examples of our exceptional {service.title.toLowerCase()} projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              (() => {
                try {
                  const publicDir = path.join(process.cwd(), 'public', service.slug);
                  let galleryImages: string[] = [];
                  if (fs.existsSync(publicDir)) {
                    const files = fs.readdirSync(publicDir).filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f));
                    galleryImages = files.map((f) => `/${service.slug}/${f}`);
                  }

                  const imagesToRender = galleryImages.length ? galleryImages : service.gallery;

                  return imagesToRender.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl animate-fade-in-up shadow-md hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 0.05}s` }}>
                      <img
                        src={image}
                        alt={`${service.title} example ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ));
                } catch (e) {
                  return service.gallery.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl animate-fade-in-up shadow-md hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 0.05}s` }}>
                      <img
                        src={image}
                        alt={`${service.title} example ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ));
                }
              })()
            }
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-r from-brand-teal/5 to-brand-emerald/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center animate-fade-in-up">
              <Shield className="h-12 w-12 text-brand-teal mb-3" />
              <h4 className="font-bold text-charcoal mb-2">ISO 9001:2015</h4>
              <p className="text-sm text-gray-600">Quality Certified</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Clock className="h-12 w-12 text-brand-teal mb-3" />
              <h4 className="font-bold text-charcoal mb-2">Fast Delivery</h4>
              <p className="text-sm text-gray-600">On-time guarantee</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Zap className="h-12 w-12 text-brand-teal mb-3" />
              <h4 className="font-bold text-charcoal mb-2">Quick Response</h4>
              <p className="text-sm text-gray-600">24-hour quotes</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Users className="h-12 w-12 text-brand-teal mb-3" />
              <h4 className="font-bold text-charcoal mb-2">Expert Team</h4>
              <p className="text-sm text-gray-600">42+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-br from-charcoal via-ink to-charcoal relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-emerald/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Quote className="h-16 w-16 text-brand-teal mx-auto mb-6 opacity-60" />
            
            <h2 className="font-tenor text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's discuss your {service.title.toLowerCase()} project and how we can 
              deliver exceptional results that exceed your expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/quote">
                <Button size="lg" className="bg-gradient-to-r from-brand-teal to-brand-emerald text-white hover:from-brand-emerald hover:to-brand-teal hover:scale-105 transition-all duration-300 px-10 py-4 rounded-xl font-semibold shadow-xl group">
                  Get Your Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-gradient-to-r from-brand-teal to-brand-emerald text-white hover:from-brand-emerald hover:to-brand-teal hover:scale-105 transition-all duration-300 px-10 py-4 rounded-xl font-semibold shadow-xl group">
                  Contact Our Team
                </Button>
              </Link>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-gray-300 mb-4">Need immediate assistance?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-brand-teal rounded-full"></span>
                  <span>Call: +44 (0) 116 266 9242 </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-brand-emerald rounded-full"></span>
                  <span>Email: marketing@pipi.co.uk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/services">
              <Button variant="ghost" className="text-gray-600 hover:text-brand-teal group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to All Services
              </Button>
            </Link>
            
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Need a different service?</p>
              <Link href="/services" className="text-brand-teal hover:text-brand-emerald font-medium text-sm">
                Explore All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}