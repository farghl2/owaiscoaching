'use client'
import { useTranslations } from 'next-intl';
import { Dumbbell, Utensils, MessageCircle, LucideIcon } from 'lucide-react';
import { PROGRAM_FEATURES_MOCK } from '@/src/shared/constans/data';
import { MotionDiv, MotionStagger, MotionStaggerItem } from '@/src/shared/components/ui/motion-wrapper';

// Map icon strings from mock to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  Utensils,
  MessageCircle,
};

export function ProgramFeaturesSection() {
  const t = useTranslations('home.features');

  return (
    <section id="program-features" className="w-full flex flex-col gap-6">
      
      {/* HEADER */}
      <MotionDiv>
        <div className="flex flex-col items-center text-center gap-2 uppercase">
          <p className="text-gym-red font-bold tracking-wider text-sm">{t('label')}</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-wide">{t('title')}</h2>
        </div>
      </MotionDiv>

      {/* FEATURES CARDS */}
      <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {PROGRAM_FEATURES_MOCK.map((feature) => {
          const Icon = iconMap[feature.iconName];
          return (
            <MotionStaggerItem key={feature.id}>
              <div 
                className="group flex flex-col items-center sm:items-start text-center sm:text-start bg-linear-to-b from-black to-[#0a0a0a] p-6 lg:p-8 rounded-3xl border border-white/5 hover:border-gym-red/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:-translate-y-1"
              >
                
                <div className="bg-[#111] p-4 rounded-2xl border border-white/10 group-hover:border-gym-red/30 transition-colors mb-6 group-hover:scale-110 duration-500">
                  {Icon && <Icon className="w-8 h-8 text-gym-red" strokeWidth={1.5} />}
                </div>
                
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-3">
                  {t(`${feature.id.replace('-', '_')}.title`)}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {t(`${feature.id.replace('-', '_')}.description`)}
                </p>

              </div>
            </MotionStaggerItem>
          );
        })}
      </MotionStagger>

    </section>
  );
}

