"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[4/3]" },
  { id: 2, src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-square" },
  { id: 3, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]" },
  { id: 4, src: "https://images.unsplash.com/photo-1600607687920-4e2a09c15468?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[4/5]" },
  { id: 5, src: "https://images.unsplash.com/photo-1600566753086-00f18efc204b?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-video" },
  { id: 6, src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]" },
];

export default function ImageGallery() {
  return (
    <section className="px-4 md:px-8 pb-32 max-w-[1600px] mx-auto">
      {/* CSS columns for Masonry layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [&>*]:mb-8">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className={`relative w-full overflow-hidden rounded-xl bg-gray-100 ${img.aspect} break-inside-avoid`}
          >
            <Image
              src={img.src}
              alt={`صورة هندسية ${img.id}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
