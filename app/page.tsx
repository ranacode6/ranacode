import ClientTestimonial from '@/components/Home/ClientTestimonial';
import ExploringCaseStudies from '@/components/Home/ExploringCaseStudies';
import Faq from '@/components/Home/Faq';
import Hero from '@/components/Home/Hero';
import ImageCompareViewer from '@/components/Home/ImageCompareViewer';
import OurProcess from '@/components/Home/OurProcess';
import ServedIndustryRoll from '@/components/Home/ServedIndustryRoll';
import Solutions from '@/components/Home/Solutions';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-700">
      <Hero />
      <ServedIndustryRoll />
      <ImageCompareViewer />
      <Solutions />
      <OurProcess />
      <ExploringCaseStudies />
      <ClientTestimonial />
      <Faq />
    </main>
  );
}
