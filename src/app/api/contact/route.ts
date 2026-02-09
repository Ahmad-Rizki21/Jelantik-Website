import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, package: selectedPackage, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create transporter using your mail server credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || process.env.SMTP_USER,
        pass: process.env.EMAIL_PASS || process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email subject based on selected package
    const subject = selectedPackage 
      ? `New Contact Form Submission - Package: ${selectedPackage}` 
      : 'New Contact Form Submission';

    // 1. Create a plain text version for better deliverability (Anti-Spam)
    const textContent = `
NEW CONTACT FORM SUBMISSION
===========================
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Package: ${selectedPackage || 'Not specified'}

Message:
${message}

---
Note: This is an automated message from jelantik.com.
    `.trim();

    // 2. Create a pre-formatted reply template for the button
    const replySubject = encodeURIComponent(`Re: Inquiry Jelantik - ${name}`);
    const replyBody = encodeURIComponent(`Halo ${name},

Terima kasih telah menghubungi Jelantik! Kami sangat senang Anda tertarik dengan layanan kami.

Kami telah menerima rincian minat Anda:
━━━━━━━━━━━━━━━━━━━━━━━━
📍 Paket: ${selectedPackage || 'Custom Inquiry'}
💬 Pesan: "${message}"
━━━━━━━━━━━━━━━━━━━━━━━━

Tim Sales kami akan segera menghubungi Anda di nomor ${phone || 'Anda'} untuk memberikan informasi lebih detail, pengecekan coverage area, serta promo terbaru yang tersedia.

Sambil menunggu, apakah ada waktu khusus yang paling nyaman bagi kami untuk menelepon Anda?

Terima kasih atas kepercayaannya pada Jelantik.

Salam hangat,
Sales Team Jelantik
🌐 www.jelantik.com
📞 WhatsApp: +62 896 0602 5227`);

    const mailtoLink = `mailto:${email}?subject=${replySubject}&body=${replyBody}`;

    // 3. Improve the HTML template (Professional Design)
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f1f5f9; -webkit-font-smoothing: antialiased;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
                
                <!-- Branding Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px; text-align: center;">
                    <div style="background-color: rgba(255,255,255,0.1); display: inline-block; padding: 12px 24px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.2);">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.05em; text-transform: uppercase;">Jelantik</h1>
                    </div>
                    <p style="color: #dbeafe; margin: 16px 0 0 0; font-size: 14px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;">New Lead Notification</p>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 40px;">
                    <h2 style="font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 24px 0; border-left: 4px solid #f97316; padding-left: 16px;">
                      Data Pengirim
                    </h2>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                      <tr>
                        <td width="35%" style="padding: 12px 0; color: #64748b; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Nama Lengkap</td>
                        <td width="65%" style="padding: 12px 0; color: #1e293b; font-size: 15px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #64748b; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Alamat Email</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 15px; font-weight: 500;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #64748b; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Nomor Telepon</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                          <a href="tel:${phone}" style="color: #1e293b; text-decoration: none; font-size: 15px; font-weight: 500;">${phone || '<i>(Tidak diberikan)</i>'}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #64748b; font-size: 14px; font-weight: 600;">Paket Pilihan</td>
                        <td style="padding: 12px 0;">
                          <span style="background-color: #fff7ed; color: #c2410c; padding: 6px 14px; border-radius: 99px; font-size: 12px; font-weight: 700; border: 1px solid #ffedd5;">
                            ${selectedPackage || 'Umum'}
                          </span>
                        </td>
                      </tr>
                    </table>

                    <!-- Message Card -->
                    <div style="background-color: #f8fafc; border-radius: 20px; padding: 32px; border: 1px solid #e2e8f0; margin-bottom: 32px;">
                      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Pesan:</p>
                      <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.7; white-space: pre-wrap; font-style: italic;">"${message}"</p>
                    </div>

                    <!-- CTA Button -->
                    <div style="text-align: center;">
                      <a href="${mailtoLink}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 18px 36px; border-radius: 14px; font-size: 16px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
                        Balas Pesan Sekarang
                      </a>
                      <p style="margin-top: 16px; font-size: 12px; color: #94a3b8;">Klik untuk merespon pelanggan dengan template otomatis.</p>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 32px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0; color: #64748b; font-size: 13px; line-height: 1.6;">
                      Email ini dikirim otomatis oleh sistem <strong>Jelantik CRM</strong>.<br>
                      Harap segera tindak lanjuti prospek ini.
                    </p>
                    <div style="margin-top: 24px; font-size: 11px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 0.1em;">
                      &copy; ${new Date().getFullYear()} PT Artacomindo Jejaring Nusa
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // 4. Send email with Anti-Spam headers
    const mailOptions = {
      from: `"Jelantik Notification" <${process.env.EMAIL_USER}>`, // Branded From Name
      to: process.env.CONTACT_RECIPIENT || 'sels@jelantik.com',
      replyTo: `"${name}" <${email}>`,
      subject: `[LEAD] ${name} - Paket: ${selectedPackage || 'Inquiry'}`,
      text: textContent, // Plain text version for spam filters
      html: htmlContent,
      headers: {
        'X-Priority': '1 (Highest)',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
      }
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}