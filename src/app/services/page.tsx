import Link from "next/link";
import { Metadata } from "next";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Temukan berbagai layanan terbaik dari Jelantik untuk memenuhi kebutuhan internet Anda.",
  alternates: {
    canonical: "/services",
  },
};


const services = [
  {
    title: "100% Fiber Optic",
    description: "Nikmati koneksi super cepat dengan jaringan fiber optik 100%, memberikan kecepatan stabil dan andal untuk semua kebutuhan Anda.",
    icon: "fiber",
    features: [
      "Kecepatan download & upload simetris",
      "Latensi rendah untuk gaming",
      "Koneksi stabil tanpa gangguan",
      "Teknologi masa depan",
    ],
  },
  {
    title: "Perangkat Dipinjamkan/Disewakan",
    description: "Kami menyediakan perangkat yang dapat Anda pinjam atau sewa, memastikan Anda dapat menikmati layanan tanpa kendala perangkat.",
    icon: "device",
    features: [
      "Modem WiFi router terbaru",
      "Pilihan perangkat premium",
      "Gratis biaya sewa untuk paket tertentu",
      "Support teknis perangkat",
    ],
  },
  {
    title: "Unlimited Quota tanpa FUP",
    description: "Dengan layanan kami, Anda dapat menikmati kuota internet tanpa batasan dan tanpa kebijakan FUP (Fair Usage Policy).",
    icon: "unlimited",
    features: [
      "Download & streaming tanpa batas",
      "Tidak ada penurunan kecepatan",
      "Ideal untuk keluarga besar",
      "Bebas khawatir kuota habis",
    ],
  },
  {
    title: "Layanan 24/7 dan Dukungan Teknis",
    description: "Kami siap membantu Anda kapan saja dengan dukungan teknis 24/7. Tanyakan apa saja, tim kami siap memberikan solusi terbaik.",
    icon: "support",
    features: [
      "Customer service 24 jam",
      "Support via WhatsApp & Telepon",
      "Teknisi siap datang",
      "Monitoring koneksi aktif",
    ],
  },
];

const iconMap: Record<string, ReactElement> = {
  fiber: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  device: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  unlimited: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  support: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Layanan <span className="text-blue-600">Terbaik</span>
            </h1>
            <p className="text-xl text-slate-600">
              Kami menawarkan berbagai layanan untuk memenuhi kebutuhan internet Anda
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-blue-600 rounded-2xl text-white mb-6">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Mengapa Layanan Kami Unggul?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kombinasi teknologi terbaik dan pelayanan prima untuk pengalaman internet yang tidak tertandingi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Terjamin & Terpercaya
              </h3>
              <p className="text-slate-600">
                Dukungan teknis profesional dan jaminan kualitas layanan
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-orange-100 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Selalu Meningkat
              </h3>
              <p className="text-slate-600">
                Terus berinovasi dengan teknologi terbaru untuk Anda
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Fokus Pelanggan
              </h3>
              <p className="text-slate-600">
                Kepuasan Anda adalah prioritas utama kami
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Rasakan Layanan Terbaik Kami
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Siap untuk koneksi internet tanpa batas? Bergabunglah sekarang!
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all"
          >
            Pilih Paket Anda
          </Link>
        </div>
      </section>
    </>
  );
}
