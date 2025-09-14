import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Complete packaging solutions including cartons, labels, leaflets, decorative packaging, healthcare solutions, and sustainable options.',
};

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-tenor text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            End-to-end packaging solutions designed for healthcare, consumer, and decorative markets. 
            From concept to delivery, we ensure quality at every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-charcoal text-white hover:bg-ink">
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-lime text-lime hover:bg-lime hover:text-charcoal">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.slug} className="group hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative overflow-hidden">
                  <img
                    src={service.gallery[0]}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <span className="text-xl">{service.icon}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-3">
                  <CardHeader>
                    <CardTitle className="font-tenor text-2xl text-charcoal group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
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
                          Explore Service
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="font-tenor text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality, efficiency, and on-time delivery for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { step: '1', title: 'Design & Pre-Press', desc: 'Color management and proofing' },
              { step: '2', title: 'Production', desc: 'High-quality manufacturing' },
              { step: '3', title: 'Converting', desc: 'Precision finishing' },
              { step: '4', title: 'Quality Control', desc: 'Rigorous inspection' },
              { step: '5', title: 'Fulfillment', desc: 'Secure packaging' },
              { step: '6', title: 'Delivery', desc: 'On-time logistics' }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center mx-auto mb-4 text-charcoal font-bold">
                  {process.step}
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}