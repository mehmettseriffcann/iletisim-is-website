'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-lg w-full">
      <div className="container mx-auto flex items-center h-12 md:h-16">
        
        {/* SOL TARAF: LOGO - flex-none ile boyutunu sabitledik */}
        <div className="flex-none">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
              <Image 
                src="/logo-v2.png" 
                alt="İletişim İş Logo" 
                fill 
                className="object-contain" 
                priority 
              />
            </div>
            <div className="leading-tight border-l border-slate-700 pl-3">
              <h1 className="text-lg md:text-xl font-black tracking-tighter uppercase text-white leading-none">İletişim İş</h1>
              <span className="text-red-600 font-bold text-[8px] md:text-[10px] block tracking-[0.2em] uppercase mt-1">Sendikası</span>
            </div>
          </Link>
        </div>
        
        {/* ORTA BÖLÜM: BOŞLUK (Masaüstünde menüyü sağa iter) */}
        <div className="flex-grow flex justify-center">
            {/* MASAÜSTÜ MENÜ */}
            <ul className="hidden lg:flex space-x-8 font-bold text-[11px] uppercase tracking-widest whitespace-nowrap">
              <li><Link href="/" className="hover:text-red-500 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/kurumsal" className="hover:text-red-500 transition-colors">Kurumsal</Link></li>
              <li><Link href="/mevzuat" className="hover:text-red-500 transition-colors">Mevzuat</Link></li>
              <li><Link href="/haberler" className="hover:text-red-500 transition-colors">Haberler</Link></li>
            </ul>
        </div>

        {/* SAĞ TARAF: BUTON VE HAMBURGER - flex-none ile sağa yasladık */}
        <div className="flex-none flex items-center space-x-3 md:space-x-5">
          <Link href="/uyelik">
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 md:px-8 py-2.5 rounded font-black text-[9px] md:text-[10px] transition shadow-lg uppercase tracking-widest cursor-pointer whitespace-nowrap active:scale-95">
              Bize Katıl
            </button>
          </Link>

          {/* MOBİL HAMBURGER */}
          <div className="lg:hidden relative flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 p-1 bg-slate-800 rounded border border-slate-700 focus:outline-none"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-3 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden">
                <ul className="py-2 text-[10px] font-black uppercase tracking-widest">
                  <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 hover:bg-slate-800 border-b border-slate-800/50">Ana Sayfa</Link></li>
                  <li><Link href="/kurumsal" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 hover:bg-slate-800 border-b border-slate-800/50">Kurumsal</Link></li>
                  <li><Link href="/mevzuat" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 hover:bg-slate-800 border-b border-slate-800/50">Mevzuat</Link></li>
                  <li><Link href="/haberler" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 hover:bg-slate-800">Haberler</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}