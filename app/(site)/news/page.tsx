import React from 'react';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <section className="container py-20">
      <h1 className="font-display text-4xl font-bold mb-6">News & Updates</h1>
      <p className="text-lg text-slate-700 max-w-3xl mb-6">Latest news and updates from PiPi Print & Packaging.</p>

      <ul className="space-y-4">
        <li>
          <Link href="#" className="text-brand-teal">Near perfect tamper evidence (TE) on boxes</Link>
          <div className="text-sm text-slate-600">03 Jan 2014</div>
        </li>
      </ul>
    </section>
  );
}
