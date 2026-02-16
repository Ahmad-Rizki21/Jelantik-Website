import { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Hubungi tim support Jelantik untuk info paket, pemasangan, atau keluhan pelanggan. Layanan 24/7.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
