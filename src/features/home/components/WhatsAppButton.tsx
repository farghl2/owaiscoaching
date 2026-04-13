'use client'
import { motion } from 'motion/react';

const WHATSAPP_NUMBER = '201101232242'; // Egypt country code + number
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-6 z-50"
    >
      {/* Outer pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]/30"
        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.5)] flex items-center justify-center"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.613 1.827 6.587L2.667 29.333l6.907-1.813A13.284 13.284 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24.24a11.013 11.013 0 0 1-5.627-1.547l-.4-.24-4.107 1.08 1.093-4-.267-.413A11.067 11.067 0 0 1 4.933 16c0-6.12 4.96-11.067 11.067-11.067S27.067 9.88 27.067 16 22.12 26.907 16 26.907zm6.08-8.293c-.333-.16-1.973-.973-2.28-1.08-.307-.12-.533-.16-.76.16-.227.333-.88 1.08-1.08 1.307-.2.213-.4.24-.733.08-.333-.16-1.413-.52-2.693-1.653-.997-.893-1.667-1.987-1.867-2.32-.2-.333-.013-.507.147-.667.16-.147.333-.373.5-.56.16-.187.213-.32.32-.533.107-.227.053-.413-.027-.573-.08-.16-.76-1.827-1.04-2.5-.267-.653-.547-.56-.76-.573H9.88c-.213 0-.56.08-.853.4-.293.307-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.32 1.36.52 1.827.68.76.24 1.453.2 2 .12.613-.093 1.973-.8 2.253-1.573.28-.773.28-1.44.2-1.573-.08-.147-.307-.24-.64-.4z"/>
        </svg>
      </motion.div>
    </a>
  );
}
