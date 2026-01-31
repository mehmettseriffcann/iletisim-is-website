import './globals.css'
import Navbar from '@/components/Navbar' // Navbar'ı buradan çağırıyoruz
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased bg-slate-50 flex flex-col min-h-screen text-left">
        {/* Navbar bileşeni artık Server Component içinde tertemiz duruyor */}
        <Navbar />

        <main className="grow w-full">{children}</main>

        {/* FOOTER - TÜM SÜTUNLAR KORUNDU */}
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 w-full mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
              {/* Sütun 1 */}
              <div className="space-y-6">
                <div className="relative w-24 h-12">
                  <Image src="/logo-v2.png" alt="Footer Logo" fill className="object-contain object-left" />
                </div>
                <div className="space-y-2 text-left">
                   <h4 className="text-white font-black uppercase tracking-tighter text-lg leading-none">İletişim İş</h4>
                   <p className="text-red-600 font-bold text-[9px] uppercase tracking-[0.2em] leading-tight">İletişim, Haberleşme, Posta ve Çağrı Merkezi İşçileri Sendikası</p>
                </div>
                <p className="text-xs leading-relaxed opacity-60 max-w-xs">Sektör çalışanlarının haklarını korumak için mücadeleci sendikacılık yapıyoruz.</p>
              </div>

              {/* Sütun 2: Kurumsal */}
              <div className="text-left">
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 border-b border-red-600 pb-2 inline-block">Kurumsal</h4>
                <ul className="text-xs space-y-4 font-bold uppercase tracking-widest">
                  <li><Link href="/kurumsal" className="hover:text-red-500 transition">Hakkımızda</Link></li>
                  <li><Link href="/mevzuat" className="hover:text-red-500 transition">Tüzük & Mevzuat</Link></li>
                  <li><Link href="/" className="hover:text-red-500 transition">Yönetim Kurulu</Link></li>
                  <li><Link href="/" className="hover:text-red-500 transition">Temsilcilikler</Link></li>
                </ul>
              </div>

              {/* Sütun 3: Hizmetler */}
              <div className="text-left">
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 border-b border-red-600 pb-2 inline-block">Hizmetler</h4>
                <ul className="text-xs space-y-4 font-bold uppercase tracking-widest">
                  <li><Link href="/" className="hover:text-red-500 transition">Hukuki Destek</Link></li>
                  <li><Link href="/" className="hover:text-red-500 transition">Eğitim Takvimi</Link></li>
                  <li><Link href="/haberler" className="hover:text-red-500 transition">Basın Açıklamaları</Link></li>
                  <li><Link href="/" className="hover:text-red-500 transition">Türk Telekom Bilgilendirme</Link></li>
                </ul>
              </div>

              {/* Sütun 4: İletişim */}
              <div className="text-left">
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 border-b border-red-600 pb-2 inline-block">İletişim</h4>
                <ul className="text-xs space-y-4 text-left">
                  <li className="flex flex-col"><span className="text-red-600 font-black uppercase text-[10px] mb-1">E-Posta:</span><span className="opacity-70 break-all font-mono">iletisim@iletisimis.org.tr</span></li>
                  <li className="flex flex-col"><span className="text-red-600 font-black uppercase text-[10px] mb-1">Destek Hattı:</span><span className="opacity-70 font-mono tracking-tighter">0212 XXX XX XX</span></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 text-center md:text-left">
              <p>© 2026 İletişim İş Sendikası.</p>
              <div className="flex space-x-6">
                 <Link href="/" className="hover:text-white transition">KVKK</Link>
                 <Link href="/" className="hover:text-white transition">Kullanım Koşulları</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}