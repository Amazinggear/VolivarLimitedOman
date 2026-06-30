"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, use } from "react";
import { getProject } from "../../components/data";
import Footer from "../../components/Footer";

export default function ClientPage({
  paramsPromise,
}: {
  paramsPromise: Promise<{ slug: string }>;
}) {
  const resolvedSlug = use(paramsPromise).slug;
  const project = getProject(resolvedSlug);
  if (!project) notFound();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        ref={ref}
        className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      >
        <motion.div
          style={{ y: yImage, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="block text-sm md:text-lg text-neutral-300 font-bold mb-4"
          >
            {project.flag} {project.location}، {project.country}
          </motion.span>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-tighter"
          >
            {project.title}
          </motion.h1>
        </motion.div>
      </section>

      {/* Details */}
      <section className="py-24 md:py-32 bg-white text-black px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          <div className="md:col-span-4 flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <h4 className="text-sm text-neutral-600 uppercase tracking-widest mb-2 font-black">العميل</h4>
              <p className="text-lg font-bold text-neutral-900">{project.client}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-sm text-neutral-600 uppercase tracking-widest mb-2 font-black">النوع</h4>
              <p className="text-lg font-bold text-neutral-900">{project.category}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-sm text-neutral-600 uppercase tracking-widest mb-2 font-black">السنة</h4>
              <p className="text-lg font-bold text-neutral-900">{project.year}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-sm text-neutral-600 uppercase tracking-widest mb-2 font-black">المساحة</h4>
              <p className="text-lg font-bold text-neutral-900">{project.area}</p>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-black mb-10 leading-tight text-neutral-900"
            >
              {project.description.split("،")[0]}.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-800 font-medium leading-loose"
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-8 pb-32 max-w-[1600px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [&>*]:mb-8">
          {project.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: (idx % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className={`relative w-full overflow-hidden rounded-xl bg-gray-100 ${img.aspect} break-inside-avoid`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next project nav */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <Link
            href="/templates/cargo/projects"
            className="text-neutral-400 hover:text-white transition-colors font-bold"
          >
            ← كل المشاريع
          </Link>
          <Link
            href="/templates/cargo/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all"
          >
            ابدأ مشروعك
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
