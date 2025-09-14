import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, AlertTriangle, Mail } from 'lucide-react';

export default function TermsAndServicesPage() {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-lime/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8 text-lime" />
          </div>
          <h1 className="font-tenor text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of our website and services. Please read them carefully before using our services.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: September 14, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                By accessing and using PiPi Print & Packaging Ltd's website and services ("Services"), you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service apply to all visitors, users, and others who access or use our Services.
              </p>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                PiPi Print & Packaging Ltd provides specialized printing and packaging services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Healthcare packaging solutions</li>
                <li>Decorative and premium packaging</li>
                <li>Custom printing services</li>
                <li>Label and leaflet production</li>
                <li>Sustainable packaging options</li>
                <li>Pre-press and design services</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">When using our Services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use the Services only for lawful purposes</li>
                <li>Not interfere with the proper functioning of our website</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Respect intellectual property rights</li>
                <li>Not transmit harmful or malicious content</li>
              </ul>
            </CardContent>
          </Card>

          {/* Orders and Quotations */}
          <Card>
            <CardHeader>
              <CardTitle>Orders and Quotations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-3">Quotations</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>All quotations are valid for 30 days unless otherwise stated</li>
                  <li>Quotations are based on information provided at the time of request</li>
                  <li>Prices may be subject to change due to material cost fluctuations</li>
                  <li>Additional charges may apply for rush orders or special requirements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Order Acceptance</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Orders are only binding once confirmed in writing</li>
                  <li>We reserve the right to refuse orders at our discretion</li>
                  <li>All orders are subject to credit approval</li>
                  <li>Minimum order quantities may apply for certain products</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Payment terms are 30 days from invoice date unless otherwise agreed</li>
                <li>Late payments may incur interest charges at 8% above Bank of England base rate</li>
                <li>We reserve the right to charge for additional work or materials</li>
                <li>All prices are exclusive of VAT unless otherwise stated</li>
                <li>Payment must be received before goods are dispatched</li>
              </ul>
            </CardContent>
          </Card>

          {/* Delivery and Risk */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery and Risk</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Risk passes to the customer upon delivery to the carrier</li>
                <li>Delivery dates are estimates and not guaranteed</li>
                <li>We are not liable for delays caused by circumstances beyond our control</li>
                <li>Customer is responsible for unloading and inspecting goods upon delivery</li>
                <li>Any damage must be reported within 48 hours of delivery</li>
              </ul>
            </CardContent>
          </Card>

          {/* Quality and Specifications */}
          <Card>
            <CardHeader>
              <CardTitle>Quality and Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>We strive to meet all agreed specifications and quality standards</li>
                <li>Minor variations in color, size, or finish may occur due to manufacturing processes</li>
                <li>Customer approval of proofs is required before production</li>
                <li>All work is carried out in accordance with ISO 9001:2015 standards</li>
                <li>Artwork and content supplied by customer must meet legal requirements</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Customer retains ownership of their intellectual property</li>
                <li>We retain ownership of our manufacturing processes and techniques</li>
                <li>Customer grants us license to use their materials for production purposes</li>
                <li>We may use anonymized project examples for marketing purposes</li>
                <li>Third-party intellectual property rights must not be infringed</li>
              </ul>
            </CardContent>
          </Card>

          {/* Liability and Warranty */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Scale className="h-6 w-6 text-lime" />
                <span>Liability and Warranty</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-3">Warranty</h4>
                <p className="text-gray-600 mb-3">
                  We warrant that our products will be free from defects in materials and workmanship for a period of 12 months
                  from the date of delivery, subject to normal use and proper storage.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Liability Limitations</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Our liability is limited to the value of the order</li>
                  <li>We are not liable for consequential or indirect losses</li>
                  <li>We are not liable for delays caused by third parties</li>
                  <li>Customer indemnifies us against claims arising from their content</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Either party may terminate this agreement with immediate effect if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>The other party commits a material breach of these terms</li>
                <li>The other party becomes insolvent or ceases trading</li>
                <li>Mutual agreement is reached</li>
              </ul>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                These Terms of Service are governed by and construed in accordance with the laws of England and Wales.
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-lime" />
                <span>Contact Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">PiPi Print & Packaging Ltd</p>
                <p>10, Bardolph Street East</p>
                <p>Leicester LE4 6QJ</p>
                <p>United Kingdom</p>
                <p className="mt-2">Email: <a href="mailto:marketing@pipi.co.uk" className="text-lime hover:underline">marketing@pipi.co.uk</a></p>
                <p>Phone: +44 (0) 116 266 9242</p>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-lime" />
                <span>Updates to Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting
                on our website. Your continued use of our Services after changes are posted constitutes your acceptance of the modified terms.
              </p>
              <p className="text-gray-600">
                We encourage you to review these terms periodically to stay informed of any updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}