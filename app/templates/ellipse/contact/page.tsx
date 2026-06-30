import { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتصل بنا | Ellipse",
  description: "تواصل مع فريق Ellipse للدعم والاستفسارات.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-alexandria pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black mb-8">
          اتصل{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
            بنا
          </span>
        </h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          نحن هنا للإجابة على استفساراتك. سواء كنت بحاجة لدعم تقني أو تريد معرفة المزيد عن خدماتنا، فريقنا جاهز لمساعدتك.
        </p>
        <div className="space-y-6">
          {[
            { icon: "✉️", label: "البريد الإلكتروني", value: "hello@ellipse.sa", href: "mailto:hello@ellipse.sa" },
            { icon: "📞", label: "الهاتف", value: "+968 9478 9593", href: "tel:+96894789593" },
            { icon: "📍", label: "العنوان", value: "🇴🇲 مسقط، سلطنة عُمان" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-[#6366F1]/20 transition-colors">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-white font-bold hover:text-[#6366F1] transition-colors">{item.value}</a>
                ) : (
                  <p className="text-white font-bold">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a href="/templates/ellipse" className="text-[#6366F1] hover:text-[#8B5CF6] font-bold transition-colors">
            ← العودة للرئيسية
          </a>
        </div>
      </div>
    </main>
  );
}