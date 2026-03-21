'use client'

import { useTranslations } from 'next-intl';
import { FAQ_ITEMS_MOCK } from '@/src/shared/constans/data';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { MotionDiv, MotionStagger, MotionStaggerItem } from '@/src/shared/components/ui/motion-wrapper';

export function FaqSection() {
  const t = useTranslations();
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS_MOCK[0].id);

  const toggleOpen = (id: string) => {
    setOpenId(current => current === id ? null : id);
  };

  return (
    <section id="faq" className="w-full flex flex-col gap-6 mt-6">
      
      {/* HEADER */}
      <MotionDiv>
        <div className="flex flex-col items-center text-center gap-2 uppercase">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-wide">{t('home.faq.title')}</h2>
        </div>
      </MotionDiv>

      {/* ACCORDION LIST */}
      <MotionStagger className="flex flex-col gap-3 mt-2">
        {FAQ_ITEMS_MOCK.map((faq) => {
          const isOpen = openId === faq.id;
          
          return (
            <MotionStaggerItem key={faq.id}>
              <div 
              className={cn(
                "flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden",
                isOpen 
                  ? "bg-[#0a0a0a] border-gym-red/40" 
                  : "bg-black border-white/5 hover:border-white/20 hover:bg-[#111]"
              )}
            >
              <button 
                onClick={() => toggleOpen(faq.id)}
                className="flex items-center justify-between w-full p-5 text-left rtl:text-right"
              >
                <span className={cn(
                  "font-medium text-sm transition-colors pr-4 rtl:pr-0 rtl:pl-4",
                  isOpen ? "text-white" : "text-gray-400"
                )}>
                  {t(faq.questionKey as any)}
                </span>
                <div className={cn(
                  "flex items-center justify-center shrink-0 w-6 h-6 rounded-full transition-colors",
                  isOpen ? "bg-gym-red text-white" : "bg-white/10 text-gray-500"
                )}>
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-xs text-gray-500 leading-relaxed">
                    {t(faq.answerKey as any)}
                  </p>
                </div>
              </div>
            </div>
            </MotionStaggerItem>
          );
        })}
      </MotionStagger>

    </section>
  );
}

