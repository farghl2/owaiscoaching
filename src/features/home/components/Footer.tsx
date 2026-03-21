'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Youtube } from 'lucide-react';
import { NAV_LINKS_MOCK } from '@/src/shared/constans/data';
import Image from 'next/image';
import {motion} from 'motion/react'

export function Footer() {
  const t = useTranslations();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-16 pb-8 px-4 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        
        {/* Top Section: Logo, Socials & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Brand/Logo Area */}
          <div className="flex flex-col gap-4">
            
                        <Image src="/logooo.png" alt="Logo" width={170} height={170} />
              
           
            {/* <p className="text-sm text-gray-400 max-w-xs leading-relaxed font-medium">
              {t('home.footer.description')}
            </p> */}
          </div>

           {/* Quick Links Column */}
           <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">{t('home.footer.quick_links')}</h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS_MOCK.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-gym-red transition-colors font-medium capitalize lg:uppercase lg:tracking-widest"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">{t('home.footer.follow_us')}</h4>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/owais_coaching?igsh=NHdrZWk3ZDc4OHdk&utm_source=qr" target="_blank" rel="noreferrer" className="bg-[#111] p-3 rounded-full border border-white/5 hover:border-gym-red hover:bg-gym-red/10 text-gray-400 hover:text-gym-red transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@ahmedyasser133" target="_blank" rel="noreferrer" className="bg-[#111] p-3 rounded-full border border-white/5 hover:border-gym-red hover:bg-gym-red/10 text-gray-400 hover:text-gym-red transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/201101232242" target="_blank" rel="noreferrer" className="bg-[#111] p-3 rounded-full border border-white/5 hover:border-gym-red hover:bg-gym-red/10 text-gray-400 hover:text-gym-red transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.7c-32.9 0-65.1-8.8-93.3-25.5l-6.7-4-69.3 18.2L73 336l-4.4-7c-18.4-29.3-28.1-63.5-28.1-98.9 0-101.9 83-184.8 184.9-184.8 49.3 0 95.7 19.3 130.6 54.2 34.8 34.9 54 81.3 54 130.7 0 101.9-83 184.5-184.8 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-2.1-3.6-2.1-3.7 1.1-6.9 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@ahmedyaaserr1?_r=1&_t=ZS-94sY7gEcSIL" target="_blank" rel="noreferrer" className="bg-[#111] p-3 rounded-full border border-white/5 hover:border-gym-red hover:bg-gym-red/10 text-gray-400 hover:text-gym-red transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                  <path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25v178.72A162.55 162.55 0 1 1 162.6 162.6v86.51a76.06 76.06 0 1 0 86.51 86.51V0h88.66a146.06 146.06 0 0 0 110.23 110.23z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-white/5" />

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium tracking-wide">
          <p>{t('home.footer.copyright', { year: currentYear })}</p>
          
        </div>

      </div>
    </footer>
  );
}

