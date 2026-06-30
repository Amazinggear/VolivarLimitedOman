import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#ede4dd] text-neutral-900 font-alexandria flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-[18vw] font-black text-[#FF0001] leading-none mb-4">
          404
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-black mb-4">الصفحة غير موجودة</h1>
        <p className="text-xl text-neutral-600 max-w-md mx-auto mb-10 leading-relaxed">
          يبدو أن هذه الصفحة قد اختفت في عالم الإبداع. دعنا نعود للواقع.
        </p>
        <Link
          href="/templates/outfit"
          className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FF0001] transition-colors duration-300"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}