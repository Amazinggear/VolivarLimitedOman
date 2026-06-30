"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../components/data";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <main className="bg-white min-h-screen pt-32 md:pt-40">
      {/* Page header */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="block text-xs uppercase tracking-[0.3em] text-neutral-600 font-black mb-6">
            أرشيف الأعمال
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8">
            مشاريع <br />
            <span className="text-neutral-500">صُممت لتدوم.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-800 font-medium leading-loose max-w-2xl">
            مجموعة مختارة من المشاريع السكنية والتجارية والثقافية التي تجسد فلسفتنا
            في المزج بين الوظيفة والجمال، والاحترام العميق للموقع والضوء.
          </p>
        </motion.div>
      </section>

      {/* Projects list - alternating layout */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                className="group"
              >
                <Link
                  href={`/templates/cargo/projects/${project.slug}`}
                  className={`flex flex-col ${
                    reverse ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-8 md:gap-16`}
                >
                  {/* Image */}
                  <div className="w-full md:w-3/5 relative aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-2/5 flex flex-col gap-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-black">
                      {String(idx + 1).padStart(2, "0")} — {project.year}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-neutral-900 group-hover:text-black transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-neutral-700 font-bold">
                      {project.flag} {project.location}، {project.country}
                    </p>
                    <p className="text-neutral-600 font-medium leading-relaxed mt-2 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-sm font-bold text-black">
                      <span>استكشف المشروع</span>
                      <span className="inline-block transform group-hover:-translate-x-2 transition-transform">
                        ←
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
