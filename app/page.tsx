import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { getHaberler } from '@/lib/getHaberler';

interface Haber {
  slug: string;
  title: string;
  ozet: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

const genelHukukSorulari = [
  { id: 1, soru: "Sendika bir 'hizmet aracı' mıdır, yoksa bir 'mücadele örgütü' mü?", cevap: "Sendika bir sigorta şirketi veya danışmanlık bürosu değildir. Sendika, işçilerin kendi haklarını korumak için kurduğu kolektif bir yumruktur. Biz işçiye hizmet satmıyoruz; işçiyi kendi hakkı için ayağa kalkmaya ve birlikte kazanmaya çağırıyoruz." },
  { id: 2, soru: "Anayasal bir hak olan sendika üyeliği engellenebilir mi?", cevap: "Hayır. TCK Madde 118 uyarınca sendikal hakların kullanılmasını engellemek suçtur. İşverenin baskısı veya 'burada sendika istemiyoruz' demesi hukuksuzdur." },
  { id: 3, soru: "Performans sistemi (KPI) altında ezilmek zorunda mıyım?", cevap: "Sektörde dayatılan matematiksel performans kriterleri, işçiyi makineleştirmeyi amaçlar. İnsanlık dışı hız dayatmaları mobbingdir. Sendikamız toplu direnişi savunur." },
  { id: 4, soru: "İş yerinde 'Baskı ve Mobbing' varsa sendika ne yapar?", cevap: "Sizi yalnızlaştırmalarına izin vermeyiz. Sendika temsilcimiz ve avukatlarımızla her an yanınızdayız. Örgütlü işçiye çarptıklarında geri adım atarlar." },
  { id: 5, soru: "Toplu İş Sözleşmesi (TİS) neden hayati önemdedir?", cevap: "TİS, iş yerinin anayasasıdır. Patronun keyfi olarak değiştirebileceği şirket kuralları yerine, işçinin imzasının olduğu hukuki bir belgedir." },
  { id: 6, soru: "Fazla mesai ücretimi alamazsam ne yapmalıyım?", cevap: "Hakkınız olan her dakika sizin emeğinizdir. Ücreti ödenmeyen fazla mesai hırsızlıktır. Sendikamız, bu tür alacakların tahsili için gerekli hukuki süreci başlatır." },
  { id: 7, soru: "Grev Nedir?", cevap: "Grev, işçi sınıfının elindeki en büyük  silahtır. Düşük ücretlere,ağır çalışma koşullarına ve sömürüye karşı işçi sınıfının en etkili gücü; üretimden gelen gücüdür." },
  { id: 8, soru: "İstifaya zorlanıyorum, neye imza atmalıyım?", cevap: "Hiçbir şeye! Önünüze konulan 'gönüllü çıkış' veya 'ibraname' gibi kağıtlar aleyhinizedir. Hemen bizi arayın." },
  { id: 9, soru: "Emekli olduktan sonra sendikal bağım kopar mı?", cevap: "Sınıf mücadelesi emeklilikle bitmez. Emekli üyelerimiz, deneyimleriyle genç kuşaklara rehberlik etmeye devam ederler." }
];

export const dynamic = 'force-dynamic';

export default async function Home() {
  const tumHaberler: Haber[] = await getHaberler();
  const sonHaberler = tumHaberler.slice(0, 3);

  return (
    <div className="w-full text-left overflow-x-hidden bg-white">
      {/* BÖLÜM 1: HERO */}
      <section className="bg-slate-900 text-white py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] uppercase tracking-tighter italic text-left">
              GELECEĞİ BİRLİKTE <br/>
              <span className="text-red-600">İNŞA EDİYORUZ</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light text-left">
              İletişim işçilerinin haklarını savunuyor, emeğin değerini uluslararası standartlarda koruyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kurumsal">
                <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-black hover:bg-red-600 hover:text-white transition-all duration-300 shadow-2xl uppercase text-sm tracking-widest cursor-pointer">
                  Biz Kimiz?
                </button>
              </Link>
              <Link href="/mevzuat">
                <button className="border-2 border-slate-700 px-10 py-4 rounded-full font-black hover:bg-white hover:text-slate-900 transition-all duration-300 uppercase text-sm tracking-widest cursor-pointer text-white">
                  Tüzüğümüz
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* BÖLÜM 2: HİZMET KARTLARI (Geri Geldi) */}
      <section className="container mx-auto -mt-16 px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-10 shadow-2xl rounded-2xl border-b-8 border-red-600 group hover:-translate-y-3 transition-all duration-500 text-left">
            <div className="w-12 h-12 bg-slate-100 rounded-lg mb-6 flex items-center justify-center text-red-600 font-black group-hover:bg-red-600 group-hover:text-white transition-colors text-left">§</div>
            <h3 className="font-black text-2xl mb-4 text-slate-900 uppercase italic leading-none">Hukuki Destek</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">İş hukukunda uzman kadromuzla üyelerimizin her türlü hak arama sürecinde yanındayız.</p>
            <Link href="/hukuk" className="text-red-600 font-bold text-xs uppercase tracking-widest group-hover:underline">Detaylar &rarr;</Link>
          </div>
          
          <div className="bg-white p-10 shadow-2xl rounded-2xl border-b-8 border-slate-900 group hover:-translate-y-3 transition-all duration-500 text-left">
            <div className="w-12 h-12 bg-slate-100 rounded-lg mb-6 flex items-center justify-center text-slate-900 font-black group-hover:bg-slate-900 group-hover:text-white transition-colors text-left">∑</div>
            <h3 className="font-black text-2xl mb-4 text-slate-900 uppercase italic leading-none">Eğitim & Kariyer</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">İletişim sektöründeki dijital dönüşüme uyum sağlamanız için sürekli seminerler düzenliyoruz.</p>
            <Link href="/egitim" className="text-red-600 font-bold text-xs uppercase tracking-widest group-hover:underline">Eğitim Takvimi &rarr;</Link>
          </div>

          <div className="bg-white p-10 shadow-2xl rounded-2xl border-b-8 border-red-600 group hover:-translate-y-3 transition-all duration-500 text-left">
            <div className="w-12 h-12 bg-slate-100 rounded-lg mb-6 flex items-center justify-center text-red-600 font-black group-hover:bg-red-600 group-hover:text-white transition-colors text-left">#</div>
            <h3 className="font-black text-2xl mb-4 text-slate-900 uppercase italic leading-none">Nasıl Üye Olurum?</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">Sendikamızın gücüne güç katmak ve haklarınızı korumak için e-Devlet üzerinden sadece birkaç dakika içinde üyeliğinizi gerçekleştirebilirsiniz.</p>
            <Link href="/uyelik" className="text-red-600 font-bold text-xs uppercase tracking-widest group-hover:underline">E-Devlet ile Üye Ol &rarr;</Link>
          </div>
        </div>
      </section>

      {/* BÖLÜM 3: GÜNCEL HABERLER (DİNAMİK) */}
      <section className="container mx-auto py-24 px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
          <div className="border-l-8 border-red-600 pl-6 text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none italic">GÜNCEL DUYURULAR</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-2 opacity-60 italic text-left">Sendikal Faaliyetlerimiz</p>
          </div>
          <Link href="/haberler">
            <button className="text-slate-900 font-black border-b-4 border-red-600 pb-1 hover:text-red-600 transition uppercase text-sm tracking-widest cursor-pointer">Tümünü Gör</button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {sonHaberler.map((haber) => (
            <Link href={`/haberler/${haber.slug}`} key={haber.slug} className="group cursor-pointer block">
              <article>
                <div className="overflow-hidden rounded-3xl mb-6 bg-slate-200 aspect-video relative shadow-lg">
                  <NextImage src={haber.image || "https://via.placeholder.com/600x400"} alt={haber.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700" unoptimized />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors uppercase italic text-left">{haber.title}</h4>
                <p className="text-slate-600 text-sm line-clamp-2 text-left">{haber.ozet}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
      
      {/* BÖLÜM 4: BİLGİ BANKASI */}
      <section className="bg-slate-50 py-24 px-4 border-y border-slate-200 mt-20">
        <div className="container mx-auto max-w-4xl text-left">
          <div className="mb-16 border-l-8 border-red-600 pl-6 text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-none text-left">
              DİRENİŞİN <span className="text-red-600">REHBERİ</span>
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {genelHukukSorulari.map((item) => (
              <details key={item.id} className="group bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden text-left">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none group-open:bg-slate-900 transition-colors text-left">
                  <h3 className="font-black text-slate-900 uppercase italic text-sm group-open:text-white transition-colors leading-tight text-left pr-4">{item.soru}</h3>
                  <div className="w-4 h-4 text-red-600 font-bold group-open:text-white group-open:rotate-45 transition-transform">+</div>
                </summary>
                <div className="p-8 text-slate-700 text-base leading-relaxed border-t border-slate-100 bg-white text-left">
                  <span className="text-red-600 font-black mr-2 uppercase italic text-xs">Yanıt:</span>
                  {item.cevap}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}