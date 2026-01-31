'use client'

import React, { useState } from 'react'
import { BookOpen, Calendar, ArrowRight, Users, GraduationCap, CheckCircle2 } from 'lucide-react'

// TypeScript Tiplemesi
interface Egitim {
  id: number;
  title: string;
  category: string;
  date: string;
  desc: string;
  status: 'Aktif' | 'Tamamlandı';
}

export default function EgitimPage() {
  const [egitimler] = useState<Egitim[]>([
    {
      id: 1,
      title: "Temel İş Hukuku Eğitimi",
      category: "Hukuk",
      date: "15 Şubat 2026",
      status: "Aktif",
      desc: "İş sözleşmeleri, fazla mesai ve kıdem tazminatı konularında sendikal eğitim programı."
    },
    {
      id: 2,
      title: "İş Sağlığı ve Güvenliği",
      category: "İSG",
      date: "22 Şubat 2026",
      status: "Aktif",
      desc: "İletişim iş kolundaki riskler ve yasal güvenlik önlemleri hakkında kapsamlı bilgilendirme."
    },
    {
      id: 3,
      title: "Sendikal Örgütlenme Semineri",
      category: "Sendika",
      date: "10 Mart 2026",
      status: "Aktif",
      desc: "İş yerinde temsilcilik ve demokratik örgütlenme süreçleri üzerine atölye çalışması."
    }
  ]);

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

            {/* İstatistikler - Çağırdığın ikonları burada kullandık, hata çözüldü */}
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

      {/* Eğitim Kartları */}
      <section className="container mx-auto px-4 -mt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {egitimler.map((egitim) => (
            <div key={egitim.id} className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-red-50 transition-colors">
                    <BookOpen className="w-6 h-6 text-red-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${
                    egitim.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {egitim.status === 'Aktif' && <CheckCircle2 className="w-3 h-3" />}
                    {egitim.status}
                  </span>
                </div>
                <div className="text-red-600 font-bold text-[10px] uppercase tracking-widest mb-2">{egitim.category}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 leading-tight">{egitim.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{egitim.desc}</p>
                
                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold border-t border-slate-50 pt-6">
                  <Calendar className="w-4 h-4" />
                  <span>{egitim.date}</span>
                </div>
                
                <button className="w-full mt-6 bg-slate-900 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center justify-center gap-2 group">
                  Eğitime Kaydol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}