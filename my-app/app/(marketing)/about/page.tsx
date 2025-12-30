import AboutHero from '@/components/sections/about/AboutHero';
import MissionReveal from '@/components/sections/about/MissionReveal';
import GlobalFootprint from '@/components/sections/about/GlobalFootprint';
import TeamShowcase from '@/components/sections/about/TeamShowcase';
import ValuesBento from '@/components/sections/about/ValuesBento';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionReveal />
      <GlobalFootprint />
      <TeamShowcase />
      <ValuesBento />
    </>
  );
}

