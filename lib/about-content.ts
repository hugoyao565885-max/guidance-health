import { brand, type Locale } from "./site";

type AboutItem = { title: string; text: string };

export type AboutContent = {
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  summaryTitle: string;
  summary: string;
  link: string;
  valueTitle: string;
  value: string;
  approach: string;
  challenges: { title: string; body: string; items: AboutItem[] };
  servicesTitle: string;
  servicesBody: string;
  strengths: { title: string; items: AboutItem[] };
  research: { title: string; body: string; steps: string[]; note: string };
  team: { title: string; body: string; items: AboutItem[]; note: string };
  boundaries: { title: string; body: string; note: string };
};

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    label: "About",
    eyebrow: "About H&C Care",
    title: "Healthcare-led oncology coordination",
    body: `${brand.legalName} / ${brand.zhLegalName} is a health advisory company focused on coordinating care in China for international cancer patients and their families.`,
    summaryTitle: "Focused on international oncology care coordination",
    summary: "Led by healthcare professionals, we help international patients understand China's healthcare system, prepare their records, communicate with suitable oncology teams in Guangdong and Guangzhou, and organize practical next steps.",
    link: "Meet the company",
    valueTitle: "Our purpose",
    value: "Helping international cancer patients find trustworthy, suitable, and realistically accessible oncology resources in China.",
    approach: "The challenge is not simply whether hospitals exist. It is knowing how to assess options, make an informed choice, and put a plan into practice. We turn complex arrangements into clear, actionable steps with coordination follow-through.",
    challenges: {
      title: "The difficulties we help families navigate",
      body: "Patients need clarity and continuity while dealing with serious illness, an unfamiliar system, and a different language.",
      items: [
        { title: "An unfamiliar healthcare system", text: "Knowing which hospital, department, or specialist fits the cancer type, stage, and current treatment phase can be difficult from overseas." },
        { title: "Uncertainty about resources", text: "Families may worry about exaggerated advertising, unsuitable referrals, or resources that are not genuinely available for their case." },
        { title: "Complex medical communication", text: "Pathology, imaging, genetic tests, treatment plans, and research discussions need careful, medically informed translation and preparation." },
        { title: "Unclear hospital procedures", text: "Appointments, registration, tests, admission, payment, repeat review, and referrals involve processes unfamiliar to international patients." },
        { title: "Payment and life in China", text: "Payment arrangements, accommodation, transport, accompaniment, meals, and family support all affect whether a visit is feasible." },
        { title: "Not knowing what happens next", text: "During serious illness, families need to know the next step, which questions to ask clinicians, and whom to contact about coordination issues." },
      ],
    },
    servicesTitle: "What we coordinate",
    servicesBody: "Our services cover information advice, case management, translation, communication, and practical support. The agreed scope is confirmed in writing before paid services begin.",
    strengths: {
      title: "Focused support, matched to the case",
      items: [
        { title: "An oncology focus", text: "We focus on international cancer patients coming to China, with particular attention to lymphoma and solid tumor pathways. Our support centers on record preparation, specialist communication, and ongoing coordination." },
        { title: "Suitable specialists, not just famous names", text: "We help coordinate experienced oncology resources across Guangdong according to cancer type, stage, previous treatment, current condition, clinical needs, and actual availability." },
        { title: "Preparation for advanced pathway discussions", text: "Where relevant, we organize information for discussions about targeted therapy, immunotherapy, cell therapy, bispecific medicines, or clinical research. Clinicians must assess eligibility, regulatory status, risks, and availability." },
      ],
    },
    research: {
      title: "Support for exploring clinical research opportunities",
      body: "For patients seeking further assessment, we can help prepare enquiries to oncology departments or research teams in China about relevant drug, targeted therapy, immunotherapy, or cell therapy studies.",
      steps: [
        "Organize existing records and published study criteria into questions for the clinical team.",
        "Prepare and translate the relevant medical record package.",
        "Help patients understand the eligibility information supplied by the study team.",
        "Coordinate communication with the relevant department or research team.",
        "Support practical arrangements before and after travel, where agreed.",
      ],
      note: "We do not assess clinical eligibility or guarantee enrollment. Investigators and treating clinicians independently determine suitability and whether further evaluation is available.",
    },
    team: {
      title: "Led by healthcare professionals",
      body: "Our service is led by people with real clinical backgrounds, bringing oncology and nursing experience to coordination rather than operating only as a translation or travel service.",
      items: [
        { title: "Oncology and nursing backgrounds", text: "The professional backgrounds of the team and related specialist resources include oncology physicians, professors, and senior nursing leaders." },
        { title: "International education and nursing credentials", text: "Nursing team members include professionals with overseas healthcare education, Chinese nursing credentials, and New York State Registered Nurse credentials." },
        { title: "Understanding the hospital and the family", text: "These backgrounds inform record preparation, hospital workflow, clinician communication, and the concerns patients and relatives face during cancer care." },
      ],
      note: "Professional backgrounds support coordination; they do not mean H&C Care provides diagnosis, treatment, or nursing practice. Specialist appointments and each professional's role must be confirmed for the individual case.",
    },
    boundaries: {
      title: "Our service boundaries",
      body: "We are not a hospital, clinic, medicine retailer, insurer, or treatment provider. We provide information advice, case management, medical coordination, translation, practical support, and advisory services.",
      note: "We do not replace doctors' diagnosis or treatment. We help patients understand, prepare, coordinate, and communicate. Licensed doctors, medical institutions, and research teams independently decide diagnosis, treatment recommendations, admission, and study enrollment. Treatment outcomes vary and are not guaranteed by the company.",
    },
  },
  "zh-hant": {
    label: "關於公司",
    eyebrow: "認識 H&C Care",
    title: "醫療專業人員主導的腫瘤就醫協調",
    body: `${brand.legalName} / ${brand.zhLegalName} 是一家健康顧問公司，專注為國際腫瘤患者及其家屬提供來華就醫協調支持。`,
    summaryTitle: "專注國際腫瘤患者來華就醫協調",
    summary: "由醫療專業人員主導，協助國際患者理解中國醫療體系、整理病歷、溝通廣東及廣州合適的腫瘤醫療團隊，並把就醫安排轉化為清楚、可執行的下一步。",
    link: "了解公司",
    valueTitle: "我們的核心價值",
    value: "幫助國際腫瘤患者找到可信賴、合適、可落地的中國腫瘤醫療資源。",
    approach: "外籍患者來中國看病，真正的困難不只是「有沒有醫院」，而是不知道如何判斷、如何選擇、如何落地。我們把這些複雜問題拆解成清楚、可執行、有人跟進的協調流程。",
    challenges: {
      title: "我們理解患者與家屬的困難",
      body: "面對重疾、陌生的醫療體系和語言差異，患者需要的是清楚的資訊與持續的協調支持。",
      items: [
        { title: "不了解中國醫療體系", text: "身在海外，很難知道哪些醫院、科室或醫生適合自己的癌種、分期和當前治療階段。" },
        { title: "不知道如何判斷資源是否可靠", text: "患者擔心過度宣傳、不合適的推薦，也擔心所謂資源並不真實，或無法按個案實際安排。" },
        { title: "醫學語言溝通困難", text: "病理、影像、基因檢測、治療方案和臨床研究涉及複雜資訊，需要具醫學語境的翻譯與資料準備。" },
        { title: "就醫流程陌生", text: "預約、掛號、檢查、住院、繳費、復診和轉診，對國際患者及家屬都是不熟悉的流程。" },
        { title: "付款與在華生活安排困難", text: "付款方式、住宿、交通、陪診、飲食和家屬照護，都會影響患者能否實際赴華就醫。" },
        { title: "重疾狀態下缺少安全感", text: "患者和家屬需要知道下一步做甚麼、如何向醫生提出問題，以及遇到協調問題時可以聯絡誰。" },
      ],
    },
    servicesTitle: "我們提供哪些協調支持",
    servicesBody: "服務涵蓋資訊諮詢、個案管理、翻譯溝通及實務支持。付費服務開始前，雙方會先以書面確認具體範圍。",
    strengths: {
      title: "專注腫瘤，按個案匹配路徑",
      items: [
        { title: "專注腫瘤協調", text: "專注國際腫瘤患者來華就醫協調，重點支持淋巴瘤與實體瘤路徑。服務圍繞病歷準備、專家溝通及持續協調展開。" },
        { title: "合適的專家，比單純名氣更重要", text: "根據癌種、分期、既往治療、身體狀況、臨床需求及實際可安排情況，協助對接廣東省內不同腫瘤專科方向的資深專家資源。" },
        { title: "支持前沿治療路徑的醫生溝通", text: "在個案相關時，可協助整理靶向治療、免疫治療、細胞治療、雙抗藥物或臨床研究的溝通資料。適用資格、監管狀態、風險及可及性，均需由醫療團隊確認。" },
      ],
    },
    research: {
      title: "協助了解臨床研究機會",
      body: "對希望進一步評估的患者，可協助準備資料，向中國相關科室或研究團隊了解新藥、靶向治療、免疫治療或細胞治療等研究方向。",
      steps: [
        "根據既有病歷與公開研究條件，整理需要向臨床團隊諮詢的方向與問題。",
        "協助整理及翻譯相關病歷資料包。",
        "協助理解研究團隊提供的入組條件資訊。",
        "協助與相關科室或臨床研究團隊溝通。",
        "按約定範圍協調來華前後的實務安排。",
      ],
      note: "我們不判定臨床適用資格，也不保證患者可以入組。是否適合及是否存在進一步評估機會，由接診醫生與研究團隊獨立判斷。",
    },
    team: {
      title: "真實醫療背景，支持專業協調",
      body: "公司由具臨床背景的醫療專業人員主導，將腫瘤醫學與護理經驗用於個案協調，不只是提供一般翻譯或旅行陪同。",
      items: [
        { title: "腫瘤醫學與護理背景", text: "團隊及相關專家資源的專業背景涵蓋腫瘤專科醫生、教授與護士長。" },
        { title: "海外教育與護士資格", text: "護理團隊成員中有具海外醫療教育背景，以及持有中國護士執業資格與美國紐約州註冊護士資格的專業人員。" },
        { title: "理解醫院，也理解家庭", text: "這些經驗幫助團隊理解病歷、醫院運作、治療流程、醫生溝通重點，以及患者與家屬在重疾狀態下的焦慮。" },
      ],
      note: "專業背景用於支持協調，不代表公司提供診斷、治療或護理執業服務。實際專家安排及各專業人員的參與角色，需按個案另行確認。",
    },
    boundaries: {
      title: "清楚的服務邊界",
      body: "公司不是醫院、診所、藥品銷售機構、保險機構或治療提供方。我們提供資訊諮詢、個案管理、醫療協調、翻譯溝通、生活支持和顧問服務。",
      note: "我們不替代醫生診斷和治療，我們幫助患者理解、準備、協調和溝通。最終診斷、治療建議、入院安排及臨床研究入組，均由執業醫生、醫療機構及研究團隊獨立判斷。治療結果因個案而異，公司不作療效或入組保證。",
    },
  },
  ru: {
    label: "О компании",
    eyebrow: "О H&C Care",
    title: "Координация онкологической помощи с медицинским опытом",
    body: `${brand.legalName} / ${brand.zhLegalName} — консультативная компания, помогающая зарубежным онкологическим пациентам и их семьям организовать обращение за помощью в Китае.`,
    summaryTitle: "Координация онкологической помощи в Китае для зарубежных пациентов",
    summary: "Под руководством медицинских специалистов мы помогаем понять систему здравоохранения Китая, подготовить документы, связаться с подходящими онкологическими командами Гуандуна и Гуанчжоу и спланировать следующие шаги.",
    link: "Узнать о компании",
    valueTitle: "Наша цель",
    value: "Помочь зарубежным онкологическим пациентам найти надежные, подходящие и реально доступные медицинские ресурсы в Китае.",
    approach: "Сложность не просто в наличии больниц, а в оценке вариантов, осознанном выборе и практической организации. Мы разбиваем сложные вопросы на понятные действия с дальнейшим сопровождением координации.",
    challenges: {
      title: "Трудности, с которыми сталкиваются семьи",
      body: "При тяжелой болезни, незнакомой системе и языковом барьере особенно важны ясная информация и последовательная координация.",
      items: [
        { title: "Незнакомая система здравоохранения", text: "Из-за рубежа трудно определить больницу, отделение и специалиста, подходящих типу рака, стадии и текущему этапу лечения." },
        { title: "Сомнения в надежности ресурсов", text: "Семьи опасаются преувеличенной рекламы, неподходящих направлений и возможностей, недоступных для конкретного случая." },
        { title: "Сложная медицинская коммуникация", text: "Патология, снимки, генетические анализы, планы лечения и исследования требуют внимательной подготовки и перевода с пониманием медицинского контекста." },
        { title: "Непонятные процедуры больницы", text: "Запись, регистрация, обследования, госпитализация, оплата, повторные консультации и направления могут быть незнакомы пациенту." },
        { title: "Оплата и жизнь в Китае", text: "Способы оплаты, жилье, транспорт, сопровождение, питание и помощь семье влияют на возможность поездки." },
        { title: "Неясность следующего шага", text: "Семье важно знать, что делать дальше, какие вопросы задать врачам и к кому обращаться по вопросам организации." },
      ],
    },
    servicesTitle: "Что мы координируем",
    servicesBody: "Мы предоставляем информационные консультации, ведение случая, перевод, коммуникационную и практическую поддержку. Объем платных услуг предварительно согласуется письменно.",
    strengths: {
      title: "Онкологическая специализация и индивидуальный маршрут",
      items: [
        { title: "Фокус на онкологии", text: "Мы специализируемся на поездках онкологических пациентов в Китай, уделяя особое внимание лимфомам и солидным опухолям. Поддержка включает подготовку документов, связь со специалистами и последовательную координацию." },
        { title: "Подходящий специалист важнее известного имени", text: "Ресурсы Гуандуна подбираются для коммуникации с учетом типа и стадии рака, предыдущего лечения, состояния пациента, клинических потребностей и реальной доступности." },
        { title: "Подготовка к обсуждению современных подходов", text: "Когда это относится к случаю, мы систематизируем сведения для обсуждения таргетной, иммунной, клеточной терапии, биспецифических препаратов или исследований. Применимость, регуляторный статус, риски и доступность оценивают врачи." },
      ],
    },
    research: {
      title: "Помощь в изучении возможностей клинических исследований",
      body: "Мы можем подготовить запросы в китайские отделения и исследовательские команды о дополнительной оценке для исследований лекарств, таргетной, иммунной или клеточной терапии.",
      steps: [
        "Систематизировать имеющиеся документы и опубликованные критерии исследования в вопросы для врачей.",
        "Подготовить и перевести необходимые медицинские документы.",
        "Помочь понять информацию о критериях, предоставленную исследовательской командой.",
        "Координировать связь с соответствующим отделением или исследователями.",
        "Поддержать согласованные организационные действия до и после поездки.",
      ],
      note: "Мы не определяем клиническую пригодность и не гарантируем включение. Решение о соответствии и дополнительной оценке независимо принимают лечащие врачи и исследовательская команда.",
    },
    team: {
      title: "Под руководством медицинских специалистов",
      body: "Реальный клинический опыт в онкологии и сестринском деле используется для координации, а не только для обычного перевода или туристического сопровождения.",
      items: [
        { title: "Онкология и сестринское дело", text: "Профессиональный опыт команды и связанных экспертных ресурсов включает онкологов, профессоров и старших руководителей сестринского персонала." },
        { title: "Международное образование и квалификации", text: "Среди сестринских специалистов есть сотрудники с зарубежным медицинским образованием, китайской квалификацией медсестры и квалификацией Registered Nurse штата Нью-Йорк." },
        { title: "Понимание больницы и семьи", text: "Этот опыт помогает готовить документы, понимать работу больницы, общаться с врачами и учитывать тревоги пациентов и родственников." },
      ],
      note: "Квалификации служат поддержке координации и не означают оказание компанией диагностики, лечения или сестринской практики. Участие каждого специалиста и прием подтверждаются для конкретного случая.",
    },
    boundaries: {
      title: "Границы наших услуг",
      body: "Мы не больница, клиника, продавец лекарств, страховая организация или поставщик лечения. Наши услуги — информационные консультации, ведение случая, координация, перевод, бытовая поддержка и консультирование.",
      note: "Мы не заменяем диагностику и лечение врача. Мы помогаем понять, подготовиться, организовать и общаться. Диагноз, рекомендации, госпитализацию и участие в исследованиях независимо определяют лицензированные врачи, медицинские учреждения и исследователи. Результаты лечения индивидуальны и не гарантируются компанией.",
    },
  },
  ar: {
    label: "عن الشركة",
    eyebrow: "تعرّف على H&C Care",
    title: "تنسيق رعاية الأورام بقيادة مهنيين صحيين",
    body: `${brand.legalName} / ${brand.zhLegalName} شركة استشارات صحية تدعم مرضى السرطان الدوليين وعائلاتهم في تنسيق الرعاية في الصين.`,
    summaryTitle: "تنسيق رعاية الأورام في الصين للمرضى الدوليين",
    summary: "بقيادة مهنيين صحيين، نساعد المرضى على فهم النظام الصحي الصيني، وتجهيز السجلات، والتواصل مع فرق أورام مناسبة في غوانغدونغ وغوانغجو، وتنظيم الخطوات العملية التالية.",
    link: "تعرّف على الشركة",
    valueTitle: "هدفنا",
    value: "مساعدة مرضى السرطان الدوليين على الوصول إلى موارد أورام موثوقة ومناسبة ومتاحة فعلياً في الصين.",
    approach: "الصعوبة ليست مجرد وجود مستشفيات، بل كيفية تقييم الخيارات واختيار المناسب وتنفيذ الترتيبات. نحول المسائل المعقدة إلى خطوات واضحة وعملية مع متابعة التنسيق.",
    challenges: {
      title: "الصعوبات التي نساعد العائلات على تجاوزها",
      body: "مع المرض الخطير والنظام غير المألوف واختلاف اللغة، يحتاج المريض إلى معلومات واضحة ودعم تنسيقي مستمر.",
      items: [
        { title: "نظام صحي غير مألوف", text: "يصعب من الخارج تحديد المستشفى والقسم والطبيب المناسبين لنوع السرطان ومرحلته ومرحلة العلاج الحالية." },
        { title: "التحقق من موثوقية الموارد", text: "قد تقلق العائلات من الدعاية المبالغ فيها أو الإحالات غير المناسبة أو موارد لا يمكن ترتيبها فعلياً للحالة." },
        { title: "تعقيد التواصل الطبي", text: "تحتاج تقارير الأنسجة والتصوير والفحوص الجينية وخطط العلاج والبحوث إلى ترجمة وتحضير يفهمان السياق الطبي." },
        { title: "إجراءات مستشفى غير واضحة", text: "قد تكون المواعيد والتسجيل والفحوص والدخول والدفع والمراجعات والإحالات جديدة على المرضى الدوليين." },
        { title: "الدفع والحياة في الصين", text: "تؤثر طرق الدفع والسكن والنقل والمرافقة والطعام ودعم الأسرة في إمكانية الزيارة." },
        { title: "عدم وضوح الخطوة التالية", text: "تحتاج العائلة إلى معرفة ما يلي، والأسئلة التي تناقشها مع الأطباء، ومن تتصل به عند وجود مشكلة في التنسيق." },
      ],
    },
    servicesTitle: "ما الذي ننسقه",
    servicesBody: "نقدم استشارات معلوماتية وإدارة للحالة وترجمة ودعماً للتواصل والترتيبات العملية. يُؤكد نطاق الخدمات كتابةً قبل بدء أي خدمة مدفوعة.",
    strengths: {
      title: "تركيز على الأورام ومسار مناسب للحالة",
      items: [
        { title: "التخصص في الأورام", text: "نركز على تنسيق قدوم مرضى السرطان الدوليين إلى الصين، ولا سيما مسارات اللمفوما والأورام الصلبة. يشمل الدعم تجهيز السجلات والتواصل مع الاختصاصيين واستمرار التنسيق." },
        { title: "الملاءمة أهم من شهرة الاسم", text: "نساعد في التواصل مع خبرات الأورام في غوانغدونغ وفق نوع السرطان ومرحلته والعلاجات السابقة والحالة الحالية والحاجة السريرية والتوافر الفعلي." },
        { title: "التحضير لمناقشة المسارات المتقدمة", text: "عند ارتباطها بالحالة، ننظم معلومات للنقاش حول العلاج الموجه والمناعي والخلوي والأدوية ثنائية الخصوصية والبحوث. يقيّم الأطباء الأهلية والوضع التنظيمي والمخاطر والتوافر." },
      ],
    },
    research: {
      title: "دعم استكشاف فرص البحوث السريرية",
      body: "يمكننا تجهيز استفسارات إلى أقسام الأورام أو فرق البحث في الصين بشأن التقييم الإضافي لدراسات الأدوية والعلاج الموجه والمناعي والخلوي.",
      steps: [
        "تنظيم السجلات الحالية والمعايير المنشورة في أسئلة للفريق السريري.",
        "تجهيز وترجمة حزمة السجلات الطبية ذات الصلة.",
        "المساعدة في فهم شروط الأهلية التي يوضحها فريق البحث.",
        "تنسيق التواصل مع القسم أو فريق البحث المناسب.",
        "دعم الترتيبات العملية المتفق عليها قبل السفر وبعده.",
      ],
      note: "لا نحدد الأهلية السريرية ولا نضمن القبول. يقرر الأطباء وفريق البحث بصورة مستقلة مدى الملاءمة وإمكانية إجراء تقييم إضافي.",
    },
    team: {
      title: "بقيادة مهنيين صحيين",
      body: "تستفيد خدمتنا من خبرة سريرية حقيقية في طب الأورام والتمريض لدعم التنسيق، ولا تقتصر على الترجمة العامة أو مرافقة السفر.",
      items: [
        { title: "خبرات في الأورام والتمريض", text: "تشمل الخلفيات المهنية للفريق والموارد التخصصية المرتبطة به أطباء أورام وأساتذة وقيادات تمريضية." },
        { title: "تعليم دولي ومؤهلات تمريض", text: "يضم طاقم التمريض مهنيين بخلفية تعليم صحي خارجية ومؤهلات تمريض صينية ومؤهل ممرض مسجل في ولاية نيويورك." },
        { title: "فهم المستشفى واحتياجات الأسرة", text: "تدعم هذه الخبرات تجهيز السجلات وفهم إجراءات المستشفى والتواصل مع الأطباء ومراعاة قلق المريض وعائلته." },
      ],
      note: "تدعم المؤهلات التنسيق ولا تعني تقديم الشركة للتشخيص أو العلاج أو ممارسة التمريض. تُؤكد مواعيد الاختصاصيين وأدوارهم لكل حالة على حدة.",
    },
    boundaries: {
      title: "حدود خدماتنا",
      body: "لسنا مستشفى أو عيادة أو بائع أدوية أو شركة تأمين أو مقدم علاج. نقدم معلومات واستشارات وإدارة حالات وتنسيقاً طبياً وترجمة ودعماً عملياً للحياة اليومية.",
      note: "لا نستبدل تشخيص الأطباء أو علاجهم. نساعد المرضى على الفهم والتحضير والتنسيق والتواصل. يقرر الأطباء المرخصون والمؤسسات الطبية وفرق البحث بصورة مستقلة التشخيص وتوصيات العلاج والدخول للمستشفى والقبول في الدراسات. تختلف نتائج العلاج ولا تضمنها الشركة.",
    },
  },
  id: {
    label: "Tentang Kami",
    eyebrow: "Mengenal H&C Care",
    title: "Koordinasi onkologi dipimpin profesional kesehatan",
    body: `${brand.legalName} / ${brand.zhLegalName} adalah perusahaan konsultasi kesehatan yang mendukung pasien kanker internasional dan keluarga dalam koordinasi perawatan di Tiongkok.`,
    summaryTitle: "Koordinasi onkologi di Tiongkok untuk pasien internasional",
    summary: "Dipimpin profesional kesehatan, kami membantu memahami sistem kesehatan Tiongkok, menyiapkan rekam medis, berkomunikasi dengan tim onkologi yang sesuai di Guangdong dan Guangzhou, serta mengatur langkah praktis berikutnya.",
    link: "Mengenal perusahaan",
    valueTitle: "Tujuan kami",
    value: "Membantu pasien kanker internasional menemukan sumber daya onkologi di Tiongkok yang tepercaya, sesuai, dan dapat diakses secara nyata.",
    approach: "Kesulitannya bukan sekadar ada atau tidaknya rumah sakit, tetapi cara menilai pilihan, memilih dengan informasi yang cukup, dan melaksanakan rencana. Kami menguraikan kerumitan menjadi langkah jelas yang dapat dijalankan dan ditindaklanjuti.",
    challenges: {
      title: "Kesulitan yang kami bantu keluarga hadapi",
      body: "Dalam kondisi sakit serius, sistem yang asing, dan perbedaan bahasa, pasien membutuhkan informasi jelas dan koordinasi berkelanjutan.",
      items: [
        { title: "Sistem kesehatan yang belum dikenal", text: "Dari luar negeri, sulit menentukan rumah sakit, bagian, dan dokter yang sesuai dengan jenis kanker, stadium, dan fase pengobatan." },
        { title: "Keraguan terhadap sumber daya", text: "Keluarga dapat khawatir tentang promosi berlebihan, rujukan yang tidak sesuai, atau akses yang tidak benar-benar tersedia untuk kasusnya." },
        { title: "Komunikasi medis yang rumit", text: "Patologi, pencitraan, tes genetik, rencana pengobatan, dan penelitian memerlukan persiapan serta penerjemahan yang memahami konteks medis." },
        { title: "Prosedur rumah sakit yang asing", text: "Janji temu, pendaftaran, pemeriksaan, rawat inap, pembayaran, evaluasi ulang, dan rujukan dapat terasa tidak jelas bagi pasien internasional." },
        { title: "Pembayaran dan kehidupan di Tiongkok", text: "Cara pembayaran, tempat tinggal, transportasi, pendampingan, makanan, dan dukungan keluarga memengaruhi kelayakan perjalanan." },
        { title: "Tidak tahu langkah berikutnya", text: "Keluarga perlu mengetahui tindakan berikutnya, pertanyaan untuk dokter, dan siapa yang dihubungi bila muncul masalah koordinasi." },
      ],
    },
    servicesTitle: "Apa yang kami koordinasikan",
    servicesBody: "Layanan mencakup konsultasi informasi, manajemen kasus, penerjemahan, komunikasi, dan dukungan praktis. Cakupan layanan disepakati tertulis sebelum layanan berbayar dimulai.",
    strengths: {
      title: "Fokus onkologi, disesuaikan dengan kasus",
      items: [
        { title: "Fokus pada onkologi", text: "Kami berfokus pada pasien kanker internasional yang datang ke Tiongkok, khususnya jalur limfoma dan tumor padat. Dukungan mencakup persiapan rekam medis, komunikasi spesialis, dan koordinasi berkelanjutan." },
        { title: "Kesesuaian lebih penting daripada nama terkenal", text: "Kami membantu mengoordinasikan sumber daya onkologi Guangdong menurut jenis dan stadium kanker, terapi sebelumnya, kondisi saat ini, kebutuhan klinis, dan ketersediaan nyata." },
        { title: "Persiapan diskusi jalur lanjutan", text: "Jika relevan, kami menyusun informasi untuk diskusi terapi target, imunoterapi, terapi sel, obat bispesifik, atau penelitian. Kelayakan, status regulasi, risiko, dan ketersediaan dinilai tim medis." },
      ],
    },
    research: {
      title: "Dukungan untuk memahami peluang penelitian klinis",
      body: "Kami dapat menyiapkan pertanyaan kepada bagian onkologi atau tim penelitian di Tiongkok mengenai evaluasi lebih lanjut untuk penelitian obat, terapi target, imunoterapi, atau terapi sel.",
      steps: [
        "Menyusun rekam medis dan kriteria penelitian publik menjadi pertanyaan untuk tim klinis.",
        "Menyiapkan dan menerjemahkan paket rekam medis yang relevan.",
        "Membantu memahami informasi kelayakan dari tim penelitian.",
        "Mengoordinasikan komunikasi dengan bagian atau tim penelitian terkait.",
        "Mendukung pengaturan praktis sebelum dan setelah perjalanan sesuai kesepakatan.",
      ],
      note: "Kami tidak menilai kelayakan klinis atau menjamin penerimaan. Dokter dan tim penelitian secara independen menentukan kesesuaian serta peluang evaluasi lebih lanjut.",
    },
    team: {
      title: "Dipimpin profesional kesehatan",
      body: "Layanan dipimpin tenaga dengan pengalaman klinis nyata dalam onkologi dan keperawatan, untuk mendukung koordinasi, bukan hanya penerjemahan umum atau pendampingan perjalanan.",
      items: [
        { title: "Latar onkologi dan keperawatan", text: "Latar profesional tim dan sumber daya spesialis terkait mencakup dokter onkologi, profesor, dan pemimpin keperawatan senior." },
        { title: "Pendidikan internasional dan kredensial perawat", text: "Anggota tim keperawatan mencakup profesional dengan pendidikan kesehatan luar negeri, kredensial perawat Tiongkok, dan kredensial Registered Nurse Negara Bagian New York." },
        { title: "Memahami rumah sakit dan keluarga", text: "Pengalaman tersebut mendukung persiapan rekam medis, pemahaman alur rumah sakit, komunikasi dokter, serta perhatian pada kecemasan pasien dan keluarga." },
      ],
      note: "Kredensial mendukung koordinasi, bukan berarti perusahaan menjalankan diagnosis, terapi, atau praktik keperawatan. Janji temu spesialis dan peran setiap profesional dikonfirmasi per kasus.",
    },
    boundaries: {
      title: "Batas layanan kami",
      body: "Kami bukan rumah sakit, klinik, penjual obat, perusahaan asuransi, atau penyedia pengobatan. Kami menyediakan konsultasi informasi, manajemen kasus, koordinasi medis, penerjemahan, dukungan sehari-hari, dan layanan penasihat.",
      note: "Kami tidak menggantikan diagnosis atau pengobatan dokter. Kami membantu pasien memahami, menyiapkan, mengoordinasikan, dan berkomunikasi. Dokter berlisensi, institusi medis, dan tim penelitian secara independen menentukan diagnosis, rekomendasi terapi, rawat inap, dan penerimaan penelitian. Hasil pengobatan berbeda antar pasien dan tidak dijamin perusahaan.",
    },
  },
  ms: {
    label: "Tentang Kami",
    eyebrow: "Mengenali H&C Care",
    title: "Koordinasi onkologi diterajui profesional kesihatan",
    body: `${brand.legalName} / ${brand.zhLegalName} ialah syarikat perunding kesihatan yang menyokong pesakit kanser antarabangsa dan keluarga dalam koordinasi penjagaan di China.`,
    summaryTitle: "Koordinasi onkologi di China untuk pesakit antarabangsa",
    summary: "Diterajui profesional kesihatan, kami membantu memahami sistem kesihatan China, menyediakan rekod, berkomunikasi dengan pasukan onkologi yang sesuai di Guangdong dan Guangzhou, serta mengatur langkah praktikal seterusnya.",
    link: "Kenali syarikat",
    valueTitle: "Tujuan kami",
    value: "Membantu pesakit kanser antarabangsa mencari sumber onkologi di China yang dipercayai, sesuai, dan benar-benar boleh diakses.",
    approach: "Kesukarannya bukan sekadar kewujudan hospital, tetapi cara menilai pilihan, membuat keputusan bermaklumat, dan melaksanakan rancangan. Kami memecahkan urusan rumit kepada langkah jelas yang boleh dilaksanakan dengan susulan koordinasi.",
    challenges: {
      title: "Kesukaran yang kami bantu keluarga hadapi",
      body: "Ketika menghadapi penyakit serius, sistem asing, dan perbezaan bahasa, pesakit memerlukan maklumat jelas serta koordinasi berterusan.",
      items: [
        { title: "Sistem kesihatan yang tidak dikenali", text: "Dari luar negara, sukar menentukan hospital, jabatan, dan doktor yang sesuai dengan jenis kanser, peringkat, dan fasa rawatan semasa." },
        { title: "Keraguan tentang sumber", text: "Keluarga mungkin bimbang tentang promosi berlebihan, rujukan tidak sesuai, atau sumber yang sebenarnya tidak tersedia untuk kes mereka." },
        { title: "Komunikasi perubatan yang rumit", text: "Patologi, pengimejan, ujian genetik, rancangan rawatan, dan penyelidikan memerlukan persediaan serta terjemahan yang memahami konteks perubatan." },
        { title: "Prosedur hospital yang asing", text: "Temu janji, pendaftaran, pemeriksaan, kemasukan, pembayaran, penilaian semula, dan rujukan mungkin tidak jelas kepada pesakit antarabangsa." },
        { title: "Pembayaran dan kehidupan di China", text: "Kaedah bayaran, penginapan, pengangkutan, iringan, makanan, dan sokongan keluarga mempengaruhi kebolehlaksanaan lawatan." },
        { title: "Tidak pasti langkah seterusnya", text: "Keluarga perlu tahu tindakan seterusnya, soalan untuk doktor, dan siapa yang boleh dihubungi apabila timbul isu koordinasi." },
      ],
    },
    servicesTitle: "Apa yang kami koordinasikan",
    servicesBody: "Perkhidmatan merangkumi nasihat maklumat, pengurusan kes, terjemahan, komunikasi, dan sokongan praktikal. Skop dipersetujui secara bertulis sebelum perkhidmatan berbayar bermula.",
    strengths: {
      title: "Fokus onkologi, dipadankan dengan kes",
      items: [
        { title: "Fokus pada onkologi", text: "Kami memfokuskan pesakit kanser antarabangsa yang datang ke China, khususnya laluan limfoma dan tumor pepejal. Sokongan merangkumi persediaan rekod, komunikasi pakar, dan koordinasi berterusan." },
        { title: "Kesesuaian lebih penting daripada nama terkenal", text: "Kami membantu mengkoordinasikan sumber onkologi Guangdong berdasarkan jenis dan peringkat kanser, rawatan terdahulu, keadaan semasa, keperluan klinikal, dan ketersediaan sebenar." },
        { title: "Persediaan perbincangan laluan lanjutan", text: "Jika berkaitan, kami menyusun maklumat untuk perbincangan terapi sasaran, imunoterapi, terapi sel, ubat bispesifik, atau penyelidikan. Kelayakan, status kawal selia, risiko, dan ketersediaan dinilai pasukan perubatan." },
      ],
    },
    research: {
      title: "Sokongan meneroka peluang penyelidikan klinikal",
      body: "Kami boleh menyediakan pertanyaan kepada jabatan onkologi atau pasukan penyelidikan di China tentang penilaian lanjut untuk kajian ubat, terapi sasaran, imunoterapi, atau terapi sel.",
      steps: [
        "Menyusun rekod sedia ada dan kriteria kajian awam menjadi soalan untuk pasukan klinikal.",
        "Menyediakan dan menterjemah pakej rekod perubatan berkaitan.",
        "Membantu memahami maklumat kelayakan daripada pasukan penyelidikan.",
        "Mengkoordinasikan komunikasi dengan jabatan atau pasukan penyelidikan berkaitan.",
        "Menyokong urusan praktikal sebelum dan selepas perjalanan mengikut persetujuan.",
      ],
      note: "Kami tidak menilai kelayakan klinikal atau menjamin penyertaan. Doktor dan pasukan penyelidikan menentukan kesesuaian dan peluang penilaian lanjut secara bebas.",
    },
    team: {
      title: "Diterajui profesional kesihatan",
      body: "Perkhidmatan diterajui mereka yang mempunyai latar klinikal sebenar dalam onkologi dan kejururawatan untuk menyokong koordinasi, bukan sekadar terjemahan umum atau iringan perjalanan.",
      items: [
        { title: "Latar onkologi dan kejururawatan", text: "Latar profesional pasukan dan sumber pakar berkaitan merangkumi doktor onkologi, profesor, dan pemimpin kejururawatan kanan." },
        { title: "Pendidikan antarabangsa dan kelayakan jururawat", text: "Anggota pasukan kejururawatan termasuk profesional dengan pendidikan kesihatan luar negara, kelayakan jururawat China, dan kelayakan Registered Nurse Negeri New York." },
        { title: "Memahami hospital dan keluarga", text: "Pengalaman ini menyokong persediaan rekod, kefahaman aliran hospital, komunikasi doktor, serta perhatian kepada kebimbangan pesakit dan keluarga." },
      ],
      note: "Kelayakan menyokong koordinasi dan tidak bermakna syarikat menyediakan diagnosis, rawatan, atau amalan kejururawatan. Temu janji pakar dan peranan setiap profesional disahkan bagi setiap kes.",
    },
    boundaries: {
      title: "Batas perkhidmatan kami",
      body: "Kami bukan hospital, klinik, penjual ubat, syarikat insurans, atau penyedia rawatan. Kami menyediakan nasihat maklumat, pengurusan kes, koordinasi perubatan, terjemahan, sokongan kehidupan harian, dan perkhidmatan perundingan.",
      note: "Kami tidak menggantikan diagnosis atau rawatan doktor. Kami membantu pesakit memahami, bersedia, mengkoordinasi, dan berkomunikasi. Doktor berlesen, institusi perubatan, dan pasukan penyelidikan menentukan diagnosis, cadangan rawatan, kemasukan, dan penyertaan kajian secara bebas. Hasil rawatan berbeza dan tidak dijamin syarikat.",
    },
  },
};
