// app/page.tsx (Server Component)
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import CtaSection from '@/components/cta-section';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}