import { contact, type Locale } from "./site";

type Card = { title: string; text: string; image?: string; imageAlt?: string };
type Step = { title: string; text: string };
type Expert = { name: string; role: string; text: string; image: string };

export type SiteContent = {
  nav: { home: string; treatments: string; experts: string; hospitals: string; cases: string; journey: string; contact: string };
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    body: string;
    primary: string;
    secondary: string;
    trust: Card[];
  };
  sections: {
    focus: { eyebrow: string; title: string; body: string; cards: Card[] };
    treatments: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
    experts: { eyebrow: string; title: string; body: string; people: Expert[] };
    hospitals: { eyebrow: string; title: string; body: string; cards: Card[] };
    cases: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
    journey: { eyebrow: string; title: string; body: string; steps: Step[]; documentsTitle: string; documents: string[] };
    contact: { eyebrow: string; title: string; body: string; email: string; whatsapp: string; privacy: string };
    disclaimer: { title: string; body: string };
  };
};

const baseExperts = {
  cai: {
    image: "/images/cai-qichun.jpg",
    enRole: "Chief Physician · Oncology Center Director · Master's Supervisor",
    huangRole: "Chief Physician · Professor · PhD Supervisor · Stem Cell Transplant Ward Director",
  },
  huang: {
    image: "/images/huang-huiqiang.jpg",
  },
  xie: {
    image: "/images/xie-guoming.png",
    enRole: "Chief Physician · Oncology Department · Solid Tumor Medical Oncology",
  },
};

const caseImages = {
  relapsedDlbcl: {
    image: "/images/cases/relapsed-dlbcl-response.jpg",
    imageAlt: "Anonymized PET/CT follow-up images for a relapsed DLBCL case",
  },
  elderlyCnsLymphoma: {
    image: "/images/cases/elderly-cns-lymphoma-response.jpg",
    imageAlt: "Anonymized MRI comparison images for an elderly CNS lymphoma case",
  },
};

export const content: Record<Locale, SiteContent> = {
  en: {
    nav: { home: "Home", treatments: "Treatments", experts: "Experts", hospitals: "Hospitals", cases: "Cases", journey: "Journey", contact: "Contact" },
    seo: {
      title: "Guidance Health | Lymphoma and Immunotherapy Access in Guangzhou",
      description: "Clinically led oncology support for international patients exploring lymphoma care, immunotherapy, and hospital-based treatment pathways in Guangzhou.",
    },
    hero: {
      eyebrow: "International lymphoma and oncology access",
      title: "Clinically led cancer care pathways in Guangzhou",
      highlight: "for lymphoma and selected solid tumors",
      body: "Guidance Health helps international patients and families obtain expert case review, hospital-based planning, and access guidance for lymphoma care, cellular therapy, immunotherapy, and targeted treatment options.",
      primary: "Send medical records",
      secondary: "Review the patient journey",
      trust: [
        { title: "Hospital-based team", text: "Care coordination is grounded in real oncology workflows with physicians and oncology nurses involved in review and planning." },
        { title: "Lymphoma focus", text: "The first clinical focus is lymphoma, with additional pathways for selected solid tumors and immunotherapy evaluation." },
        { title: "Conservative guidance", text: "Treatment direction and cost range depend on diagnosis, prior therapy, condition, and physician assessment." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "Why patients contact us",
        title: "A practical bridge from records to specialist review",
        body: "Patients outside mainland China often need a faster, clearer way to understand whether advanced treatment in Guangzhou is worth exploring. We start with records, not promises.",
        cards: [
          { title: "Expert-led review", text: "Medical records are organized for specialist review before any treatment direction is discussed." },
          { title: "Advanced treatment access", text: "Options may include CAR-T, immunotherapy, targeted therapy, transplantation-related consultation, or combination planning when clinically appropriate." },
          { title: "International coordination", text: "We help patients understand documents, timing, online review, estimated cost range, and the next step before travel." },
        ],
      },
      treatments: {
        eyebrow: "Treatment scope",
        title: "Lymphoma first, with careful immunotherapy assessment",
        body: "Treatment is never selected by marketing preference. It must match diagnosis, stage, prior treatment, organ function, infection risk, and physician judgment.",
        cards: [
          { title: "Lymphoma care", text: "Review for relapsed, refractory, or complex lymphoma cases, including hematology and oncology consultation pathways." },
          { title: "CAR-T and cellular therapy", text: "Cellular therapy may be discussed for eligible hematologic malignancies after clinical and laboratory assessment." },
          { title: "Solid tumor immunotherapy", text: "Selected solid tumor cases may be reviewed for immunotherapy, targeted therapy, ADC, or clinical strategy options." },
          { title: "Supportive planning", text: "Families receive a practical view of preparation, expected review steps, and questions to clarify before traveling." },
        ],
        note: "Costs in China may be lower than in some treatment markets, but final estimates vary by diagnosis, therapy, hospital stay, tests, complications, and medication plan.",
      },
      experts: {
        eyebrow: "Clinical expertise",
        title: "Specialist profiles patients can verify",
        body: "The first proof layer is transparent: real doctors, hospital resources, and a medically responsible review process.",
        people: [
          { name: "Dr. Cai Qichun", role: baseExperts.cai.enRole, image: baseExperts.cai.image, text: "Senior oncologist with long experience in lymphoma, precision immunotherapy, cellular therapy, targeted therapy translation, and individualized oncology care." },
          { name: "Professor Huang Huiqiang", role: baseExperts.cai.huangRole, image: baseExperts.huang.image, text: "Lymphoma and hematologic malignancy specialist with deep experience in NK/T-cell lymphoma, systemic therapy, and autologous hematopoietic stem cell transplantation." },
          { name: "Dr. Xie Guoming", role: baseExperts.xie.enRole, image: baseExperts.xie.image, text: "Senior medical oncologist with more than 40 years of clinical experience. His work focuses on chemotherapy, immunotherapy, targeted therapy, endocrine therapy, and precision treatment planning for lung, breast, esophageal, gastric, colorectal, hepatobiliary-pancreatic, genitourinary, gynecologic, and other solid tumors." },
        ],
      },
      hospitals: {
        eyebrow: "Guangzhou treatment setting",
        title: "Real hospital environments, not abstract referrals",
        body: "The patient pathway is built around Guangzhou hospital resources, inpatient capability, oncology nursing, and specialist collaboration.",
        cards: [
          { title: "Clifford Hospital", text: "International-facing hospital environment with inpatient oncology resources and practical support for overseas patients." },
          { title: "Specialist collaboration", text: "Complex cases may involve senior oncology specialists and multidisciplinary input when medically appropriate." },
          { title: "Before travel clarity", text: "Patients receive a preliminary direction and estimated cost range before deciding whether to come to Guangzhou." },
        ],
      },
      cases: {
        eyebrow: "Clinical experience",
        title: "Representative de-identified case observations",
        body: "These examples are included to help patients understand the kinds of complex questions our team may review. They are not advertisements for a guaranteed result.",
        cards: [
          { title: "Relapsed DLBCL", text: "A patient with multiple relapses after prior chemotherapy achieved complete remission following CAR-T therapy, with disease control observed during follow-up.", ...caseImages.relapsedDlbcl },
          { title: "Elderly CNS lymphoma", text: "An elderly patient who was not suitable for intensive therapy showed tumor reduction and neurological improvement after an integrated immunotherapy-based plan.", ...caseImages.elderlyCnsLymphoma },
          { title: "Refractory lymphoma", text: "A refractory lymphoma case that had failed several prior treatments achieved a meaningful response after combination cellular therapy and targeted strategies." },
        ],
        note: "Cases are de-identified clinical observations. Diagnosis, treatment eligibility, response, complications, and survival differ for every patient and must be assessed by qualified physicians.",
      },
      journey: {
        eyebrow: "Patient journey",
        title: "A clear first step before any travel decision",
        body: "Start by sending records through email or WhatsApp. We review completeness, arrange online discussion when appropriate, and clarify the next clinical step.",
        steps: [
          { title: "Contact Hugo Yao", text: "Send a brief message with diagnosis, country or region, and the main question you want answered." },
          { title: "Share records", text: "Send available medical records by email or WhatsApp. Do not send emergency requests through this website." },
          { title: "Completeness check", text: "The team reviews whether the records are sufficient for a meaningful oncology review." },
          { title: "Online review", text: "When appropriate, an online discussion is arranged to clarify medical history and treatment goals." },
          { title: "Preliminary direction", text: "Patients receive a conservative treatment direction and estimated price range, not a guaranteed outcome." },
        ],
        documentsTitle: "Documents to prepare",
        documents: ["Current diagnosis and medical summary", "Pathology report", "Imaging reports and recent examination results", "Genetic or molecular testing, if available", "Prior treatment history, including chemotherapy, immunotherapy, targeted therapy, radiotherapy, transplantation, or cell therapy"],
      },
      contact: {
        eyebrow: "Contact",
        title: "Send records for initial review",
        body: `Contact ${contact.name} by WhatsApp or email. Please include your diagnosis, country or region, current condition, and available medical records.`,
        email: "Email medical records",
        whatsapp: "WhatsApp Hugo",
        privacy: "Medical information sent by email or WhatsApp is used only to understand the case and arrange review. Do not send emergency or urgent-care requests through this site.",
      },
      disclaimer: {
        title: "Medical disclaimer",
        body: "This website provides general information and coordination support for international patients. It does not replace diagnosis or treatment by licensed physicians. Treatment eligibility, outcomes, and costs vary by individual case and cannot be guaranteed.",
      },
    },
  },
  "zh-hant": {
    nav: { home: "首頁", treatments: "治療方向", experts: "專家", hospitals: "醫院", cases: "病例", journey: "就診流程", contact: "聯絡" },
    seo: { title: "Guidance Health | 廣州淋巴瘤與免疫治療就醫協助", description: "面向境外患者的臨床團隊協助，提供淋巴瘤、免疫治療及廣州醫院治療路徑的病歷初審與就醫安排。" },
    hero: {
      eyebrow: "境外淋巴瘤與腫瘤就醫協助",
      title: "由臨床團隊主導的廣州腫瘤治療路徑",
      highlight: "聚焦淋巴瘤及部分實體瘤",
      body: "Guidance Health 協助境外患者和家屬完成專家病歷初審、醫院治療規劃及廣州就醫準備，重點包括淋巴瘤、細胞治療、免疫治療和靶向治療等方向。",
      primary: "發送病歷資料",
      secondary: "查看就診流程",
      trust: [
        { title: "醫院內臨床團隊", text: "服務基於真實腫瘤科工作流程，由醫生和腫瘤專科護理人員參與評估與規劃。" },
        { title: "以淋巴瘤為重點", text: "首要方向是淋巴瘤，同時為部分實體瘤提供免疫治療評估路徑。" },
        { title: "保守可信的建議", text: "治療方向與費用區間取決於診斷、既往治療、身體情況及醫生評估。" },
      ],
    },
    sections: {
      focus: {
        eyebrow: "患者為何聯絡我們",
        title: "從病歷資料到專家初審的務實橋樑",
        body: "境外患者常需要更清晰、更快地判斷是否值得來廣州進一步治療。我們從病歷資料開始，而不是從承諾開始。",
        cards: [
          { title: "專家參與評估", text: "在討論治療方向前，會先整理病歷資料供專科醫生評估。" },
          { title: "先進治療可及性", text: "在適合情況下，可討論 CAR-T、免疫治療、靶向治療、移植相關諮詢或聯合治療策略。" },
          { title: "國際患者協調", text: "協助患者了解資料準備、時間安排、線上評估、費用區間及赴穗前下一步。" },
        ],
      },
      treatments: {
        eyebrow: "治療範圍",
        title: "淋巴瘤優先，審慎評估免疫治療",
        body: "治療方案不能由市場文案決定，而必須符合診斷、分期、既往治療、器官功能、感染風險和醫生判斷。",
        cards: [
          { title: "淋巴瘤診療", text: "針對復發、難治或複雜淋巴瘤病例，提供血液腫瘤和腫瘤專科評估路徑。" },
          { title: "CAR-T 與細胞治療", text: "符合條件的血液腫瘤患者，可在臨床和實驗室評估後討論細胞治療可能性。" },
          { title: "實體瘤免疫治療", text: "部分實體瘤病例可評估免疫治療、靶向治療、ADC 或綜合策略。" },
          { title: "支持性規劃", text: "為患者和家屬提供赴穗前需要準備與釐清的實際問題。" },
        ],
        note: "在部分治療市場相比，中國治療費用可能較低，但最終估算會因診斷、方案、住院、檢查、併發症和用藥而不同。",
      },
      experts: {
        eyebrow: "臨床專長",
        title: "患者可以核實的專家資料",
        body: "第一層信任證明是透明的：真實醫生、醫院資源，以及負責任的醫療評估流程。",
        people: [
          { name: "蔡綺純醫生", role: "主任醫師 · 腫瘤中心主任 · 暨南大學碩士生導師", image: baseExperts.cai.image, text: "長期從事淋巴瘤、精準免疫治療、細胞治療、靶向藥轉化及個體化腫瘤診療。" },
          { name: "黃慧強教授", role: "主任醫師 · 教授 · 博士生導師 · 幹細胞移植病區主任", image: baseExperts.huang.image, text: "專注淋巴瘤及血液腫瘤，尤其在 NK/T 細胞淋巴瘤、系統治療和自體造血幹細胞移植方面經驗豐富。" },
          { name: "謝國明醫生", role: "主任醫師 · 腫瘤科 · 實體瘤內科治療", image: baseExperts.xie.image, text: "從事腫瘤診療四十餘年，擅長肺癌、乳腺癌、食管癌、胃癌、結直腸癌、肝膽胰腺癌、泌尿生殖腫瘤、婦科腫瘤等實體瘤的化療、免疫靶向治療、內分泌治療及個體化精準治療規劃。" },
        ],
      },
      hospitals: {
        eyebrow: "廣州治療環境",
        title: "真實醫院場景，而非抽象轉介",
        body: "患者路徑依託廣州醫院資源、住院能力、腫瘤專科護理及專家協作。",
        cards: [
          { title: "祈福醫院", text: "具備面向國際患者的醫院環境、腫瘤住院資源及實際照護支持。" },
          { title: "專家協作", text: "複雜病例可在醫學需要下引入高年資腫瘤專家和多學科意見。" },
          { title: "赴穗前先釐清", text: "患者在決定是否來廣州前，可先獲得初步方向與費用區間。" },
        ],
      },
      cases: {
        eyebrow: "臨床經驗",
        title: "經脫敏處理的代表性病例觀察",
        body: "這些例子用於幫助患者理解我們可能評估的複雜問題類型，並非療效廣告或結果承諾。",
        cards: [
          { title: "復發 DLBCL", text: "一名既往接受多線化療後多次復發的患者，在 CAR-T 治療後達到完全緩解，隨訪中觀察到疾病控制。", ...caseImages.relapsedDlbcl },
          { title: "高齡中樞神經系統淋巴瘤", text: "一名不適合強烈治療的高齡患者，在整合免疫治療方案後，觀察到腫瘤縮小及神經功能改善。", ...caseImages.elderlyCnsLymphoma },
          { title: "難治性淋巴瘤", text: "一名多線治療失敗的難治性淋巴瘤患者，在細胞治療與靶向策略聯合後取得有意義的治療反應。" },
        ],
        note: "病例均為脫敏臨床觀察。診斷、是否適合治療、反應、併發症和生存情況因人而異，必須由合資格醫生評估。",
      },
      journey: {
        eyebrow: "就診流程",
        title: "在決定出行前，先完成清晰的第一步",
        body: "可先通過電郵或 WhatsApp 發送病歷。我們會查看資料完整性，必要時安排線上討論，釐清下一步臨床方向。",
        steps: [
          { title: "聯絡 Hugo Yao", text: "簡要說明診斷、所在國家或地區，以及最想解決的問題。" },
          { title: "提供病歷", text: "通過電郵或 WhatsApp 發送現有醫療資料。緊急情況請勿通過本網站處理。" },
          { title: "資料完整性檢查", text: "團隊會先判斷資料是否足以進行有意義的腫瘤專科初審。" },
          { title: "線上評估", text: "在合適情況下，安排線上討論以了解病史和治療目標。" },
          { title: "初步方向", text: "患者會獲得保守的治療方向與費用區間，而非療效承諾。" },
        ],
        documentsTitle: "建議準備資料",
        documents: ["目前診斷與病情摘要", "病理報告", "影像報告及近期檢查結果", "基因或分子檢測，如有", "既往治療史，包括化療、免疫治療、靶向治療、放療、移植或細胞治療"],
      },
      contact: {
        eyebrow: "聯絡",
        title: "發送病歷作初步評估",
        body: `請通過 WhatsApp 或電郵聯絡 ${contact.name}，並附上診斷、所在地區、目前狀況和已有病歷。`,
        email: "電郵病歷",
        whatsapp: "WhatsApp 聯絡",
        privacy: "通過電郵或 WhatsApp 發送的醫療資料僅用於了解病例及安排評估。緊急或急症需求請勿通過本網站提交。",
      },
      disclaimer: {
        title: "醫療免責聲明",
        body: "本網站僅提供一般資訊及境外患者協調支持，不能替代持牌醫生的診斷或治療。是否適合治療、治療結果及費用均因個案而異，不能作出保證。",
      },
    },
  },
  ru: {
    nav: { home: "Главная", treatments: "Лечение", experts: "Эксперты", hospitals: "Больницы", cases: "Кейсы", journey: "Путь пациента", contact: "Контакты" },
    seo: { title: "Guidance Health | Лимфома и иммунотерапия в Гуанчжоу", description: "Клиническая команда помогает иностранным пациентам получить предварительный разбор случая, планирование лечения лимфомы и консультации по иммунотерапии в Гуанчжоу." },
    hero: {
      eyebrow: "Доступ к онкологической помощи в Гуанчжоу",
      title: "Клинически ориентированный маршрут лечения",
      highlight: "для лимфомы и отдельных солидных опухолей",
      body: "Guidance Health помогает иностранным пациентам организовать экспертный разбор медицинских документов, понять возможные варианты лечения и подготовиться к больничному маршруту в Гуанчжоу.",
      primary: "Отправить документы",
      secondary: "Посмотреть путь пациента",
      trust: [
        { title: "Команда при больнице", text: "Координация основана на реальных онкологических процессах с участием врачей и онкологических медсестер." },
        { title: "Фокус на лимфоме", text: "Основное направление — лимфома; отдельные солидные опухоли могут быть рассмотрены для оценки иммунотерапии." },
        { title: "Осторожные рекомендации", text: "Направление лечения и диапазон стоимости зависят от диагноза, предыдущего лечения и оценки врача." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "Зачем пациенты обращаются",
        title: "Практический мост от документов к экспертному разбору",
        body: "Пациентам за пределами материкового Китая часто нужен понятный способ оценить, стоит ли рассматривать лечение в Гуанчжоу. Мы начинаем с документов, а не с обещаний.",
        cards: [
          { title: "Экспертный разбор", text: "Документы подготавливаются для профильной оценки до обсуждения возможного лечения." },
          { title: "Современные подходы", text: "При клинической уместности могут обсуждаться CAR-T, иммунотерапия, таргетная терапия или комбинированная стратегия." },
          { title: "Международная координация", text: "Мы объясняем документы, сроки, онлайн-разбор, примерный диапазон стоимости и следующий шаг до поездки." },
        ],
      },
      treatments: {
        eyebrow: "Направления лечения",
        title: "Сначала лимфома, затем осторожная оценка иммунотерапии",
        body: "Выбор лечения должен соответствовать диагнозу, стадии, предыдущей терапии, функциям органов, рискам инфекции и мнению врача.",
        cards: [
          { title: "Лечение лимфомы", text: "Разбор рецидивирующих, рефрактерных и сложных случаев лимфомы." },
          { title: "CAR-T и клеточная терапия", text: "Клеточная терапия может обсуждаться для подходящих пациентов после клинической и лабораторной оценки." },
          { title: "Иммунотерапия солидных опухолей", text: "Некоторые случаи могут быть рассмотрены для иммунотерапии, таргетной терапии, ADC или другой стратегии." },
          { title: "Планирование поддержки", text: "Семья получает практическое понимание подготовки и вопросов перед поездкой." },
        ],
        note: "Стоимость лечения в Китае может быть ниже, чем на некоторых рынках, но итоговая оценка зависит от диагноза, схемы, госпитализации, анализов, осложнений и лекарств.",
      },
      experts: {
        eyebrow: "Клиническая экспертиза",
        title: "Профили специалистов, которые можно проверить",
        body: "Первый уровень доверия — реальные врачи, больничные ресурсы и ответственная процедура медицинского разбора.",
        people: [
          { name: "Д-р Цай Цичунь", role: baseExperts.cai.enRole, image: baseExperts.cai.image, text: "Опытный онколог в области лимфомы, прецизионной иммунотерапии, клеточной терапии и индивидуализированного лечения." },
          { name: "Профессор Хуан Хуйцян", role: baseExperts.cai.huangRole, image: baseExperts.huang.image, text: "Специалист по лимфоме и гематологическим опухолям с опытом системной терапии и трансплантации аутологичных гемопоэтических стволовых клеток." },
          { name: "Д-р Се Гомин", role: "Главный врач · Отделение онкологии · Лекарственное лечение солидных опухолей", image: baseExperts.xie.image, text: "Опытный медицинский онколог с более чем 40-летним клиническим стажем. Его работа включает химиотерапию, иммунотерапию, таргетную терапию, эндокринную терапию и точное планирование лечения рака легкого, молочной железы, пищевода, желудка, колоректального рака, опухолей гепатобилиарно-панкреатической зоны, мочеполовой системы, гинекологических и других солидных опухолей." },
        ],
      },
      hospitals: {
        eyebrow: "Медицинская среда Гуанчжоу",
        title: "Реальные больничные условия, а не абстрактное направление",
        body: "Маршрут пациента связан с больничными ресурсами Гуанчжоу, стационаром, онкологическим уходом и сотрудничеством специалистов.",
        cards: [
          { title: "Clifford Hospital", text: "Больничная среда, ориентированная на международных пациентов, с онкологическими стационарными ресурсами." },
          { title: "Сотрудничество специалистов", text: "Сложные случаи могут обсуждаться с опытными онкологами и мультидисциплинарной командой." },
          { title: "Ясность до поездки", text: "Пациент получает предварительное направление и диапазон стоимости до решения о поездке." },
        ],
      },
      cases: {
        eyebrow: "Клинический опыт",
        title: "Обезличенные примеры клинических наблюдений",
        body: "Эти примеры помогают понять, какие сложные вопросы может рассматривать команда. Они не являются обещанием результата.",
        cards: [
          { title: "Рецидив DLBCL", text: "У пациента с несколькими рецидивами после химиотерапии после CAR-T была отмечена полная ремиссия, с контролем заболевания во время наблюдения.", ...caseImages.relapsedDlbcl },
          { title: "Пожилой пациент с лимфомой ЦНС", text: "У пожилого пациента, которому не подходила интенсивная терапия, после интегрированного иммунотерапевтического плана отмечались уменьшение опухоли и неврологическое улучшение.", ...caseImages.elderlyCnsLymphoma },
          { title: "Рефрактерная лимфома", text: "У пациента после нескольких неудачных линий лечения был получен значимый ответ после сочетания клеточной терапии и таргетных стратегий." },
        ],
        note: "Это обезличенные клинические наблюдения. Диагноз, пригодность к лечению, ответ, осложнения и прогноз различаются у каждого пациента и оцениваются врачами.",
      },
      journey: {
        eyebrow: "Путь пациента",
        title: "Понятный первый шаг до решения о поездке",
        body: "Отправьте документы по email или WhatsApp. Мы проверим полноту, при необходимости организуем онлайн-обсуждение и уточним следующий клинический шаг.",
        steps: [
          { title: "Связаться с Hugo Yao", text: "Кратко укажите диагноз, страну или регион и главный вопрос." },
          { title: "Передать документы", text: "Отправьте имеющиеся медицинские документы. Срочные случаи не направляйте через сайт." },
          { title: "Проверка полноты", text: "Команда оценивает, достаточно ли информации для содержательного разбора." },
          { title: "Онлайн-разбор", text: "При необходимости проводится онлайн-беседа для уточнения истории болезни." },
          { title: "Предварительное направление", text: "Пациент получает осторожное направление и диапазон стоимости, а не гарантию результата." },
        ],
        documentsTitle: "Документы для подготовки",
        documents: ["Текущий диагноз и медицинское резюме", "Патологическое заключение", "Отчеты визуализации и недавние анализы", "Генетические или молекулярные тесты, если есть", "История предыдущего лечения"],
      },
      contact: {
        eyebrow: "Контакты",
        title: "Отправьте документы для первичного разбора",
        body: `Свяжитесь с ${contact.name} по WhatsApp или email. Укажите диагноз, страну или регион, текущее состояние и приложите документы.`,
        email: "Отправить email",
        whatsapp: "WhatsApp",
        privacy: "Медицинская информация используется только для понимания случая и организации разбора. Не отправляйте срочные обращения через сайт.",
      },
      disclaimer: {
        title: "Медицинское уведомление",
        body: "Сайт предоставляет общую информацию и координационную поддержку. Он не заменяет диагностику или лечение у лицензированного врача. Возможность лечения, результаты и стоимость не гарантируются.",
      },
    },
  },
  ar: {
    nav: { home: "الرئيسية", treatments: "العلاجات", experts: "الخبراء", hospitals: "المستشفيات", cases: "حالات", journey: "رحلة المريض", contact: "تواصل" },
    seo: { title: "Guidance Health | علاج اللمفوما والمناعة في قوانغتشو", description: "دعم سريري للمرضى الدوليين لاستكشاف علاج اللمفوما والعلاج المناعي ومسارات العلاج داخل المستشفيات في قوانغتشو." },
    hero: {
      eyebrow: "وصول دولي إلى علاج الأورام",
      title: "مسارات علاج سرطان يقودها فريق سريري في قوانغتشو",
      highlight: "لللمفوما وبعض الأورام الصلبة",
      body: "تساعد Guidance Health المرضى الدوليين وعائلاتهم على الحصول على مراجعة طبية أولية، وتخطيط علاجي داخل المستشفى، وإرشاد حول علاج اللمفوما والعلاج الخلوي والمناعي والموجه.",
      primary: "إرسال السجلات الطبية",
      secondary: "عرض رحلة المريض",
      trust: [
        { title: "فريق داخل المستشفى", text: "يعتمد التنسيق على مسارات أورام فعلية بمشاركة أطباء وممرضين مختصين بالأورام." },
        { title: "تركيز على اللمفوما", text: "التركيز الأول هو اللمفوما، مع تقييم مختار لبعض الأورام الصلبة للعلاج المناعي." },
        { title: "إرشاد محافظ", text: "يعتمد الاتجاه العلاجي ونطاق التكلفة على التشخيص والعلاج السابق والحالة وتقييم الطبيب." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "لماذا يتواصل المرضى معنا",
        title: "جسر عملي من السجلات إلى مراجعة المتخصص",
        body: "يحتاج المرضى خارج الصين غالبا إلى طريقة أوضح لمعرفة ما إذا كان العلاج في قوانغتشو يستحق الدراسة. نبدأ بالسجلات الطبية لا بالوعود.",
        cards: [
          { title: "مراجعة يقودها متخصصون", text: "يتم تنظيم السجلات الطبية لمراجعة الاختصاصيين قبل مناقشة أي اتجاه علاجي." },
          { title: "إمكانية الوصول لعلاجات متقدمة", text: "قد تشمل الخيارات CAR-T أو العلاج المناعي أو العلاج الموجه أو التخطيط المركب عند ملاءمته طبيا." },
          { title: "تنسيق دولي", text: "نوضح الوثائق، والتوقيت، والمراجعة عبر الإنترنت، ونطاق التكلفة المتوقع، والخطوة التالية قبل السفر." },
        ],
      },
      treatments: {
        eyebrow: "نطاق العلاج",
        title: "اللمفوما أولا مع تقييم حذر للعلاج المناعي",
        body: "لا يتم اختيار العلاج بناء على التسويق، بل يجب أن يطابق التشخيص والمرحلة والعلاجات السابقة ووظائف الأعضاء ومخاطر العدوى وتقدير الطبيب.",
        cards: [
          { title: "رعاية اللمفوما", text: "مراجعة حالات اللمفوما المنتكسة أو المقاومة أو المعقدة." },
          { title: "CAR-T والعلاج الخلوي", text: "يمكن مناقشة العلاج الخلوي للحالات المؤهلة بعد تقييم سريري ومخبري." },
          { title: "العلاج المناعي للأورام الصلبة", text: "قد تراجع بعض الحالات للعلاج المناعي أو الموجه أو ADC أو خيارات استراتيجية أخرى." },
          { title: "تخطيط داعم", text: "تحصل العائلة على فهم عملي للتحضير والأسئلة المهمة قبل السفر." },
        ],
        note: "قد تكون التكاليف في الصين أقل من بعض الأسواق، لكن التقدير النهائي يختلف حسب التشخيص والخطة والإقامة والفحوصات والمضاعفات والأدوية.",
      },
      experts: {
        eyebrow: "الخبرة السريرية",
        title: "ملفات خبراء يمكن للمرضى التحقق منها",
        body: "طبقة الثقة الأولى واضحة: أطباء حقيقيون، موارد مستشفى، وعملية مراجعة طبية مسؤولة.",
        people: [
          { name: "د. تساي تشيتشون", role: baseExperts.cai.enRole, image: baseExperts.cai.image, text: "طبيبة أورام ذات خبرة طويلة في اللمفوما والعلاج المناعي الدقيق والعلاج الخلوي والرعاية الفردية." },
          { name: "البروفيسور هوانغ هويتشيانغ", role: baseExperts.cai.huangRole, image: baseExperts.huang.image, text: "خبير في اللمفوما والأورام الدموية، وله خبرة في العلاج الجهازي وزراعة الخلايا الجذعية الذاتية." },
          { name: "د. شيه غومينغ", role: "استشاري أورام · قسم الأورام · علاج الأورام الصلبة", image: baseExperts.xie.image, text: "طبيب أورام بخبرة سريرية تزيد على 40 عاما. يركز عمله على العلاج الكيميائي، والعلاج المناعي، والعلاج الموجه، والعلاج الهرموني، والتخطيط العلاجي الدقيق لسرطان الرئة والثدي والمريء والمعدة والقولون والمستقيم وأورام الكبد والمرارة والبنكرياس والجهاز البولي والتناسلي والأورام النسائية وغيرها من الأورام الصلبة." },
        ],
      },
      hospitals: {
        eyebrow: "بيئة العلاج في قوانغتشو",
        title: "بيئات مستشفى حقيقية وليست إحالات مجردة",
        body: "يعتمد مسار المريض على موارد مستشفيات قوانغتشو، والقدرة على التنويم، وتمريض الأورام، وتعاون المتخصصين.",
        cards: [
          { title: "Clifford Hospital", text: "بيئة مستشفى موجهة للمرضى الدوليين مع موارد أورام وتنويم ودعم عملي." },
          { title: "تعاون متخصص", text: "يمكن مناقشة الحالات المعقدة مع أطباء أورام كبار وفريق متعدد التخصصات عند الحاجة." },
          { title: "وضوح قبل السفر", text: "يحصل المرضى على اتجاه أولي ونطاق تكلفة قبل اتخاذ قرار القدوم إلى قوانغتشو." },
        ],
      },
      cases: {
        eyebrow: "خبرة سريرية",
        title: "ملاحظات حالات ممثلة بعد إزالة الهوية",
        body: "تساعد هذه الأمثلة المرضى على فهم أنواع الأسئلة المعقدة التي قد يراجعها الفريق. وهي ليست وعدا بنتيجة علاجية.",
        cards: [
          { title: "انتكاس DLBCL", text: "مريض تعرض لانتكاسات متعددة بعد العلاج الكيميائي، ولوحظت لديه استجابة كاملة بعد CAR-T مع استمرار السيطرة على المرض خلال المتابعة.", ...caseImages.relapsedDlbcl },
          { title: "لمفوما الجهاز العصبي المركزي لدى مريض مسن", text: "مريض مسن غير مناسب للعلاج المكثف، لوحظ لديه انخفاض في حجم الورم وتحسن عصبي بعد خطة قائمة على العلاج المناعي.", ...caseImages.elderlyCnsLymphoma },
          { title: "لمفوما مقاومة", text: "حالة لمفوما مقاومة فشلت معها عدة علاجات سابقة، وحققت استجابة ذات معنى بعد الجمع بين العلاج الخلوي والاستراتيجيات الموجهة." },
        ],
        note: "هذه ملاحظات سريرية منزوعة الهوية. التشخيص والأهلية والاستجابة والمضاعفات والبقاء تختلف من مريض لآخر ويجب تقييمها من قبل أطباء مؤهلين.",
      },
      journey: {
        eyebrow: "رحلة المريض",
        title: "خطوة أولى واضحة قبل قرار السفر",
        body: "ابدأ بإرسال السجلات عبر البريد الإلكتروني أو WhatsApp. نراجع اكتمالها، ونرتب نقاشا عبر الإنترنت عند الحاجة، ونوضح الخطوة السريرية التالية.",
        steps: [
          { title: "التواصل مع Hugo Yao", text: "أرسل رسالة مختصرة تشمل التشخيص والبلد أو المنطقة والسؤال الرئيسي." },
          { title: "إرسال السجلات", text: "أرسل السجلات المتاحة عبر البريد أو WhatsApp. لا ترسل الحالات الطارئة عبر هذا الموقع." },
          { title: "فحص اكتمال المعلومات", text: "يراجع الفريق ما إذا كانت السجلات كافية لمراجعة مفيدة." },
          { title: "مراجعة عبر الإنترنت", text: "عند الملاءمة، يتم ترتيب نقاش لتوضيح التاريخ المرضي والأهداف." },
          { title: "اتجاه أولي", text: "يتلقى المريض اتجاها محافظا ونطاق تكلفة، وليس ضمانا للنتيجة." },
        ],
        documentsTitle: "الوثائق المطلوبة",
        documents: ["التشخيص الحالي والملخص الطبي", "تقرير الباثولوجيا", "تقارير التصوير والفحوصات الحديثة", "الفحوصات الجينية أو الجزيئية إن وجدت", "تاريخ العلاجات السابقة"],
      },
      contact: {
        eyebrow: "تواصل",
        title: "أرسل السجلات للمراجعة الأولية",
        body: `تواصل مع ${contact.name} عبر WhatsApp أو البريد الإلكتروني، مع التشخيص والبلد والحالة الحالية والسجلات المتاحة.`,
        email: "إرسال بريد إلكتروني",
        whatsapp: "WhatsApp",
        privacy: "تستخدم المعلومات الطبية المرسلة فقط لفهم الحالة وترتيب المراجعة. لا ترسل طلبات طارئة عبر الموقع.",
      },
      disclaimer: {
        title: "إخلاء مسؤولية طبية",
        body: "يقدم هذا الموقع معلومات عامة ودعم تنسيق للمرضى الدوليين. لا يحل محل تشخيص أو علاج الطبيب المرخص. الأهلية والنتائج والتكاليف تختلف ولا يمكن ضمانها.",
      },
    },
  },
  id: {
    nav: { home: "Beranda", treatments: "Terapi", experts: "Dokter", hospitals: "Rumah sakit", cases: "Kasus", journey: "Alur pasien", contact: "Kontak" },
    seo: { title: "Guidance Health | Akses Terapi Limfoma dan Imunoterapi di Guangzhou", description: "Dukungan tim klinis untuk pasien internasional yang mempertimbangkan perawatan limfoma, imunoterapi, dan jalur rumah sakit di Guangzhou." },
    hero: {
      eyebrow: "Akses onkologi internasional",
      title: "Jalur perawatan kanker yang dipimpin tim klinis di Guangzhou",
      highlight: "untuk limfoma dan sebagian tumor padat",
      body: "Guidance Health membantu pasien internasional mendapatkan peninjauan rekam medis, arahan perawatan berbasis rumah sakit, dan panduan akses untuk limfoma, terapi sel, imunoterapi, dan terapi target.",
      primary: "Kirim rekam medis",
      secondary: "Lihat alur pasien",
      trust: [
        { title: "Tim berbasis rumah sakit", text: "Koordinasi berakar pada alur kerja onkologi nyata dengan dokter dan perawat onkologi terlibat dalam evaluasi." },
        { title: "Fokus limfoma", text: "Fokus pertama adalah limfoma, dengan jalur tambahan untuk sebagian tumor padat dan evaluasi imunoterapi." },
        { title: "Arahan konservatif", text: "Arah terapi dan kisaran biaya bergantung pada diagnosis, terapi sebelumnya, kondisi, dan penilaian dokter." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "Mengapa pasien menghubungi kami",
        title: "Jembatan praktis dari rekam medis ke tinjauan spesialis",
        body: "Pasien di luar Tiongkok daratan sering membutuhkan cara yang lebih jelas untuk menilai apakah perawatan di Guangzhou layak dipertimbangkan. Kami mulai dari rekam medis, bukan janji hasil.",
        cards: [
          { title: "Tinjauan spesialis", text: "Rekam medis disiapkan untuk tinjauan spesialis sebelum arah terapi dibahas." },
          { title: "Akses terapi lanjut", text: "Pilihan dapat mencakup CAR-T, imunoterapi, terapi target, konsultasi transplantasi, atau strategi kombinasi bila sesuai." },
          { title: "Koordinasi internasional", text: "Kami membantu memahami dokumen, waktu, tinjauan online, kisaran biaya, dan langkah sebelum perjalanan." },
        ],
      },
      treatments: {
        eyebrow: "Ruang lingkup terapi",
        title: "Limfoma terlebih dahulu, dengan evaluasi imunoterapi yang hati-hati",
        body: "Terapi harus sesuai dengan diagnosis, stadium, terapi sebelumnya, fungsi organ, risiko infeksi, dan penilaian dokter.",
        cards: [
          { title: "Perawatan limfoma", text: "Tinjauan untuk kasus limfoma kambuh, refrakter, atau kompleks." },
          { title: "CAR-T dan terapi sel", text: "Terapi sel dapat dibahas untuk pasien yang memenuhi kriteria setelah evaluasi klinis dan laboratorium." },
          { title: "Imunoterapi tumor padat", text: "Sebagian kasus dapat ditinjau untuk imunoterapi, terapi target, ADC, atau strategi klinis lain." },
          { title: "Perencanaan pendukung", text: "Keluarga mendapat gambaran praktis tentang persiapan dan pertanyaan penting sebelum bepergian." },
        ],
        note: "Biaya di Tiongkok dapat lebih rendah dibanding beberapa pasar, tetapi estimasi akhir bervariasi menurut diagnosis, terapi, rawat inap, pemeriksaan, komplikasi, dan obat.",
      },
      experts: {
        eyebrow: "Keahlian klinis",
        title: "Profil dokter yang dapat diverifikasi pasien",
        body: "Lapisan kepercayaan pertama adalah transparan: dokter nyata, sumber daya rumah sakit, dan proses peninjauan medis yang bertanggung jawab.",
        people: [
          { name: "Dr. Cai Qichun", role: baseExperts.cai.enRole, image: baseExperts.cai.image, text: "Onkolog senior dengan pengalaman panjang dalam limfoma, imunoterapi presisi, terapi sel, terapi target, dan perawatan individual." },
          { name: "Prof. Huang Huiqiang", role: baseExperts.cai.huangRole, image: baseExperts.huang.image, text: "Spesialis limfoma dan keganasan hematologi dengan pengalaman dalam limfoma NK/T, terapi sistemik, dan transplantasi sel punca autologus." },
          { name: "Dr. Xie Guoming", role: "Dokter konsultan · Departemen Onkologi · Onkologi medis tumor padat", image: baseExperts.xie.image, text: "Onkolog medis senior dengan pengalaman klinis lebih dari 40 tahun. Fokus kerjanya meliputi kemoterapi, imunoterapi, terapi target, terapi endokrin, dan perencanaan terapi presisi untuk kanker paru, payudara, esofagus, lambung, kolorektal, hepatobilier-pankreas, genitourinaria, ginekologi, dan tumor padat lainnya." },
        ],
      },
      hospitals: {
        eyebrow: "Lingkungan perawatan Guangzhou",
        title: "Lingkungan rumah sakit nyata, bukan rujukan abstrak",
        body: "Jalur pasien dibangun di atas sumber daya rumah sakit Guangzhou, kemampuan rawat inap, keperawatan onkologi, dan kolaborasi spesialis.",
        cards: [
          { title: "Clifford Hospital", text: "Lingkungan rumah sakit yang siap melayani pasien internasional dengan sumber daya onkologi dan rawat inap." },
          { title: "Kolaborasi spesialis", text: "Kasus kompleks dapat melibatkan dokter senior dan tim multidisiplin bila sesuai secara medis." },
          { title: "Kejelasan sebelum perjalanan", text: "Pasien menerima arahan awal dan kisaran biaya sebelum memutuskan datang ke Guangzhou." },
        ],
      },
      cases: {
        eyebrow: "Pengalaman klinis",
        title: "Observasi kasus representatif yang telah dianonimkan",
        body: "Contoh ini membantu pasien memahami jenis pertanyaan kompleks yang dapat ditinjau tim. Ini bukan jaminan hasil terapi.",
        cards: [
          { title: "DLBCL kambuh", text: "Seorang pasien dengan beberapa kekambuhan setelah kemoterapi mencapai remisi lengkap setelah CAR-T, dengan kontrol penyakit yang diamati saat tindak lanjut.", ...caseImages.relapsedDlbcl },
          { title: "Limfoma SSP pada pasien lanjut usia", text: "Pasien lanjut usia yang tidak cocok untuk terapi intensif menunjukkan pengecilan tumor dan perbaikan neurologis setelah rencana berbasis imunoterapi.", ...caseImages.elderlyCnsLymphoma },
          { title: "Limfoma refrakter", text: "Kasus limfoma refrakter yang gagal dengan beberapa terapi sebelumnya menunjukkan respons bermakna setelah kombinasi terapi sel dan strategi target." },
        ],
        note: "Kasus ini adalah observasi klinis yang telah dianonimkan. Diagnosis, kelayakan terapi, respons, komplikasi, dan kelangsungan hidup berbeda pada setiap pasien dan harus dinilai dokter.",
      },
      journey: {
        eyebrow: "Alur pasien",
        title: "Langkah pertama yang jelas sebelum memutuskan perjalanan",
        body: "Mulailah dengan mengirim rekam medis melalui email atau WhatsApp. Kami memeriksa kelengkapan, mengatur diskusi online bila sesuai, dan menjelaskan langkah klinis berikutnya.",
        steps: [
          { title: "Hubungi Hugo Yao", text: "Kirim pesan singkat berisi diagnosis, negara atau wilayah, dan pertanyaan utama." },
          { title: "Bagikan rekam medis", text: "Kirim dokumen yang tersedia melalui email atau WhatsApp. Jangan gunakan situs ini untuk keadaan darurat." },
          { title: "Cek kelengkapan", text: "Tim menilai apakah dokumen cukup untuk tinjauan onkologi yang bermakna." },
          { title: "Tinjauan online", text: "Bila sesuai, diskusi online diatur untuk memperjelas riwayat medis dan tujuan terapi." },
          { title: "Arahan awal", text: "Pasien menerima arahan konservatif dan kisaran biaya, bukan jaminan hasil." },
        ],
        documentsTitle: "Dokumen yang disiapkan",
        documents: ["Diagnosis saat ini dan ringkasan medis", "Laporan patologi", "Laporan pencitraan dan hasil pemeriksaan terbaru", "Tes genetik atau molekuler bila ada", "Riwayat terapi sebelumnya"],
      },
      contact: {
        eyebrow: "Kontak",
        title: "Kirim rekam medis untuk tinjauan awal",
        body: `Hubungi ${contact.name} melalui WhatsApp atau email. Sertakan diagnosis, negara atau wilayah, kondisi saat ini, dan rekam medis yang tersedia.`,
        email: "Email rekam medis",
        whatsapp: "WhatsApp",
        privacy: "Informasi medis digunakan hanya untuk memahami kasus dan mengatur tinjauan. Jangan kirim permintaan darurat melalui situs ini.",
      },
      disclaimer: {
        title: "Penafian medis",
        body: "Situs ini memberikan informasi umum dan dukungan koordinasi. Situs ini tidak menggantikan diagnosis atau terapi oleh dokter berlisensi. Kelayakan, hasil, dan biaya tidak dapat dijamin.",
      },
    },
  },
  ms: {
    nav: { home: "Utama", treatments: "Rawatan", experts: "Pakar", hospitals: "Hospital", cases: "Kes", journey: "Perjalanan pesakit", contact: "Hubungi" },
    seo: { title: "Guidance Health | Akses Rawatan Limfoma dan Imunoterapi di Guangzhou", description: "Sokongan pasukan klinikal untuk pesakit antarabangsa yang menilai rawatan limfoma, imunoterapi dan laluan hospital di Guangzhou." },
    hero: {
      eyebrow: "Akses onkologi antarabangsa",
      title: "Laluan rawatan kanser dipimpin pasukan klinikal di Guangzhou",
      highlight: "untuk limfoma dan sebahagian tumor pepejal",
      body: "Guidance Health membantu pesakit antarabangsa mendapatkan semakan rekod perubatan, perancangan berasaskan hospital dan panduan akses untuk limfoma, terapi sel, imunoterapi dan rawatan sasaran.",
      primary: "Hantar rekod perubatan",
      secondary: "Lihat perjalanan pesakit",
      trust: [
        { title: "Pasukan dalam hospital", text: "Koordinasi berpandukan aliran kerja onkologi sebenar dengan penglibatan doktor dan jururawat onkologi." },
        { title: "Fokus limfoma", text: "Fokus utama ialah limfoma, dengan laluan tambahan untuk sebahagian tumor pepejal dan penilaian imunoterapi." },
        { title: "Panduan berhati-hati", text: "Arah rawatan dan julat kos bergantung pada diagnosis, rawatan terdahulu, keadaan pesakit dan penilaian doktor." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "Mengapa pesakit menghubungi kami",
        title: "Jambatan praktikal daripada rekod kepada semakan pakar",
        body: "Pesakit di luar tanah besar China sering memerlukan cara yang lebih jelas untuk menilai sama ada rawatan di Guangzhou wajar diterokai. Kami bermula dengan rekod, bukan janji.",
        cards: [
          { title: "Semakan dipimpin pakar", text: "Rekod perubatan disusun untuk semakan pakar sebelum arah rawatan dibincangkan." },
          { title: "Akses rawatan lanjut", text: "Pilihan mungkin termasuk CAR-T, imunoterapi, terapi sasaran, konsultasi berkaitan transplantasi atau strategi gabungan jika sesuai." },
          { title: "Koordinasi antarabangsa", text: "Kami membantu memahami dokumen, masa, semakan dalam talian, julat kos dan langkah sebelum perjalanan." },
        ],
      },
      treatments: {
        eyebrow: "Skop rawatan",
        title: "Limfoma dahulu, dengan penilaian imunoterapi yang teliti",
        body: "Rawatan mesti sepadan dengan diagnosis, tahap penyakit, rawatan terdahulu, fungsi organ, risiko jangkitan dan pertimbangan doktor.",
        cards: [
          { title: "Rawatan limfoma", text: "Semakan untuk kes limfoma berulang, refraktori atau kompleks." },
          { title: "CAR-T dan terapi sel", text: "Terapi sel boleh dibincangkan untuk pesakit yang sesuai selepas penilaian klinikal dan makmal." },
          { title: "Imunoterapi tumor pepejal", text: "Sebahagian kes boleh disemak untuk imunoterapi, terapi sasaran, ADC atau strategi klinikal lain." },
          { title: "Perancangan sokongan", text: "Keluarga mendapat gambaran praktikal tentang persediaan dan soalan penting sebelum perjalanan." },
        ],
        note: "Kos di China mungkin lebih rendah berbanding sesetengah pasaran, tetapi anggaran akhir berbeza mengikut diagnosis, rawatan, kemasukan hospital, ujian, komplikasi dan ubat.",
      },
      experts: {
        eyebrow: "Kepakaran klinikal",
        title: "Profil pakar yang boleh disahkan pesakit",
        body: "Lapisan kepercayaan pertama adalah jelas: doktor sebenar, sumber hospital dan proses semakan perubatan yang bertanggungjawab.",
        people: [
          { name: "Dr. Cai Qichun", role: baseExperts.cai.enRole, image: baseExperts.cai.image, text: "Pakar onkologi kanan dengan pengalaman dalam limfoma, imunoterapi presisi, terapi sel, terapi sasaran dan rawatan individu." },
          { name: "Prof. Huang Huiqiang", role: baseExperts.cai.huangRole, image: baseExperts.huang.image, text: "Pakar limfoma dan keganasan hematologi dengan pengalaman dalam limfoma NK/T, terapi sistemik dan transplantasi sel stem autologus." },
          { name: "Dr. Xie Guoming", role: "Pakar perunding · Jabatan Onkologi · Onkologi perubatan tumor pepejal", image: baseExperts.xie.image, text: "Pakar onkologi perubatan kanan dengan pengalaman klinikal lebih 40 tahun. Fokus beliau merangkumi kemoterapi, imunoterapi, terapi sasaran, terapi endokrin dan perancangan rawatan presisi untuk kanser paru-paru, payudara, esofagus, perut, kolorektal, hepatobiliari-pankreas, genitourinari, ginekologi dan tumor pepejal lain." },
        ],
      },
      hospitals: {
        eyebrow: "Persekitaran rawatan Guangzhou",
        title: "Persekitaran hospital sebenar, bukan rujukan abstrak",
        body: "Laluan pesakit dibina atas sumber hospital Guangzhou, keupayaan wad, kejururawatan onkologi dan kerjasama pakar.",
        cards: [
          { title: "Clifford Hospital", text: "Persekitaran hospital yang bersedia untuk pesakit antarabangsa dengan sumber onkologi dan wad." },
          { title: "Kerjasama pakar", text: "Kes kompleks boleh melibatkan pakar onkologi kanan dan pasukan pelbagai disiplin apabila sesuai." },
          { title: "Kejelasan sebelum perjalanan", text: "Pesakit menerima arah awal dan julat kos sebelum memutuskan untuk datang ke Guangzhou." },
        ],
      },
      cases: {
        eyebrow: "Pengalaman klinikal",
        title: "Pemerhatian kes wakil yang telah dinyahidentiti",
        body: "Contoh ini membantu pesakit memahami jenis persoalan kompleks yang boleh disemak oleh pasukan. Ia bukan jaminan hasil rawatan.",
        cards: [
          { title: "DLBCL berulang", text: "Seorang pesakit dengan beberapa kali kambuh selepas kemoterapi mencapai remisi lengkap selepas CAR-T, dengan kawalan penyakit diperhatikan semasa susulan.", ...caseImages.relapsedDlbcl },
          { title: "Limfoma CNS pada pesakit warga emas", text: "Pesakit warga emas yang tidak sesuai untuk rawatan intensif menunjukkan pengecilan tumor dan peningkatan neurologi selepas pelan berasaskan imunoterapi.", ...caseImages.elderlyCnsLymphoma },
          { title: "Limfoma refraktori", text: "Kes limfoma refraktori yang gagal beberapa rawatan terdahulu menunjukkan respons bermakna selepas gabungan terapi sel dan strategi sasaran." },
        ],
        note: "Kes ini ialah pemerhatian klinikal yang dinyahidentiti. Diagnosis, kelayakan rawatan, respons, komplikasi dan kelangsungan hidup berbeza bagi setiap pesakit dan mesti dinilai doktor.",
      },
      journey: {
        eyebrow: "Perjalanan pesakit",
        title: "Langkah pertama yang jelas sebelum keputusan perjalanan",
        body: "Mulakan dengan menghantar rekod melalui email atau WhatsApp. Kami menyemak kelengkapan, mengatur perbincangan dalam talian jika sesuai, dan menjelaskan langkah klinikal seterusnya.",
        steps: [
          { title: "Hubungi Hugo Yao", text: "Hantar mesej ringkas dengan diagnosis, negara atau wilayah dan soalan utama." },
          { title: "Kongsi rekod", text: "Hantar rekod tersedia melalui email atau WhatsApp. Jangan gunakan laman ini untuk kecemasan." },
          { title: "Semakan kelengkapan", text: "Pasukan menilai sama ada rekod mencukupi untuk semakan onkologi bermakna." },
          { title: "Semakan dalam talian", text: "Jika sesuai, perbincangan dalam talian diatur untuk memperjelas sejarah dan matlamat rawatan." },
          { title: "Arah awal", text: "Pesakit menerima arah berhati-hati dan julat kos, bukan jaminan hasil." },
        ],
        documentsTitle: "Dokumen untuk disediakan",
        documents: ["Diagnosis semasa dan ringkasan perubatan", "Laporan patologi", "Laporan imej dan keputusan pemeriksaan terkini", "Ujian genetik atau molekul jika ada", "Sejarah rawatan terdahulu"],
      },
      contact: {
        eyebrow: "Hubungi",
        title: "Hantar rekod untuk semakan awal",
        body: `Hubungi ${contact.name} melalui WhatsApp atau email. Sertakan diagnosis, negara atau wilayah, keadaan semasa dan rekod tersedia.`,
        email: "Email rekod",
        whatsapp: "WhatsApp",
        privacy: "Maklumat perubatan digunakan hanya untuk memahami kes dan mengatur semakan. Jangan hantar permintaan kecemasan melalui laman ini.",
      },
      disclaimer: {
        title: "Penafian perubatan",
        body: "Laman ini menyediakan maklumat umum dan sokongan koordinasi. Ia tidak menggantikan diagnosis atau rawatan oleh doktor berlesen. Kelayakan, hasil dan kos tidak boleh dijamin.",
      },
    },
  },
};
