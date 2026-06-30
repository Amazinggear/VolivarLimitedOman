import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "عن الاستوديو | Outfit",
  description: "تعرف على استوديو Outfit الإبداعي وفريقنا.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#ede4dd] text-neutral-900 font-alexandria pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-[1.1]">
          عن <br />
          <span className="text-[#FF0001]">الاستوديو</span>
        </h1>
        <div className="space-y-6 text-neutral-700 text-lg leading-relaxed max-w-2xl">
          <p>OUTFIT هو استوديو تصميم وحركة يدمج بين الفن والتكنولوجيا لإنشاء تجارب بصرية استثنائية. تأسسنا على مبدأ أن كل مشروع يستحق لمسة فنية فريدة تترك أثراً لا ينسى.</p>
          <p>نحن فريق من المبدعين والمصممين والمطورين الذين يؤمنون بأن الحدود بين الفن الرقمي والتجربة الواقعية يجب أن تتلاشى.</p>
          <p>كل مشروع نلمسه يتحول إلى قصة بصرية تتنفس - من الهوية البصرية إلى تجربة المستخدم المتكاملة.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{ num: "50+", label: "مشروع منجز" }, { num: "15+", label: "عميل سعيد" }, { num: "7+", label: "سنوات خبرة" }].map((s) => (
            <div key={s.label} className="p-8 rounded-2xl bg-black/5 border border-black/10">
              <div className="text-4xl font-black text-[#FF0001] mb-2">{s.num}</div>
              <div className="text-neutral-600 font-medium">{s.label}</div>
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