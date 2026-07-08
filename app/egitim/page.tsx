'use client'

import React from 'react'
import { Users, GraduationCap } from 'lucide-react'
import SoruCevapSection from '@/components/SoruCevapSection'

export default function EgitimPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Bölümü */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-left">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Eğitim Akademisi</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                Bilgiyle <br className="hidden md:block" />
                <span className="text-red-600">Güçleniyoruz</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                İletişim İş üyeleri için hazırladığımız sertifikalı eğitim programları ile haklarımızı ve geleceğimizi öğreniyoruz.
              </p>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
               <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                  <Users className="w-5 h-5 text-red-600 mb-2" />
                  <div className="text-2xl font-black text-white">1200+</div>
                  <div className="text-[8px] uppercase text-slate-500 font-bold tracking-widest">Eğitimli Üye</div>
               </div>
               <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                  <GraduationCap className="w-5 h-5 text-red-600 mb-2" />
                  <div className="text-2xl font-black text-white">15</div>
                  <div className="text-[8px] uppercase text-slate-500 font-bold tracking-widest">Aktif Program</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Soru 10 Cevap Bölümü */}
      <SoruCevapSection />
    </div>
  )
}