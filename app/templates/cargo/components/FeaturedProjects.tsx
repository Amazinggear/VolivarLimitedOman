"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "./data";

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24"
      >
        <div>
          <span className="block text-xs uppercase tracking-[0.3em] text-neutral-600 font-black mb-4">
            أعمال مختارة
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-neutral-900">
            مشاريع <br className="md:hidden" />
            <span className="text-neutral-500">تروي قصصاً.</span>
          </h2>
        </div>
        <Link
          href="/templates/cargo/projects"
          className="group inline-flex items-center gap-2 text-sm font-bold tracking-wide text-black hover:text-neutral-600 transition-colors"
        >
          عرض كل المشاريع
          <span className="inline-block transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
        </Link>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.slice(0, 3).map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 100, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.2,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className={`group ${idx === 0 ? "md:col-span-2" : ""}`}
          >
            <Link href={`/templates/cargo/projects/${project.slug}`} className="block">
              <div
                className={`relative w-full overflow-hidden rounded-2xl bg-gray-100 ${
                  idx === 0 ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Meta overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex items-end justify-between gap-4">
                  <div className="text-white">
                    <span className="block text-xs uppercase tracking-[0.25em] text-white/90 font-black mb-2">
                      {project.flag} {project.location} · {project.year}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center shrink-0 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
