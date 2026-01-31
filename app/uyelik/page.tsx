import React from 'react';
import Link from 'next/link';

export default function UyelikRehberi() {
  return (
    <div className="w-full bg-white text-left">
      {/* 1. ÜST ALAN: MÜCADELEYE ÇAĞRI */}
      <section className="bg-red-600 text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            MÜCADELEYE <span className="text-slate-900">OMUZ VER</span>
          </h1>
          <p className="text-white/90 font-bold uppercase tracking-widest text-sm max-w-2xl leading-relaxed">
            İletişim işçilerinin onurlu geleceği için örgütleniyoruz. 
            E-Devlet üzerinden sadece 2 dakikada İletişim-İş saflarına katılabilirsiniz.
          </p>
        </div>
      </section>

      {/* 2. ADIM ADIM ÜYELİK REHBERİ */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Sol Kolon: Adımlar */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic border-l-8 border-red-600 pl-4">
              NASIL ÜYE OLUNUR?
            </h2>

            <div className="space-y-8">
              {/* Adım 1 */}
              <div className="flex gap-6 group">
                <div className="flex-none w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-black text-xl -skew-x-12 group-hover:bg-red-600 transition-colors">
                  01
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase text-lg mb-2">E-Devlet Girişi</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    e-Devlet kapısına (turkiye.gov.tr) T.C. Kimlik numaranız ve şifrenizle giriş yapın.
                  </p>
                </div>
              </div>

              {/* Adım 2 */}
              <div className="flex gap-6 group">
                <div className="flex-none w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-black text-xl -skew-x-12 group-hover:bg-red-600 transition-colors">
                  02
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase text-lg mb-2">Hizmet Arama</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Arama çubuğuna <span className="font-bold text-slate-900">&quot;İşçi Sendikaları Üyelik İşlemleri&quot;</span> yazarak Çalışma ve Sosyal Güvenlik Bakanlığı hizmetine tıklayın.
                  </p>
                </div>
              </div>

              {/* Adım 3 */}
              <div className="flex gap-6 group">
                <div className="flex-none w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-black text-xl -skew-x-12 group-hover:bg-red-600 transition-colors">
                  03
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase text-lg mb-2">İletişim-İş&apos;i Seçin</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Listelenen sendikalar arasından <span className="font-bold text-red-600">İLETİŞİM-İŞ (Sendika Kodu: 010)</span> sendikasını bulun ve &quot;Üye Ol&quot; butonuna basın.
                  </p>
                </div>
              </div>

              {/* Adım 4 */}
              <div className="flex gap-6 group">
                <div className="flex-none w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-black text-xl -skew-x-12 group-hover:bg-red-600 transition-colors">
                  04
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase text-lg mb-2">Onay ve Tamamlama</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Gerekli bilgileri doldurup başvurunuzu onaylayın. Tebrikler, artık mücadelenin bir parçasısınız!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 border-l-4 border-slate-900 italic">
               <p className="text-sm text-slate-700">
                 <strong>Not:</strong> 6356 sayılı kanun gereği, e-Devlet üzerinden yapılan üyeliklerde işverenin bilgisi olmaz, üyelik tamamen kişisel bir haktır ve gizlidir.
               </p>
            </div>
          </div>

          {/* Sağ Kolon: Hızlı Aksiyon */}
          <div className="space-y-6">
            <div className="bg-slate-900 p-10 text-white rounded-none -skew-y-2">
              <h4 className="text-2xl font-black uppercase italic mb-6 leading-tight">Hemen Şimdi Başlayın</h4>
              <Link 
                href="https://www.turkiye.gov.tr/csgb-isci-sendikalari-uyelik-islemleri" 
                target="_blank"
                className="block w-full bg-red-600 hover:bg-white hover:text-red-600 text-white text-center font-black py-4 transition-all uppercase tracking-widest text-sm"
              >
                E-DEVLET&apos;E GİT
              </Link>
              <p className="mt-6 text-[10px] uppercase tracking-widest opacity-50 text-center">
                Güvenli ve Resmi Üyelik Kanalı
              </p>
            </div>

            <div className="border-2 border-slate-100 p-8">
              <h4 className="font-black text-slate-900 uppercase text-sm mb-4 italic">Destek mi Lazım?</h4>
              <p className="text-xs text-slate-600 mb-6">
                Üyelik sürecinde bir sorun yaşarsanız örgütlenme uzmanlarımıza ulaşabilirsiniz.
              </p>
              <div className="space-y-2 font-mono text-sm text-red-600 font-bold">
                <p>0212 XXX XX XX</p>
                <p>iletisim@iletisimis.org.tr</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}