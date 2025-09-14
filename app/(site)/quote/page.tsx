'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { services } from '@/data/services';
import { ArrowRight, ArrowLeft, Upload, CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
const ClientReference = dynamic(() => import('@/components/ClientReference'), { ssr: false });

type FormData = {
  // Step 1: Product Type
  productType: string;
  customProductType: string;
  
  // Step 2: Specifications
  dimensions: {
    length: string;
    width: string;
    height: string;
    unit: string;
  };
  quantity: string;
  substrate: string;
  
  // Step 3: Finishes
  finishes: string[];
  colors: string;
  
  // Step 4: Artwork & Requirements
  artworkFile: File | null;
  specialRequirements: string;
  
  // Step 5: Contact Details
  contactName: string;
  company: string;
  email: string;
  phone: string;
  deadline: string;
};

const initialFormData: FormData = {
  productType: '',
  customProductType: '',
  dimensions: { length: '', width: '', height: '', unit: 'mm' },
  quantity: '',
  substrate: '',
  finishes: [],
  colors: '',
  artworkFile: null,
  specialRequirements: '',
  contactName: '',
  company: '',
  email: '',
  phone: '',
  deadline: '',
};

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'quote');
      
      // Add all form data
      formDataToSend.append('productType', formData.productType);
      formDataToSend.append('customProductType', formData.customProductType);
      formDataToSend.append('length', formData.dimensions.length);
      formDataToSend.append('width', formData.dimensions.width);
      formDataToSend.append('height', formData.dimensions.height);
      formDataToSend.append('unit', formData.dimensions.unit);
      formDataToSend.append('quantity', formData.quantity);
      formDataToSend.append('substrate', formData.substrate);
      formDataToSend.append('finishes', formData.finishes.join(', '));
      formDataToSend.append('colors', formData.colors);
      formDataToSend.append('specialRequirements', formData.specialRequirements);
      formDataToSend.append('contactName', formData.contactName);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('deadline', formData.deadline);

      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to submit quote request. Please try again.');
      }
    } catch (err) {
      console.error('Submit exception', err);
      alert('An error occurred while submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-16">
        <div className="container max-w-2xl">
          <Card className="text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-charcoal" />
              </div>
              <h1 className="font-tenor text-3xl font-bold text-charcoal mb-4">
                Quote Request Submitted!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your quote request. Our team will review your requirements 
                and get back to you within 24 hours with a detailed proposal.
              </p>
              <ClientReference />
              <Button onClick={() => window.location.href = '/'} className="bg-charcoal text-white hover:bg-ink">
                Return to Homepage
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get a detailed quote for your packaging project in just a few steps.
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-lime h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-tenor text-2xl">
              {currentStep === 1 && 'Product Type'}
              {currentStep === 2 && 'Specifications'}
              {currentStep === 3 && 'Finishes & Colors'}
              {currentStep === 4 && 'Artwork & Requirements'}
              {currentStep === 5 && 'Contact Details'}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="productType" className="text-base font-medium mb-4 block">
                    What type of packaging do you need?
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.slug}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.productType === service.slug
                            ? 'border-lime bg-lime/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => updateFormData({ productType: service.slug })}
                      >
                        <div className="text-2xl mb-2">{service.icon}</div>
                        <h3 className="font-medium text-charcoal">{service.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{service.intro}</p>
                      </div>
                    ))}
                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.productType === 'other'
                          ? 'border-lime bg-lime/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => updateFormData({ productType: 'other' })}
                    >
                      <div className="text-2xl mb-2">❓</div>
                      <h3 className="font-medium text-charcoal">Other</h3>
                      <p className="text-sm text-gray-600 mt-1">Tell us what you need</p>
                    </div>
                  </div>
                  
                  {formData.productType === 'other' && (
                    <div className="mt-4">
                      <Label htmlFor="customProductType">Please specify:</Label>
                      <Input
                        id="customProductType"
                        value={formData.customProductType}
                        onChange={(e) => updateFormData({ customProductType: e.target.value })}
                        placeholder="Describe your packaging requirements..."
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-4 block">Dimensions</Label>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="length">Length</Label>
                      <Input
                        id="length"
                        type="number"
                        value={formData.dimensions.length}
                        onChange={(e) => updateFormData({
                          dimensions: { ...formData.dimensions, length: e.target.value }
                        })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        type="number"
                        value={formData.dimensions.width}
                        onChange={(e) => updateFormData({
                          dimensions: { ...formData.dimensions, width: e.target.value }
                        })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        type="number"
                        value={formData.dimensions.height}
                        onChange={(e) => updateFormData({
                          dimensions: { ...formData.dimensions, height: e.target.value }
                        })}
                      />
                    </div>
                    <div>
                      <Label>Unit</Label>
                      <Select 
                        value={formData.dimensions.unit} 
                        onValueChange={(value) => updateFormData({
                          dimensions: { ...formData.dimensions, unit: value }
                        })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mm">mm</SelectItem>
                          <SelectItem value="cm">cm</SelectItem>
                          <SelectItem value="inches">inches</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity Required</Label>
                  <Select value={formData.quantity} onValueChange={(value) => updateFormData({ quantity: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select quantity range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-1000">1 - 1,000</SelectItem>
                      <SelectItem value="1001-5000">1,001 - 5,000</SelectItem>
                      <SelectItem value="5001-10000">5,001 - 10,000</SelectItem>
                      <SelectItem value="10001-50000">10,001 - 50,000</SelectItem>
                      <SelectItem value="50001+">50,001+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="substrate">Material/Substrate</Label>
                  <Select value={formData.substrate} onValueChange={(value) => updateFormData({ substrate: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card-250gsm">Card (250gsm)</SelectItem>
                      <SelectItem value="card-350gsm">Card (350gsm)</SelectItem>
                      <SelectItem value="card-400gsm">Card (400gsm)</SelectItem>
                      <SelectItem value="paper-white">White Paper</SelectItem>
                      <SelectItem value="paper-kraft">Kraft Paper</SelectItem>
                      <SelectItem value="vinyl">Vinyl</SelectItem>
                      <SelectItem value="other">Other (specify in requirements)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-4 block">Finishing Options</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'Foil Stamping',
                      'Embossing',
                      'Debossing',
                      'Spot UV',
                      'Soft Touch',
                      'Braille',
                      'Window Patching',
                      'Perforation',
                      'Scoring'
                    ].map((finish) => (
                      <div key={finish} className="flex items-center space-x-2">
                        <Checkbox
                          id={finish}
                          checked={formData.finishes.includes(finish)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData({
                                finishes: [...formData.finishes, finish]
                              });
                            } else {
                              updateFormData({
                                finishes: formData.finishes.filter(f => f !== finish)
                              });
                            }
                          }}
                        />
                        <Label htmlFor={finish} className="text-sm">{finish}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="colors">Number of Colors</Label>
                  <Select value={formData.colors} onValueChange={(value) => updateFormData({ colors: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select color count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Color</SelectItem>
                      <SelectItem value="2">2 Colors</SelectItem>
                      <SelectItem value="3">3 Colors</SelectItem>
                      <SelectItem value="4">4 Colors (CMYK)</SelectItem>
                      <SelectItem value="4+1">4 + 1 Spot Color</SelectItem>
                      <SelectItem value="4+2">4 + 2 Spot Colors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-4 block">Artwork Upload</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-lime transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      Drag and drop your artwork here, or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Supported formats: PDF, AI, EPS, PNG, JPG (Max 50MB)
                    </p>
                    <Button variant="outline" className="mx-auto">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => updateFormData({ specialRequirements: e.target.value })}
                    placeholder="Any specific requirements, certifications needed, delivery instructions, etc."
                    rows={4}
                  />
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => updateFormData({ contactName: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => updateFormData({ company: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData({ email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData({ phone: e.target.value })}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="deadline">Required Delivery Date</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => updateFormData({ deadline: e.target.value })}
                    />
                  </div>
                </div>

                {/* Quote Summary */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="font-tenor text-lg font-bold text-charcoal mb-4">Quote Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Product Type:</span>
                      <span className="font-medium">
                        {formData.productType === 'other' 
                          ? formData.customProductType 
                          : services.find(s => s.slug === formData.productType)?.title || 'Not specified'
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span className="font-medium">{formData.quantity || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material:</span>
                      <span className="font-medium">{formData.substrate || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finishes:</span>
                      <span className="font-medium">
                        {formData.finishes.length > 0 ? formData.finishes.join(', ') : 'None selected'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={nextStep}
              className="bg-charcoal text-white hover:bg-ink flex items-center"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-lime text-charcoal hover:bg-lime/90"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
            </Button>
          )}
        </div>
      </div>

      {/* Hidden Netlify Form */}
      <form 
        name="quote" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="form-name" value="quote" />
        <input type="text" name="productType" />
        <input type="text" name="customProductType" />
        <input type="text" name="length" />
        <input type="text" name="width" />
        <input type="text" name="height" />
        <input type="text" name="unit" />
        <input type="text" name="quantity" />
        <input type="text" name="substrate" />
        <input type="text" name="finishes" />
        <input type="text" name="colors" />
        <input type="text" name="specialRequirements" />
        <input type="text" name="contactName" />
        <input type="text" name="company" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="date" name="deadline" />
      </form>
    </div>
  );
}