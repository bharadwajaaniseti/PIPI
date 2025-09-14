'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Search, Filter, Newspaper, TrendingUp, Award, Leaf } from 'lucide-react';
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
    featured: true
  },
  {
    id: 2,
    title: 'New GMP-Certified Production Line Operational',
    summary: 'Our latest investment in pharmaceutical packaging technology includes a state-of-the-art production line meeting the highest GMP standards.',
    category: 'pharma',
    cover: 'https://images.pexels.com/photos/4386450/pexels-photo-4386450.jpeg',
    date: '2024-01-10',
    readTime: '4 min read',
    featured: false
  },
  {
    id: 3,
    title: 'Pharmaceutical Packaging Trends 2024',
    summary: 'Exploring the key trends shaping pharmaceutical packaging this year, from sustainability initiatives to advanced serialization technologies.',
    category: 'pharma',
    cover: 'https://images.pexels.com/photos/4386460/pexels-photo-4386460.jpeg',
    date: '2024-01-08',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Award-Winning Decorative Packaging Design',
    summary: 'Our luxury cosmetics packaging design wins prestigious industry award for innovation in sustainable decorative finishing.',
    category: 'decorative',
    cover: 'https://images.pexels.com/photos/4386290/pexels-photo-4386290.jpeg',
    date: '2024-01-05',
    readTime: '2 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Digital Printing Technology Expansion',
    summary: 'Investment in cutting-edge digital printing capabilities enables faster turnaround times and enhanced customization options.',
    category: 'tech',
    cover: 'https://images.pexels.com/photos/4386390/pexels-photo-4386390.jpeg',
    date: '2024-01-03',
    readTime: '3 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Pharmapack Europe 2024 Exhibition Success',
    summary: 'Record visitor numbers at our Pharmapack Europe stand showcase growing demand for sustainable healthcare packaging solutions.',
    category: 'events',
    cover: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
    date: '2024-01-01',
    readTime: '2 min read',
    featured: false
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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-emerald rounded-full opacity-20 floating-element"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full opacity-20 floating-element" style={{ animationDelay: '1s' }}></div>

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-teal/20 shadow-lg mb-6">
              <Newspaper className="h-5 w-5 text-brand-teal" />
              <span className="text-sm font-semibold text-brand-teal">Latest Updates</span>
            </div>
            
            <h1 className="font-tenor text-5xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
              News &
              <span className="block text-brand-teal"> Updates</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stay informed about the latest developments in packaging innovation, industry trends, 
              and company milestones from PiPi Print & Packaging.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-white/80 backdrop-blur-sm border-gray-200"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                        : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && (
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-tenor text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Featured Story
              </h2>
            </div>

            <Card className="max-w-6xl mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredArticle.cover}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${getCategoryColor(featuredArticle.category)} text-white`}>
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline" className="border-lime text-lime">
                      {getCategoryName(featuredArticle.category)}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredArticle.date)}
                    </div>
                    <span className="text-sm text-gray-500">{featuredArticle.readTime}</span>
                  </div>
                  
                  <h3 className="font-tenor text-3xl font-bold text-charcoal mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredArticle.summary}
                  </p>
                  
                  <Button className="bg-charcoal text-white hover:bg-ink group w-fit">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-tenor text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              {selectedCategory === 'all' ? 'Latest News' : `${getCategoryName(selectedCategory)} News`}
            </h2>
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="font-tenor text-2xl font-bold text-charcoal mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter.</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <Card key={article.id} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.cover}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                        {getCategoryName(article.category)}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <CardTitle className="font-tenor text-xl text-charcoal group-hover:text-brand-teal transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {article.summary}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full justify-between text-charcoal hover:text-white hover:bg-charcoal group/btn">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-charcoal to-ink text-white">
        <div className="container text-center">
          <h2 className="font-tenor text-4xl lg:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest packaging industry insights, 
            company updates, and innovation announcements.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4 mb-8">
            <Input
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-lime text-charcoal hover:bg-lime/90 px-8">
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
      <section className="py-16 bg-gradient-to-br from-lime to-emerald-400">
        <div className="container text-center">
          <h2 className="font-tenor text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise and innovation can help bring your packaging vision to life.
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