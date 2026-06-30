import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "اتصل بنا | Outfit",
  description: "تواصل مع استوديو Outfit الإبداعي.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#ede4dd] text-neutral-900 font-alexandria pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-[1.1]">
          دعنا <br />
          <span className="text-[#FF0001]">نتحدث</span>
        </h1>
        <p className="text-xl text-neutral-600 max-w-md mb-12 leading-relaxed">
          لديك فكرة مجنونة؟ نحن هنا لنحولها إلى واقع. تواصل معنا ودعنا نبني شيئاً استثنائياً معاً.
        </p>
        <div className="space-y-6">
          {[
            { label: "البريد الإبداعي", value: "hello@outfit.is", href: "mailto:hello@outfit.is" },
            { label: "هاتف الاستوديو", value: "+968 9478 9593", href: "tel:+96894789593" },
            { label: "موقع الاستوديو", value: "🇴🇲 مسقط، سلطنة عُمان" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-6 p-6 rounded-2xl bg-black/5 border border-black/10 hover:border-[#FF0001]/30 transition-colors">
              <div className="flex-1">
                <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-2xl font-bold text-black hover:text-[#FF0001] transition-colors">{item.value}</a>
                ) : (
                  <p className="text-2xl font-bold text-black">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/templates/outfit" className="text-black hover:text-[#FF0001] font-bold transition-colors">
            ← العودة للرئيسية
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}