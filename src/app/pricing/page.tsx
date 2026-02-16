import { Metadata } from "next";
import PricingClient from "@/components/pricing/PricingClient";

export const metadata: Metadata = {
  title: "Harga Paket Internet",
  description: "Dapatkan paket internet fiber optic termurah dan terbaik mulai dari 10Mbps hingga 50Mbps. Tanpa FUP, harga tetap.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
