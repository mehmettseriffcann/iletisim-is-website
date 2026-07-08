'use client'

import React, { useState } from 'react'
import { BookOpen, Calendar, ArrowRight, Users, GraduationCap, CheckCircle2, Play, X } from 'lucide-react'
import Image from 'next/image'

// TypeScript Tiplemesi
interface Egitim {
  id: number;
  title: string;
  category: string;
  date: string;
  desc: string;
  status: 'Aktif' | 'Tamamlandı';
}

interface Soru {
  id: number;
  title: string;
  coverSrc: string;
  videoSrc: string;
  youtubeId?: string;
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

  const [activeVideo, setActiveVideo] = useState<Soru | null>(null);

  // 10 Soru 10 Cevap Listesi (Yüklenen YouTube linkleriyle birlikte)
  const sorular: Soru[] = [
    { id: 1, title: "Uzaktan Çalışma Nedir?", coverSrc: "/egitim/kapaklar/soru-1.png", videoSrc: "/egitim/videolar/soru-1.mp4", youtubeId: "kIuVS0-komw" },
    { id: 2, title: "Mesai Ne Zaman Biter?", coverSrc: "/egitim/kapaklar/soru-2.png", videoSrc: "/egitim/videolar/soru-2.mp4", youtubeId: "" },
    { id: 3, title: "Mobbing Nedir?", coverSrc: "/egitim/kapaklar/soru-3.png", videoSrc: "/egitim/videolar/soru-3.mp4", youtubeId: "IVU9m6j-KQM" },
    { id: 4, title: "İşveren Ne Kadar Denetleyebilir?", coverSrc: "/egitim/kapaklar/soru-4.png", videoSrc: "/egitim/videolar/soru-4.mp4", youtubeId: "DXJ5N6kmmpo" },
    { id: 5, title: "Uzaktan Çalışma İş Sağlığı ve Güvenliği", coverSrc: "/egitim/kapaklar/soru-5.png", videoSrc: "/egitim/videolar/soru-5.mp4", youtubeId: "0FRPJITUT-0" },
    { id: 6, title: "Sendika Nedir?", coverSrc: "/egitim/kapaklar/soru-6.png", videoSrc: "/egitim/videolar/soru-6.mp4", youtubeId: "4I2PEahUaQ0" },
    { id: 7, title: "Sendikaya Üye Olma", coverSrc: "/egitim/kapaklar/soru-7.png", videoSrc: "/egitim/videolar/soru-7.mp4", youtubeId: "QAGP2aipWIk" },
    { id: 8, title: "TİS Nedir?", coverSrc: "/egitim/kapaklar/soru-8.png", videoSrc: "/egitim/videolar/soru-8.mp4", youtubeId: "qUza6vLSNuE" },
    { id: 9, title: "Sendika Destek Kanalları", coverSrc: "/egitim/kapaklar/soru-9.png", videoSrc: "/egitim/videolar/soru-9.mp4", youtubeId: "5ct6rg2RPH0" },
    { id: 10, title: "Uluslararası Sendika", coverSrc: "/egitim/kapaklar/soru-10.png", videoSrc: "/egitim/videolar/soru-10.mp4", youtubeId: "QXsrKpDlrrc" }
  ];

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

      {/* 10 Soru 10 Cevap Bölümü */}
      <section className="bg-slate-900 text-white py-24 px-4 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="mb-16 border-l-8 border-red-600 pl-6 text-left">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Soru & Cevap</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
              10 SORU <span className="text-red-600">10 CEVAP</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl font-light">
              Sendikal haklarınız, çalışma hayatındaki haklarınız ve üyelik süreçleriyle ilgili en çok merak edilen 10 sorunun video yanıtları.
            </p>
          </div>

          {/* Grid Yapısı - Masaüstünde 5 sütun, mobilde 1 sütun */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sorular.map((soru) => (
              <div
                key={soru.id}
                onClick={() => setActiveVideo(soru)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-800 border border-slate-700/50 hover:border-red-600/50 shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video flex flex-col justify-end"
              >
                {/* Kapak Görseli */}
                <Image
                  src={soru.coverSrc}
                  alt={soru.title}
                  fill
                  sizes="(max-w-768px) 100vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Koyu Degrade Astar (Görselin üzerini hafifçe karartmak için) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 z-10" />

                {/* Oynat İkonu (Hover ile görünür olur) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 z-20">
                  <div className="bg-red-600 text-white p-4 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-red-700">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>

                {/* Kart Bilgileri */}
                <div className="relative p-4 z-20 text-left">
                  <span className="text-[10px] bg-red-600 text-white font-black px-2.5 py-1 rounded uppercase tracking-wider">
                    Soru {soru.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal (Pop-up) */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md transition-all duration-300 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          {/* Dikey (Shorts) videoları tam sığdırmak için max-w-[360px] ve aspect-[9/16] kullanıldı */}
          <div 
            className="relative w-full max-w-[360px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Üst Bilgi Barı */}
            <div className="flex justify-between items-center px-6 py-4 bg-slate-900 border-b border-slate-800">
              <h3 className="text-sm md:text-base font-black uppercase text-white tracking-widest flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                SORU {activeVideo.id}
              </h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Area */}
            <div className="aspect-[9/16] bg-black relative">
              {activeVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <video
                  src={activeVideo.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}