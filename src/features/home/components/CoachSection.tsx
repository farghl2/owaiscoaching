'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { COACH_PROFILE_MOCK } from '@/src/shared/constans/data';
import { MotionDiv, fadeLeft } from '@/src/shared/components/ui/motion-wrapper';

export function CoachSection() {
  const t = useTranslations('home.coach');

  return (
    <section id="coach" className="w-full flex flex-col gap-6 mt-6">
      
      {/* HEADER */}
      <MotionDiv>
        <div className="flex flex-col gap-2 items-center text-center uppercase">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-wide">
            {t.rich('title', {
              red: (chunks) => <span className="text-gym-red uppercase">{chunks}</span>
            })}
          </h2>
        </div>
      </MotionDiv>

      {/* COACH PROFILE CARD */}
      <MotionDiv variants={fadeLeft} duration={0.7}>
        <div className="flex flex-col sm:flex-row gap-6 relative w-full bg-[#111] rounded-3xl overflow-hidden border border-white/5 p-4 sm:p-6 mt-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/10">
          
          {/* Coach Image Column */}
          <div className="min-h-[150px] relative shrink-0 w-full sm:w-1/3 lg:w-32 xl:w-40 aspect-3/4 sm:aspect-auto sm:h-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={COACH_PROFILE_MOCK.photo} 
              alt="Gym Coach Profile" 
              fill 
              className="object-cover object-top  transition-all duration-500"
            />
          </div>

          {/* Coach Info Column */}
          <div className="flex flex-col justify-center flex-1 gap-4 text-left rtl:text-right">
            <p className="text-sm text-gray-400 font-medium leading-relaxed italic">
              &quot;{t('bio')}&quot;
            </p>
            
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold"></span>
              <span className="font-serif text-xl sm:text-2xl text-white styling-script underline decoration-gym-red decoration-2 underline-offset-4">
                {COACH_PROFILE_MOCK.signature}
              </span>
            </div>
          </div>

        </div>
      </MotionDiv>
    </section>
  );
}

