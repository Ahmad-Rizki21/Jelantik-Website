'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { CustomerData } from '@/lib/billing-api';

interface Props {
  customerData: CustomerData;
}

export default function PortalDashboardClient({ customerData }: Props) {
  const router = useRouter();
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [invoiceFilter, setInvoiceFilter] = useState<'all' | 'unpaid' | 'paid'>('all');

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/portal/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLogoutLoading(false);
    }
  };

  const filteredInvoices = customerData.invoices.filter((invoice) => {
    if (invoiceFilter === 'all') return true;
    if (invoiceFilter === 'unpaid') return invoice.status_invoice !== 'Lunas';
    if (invoiceFilter === 'paid') return invoice.status_invoice === 'Lunas';
    return true;
  });

  const totalUnpaid = customerData.invoices
    .filter((inv) => inv.status_invoice !== 'Lunas')
    .reduce((sum, inv) => sum + (inv.total_harga || 0), 0);

  const unpaidCount = customerData.invoices.filter((inv) => inv.status_invoice !== 'Lunas').length;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateSubscriptionStatus = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const overdueInvoice = customerData.invoices.find((invoice) => {
      if (invoice.status_invoice === 'Lunas') return false;
      const dueDate = new Date(invoice.tgl_jatuh_tempo);
      dueDate.setHours(0, 0, 0, 0);
      return dueDate < today;
    });

    if (overdueInvoice) return 'Suspended';
    return customerData.langganan?.status || 'Aktif';
  };

  const actualSubscriptionStatus = calculateSubscriptionStatus();

  return (
    <div className="flex flex-col min-h-screen">
      {/* --- ELITE HEADER --- */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm border border-slate-100">
                  <Image
                    src="/images/icons/icon-96.webp"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-slate-900 leading-none">Portal Jelantik</h1>
                  <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Customer Area</span>
                </div>
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 sm:gap-6">
              <Link
                href="/"
                className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
              >
                Website Utama
              </Link>
              <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
              <button
                onClick={handleLogout}
                disabled={logoutLoading}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all border border-slate-200"
              >
                {logoutLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Keluar...
                  </span>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Keluar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-16">
        {/* --- GREETING SECTION --- */}
        <div className="mb-14 sm:flex items-end justify-between border-b border-slate-100 pb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Halo, {customerData.pelanggan.nama}!</h2>
            <p className="text-slate-500 text-lg mt-2 font-medium">Selamat datang kembali di pusat kendali layanan internet Anda.</p>
          </div>
          <div className="mt-8 sm:mt-0">
             <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm">
                <div className={`w-2.5 h-2.5 rounded-full ${actualSubscriptionStatus.toLowerCase() === 'aktif' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Status Layanan: {actualSubscriptionStatus}</span>
             </div>
          </div>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Unpaid Card */}
          <div className="bg-white p-12 rounded-4xl border border-slate-100 shadow-[0_4px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgb(0,0,0,0.08)] transition-all duration-500 group">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-1.5 rounded-full">Tunggakan</span>
            </div>
            <p className="text-base font-semibold text-slate-500 mb-2">Tagihan Belum Lunas</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{formatCurrency(totalUnpaid)}</h3>
          </div>

          {/* Count Card */}
          <div className="bg-white p-12 rounded-4xl border border-slate-100 shadow-[0_4px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgb(0,0,0,0.08)] transition-all duration-500 group">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-1.5 rounded-full">Dokumen</span>
            </div>
            <p className="text-base font-semibold text-slate-500 mb-2">Invoice Perlu Dibayar</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">{unpaidCount}</h3>
              <span className="text-lg text-slate-400 font-medium">Lembar</span>
            </div>
          </div>

          {/* Subscription Card */}
          <div className="bg-blue-600 p-12 rounded-4xl border border-blue-700 shadow-[0_20px_60px_rgba(37,99,235,0.25)] transform hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
             <div className="absolute top-[-30%] right-[-20%] w-80 h-80 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-110"></div>
             
             <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">Layanan</span>
              </div>
              <p className="text-base font-semibold text-blue-50/80 mb-2">Paket Langganan</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white truncate group-hover:whitespace-normal leading-tight">
                {customerData.pelanggan.layanan || 'Home 10 Mbps'}
              </h3>
              <div className="mt-6 flex items-center gap-2">
                 <span className="px-3 py-1 bg-white/10 rounded-lg text-[9px] font-bold text-white uppercase tracking-widest border border-white/10">Fiber Optic 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* LEFT: INVOICES (3/4 width) */}
          <div className="lg:col-span-3 space-y-10">
            <div className="bg-white rounded-5xl border border-slate-100 shadow-[0_4px_40px_rgb(0,0,0,0.02)] overflow-hidden">
              <div className="p-10 sm:p-16">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10 mb-14">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Riwayat Transaksi</h3>
                    <p className="text-slate-400 text-base font-medium mt-1">Daftar lengkap penagihan dan status pembayaran Anda.</p>
                  </div>
                  
                  {/* Filters */}
                  <div className="flex bg-slate-50 p-2 rounded-3xl border border-slate-100 overflow-x-auto no-scrollbar shrink-0">
                    {(['all', 'unpaid', 'paid'] as const).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setInvoiceFilter(filter)}
                        className={`px-7 py-3 text-xs font-bold rounded-2xl transition-all whitespace-nowrap ${
                          invoiceFilter === filter
                            ? 'bg-white text-blue-600 shadow-xl shadow-slate-200/50 border border-slate-100'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {filter === 'all' ? 'Semua Data' : filter === 'unpaid' ? 'Belum Lunas' : 'Sudah Lunas'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* List */}
                {filteredInvoices.length === 0 ? (
                  <div className="py-28 text-center bg-slate-50/50 rounded-4xl border border-dashed border-slate-200">
                    <div className="w-20 h-20 bg-white text-slate-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-lg font-semibold">Tidak ada invoice ditemukan.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredInvoices.map((invoice) => (
                      <div 
                        key={invoice.id} 
                        className="group flex flex-col xl:flex-row xl:items-center justify-between p-8 bg-slate-50/30 border border-transparent rounded-4xl hover:bg-white hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 hover:border-blue-100/50"
                      >
                        <div className="flex items-center gap-6 mb-6 xl:mb-0">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shrink-0 transition-all duration-500 group-hover:scale-105 ${
                            invoice.status_invoice === 'Lunas' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                          }`}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a1 1 0 01-1-1V5a1 1 0 011-1h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a1 1 0 01-1 1z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-slate-900 font-bold text-lg tracking-tight mb-0.5">{invoice.invoice_number}</h4>
                            <div className="flex items-center gap-2">
                               <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-1.5 py-0.5 rounded">Jatuh Tempo</span>
                               <p className="text-xs text-slate-500 font-medium">{formatDate(invoice.tgl_jatuh_tempo)}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between xl:justify-end gap-10 w-full xl:w-auto pt-6 xl:pt-0 border-t border-slate-100 xl:border-t-0">
                          <div className="text-left sm:text-right">
                            <span className="block text-2xl font-bold text-slate-900 tracking-tight mb-1">{formatCurrency(invoice.total_harga)}</span>
                            <div className="flex items-center sm:justify-end gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${invoice.status_invoice === 'Lunas' ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></div>
                              <span className={`text-[10px] font-bold uppercase tracking-widest ${
                                 invoice.status_invoice === 'Lunas' ? 'text-green-500' : 'text-red-500'
                              }`}>
                                {invoice.status_invoice === 'Lunas' ? 'Sudah Bayar' : 'Belum Bayar'}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                             <button
                               onClick={() => window.open(`/api/invoice/${invoice.id}/pdf`, '_blank')}
                               className="h-14 w-14 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all shadow-sm flex items-center justify-center group/btn"
                               title="Download PDF"
                             >
                               <svg className="w-5 h-5 transition-transform group-hover/btn:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                               </svg>
                             </button>
                             
                             {invoice.status_invoice !== 'Lunas' && invoice.payment_link && (
                               <a
                                 href={invoice.payment_link}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="px-8 h-14 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center min-w-[160px] active:scale-95 text-center"
                               >
                                 Bayar Sekarang
                               </a>
                             )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: PROFILE (1/4 width) */}
          <div className="space-y-8">
            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_4px_35px_rgb(0,0,0,0.02)] overflow-hidden sticky top-32">
               <div className="p-10">
                 <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-10">Akun Pelanggan</h3>
                 
                 <div className="space-y-10">
                    <div className="flex gap-5">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                       </div>
                       <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5 leading-none">Nama Lengkap</p>
                          <p className="text-slate-900 font-semibold text-base">{customerData.pelanggan.nama}</p>
                       </div>
                    </div>

                    <div className="flex gap-5">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                       </div>
                       <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5 leading-none">Email Aktif</p>
                          <p className="text-slate-900 font-semibold truncate max-w-[200px] text-base">{customerData.pelanggan.email}</p>
                       </div>
                    </div>

                    <div className="flex gap-5">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                       </div>
                       <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5 leading-none">WhatsApp</p>
                          <p className="text-slate-900 font-semibold text-base">{customerData.pelanggan.no_telp}</p>
                       </div>
                    </div>

                    <div className="flex gap-5">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                       </div>
                       <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5 leading-none">Lokasi Pemasangan</p>
                          <p className="text-slate-900 font-semibold text-sm leading-relaxed">
                            {customerData.pelanggan.alamat_2 || customerData.pelanggan.alamat}
                            {customerData.pelanggan.blok && <span className="block mt-1 bg-slate-50 px-2 py-0.5 rounded-lg text-[10px] font-bold w-fit text-slate-500">Blok {customerData.pelanggan.blok}, Unit {customerData.pelanggan.unit}</span>}
                          </p>
                       </div>
                    </div>

                 </div>

                 <div className="mt-14 bg-blue-50/40 p-8 rounded-4xl border border-blue-100/50">
                    <p className="text-blue-900 font-bold text-sm mb-2">Butuh Bantuan?</p>
                    <p className="text-blue-700/70 text-xs font-medium leading-relaxed mb-6">Kami siap membantu kendala koneksi internet Anda kapan saja.</p>
                    <a 
                      href="https://wa.me/6282223616884" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2.5 px-6 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10 active:scale-95"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Chat WhatsApp
                    </a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- ELITE FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white text-[12px] font-bold">J</div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 uppercase tracking-widest leading-none">Portal Jelantik</span>
                <span className="text-[10px] text-slate-400 font-semibold mt-1">Fiber Optic Specialist</span>
              </div>
           </div>
           <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
             © {new Date().getFullYear()} PT. Artacomindo Jejaring Nusa.
           </p>
           <div className="flex gap-10">
              <Link href="/" className="text-[10px] font-bold text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors flex items-center gap-2">
                 Pusat Bantuan
              </Link>
              <Link href="/" className="text-[10px] font-bold text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors flex items-center gap-2">
                 Kebijakan Privasi
              </Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
