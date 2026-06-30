export type Project = {
  slug: string;
  title: string;
  location: string;
  country: string;
  flag: string;
  year: string;
  category: string;
  area: string;
  client: string;
  description: string;
  heroImage: string;
  gallery: { src: string; aspect: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "ellipse-apartment",
    title: "شقة إليبس",
    location: "مدينة كيبيك",
    country: "كندا",
    flag: "🇨🇦",
    year: "2024",
    category: "سكني / تجديد شامل",
    area: "1,200 قدم مربع",
    client: "عائلة سيمون",
    description:
      "يهدف هذا المشروع إلى إعادة تصور مساحة المعيشة الحضرية من خلال إدخال عناصر طبيعية وخطوط منحنية تكسر جمود العمارة التقليدية. تم تصميم \"شقة إليبس\" لتكون ملاذاً هادئاً يدمج بين الوظيفة والجمال، حيث تلعب الإضاءة الطبيعية الدور الأهم في إبراز تفاصيل المواد المستخدمة كالأخشاب الدافئة والخرسانة المصقولة.",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&auto=format&fit=crop&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[4/3]", alt: "صورة هندسية 1" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09c15468?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-square", alt: "صورة هندسية 2" },
      { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]", alt: "صورة هندسية 3" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18efc204b?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[4/5]", alt: "صورة هندسية 4" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-video", alt: "صورة هندسية 5" },
      { src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]", alt: "صورة هندسية 6" },
    ],
  },
  {
    slug: "monolith-tower",
    title: "برج مونوليث",
    location: "دبي",
    country: "الإمارات",
    flag: "🇦🇪",
    year: "2023",
    category: "تجاري / ناطحة سحاب",
    area: "48,000 م²",
    client: "مجموعة الواحة",
    description:
      "ناطحة سحاب تجسد الانسيابية والقوة في آنٍ واحد. واجهة زجاجية مزدوجة التموج تتفاعل مع ضوء الشمس المتغير، بينما يضم الداخل أتريومًا مركزيًا يربط الطوابق بصريًا ويوفر تهوية طبيعية مستدامة طوال العام.",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&auto=format&fit=crop&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]", alt: "برج مونوليث 1" },
      { src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-video", alt: "برج مونوليث 2" },
      { src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-square", alt: "برج مونوليث 3" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[4/5]", alt: "برج مونوليث 4" },
    ],
  },
  {
    slug: "verdant-villa",
    title: "فيلا فيردانت",
    location: "مسقط",
    country: "عُمان",
    flag: "🇴🇲",
    year: "2024",
    category: "سكني / فيلا خاصة",
    area: "850 م²",
    client: "عائلة البلوشي",
    description:
      "فيلا منخفضة الارتفاع تندمج مع التضاريس الجبلية المحيطة. اعتمدنا على الحجر المحلي والخشب المعالج لخلق حوار بين العمارة التقليدية العمانية والخطوط المعاصرة، مع فناء داخلي يفتح على سماء المسقط.",
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&auto=format&fit=crop&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[4/3]", alt: "فيلا فيردانت 1" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-square", alt: "فيلا فيردانت 2" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]", alt: "فيلا فيردانت 3" },
    ],
  },
  {
    slug: "aurora-pavilion",
    title: "جناح أورورا",
    location: "أوسلو",
    country: "النرويج",
    flag: "🇳🇴",
    year: "2022",
    category: "ثقافي / مساحة عامة",
    area: "1,500 م²",
    client: "بلدية أوسلو",
    description:
      "جناح ثقافي شفاف يفتح على الميناء. هيكل خشبي منحني مستوحى من القوارب النرويجية التقليدية، يوفر ملاذاً دافئاً في قلب الشتاء القطني ويؤطر غروب الشمس من زوايا متعددة.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&auto=format&fit=crop&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-video", alt: "جناح أورورا 1" },
      { src: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=1200&auto=format&fit=crop&q=80", aspect: "aspect-[4/5]", alt: "جناح أورورا 2" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
