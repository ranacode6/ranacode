import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-800">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
