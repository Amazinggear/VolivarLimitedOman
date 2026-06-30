import { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن المنصة | Ellipse",
  description: "تعرف على منصة Ellipse التقنية وفريقنا.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-alexandria pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black mb-8">
          عن{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
            المنصة
          </span>
        </h1>
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>ELLIPSE هي منصة تقنية متطورة تأسست برؤية واضحة: تمكين الشركات من التحول الرقمي بثقة وسرعة. نؤمن بأن التكنولوجيا يجب أن تكون في متناول الجميع، وليس حكراً على الشركات الكبرى.</p>
          <p>فريقنا يتكون من نخبة من المهندسين والمصممين وخبراء الأمن السيبراني الذين يعملون بلا كلل لبناء أدوات ذكية تمنح عملك قفزة نوعية نحو المستقبل.</p>
          <p>منذ انطلاقتنا، ساعدنا أكثر من 250 شركة في 50 دولة حول العالم على تحقيق أهدافها الرقمية. نفتخر بوقت تشغيل يصل إلى 99.9% وبرضا عملائنا الذي يتحدث عن نفسه.</p>
        </div>
        <div className="mt-16 p-8 rounded-2xl border border-[#6366F1]/10 bg-[#6366F1]/[0.02]">
          <h2 className="text-2xl font-bold text-white mb-4">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: "الشفافية", desc: "لا مفاجآت خفية. كل شيء واضح منذ اليوم الأول." }, { title: "الابتكار", desc: "نستثمر في البحث والتطوير لنبقى في الطليعة." }, { title: "الأمان", desc: "حماية بياناتك هي أولويتنا القصوى دائماً." }].map((v) => (
              <div key={v.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
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