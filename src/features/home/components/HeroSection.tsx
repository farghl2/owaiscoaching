'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'motion/react';

import { Button } from '@/src/shared/components/ui/button';

export function HeroSection() {
  const t = useTranslations();

  return (
    <section id="hero" className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-black">

      {/* BACKGROUND IMAGE & OVERLAYS */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0 ltr:bg-left rtl:bg-right"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Gym Coaching Hero"
          fill
          priority
          quality={100}
          className="object-cover md:object-contain object-top sm:object-center rtl:-scale-x-100 opacity-90"
        />
        {/* Gradients adapt to text direction */}
        <div className="absolute inset-0 bg-linear-to-r ltr:from-black/80 ltr:via-black/40 ltr:to-transparent rtl:from-transparent rtl:via-black/40 rtl:to-black/80 z-10" />
        <div className="absolute inset-0 bg-linear-to-r ltr:from-red-950/40 ltr:via-transparent ltr:to-transparent rtl:from-transparent rtl:via-transparent rtl:to-red-950/40 z-10" />
        {/* Bottom fade to black */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/80 to-transparent z-10" />
      </motion.div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 lg:px-8">
        <div className="max-w-3xl flex flex-col gap-8">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white uppercase leading-tight md:leading-[1.1] drop-shadow-2xl whitespace-pre-line"
          >
            {t('home.hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="max-w-xl text-lg md:text-xl text-gray-300 font-sans tracking-wide leading-relaxed"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            className="pt-4"
          >
            <a href="#pricing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(220, 38, 38, 0.3)',
                    '0 0 50px rgba(220, 38, 38, 0.6)',
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
                  className="rounded-full bg-gym-red hover:bg-red-600 text-white font-bold tracking-widest uppercase text-base px-10 h-16 transition-colors"
                >
                  {t('common.select_plan')}
                </Button>
              </motion.div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
