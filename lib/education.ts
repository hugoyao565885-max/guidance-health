import { localeMeta, locales, pagePath, type Locale } from "./site";
import { urineRnaCopy } from "./education-copy";
import { breastScreeningCopy, breastScreeningOriginal } from "./education-breast-screening";
import { dasatinibCopy, dasatinibOriginal } from "./education-dasatinib";
import { getEducationArtwork, type EducationArtwork } from "./education-artwork";

export const educationUpdated = "2026-10-30";

export const educationUi: Record<Locale, { nav: string; title: string; description: string; articles: string; read: string; guides: string }> = {
  en: { nav: "Education", title: "Cancer education", description: "Articles on cancer research, tests and patient care, with references to the original literature.", articles: "Articles", read: "Read article", guides: "Preparing for care in China" },
  "zh-hant": { nav: "科普宣教", title: "科普宣教", description: "認識腫瘤研究、檢查與患者照護，查閱文章所引用的文獻來源。", articles: "科普文章", read: "閱讀全文", guides: "來華就醫準備" },
  ru: { nav: "О раке", title: "Информация о раке", description: "Статьи об исследованиях рака, обследованиях и уходе за пациентами со ссылками на научные источники.", articles: "Статьи", read: "Читать статью", guides: "Подготовка к лечению в Китае" },
  ar: { nav: "التثقيف", title: "التثقيف حول السرطان", description: "مقالات عن أبحاث السرطان والفحوص ورعاية المرضى، مع مراجع إلى المصادر العلمية الأصلية.", articles: "المقالات", read: "قراءة المقال", guides: "الاستعداد للرعاية في الصين" },
  id: { nav: "Edukasi", title: "Edukasi kanker", description: "Artikel tentang penelitian kanker, pemeriksaan dan perawatan pasien, disertai referensi ilmiah asli.", articles: "Artikel", read: "Baca artikel", guides: "Persiapan perawatan di Tiongkok" },
  ms: { nav: "Pendidikan", title: "Pendidikan kanser", description: "Artikel tentang penyelidikan kanser, pemeriksaan dan penjagaan pesakit, berserta rujukan ilmiah asal.", articles: "Artikel", read: "Baca artikel", guides: "Persediaan penjagaan di China" },
};

type ArticleUi = {
  originalPublished: string; added: string; edition: string; sources: string; paper: string;
  pubmed: string; sourceLabel: string; sourceLink: string; disclaimer: string; back: string;
};

export const educationArticleUi: Record<Locale, ArticleUi> = {
  en: {
    originalPublished: "Original publication", added: "Added to this website", edition: "Authorized translation of the Chinese original",
    sources: "References and sources", paper: "DOI · Journal article", pubmed: "PubMed record", sourceLabel: "Article source", sourceLink: "Original WeChat article",
    disclaimer: "This article is for education only and does not replace a doctor's advice on diagnosis, tests or treatment. Research findings do not guarantee an individual outcome. Do not stop medicines or change follow-up arrangements on this basis.", back: "Back to cancer education",
  },
  "zh-hant": {
    originalPublished: "原文發表日期", added: "本站收錄日期", edition: "授權轉載 · 繁體中文版本",
    sources: "參考文獻與引文來源", paper: "DOI · 期刊論文", pubmed: "PubMed 文獻紀錄", sourceLabel: "文章出處", sourceLink: "公眾號原文",
    disclaimer: "本文用於科普教育，不代替醫生的診斷、檢查或治療建議。研究結果不等於個體療效保證，請勿據此自行停藥或更改覆查安排。", back: "返回科普宣教",
  },
  ru: {
    originalPublished: "Дата оригинальной публикации", added: "Добавлено на сайт", edition: "Разрешённый перевод китайского оригинала",
    sources: "Литература и источники", paper: "DOI · Статья в журнале", pubmed: "Запись PubMed", sourceLabel: "Источник статьи", sourceLink: "Оригинальная статья в WeChat",
    disclaimer: "Статья предназначена для просвещения и не заменяет рекомендации врача по диагностике, обследованиям или лечению. Результаты исследований не гарантируют индивидуального эффекта. Не прекращайте приём лекарств и не меняйте план наблюдения на основании этой статьи.", back: "Назад к статьям о раке",
  },
  ar: {
    originalPublished: "تاريخ النشر الأصلي", added: "تاريخ الإضافة إلى الموقع", edition: "ترجمة مأذون بها للنص الصيني الأصلي",
    sources: "المراجع والمصادر", paper: "DOI · المقالة العلمية", pubmed: "سجل PubMed", sourceLabel: "مصدر المقال", sourceLink: "المقال الأصلي على WeChat",
    disclaimer: "هذا المقال للتثقيف فقط، ولا يحل محل نصيحة الطبيب بشأن التشخيص أو الفحوص أو العلاج. نتائج الأبحاث لا تضمن نتيجة علاجية لأي فرد. لا توقف الأدوية أو تغير ترتيبات المتابعة بناءً على هذا المقال.", back: "العودة إلى التثقيف حول السرطان",
  },
  id: {
    originalPublished: "Tanggal publikasi asli", added: "Ditambahkan ke situs ini", edition: "Terjemahan berizin dari naskah asli bahasa Mandarin",
    sources: "Referensi dan sumber", paper: "DOI · Artikel jurnal", pubmed: "Catatan PubMed", sourceLabel: "Sumber artikel", sourceLink: "Artikel asli di WeChat",
    disclaimer: "Artikel ini hanya untuk edukasi dan tidak menggantikan saran dokter mengenai diagnosis, pemeriksaan atau terapi. Temuan penelitian tidak menjamin hasil bagi individu. Jangan menghentikan obat atau mengubah jadwal tindak lanjut berdasarkan artikel ini.", back: "Kembali ke edukasi kanker",
  },
  ms: {
    originalPublished: "Tarikh penerbitan asal", added: "Ditambah ke laman ini", edition: "Terjemahan dengan kebenaran daripada teks asal bahasa Cina",
    sources: "Rujukan dan sumber", paper: "DOI · Artikel jurnal", pubmed: "Rekod PubMed", sourceLabel: "Sumber artikel", sourceLink: "Artikel asal di WeChat",
    disclaimer: "Artikel ini untuk pendidikan sahaja dan tidak menggantikan nasihat doktor tentang diagnosis, pemeriksaan atau rawatan. Dapatan kajian tidak menjamin hasil bagi seseorang individu. Jangan hentikan ubat atau ubah aturan susulan berdasarkan artikel ini.", back: "Kembali ke pendidikan kanser",
  },
};

export type EducationArticle = {
  slug: string;
  locale: Locale;
  language: string;
  title: string;
  description: string;
  category: string;
  publishedAt?: string;
  addedOn: string;
  sourceUrl?: string;
  paragraphs: string[];
  clinicalNote?: string;
  image?: EducationArtwork;
  references: { citation: string; url: string; indexUrl?: string }[];
};

// Only source-checked, authorized articles belong here. Never store backend URLs or session tokens.
export const educationOriginalArticle: EducationArticle = {
    slug: "urine-rna-bladder-cancer",
    locale: "zh-hant",
    language: "zh-Hans",
    title: "一杯尿能读出多少肿瘤信息？",
    description: "一项尿液游离 RNA 研究探索膀胱癌检测、残留病灶监测与治疗反应预测。研究结果仍需前瞻性验证，不能据此替代膀胱镜或自行调整治疗。",
    category: "检查与检测",
    publishedAt: "2026-10-29T11:46:00+08:00",
    addedOn: "2026-10-30",
    sourceUrl: "https://mp.weixin.qq.com/s/qqtew6HP2sgvsMGPybNneQ",
    paragraphs: [
      "对膀胱癌患者来说，治疗之后，心里常常还悬着几个问题：肿瘤是否还有残留？以后会不会复发？接下来的灌注治疗，哪一种更适合自己？如果留取一份尿液，就能为这些判断提供更多线索，诊疗或许会更方便，也更有针对性。最近发表于《自然·医学》的一项研究，让人们看到了这种可能。研究人员开发了一种尿液RNA检测方法，既尝试寻找膀胱癌的踪迹，也探索能否预测治疗反应。",
      "尿液为什么能透露肿瘤的信息？研究人员认为，膀胱储存尿液，膀胱内的肿瘤与尿液直接接触，细胞释放的分子碎片也可能进入其中。研究关注的是游离RNA，即存在于细胞之外的RNA片段。我们可以把它们理解为细胞留下的工作记录：哪些基因正在活跃，细胞是否加快增殖，周围有没有免疫细胞参与，都可能从这些记录中找到线索。",
      "困难在于，尿液中的RNA往往已经碎得很短，像一叠被剪碎的纸条。为此，研究团队开发了名为uRARE-seq的方法，专门捕捉、富集这些碎片，再通过测序和计算分析读取信息。整个研究分析了683份来自癌症患者及对照者的尿液样本，后续重点放在膀胱癌上。这是一项需要专门设备和分析流程的分子检测，与日常体检的尿常规不同。",
      "结果显示，在用于建立检测模型的251份尿样中，敏感度达到95%，特异度为90%。换成容易理解的说法，按这一表现，每100名膀胱癌患者中，约95名能够被检出；每100名非癌对照者中，约90名能够被正确识别为阴性。这也意味着仍有漏检和误报。研究者随后把已经确定的模型用于另一组282份尿样，得到了相近的结果。",
      "在93份配对样本的比较中，这种方法检出了89例膀胱癌，尿液细胞学检查检出了32例。对于细胞学检查较难发现的低级别肿瘤，新方法也显示出优势。它还可以直接分析尿液，不必先取得患者的肿瘤组织来定制检测。这些特点，为将来更方便地发现和追踪膀胱癌提供了可能。",
      "研究更进一步的问题是：肿瘤切除以后，尿液中还会不会留下信号？团队追踪了36名中、高风险的非肌层浸润性膀胱癌患者，也就是肿瘤尚未侵犯膀胱肌层的患者。他们接受手术及后续卡介苗膀胱灌注治疗，并在不同时间留取尿样。有些人的肿瘤RNA信号在手术后消失，另一些人在灌注治疗后才消失。治疗后仍能检出信号者，后续高级别复发的风险更高，提示这项检测可能帮助发现微小残留。不过，“未检出”仍有检测能力的边界，并不等于保证以后不会复发。",
      "尿液中还有另一类有价值的信息。研究发现，卡介苗治疗反应较好的患者，治疗前尿液中就往往已有较强的T细胞及其他免疫相关信号；反应较差者，则更多表现出细胞增殖相关信号。卡介苗灌注依靠激发局部免疫反应发挥作用，这些发现提示，治疗前的免疫环境，可能影响后续疗效。尿液因此不仅反映肿瘤本身，也可能让医生了解到肿瘤周围的免疫活动。",
      "围绕这些差别，研究团队利用共114名患者的治疗前尿样，开展了预测模型的建立和验证。结果提示，这些分子特征可能帮助区分谁更容易从卡介苗灌注中获益，谁可能更适合化疗灌注。对临床而言，这比单纯回答“有没有肿瘤”更进一步：它有望为治疗选择提供依据。但研究尚未证明，直接按照检测结果分配治疗，就一定能够减少复发或改善生存。",
      "这项研究展示了尿液检测的潜力，也留下了需要继续回答的问题。残留病灶监测和疗效预测涉及的患者仍较少，还需要更大规模的前瞻性研究，检验它在实际诊疗中的作用。目前不能据此取消膀胱镜检查，或单凭尿液RNA结果改变治疗。真正值得期待的是，将来通过一次方便的取样，获得更多可靠信息，让复查安排和治疗选择更贴近每位患者的情况。",
    ],
    references: [{
      citation: "Liu KJ, Shi WY, Nesselbush MC, et al. Urine cell-free RNA for bladder cancer detection and treatment response prediction[J/OL]. Nature Medicine, 2026. DOI: 10.1038/s41591-026-04673-3.",
      url: "https://doi.org/10.1038/s41591-026-04673-3",
      indexUrl: "https://pubmed.ncbi.nlm.nih.gov/42827132/",
    }],
};

export const educationOriginalArticles = [educationOriginalArticle, breastScreeningOriginal, dasatinibOriginal];

export const educationArticles: EducationArticle[] = [
  { original: educationOriginalArticle, copy: urineRnaCopy },
  { original: breastScreeningOriginal, copy: breastScreeningCopy },
  { original: dasatinibOriginal, copy: dasatinibCopy },
].flatMap(({ original, copy }) => locales.map((locale) => ({
  ...original,
  ...copy[locale],
  locale,
  language: localeMeta[locale].htmlLang,
  image: getEducationArtwork(original.slug, locale),
})));

export function educationArticlePath(article: EducationArticle) {
  return pagePath(article.locale, `education/${article.slug}`);
}

export function findEducationArticle(locale: string, slug: string) {
  return educationArticles.find((article) => article.locale === locale && article.slug === slug);
}
