'use client'
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { TRANSFORMATIONS_MOCK } from '@/src/shared/constans/data';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { MotionDiv } from '@/src/shared/components/ui/motion-wrapper';
import { motion } from 'motion/react';

export function TransformationsSection() {
  const t = useTranslations('home.transformations');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Get the width of one item
      const itemWidth = scrollRef.current.children[0]?.clientWidth || 320;
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="transformations" className="w-full">
      <div className="flex flex-col gap-10">
        
        {/* HEADER */}
        <MotionDiv>
          <div className="flex flex-col items-center text-center gap-2 uppercase">
            <p className="text-gym-red font-bold tracking-wider text-sm">{t('title')}</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-wide">{t('heading')}</h2>
          </div>
        </MotionDiv>

        {/* TRANSFORMATION CAROUSEL */}
        <MotionDiv delay={0.2} className="relative w-full group">
          
          <button 
            onClick={() => scroll('left')}
            className="absolute z-10 flex items-center justify-center left-2 sm:-left-5 top-1/2 -translate-y-1/2 bg-black border border-white/20 text-white hover:bg-gym-red hover:border-gym-red transition-all size-10 sm:size-12 rounded-full shadow-xl"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 ltr:block rtl:hidden" />
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 hidden rtl:block" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute z-10 flex items-center justify-center right-2 sm:-right-5 top-1/2 -translate-y-1/2 bg-black border border-white/20 text-white hover:bg-gym-red hover:border-gym-red transition-all size-10 sm:size-12 rounded-full shadow-xl"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 ltr:block rtl:hidden" />
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 hidden rtl:block" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
          >
            {TRANSFORMATIONS_MOCK.map((item) => (
              <div 
                key={item.id} 
                className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[340px] lg:w-[350px]"
              >
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 0 40px rgba(220, 38, 38, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex flex-col bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden hover:border-gym-red/30 cursor-pointer group h-full"
                >
                  {/* Image View */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden z-0 bg-neutral-900">
                    <img 
                      src={item.afterImage} 
                      alt={`${item.clientName} After`} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                    />    
                  </div>

                  {/* Stats Row */}
                  <div dir='ltr' className="flex items-center justify-between px-4 py-5">
                    
                    <div className="flex flex-col items-center justify-center bg-black border border-white/10 rounded-xl py-3 flex-1 mx-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-gym-red/50 transition-colors">
                      <span className="text-gym-red font-bold text-xl lg:text-2xl">{item.beforeValue}+</span>
                      <span className="text-gray-500 text-[9px] uppercase tracking-widest mt-0.5 font-medium">Before</span>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center px-2">
                      <div className="bg-[#0a0a0a] p-1 rounded-full border border-white/10">
                        <ChevronRight className="w-4 h-4 text-gym-red ltr:block rtl:hidden" />
                        <ChevronLeft className="w-4 h-4 text-gym-red hidden rtl:block" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-black border border-white/10 rounded-xl py-3 flex-1 mx-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-gym-red/50 transition-colors">
                      <span className="text-white font-bold text-xl lg:text-2xl">{item.afterValue}</span>
                      <span className="text-gray-500 text-[9px] uppercase tracking-widest mt-0.5 font-medium">After</span>
                    </div>

                    <div className="flex flex-col items-center justify-center px-2">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{item.durationWeeks}M</span>
                    </div>
                    
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </MotionDiv>

      </div>
    </section>
  );
}
