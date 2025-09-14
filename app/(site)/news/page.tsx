"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Search, Newspaper, TrendingUp, Award, Leaf, X, Clock, Tag } from 'lucide-react';
import dynamic from 'next/dynamic';
const ClientDate = dynamic(() => import('@/components/ClientDate'), { ssr: false });
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import type { Metadata } from 'next';

// Mock news data - in a real app, this would come from your CMS or API
const newsArticles = [
  {
    id: 1,
    title: 'PiPi Print & Packaging Achieves Carbon Neutral Manufacturing',
    summary: 'We are proud to announce that our manufacturing operations have achieved carbon neutrality through renewable energy adoption and comprehensive offset programs.',
    category: 'sustainability',
    cover: 'https://images.pexels.com/photos/4386280/pexels-photo-4386280.jpeg',
    date: '2024-01-15',
    readTime: '3 min read',
    featured: true,
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">We are thrilled to announce that PiPi Print & Packaging has officially achieved carbon neutral manufacturing across all our production facilities. This milestone represents years of dedicated effort toward sustainable operations and environmental responsibility.</p>

      <h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">Our Journey to Carbon Neutrality</h2>
      <p class="text-gray-700 leading-relaxed mb-6">The path to carbon neutrality involved a comprehensive transformation of our manufacturing processes. We invested heavily in renewable energy infrastructure, including solar panels and wind energy partnerships, which now power 85% of our operations.</p>

      <p class="text-gray-700 leading-relaxed mb-6">Additionally, we implemented advanced energy efficiency measures throughout our facilities, reducing overall energy consumption by 40% compared to 2020 levels. These improvements include LED lighting systems, smart HVAC controls, and optimized production scheduling.</p>

      <h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">Offset Programs and Partnerships</h2>
      <p class="text-gray-700 leading-relaxed mb-6">For the remaining 15% of our energy needs and unavoidable emissions, we've partnered with verified carbon offset programs focusing on reforestation and renewable energy projects in developing countries. These partnerships align with our commitment to global environmental stewardship.</p>

      <p class="text-gray-700 leading-relaxed mb-6">Our offset portfolio includes projects in renewable energy development, forest conservation, and methane capture initiatives, ensuring that every ton of CO2 we produce is balanced by verified environmental benefits elsewhere.</p>
    `,
    author: 'Sarah Johnson',
    authorRole: 'Sustainability Director',
    tags: ['Sustainability', 'Carbon Neutral', 'Green Manufacturing']
  },
  {
    id: 2,
    title: 'New GMP-Certified Production Line Operational',
    summary: 'Our latest investment in pharmaceutical packaging technology includes a state-of-the-art production line meeting the highest GMP standards.',
    category: 'pharma',
    cover: 'https://images.pexels.com/photos/4386450/pexels-photo-4386450.jpeg',
    date: '2024-01-10',
    readTime: '4 min read',
    featured: false,
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">We're excited to announce the successful commissioning of our new GMP-certified production line, representing a £2.5 million investment in pharmaceutical packaging excellence.</p>

      <h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">Advanced Technology Integration</h2>
      <p class="text-gray-700 leading-relaxed mb-6">The new production line incorporates cutting-edge serialization technology, automated quality control systems, and advanced clean room protocols. Every aspect has been designed to exceed pharmaceutical industry standards and regulatory requirements.</p>

      <p class="text-gray-700 leading-relaxed mb-6">Our investment includes high-speed printing capabilities, real-time quality monitoring, and integrated packaging solutions that ensure product integrity from production through distribution.</p>
    `,
    author: 'Dr. Michael Chen',
    authorRole: 'Head of Pharmaceutical Division',
    tags: ['Pharmaceutical', 'GMP Certification', 'Technology']
  },
  {
    id: 3,
    title: 'Pharmaceutical Packaging Trends 2024',
    summary: 'Exploring the key trends shaping pharmaceutical packaging this year, from sustainability initiatives to advanced serialization technologies.',
    category: 'pharma',
    cover: 'https://images.pexels.com/photos/4386460/pexels-photo-4386460.jpeg',
    date: '2024-01-08',
    readTime: '5 min read',
    featured: false,
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The pharmaceutical packaging industry is experiencing unprecedented transformation in 2024, driven by technological advancement, regulatory changes, and evolving patient needs.</p>

      <h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">Sustainability Takes Center Stage</h2>
      <p class="text-gray-700 leading-relaxed mb-6">Pharmaceutical companies are increasingly prioritizing sustainable packaging solutions. Biodegradable materials, reduced plastic usage, and circular economy principles are becoming standard considerations in packaging design.</p>

      <h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">Digital Integration and Smart Packaging</h2>
      <p class="text-gray-700 leading-relaxed mb-6">Smart packaging technologies, including NFC chips and QR codes, are enabling better patient adherence monitoring and supply chain transparency. These innovations help combat counterfeiting while improving patient outcomes.</p>
    `,
    author: 'Emma Rodriguez',
    authorRole: 'Industry Analyst',
    tags: ['Trends', 'Pharmaceutical', 'Digital Innovation']
  },
  {
    id: 4,
    title: 'Award-Winning Decorative Packaging Design',
    summary: 'Our luxury cosmetics packaging design wins prestigious industry award for innovation in sustainable decorative finishing.',
    category: 'decorative',
    cover: 'https://images.pexels.com/photos/4386290/pexels-photo-4386290.jpeg',
    date: '2024-01-05',
    readTime: '2 min read',
    featured: false,
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">We're honored to receive the Innovation in Sustainable Design Award from the International Packaging Association for our revolutionary approach to luxury cosmetics packaging.</p>

      <h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">Sustainable Luxury</h2>
      <p class="text-gray-700 leading-relaxed mb-6">Our award-winning design demonstrates that luxury and sustainability can coexist beautifully. Using recyclable materials and water-based finishes, we've created packaging that rivals traditional luxury materials while maintaining environmental responsibility.</p>
    `,
    author: 'Isabella Martinez',
    authorRole: 'Creative Director',
    tags: ['Design Awards', 'Luxury Packaging', 'Sustainability']
  },
  {
    id: 5,
    title: 'Digital Printing Technology Expansion',
    summary: 'Investment in cutting-edge digital printing capabilities enables faster turnaround times and enhanced customization options.',
    category: 'tech',
    cover: 'https://images.pexels.com/photos/4386390/pexels-photo-4386390.jpeg',
    date: '2024-01-03',
    readTime: '3 min read',
    featured: false,
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Our investment in next-generation digital printing technology represents a significant leap forward in our manufacturing capabilities and customer service offerings.</p>

      <h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">Enhanced Capabilities</h2>
      <p class="text-gray-700 leading-relaxed mb-6">The new digital printing systems enable variable data printing, shorter run lengths, and rapid prototyping capabilities that weren't possible with traditional printing methods.</p>
    `,
    author: 'James Thompson',
    authorRole: 'Technology Director',
    tags: ['Digital Printing', 'Technology', 'Manufacturing']
  },
  {
    id: 6,
    title: 'Pharmapack Europe 2024 Exhibition Success',
    summary: 'Record visitor numbers at our Pharmapack Europe stand showcase growing demand for sustainable healthcare packaging solutions.',
    category: 'events',
    cover: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
    date: '2024-01-01',
    readTime: '2 min read',
    featured: false,
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Pharmapack Europe 2024 proved to be our most successful exhibition to date, with record visitor engagement and numerous new partnership opportunities.</p>

      <h2 class="text-2xl font-bold text-charcoal mb-4 mt-8">Exhibition Highlights</h2>
      <p class="text-gray-700 leading-relaxed mb-6">Our interactive displays showcasing sustainable packaging solutions attracted over 2,000 visitors, resulting in 150 qualified leads and multiple partnership discussions.</p>
    `,
    author: 'Rachel Green',
    authorRole: 'Marketing Manager',
    tags: ['Trade Shows', 'Pharmapack', 'Industry Events']
  }
];

const categories = [
  { id: 'all', name: 'All News', icon: Newspaper, color: 'from-brand-teal to-brand-emerald' },
  { id: 'pharma', name: 'Healthcare', icon: Award, color: 'from-brand-orange to-orange-500' },
  { id: 'decorative', name: 'Decorative', icon: TrendingUp, color: 'from-emerald-500 to-green-500' },
  { id: 'tech', name: 'Technology', icon: TrendingUp, color: 'from-teal-500 to-cyan-500' },
  { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-green-500 to-emerald-600' },
  { id: 'events', name: 'Events', icon: Calendar, color: 'from-purple-500 to-pink-500' }
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const [open, setOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const openArticle = (article: any) => {
    setSelectedArticle(article);
    setOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat?.color || 'from-gray-500 to-gray-600';
  };

  const getCategoryName = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat?.name || category;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
  {/* Hero Section */}
  <section className="relative py-8 md:py-10 lg:py-14 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        {/* Floating Elements */}
  <div className="absolute top-16 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-full opacity-18 floating-element"></div>
  <div className="absolute bottom-12 right-4 md:right-10 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full opacity-18 floating-element" style={{ animationDelay: '1s' }}></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-brand-teal/20 shadow-lg mb-4 md:mb-6">
              <Newspaper className="h-4 md:h-5 w-4 md:w-5 text-brand-teal" />
              <span className="text-xs md:text-sm font-semibold text-brand-teal">Latest Updates</span>
            </div>
            
            <h1 className="font-tenor text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-2 md:mb-3 leading-snug">
              News &
              <span className="block text-brand-teal"> Updates</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4 md:mb-5 leading-relaxed px-4">
              Stay informed about the latest developments in packaging innovation, industry trends, 
              and company milestones from PiPi Print & Packaging.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-6 md:mb-8 px-4 -mt-2 md:-mt-3">
            <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11 md:h-12 bg-white/80 backdrop-blur-sm border-gray-200"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-1 md:space-x-2 px-3 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                        : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
                    }`}
                  >
                    <Icon className="h-3 md:h-4 w-3 md:w-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-tenor text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4">
              {selectedCategory === 'all' ? 'Latest News' : `${getCategoryName(selectedCategory)} News`}
            </h2>
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 md:py-16">
              <div className="w-20 md:w-24 h-20 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Search className="h-10 md:h-12 w-10 md:w-12 text-gray-400" />
              </div>
              <h3 className="font-tenor text-xl md:text-2xl font-bold text-charcoal mb-3 md:mb-4">No articles found</h3>
              <p className="text-gray-600 mb-4 md:mb-6">Try adjusting your search terms or category filter.</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularArticles.map((article, index) => (
                <Card key={article.id} className="group relative hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-white hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] group-hover:ring-4 group-hover:ring-green-300/20">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => openArticle(article)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openArticle(article); } }}
                    className="absolute inset-0 z-10 cursor-pointer"
                    aria-label={`Open article ${article.title}`}
                  />

                  <div className="relative overflow-hidden">
                    <img
                      src={article.cover}
                      alt={article.title}
                      className="w-full h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 md:top-4 left-3 md:left-4">
                      <Badge className={`bg-gradient-to-r ${getCategoryColor(article.category)} text-white text-xs md:text-sm`}>
                        {getCategoryName(article.category)}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                        <ClientDate date={article.date} />
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <CardTitle className="font-tenor text-lg md:text-xl text-charcoal group-hover:text-brand-teal transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {article.summary}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0 p-4 md:p-6 md:pt-0">
                    <div className="flex justify-between items-center text-sm text-charcoal opacity-90">
                      <span className="font-medium">{article.readTime}</span>
                      <button
                        onClick={() => openArticle(article)}
                        className="inline-flex items-center gap-2 text-brand-teal hover:underline"
                        aria-label={`Read more about ${article.title}`}
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Article Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] w-[95vw] md:w-full p-0 bg-white rounded-lg md:rounded-xl overflow-hidden">
          {selectedArticle && (
            <div className="flex flex-col h-[90vh]">
              {/* Modal Header with Hero Image - Fixed */}
              <div className="relative h-48 md:h-64 lg:h-80 flex-shrink-0 overflow-hidden">
                <img 
                  src={selectedArticle.cover} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors z-10"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-gradient-to-r ${getCategoryColor(selectedArticle.category)} text-white`}>
                    {getCategoryName(selectedArticle.category)}
                  </Badge>
                </div>

                {/* Article meta in overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h1 className="font-tenor text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                    {selectedArticle.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <ClientDate date={selectedArticle.date} />
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {selectedArticle.readTime}
                    </div>
                    {selectedArticle.author && (
                      <div className="flex items-center">
                        <span>By {selectedArticle.author}</span>
                        {selectedArticle.authorRole && (
                          <span className="ml-1 opacity-80">• {selectedArticle.authorRole}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="p-6 md:p-8 lg:p-12">
                  {/* Article tags */}
                  {selectedArticle.tags && (
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      <Tag className="h-4 w-4 text-gray-400 mr-1" />
                      {selectedArticle.tags.map((tag: string, index: number) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Article summary as lead */}
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-brand-teal">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {selectedArticle.summary}
                    </p>
                  </div>

                  {/* Article content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />

                  {/* Share and action buttons */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                      <div className="text-sm text-gray-500">
                        Published on <ClientDate date={selectedArticle.date} />
                        {selectedArticle.author && (
                          <span> by {selectedArticle.author}</span>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setOpen(false)}
                        >
                          Close Article
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-brand-teal hover:bg-brand-teal/90 text-white"
                        >
                          Share Article
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Newsletter Signup */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-charcoal to-ink text-white">
        <div className="container text-center px-4 md:px-6">
          <h2 className="font-tenor text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Stay Updated
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest packaging industry insights, 
            company updates, and innovation announcements.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
            <Input
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11 md:h-12"
            />
            <Button className="bg-lime text-charcoal hover:bg-lime/90 px-6 md:px-8 h-11 md:h-12 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-gray-400">
            No spam, unsubscribe at any time. Read our{' '}
            <Link href="/legal/privacy" className="text-lime hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-lime to-emerald-400">
        <div className="container text-center px-4 md:px-6">
          <h2 className="font-tenor text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 md:mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg md:text-xl text-charcoal/80 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise and innovation can help bring your packaging vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-charcoal text-white hover:bg-ink w-full sm:w-auto">
                Get Your Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white w-full sm:w-auto">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}