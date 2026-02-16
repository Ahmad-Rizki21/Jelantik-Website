import { Metadata } from "next";
import CoverageClient from "@/components/coverage/CoverageClient";

export const metadata: Metadata = {
  title: "Cek Coverage Area",
  description: "Cek ketersediaan layanan internet Jelantik di lokasi Anda. Kami melayani perumahan dan rusun di Jabodetabek dan Banten.",
  alternates: {
    canonical: "/coverage",
  },
};

export default function CoveragePage() {
  return <CoverageClient />;
}
