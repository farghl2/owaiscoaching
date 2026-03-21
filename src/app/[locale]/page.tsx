import { Navbar } from '@/src/features/home/components/Navbar';
import { HeroSection } from '@/src/features/home/components/HeroSection';
import { TransformationsSection } from '@/src/features/home/components/TransformationsSection';
import { ResultsStrip } from '@/src/features/home/components/ResultsStrip';
import { ProgramFeaturesSection } from '@/src/features/home/components/ProgramFeaturesSection';
import { PricingSection } from '@/src/features/home/components/PricingSection';
import { ReadyProgramsSection } from '@/src/features/home/components/ReadyProgramsSection';
import { NutritionSection } from '@/src/features/home/components/NutritionSection';
import { CoachSection } from '@/src/features/home/components/CoachSection';
import { FaqSection } from '@/src/features/home/components/FaqSection';
import { BottomCtaSection } from '@/src/features/home/components/BottomCtaSection';
import { Footer } from '@/src/features/home/components/Footer';
import { ReviewsSection } from '@/src/features/home/components/ReviewsSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="overflow-x-hidden w-full">
        <HeroSection />
        <section className="bg-neutral-950">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 py-24 px-4 lg:px-8">
            <TransformationsSection />
            {/* <ResultsStrip /> */}
            <ProgramFeaturesSection />
            <PricingSection />
            <ReadyProgramsSection />
            <CoachSection />
            <ReviewsSection />
            <FaqSection />
          </div>
        </section>
        <BottomCtaSection />
        <Footer />
      </div>
    </main>
  );
}
