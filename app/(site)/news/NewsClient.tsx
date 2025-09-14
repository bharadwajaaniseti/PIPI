"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Search, X, Clock, Tag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

type Article = any;
type Category = any;

export default function NewsClient({ articles, categories }: { articles: Article[]; categories: Category[] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const regularArticles = filteredArticles.filter((article) => !article.featured);

  const [open, setOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const openArticle = (article: Article) => {
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
    const cat = categories.find((c: any) => c.id === category);
    return cat?.color || 'from-gray-500 to-gray-600';
  };

  const getCategoryName = (category: string) => {
    const cat = categories.find((c: any) => c.id === category);
    return cat?.name || category;
  };

  return (
    <>
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
              {regularArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white">
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
                        {formatDate(article.date)}
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
                    <Button variant="ghost" onClick={() => openArticle(article)} className="w-full justify-between text-charcoal hover:text-white hover:bg-charcoal group/btn">
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

      {/* Article Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] w-[95vw] md:w-full p-0 bg-white rounded-lg md:rounded-xl overflow-hidden">
          {selectedArticle && (
            <div className="flex flex-col h-[90vh]">
              <div className="relative h-48 md:h-64 lg:h-80 flex-shrink-0 overflow-hidden">
                <img 
                  src={selectedArticle.cover} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors z-10"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute top-4 left-4">
                  <Badge className={`bg-gradient-to-r ${getCategoryColor(selectedArticle.category)} text-white`}>
                    {getCategoryName(selectedArticle.category)}
                  </Badge>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h1 className="font-tenor text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                    {selectedArticle.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(selectedArticle.date)}
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

              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="p-6 md:p-8 lg:p-12">
                  {selectedArticle.tags && (
                    <div className="flex flex-wrap items-center gap-2 mb-8">
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

                  <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-brand-teal">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {selectedArticle.summary}
                    </p>
                  </div>

                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />

                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                      <div className="text-sm text-gray-500">
                        Published on {formatDate(selectedArticle.date)}
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
    </>
  );
}
