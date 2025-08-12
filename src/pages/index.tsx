import InfoCardsSection from '@/components/InfoCardsSection';
import Navbar from '../components/Navbar';
import Hero from './section_1';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import HeroSection from '@/components/HeroSection';
import TextSection from '@/components/TextSection';
import MultiTextSection from '@/components/MultiTextSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
           <Hero/>
           <InfoCardsSection/>
           <TextSection/>
           <CaseStudiesSection/>
                      <HeroSection/>
                      <MultiTextSection/>
                      <Footer/>
    </>
  );
}
