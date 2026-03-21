'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { TRANSFORMATIONS_MOCK } from '@/src/shared/constans/data';
import { MotionDiv, scaleIn } from '@/src/shared/components/ui/motion-wrapper';

export function ResultsStrip() {
  const t = useTranslations('home.transformations');

  // Use the second transformation from mock data for this compact visual
  const item = TRANSFORMATIONS_MOCK[0];

  return (
    <section id="results-strip" className="w-full flex flex-col gap-6">
      
      {/* HEADER */}
      <MotionDiv>
        <div className="flex flex-col items-center text-center gap-2 uppercase">
          <p className="text-gym-red font-bold tracking-wider text-sm">{t('label')}</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-wide">{t('heading')}</h2>
        </div>
      </MotionDiv>

      {/* COMPACT STAT BANNER */}
      <MotionDiv variants={scaleIn} duration={0.8}>
        <div className="flex flex-col relative w-full bg-[#111] rounded-3xl overflow-hidden border border-white/5 p-4 sm:p-5 mt-2">
          
          {/* Banner Image */}
          <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6">
              <Image 
                src={'/transformations/client_1_after.jpeg'} 
                alt="Result Showcase" 
                fill 
                className="object-cover object-top opacity-70 grayscale hover:grayscale-0 transition-all duration-700" 
              />
              {/* Inner bottom shadow fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#111] to-transparent z-10" />
          </div>

          {/* Floating absolute stats over the bottom edge of the image */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-[-60px] relative z-20">
            
            <div className="flex flex-col items-center justify-center bg-black border border-gym-red/30 rounded-2xl p-5 w-28 sm:w-32 shadow-[0_0_25px_rgba(220,38,38,0.1)] hover:border-gym-red/70 transition-colors">
              <span className="text-gym-red font-bold text-3xl">{item.beforeValue}+</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-widest mt-1 font-medium">Before</span>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-black border border-white/10 rounded-2xl p-5 w-28 sm:w-32 shadow-xl hover:border-white/30 transition-colors">
              <span className="text-white font-bold text-3xl">{item.afterValue}</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-widest mt-1 font-medium">After</span>
            </div>
            
          </div>

        </div>
      </MotionDiv>
    </section>
  );
}

