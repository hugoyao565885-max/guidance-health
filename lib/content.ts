import { brand, contact, type Locale } from "./site";

type Card = { title: string; text: string };
type Step = { title: string; text: string };
type Expert = { name: string; role: string; text: string; image: string };
type MembershipPlan = { name: string; fit: string; items: string[] };

export const mainSectionKeys = ["membership", "oncology", "mdt", "experts", "hospitals", "journey", "contact"] as const;
export const footerSectionKeys = ["privacy", "terms"] as const;
export const sectionKeys = [...mainSectionKeys, ...footerSectionKeys] as const;

export type MainSectionKey = (typeof mainSectionKeys)[number];
export type FooterSectionKey = (typeof footerSectionKeys)[number];
export type SectionKey = (typeof sectionKeys)[number];

export type SiteContent = {
  nav: Record<"home" | SectionKey, string>;
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
    membership: {
      eyebrow: string;
      title: string;
      body: string;
      plans: MembershipPlan[];
      modulesTitle: string;
      modules: Card[];
      modulesNote: string;
      note: string;
    };
    oncology: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
    mdt: { eyebrow: string; title: string; body: string; cards: Card[]; questionsTitle: string; questions: string[]; note: string };
    experts: { eyebrow: string; title: string; body: string; people: Expert[]; note: string };
    hospitals: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
    journey: { eyebrow: string; title: string; body: string; steps: Step[]; documentsTitle: string; documents: string[] };
    contact: { eyebrow: string; title: string; body: string; email: string; whatsapp: string; privacy: string };
    privacy: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
    terms: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
    disclaimer: { title: string; body: string };
  };
};

const experts = {
  cai: "/images/cai-qichun.jpg",
  huang: "/images/huang-huiqiang.jpg",
  xie: "/images/xie-guoming.png",
};

export const content: Record<Locale, SiteContent> = {
  en: {
    nav: {
      home: "Home",
      membership: "Membership",
      oncology: "Oncology Coordination",
      mdt: "MDT Resources",
      experts: "Experts",
      hospitals: "Hospitals",
      journey: "Journey",
      contact: "Contact",
      privacy: "Privacy Notice",
      terms: "Service Boundaries",
    },
    seo: {
      title: `${brand.name} | International Oncology Case Management in Guangzhou`,
      description:
        "Hong Kong-based membership case management and oncology coordination for international patients considering hospital-based treatment pathways in Guangzhou.",
    },
    hero: {
      eyebrow: "Hong Kong health advisory for international patients",
      title: "Oncology case management",
      highlight: "for international patients in Guangzhou",
      body:
        `${brand.name} helps international oncology patients organize records, coordinate MDT resources and appropriate clinical teams, and manage the practical pathway before, during, and after hospital care in Guangzhou.`,
      primary: "Request membership consultation",
      secondary: "View the patient journey",
      trust: [
        { title: "Annual membership model", text: "A service management fee covers case organization, coordination, reminders, and family communication support." },
        { title: "Lymphoma MDT focus", text: "Our strongest resource layer is lymphoma and complex oncology coordination across Guangdong and Guangzhou." },
        { title: "Clear service boundaries", text: "We do not provide diagnosis, treatment, emergency care, insurance, or guaranteed medical outcomes." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "What we coordinate",
        title: "A practical service layer around hospital-based cancer care",
        body:
          "Patients often need more than a hospital appointment. They need organized records, clear questions, continuity across treatment stages, and someone who can keep the timeline moving.",
        cards: [
          { title: "Case file management", text: "We help organize pathology, imaging, prior treatment, medication history, and key questions for review." },
          { title: "Clinical team coordination", text: "We coordinate communication with suitable oncology, lymphoma, MDT, and surgical teams when clinically appropriate." },
          { title: "Longitudinal follow-up", text: "We support reminders, repeat review preparation, travel planning context, and family communication across the care pathway." },
        ],
      },
      membership: {
        eyebrow: "Membership services",
        title: "Annual case management for international oncology patients",
        body:
          "Membership fees cover case management, coordination, and advisory support. Hospital fees, physician fees, tests, medicines, treatment, surgery, and travel costs are separate.",
        plans: [
          {
            name: "Care Navigation Membership",
            fit: "For patients who need records organized and a clear first pathway.",
            items: ["Medical record checklist", "Case file organization", "Appointment and communication coordination", "Follow-up reminders"],
          },
          {
            name: "Oncology Coordination Membership",
            fit: "For complex oncology cases that need specialist review questions and treatment-stage coordination.",
            items: ["MDT and specialist question preparation", "Treatment reassessment timeline", "Clinical team communication coordination", "Case summary and next-step tracking"],
          },
          {
            name: "Concierge Case Management",
            fit: "For families who need long-term coordination across treatment stages.",
            items: ["Dedicated case manager", "Cross-stage care timeline", "Admission, discharge, and review reminders", "Family communication support"],
          },
        ],
        modulesTitle: "Special support modules",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "Focused preparation for lymphoma, relapsed or refractory disease, and Guangdong or Guangzhou specialist discussion." },
          { title: "Immune Recovery Support", text: "Supportive immune-status record organization, physician advisory follow-up, nutrition and lifestyle coordination, and quarterly review for stable or recovery-stage patients." },
          { title: "Surgical Pathway Coordination", text: "Communication support when reassessment suggests that a surgical pathway may be discussed with appropriate teams." },
        ],
        modulesNote:
          "Support modules are coordination and advisory services, not medical packages or treatment commitments. Any clinical decision must be made by licensed physicians and receiving institutions.",
        note:
          "Membership is not insurance, a medical package, or a prepaid treatment plan. Acceptance, diagnosis, treatment eligibility, surgery, cost, and outcomes are determined by hospitals and licensed physicians.",
      },
      oncology: {
        eyebrow: "Oncology coordination",
        title: "From immunotherapy review to surgical team coordination",
        body:
          "We help families prepare the information needed to discuss hospital-based pathways. Treatment direction must always be decided by the receiving hospital and qualified physicians.",
        cards: [
          { title: "Lymphoma first", text: "Record preparation and coordination for lymphoma, relapsed or refractory disease, and complex hematologic oncology questions." },
          { title: "Immunotherapy pathway questions", text: "Preparation for discussions about immunotherapy, targeted therapy, cellular therapy, and reassessment timing when clinically relevant." },
          { title: "Surgical pathway coordination", text: "When tumor control or reassessment suggests surgery may be discussed, we help coordinate communication with appropriate surgical teams." },
          { title: "Family-facing support", text: "We translate practical steps into a timeline families can understand, without replacing medical advice." },
        ],
        note:
          "We do not select treatment for patients. We help prepare the case and coordinate communication so licensed physicians can assess it.",
      },
      mdt: {
        eyebrow: "Lymphoma MDT resources",
        title: "Guangdong-focused multidisciplinary coordination",
        body:
          "Our strongest clinical network is in lymphoma and complex oncology resources in Guangdong, especially Guangzhou. We prepare cases so specialist discussion can be more focused.",
        cards: [
          { title: "Before MDT", text: "Clarify diagnosis, pathology, imaging, prior therapy, current condition, and the questions that need specialist input." },
          { title: "During coordination", text: "Coordinate meeting preparation, information flow, and communication with relevant clinical teams." },
          { title: "After review", text: "Summarize administrative next steps, missing documents, possible hospital pathway questions, and follow-up timing." },
        ],
        questionsTitle: "Case management questions we help prepare",
        questions: [
          "Is the pathology and imaging package complete enough for a meaningful specialist review?",
          "Does a relapsed or refractory lymphoma case need MDT discussion before travel?",
          "After immunotherapy, what reassessment information is needed before discussing surgery?",
          "Which documents should be translated or organized before approaching a hospital team?",
          "What follow-up schedule should the family prepare for after discharge or online review?",
        ],
        note:
          "MDT coordination means administrative and communication support. It does not guarantee that a specific doctor, hospital, treatment, or surgery will accept the case.",
      },
      experts: {
        eyebrow: "Clinical background",
        title: "Specialist profiles that support patient confidence",
        body:
          "These profiles help patients understand the clinical background behind the Guangzhou oncology pathways. They do not imply that H&C Care provides medical practice in Hong Kong.",
        people: [
          {
            name: "Dr. Cai Qichun",
            role: "Chief Physician · Oncology Center Director · Master's Supervisor",
            image: experts.cai,
            text: "Senior oncologist with long experience in lymphoma, precision immunotherapy, cellular therapy, targeted therapy translation, and individualized oncology care.",
          },
          {
            name: "Professor Huang Huiqiang",
            role: "Chief Physician · Professor · PhD Supervisor · Stem Cell Transplant Ward Director",
            image: experts.huang,
            text: "Lymphoma and hematologic malignancy specialist with experience in rare lymphoma subtypes, systemic therapy, and autologous hematopoietic stem cell transplantation.",
          },
          {
            name: "Dr. Xie Guoming",
            role: "Chief Physician · Oncology Department · Solid Tumor Medical Oncology",
            image: experts.xie,
            text: "Senior medical oncologist with more than 40 years of clinical experience in chemotherapy, immunotherapy, targeted therapy, endocrine therapy, and precision treatment planning for solid tumors.",
          },
        ],
        note:
          "Doctor information is provided as clinical background for Guangzhou-related pathways. It is not an offer of diagnosis, treatment, or prescribing services in Hong Kong.",
      },
      hospitals: {
        eyebrow: "Guangzhou setting",
        title: "Real hospital pathways, coordinated with practical support",
        body:
          "Patients considering Guangzhou often need clarity about documents, admission preparation, inpatient expectations, reassessment timing, and family logistics.",
        cards: [
          { title: "Hospital-based pathways", text: "Coordination is built around real hospital workflows rather than abstract referrals." },
          { title: "International patient preparation", text: "We help families understand records, timing, travel context, admission steps, and follow-up preparation." },
          { title: "Before-travel clarity", text: "Families receive a practical coordination plan before deciding whether to proceed with hospital communication." },
        ],
        note:
          `${brand.name} is operated by ${brand.legalName}. This website is not the official website of any hospital unless expressly stated.`,
      },
      journey: {
        eyebrow: "Patient journey",
        title: "A managed path from first contact to follow-up",
        body:
          "The first step is not to promise treatment. It is to understand the case, organize the records, and decide what information is needed for a meaningful hospital discussion.",
        steps: [
          { title: "Initial contact", text: "Share diagnosis, country or region, current stage, and the main question the family needs answered." },
          { title: "Membership consultation", text: "We clarify whether case management membership is appropriate and what level of support is needed." },
          { title: "Record organization", text: "The case file is organized around diagnosis, pathology, imaging, prior treatment, medicines, and current status." },
          { title: "Team coordination", text: "We coordinate communication with suitable oncology, MDT, or surgical teams when appropriate." },
          { title: "Follow-up management", text: "We help track next steps, missing documents, reassessment timing, discharge planning, and family communication." },
        ],
        documentsTitle: "Documents to prepare",
        documents: ["Current diagnosis and medical summary", "Pathology report", "Imaging reports and recent test results", "Genetic or molecular testing, if available", "Prior treatment history and medication list", "Current symptoms, performance status, and infection history"],
      },
      contact: {
        eyebrow: "Contact",
        title: "Request a membership consultation",
        body:
          `Contact ${contact.name} by WhatsApp or email. Please include the patient's diagnosis, country or region, current status, and the main coordination question. Do not send emergency requests through this website.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp Hugo",
        privacy:
          "Medical information sent by email or WhatsApp is used to understand the case and arrange coordination. It may be shared with relevant medical teams outside Hong Kong only for case preparation and review.",
      },
      privacy: {
        eyebrow: "Privacy notice",
        title: "How we handle patient and family information",
        body:
          `${brand.name} receives sensitive medical and personal information only for case preparation, membership consultation, and coordination support.`,
        cards: [
          { title: "What we collect", text: "Diagnosis, medical reports, imaging summaries, treatment history, contact details, region, family contact information, and questions submitted to us." },
          { title: "Why we use it", text: "To organize the case, assess whether coordination is practical, communicate with relevant teams, and manage follow-up reminders." },
          { title: "Who may receive it", text: "Relevant hospitals, doctors, nurses, administrative coordinators, translators, or case support partners involved in the requested pathway." },
          { title: "Your rights", text: "Patients or authorized family members may request access, correction, or deletion where practical by contacting us by email." },
        ],
        note:
          "Email and WhatsApp may not be suitable for emergencies or highly time-sensitive clinical instructions. Do not use this website for emergency care.",
      },
      terms: {
        eyebrow: "Service boundaries",
        title: "What H&C Care does and does not provide",
        body:
          "Our service is case management and coordination. We are not a Hong Kong clinic, hospital, insurance product, emergency service, or provider of diagnosis or treatment.",
        cards: [
          { title: "Included in membership", text: "Administrative case management, document organization, communication coordination, timeline reminders, family support, and pathway preparation." },
          { title: "Not included", text: "Hospital fees, physician fees, medical tests, medicines, treatment, surgery, travel, accommodation, translation charged by third parties, or emergency services." },
          { title: "Medical decisions", text: "Diagnosis, treatment eligibility, admission, surgery, prescriptions, costs, and outcomes are decided by hospitals and licensed physicians." },
          { title: "No guarantees", text: "We do not guarantee acceptance by any hospital or doctor, treatment availability, surgical opportunity, outcome, survival, remission, or cost savings." },
        ],
        note:
          "Formal service details should be confirmed in a written membership agreement before payment.",
      },
      disclaimer: {
        title: "Medical disclaimer",
        body:
          `${brand.name} provides general information, membership-based case management, and coordination support. It does not replace diagnosis or treatment by licensed physicians. Eligibility, outcomes, and costs vary by individual case and cannot be guaranteed.`,
      },
    },
  },

  "zh-hant": {
    nav: {
      home: "首頁",
      membership: "會員服務",
      oncology: "腫瘤協調",
      mdt: "MDT 資源",
      experts: "專家背景",
      hospitals: "醫院資源",
      journey: "服務流程",
      contact: "聯絡",
      privacy: "私隱聲明",
      terms: "服務邊界",
    },
    seo: {
      title: `${brand.name} | 境外腫瘤患者個案管理與廣州醫療協調`,
      description: "香港健康顧問公司，為境外腫瘤患者提供會員制個案管理、病歷整理、廣州腫瘤團隊協調及淋巴瘤 MDT 資源對接。",
    },
    hero: {
      eyebrow: "香港健康顧問 · 境外患者個案管理",
      title: "會員制腫瘤個案管理",
      highlight: "連接病歷、MDT 資源與廣州醫院治療路徑",
      body:
        `${brand.name} 協助境外腫瘤患者和家屬整理病歷、準備專家溝通問題、協調合適的臨床團隊，並在赴穗前後提供持續個案管理支持。`,
      primary: "申請會員諮詢",
      secondary: "查看服務流程",
      trust: [
        { title: "年度會員模式", text: "會員服務費用覆蓋個案整理、溝通協調、提醒、家屬溝通等服務管理內容。" },
        { title: "淋巴瘤 MDT 重點", text: "我們最核心的資源集中在廣東及廣州的淋巴瘤與複雜腫瘤協調。" },
        { title: "清晰服務邊界", text: "我們不提供診斷、治療、急症服務、保險或任何醫療結果保證。" },
      ],
    },
    sections: {
      focus: {
        eyebrow: "我們協調什麼",
        title: "圍繞醫院腫瘤治療路徑的實務服務層",
        body: "很多境外患者需要的不只是一次掛號，而是病歷整理、問題梳理、治療階段銜接、家屬溝通和隨訪時間線管理。",
        cards: [
          { title: "個案檔案管理", text: "協助整理病理、影像、既往治療、用藥史和需要專家回答的核心問題。" },
          { title: "臨床團隊協調", text: "在醫學上合適時，協調腫瘤、淋巴瘤、MDT 和手術團隊之間的溝通。" },
          { title: "長期隨訪支持", text: "協助復查提醒、再次評估準備、出行背景說明和家屬溝通。" },
        ],
      },
      membership: {
        eyebrow: "會員服務",
        title: "面向境外腫瘤患者的年度個案管理",
        body: "會員費用僅覆蓋個案管理、協調與諮詢支持。醫院費、醫生費、檢查、藥物、治療、手術和出行費用均另行計算。",
        plans: [
          {
            name: "Care Navigation Membership",
            fit: "適合需要病歷整理和第一步就醫路徑的患者。",
            items: ["病歷資料清單", "個案檔案整理", "預約及溝通協調", "復查和隨訪提醒"],
          },
          {
            name: "Oncology Coordination Membership",
            fit: "適合需要專家評估問題準備與治療階段協調的複雜腫瘤個案。",
            items: ["MDT 及專家問題準備", "治療復評節奏整理", "臨床團隊溝通協調", "個案摘要及下一步追蹤"],
          },
          {
            name: "Concierge Case Management",
            fit: "適合需要跨治療階段長期協調的家庭。",
            items: ["專屬個案管理人員", "跨階段個案時間線", "入院、出院及復查提醒", "家屬溝通支持"],
          },
        ],
        modulesTitle: "專項支持模組",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "針對淋巴瘤、復發難治或複雜個案，協助準備廣東及廣州專家討論資料。" },
          { title: "Immune Recovery Support", text: "穩定期或康復期患者的免疫狀態資料整理、醫師支持性諮詢跟進、營養與生活管理建議協調、季度復盤。" },
          { title: "Surgical Pathway Coordination", text: "在復評結果提示可討論手術路徑時，協助與合適團隊進行溝通準備。" },
        ],
        modulesNote: "專項模組屬於協調與諮詢支持，不是醫療套餐或治療承諾。任何臨床決策均由持牌醫生及接診機構判斷。",
        note: "會員服務不是保險、醫療套餐或預付治療計劃。是否接收、診斷、治療資格、手術、費用和結果均由醫院及持牌醫生決定。",
      },
      oncology: {
        eyebrow: "腫瘤協調",
        title: "從免疫治療評估到手術團隊溝通銜接",
        body: "我們協助家屬準備與醫院治療路徑討論相關的資料。治療方向必須由接診醫院和合資格醫生決定。",
        cards: [
          { title: "淋巴瘤優先", text: "協助復發、難治或複雜淋巴瘤個案整理資料及協調溝通。" },
          { title: "免疫治療路徑問題", text: "協助準備免疫治療、靶向治療、細胞治療及復評時間等討論問題。" },
          { title: "手術路徑協調", text: "在腫瘤控制或復評結果提示可討論手術時，協助與合適手術團隊溝通。" },
          { title: "面向家屬的支持", text: "把複雜流程整理成家屬可理解的時間線，但不替代醫生建議。" },
        ],
        note: "我們不替患者選擇治療方案，而是整理個案並協調溝通，讓持牌醫生作出評估。",
      },
      mdt: {
        eyebrow: "淋巴瘤 MDT 資源",
        title: "聚焦廣東及廣州的多學科協調",
        body: "我們最強的臨床資源網絡集中在廣東，尤其是廣州的淋巴瘤和複雜腫瘤方向。我們協助把個案準備得更適合專家討論。",
        cards: [
          { title: "MDT 前", text: "釐清診斷、病理、影像、既往治療、目前狀況和需要專家回答的問題。" },
          { title: "協調中", text: "協助準備會前資料、資訊流轉，以及與相關臨床團隊溝通。" },
          { title: "評估後", text: "整理行政層面的下一步、缺少資料、可能的醫院路徑問題和復查時間。" },
        ],
        questionsTitle: "我們協助整理的個案管理問題",
        questions: [
          "病理與影像資料是否足以進行有意義的專家評估？",
          "復發或難治淋巴瘤是否需要赴穗前進行 MDT 討論？",
          "免疫治療後，討論手術可能性前需要哪些復評資料？",
          "聯絡醫院團隊前，哪些資料需要翻譯或重新整理？",
          "出院或線上評估後，家屬應準備怎樣的隨訪時間線？",
        ],
        note: "MDT 協調是行政與溝通支持，不保證指定醫生、醫院、治療或手術會接收個案。",
      },
      experts: {
        eyebrow: "臨床背景",
        title: "支持患者信任的專家資料",
        body: "以下資料幫助患者理解廣州腫瘤路徑背後的臨床背景，並不表示 H&C Care 在香港提供醫療執業服務。",
        people: [
          { name: "蔡綺純醫生", role: "主任醫師 · 腫瘤中心主任 · 碩士生導師", image: experts.cai, text: "長期從事淋巴瘤、精準免疫治療、細胞治療、靶向藥轉化及個體化腫瘤診療。" },
          { name: "黃慧強教授", role: "主任醫師 · 教授 · 博士生導師 · 幹細胞移植病區主任", image: experts.huang, text: "專注淋巴瘤及血液腫瘤，在少見淋巴瘤亞型、系統治療和自體造血幹細胞移植方面經驗豐富。" },
          { name: "謝國明醫生", role: "主任醫師 · 腫瘤科 · 實體瘤內科治療", image: experts.xie, text: "從事腫瘤診療四十餘年，擅長實體瘤化療、免疫治療、靶向治療、內分泌治療及個體化精準治療規劃。" },
        ],
        note: "醫生資料僅作廣州相關路徑的臨床背景介紹，不構成在香港提供診斷、治療或處方服務。",
      },
      hospitals: {
        eyebrow: "廣州場景",
        title: "真實醫院路徑與實務支持",
        body: "準備赴廣州治療的患者，往往需要先釐清資料、入院準備、住院預期、復評時間和家屬安排。",
        cards: [
          { title: "醫院內路徑", text: "協調工作圍繞真實醫院流程，而不是抽象轉介。" },
          { title: "國際患者準備", text: "協助家屬理解病歷、時間、出行背景、入院步驟和隨訪準備。" },
          { title: "赴穗前先釐清", text: "在決定是否推進醫院溝通前，家屬先獲得務實的協調計劃。" },
        ],
        note: `${brand.name} 由 ${brand.zhLegalName} 營運。本網站並非任何醫院的官方網站，除非另有明確說明。`,
      },
      journey: {
        eyebrow: "服務流程",
        title: "從初次聯絡到隨訪管理的清晰路徑",
        body: "第一步不是承諾治療，而是了解個案、整理資料，並判斷哪些資訊足以支撐有意義的醫院溝通。",
        steps: [
          { title: "初次聯絡", text: "簡要說明診斷、所在國家或地區、目前階段和家屬最想解決的問題。" },
          { title: "會員諮詢", text: "釐清是否適合個案管理會員，以及需要哪一層級支持。" },
          { title: "病歷整理", text: "圍繞診斷、病理、影像、既往治療、用藥和目前狀態整理個案檔案。" },
          { title: "團隊協調", text: "在合適情況下，協調腫瘤、MDT 或手術團隊的溝通。" },
          { title: "隨訪管理", text: "協助追蹤下一步、缺少資料、復評時間、出院安排和家屬溝通。" },
        ],
        documentsTitle: "建議準備資料",
        documents: ["目前診斷與病情摘要", "病理報告", "影像報告和近期檢查結果", "基因或分子檢測，如有", "既往治療史和用藥清單", "目前症狀、體能狀態和感染史"],
      },
      contact: {
        eyebrow: "聯絡",
        title: "申請會員諮詢",
        body: `請通過 WhatsApp 或電郵聯絡 ${contact.name}。請說明患者診斷、所在國家或地區、目前狀況和主要協調問題。緊急情況請勿通過本網站處理。`,
        email: "電郵 H&C Care",
        whatsapp: "WhatsApp 聯絡 Hugo",
        privacy: "通過電郵或 WhatsApp 發送的醫療資料將用於了解個案及安排協調，並可能僅為個案準備及評估目的分享予香港以外相關醫療團隊。",
      },
      privacy: {
        eyebrow: "私隱聲明",
        title: "我們如何處理患者和家屬資料",
        body: `${brand.name} 僅為個案準備、會員諮詢及協調支持接收敏感醫療和個人資料。`,
        cards: [
          { title: "我們收集什麼", text: "診斷、醫療報告、影像摘要、治療史、聯絡方式、所在地區、家屬聯絡資料及提交的問題。" },
          { title: "使用目的", text: "整理個案、判斷協調是否可行、與相關團隊溝通，以及管理隨訪提醒。" },
          { title: "可能接收者", text: "與所需路徑相關的醫院、醫生、護士、行政協調人員、翻譯或個案支持夥伴。" },
          { title: "您的權利", text: "患者或授權家屬可通過電郵要求查閱、更正或在可行情況下刪除資料。" },
        ],
        note: "電郵和 WhatsApp 不適合急症或高度緊急的臨床指示。請勿通過本網站處理急症。",
      },
      terms: {
        eyebrow: "服務邊界",
        title: "H&C Care 提供與不提供的服務",
        body: "我們提供的是個案管理與協調服務，不是香港診所、醫院、保險產品、急症服務，也不提供診斷或治療。",
        cards: [
          { title: "會員包含", text: "行政個案管理、資料整理、溝通協調、時間線提醒、家屬支持及路徑準備。" },
          { title: "不包含", text: "醫院費、醫生費、檢查、藥物、治療、手術、旅費、住宿、第三方翻譯或急症服務。" },
          { title: "醫療決定", text: "診斷、治療資格、入院、手術、處方、費用和結果均由醫院及持牌醫生決定。" },
          { title: "不作保證", text: "不保證任何醫院或醫生接收、不保證治療可及、手術機會、療效、生存、緩解或費用節省。" },
        ],
        note: "正式服務細節應在付款前通過書面會員協議確認。",
      },
      disclaimer: {
        title: "醫療免責聲明",
        body: `${brand.name} 提供一般資訊、會員制個案管理及協調支持，不能替代持牌醫生的診斷或治療。是否適合治療、治療結果和費用均因個案而異，不能作出保證。`,
      },
    },
  },

  ru: {
    nav: {
      home: "Главная",
      membership: "Членство",
      oncology: "Онкология",
      mdt: "MDT",
      experts: "Эксперты",
      hospitals: "Больницы",
      journey: "Маршрут",
      contact: "Контакты",
      privacy: "Конфиденциальность",
      terms: "Границы услуг",
    },
    seo: {
      title: `${brand.name} | Координация онкологических случаев в Гуанчжоу`,
      description: "Гонконгская консультационная компания для управления онкологическими случаями, координации MDT и больничных маршрутов в Гуанчжоу.",
    },
    hero: {
      eyebrow: "Гонконгская health advisory компания",
      title: "Членское управление онкологическим случаем",
      highlight: "документы, MDT-ресурсы и больничные маршруты Гуанчжоу",
      body: `${brand.name} помогает международным пациентам организовать документы, подготовить вопросы и координировать коммуникацию с подходящими клиническими командами в Гуанчжоу.`,
      primary: "Запросить консультацию",
      secondary: "Посмотреть маршрут",
      trust: [
        { title: "Годовое членство", text: "Сервисный сбор покрывает организацию случая, координацию, напоминания и коммуникацию с семьей." },
        { title: "Фокус на лимфоме", text: "Основные ресурсы связаны с лимфомой и сложной онкологической координацией в Гуандуне и Гуанчжоу." },
        { title: "Четкие границы", text: "Мы не предоставляем диагностику, лечение, экстренную помощь, страхование или гарантии результата." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "Что мы координируем",
        title: "Практический сервис вокруг больничного лечения",
        body: "Пациентам нужны организованные документы, понятные вопросы, этапность и поддержка семьи на протяжении маршрута.",
        cards: [
          { title: "Управление документами", text: "Организация патологии, визуализации, истории лечения, лекарств и ключевых вопросов." },
          { title: "Координация команд", text: "Коммуникация с онкологическими, лимфомными, MDT и хирургическими командами при клинической уместности." },
          { title: "Долгосрочное сопровождение", text: "Напоминания, подготовка повторных разборов, контекст поездки и семейная коммуникация." },
        ],
      },
      membership: {
        eyebrow: "Членские услуги",
        title: "Годовое управление случаем для онкологических пациентов",
        body: "Членский сбор покрывает управление случаем, координацию и консультационную поддержку. Медицинские, больничные, лекарственные, хирургические и дорожные расходы оплачиваются отдельно.",
        plans: [
          { name: "Care Navigation Membership", fit: "Для первого маршрута и организации документов.", items: ["Список документов", "Организация дела", "Координация записи и связи", "Напоминания о повторных шагах"] },
          { name: "Oncology Coordination Membership", fit: "Для сложных случаев, которым нужна подготовка вопросов и координация этапов.", items: ["Подготовка вопросов MDT и специалистам", "График повторной оценки", "Координация клинических команд", "Резюме случая и отслеживание шагов"] },
          { name: "Concierge Case Management", fit: "Для длительной координации через разные этапы.", items: ["Персональный case manager", "Межэтапная временная линия", "Напоминания о госпитализации и контроле", "Коммуникация с семьей"] },
        ],
        modulesTitle: "Специальные модули поддержки",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "Подготовка материалов для обсуждения лимфомы и сложных случаев со специалистами Гуандуна и Гуанчжоу." },
          { title: "Immune Recovery Support", text: "Организация данных иммунного статуса, врачебное сопровождение, питание, образ жизни и квартальный обзор для стабильной или восстановительной фазы." },
          { title: "Surgical Pathway Coordination", text: "Поддержка коммуникации, когда повторная оценка позволяет обсуждать хирургический маршрут." },
        ],
        modulesNote: "Модули являются координационной и консультационной поддержкой, а не медицинскими пакетами или обещанием лечения.",
        note: "Членство не является страховкой или медицинским пакетом. Принятие, лечение, операция, стоимость и результат определяются больницами и врачами.",
      },
      oncology: {
        eyebrow: "Онкологическая координация",
        title: "От оценки иммунотерапии к коммуникации с хирургической командой",
        body: "Мы помогаем семье подготовить информацию для обсуждения больничного маршрута. Решения принимают больница и квалифицированные врачи.",
        cards: [
          { title: "Сначала лимфома", text: "Подготовка и координация для рецидивирующей, рефрактерной и сложной лимфомы." },
          { title: "Вопросы иммунотерапии", text: "Подготовка вопросов по иммунотерапии, таргетной терапии, клеточной терапии и срокам переоценки." },
          { title: "Хирургический маршрут", text: "При уместности помогаем координировать коммуникацию с хирургическими командами." },
          { title: "Поддержка семьи", text: "Переводим практические шаги в понятную временную линию, не заменяя медицинские советы." },
        ],
        note: "Мы не выбираем лечение. Мы готовим дело и координируем коммуникацию для оценки врачами.",
      },
      mdt: {
        eyebrow: "Ресурсы MDT по лимфоме",
        title: "Мультидисциплинарная координация в Гуандуне",
        body: "Основная сеть ресурсов связана с лимфомой и сложной онкологией в Гуандуне, особенно в Гуанчжоу.",
        cards: [
          { title: "До MDT", text: "Уточнение диагноза, патологии, визуализации, терапии и вопросов." },
          { title: "Во время координации", text: "Подготовка информации и коммуникация с клиническими командами." },
          { title: "После разбора", text: "Административные следующие шаги, недостающие документы и сроки контроля." },
        ],
        questionsTitle: "Вопросы, которые мы помогаем подготовить",
        questions: ["Достаточно ли документов для экспертного разбора?", "Нужен ли MDT до поездки?", "Какая переоценка нужна перед обсуждением операции?", "Какие документы нужно перевести?", "Какую временную линию контроля подготовить?"],
        note: "MDT-координация не гарантирует принятие конкретным врачом, больницей, лечением или операцией.",
      },
      experts: {
        eyebrow: "Клинический фон",
        title: "Профили специалистов для доверия пациента",
        body: "Профили помогают понять клинический фон маршрутов в Гуанчжоу и не означают медицинскую практику H&C Care в Гонконге.",
        people: [
          { name: "Д-р Цай Цичунь", role: "Chief Physician · Oncology Center Director", image: experts.cai, text: "Опытный онколог в области лимфомы, иммунотерапии, клеточной терапии и индивидуализированной онкологии." },
          { name: "Профессор Хуан Хуйцян", role: "Chief Physician · Professor · PhD Supervisor", image: experts.huang, text: "Специалист по лимфоме и гематологическим опухолям, системной терапии и трансплантации стволовых клеток." },
          { name: "Д-р Се Гомин", role: "Chief Physician · Solid Tumor Medical Oncology", image: experts.xie, text: "Медицинский онколог с более чем 40-летним опытом в терапии солидных опухолей." },
        ],
        note: "Информация о врачах является клиническим фоном, а не предложением диагностики или лечения в Гонконге.",
      },
      hospitals: {
        eyebrow: "Среда Гуанчжоу",
        title: "Реальные больничные маршруты и практическая поддержка",
        body: "Мы помогаем семьям понять документы, госпитализацию, переоценку и последующие шаги.",
        cards: [
          { title: "Больничные маршруты", text: "Координация основана на реальных процессах больницы." },
          { title: "Подготовка пациента", text: "Документы, сроки, поездка, госпитализация и контроль." },
          { title: "Ясность до поездки", text: "Практический план до решения о коммуникации с больницей." },
        ],
        note: `${brand.name} operated by ${brand.legalName}. This website is not the official website of any hospital unless stated.`,
      },
      journey: {
        eyebrow: "Маршрут пациента",
        title: "От первого контакта до наблюдения",
        body: "Первый шаг — понять случай, организовать документы и определить, что нужно для содержательного обсуждения с больницей.",
        steps: [
          { title: "Первичный контакт", text: "Диагноз, страна, стадия и главный вопрос семьи." },
          { title: "Консультация по членству", text: "Уточнение уровня поддержки." },
          { title: "Организация документов", text: "Диагноз, патология, визуализация, лечение и текущий статус." },
          { title: "Координация команды", text: "Коммуникация с онкологией, MDT или хирургией при уместности." },
          { title: "Follow-up", text: "Следующие шаги, недостающие документы, переоценка и семейная коммуникация." },
        ],
        documentsTitle: "Документы",
        documents: ["Диагноз и резюме", "Патология", "Визуализация и анализы", "Генетика/молекулярные тесты", "История лечения и лекарства", "Текущие симптомы и инфекции"],
      },
      contact: {
        eyebrow: "Контакт",
        title: "Запросить консультацию по членству",
        body: `Свяжитесь с ${contact.name} по WhatsApp или email. Укажите диагноз, регион, текущее состояние и главный вопрос.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp Hugo",
        privacy: "Медицинская информация используется для понимания случая и координации; она может передаваться релевантным медицинским командам за пределами Гонконга.",
      },
      privacy: {
        eyebrow: "Конфиденциальность",
        title: "Как мы обрабатываем данные",
        body: `${brand.name} получает чувствительную медицинскую информацию только для подготовки случая и координации.`,
        cards: [
          { title: "Что собираем", text: "Диагноз, отчеты, история лечения, контакты и вопросы." },
          { title: "Зачем используем", text: "Организация дела, коммуникация и follow-up." },
          { title: "Кому передаем", text: "Релевантным больницам, врачам, координаторам, переводчикам и партнерам поддержки." },
          { title: "Ваши права", text: "Можно запросить доступ, исправление или удаление, где это практично." },
        ],
        note: "Не используйте сайт для экстренной помощи.",
      },
      terms: {
        eyebrow: "Границы услуг",
        title: "Что H&C Care делает и не делает",
        body: "Мы предоставляем case management и координацию, а не медицинскую практику, страховку или экстренную помощь.",
        cards: [
          { title: "Включено", text: "Организация документов, координация, напоминания и поддержка семьи." },
          { title: "Не включено", text: "Медицинские, больничные, лекарственные, хирургические и дорожные расходы." },
          { title: "Медицинские решения", text: "Все решения принимают больницы и лицензированные врачи." },
          { title: "Нет гарантий", text: "Нет гарантии принятия, лечения, операции, результата или экономии." },
        ],
        note: "Детали должны быть подтверждены письменным соглашением.",
      },
      disclaimer: {
        title: "Медицинское уведомление",
        body: `${brand.name} предоставляет информацию и координацию, но не заменяет врачебную диагностику или лечение. Результаты и стоимость не гарантируются.`,
      },
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      membership: "العضوية",
      oncology: "تنسيق الأورام",
      mdt: "موارد MDT",
      experts: "الخبراء",
      hospitals: "المستشفيات",
      journey: "المسار",
      contact: "تواصل",
      privacy: "الخصوصية",
      terms: "حدود الخدمة",
    },
    seo: {
      title: `${brand.name} | إدارة حالات الأورام في قوانغتشو`,
      description: "شركة استشارية في هونغ كونغ تقدم إدارة حالات عضوية وتنسيق مسارات الأورام للمرضى الدوليين في قوانغتشو.",
    },
    hero: {
      eyebrow: "استشارات صحية من هونغ كونغ",
      title: "إدارة حالات أورام بنظام العضوية",
      highlight: "ربط السجلات وموارد MDT ومسارات المستشفيات في قوانغتشو",
      body: `تساعد ${brand.name} المرضى الدوليين على تنظيم السجلات، وتحضير الأسئلة، وتنسيق التواصل مع الفرق السريرية المناسبة في قوانغتشو.`,
      primary: "طلب استشارة عضوية",
      secondary: "عرض مسار المريض",
      trust: [
        { title: "نموذج عضوية سنوي", text: "تغطي الرسوم إدارة الحالة والتنسيق والتذكيرات ودعم التواصل مع الأسرة." },
        { title: "تركيز على اللمفوما", text: "أقوى طبقة موارد لدينا هي اللمفوما وتنسيق الأورام المعقدة في غوانغدونغ وقوانغتشو." },
        { title: "حدود واضحة", text: "لا نقدم تشخيصا أو علاجا أو طوارئ أو تأمينا أو ضمانا للنتائج." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "ما الذي ننسقه",
        title: "طبقة خدمة عملية حول رعاية الأورام داخل المستشفى",
        body: "يحتاج المرضى إلى سجلات منظمة وأسئلة واضحة واستمرارية بين مراحل العلاج ودعم للأسرة.",
        cards: [
          { title: "إدارة ملف الحالة", text: "تنظيم التقارير والصور والعلاجات السابقة والأدوية والأسئلة الرئيسية." },
          { title: "تنسيق الفرق السريرية", text: "تنسيق التواصل مع فرق الأورام واللمفوما وMDT والجراحة عند الملاءمة." },
          { title: "متابعة مستمرة", text: "تذكيرات، تحضير مراجعات لاحقة، وسياق السفر والتواصل العائلي." },
        ],
      },
      membership: {
        eyebrow: "خدمات العضوية",
        title: "إدارة سنوية لحالات الأورام الدولية",
        body: "تغطي رسوم العضوية إدارة الحالة والتنسيق والدعم الاستشاري فقط. الرسوم الطبية والمستشفى والأدوية والجراحة والسفر منفصلة.",
        plans: [
          { name: "Care Navigation Membership", fit: "لمن يحتاجون تنظيما أوليا للملف والمسار.", items: ["قائمة السجلات", "تنظيم الملف", "تنسيق المواعيد والتواصل", "تذكيرات المتابعة"] },
          { name: "Oncology Coordination Membership", fit: "للحالات المعقدة التي تحتاج تحضير أسئلة وتنسيق مراحل العلاج.", items: ["تحضير أسئلة MDT والمتخصصين", "تنظيم جدول إعادة التقييم", "تنسيق التواصل مع الفرق السريرية", "ملخص الحالة وتتبع الخطوات"] },
          { name: "Concierge Case Management", fit: "للعائلات التي تحتاج تنسيقا طويل الأمد.", items: ["مدير حالة مخصص", "جدول زمني عبر المراحل", "تذكيرات الدخول والخروج والمراجعة", "دعم التواصل العائلي"] },
        ],
        modulesTitle: "وحدات دعم خاصة",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "تحضير مواد النقاش لحالات اللمفوما والحالات المعقدة مع متخصصي غوانغدونغ وقوانغتشو." },
          { title: "Immune Recovery Support", text: "تنظيم بيانات الحالة المناعية، متابعة استشارية طبية، تنسيق التغذية ونمط الحياة، ومراجعة ربع سنوية للمرحلة المستقرة أو التعافي." },
          { title: "Surgical Pathway Coordination", text: "دعم التواصل عندما تشير إعادة التقييم إلى إمكانية مناقشة المسار الجراحي." },
        ],
        modulesNote: "هذه الوحدات هي دعم تنسيقي واستشاري وليست حزمة طبية أو وعدا بالعلاج.",
        note: "العضوية ليست تأمينا أو حزمة علاجية. القبول والعلاج والجراحة والتكلفة والنتائج تحددها المستشفيات والأطباء.",
      },
      oncology: {
        eyebrow: "تنسيق الأورام",
        title: "من مراجعة العلاج المناعي إلى تنسيق الجراحة",
        body: "نساعد الأسرة على تحضير المعلومات اللازمة لمناقشة المسار داخل المستشفى. القرار الطبي للطبيب والمستشفى.",
        cards: [
          { title: "اللمفوما أولا", text: "تحضير وتنسيق لحالات اللمفوما المتكررة أو المقاومة أو المعقدة." },
          { title: "أسئلة العلاج المناعي", text: "تحضير أسئلة حول العلاج المناعي والموجه والخلوي ووقت إعادة التقييم." },
          { title: "مسار الجراحة", text: "عند الملاءمة، ننسق التواصل مع فرق الجراحة المناسبة." },
          { title: "دعم الأسرة", text: "نحول الخطوات العملية إلى جدول واضح دون استبدال المشورة الطبية." },
        ],
        note: "لا نختار العلاج. نجهز الحالة وننسق التواصل لتقييم الأطباء المرخصين.",
      },
      mdt: {
        eyebrow: "موارد MDT لللمفوما",
        title: "تنسيق متعدد التخصصات يركز على غوانغدونغ",
        body: "شبكتنا الأقوى في اللمفوما والأورام المعقدة في غوانغدونغ، خاصة قوانغتشو.",
        cards: [
          { title: "قبل MDT", text: "توضيح التشخيص والتقارير والصور والعلاج السابق والأسئلة." },
          { title: "أثناء التنسيق", text: "تحضير المعلومات والتواصل مع الفرق السريرية." },
          { title: "بعد المراجعة", text: "خطوات إدارية تالية وسجلات ناقصة وتوقيت المتابعة." },
        ],
        questionsTitle: "أسئلة نساعد في تحضيرها",
        questions: ["هل السجلات كافية للمراجعة؟", "هل تحتاج اللمفوما المتكررة إلى MDT قبل السفر؟", "ما إعادة التقييم المطلوبة قبل الجراحة؟", "ما الوثائق التي تحتاج ترجمة؟", "ما جدول المتابعة المناسب؟"],
        note: "تنسيق MDT لا يضمن قبول طبيب أو مستشفى أو علاج أو عملية محددة.",
      },
      experts: {
        eyebrow: "خلفية سريرية",
        title: "ملفات متخصصين تدعم ثقة المريض",
        body: "هذه الملفات خلفية لمسارات قوانغتشو ولا تعني ممارسة طبية في هونغ كونغ.",
        people: [
          { name: "د. تساي تشيتشون", role: "Chief Physician · Oncology Center Director", image: experts.cai, text: "اختصاصي أورام ذو خبرة في اللمفوما والعلاج المناعي والخلوي والفردي." },
          { name: "البروفيسور هوانغ هويتشيانغ", role: "Chief Physician · Professor · PhD Supervisor", image: experts.huang, text: "اختصاصي لمفوما وأورام دم مع خبرة في العلاج الجهازي وزراعة الخلايا الجذعية." },
          { name: "د. شيه غوومينغ", role: "Chief Physician · Solid Tumor Medical Oncology", image: experts.xie, text: "اختصاصي أورام طبية بخبرة تزيد عن 40 عاما في علاج الأورام الصلبة." },
        ],
        note: "معلومات الأطباء خلفية سريرية وليست عرضا للتشخيص أو العلاج في هونغ كونغ.",
      },
      hospitals: {
        eyebrow: "بيئة قوانغتشو",
        title: "مسارات مستشفى حقيقية ودعم عملي",
        body: "نساعد الأسرة على فهم الوثائق والدخول للمستشفى وإعادة التقييم والخطوات التالية.",
        cards: [
          { title: "مسارات داخل المستشفى", text: "التنسيق مبني حول سير عمل حقيقي." },
          { title: "تحضير المريض الدولي", text: "وثائق وتوقيت وسفر ودخول ومتابعة." },
          { title: "وضوح قبل السفر", text: "خطة تنسيق عملية قبل التواصل مع المستشفى." },
        ],
        note: `${brand.name} operated by ${brand.legalName}. This website is not the official website of any hospital unless stated.`,
      },
      journey: {
        eyebrow: "مسار المريض",
        title: "من الاتصال الأول إلى المتابعة",
        body: "الخطوة الأولى هي فهم الحالة وتنظيم السجلات وتحديد المعلومات المطلوبة للنقاش المفيد.",
        steps: [
          { title: "اتصال أولي", text: "التشخيص والبلد والمرحلة والسؤال الرئيسي." },
          { title: "استشارة عضوية", text: "تحديد مستوى الدعم المناسب." },
          { title: "تنظيم السجلات", text: "تشخيص وتقارير وصور وعلاجات وحالة حالية." },
          { title: "تنسيق الفريق", text: "تواصل مع الأورام أو MDT أو الجراحة عند الملاءمة." },
          { title: "إدارة المتابعة", text: "خطوات تالية ووثائق ناقصة وإعادة تقييم وتواصل أسري." },
        ],
        documentsTitle: "وثائق للتحضير",
        documents: ["ملخص التشخيص", "تقرير الباثولوجيا", "تقارير التصوير والفحوصات", "اختبارات جينية أو جزيئية", "تاريخ العلاج والأدوية", "الأعراض الحالية وحالات العدوى"],
      },
      contact: {
        eyebrow: "تواصل",
        title: "طلب استشارة عضوية",
        body: `تواصل مع ${contact.name} عبر WhatsApp أو البريد. أرسل التشخيص والمنطقة والحالة الحالية والسؤال الرئيسي.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp Hugo",
        privacy: "تستخدم المعلومات الطبية لفهم الحالة والتنسيق، وقد تشارك مع فرق طبية مناسبة خارج هونغ كونغ.",
      },
      privacy: {
        eyebrow: "الخصوصية",
        title: "كيف نتعامل مع المعلومات",
        body: `تستقبل ${brand.name} المعلومات الطبية الحساسة فقط لتحضير الحالة والتنسيق.`,
        cards: [
          { title: "ما نجمعه", text: "التشخيص والتقارير وتاريخ العلاج وجهات الاتصال والأسئلة." },
          { title: "سبب الاستخدام", text: "تنظيم الحالة والتواصل والمتابعة." },
          { title: "من قد يستلمها", text: "مستشفيات وأطباء ومنسقون ومترجمون وشركاء دعم مناسبون." },
          { title: "حقوقك", text: "يمكن طلب الوصول أو التصحيح أو الحذف عندما يكون عمليا." },
        ],
        note: "لا تستخدم الموقع للطوارئ.",
      },
      terms: {
        eyebrow: "حدود الخدمة",
        title: "ما نقدمه وما لا نقدمه",
        body: "خدمتنا إدارة حالة وتنسيق وليست عيادة أو تأمينا أو طوارئ.",
        cards: [
          { title: "يشمل", text: "تنظيم الوثائق والتنسيق والتذكيرات ودعم الأسرة." },
          { title: "لا يشمل", text: "الرسوم الطبية والمستشفى والأدوية والجراحة والسفر." },
          { title: "قرارات طبية", text: "كل القرارات للطبيب والمستشفى." },
          { title: "لا ضمانات", text: "لا نضمن القبول أو العلاج أو الجراحة أو النتائج أو التوفير." },
        ],
        note: "يجب تأكيد التفاصيل في اتفاق مكتوب.",
      },
      disclaimer: {
        title: "إخلاء مسؤولية طبية",
        body: `${brand.name} تقدم معلومات وتنسيقا ولا تحل محل تشخيص أو علاج الطبيب. النتائج والتكاليف غير مضمونة.`,
      },
    },
  },

  id: {
    nav: {
      home: "Beranda",
      membership: "Keanggotaan",
      oncology: "Koordinasi Onkologi",
      mdt: "Sumber MDT",
      experts: "Dokter",
      hospitals: "Rumah sakit",
      journey: "Alur",
      contact: "Kontak",
      privacy: "Privasi",
      terms: "Batas Layanan",
    },
    seo: {
      title: `${brand.name} | Manajemen Kasus Onkologi di Guangzhou`,
      description: "Perusahaan health advisory berbasis Hong Kong untuk manajemen kasus anggota dan koordinasi jalur onkologi di Guangzhou.",
    },
    hero: {
      eyebrow: "Health advisory Hong Kong untuk pasien internasional",
      title: "Manajemen kasus onkologi berbasis keanggotaan",
      highlight: "menghubungkan rekam medis, sumber MDT, dan jalur rumah sakit Guangzhou",
      body: `${brand.name} membantu pasien internasional mengatur rekam medis, menyiapkan pertanyaan, dan mengoordinasikan komunikasi dengan tim klinis yang sesuai di Guangzhou.`,
      primary: "Minta konsultasi keanggotaan",
      secondary: "Lihat alur pasien",
      trust: [
        { title: "Model tahunan", text: "Biaya layanan mencakup organisasi kasus, koordinasi, pengingat, dan dukungan komunikasi keluarga." },
        { title: "Fokus limfoma MDT", text: "Sumber utama kami adalah koordinasi limfoma dan onkologi kompleks di Guangdong dan Guangzhou." },
        { title: "Batas jelas", text: "Kami tidak memberi diagnosis, terapi, layanan darurat, asuransi, atau jaminan hasil." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "Yang kami koordinasikan",
        title: "Lapisan layanan praktis di sekitar perawatan kanker berbasis rumah sakit",
        body: "Pasien membutuhkan rekam medis rapi, pertanyaan jelas, kesinambungan tahap perawatan, dan komunikasi keluarga.",
        cards: [
          { title: "Manajemen file kasus", text: "Menyusun patologi, imaging, terapi sebelumnya, obat, dan pertanyaan utama." },
          { title: "Koordinasi tim klinis", text: "Koordinasi komunikasi dengan tim onkologi, limfoma, MDT, dan bedah bila sesuai." },
          { title: "Follow-up berkelanjutan", text: "Pengingat, persiapan tinjauan ulang, konteks perjalanan, dan komunikasi keluarga." },
        ],
      },
      membership: {
        eyebrow: "Layanan keanggotaan",
        title: "Manajemen kasus tahunan untuk pasien onkologi internasional",
        body: "Biaya keanggotaan mencakup manajemen kasus, koordinasi, dan dukungan konsultasi. Biaya rumah sakit, dokter, tes, obat, terapi, operasi, dan perjalanan terpisah.",
        plans: [
          { name: "Care Navigation Membership", fit: "Untuk jalur pertama dan organisasi rekam medis.", items: ["Daftar dokumen", "Organisasi file kasus", "Koordinasi janji dan komunikasi", "Pengingat follow-up"] },
          { name: "Oncology Coordination Membership", fit: "Untuk kasus kompleks yang perlu persiapan pertanyaan dan koordinasi tahap terapi.", items: ["Persiapan pertanyaan MDT dan spesialis", "Timeline evaluasi ulang", "Koordinasi komunikasi tim klinis", "Ringkasan kasus dan pelacakan langkah"] },
          { name: "Concierge Case Management", fit: "Untuk koordinasi jangka panjang lintas tahap.", items: ["Case manager khusus", "Timeline lintas tahap", "Pengingat masuk, pulang, dan kontrol", "Dukungan komunikasi keluarga"] },
        ],
        modulesTitle: "Modul dukungan khusus",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "Persiapan materi diskusi untuk limfoma dan kasus kompleks dengan spesialis Guangdong dan Guangzhou." },
          { title: "Immune Recovery Support", text: "Organisasi data status imun, follow-up konsultatif dokter, koordinasi nutrisi dan gaya hidup, serta tinjauan triwulanan untuk fase stabil atau pemulihan." },
          { title: "Surgical Pathway Coordination", text: "Dukungan komunikasi bila evaluasi ulang menunjukkan jalur bedah dapat didiskusikan." },
        ],
        modulesNote: "Modul ini adalah dukungan koordinasi dan konsultasi, bukan paket medis atau janji terapi.",
        note: "Keanggotaan bukan asuransi atau paket medis. Penerimaan, terapi, operasi, biaya, dan hasil ditentukan rumah sakit dan dokter.",
      },
      oncology: {
        eyebrow: "Koordinasi onkologi",
        title: "Dari evaluasi imunoterapi hingga koordinasi tim bedah",
        body: "Kami membantu keluarga menyiapkan informasi untuk diskusi jalur rumah sakit. Keputusan medis dibuat oleh rumah sakit dan dokter.",
        cards: [
          { title: "Limfoma terlebih dahulu", text: "Persiapan dan koordinasi untuk limfoma kambuh, refrakter, atau kompleks." },
          { title: "Pertanyaan imunoterapi", text: "Persiapan pertanyaan tentang imunoterapi, terapi target, terapi sel, dan waktu evaluasi ulang." },
          { title: "Jalur bedah", text: "Bila sesuai, kami membantu koordinasi komunikasi dengan tim bedah." },
          { title: "Dukungan keluarga", text: "Membuat langkah praktis menjadi timeline yang mudah dipahami tanpa mengganti nasihat medis." },
        ],
        note: "Kami tidak memilih terapi. Kami menyiapkan kasus dan mengoordinasikan komunikasi untuk evaluasi dokter.",
      },
      mdt: {
        eyebrow: "Sumber MDT limfoma",
        title: "Koordinasi multidisiplin berfokus Guangdong",
        body: "Jaringan terkuat kami ada pada limfoma dan onkologi kompleks di Guangdong, terutama Guangzhou.",
        cards: [
          { title: "Sebelum MDT", text: "Memperjelas diagnosis, laporan, imaging, terapi sebelumnya, dan pertanyaan." },
          { title: "Saat koordinasi", text: "Persiapan informasi dan komunikasi dengan tim klinis." },
          { title: "Setelah review", text: "Langkah administratif, dokumen kurang, dan waktu follow-up." },
        ],
        questionsTitle: "Pertanyaan kasus yang kami bantu siapkan",
        questions: ["Apakah dokumen cukup untuk review spesialis?", "Apakah limfoma kambuh perlu MDT sebelum perjalanan?", "Evaluasi ulang apa yang diperlukan sebelum operasi?", "Dokumen apa yang perlu diterjemahkan?", "Timeline follow-up apa yang perlu disiapkan?"],
        note: "Koordinasi MDT tidak menjamin penerimaan dokter, rumah sakit, terapi, atau operasi tertentu.",
      },
      experts: {
        eyebrow: "Latar klinis",
        title: "Profil spesialis untuk membangun kepercayaan",
        body: "Profil ini membantu memahami latar klinis jalur Guangzhou dan bukan praktik medis H&C Care di Hong Kong.",
        people: [
          { name: "Dr. Cai Qichun", role: "Chief Physician · Oncology Center Director", image: experts.cai, text: "Onkolog senior dengan pengalaman dalam limfoma, imunoterapi, terapi sel, dan perawatan individual." },
          { name: "Prof. Huang Huiqiang", role: "Chief Physician · Professor · PhD Supervisor", image: experts.huang, text: "Spesialis limfoma dan keganasan hematologi dengan pengalaman terapi sistemik dan transplantasi sel punca." },
          { name: "Dr. Xie Guoming", role: "Chief Physician · Solid Tumor Medical Oncology", image: experts.xie, text: "Onkolog medis dengan pengalaman lebih dari 40 tahun dalam tumor padat." },
        ],
        note: "Informasi dokter adalah latar klinis, bukan tawaran diagnosis atau terapi di Hong Kong.",
      },
      hospitals: {
        eyebrow: "Lingkungan Guangzhou",
        title: "Jalur rumah sakit nyata dengan dukungan praktis",
        body: "Kami membantu keluarga memahami dokumen, rawat inap, evaluasi ulang, dan langkah berikutnya.",
        cards: [
          { title: "Jalur berbasis rumah sakit", text: "Koordinasi mengikuti alur kerja rumah sakit nyata." },
          { title: "Persiapan pasien internasional", text: "Dokumen, waktu, perjalanan, masuk rumah sakit, dan follow-up." },
          { title: "Kejelasan sebelum perjalanan", text: "Rencana koordinasi praktis sebelum komunikasi rumah sakit." },
        ],
        note: `${brand.name} operated by ${brand.legalName}. This website is not the official website of any hospital unless stated.`,
      },
      journey: {
        eyebrow: "Alur pasien",
        title: "Dari kontak pertama hingga follow-up",
        body: "Langkah pertama adalah memahami kasus, mengatur rekam medis, dan menentukan informasi yang dibutuhkan.",
        steps: [
          { title: "Kontak awal", text: "Diagnosis, negara, tahap saat ini, dan pertanyaan utama keluarga." },
          { title: "Konsultasi membership", text: "Menentukan tingkat dukungan yang sesuai." },
          { title: "Organisasi rekam medis", text: "Diagnosis, patologi, imaging, terapi, dan status saat ini." },
          { title: "Koordinasi tim", text: "Komunikasi dengan onkologi, MDT, atau bedah bila sesuai." },
          { title: "Manajemen follow-up", text: "Langkah berikutnya, dokumen kurang, waktu evaluasi ulang, dan komunikasi keluarga." },
        ],
        documentsTitle: "Dokumen",
        documents: ["Diagnosis dan ringkasan", "Patologi", "Imaging dan hasil tes", "Tes genetik/molekuler", "Riwayat terapi dan obat", "Gejala dan infeksi saat ini"],
      },
      contact: {
        eyebrow: "Kontak",
        title: "Minta konsultasi keanggotaan",
        body: `Hubungi ${contact.name} via WhatsApp atau email. Sertakan diagnosis, wilayah, status saat ini, dan pertanyaan utama.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp Hugo",
        privacy: "Informasi medis digunakan untuk memahami kasus dan koordinasi; dapat dibagikan dengan tim medis relevan di luar Hong Kong.",
      },
      privacy: {
        eyebrow: "Privasi",
        title: "Cara kami menangani informasi",
        body: `${brand.name} menerima informasi medis sensitif hanya untuk persiapan kasus dan koordinasi.`,
        cards: [
          { title: "Yang dikumpulkan", text: "Diagnosis, laporan, riwayat terapi, kontak, dan pertanyaan." },
          { title: "Tujuan", text: "Organisasi kasus, komunikasi, dan follow-up." },
          { title: "Penerima", text: "Rumah sakit, dokter, koordinator, penerjemah, dan partner dukungan yang relevan." },
          { title: "Hak Anda", text: "Akses, koreksi, atau penghapusan dapat diminta bila praktis." },
        ],
        note: "Jangan gunakan situs ini untuk keadaan darurat.",
      },
      terms: {
        eyebrow: "Batas layanan",
        title: "Apa yang H&C Care lakukan dan tidak lakukan",
        body: "Kami menyediakan case management dan koordinasi, bukan klinik, asuransi, atau layanan darurat.",
        cards: [
          { title: "Termasuk", text: "Organisasi dokumen, koordinasi, pengingat, dan dukungan keluarga." },
          { title: "Tidak termasuk", text: "Biaya medis, rumah sakit, obat, operasi, dan perjalanan." },
          { title: "Keputusan medis", text: "Semua keputusan dibuat rumah sakit dan dokter." },
          { title: "Tanpa jaminan", text: "Tidak menjamin penerimaan, terapi, operasi, hasil, atau penghematan biaya." },
        ],
        note: "Detail harus dikonfirmasi dalam perjanjian tertulis.",
      },
      disclaimer: {
        title: "Penafian medis",
        body: `${brand.name} menyediakan informasi dan koordinasi, tidak menggantikan diagnosis atau terapi dokter. Hasil dan biaya tidak dijamin.`,
      },
    },
  },

  ms: {
    nav: {
      home: "Utama",
      membership: "Keahlian",
      oncology: "Koordinasi Onkologi",
      mdt: "Sumber MDT",
      experts: "Pakar",
      hospitals: "Hospital",
      journey: "Laluan",
      contact: "Hubungi",
      privacy: "Privasi",
      terms: "Sempadan Servis",
    },
    seo: {
      title: `${brand.name} | Pengurusan Kes Onkologi di Guangzhou`,
      description: "Syarikat health advisory Hong Kong untuk pengurusan kes berasaskan keahlian dan koordinasi laluan onkologi di Guangzhou.",
    },
    hero: {
      eyebrow: "Health advisory Hong Kong untuk pesakit antarabangsa",
      title: "Pengurusan kes onkologi berasaskan keahlian",
      highlight: "menghubungkan rekod, sumber MDT dan laluan hospital Guangzhou",
      body: `${brand.name} membantu pesakit antarabangsa mengatur rekod, menyediakan soalan dan menyelaras komunikasi dengan pasukan klinikal sesuai di Guangzhou.`,
      primary: "Mohon konsultasi keahlian",
      secondary: "Lihat laluan pesakit",
      trust: [
        { title: "Model tahunan", text: "Yuran servis meliputi organisasi kes, koordinasi, peringatan dan komunikasi keluarga." },
        { title: "Fokus limfoma MDT", text: "Sumber utama kami ialah koordinasi limfoma dan onkologi kompleks di Guangdong dan Guangzhou." },
        { title: "Sempadan jelas", text: "Kami tidak memberi diagnosis, rawatan, kecemasan, insurans atau jaminan hasil." },
      ],
    },
    sections: {
      focus: {
        eyebrow: "Apa yang kami selaras",
        title: "Lapisan servis praktikal sekitar rawatan kanser hospital",
        body: "Pesakit memerlukan rekod teratur, soalan jelas, kesinambungan peringkat rawatan dan komunikasi keluarga.",
        cards: [
          { title: "Pengurusan fail kes", text: "Menyusun patologi, imej, rawatan terdahulu, ubat dan soalan utama." },
          { title: "Koordinasi pasukan klinikal", text: "Koordinasi komunikasi dengan onkologi, limfoma, MDT dan bedah jika sesuai." },
          { title: "Susulan berterusan", text: "Peringatan, persediaan semakan semula, konteks perjalanan dan komunikasi keluarga." },
        ],
      },
      membership: {
        eyebrow: "Servis keahlian",
        title: "Pengurusan kes tahunan untuk pesakit onkologi antarabangsa",
        body: "Yuran keahlian meliputi pengurusan kes, koordinasi dan sokongan konsultasi. Kos hospital, doktor, ujian, ubat, rawatan, pembedahan dan perjalanan adalah berasingan.",
        plans: [
          { name: "Care Navigation Membership", fit: "Untuk laluan pertama dan organisasi rekod.", items: ["Senarai dokumen", "Organisasi fail kes", "Koordinasi temu janji dan komunikasi", "Peringatan susulan"] },
          { name: "Oncology Coordination Membership", fit: "Untuk kes kompleks yang perlu persediaan soalan dan koordinasi peringkat rawatan.", items: ["Persediaan soalan MDT dan pakar", "Garis masa penilaian semula", "Koordinasi komunikasi pasukan klinikal", "Ringkasan kes dan penjejakan langkah"] },
          { name: "Concierge Case Management", fit: "Untuk koordinasi jangka panjang merentas peringkat.", items: ["Case manager khusus", "Garis masa merentas peringkat", "Peringatan masuk, keluar dan semakan", "Sokongan komunikasi keluarga"] },
        ],
        modulesTitle: "Modul sokongan khusus",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "Persediaan bahan perbincangan untuk limfoma dan kes kompleks bersama pakar Guangdong dan Guangzhou." },
          { title: "Immune Recovery Support", text: "Organisasi data status imun, susulan konsultasi doktor, koordinasi nutrisi dan gaya hidup, serta semakan suku tahunan untuk fasa stabil atau pemulihan." },
          { title: "Surgical Pathway Coordination", text: "Sokongan komunikasi apabila penilaian semula menunjukkan laluan bedah boleh dibincangkan." },
        ],
        modulesNote: "Modul ini ialah sokongan koordinasi dan konsultasi, bukan pakej perubatan atau janji rawatan.",
        note: "Keahlian bukan insurans atau pakej perubatan. Penerimaan, rawatan, pembedahan, kos dan hasil ditentukan hospital dan doktor.",
      },
      oncology: {
        eyebrow: "Koordinasi onkologi",
        title: "Daripada semakan imunoterapi kepada koordinasi pasukan bedah",
        body: "Kami membantu keluarga menyediakan maklumat untuk perbincangan laluan hospital. Keputusan perubatan dibuat oleh hospital dan doktor.",
        cards: [
          { title: "Limfoma dahulu", text: "Persediaan dan koordinasi untuk limfoma berulang, refraktori atau kompleks." },
          { title: "Soalan imunoterapi", text: "Persediaan soalan tentang imunoterapi, terapi sasaran, terapi sel dan masa penilaian semula." },
          { title: "Laluan bedah", text: "Jika sesuai, kami membantu koordinasi komunikasi dengan pasukan bedah." },
          { title: "Sokongan keluarga", text: "Menjadikan langkah praktikal sebagai garis masa jelas tanpa mengganti nasihat perubatan." },
        ],
        note: "Kami tidak memilih rawatan. Kami menyediakan kes dan menyelaras komunikasi untuk penilaian doktor.",
      },
      mdt: {
        eyebrow: "Sumber MDT limfoma",
        title: "Koordinasi pelbagai disiplin berfokus Guangdong",
        body: "Rangkaian terkuat kami ialah limfoma dan onkologi kompleks di Guangdong, terutama Guangzhou.",
        cards: [
          { title: "Sebelum MDT", text: "Memperjelas diagnosis, laporan, imej, rawatan terdahulu dan soalan." },
          { title: "Semasa koordinasi", text: "Persediaan maklumat dan komunikasi dengan pasukan klinikal." },
          { title: "Selepas semakan", text: "Langkah pentadbiran, dokumen kurang dan masa susulan." },
        ],
        questionsTitle: "Soalan kes yang kami bantu sediakan",
        questions: ["Adakah dokumen cukup untuk semakan pakar?", "Adakah limfoma berulang perlu MDT sebelum perjalanan?", "Penilaian semula apa diperlukan sebelum bedah?", "Dokumen apa perlu diterjemah?", "Garis masa susulan apa perlu disediakan?"],
        note: "Koordinasi MDT tidak menjamin penerimaan doktor, hospital, rawatan atau pembedahan tertentu.",
      },
      experts: {
        eyebrow: "Latar klinikal",
        title: "Profil pakar untuk membina keyakinan",
        body: "Profil ini membantu memahami latar klinikal laluan Guangzhou dan bukan amalan perubatan H&C Care di Hong Kong.",
        people: [
          { name: "Dr. Cai Qichun", role: "Chief Physician · Oncology Center Director", image: experts.cai, text: "Pakar onkologi kanan dengan pengalaman limfoma, imunoterapi, terapi sel dan rawatan individu." },
          { name: "Prof. Huang Huiqiang", role: "Chief Physician · Professor · PhD Supervisor", image: experts.huang, text: "Pakar limfoma dan keganasan hematologi dengan pengalaman terapi sistemik dan transplantasi sel stem." },
          { name: "Dr. Xie Guoming", role: "Chief Physician · Solid Tumor Medical Oncology", image: experts.xie, text: "Pakar onkologi perubatan dengan pengalaman lebih 40 tahun dalam tumor pepejal." },
        ],
        note: "Maklumat doktor ialah latar klinikal, bukan tawaran diagnosis atau rawatan di Hong Kong.",
      },
      hospitals: {
        eyebrow: "Persekitaran Guangzhou",
        title: "Laluan hospital sebenar dengan sokongan praktikal",
        body: "Kami membantu keluarga memahami dokumen, kemasukan, penilaian semula dan langkah berikutnya.",
        cards: [
          { title: "Laluan hospital", text: "Koordinasi mengikuti aliran kerja hospital sebenar." },
          { title: "Persediaan pesakit antarabangsa", text: "Dokumen, masa, perjalanan, kemasukan dan susulan." },
          { title: "Kejelasan sebelum perjalanan", text: "Pelan koordinasi praktikal sebelum komunikasi hospital." },
        ],
        note: `${brand.name} operated by ${brand.legalName}. This website is not the official website of any hospital unless stated.`,
      },
      journey: {
        eyebrow: "Laluan pesakit",
        title: "Daripada kontak pertama kepada susulan",
        body: "Langkah pertama ialah memahami kes, mengatur rekod dan menentukan maklumat yang diperlukan.",
        steps: [
          { title: "Kontak awal", text: "Diagnosis, negara, tahap semasa dan soalan utama keluarga." },
          { title: "Konsultasi keahlian", text: "Menentukan tahap sokongan yang sesuai." },
          { title: "Organisasi rekod", text: "Diagnosis, patologi, imej, rawatan dan status semasa." },
          { title: "Koordinasi pasukan", text: "Komunikasi dengan onkologi, MDT atau bedah jika sesuai." },
          { title: "Pengurusan susulan", text: "Langkah berikut, dokumen kurang, masa semakan semula dan komunikasi keluarga." },
        ],
        documentsTitle: "Dokumen",
        documents: ["Diagnosis dan ringkasan", "Patologi", "Imej dan keputusan ujian", "Ujian genetik/molekul", "Sejarah rawatan dan ubat", "Simptom dan jangkitan semasa"],
      },
      contact: {
        eyebrow: "Hubungi",
        title: "Mohon konsultasi keahlian",
        body: `Hubungi ${contact.name} melalui WhatsApp atau email. Sertakan diagnosis, wilayah, status semasa dan soalan utama.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp Hugo",
        privacy: "Maklumat perubatan digunakan untuk memahami kes dan koordinasi; boleh dikongsi dengan pasukan perubatan relevan di luar Hong Kong.",
      },
      privacy: {
        eyebrow: "Privasi",
        title: "Cara kami mengendalikan maklumat",
        body: `${brand.name} menerima maklumat perubatan sensitif hanya untuk persediaan kes dan koordinasi.`,
        cards: [
          { title: "Dikumpulkan", text: "Diagnosis, laporan, sejarah rawatan, kontak dan soalan." },
          { title: "Tujuan", text: "Organisasi kes, komunikasi dan susulan." },
          { title: "Penerima", text: "Hospital, doktor, koordinator, penterjemah dan rakan sokongan relevan." },
          { title: "Hak anda", text: "Akses, pembetulan atau pemadaman boleh diminta jika praktikal." },
        ],
        note: "Jangan gunakan laman ini untuk kecemasan.",
      },
      terms: {
        eyebrow: "Sempadan servis",
        title: "Apa yang H&C Care lakukan dan tidak lakukan",
        body: "Kami menyediakan pengurusan kes dan koordinasi, bukan klinik, insurans atau kecemasan.",
        cards: [
          { title: "Termasuk", text: "Organisasi dokumen, koordinasi, peringatan dan sokongan keluarga." },
          { title: "Tidak termasuk", text: "Kos perubatan, hospital, ubat, pembedahan dan perjalanan." },
          { title: "Keputusan perubatan", text: "Semua keputusan dibuat hospital dan doktor." },
          { title: "Tiada jaminan", text: "Tidak menjamin penerimaan, rawatan, pembedahan, hasil atau penjimatan." },
        ],
        note: "Butiran harus disahkan dalam perjanjian bertulis.",
      },
      disclaimer: {
        title: "Penafian perubatan",
        body: `${brand.name} menyediakan maklumat dan koordinasi, tidak menggantikan diagnosis atau rawatan doktor. Hasil dan kos tidak dijamin.`,
      },
    },
  },
};
