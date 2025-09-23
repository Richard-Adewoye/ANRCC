import Navbar from '../components/Navbar';
import Hero from './section_1';
import HeroSection from '@/components/HeroSection';
import InfoCardsSection from '@/components/InfoCardsSection';
import TextSection from '@/components/TextSection';
import MultiTextSection from '@/components/MultiTextSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoCardsSection />
      <TextSection />
      <CaseStudiesSection />
      <HeroSection />
      <MultiTextSection />
      <Footer />
    </>
  );
}
