'use client'
import { useTranslations } from 'next-intl';
import { Button } from '@/src/shared/components/ui/button';
import { MoveRight, MoveLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { MotionDiv, scaleIn } from '@/src/shared/components/ui/motion-wrapper';

export function BottomCtaSection() {
  const t = useTranslations('home.cta');

  return (
    <section id="bottom-cta" className="w-full relative py-20 px-4 bg-black overflow-hidden border-t border-white/5">
      
      {/* Background radial soft red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gym-red/20 opacity-40 blur-[120px] rounded-full z-0 pointer-events-none" />

      <MotionDiv variants={scaleIn} duration={0.8}>
        <div className="mx-auto max-w-4xl relative z-10 flex flex-col items-center text-center gap-8 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-10 sm:p-14 lg:p-20 rounded-[2.5rem] shadow-[0_0_50px_rgba(220,38,38,0.1)]">
          
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-heading text-5xl sm:text-6xl font-bold text-white tracking-wider uppercase">
              {t('title')}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
              {t('subtitle')}
            </p>
          </div>

          <a href="#pricing">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(220, 38, 38, 0.3)',
                  '0 0 60px rgba(220, 38, 38, 0.6)',
                  '0 0 20px rgba(220, 38, 38, 0.3)',
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="inline-block rounded-full"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden rounded-full bg-gym-red text-white font-bold tracking-widest uppercase text-sm sm:text-base px-10 sm:px-14 h-16 hover:bg-red-600 border border-red-500/50 transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('button')}
                  <MoveRight className="w-5 h-5 ltr:block rtl:hidden transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  <MoveLeft className="w-5 h-5 hidden rtl:block transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
                </span>
              </Button>
            </motion.div>
          </a>

        </div>
      </MotionDiv>
    </section>
  );
}

