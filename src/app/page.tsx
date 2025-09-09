'use client';

import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesSection from '@/components/ServicesSection';
import BackgroundDecorations from '@/components/BackgroundDecorations';

export default function Home() {
  return (
    <PageLayout>
      <div className="relative">
        <BackgroundDecorations variant="minimal" />
        <Hero />
        <About />
        <ServicesSection />
      </div>
    </PageLayout>
  );
}
