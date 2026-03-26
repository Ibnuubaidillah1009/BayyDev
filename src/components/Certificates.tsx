"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { certificatesData } from "@/lib/certificates-data";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificatesData[0] | null>(null);

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedCert(null);
    }
  };

  return (
    <>
      <section id="certificates" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Certifications
            </h2>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 mb-4 mx-auto" />
            <p className="text-neutral-400">
              The certificates I got started from competitions and participating in bootcamps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="group flex flex-col rounded-2xl glass glass-hover overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <span className="text-xs font-semibold text-violet-400">{cert.issuer}</span>
                    <span className="text-[10px] font-bold px-2.5 py-1 bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20 whitespace-nowrap">{cert.date}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-3 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="mt-auto flex items-center text-neutral-500 group-hover:text-violet-400 transition-colors">
                    <span className="text-xs font-semibold mr-1.5">Click to view</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-violet-500/5 relative border border-white/10"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="w-full flex items-center justify-center overflow-hidden bg-black/30">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20">
                  {selectedCert.date}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-violet-400 font-medium mb-3">
                  Issued by: {selectedCert.issuer}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
