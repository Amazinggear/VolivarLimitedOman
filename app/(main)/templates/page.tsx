import TemplatesSection from "@/components/TemplatesSection";

export const metadata = {
  title: "النماذج | Volivar",
  description: "استعرض نماذج Volivar الاحترافية للشركات والمتاجر.",
};

export default function TemplatesPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-surface">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 mb-10 text-center">
        <h1 className="text-[40px] md:text-[60px] font-bold text-on-surface mb-6">
          اكتشف <span className="text-primary">النماذج المذهلة</span>
        </h1>
        <p className="text-[18px] text-on-surface-variant max-w-[700px] mx-auto leading-relaxed">
          تصفح مكتبتنا المتنامية من التصميمات الجاهزة والتي يمكن تخصيصها بالكامل لتناسب هوية علامتك التجارية.
        </p>
      </div>
      
      {/* We reuse the TemplatesSection, which is already a gorgeous horizontal scroll or grid */}
      <TemplatesSection />
    </main>
  );
}
