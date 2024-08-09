import CaseHero from '@/components/CaseStudies/CaseHero';
import RecentCaseStudies from '@/components/CaseStudies/RecentCaseStudies';
import RequestProposal from '@/components/CaseStudies/RequestProposal';

export default function CaseStudies() {
  return (
    <div className="bg-white min-h-screen">
      <CaseHero />
      <RecentCaseStudies />
      <RequestProposal />
    </div>
  );
}
