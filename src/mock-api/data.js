import img1 from "./../assets/audit.jpg";
import img2 from "./../assets/company.jpg";
import img3 from "./../assets/standard.jpg";
import img4 from "./../assets/audit1.jpg";
import img5 from "./../assets/topic1.jpg";
import img6 from "./../assets/tax.jpeg";
import img7 from "./../assets/topic2.jpg";
import img8 from "./../assets/audit.jpg";
import img9 from "./../assets/faq1.jpg";
import img10 from "./../assets/train.jpg";
import img11 from "./../assets/audit.jpg";
import img12 from "./../assets/topic2.jpg";
import img13 from "./../assets/topic2.jpg";
import img14 from "./../assets/audit1.jpg";

const data = {
  latestnews: [
    {
      id: 1,
      badge: "Audit",
      title: "خطوات وإجراءات مراجعة بند النقدية بالصندوق",
      topic: "",
      namePerson: "Unknown",
      date: "Apr 03,2024",
      image: img1,
      home: "latestnews",
    },
    {
      id: 2,
      badge: "Accounting Establishment",
      title: "خطوات وإجراءات تعديل شركة الشخص الواحد",
      topic: "",
      namePerson: "Unknown",
      date: "May 21,2024",
      image: img2,
    },
    {
      id: 3,
      badge: "Audit",
      title:
        "الهيئة السعودية للمراجعين والمحاسبين تصدر النسخة العربية الإلكترونية لعام 2024م من المعايير الدولية",
      topic: "",
      namePerson: "Unknown",
      date: "Apr 08,2024",
      image: img3,
    },
    {
      id: 4,
      badge: "Audit",
      title: "شرح معيار المراجعة المصرى 540 مراجعة التقديرات المحاسبية",
      topic: "",
      namePerson: "Unknown",
      date: "May 06,2024",
      image: img4,
    },
  ],
  latesttopics: [
    {
      id: 5,
      badge: "Accounting.News",
      title:
        "استخدام الذكاء الأصطناعى فى عملية التدقيق وتأثيرة على وظائف المراجعين",
      namePerson: "شبكة دعم المحاسب العربى",
      date: "May 06,2021",
      image: img5,
      pargraph:
        "استخدام الذكاء الأصطناعى فى عملية التدقيق وتأثيرة على وظائف المراجعين تلعب تكنولوجيا الذكاء الاصطناعي دورًا حيويًا",
    },
    {
      id: 6,
      badge: "منظمات ومؤسسات مهنية",
      title:
        "البحرين: ندوة كى بى إم جى تناقش الإجراءات والعواقب المتعلّقة بالمرحلة الثالثة والأخيرة من تطبيق نظام ضريبة القيمة المضافة",
      namePerson: "شبكة دعم المحاسب العربى",
      date: "Mar 06,2024",
      image: img6,
      pargraph:
        "البحرين: ندوة كى بى إم جى تناقش الإجراءات والعواقب المتعلّقة بالمرحلة الثالثة والأخيرة من تطبيق نظام ضريبة القيمة المضافة",
    },
    {
      id: 7,
      title:
        "منتدى المحاسبين السعودى: تفاصيل أول مؤتمر مهنى من نوعه للمحاسبين فى المملكة العربية السعودية",
      badge: "منتدي المحاسبين السعودي",
      namePerson: "شبكة دعم المحاسب العربى",
      date: "Jan 04,2024",
      image: img7,
      pargraph:
        "منتدى المحاسبين السعودى تفاصيل أول مؤتمر مهنى من نوعه للمحاسبين فى المملكة العربية السعودية تعتزم المملكة العربية السعودية لأول مرة تنظيم",
    },
    {
      id: 8,
      title: "أهمية أوراق العمل",
      namePerson: "شبكة دعم المحاسب العربى",
      badge: "Audit",
      date: "May 16,2022",
      image: img8,
      pargraph:
        "أهمية أوراق العمل-  تساعد في تخطيط و أداء المراجعة .- تساعد في الإشراف وفحص أعمال المراجعة .-  دليل إثبات على ما أنجز من أعمال المراجعة .",
    },
  ],
  postsfaq: [
    {
      id: 9,
      title:
        'الهيئة تستعرض أبرز إنجازاتها في تقرير "دور مهنة المحاسبة في بناء اقتصاد مزدهر"',
      imag: img9,
      badge: "Audit",
      date: "May 16,2022",
    },
    {
      id: 10,
      title:
        "ديوان المحاسبة القطرى يشارك فى الإجتماع 22 لوكلاء دوواين المراقبة والمحاسبة لدول مجلس التعاون الخليجى",
      imag: img10,
      badge: "Audit",
      date: "May 16,2022",
    },
    {
      id: 11,
      title: "إثبات شراء أصل ثابت محمل بالضريبة",
      imag: img11,
      badge: "Audit",
      date: "May 16,2022",
    },
    {
      id: 12,
      title:
        "الهيئة السعودية للمحاسبين والمراجعين: لجنة الإشراف على الانتخابات تعتمد اسماء المرشحين لعضوية مجلس الإدارة",
      imag: img12,
      badge: "Audit",
      date: "May 16,2022",
    },
    {
      id: 13,
      title: "قواعد سلوك وآداب مهنة المحاسبة فى المملكة العربية السعودية",
      imag: img13,
      badge: "Audit",
      date: "May 16,2022",
    },
    {
      id: 14,
      title: "كيف يحصل المراجع على تأكيدات مناسبة اثناء عملية المراجعة",
      imag: img14,
      badge: "Audit",
      date: "May 16,2022",
    },
  ],
};

export default data;
