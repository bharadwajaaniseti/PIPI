import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services, getServiceBySlug } from '@/data/services';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
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

  return (
    <div className="py-16">
      <div className="container">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-charcoal">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-charcoal">Services</Link>
          <span>/</span>
          <span className="text-charcoal">{service.title}</span>
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">{service.icon}</span>
              <Badge variant="secondary" className="bg-lime/10 text-lime border-lime/20">
                Premium Service
              </Badge>
            </div>
            
            <h1 className="font-tenor text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-charcoal text-white hover:bg-ink group">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-lime text-lime hover:bg-lime hover:text-charcoal">
                  Discuss Project
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={service.gallery[0]}
              alt={service.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="font-tenor text-3xl font-bold text-charcoal mb-8 text-center">
            Service Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-lime mx-auto mb-3" />
                  <p className="text-sm font-medium text-charcoal">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="font-tenor text-3xl font-bold text-charcoal mb-8 text-center">
            Our Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-lime rounded-full flex items-center justify-center text-charcoal font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.step}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="font-tenor text-3xl font-bold text-charcoal mb-8 text-center">
            Our Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${service.title} example ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-charcoal to-ink rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="font-tenor text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your {service.title.toLowerCase()} project and how we can 
            deliver exceptional results for your brand.
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

        {/* Back Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/services">
            <Button variant="ghost" className="text-gray-600 hover:text-charcoal group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}