import React from 'react';
import Link from 'next/link';

export default function Kurumsal() {
  return (
    <div className="w-full bg-white text-left">
      {/* 1. Üst Alan (Header) */}
      <section className="bg-slate-900 text-white py-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-4">
            BİZ <span className="text-red-600 underline decoration-4 underline-offset-8">KİMİZ?</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm opacity-60">
            Haberleşme ve İletişim İşçileri Sendikası
          </p>
        </div>
      </section>

      {/* 2. Hikayemiz ve Mücadele Hattı */}
      <section className="container mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic border-l-8 border-red-600 pl-4 leading-none">
              SINIF SENDİKACILIĞI VE <br/><span className="text-red-600">BİLİMSEL TEMEL</span>
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg font-medium italic">
              İletişim İş, Ocak 2026 itibarıyla iletişim işçilerinin hak mücadelesinde analitik disiplini ve sınıf sendikacılığını birleştiren tek merkezdir.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Bizim için sendikacılık sadece sloganlardan ibaret değildir. İletişim, Haberleşme, Posta ve Çağrı Merkezi İşçilerinin yaşadığı her türlü hak kaybına karşı, işçi iradesine dayalı ve geri adım atmayan bir hat kuruyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-slate-900 shadow-sm group hover:border-red-600 transition-colors">
              <h3 className="font-black text-slate-900 uppercase mb-2 italic">Şeffaf Yönetim</h3>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                Veri temelli yönetim anlayışımızla üyelerimizin haklarını ve toplu sözleşme süreçlerini matematiksel bir kesinlikle takip ediyoruz.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-red-600 shadow-sm group hover:border-slate-900 transition-colors">
              <h3 className="font-black text-slate-900 uppercase mb-2 italic">Uluslararası Güç</h3>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                DİSK ve UNI Global Union üyeliğimizle, yerel mücadelemizi küresel iletişim ağlarının gücüyle birleştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vizyon & Misyon Kartları */}
      <section className="bg-slate-50 py-24 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 group">
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">👁️</div>
            <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4">Vizyonumuz</h3>
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-red-600 pl-4 font-medium">
              &quot;İletişim sektöründe, her işçinin emeğinin tam karşılığını aldığı, dijital hakların güvence altına alındığı ve dayanışmanın teknolojiden güç aldığı bir gelecek inşa etmek.&quot;
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 group">
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">🚀</div>
            <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4">Misyonumuz</h3>
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-slate-900 pl-4 font-medium">
              &quot;Üyelerimizin ekonomik, sosyal ve kültürel haklarını korumak, çalışma hayatında adaleti tesis etmek ve haberleşme iş kolunda örgütlü gücü büyütmek.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 4. Sınıf Tavrı ve Mücadele Çağrısı - Kıpkırmızı ve Sert */}
      <section className="bg-red-600 py-24 px-4 relative overflow-hidden border-y-8 border-slate-900">
        {/* Arka planda devasa, flulaştırılmış yumruk veya dişli çark görseli hayal et */}
        <div className="absolute inset-0 opacity-5 flex justify-center items-center pointer-events-none">
          <span className="text-[30rem] font-black tracking-tighter select-none -rotate-12">KAVGA</span>
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.8]">
            SÖZ <span className="text-slate-900">MEYDANIN</span>, <br/>
            KARAR <span className="text-slate-900">İŞÇİNİN!</span>
          </h2>
          
          <p className="text-white text-xl md:text-2xl mb-12 font-black max-w-3xl mx-auto leading-tight uppercase italic opacity-90">
            Lütuf değil, toplu pazarlık; rica değil, grevli toplu sözleşme! 
            Sarı sendikacılığın barikatlarını yıkarak, öz gücümüzle yürüyoruz.
          </p>
<Link href="/uyelik">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button className="bg-slate-900 text-white font-black px-16 py-6 rounded-none -skew-x-12 hover:bg-white hover:text-red-600 transition-all duration-300 uppercase text-lg tracking-tighter shadow-[10px_10px_0px_0px_rgba(255,255,255,0.3)]">
              MÜCADELEYE OMUZ VER &rarr;
            </button>
          </div>
</Link>
          <div className="mt-16 flex flex-wrap justify-center gap-10 text-white/60 text-[11px] font-black uppercase tracking-[0.4em]">
             <span className="border-b-2 border-slate-900 pb-1">#SınıfTavrı</span>
             <span className="border-b-2 border-slate-900 pb-1">#ÖrgütlüGüç</span>
             <span className="border-b-2 border-slate-900 pb-1">#İletişimİşDireniştir</span>
          </div>
        </div>
      </section>
    </div>
  );
}