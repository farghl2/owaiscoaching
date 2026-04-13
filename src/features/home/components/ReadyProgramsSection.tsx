'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { READY_PROGRAMS_MOCK } from '@/src/shared/constans/data';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/src/shared/components/ui/button';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import { MotionDiv, MotionStagger, MotionStaggerItem } from '@/src/shared/components/ui/motion-wrapper';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/src/shared/components/ui/dialog';

export function ReadyProgramsSection() {
  const t = useTranslations();
  const [selectedDurations, setSelectedDurations] = useState<Record<string, number>>({});
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [copiedState, setCopiedState] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState(text);
    setTimeout(() => setCopiedState(null), 2000);
  };

  return (
    <section id="ready-programs" className="w-full flex flex-col gap-6 mt-6 lg:mt-0">
      
      {/* HEADER */}
      <MotionDiv>
        <div className="flex flex-col items-center text-center gap-2 uppercase">
          <p className="text-gym-red font-bold tracking-wider text-sm">{t('home.ready_programs.label')}</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-wide">{t('home.ready_programs.title')}</h2>
        </div>
      </MotionDiv>

      {/* PRICING CARDS */}
      <MotionStagger className="flex justify-center items-start mt-6 w-full">
        {READY_PROGRAMS_MOCK.map((plan) => {
          
          const isPopular = plan.isPopular;
          const selectedIndex = selectedDurations[plan.id] || 0;
          const currentOption = plan.pricingOptions[selectedIndex];

          return (
            <MotionStaggerItem key={plan.id} className="w-full max-w-md">
              <motion.div 
                whileHover={{ 
                  y: isPopular ? -12 : -8, 
                  boxShadow: isPopular 
                    ? '0 0 60px rgba(220, 38, 38, 0.3)' 
                    : '0 0 30px rgba(255, 255, 255, 0.05)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={cn(
                  "relative flex flex-col p-6 rounded-3xl border h-full",
                  isPopular 
                    ? "bg-gym-red/5 border-gym-red shadow-[0_0_40px_rgba(220,38,38,0.15)] lg:p-10" 
                    : "bg-[#0a0a0a] border-white/10"
                )}
              >
                
                {/* Popular Badge */}
                {isPopular && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 400, damping: 15 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gym-red text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Plan Title & Price */}
                <div className="flex flex-col items-center text-center gap-2 mb-4 pt-2">
                  <span className={cn(
                    "font-medium text-sm tracking-wider uppercase",
                    isPopular ? "text-gym-red" : "text-gray-400"
                  )}>
                    {t(plan.tierKey)}
                  </span>
                  
                  <div className="w-full mt-2 mb-2">
                    <p className="text-xs text-gray-500 text-center mb-1.5 tracking-wider">{t('home.pricing.choose_split')}</p>
                    <select 
                      className="w-full bg-black border border-white/20 text-white text-sm rounded-lg focus:ring-gym-red focus:border-gym-red block p-2.5 outline-none cursor-pointer"
                      value={selectedIndex}
                      onChange={(e) => setSelectedDurations(prev => ({ ...prev, [plan.id]: Number(e.target.value) }))}
                    >
                      {plan.pricingOptions.map((option, idx) => (
                        <option key={idx} value={idx}>
                          {t(option.durationKey)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col items-center gap-1 font-heading mt-2">
                    {currentOption.originalPrice && (
                      <span className="text-lg text-gray-500 line-through decoration-gym-red font-medium">
                        {currentOption.originalPrice}{t(currentOption.billingKey)}
                      </span>
                    )}
                    <div className="flex items-end gap-1">
                      <span className="text-4xl lg:text-5xl font-bold text-white leading-none">
                        {currentOption.price}
                      </span>
                      <span className="text-gray-500 font-medium pb-1">
                        {t(currentOption.billingKey)}
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="border-white/5 mb-6 mt-4" />

                {/* Feature List */}
                <ul className="flex flex-col gap-4 flex-1 mb-8">
                  {plan.featureKeys.map((featureKey, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 bg-white/5 p-1 rounded-full shrink-0">
                        <Check className={cn("w-3 h-3", isPopular ? "text-gym-red" : "text-gray-400")} strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 leading-tight">
                        {t(featureKey)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button with animation */}
                {isPopular ? (
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 15px rgba(220, 38, 38, 0.3)',
                        '0 0 35px rgba(220, 38, 38, 0.6)',
                        '0 0 15px rgba(220, 38, 38, 0.3)',
                      ],
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full mt-auto"
                  >
                    <Button 
                      variant="default"
                      onClick={() => setIsPaymentModalOpen(true)}
                      className="w-full rounded-full h-12 font-bold tracking-widest uppercase text-xs bg-gym-red hover:bg-red-600 text-white transition-colors"
                    >
                      {t('common.shop_now')}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full mt-auto"
                  >
                    <Button 
                      variant="outline"
                      onClick={() => setIsPaymentModalOpen(true)}
                      className="w-full rounded-full h-12 font-bold tracking-widest uppercase text-xs border-white/10 text-white hover:bg-white hover:text-black transition-all"
                    >
                      {t('common.shop_now')}
                    </Button>
                  </motion.div>
                )}

              </motion.div>
            </MotionStaggerItem>
          );
        })}
      </MotionStagger>

      {/* Payment Modal */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent className="bg-black border border-white/10 text-white max-w-md">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold font-heading tracking-wide uppercase">{t('home.pricing.payment_modal.title')}</DialogTitle>
            <DialogDescription className="text-gray-400 mt-1">
              {t('home.pricing.payment_modal.subtitle')}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-6">
            {/* InstaPay */}
            <div className="flex flex-col gap-3">
              <h4 className="text-gym-red font-bold text-sm tracking-widest uppercase">{t('home.pricing.payment_modal.instapay')}</h4>
              
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm font-medium text-gray-200">ahmedyaaser11@instapay</span>
                <button 
                  onClick={() => handleCopy('ahmedyaaser11@instapay')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg"
                >
                  {copiedState === 'ahmedyaaser11@instapay' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copiedState === 'ahmedyaaser11@instapay' ? t('home.pricing.payment_modal.copied') : t('home.pricing.payment_modal.copy')}
                </button>
              </div>

              <a 
                href="https://ipn.eg/S/ahmedyaaser11/instapay/7FhdMV" 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gym-red hover:bg-red-600 text-white transition-colors h-12 rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                <ExternalLink className="w-4 h-4" />
                {t('home.pricing.payment_modal.pay_link')}
              </a>
            </div>

            <hr className="border-white/10" />

            {/* e& */}
            <div className="flex flex-col gap-3">
              <h4 className="text-gym-red font-bold text-sm tracking-widest uppercase">{t('home.pricing.payment_modal.e_and')}</h4>
              
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm font-medium text-gray-200">01101232242</span>
                <button 
                  onClick={() => handleCopy('01101232242')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg"
                >
                  {copiedState === '01101232242' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copiedState === '01101232242' ? t('home.pricing.payment_modal.copied') : t('home.pricing.payment_modal.copy')}
                </button>
              </div>
            </div>

            {/* WhatsApp instruction */}
            <div className="flex items-start gap-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-4">
              <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0 fill-[#25D366] mt-0.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.613 1.827 6.587L2.667 29.333l6.907-1.813A13.284 13.284 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24.24a11.013 11.013 0 0 1-5.627-1.547l-.4-.24-4.107 1.08 1.093-4-.267-.413A11.067 11.067 0 0 1 4.933 16c0-6.12 4.96-11.067 11.067-11.067S27.067 9.88 27.067 16 22.12 26.907 16 26.907zm6.08-8.293c-.333-.16-1.973-.973-2.28-1.08-.307-.12-.533-.16-.76.16-.227.333-.88 1.08-1.08 1.307-.2.213-.4.24-.733.08-.333-.16-1.413-.52-2.693-1.653-.997-.893-1.667-1.987-1.867-2.32-.2-.333-.013-.507.147-.667.16-.147.333-.373.5-.56.16-.187.213-.32.32-.533.107-.227.053-.413-.027-.573-.08-.16-.76-1.827-1.04-2.5-.267-.653-.547-.56-.76-.573H9.88c-.213 0-.56.08-.853.4-.293.307-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.32 1.36.52 1.827.68.76.24 1.453.2 2 .12.613-.093 1.973-.8 2.253-1.573.28-.773.28-1.44.2-1.573-.08-.147-.307-.24-.64-.4z"/>
              </svg>
              <div className="flex flex-col gap-1">
                <p className="text-[#25D366] font-bold text-sm tracking-wide">{t('home.pricing.payment_modal.after_pay_title')}</p>
                <p className="text-gray-300 text-xs leading-relaxed">{t('home.pricing.payment_modal.after_pay_text')}</p>
              </div>
            </div>

          </div>
        </DialogContent>
      </Dialog>

    </section>
  );
}
