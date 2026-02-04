import Link from "next/link";
import Image from "next/image";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Portal Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/icons/icon-96.webp"
                  alt="Jelantik Logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 40px) 100vw, 40px"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-blue-600">Jelantik</span>
                <span className="text-xs text-slate-400 ml-2">Portal Pelanggan</span>
              </div>
            </Link>
            <Link
              href="/"
              className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </header>

      {/* Portal Content */}
      <main>{children}</main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Jelantik by PT. Artacomindo Jejaring Nusa
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="text-slate-500 hover:text-blue-600 transition-colors">
                Beranda
              </Link>
              <a
                href="https://hiburan.jelantik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                Hiburan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
