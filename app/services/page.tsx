import AllServices from '@/components/Services/AllServices';
import ContactUs from '@/components/Services/ContactUs';
import EstimateCost from '@/components/Services/EstimateCost';
import Expertise from '@/components/Services/Expertise';
import ServicesHero from '@/components/Services/ServicesHero';
import WhyChooseUs from '@/components/Services/WhyChooseUs';

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-800">
      <ServicesHero />
      <Expertise />
      <EstimateCost />
      <AllServices />
      <WhyChooseUs />
      <ContactUs />
    </div>
  );
}
