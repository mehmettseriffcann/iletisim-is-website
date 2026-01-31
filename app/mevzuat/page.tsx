import React from 'react';

export default function Mevzuat() {
  const maddeler = [
    { id: "M-1", baslik: "Sendika Tüzüğü", aciklama: "İletişim İş Sendikası'nın temel işleyiş ve yönetim kurallarını içeren ana metin." },
    { id: "M-2", baslik: "Toplu İş Sözleşmesi", aciklama: "Haberleşme iş kolunda yürürlükte olan genel haklar ve kazanımlar." },
    { id: "M-3", baslik: "6356 Sayılı Kanun", aciklama: "Sendikalar ve Toplu İş Sözleşmesi Kanunu çerçevesinde işçi hakları." }
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-16 border-l-8 border-slate-900 pl-6">
          <h1 className="text-5xl font-black text-slate-900 uppercase italic">Mevzuat & Tüzük</h1>
          <p className="text-slate-500 mt-2 font-bold uppercase tracking-[0.3em] text-xs">Hukuki Dayanaklarımız</p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {maddeler.map((madde) => (
            <div key={madde.id} className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-600 transition-all duration-300 flex items-start gap-6">
              <span className="bg-slate-900 text-white font-black text-xs p-3 rounded-lg group-hover:bg-red-600 transition-colors">
                {madde.id}
              </span>
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-2 italic">{madde.baslik}</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{madde.aciklama}</p>
                <button className="mt-4 text-red-600 font-bold text-xs uppercase tracking-widest hover:underline italic">Dosyayı İndir (PDF) ↓</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}