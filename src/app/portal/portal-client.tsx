'use client';

/**
 * Portal Dashboard Client Component
 * Handles interactive elements like logout and invoice filtering
 */

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

  // Filter invoices
  const filteredInvoices = customerData.invoices.filter((invoice) => {
    if (invoiceFilter === 'all') return true;
    if (invoiceFilter === 'unpaid') return invoice.status_invoice !== 'Lunas';
    if (invoiceFilter === 'paid') return invoice.status_invoice === 'Lunas';
    return true;
  });

  // Calculate totals
  const totalUnpaid = customerData.invoices
    .filter((inv) => inv.status_invoice !== 'Lunas')
    .reduce((sum, inv) => sum + (inv.total_harga || 0), 0);

  const unpaidCount = customerData.invoices.filter((inv) => inv.status_invoice !== 'Lunas').length;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get invoice status badge
  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      'Lunas': 'bg-green-100 text-green-700 border-green-200',
      'Belum Lunas': 'bg-red-100 text-red-700 border-red-200',
      'Jatuh Tempo': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium border ${
          styles[status] || 'bg-gray-100 text-gray-700 border-gray-200'
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <>
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Portal Pelanggan</h1>
              <p className="text-sm text-gray-600">Selamat datang, {customerData.pelanggan.nama}</p>
            </div>
            <button
              onClick={handleLogout}
              disabled={logoutLoading}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition disabled:opacity-50 flex items-center gap-2"
            >
              {logoutLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Keluar...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Keluar
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Unpaid Amount */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tagihan Belum Lunas</p>
                <p className="text-2xl font-bold text-red-600 mt-1">{formatCurrency(totalUnpaid)}</p>
              </div>
              <div className="bg-red-100 rounded-full p-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Unpaid Count */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Invoice Belum Lunas</p>
                <p className="text-2xl font-bold text-orange-600 mt-1">{unpaidCount}</p>
              </div>
              <div className="bg-orange-100 rounded-full p-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Paket Langganan</p>
                <p className="text-lg font-bold text-blue-600 mt-1">
                  {customerData.pelanggan.layanan || 'Tidak ada paket'}
                </p>
                {customerData.pelanggan.harga_layanan?.brand && (
                  <p className="text-xs text-gray-500 mt-1">
                    Brand: {customerData.pelanggan.harga_layanan.brand}
                  </p>
                )}
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Profile Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Profil Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Nama Lengkap</p>
              <p className="font-medium text-gray-900">{customerData.pelanggan.nama}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-900">{customerData.pelanggan.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Nomor Telepon</p>
              <p className="font-medium text-gray-900">{customerData.pelanggan.no_telp}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Layanan</p>
              <p className="font-medium text-gray-900">{customerData.pelanggan.layanan}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600">Alamat</p>
              <p className="font-medium text-gray-900">{customerData.pelanggan.alamat_2 || customerData.pelanggan.alamat}</p>
            </div>
            {customerData.pelanggan.blok && customerData.pelanggan.unit && (
              <>
                <div>
                  <p className="text-sm text-gray-600">Blok</p>
                  <p className="font-medium text-gray-900">{customerData.pelanggan.blok}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Unit</p>
                  <p className="font-medium text-gray-900">{customerData.pelanggan.unit}</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Invoices Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">Riwayat Tagihan</h2>

            {/* Filter Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => setInvoiceFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                  invoiceFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setInvoiceFilter('unpaid')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                  invoiceFilter === 'unpaid'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Belum Lunas
              </button>
              <button
                onClick={() => setInvoiceFilter('paid')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                  invoiceFilter === 'paid'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Lunas
              </button>
            </div>
          </div>

          {/* Invoice List */}
          {filteredInvoices.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-4 text-gray-600">Tidak ada invoice</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Nomor</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Jatuh Tempo</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Jumlah</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        <span className="truncate block max-w-xs" title={invoice.invoice_number}>
                          {invoice.invoice_number}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{formatDate(invoice.tgl_jatuh_tempo)}</td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">{formatCurrency(invoice.total_harga)}</td>
                      <td className="py-3 px-4">{getStatusBadge(invoice.status_invoice)}</td>
                      <td className="py-3 px-4">
                        {invoice.status_invoice !== 'Lunas' && invoice.payment_link ? (
                          <a
                            href={invoice.payment_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            Bayar
                          </a>
                        ) : invoice.status_invoice === 'Lunas' ? (
                          <span className="text-xs text-gray-400">Sudah lunas</span>
                        ) : (
                          <span className="text-xs text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
