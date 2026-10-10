import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { FoxMascot } from '../common/FoxMascot';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-[#D95A11] text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-[#B84E10]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Seals and School Name */}
        <div className="flex items-center gap-4 text-center md:text-left">
          {/* Seals graphic */}
          <div className="flex items-center gap-2">
          {/* DALAWANG BILOG NA LOGOS */}
<div className="flex items-center gap-2.5">
  {/* 1. Unang Bilog: Holy Angel University Seal */}
  <div className="w-12 h-12 rounded-full bg-white p-0.5 flex items-center justify-center shadow-md ring-2 ring-white/80 overflow-hidden shrink-0 hover:scale-105 transition-transform" title="Holy Angel University">
    <img
      src="/assets/images/hau_seal.svg"
      alt="Holy Angel University Seal"
      className="w-full h-full object-contain"
      onError={(e) => {
        e.currentTarget.src = '/assets/images/hau_seal.png';
      }}
    />
  </div>

  {/* 2. Pangalawang Bilog: School of Computing Seal */}
  <div className="w-12 h-12 rounded-full bg-white p-0.5 flex items-center justify-center shadow-md ring-2 ring-white/80 overflow-hidden shrink-0 hover:scale-105 transition-transform" title="School of Computing">
    <img
      src="/assets/images/soc_seal.svg"
      alt="School of Computing Seal"
      className="w-full h-full object-contain"
      onError={(e) => {
        e.currentTarget.src = '/assets/images/soc_seal.png';
      }}
    />
  </div>
</div>

{/* Sa tabi ng dalawang bilog: Holy Angel University at SOC */}
<div>
  <div className="font-tech text-base sm:text-lg font-black tracking-wide uppercase text-white drop-shadow-sm">
    Holy Angel University
  </div>
  <div className="font-tech text-xs font-semibold text-amber-100 tracking-wider uppercase">
    School Of Computing • ADF2027
  </div>
</div>

            <button
              onClick={onOpenAdmin}
              className="text-[11px] underline opacity-80 hover:opacity-100 flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Admin Login</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
