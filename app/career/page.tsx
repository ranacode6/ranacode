import CareerFeature from '@/components/Career/CareerFeature';
import CareerHero from '@/components/Career/CareerHero';
import Equality from '@/components/Career/Equality';
import HearFromTeam from '@/components/Career/HearFromTeam';
import ReadyToStart from '@/components/Career/ReadyToStart';

export default function Career() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <CareerHero />
      <CareerFeature />
      <HearFromTeam />
      <Equality />
      <ReadyToStart />
    </div>
  );
}
