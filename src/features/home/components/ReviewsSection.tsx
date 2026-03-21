'use client'
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { REVIEWS_MOCK } from '@/src/shared/constans/data';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { MotionDiv } from '@/src/shared/components/ui/motion-wrapper';
import { motion } from 'motion/react';

export function ReviewsSection() {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.children[0]?.clientWidth || 320;
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="w-full flex flex-col gap-8 mt-12 lg:mt-24">
      {/* HEADER */}
      <MotionDiv>
        <div className="flex flex-col items-center text-center gap-2 uppercase">
          <p className="text-gym-red font-bold tracking-wider text-sm">{t('home.reviews.label')}</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-wide">{t('home.reviews.title')}</h2>
        </div>
      </MotionDiv>

      <MotionDiv className="relative w-full max-w-5xl mx-auto group">
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
            {REVIEWS_MOCK.map((review) => (
              <div 
                key={review.id} 
                className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-[320px] lg:w-[320px]"
              >
                <motion.div 
                  whileHover={{ y: -6, boxShadow: '0 0 40px rgba(220, 38, 38, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative aspect-9/16 w-full overflow-hidden rounded-3xl border border-white/10 group cursor-pointer bg-neutral-900"
                >
                  <img
                    src={review.image}
                    alt="Client Review"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            ))}
          </div>
      </MotionDiv>
    </section>
  );
}
