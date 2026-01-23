import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali Jelantik lebih dekat - penyedia solusi Wi-Fi terbaik dengan pengalaman lebih dari 10 tahun.",
};

const values = [
  {
    title: "Keamanan Data Terjamin",
    description: "Dengan enkripsi tingkat tinggi, data Anda aman bersama kami.",
    icon: "shield",
  },
  {
    title: "Layanan Pelanggan 24 Jam",
    description: "Tim kami siap membantu Anda kapan saja, siang atau malam.",
    icon: "clock",
  },
  {
    title: "Pemasangan Gratis",
    description: "Nikmati pemasangan gratis untuk semua paket yang kami tawarkan.",
    icon: "install",
  },
  {
    title: "Harga Terjangkau",
    description: "Dapatkan kualitas terbaik dengan harga yang bersahabat.",
    icon: "price",
  },
  {
    title: "Kepercayaan Pelanggan",
    description: "100% kepercayaan dari ribuan pelanggan yang puas.",
    icon: "trust",
  },
  {
    title: "Fleksibel untuk Kebutuhan Anda",
    description: "Pilih paket yang sesuai dengan kebutuhan internet Anda.",
    icon: "flexible",
  },
];

const iconMap: Record<string, ReactElement> = {
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  install: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  price: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  trust: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
  ),
  flexible: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Tentang <span className="text-blue-600">Jelantik</span>
            </h1>
            <p className="text-xl text-slate-600">
              Kami adalah penyedia solusi Wi-Fi terbaik yang menghubungkan rumah Anda dengan jaringan internet super cepat di setiap sudut ruangan.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Pengalaman Terbukti
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Hidupkan Setiap Detik Dengan Kecepatan Terbaik!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Dengan pengalaman lebih dari 10 tahun, kami terus berinovasi untuk memberikan layanan terbaik bagi pelanggan.
                Kami berkomitmen untuk menyediakan koneksi internet yang stabil, cepat, dan terjangkau untuk setiap rumah di Indonesia.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600">10+</div>
                  <div className="text-slate-600">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500">5000+</div>
                  <div className="text-slate-600">Pelanggan Puas</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/5 rounded-[3rem] overflow-hidden shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/pexels-rccbtn-7634159.jpg"
                  alt="Teknisi fiber optic profesional"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative background */}
              <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -z-10 bottom-0 -left-8 w-56 h-56 bg-orange-100 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Prinsip yang membimbing kami dalam memberikan layanan terbaik untuk Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-blue-600 rounded-xl text-white mb-4">
                  {iconMap[value.icon]}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Informasi Legalitas
            </h2>
            <p className="text-lg text-slate-600">
              Jelantik merupakan layanan internet broadband yang dioperasikan oleh PT. Artacomindo Jejaring Nusa
              dengan dukungan izin resmi dari KOMINFO.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Pendirian Perusahaan
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p><span className="font-semibold text-slate-900">Nama:</span> PT. Artacomindo Jejaring Nusa</p>
                  <p><span className="font-semibold text-slate-900">Akta Notaris:</span> Nomor 08</p>
                  <p><span className="font-semibold text-slate-900">Tanggal:</span> 05 Desember 2014</p>
                  <p><span className="font-semibold text-slate-900">Notaris:</span> Hj. Nurmiati, S.H. di Jakarta</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Izin Penyelenggaraan
                </h3>
                <div className="space-y-3 text-slate-600">
                  <div>
                    <p className="font-semibold text-orange-500">Izin ISP</p>
                    <p className="text-sm">Nomor: 812000588380400006</p>
                    <p className="text-xs">SK Menkominfo & Meninvest/Kepala BKPM (18 Oktober 2023)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-500">Izin Jaringan</p>
                    <p className="text-sm">Nomor: 812000588380400011</p>
                    <p className="text-xs">SK Menkominfo (19 Juni 2024)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-500">Izin JARTAPTUP</p>
                    <p className="text-sm">Nomor: 1164 Tahun 2016</p>
                    <p className="text-xs">SK Menkominfo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 text-center">
                Jelantik adalah layanan internet broadband resmi yang dioperasikan oleh PT. Artacomindo Jejaring Nusa,
                terdaftar dan berizin sesuai peraturan pemerintah Republik Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Bergabung dengan Keluarga Jelantik?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Dapatkan koneksi internet terbaik untuk rumah Anda sekarang juga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all"
            >
              Lihat Paket Internet
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
