'use client'
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/routing';
import { Menu, Dumbbell, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

import { NAV_LINKS_MOCK } from '@/src/shared/constans/data';
import { Button } from '@/src/shared/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/src/shared/components/ui/sheet';
import Image from 'next/image';

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-8">
        
        {/* LOGO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Image src="/logooo.png" alt="Logo" width={120} height={120} />
          {/* <div className="flex flex-col uppercase font-heading text-white leading-none">
            <span className="text-[1.1rem] font-bold tracking-tight">Owais</span>
            <span className="text-[1.1rem] font-bold tracking-tight">Coaching</span>
          </div> */}
        </motion.div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS_MOCK.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-gray-400 uppercase tracking-wider transition-colors hover:text-white"
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage}
            className="text-white hover:bg-white/10"
            title={locale === 'ar' ? "Switch to English" : "التبديل للعربية"}
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">Toggle Language</span>
            <span className="absolute -bottom-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              {locale === 'ar' ? 'EN' : 'عربي'}
            </span>
          </Button>

          <a href="#pricing">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="rounded-full bg-linear-to-r from-red-600 to-red-500 text-white font-bold tracking-wider hover:opacity-90 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                {t('common.join_now')}
              </Button>
            </motion.div>
          </a>
        </div>

        {/* MOBILE NAV */}
        <div className="md:hidden flex items-center gap-2">
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage}
            className="text-white hover:bg-white/10"
          >
            <Globe className="h-5 w-5" />
            <span className="absolute -bottom-3 text-[9px] font-bold uppercase text-gray-500">
               {locale === 'ar' ? 'EN' : 'عربي'}
            </span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-l border-white/10 p-6">
              <div className="flex flex-col gap-8 mt-12">
                <ul className="flex flex-col gap-6">
                  {NAV_LINKS_MOCK.map((link) => (
                    <li key={link.id}>
                      <a 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-heading font-medium text-gray-300 uppercase tracking-widest hover:text-white"
                      >
                        {t(link.labelKey)}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#pricing" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full bg-gym-red text-white font-bold text-lg h-14 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    {t('common.join_now')}
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  );
}
