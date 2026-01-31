import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image'; // Image bileşenini import ettik
import { getHaberler } from '@/lib/getHaberler';

// Haber nesnesi için bir tip (interface) tanımlıyoruz
interface Haber {
  slug: string;
  title: string;
  ozet: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export const dynamic = 'force-dynamic';

export default async function HaberlerPage() {
  const tumHaberler: Haber[] = await getHaberler(); // any yerine Haber[] kullandık

  return (
    <div className="w-full bg-white text-left">
      <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden text-left">
        <div className="container mx-auto relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4">
            HABER <span className="text-red-600">MERKEZİ</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs opacity-60 italic">
            Sınıf Mücadelesinden Güncel Gelişmeler
          </p>
        </div>
      </section>

      <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {tumHaberler.map((haber: Haber) => (
            <Link href={`/haberler/${haber.slug}`} key={haber.slug} className="group">
              <article className="flex flex-col h-full bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 text-left">
                
                {/* next/image kullanarak optimizasyon hatasını çözdük */}
                <div className="aspect-video w-full bg-slate-200 relative overflow-hidden">
                  <NextImage 
                    src={haber.image || "https://via.placeholder.com/600x400"} 
                    alt={haber.title} 
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    unoptimized // Test aşamasında harici URL'ler için güvenli
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-10 italic">
                    {haber.category}
                  </span>
                </div>

                <div className="p-8 flex flex-col grow text-left">
                  <div className="flex items-center gap-2 mb-4 text-left">
                    <span className="w-8 h-px bg-red-600"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {haber.date}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-black text-slate-900 mb-4 group-hover:text-red-600 transition-colors uppercase italic leading-tight grow text-left">
                    {haber.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3 text-left">
                    {haber.ozet}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50 text-left">
                    <span className="text-slate-900 font-black text-[10px] uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                      DETAYI GÖR &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}