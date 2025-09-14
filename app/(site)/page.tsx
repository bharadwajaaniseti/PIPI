import React from 'react';
import { HeroSplit } from '@/components/site/hero-split';
import { ServiceCards } from '@/components/site/service-cards';
import { StatsSection } from '@/components/site/stats-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Healthcare & Decorative Packaging Specialists. Premium cartons, labels & leaflets delivered together, on time. ISO 9001:2015 & GMP certified facility.',
};

export default function HomePage() {
  return (
    <div>
      <HeroSplit />
      <ServiceCards />
      <StatsSection />
    </div>
  );
}