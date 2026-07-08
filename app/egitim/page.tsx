'use client'

import React from 'react'
import SoruCevapSection from '@/components/SoruCevapSection'

export default function EgitimPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Bölümü */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl text-left">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Sendikal Eğitim Rehberi</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
              Haklarımızı <br className="hidden md:block" />
              <span className="text-red-600">Öğreniyoruz</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
              İletişim İş Sendikası olarak üyelerimizin haklarını korumak amacıyla hazırladığımız 10 Soru 10 Cevap video rehberi ile çalışma hayatındaki tüm yasal haklarımızı öğreniyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Soru 10 Cevap Bölümü */}
      <SoruCevapSection />
    </div>
  )
}