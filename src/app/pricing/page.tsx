import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga Paket",
  description: "Pilih paket internet Jelantik yang sesuai dengan kebutuhan Anda. Harga terjangkau dengan kualitas terbaik.",
};

const pricingPlans = [
  {
    name: "Broadband UpTo 10 Mbps",
    price: 166500,
    description: "Internet broadband terjangkau untuk kebutuhan browsing dan media sosial.",
    features: [
      "Harga Sudah termasuk PPN 11%",
      "Kecepatan download 10 Mbps",
      "Kecepatan upload 5 Mbps",
      "WiFi router standar",
      "Bebas kuota tanpa FUP",
    ],
    popular: false,
  },
  {
    name: "Broadband UpTo 20 Mbps",
    price: 231990,
    description: "Ideal untuk keluarga dengan beberapa perangkat streaming dan browsing.",
    features: [
      "Harga Sudah termasuk PPN 11%",
      "Kecepatan download 20 Mbps",
      "Kecepatan upload 10 Mbps",
      "WiFi router standar",
      "Bebas kuota tanpa FUP",
    ],
    popular: true,
  },
  {
    name: "Broadband UpTo 30 Mbps",
    price: 276390,
    description: "Cocok untuk rumah dengan kebutuhan streaming HD dan gaming online.",
    features: [
      "Harga Sudah termasuk PPN 11%",
      "Kecepatan download 30 Mbps",
      "Kecepatan upload 15 Mbps",
      "WiFi router standar",
      "Bebas kuota tanpa FUP",
    ],
    popular: false,
  },
  {
    name: "Broadband UpTo 50 Mbps",
    price: 321789,
    description: "Untuk kebutuhan streaming 4K, WFH, dan gaming online tanpa lag.",
    features: [
      "Harga Sudah termasuk PPN 11%",
      "Kecepatan download 50 Mbps",
      "Kecepatan upload 25 Mbps",
      "WiFi router standar",
      "Bebas kuota tanpa FUP",
    ],
    popular: false,
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID").format(price);
}

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Gratis Biaya Pasang untuk Semua Paket!
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Promo Menarik <span className="text-blue-600">Untuk Dirumah Anda</span>
            </h1>
            <p className="text-xl text-slate-600">
              Kami hadir dan menawarkan harga yang Relatif Terjangkau untuk Anda
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-blue-600 text-white shadow-xl"
                    : "bg-white border border-slate-200 shadow-md hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-orange-500 text-white text-sm font-bold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      POPULER
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    Rp{formatPrice(plan.price)}
                  </div>
                  <div className={`text-sm ${plan.popular ? "text-blue-100" : "text-slate-500"}`}>
                    / Bulan
                  </div>
                </div>

                <p className={`text-sm mb-6 text-center ${plan.popular ? "text-blue-100" : "text-slate-600"}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-white" : "text-blue-600"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? "text-white" : "text-slate-700"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6289606025227?text=Halo%20Jelantik,%20saya%20ingin%20berlangganan%20paket%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-slate-100"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  Langganan Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Package Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-4/3 rounded-[2.5rem] overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/rusun-nagrak.jpeg"
                  alt="Rusun Nagrak - Paket Internet Khusus"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-56 h-56 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Paket Khusus
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Paket Berlangganan Internet Rusun
              </h2>
              
              <p className="text-xl text-slate-600 mb-4">
                Paket yang tertera adalah harga khusus untuk <strong className="text-blue-600">Perumahan, dan sejenisnya</strong>.
              </p>
              
              <p className="text-lg text-slate-600 mb-8">
                Hubungi sales kami untuk informasi lebih lanjut dan penawaran terbaik yang disesuaikan untuk rusun dengan kebutuhan hunian Anda.
              </p>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Keuntungan Paket Rusun:
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Harga spesial untuk hunian vertikal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Instalasi cepat dan mudah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Dukungan teknis 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Paket dapat disesuaikan dengan kebutuhan</span>
                  </li>
                </ul>
              </div>
              
              <a
                href="https://wa.me/6289606025227?text=Halo%20Jelantik,%20saya%20ingin%20informasi%20paket%20Rusun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hubungi via WhatsApp: +62 896-0602-5227
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah harga sudah termasuk PPN?",
                a: "Ya, semua harga yang tertera sudah termasuk PPN 11%."
              },
              {
                q: "Apakah ada batasan kuota (FUP)?",
                a: "Tidak ada! Semua paket kami bebas kuota tanpa FUP, Anda bisa browsing dan streaming sepuasnya."
              },
              {
                q: "Berapa lama proses pemasangan?",
                a: "Proses pemasangan biasanya memakan waktu 1-3 hari kerja setelah konfirmasi jadwal."
              },
              {
                q: "Apakah perangkat WiFi router dipinjamkan?",
                a: "Ya, kami meminjamkan WiFi router standar untuk semua paket tanpa biaya tambahan."
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                  <svg className="w-5 h-5 text-slate-500 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Rasakan Kecepatan Internet Tanpa Tandingan
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Jaga koneksi Anda dengan layanan internet kami yang andal dan super cepat. Bergabunglah sekarang!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
