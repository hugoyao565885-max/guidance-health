import type { Locale } from "./site";

export type EducationArtwork = {
  src: string;
  socialSrc: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  caption: string;
};

const disclosure: Record<Locale, { label: string; caption: string }> = {
  en: { label: "AI illustration", caption: "AI-assisted educational illustration. Not a real patient, hospital photograph, diagnostic image or research result." },
  "zh-hant": { label: "AI 科普示意圖", caption: "AI 輔助生成的科普示意圖，非真實患者、醫院實景、診斷影像或研究結果。" },
  ru: { label: "Иллюстрация с ИИ", caption: "Образовательная иллюстрация, созданная с помощью ИИ. Это не реальный пациент, фотография больницы, диагностическое изображение или результат исследования." },
  ar: { label: "رسم بالذكاء الاصطناعي", caption: "رسم تثقيفي أُنشئ بمساعدة الذكاء الاصطناعي، وليس تصويراً لمريض حقيقي أو مستشفى فعلي أو صورة تشخيصية أو نتيجة بحثية." },
  id: { label: "Ilustrasi AI", caption: "Ilustrasi edukatif yang dibuat dengan bantuan AI. Bukan pasien nyata, foto rumah sakit, citra diagnostik atau hasil penelitian." },
  ms: { label: "Ilustrasi AI", caption: "Ilustrasi pendidikan yang dihasilkan dengan bantuan AI. Bukan pesakit sebenar, foto hospital, imej diagnostik atau hasil kajian." },
};

const artwork: Record<string, { file: string; alt: Record<Locale, string> }> = {
  "cervical-cancer-keynote-826-five-year-follow-up": {
    file: "cervical-cancer-immunotherapy-follow-up",
    alt: {
      en: "Educational illustration of a uterine anatomy model, a follow-up folder and a blank calendar.",
      "zh-hant": "子宮解剖教學模型、隨訪檔案夾與空白日曆的科普示意圖。",
      ru: "Образовательная иллюстрация анатомической модели матки, папки наблюдения и пустого календаря.",
      ar: "رسم تثقيفي لنموذج تشريحي للرحم وملف متابعة وتقويم فارغ.",
      id: "Ilustrasi edukatif model anatomi rahim, map tindak lanjut dan kalender kosong.",
      ms: "Ilustrasi pendidikan model anatomi rahim, fail susulan dan kalendar kosong.",
    },
  },
  "car-t-lymphoma-ten-year-outcomes": {
    file: "car-t-long-term-follow-up",
    alt: {
      en: "Conceptual illustration of follow-up records, a blank calendar and engineered T cells for long-term CAR-T research.",
      "zh-hant": "隨訪檔案、空白日曆與改造T細胞的CAR-T長期研究概念示意圖。",
      ru: "Концептуальная иллюстрация записей наблюдения, пустого календаря и модифицированных Т-клеток для длительных исследований CAR-T.",
      ar: "رسم تصوري لسجلات المتابعة وتقويم فارغ وخلايا تائية معدلة في أبحاث CAR-T الطويلة الأمد.",
      id: "Ilustrasi konseptual catatan tindak lanjut, kalender kosong dan sel T rekayasa untuk penelitian CAR-T jangka panjang.",
      ms: "Ilustrasi konsep rekod susulan, kalendar kosong dan sel T yang diubah suai bagi penyelidikan CAR-T jangka panjang.",
    },
  },
  "chemotherapy-cancer-vaccine-timing": {
    file: "chemotherapy-vaccine-timing",
    alt: {
      en: "Conceptual illustration of unlabelled research vials, a blank calendar, a microscope and immune cells.",
      "zh-hant": "無標籤研究藥瓶、空白日曆、顯微鏡與免疫細胞的概念示意圖。",
      ru: "Концептуальная иллюстрация исследовательских флаконов без маркировки, пустого календаря, микроскопа и иммунных клеток.",
      ar: "رسم تصوري لقوارير بحثية بلا ملصقات وتقويم فارغ ومجهر وخلايا مناعية.",
      id: "Ilustrasi konseptual vial penelitian tanpa label, kalender kosong, mikroskop dan sel imun.",
      ms: "Ilustrasi konsep vial penyelidikan tanpa label, kalendar kosong, mikroskop dan sel imun.",
    },
  },
  "urine-rna-bladder-cancer": {
    file: "urine-rna-research",
    alt: {
      en: "Conceptual illustration of a urine sample, RNA strands and laboratory equipment.",
      "zh-hant": "尿液樣本、RNA 鏈與實驗室設備的概念示意圖。",
      ru: "Концептуальная иллюстрация образца мочи, цепей РНК и лабораторного оборудования.",
      ar: "رسم تصوري لعينة بول وسلاسل الحمض النووي الريبي ومعدات مختبرية.",
      id: "Ilustrasi konseptual sampel urine, untaian RNA dan peralatan laboratorium.",
      ms: "Ilustrasi konsep sampel air kencing, untaian RNA dan peralatan makmal.",
    },
  },
  "false-positive-mammography": {
    file: "breast-screening-follow-up",
    alt: {
      en: "Conceptual illustration of mammography equipment, a medical-record folder and a follow-up calendar.",
      "zh-hant": "乳腺X線檢查設備、病歷夾與隨訪日曆的概念示意圖。",
      ru: "Концептуальная иллюстрация маммографа, папки медицинских документов и календаря наблюдения.",
      ar: "رسم تصوري لجهاز تصوير الثدي الشعاعي وملف طبي وتقويم للمتابعة.",
      id: "Ilustrasi konseptual alat mamografi, map rekam medis dan kalender tindak lanjut.",
      ms: "Ilustrasi konsep peralatan mamografi, fail rekod perubatan dan kalendar susulan.",
    },
  },
  "dasatinib-tfh-lymphoma": {
    file: "lymphoma-treatment-research",
    alt: {
      en: "Conceptual illustration of lymphocytes, DNA and unbranded tablets for lymphoma treatment research.",
      "zh-hant": "淋巴細胞、DNA 與無品牌藥片的淋巴瘤治療研究概念示意圖。",
      ru: "Концептуальная иллюстрация лимфоцитов, ДНК и таблеток без маркировки для темы исследований лечения лимфомы.",
      ar: "رسم تصوري للخلايا اللمفاوية والحمض النووي وأقراص غير مسماة لموضوع أبحاث علاج اللمفوما.",
      id: "Ilustrasi konseptual limfosit, DNA dan tablet tanpa merek untuk penelitian terapi limfoma.",
      ms: "Ilustrasi konsep limfosit, DNA dan tablet tanpa jenama bagi penyelidikan rawatan limfoma.",
    },
  },
};

export function getEducationArtwork(slug: string, locale: Locale): EducationArtwork | undefined {
  const item = artwork[slug];
  if (!item) return undefined;
  return {
    src: `/images/education/${item.file}.webp`,
    socialSrc: `/images/education/${item.file}.jpg`,
    width: 1600,
    height: 900,
    alt: item.alt[locale],
    ...disclosure[locale],
  };
}
