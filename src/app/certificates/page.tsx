"use client";

import { certificatesData } from "@/lib/certificates-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen py-24 select-none">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">

        <div className="mb-12 flex flex-col items-start">
          <Link href="/#certificates" className="inline-flex items-center text-neutral-500 hover:text-violet-400 transition-colors mb-6 font-medium text-sm">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            All Certificates
          </h1>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 mb-4" />
          <p className="text-neutral-400 max-w-xl">
            A complete archive of my professional qualifications, courses, and educational achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl glass overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-violet-400">{cert.issuer}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20">{cert.date}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
