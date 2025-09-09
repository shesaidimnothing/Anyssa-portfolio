import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <ServicesSection />
    </PageLayout>
  );
}
