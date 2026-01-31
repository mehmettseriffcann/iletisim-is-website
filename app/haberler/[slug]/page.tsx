import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { getHaberler } from '@/lib/getHaberler'; // Lib klasöründen çekiyoruz

export const dynamic = 'force-dynamic';

export default async function HaberDetay(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const haberlerData = await getHaberler();

  const haber = haberlerData.find((h) => h.slug?.toLowerCase() === slug?.toLowerCase());

  if (!haber) {
    return (
      <div className="p-20 text-center min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black text-red-600 uppercase italic">Haber Bulunamadı</h1>
        <p className="mt-4 text-slate-600 font-bold tracking-tight italic">
          Aranan: {slug} <br />
          {/* ESLint hatasını metni {' '} içine alarak veya tırnağı escape ederek çözdük */}
          <span className="text-xs opacity-50 uppercase tracking-widest">
            Lütfen Google Sheets üzerindeki sütunları kontrol edin.
          </span>
        </p>
        <Link href="/haberler" className="mt-8 px-8 py-3 bg-slate-900 text-white font-black rounded-full uppercase text-xs tracking-widest hover:bg-red-600 transition-all">
          Haber Listesine Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-left min-h-screen pb-20">
      <header className="bg-slate-50 pt-16 pb-12 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-left">
          <Link href="/haberler" className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] hover:underline mb-10 block text-left">
            &larr; Haberler Listesine Dön
          </Link>
          <div className="flex items-center gap-4 mb-6 text-left">
            <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic">{haber.category}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{haber.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.9] mb-6 text-left">
            {haber.title}
          </h1>
        </div>
      </header>

      <section className="container mx-auto px-4 max-w-4xl -mt-8 text-left">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 text-left">
          <NextImage 
            src={haber.image || "https://via.placeholder.com/1200x675"} 
            alt={haber.title || "İletişim İş"} 
            fill 
            className="object-cover"
            priority
            unoptimized 
          />
        </div>
      </section>

      <article className="container mx-auto py-16 px-4 max-w-4xl text-left text-balance">
        <div 
          className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed font-medium text-left"
          dangerouslySetInnerHTML={{ __html: haber.content }}
        />
        
        <div className="mt-20 pt-10 border-t border-slate-100 flex justify-center text-left">
            <Link href="/uyelik">
                <button className="bg-red-600 text-white font-black px-12 py-5 rounded-none -skew-x-12 hover:bg-slate-900 transition-all uppercase text-lg tracking-tighter shadow-xl cursor-pointer">
                    MÜCADELEYE OMUZ VER &rarr;
                </button>
            </Link>
        </div>
      </article>
    </div>
  );
}