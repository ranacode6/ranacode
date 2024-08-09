import AboutHero from '@/components/About/AboutHero';
import NumberIncremental from '@/components/About/NumberIncremental';
import OurStory from '@/components/About/OurStory';
import OwnerStory from '@/components/About/OwnerStory';
import ShareYourVision from '@/components/About/ShareYourVision';
import TrustedByRoll from '@/components/About/TrustedByRoll';
import WhyChooseUs from '@/components/About/WhyChooseUs';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <TrustedByRoll />
      <NumberIncremental />
      <OurStory />
      <OwnerStory />
      <WhyChooseUs />
      <ShareYourVision />
    </div>
  );
}
