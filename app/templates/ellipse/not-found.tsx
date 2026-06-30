import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-alexandria flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-[15vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] leading-none mb-6">
          404
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-4">الصفحة غير موجودة</h1>
        <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
          يبدو أنك ضللت الطريق. الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link
          href="/templates/ellipse"
          className="inline-block bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-500"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}