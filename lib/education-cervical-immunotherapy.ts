import type { Locale } from "./site";
import type { EducationArticle } from "./education";
import type { ArticleCopy } from "./education-copy";

// The supplied article has no original publication date or WeChat URL; retain only verified references.
export const cervicalImmunotherapyOriginal: EducationArticle = {
  slug: "cervical-cancer-keynote-826-five-year-follow-up",
  locale: "zh-hant",
  language: "zh-Hans",
  title: "宫颈癌免疫联合治疗，效果能持续多久？5年随访带来新答案",
  description: "解读KEYNOTE-826的5年随访探索性分析：帕博利珠单抗联合化疗的生存数据、适用范围与安全性，区分随访时间、用药时间和个人预后。",
  category: "宫颈癌与免疫治疗",
  addedOn: "2026-10-30",
  paragraphs: [
    "“这个方案有效，可效果能维持多久？”对宫颈癌复发或转移的患者来说，这往往是最牵挂的问题。一次检查发现肿瘤缩小，当然令人欣慰，但医生还需要把目光放远：治疗能否延长生命？随着时间推移，原先看到的优势是否还在？长期观察会不会发现新的风险？",
    "2026年9月10日，《JAMA Oncology》发表了KEYNOTE-826研究的5年随访探索性分析。结果显示，在化疗基础上加入帕博利珠单抗，既往观察到的延长生存、延缓疾病进展的优势，在接近5年的随访中仍然存在。对于需要长期治疗的患者，这份经受时间检验的证据，比一时的肿瘤缩小更有分量。",
    "这项Ⅲ期随机、双盲试验在19个国家的151家研究中心开展，共纳入617名女性，中位年龄51岁。研究针对的是持续性、复发性或转移性宫颈癌的一线治疗，不能直接套用于所有新确诊的宫颈癌患者。“一线”指这一疾病阶段首先采用的治疗方案，不意味着患者此前从未接受过任何抗癌治疗。",
    "患者被随机分入两组：一组接受帕博利珠单抗联合含铂化疗，另一组接受安慰剂联合含铂化疗，两组均可合用贝伐珠单抗。因此，对照组也接受了积极治疗。这项试验要回答的是：在原有治疗基础上增加免疫治疗，能否带来额外获益？研究中，帕博利珠单抗每3周使用一次，最多35个周期，并不是持续用药5年。",
    "此次中位随访时间达到59.1个月，比此前最终分析又延长约20个月。这里的5年，说的是研究观察的时间跨度，不能理解为每位患者都活到了5年，更不能理解为已经证明所有患者获得治愈。它的价值在于让我们看清早期出现的治疗优势能否持续。",
    "从总生存期看，在PD-L1联合阳性评分，也就是CPS≥1的人群中，联合免疫治疗组的中位总生存期为28.6个月，对照组为16.5个月，相差12.1个月。死亡风险比为0.62，意味着随访期间死亡发生的相对风险约降低38%。疾病控制方面，在CPS≥1的人群中，中位无进展生存期为10.5个月，对照组为8.2个月。这个指标计算的是从随机分组到疾病进展或死亡之前的时间。安全性方面，延长随访没有发现新的安全信号，自此前最终分析以来，也没有新增治疗相关不良事件导致的死亡。",
    "这次更新属于原随机试验的长期探索性分析，进一步支持帕博利珠单抗联合化疗、伴或不伴贝伐珠单抗，作为复发或转移性宫颈癌的一线标准治疗选择之一。",
  ],
  references: [{
    citation: "Hasegawa K, Colombo N, Tewari KS, et al. Pembrolizumab Plus Chemotherapy for Cervical Cancer: An Exploratory Analysis of the KEYNOTE-826 Randomized Clinical Trial. JAMA Oncol. Published online September 10, 2026:e263547. DOI: 10.1001/jamaoncol.2026.3547.",
    url: "https://doi.org/10.1001/jamaoncol.2026.3547",
    indexUrl: "https://pubmed.ncbi.nlm.nih.gov/42720936/",
  }],
};

export const cervicalImmunotherapyCopy: Record<Locale, ArticleCopy> = {
  en: {
    title: "How long does combined immunotherapy benefit cervical cancer? A 5-year update",
    description: "Understanding the KEYNOTE-826 exploratory 5-year follow-up: survival, eligibility and safety with pembrolizumab plus chemotherapy, and why follow-up duration is not treatment duration or an individual prognosis.",
    category: "Cervical cancer and immunotherapy",
    clinicalNote: "The survival figures highlighted here concern PD-L1 CPS ≥1 and should not be assumed to apply to CPS <1. A difference between median survival times is not a guaranteed gain for each patient, and a hazard ratio is not an individual's probability of dying. No new safety signal does not mean no adverse effects. Treatment depends on the applicable indication, biomarkers, previous care and clinical condition; do not change medicines or schedules on the basis of this exploratory update.",
    paragraphs: [
      "This treatment works, but how long will the benefit last? For people with recurrent or metastatic cervical cancer, this is often the question that matters most. Seeing a tumour shrink on a scan is encouraging, but clinicians must also look further ahead: does treatment prolong life, does the initial advantage persist, and might longer observation reveal new risks?",
      "On 10 September 2026, JAMA Oncology published an exploratory 5-year follow-up analysis of KEYNOTE-826. The previously observed advantages in survival and delaying disease progression with pembrolizumab added to chemotherapy remained evident after nearly 5 years of follow-up. For patients facing long-term care, evidence about sustained benefit is more informative than tumour shrinkage at a single time point.",
      "This phase III randomised, double-blind trial took place at 151 centres in 19 countries and included 617 women, with a median age of 51 years. It studied first-line treatment for persistent, recurrent or metastatic cervical cancer, so the findings cannot simply be applied to everyone newly diagnosed with cervical cancer. First-line refers to the initial treatment at this disease stage, not necessarily to someone who has never received any anticancer treatment before.",
      "Participants were randomly allocated to pembrolizumab plus platinum-based chemotherapy or placebo plus platinum-based chemotherapy; either group could also receive bevacizumab. The control group therefore received active treatment too. The question was whether adding immunotherapy to the existing treatment could provide additional benefit. In the study, pembrolizumab was given every 3 weeks for up to 35 cycles, not continuously for 5 years.",
      "Median follow-up reached 59.1 months, approximately 20 months beyond the previous final analysis. The term 5-year follow-up describes the study's observation period. It does not mean that every participant lived for 5 years or that all patients were shown to be cured. Its value is in testing whether the advantages seen earlier persisted.",
      "Among patients whose PD-L1 combined positive score was CPS ≥1, median overall survival was 28.6 months with the immunotherapy combination and 16.5 months in the control group, a difference of 12.1 months. The hazard ratio for death was 0.62, corresponding to an approximately 38% lower relative hazard of death during follow-up. For disease control in the CPS ≥1 population, median progression-free survival was 10.5 months versus 8.2 months. This endpoint measures time from randomisation to disease progression or death. Longer follow-up revealed no new safety signals, and no additional deaths due to treatment-related adverse events had occurred since the previous final analysis.",
      "This update is a long-term exploratory analysis of the original randomised trial. It further supports pembrolizumab plus chemotherapy, with or without bevacizumab, as a first-line standard-of-care option for eligible patients with recurrent or metastatic cervical cancer, within the applicable indication.",
    ],
  },
  "zh-hant": {
    title: "宮頸癌免疫聯合治療，效果能持續多久？5年隨訪帶來新答案",
    description: "解讀KEYNOTE-826的5年隨訪探索性分析：帕博利珠單抗聯合化療的生存數據、適用範圍與安全性，區分隨訪時間、用藥時間和個人預後。",
    category: "宮頸癌與免疫治療",
    clinicalNote: "本文重點列出的生存數據來自PD-L1 CPS≥1人群，不能直接外推至CPS<1患者。中位生存期的差值不是每位患者都能獲得的延長時間，危險比也不是個人的死亡機率。未發現新安全信號不代表沒有副作用。是否適用須結合當地適應證、生物標誌物、既往治療和身體狀況；請勿據此自行更改用藥或療程。",
    paragraphs: [
      "「這個方案有效，可效果能維持多久？」對宮頸癌復發或轉移的患者來說，這往往是最牽掛的問題。一次檢查發現腫瘤縮小，當然令人欣慰，但醫生還需要把目光放遠：治療能否延長生命？隨著時間推移，原先看到的優勢是否還在？長期觀察會不會發現新的風險？",
      "2026年9月10日，《JAMA Oncology》發表了KEYNOTE-826研究的5年隨訪探索性分析。結果顯示，在化療基礎上加入帕博利珠單抗，既往觀察到的延長生存、延緩疾病進展的優勢，在接近5年的隨訪中仍然存在。對於需要長期照護的患者，這份關於持續獲益的證據，比單次檢查看到的腫瘤縮小更有參考價值。",
      "這項Ⅲ期隨機、雙盲試驗在19個國家的151家研究中心開展，共納入617名女性，中位年齡51歲。研究針對的是持續性、復發性或轉移性宮頸癌的一線治療，不能直接套用於所有新確診的宮頸癌患者。「一線」指這一疾病階段首先採用的治療方案，不意味著患者此前從未接受過任何抗癌治療。",
      "患者被隨機分入兩組：一組接受帕博利珠單抗聯合含鉑化療，另一組接受安慰劑聯合含鉑化療，兩組均可合用貝伐珠單抗。因此，對照組也接受了積極治療。這項試驗要回答的是：在原有治療基礎上增加免疫治療，能否帶來額外獲益？研究中，帕博利珠單抗每3週使用一次，最多35個週期，並不是持續用藥5年。",
      "此次中位隨訪時間達到59.1個月，比此前最終分析又延長約20個月。這裏的5年，說的是研究觀察的時間跨度，不能理解為每位患者都活到了5年，更不能理解為已經證明所有患者獲得治癒。它的價值在於讓我們看清早期出現的治療優勢能否持續。",
      "從總生存期看，在PD-L1聯合陽性評分，也就是CPS≥1的人群中，聯合免疫治療組的中位總生存期為28.6個月，對照組為16.5個月，相差12.1個月。死亡危險比為0.62，對應隨訪期間死亡的相對瞬時風險約降低38%，並非個人的死亡機率降低同樣幅度。疾病控制方面，在CPS≥1的人群中，中位無進展生存期為10.5個月，對照組為8.2個月。這個指標計算的是從隨機分組到疾病進展或死亡之前的時間。安全性方面，延長隨訪沒有發現新的安全信號，自此前最終分析以來，也沒有新增治療相關不良事件導致的死亡。",
      "這次更新屬於原隨機試驗的長期探索性分析，進一步支持帕博利珠單抗聯合化療、伴或不伴貝伐珠單抗，作為符合相應適應證的復發或轉移性宮頸癌患者的一線標準治療選擇之一。",
    ],
  },
  ru: {
    title: "Как долго сохраняется эффект комбинированной иммунотерапии рака шейки матки? Данные за 5 лет",
    description: "Разбор поискового анализа KEYNOTE-826 с наблюдением до 5 лет: выживаемость, показания и безопасность пембролизумаба с химиотерапией. Срок наблюдения не равен длительности лечения или личному прогнозу.",
    category: "Рак шейки матки и иммунотерапия",
    clinicalNote: "Приведённые показатели выживаемости относятся к группе PD-L1 CPS ≥1 и не должны автоматически переноситься на CPS <1. Разница медиан не означает такое же продление жизни каждого пациента, а отношение рисков не является индивидуальной вероятностью смерти. Отсутствие новых сигналов безопасности не означает отсутствия побочных эффектов. Лечение зависит от действующих показаний, биомаркеров, предыдущей терапии и состояния пациента; не меняйте препараты или схему по этой статье.",
    paragraphs: [
      "Схема помогает, но надолго ли сохранится эффект? Для пациентов с рецидивирующим или метастатическим раком шейки матки это часто главный вопрос. Уменьшение опухоли на обследовании радует, но врачу важно смотреть дальше: продлевает ли лечение жизнь, сохраняется ли первоначальное преимущество и не выявит ли длительное наблюдение новые риски?",
      "10 сентября 2026 года JAMA Oncology опубликовал поисковый анализ 5-летнего наблюдения в исследовании KEYNOTE-826. Ранее выявленные преимущества добавления пембролизумаба к химиотерапии в отношении выживаемости и замедления прогрессирования сохранялись после почти 5 лет наблюдения. Для пациентов, нуждающихся в длительной помощи, сведения об устойчивости пользы информативнее уменьшения опухоли в отдельный момент.",
      "Это рандомизированное двойное слепое исследование III фазы проводилось в 151 центре в 19 странах. В него вошли 617 женщин, медиана возраста составляла 51 год. Изучалась первая линия терапии персистирующего, рецидивирующего или метастатического рака шейки матки; результаты нельзя просто перенести на всех пациентов с впервые установленным диагнозом. Первая линия означает начальное лечение на данном этапе болезни, а не обязательное отсутствие любого противоопухолевого лечения в прошлом.",
      "Участниц случайным образом распределили на пембролизумаб с платиносодержащей химиотерапией или плацебо с такой же химиотерапией; в обеих группах можно было добавлять бевацизумаб. Поэтому контрольная группа тоже получала активное лечение. Исследование проверяло, даёт ли добавление иммунотерапии дополнительную пользу. В исследовании пембролизумаб вводили каждые 3 недели, максимум 35 циклов, а не непрерывно в течение 5 лет.",
      "Медиана наблюдения достигла 59,1 месяца, примерно на 20 месяцев дольше предыдущего окончательного анализа. Термин 5-летнее наблюдение описывает временной горизонт исследования. Он не означает, что каждая участница прожила 5 лет или что доказано излечение всех пациентов. Такое наблюдение позволяет оценить сохранение преимуществ, выявленных ранее.",
      "В группе с комбинированным положительным показателем PD-L1, то есть CPS ≥1, медиана общей выживаемости составила 28,6 месяца при добавлении иммунотерапии и 16,5 месяца в контрольной группе, с разницей 12,1 месяца. Отношение рисков смерти было 0,62, что соответствует снижению относительной мгновенной интенсивности смертей примерно на 38% за период наблюдения, а не такому же снижению личной вероятности смерти. В популяции CPS ≥1 медиана выживаемости без прогрессирования составила 10,5 против 8,2 месяца. Этот показатель учитывает время от рандомизации до прогрессирования или смерти. При более длительном наблюдении новых сигналов безопасности не обнаружили; после предыдущего окончательного анализа также не было дополнительных смертей из-за связанных с лечением нежелательных явлений.",
      "Это обновление является длительным поисковым анализом исходного рандомизированного исследования. Оно дополнительно поддерживает применение пембролизумаба с химиотерапией, с бевацизумабом или без него, как одного из стандартных вариантов первой линии при рецидивирующем или метастатическом раке шейки матки у пациентов, соответствующих применимым показаниям.",
    ],
  },
  ar: {
    title: "إلى متى تستمر فائدة العلاج المناعي المركب لسرطان عنق الرحم؟ متابعة 5 سنوات",
    description: "فهم التحليل الاستكشافي لمتابعة KEYNOTE-826 لمدة 5 سنوات: البقاء والملاءمة والسلامة مع بيمبروليزوماب والكيميائي، والفرق بين مدة المتابعة والعلاج والتوقع الفردي.",
    category: "سرطان عنق الرحم والعلاج المناعي",
    clinicalNote: "أرقام البقاء المعروضة تخص مجموعة PD-L1 CPS ≥1، ولا يجوز افتراض انطباقها على CPS <1. فرق وسطي البقاء لا يضمن المدة نفسها لكل مريضة، ونسبة المخاطر ليست احتمال الوفاة الفردي. عدم ظهور إشارة سلامة جديدة لا يعني غياب الآثار الجانبية. يعتمد العلاج على الاستطباب المعتمد والمؤشرات الحيوية والعلاج السابق والحالة السريرية؛ لا تغيّري الدواء أو الجدول بناءً على هذا التحديث الاستكشافي.",
    paragraphs: [
      "هذا العلاج مفيد، لكن إلى متى ستستمر فائدته؟ هذا غالباً أكثر ما يشغل المريضات المصابات بسرطان عنق الرحم الناكس أو المنتشر. رؤية الورم يصغر في فحص أمر مشجع، لكن على الطبيب النظر أبعد: هل يطيل العلاج الحياة؟ وهل تبقى الميزة الأولى مع مرور الزمن؟ وهل تكشف المتابعة الطويلة مخاطر جديدة؟",
      "في 10 سبتمبر 2026، نشرت JAMA Oncology تحليلاً استكشافياً لمتابعة 5 سنوات من دراسة KEYNOTE-826. ظلت الفوائد التي لوحظت سابقاً لإضافة بيمبروليزوماب إلى الكيميائي في إطالة البقاء وتأخير تقدم المرض قائمة بعد متابعة قاربت 5 سنوات. ولمن يحتجن إلى رعاية طويلة، تكون الأدلة على استمرار الفائدة أكثر دلالة من تقلص الورم في فحص منفرد.",
      "أُجريت هذه التجربة العشوائية المزدوجة التعمية من المرحلة الثالثة في 151 مركزاً ضمن 19 دولة، وشملت 617 امرأة بوسيط عمر 51 سنة. درست العلاج من الخط الأول لسرطان عنق الرحم المستمر أو الناكس أو المنتشر؛ ولا تنطبق نتائجها مباشرة على جميع الحالات المشخصة حديثاً. يعني الخط الأول العلاج الأول في هذه المرحلة من المرض، وليس بالضرورة أن المريضة لم تتلق أي علاج مضاد للسرطان سابقاً.",
      "وُزعت المشاركات عشوائياً بين بيمبروليزوماب مع كيميائي قائم على البلاتين، ودواء وهمي مع كيميائي قائم على البلاتين؛ وكان يمكن إضافة بيفاسيزوماب في المجموعتين. ولذلك تلقت المجموعة الضابطة علاجاً فعالاً أيضاً. سألت التجربة عما إذا كانت إضافة المناعي توفر فائدة فوق العلاج الموجود. في الدراسة أُعطي بيمبروليزوماب كل 3 أسابيع، بحد أقصى 35 دورة، وليس بصورة متواصلة لمدة 5 سنوات.",
      "بلغ وسيط المتابعة 59.1 شهراً، أي نحو 20 شهراً إضافياً بعد التحليل النهائي السابق. وعبارة متابعة 5 سنوات تصف المدى الزمني للملاحظة في الدراسة، ولا تعني أن كل مشاركة عاشت 5 سنوات أو أن شفاء جميع المريضات قد ثبت. تكمن قيمتها في معرفة ما إذا كانت المزايا المبكرة قد استمرت.",
      "لدى المريضات ذوات الدرجة الإيجابية المشتركة لـ PD-L1، أي CPS ≥1، بلغ وسيط البقاء الكلي 28.6 شهراً مع الجمع المناعي مقابل 16.5 شهراً في المجموعة الضابطة، بفارق 12.1 شهراً. كانت نسبة المخاطر اللحظية للوفاة 0.62، بما يقابل انخفاضاً نسبياً في الخطر اللحظي بنحو 38% خلال المتابعة، وليس انخفاضاً مماثلاً في احتمال وفاة كل مريضة. وفي مجموعة CPS ≥1، بلغ وسيط البقاء دون تقدم المرض 10.5 أشهر مقابل 8.2 أشهر. ويقيس هذا المؤشر الزمن من التوزيع العشوائي إلى تقدم المرض أو الوفاة. لم تكشف المتابعة الممتدة إشارات سلامة جديدة، ولم تسجل وفيات إضافية بسبب أحداث ضارة مرتبطة بالعلاج منذ التحليل النهائي السابق.",
      "هذا التحديث تحليل استكشافي طويل الأمد للتجربة العشوائية الأصلية. وهو يدعم بيمبروليزوماب مع الكيميائي، مع بيفاسيزوماب أو بدونه، بوصفه أحد خيارات الرعاية المعيارية من الخط الأول للمريضات المؤهلات بسرطان عنق الرحم الناكس أو المنتشر، ضمن الاستطباب المعمول به.",
    ],
  },
  id: {
    title: "Berapa lama manfaat imunoterapi kombinasi untuk kanker serviks? Pembaruan 5 tahun",
    description: "Memahami analisis eksploratif tindak lanjut 5 tahun KEYNOTE-826: kelangsungan hidup, kesesuaian dan keamanan pembrolizumab dengan kemoterapi, serta perbedaan masa observasi dan terapi.",
    category: "Kanker serviks dan imunoterapi",
    clinicalNote: "Angka kelangsungan hidup yang dibahas berasal dari kelompok PD-L1 CPS ≥1 dan tidak boleh langsung diterapkan pada CPS <1. Selisih median bukan jaminan tambahan waktu hidup untuk setiap pasien, dan rasio hazard bukan probabilitas kematian individu. Tidak ada sinyal keamanan baru bukan berarti tidak ada efek samping. Terapi bergantung pada indikasi yang berlaku, biomarker, terapi sebelumnya dan kondisi klinis; jangan mengubah obat atau jadwal berdasarkan pembaruan ini.",
    paragraphs: [
      "Terapi ini bekerja, tetapi berapa lama manfaatnya bertahan? Bagi pasien kanker serviks yang kambuh atau bermetastasis, pertanyaan ini sering paling mengkhawatirkan. Tumor yang mengecil pada pemeriksaan tentu menggembirakan, tetapi dokter perlu melihat lebih jauh: apakah terapi memperpanjang hidup, apakah keunggulan awal bertahan, dan apakah pengamatan panjang menemukan risiko baru?",
      "Pada 10 September 2026, JAMA Oncology menerbitkan analisis eksploratif tindak lanjut 5 tahun KEYNOTE-826. Manfaat penambahan pembrolizumab pada kemoterapi dalam memperpanjang kelangsungan hidup dan menunda perkembangan penyakit yang sebelumnya diamati tetap terlihat setelah hampir 5 tahun pemantauan. Bagi pasien yang membutuhkan perawatan jangka panjang, bukti keberlanjutan manfaat lebih informatif daripada pengecilan tumor pada satu pemeriksaan.",
      "Uji acak tersamar ganda fase III ini berlangsung di 151 pusat pada 19 negara dan melibatkan 617 perempuan dengan median usia 51 tahun. Penelitian mengkaji terapi lini pertama untuk kanker serviks persisten, kambuh atau metastatik, sehingga tidak dapat langsung diterapkan pada semua pasien yang baru didiagnosis. Lini pertama berarti pengobatan awal pada tahap penyakit tersebut, bukan berarti pasien belum pernah mendapat terapi antikanker sebelumnya.",
      "Peserta diacak untuk menerima pembrolizumab dengan kemoterapi berbasis platinum atau plasebo dengan kemoterapi berbasis platinum; kedua kelompok dapat pula menerima bevacizumab. Jadi, kelompok pembanding juga mendapat terapi aktif. Studi menilai apakah penambahan imunoterapi memberi manfaat tambahan di atas terapi yang sudah ada. Dalam penelitian, pembrolizumab diberikan setiap 3 minggu hingga maksimal 35 siklus, bukan terus-menerus selama 5 tahun.",
      "Median tindak lanjut mencapai 59,1 bulan, sekitar 20 bulan lebih panjang daripada analisis final sebelumnya. Istilah tindak lanjut 5 tahun menggambarkan rentang pengamatan studi, bukan berarti setiap peserta hidup sampai 5 tahun atau semua pasien terbukti sembuh. Nilainya adalah memperjelas apakah keuntungan yang terlihat lebih awal tetap bertahan.",
      "Pada pasien dengan skor positif gabungan PD-L1, yaitu CPS ≥1, median kelangsungan hidup keseluruhan adalah 28,6 bulan pada kelompok kombinasi imunoterapi dan 16,5 bulan pada kelompok pembanding, selisih 12,1 bulan. Rasio hazard kematian sebesar 0,62 menunjukkan hazard kematian relatif sekitar 38% lebih rendah selama tindak lanjut, bukan penurunan yang sama pada probabilitas kematian setiap individu. Pada populasi CPS ≥1, median kelangsungan hidup bebas progresi adalah 10,5 dibanding 8,2 bulan. Ukuran ini menghitung waktu sejak pengacakan hingga perkembangan penyakit atau kematian. Pemantauan tambahan tidak menemukan sinyal keamanan baru, dan tidak ada tambahan kematian akibat kejadian tidak diinginkan terkait terapi sejak analisis final sebelumnya.",
      "Pembaruan ini merupakan analisis eksploratif jangka panjang dari uji acak awal. Hasilnya mendukung pembrolizumab dengan kemoterapi, dengan atau tanpa bevacizumab, sebagai salah satu pilihan standar lini pertama bagi pasien yang memenuhi indikasi kanker serviks kambuh atau metastatik yang berlaku.",
    ],
  },
  ms: {
    title: "Berapa lama manfaat imunoterapi gabungan bagi kanser serviks? Dapatan susulan 5 tahun",
    description: "Memahami analisis penerokaan susulan 5 tahun KEYNOTE-826: kelangsungan hidup, kesesuaian dan keselamatan pembrolizumab bersama kemoterapi, serta perbezaan tempoh susulan dan rawatan.",
    category: "Kanser serviks dan imunoterapi",
    clinicalNote: "Angka kelangsungan hidup yang dibincangkan melibatkan kumpulan PD-L1 CPS ≥1 dan tidak boleh terus digunakan bagi CPS <1. Perbezaan median bukan jaminan tambahan hayat yang sama bagi setiap pesakit, dan nisbah hazard bukan kebarangkalian kematian individu. Tiada isyarat keselamatan baharu tidak bermakna tiada kesan sampingan. Rawatan bergantung pada indikasi yang berkuat kuasa, biomarker, rawatan terdahulu dan keadaan klinikal; jangan ubah ubat atau jadual berdasarkan kemas kini ini.",
    paragraphs: [
      "Rawatan ini berkesan, tetapi berapa lama manfaatnya akan bertahan? Bagi pesakit kanser serviks yang berulang atau metastatik, inilah antara persoalan paling membimbangkan. Tumor yang mengecil pada pemeriksaan tentu melegakan, tetapi doktor perlu melihat lebih jauh: adakah rawatan memanjangkan hayat, adakah kelebihan awal kekal, dan mungkinkah pemerhatian lama mengenal pasti risiko baharu?",
      "Pada 10 September 2026, JAMA Oncology menerbitkan analisis penerokaan susulan 5 tahun kajian KEYNOTE-826. Kelebihan menambah pembrolizumab kepada kemoterapi dari segi kelangsungan hidup dan melambatkan perkembangan penyakit yang diperhatikan sebelum ini masih kekal selepas hampir 5 tahun susulan. Bagi pesakit yang memerlukan penjagaan jangka panjang, bukti manfaat berkekalan lebih bermakna daripada pengecilan tumor pada satu pemeriksaan sahaja.",
      "Percubaan rawak dwibuta fasa III ini dijalankan di 151 pusat dalam 19 negara dan melibatkan 617 wanita dengan median umur 51 tahun. Kajian menilai rawatan barisan pertama bagi kanser serviks berterusan, berulang atau metastatik, maka hasilnya tidak boleh terus digunakan untuk semua pesakit yang baru didiagnosis. Barisan pertama bermaksud rawatan awal pada peringkat penyakit itu, bukan semestinya pesakit tidak pernah menerima rawatan antikanser sebelumnya.",
      "Peserta dibahagikan secara rawak kepada pembrolizumab bersama kemoterapi berasaskan platinum atau plasebo bersama kemoterapi berasaskan platinum; kedua-dua kumpulan boleh turut menerima bevacizumab. Oleh itu, kumpulan kawalan juga menerima rawatan aktif. Persoalannya ialah sama ada penambahan imunoterapi memberi manfaat tambahan kepada rawatan sedia ada. Dalam kajian, pembrolizumab diberikan setiap 3 minggu sehingga maksimum 35 kitaran, bukan berterusan selama 5 tahun.",
      "Median susulan mencapai 59.1 bulan, kira-kira 20 bulan lebih lama daripada analisis akhir terdahulu. Istilah susulan 5 tahun merujuk kepada rentang masa pemerhatian kajian, bukan bermaksud setiap peserta hidup hingga 5 tahun atau semua pesakit terbukti sembuh. Nilainya adalah untuk melihat sama ada kelebihan awal rawatan berkekalan.",
      "Dalam kalangan pesakit dengan skor positif gabungan PD-L1, iaitu CPS ≥1, median kelangsungan hidup keseluruhan ialah 28.6 bulan bagi kumpulan gabungan imunoterapi dan 16.5 bulan bagi kumpulan kawalan, dengan perbezaan 12.1 bulan. Nisbah hazard kematian ialah 0.62, bersamaan hazard relatif kematian kira-kira 38% lebih rendah sepanjang susulan, bukan pengurangan yang sama pada kebarangkalian kematian seseorang. Dalam populasi CPS ≥1, median kelangsungan hidup tanpa perkembangan penyakit ialah 10.5 berbanding 8.2 bulan. Ukuran ini mengira masa dari pengagihan rawak hingga penyakit berkembang atau kematian. Susulan tambahan tidak menemukan isyarat keselamatan baharu, dan tiada kematian tambahan akibat kejadian buruk berkaitan rawatan sejak analisis akhir terdahulu.",
      "Kemas kini ini merupakan analisis penerokaan jangka panjang bagi percubaan rawak asal. Ia menyokong pembrolizumab bersama kemoterapi, dengan atau tanpa bevacizumab, sebagai salah satu pilihan rawatan standard barisan pertama bagi pesakit kanser serviks berulang atau metastatik yang memenuhi indikasi berkaitan.",
    ],
  },
};
