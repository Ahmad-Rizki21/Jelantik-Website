import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Internet Fiber Optic untuk Perumahan & Rusun",
  description: "Jelantik menyediakan layanan internet fiber optic 100% ultra cepat khusus untuk area perumahan dan rusun dengan harga mulai dari 100 ribuan.",
};

const features = [
  {
    name: "Jangkauan Wi-Fi",
    description: "Wi-Fi Mesh untuk Koneksi di Setiap Sudut Rumah",
    icon: "wifi",
  },
  {
    name: "Keamanan",
    description: "Keamanan Data Terjamin dengan Enkripsi Tingkat Tinggi",
    icon: "shield",
  },
  {
    name: "Layanan 24 Jam",
    description: "Customer Service yang Siap Membantu Anda 24 Jam",
    icon: "support",
  },
  {
    name: "Penawaran Khusus",
    description: "Gratis biaya pasang di semua paket",
    icon: "gift",
  },
];

const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "800+", label: "Pelanggan Puas" },
  { value: "99%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Dukungan Teknis" },
];

const iconMap: Record<string, ReactElement> = {
  wifi: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  support: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  gift: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
  lightning: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right [animation-fill-mode:backwards]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 backdrop-blur-sm text-orange-600 text-sm font-bold mb-6 border border-orange-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Promo Spesial - Gratis Biaya Pasang!
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                Hidupkan Setiap Detik
                <span className="block text-gradient mt-2">Dengan Kecepatan Terbaik</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Jelantik kini hadir dengan kecepatan terbaiknya, dengan harga yang terjangkau.
                Kami menawarkan layanan yang lebih cepat dan lebih aman.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300"
                >
                  Lihat Paket Internet
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>

              {/* Trust Section */}
              <div className="flex items-center gap-4 py-6 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                       <div className="w-full h-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">User</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">800+ Pelanggan Puas</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Mengapa Memilih Jelantik?
            </h2>
            <p className="text-lg text-slate-600">
              Keunggulan yang membuat kami berbeda dari provider lain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-blue-600 rounded-xl text-white mb-4">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-4/3 rounded-[2.5rem] overflow-hidden shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/pexels-thirdman-7652126.jpg"
                  alt="Team bekerja dengan profesional"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-orange-100 rounded-full blur-2xl opacity-40"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex p-4 bg-blue-600 rounded-2xl text-white mb-6">
                {iconMap.lightning}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Hidupkan Setiap Detik Dengan Kecepatan Terbaik!
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Bergabunglah dengan ribuan pelanggan puas yang telah merasakan kecepatan internet Jelantik.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all"
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hashtag Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-blue-600">
            #JelantikTerbaik
          </p>
        </div>
      </section>
    </>
  );
}
