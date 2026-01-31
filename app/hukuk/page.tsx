'use client'

import React, { useState } from 'react'
import { Scale, FileText, Gavel, HelpCircle, X } from 'lucide-react'

// TypeScript için verinin tipini tanımlıyoruz (any hatasını çözer)
interface HukukKarti {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  detail: string;
}

export default function HukukPage() {
  const [selectedLaw, setSelectedLaw] = useState<HukukKarti | null>(null);

  const hukukiKonular: HukukKarti[] = [
    {
      id: 1,
      title: "İş Kanunu Bilgilendirme",
      desc: "4857 sayılı İş Kanunu kapsamındaki haklarınız.",
      icon: <FileText className="w-6 h-6 text-red-600" />,
      detail: "İş sözleşmesinin feshi, kıdem ve ihbar tazminatı haklarınız 4857 sayılı kanunla korunmaktadır. Yıllık izin süreleri, fazla mesai ücret hesaplamaları ve ara dinlenme haklarınız gibi temel konularda yasal sınırları burada öğrenebilirsiniz."
    },
    {
      id: 2,
      title: "Sendikal Haklar",
      desc: "6356 sayılı Kanun uyarınca örgütlenme özgürlüğü.",
      icon: <Gavel className="w-6 h-6 text-red-600" />,
      detail: "Anayasa'nın 51. maddesi ve 6356 sayılı Kanun gereği, işçiler önceden izin almaksızın sendikalara üye olma hakkına sahiptir. Sendikal nedenlerle işten çıkarma durumunda Sendikal Tazminat hakkı doğar."
    },
    {
      id: 3,
      title: "Dava Süreçleri",
      desc: "İşe iade ve alacak davaları süreçleri.",
      icon: <Scale className="w-6 h-6 text-red-600" />,
      detail: "İşten çıkarılan bir işçi, 1 ay içinde arabulucuya başvurmalıdır. Anlaşma sağlanamazsa işe iade davası açılabilir. Davanın kazanılması durumunda işe başlatılmayan işçiye tazminat ödenmesi gerekir."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Üst Başlık */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Hukuki <span className="text-red-600">Destek</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            İletişim İş Sendikası hukuk birimi, üyelerimizin yasal haklarını korumak için 7/24 çalışmaktadır.
          </p>
        </div>
      </section>

      {/* Kartlar */}
      <section className="container mx-auto px-4 -mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hukukiKonular.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedLaw(item)}
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 cursor-pointer hover:border-red-500 transition-all group"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-black uppercase mb-2 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              <span className="mt-4 inline-block text-[10px] font-bold text-red-600 uppercase tracking-widest">Detayları Gör →</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL (POPUP) */}
      {selectedLaw && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative">
            <button 
              onClick={() => setSelectedLaw(null)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-500" />
            </button>
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                {selectedLaw.icon}
                <h2 className="text-xl font-black uppercase tracking-tight">{selectedLaw.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {selectedLaw.detail}
              </p>
              <button 
                onClick={() => setSelectedLaw(null)}
                className="mt-8 w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-red-600 transition-colors uppercase text-xs tracking-widest"
              >
                Anladım, Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hukukçuya Sorun Formu */}
      <section className="container mx-auto px-4 pb-24">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
          <div className="bg-red-600 p-10 md:w-1/3 text-white flex flex-col justify-center">
            <HelpCircle className="w-12 h-12 mb-6 opacity-50" />
            <h2 className="text-2xl font-black uppercase mb-4">Hukukçuya Sorun</h2>
            <p className="text-sm opacity-90 leading-relaxed">
              Sorularınız doğrudan hukuk birimimize iletilir ve en kısa sürede yanıtlanır.
            </p>
          </div>
          <div className="p-10 md:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Adınız Soyadınız" required className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-red-600 text-sm" />
              <input type="email" name="email" placeholder="E-Posta Adresiniz" required className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-red-600 text-sm" />
              <textarea name="message" placeholder="Sorunuz..." required className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-red-600 text-sm md:col-span-2 h-32" />
              <button type="submit" className="bg-slate-900 text-white font-black uppercase py-4 rounded-xl hover:bg-red-600 transition-colors md:col-span-2 text-xs tracking-widest">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}