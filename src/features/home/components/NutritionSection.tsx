'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { NUTRITION_PLANS_MOCK } from '@/src/shared/constans/data';
import { MotionDiv, scaleIn } from '@/src/shared/components/ui/motion-wrapper';

export function NutritionSection() {
  const t = useTranslations('home.nutrition');

  return (
    <section id="nutrition" className="w-full flex flex-col gap-6">
      
      {/* HEADER */}
      <MotionDiv>
        <div className="flex flex-col items-center text-center gap-2 uppercase">
          <p className="text-gym-red font-bold tracking-wider text-sm">{t('label')}</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-wide">{t('title')}</h2>
        </div>
      </MotionDiv>

      <MotionDiv variants={scaleIn} duration={0.8}>
        <div className="flex flex-col relative w-full bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 p-4 sm:p-6 mt-2">
          
          {/* Banner Image */}
          <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-8 border border-white/5">
              <Image 
                src="/images/food.jpg" 
                alt="Nutrition Overview" 
                fill 
                className="object-cover opacity-80" 
              />
              {/* Subtle red shadow overlay over food */}
              <div className="absolute inset-0 bg-gym-red/10 mix-blend-color-burn z-10" />
          </div>

          {/* Nested Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {NUTRITION_PLANS_MOCK.map((plan) => (
              <div 
                key={plan.id} 
                className="flex flex-col gap-1 p-4 rounded-2xl bg-black border border-white/5 hover:border-gym-red/40 transition-colors shadow-lg cursor-pointer group"
              >
                 <h4 className="font-medium text-white group-hover:text-gym-red transition-colors">{t(plan.labelKey)}</h4>
                 <p className="text-xs text-gray-500">{t(plan.descriptionKey)}</p>
              </div>
            ))}
          </div>

        </div>
      </MotionDiv>
    </section>
  );
}

