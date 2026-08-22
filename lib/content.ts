import { brand, contact, type Locale } from "./site";

type Card = { title: string; text: string };
type Step = { title: string; text: string };
type Expert = { name: string; role: string; text: string; image: string };
type MembershipPlan = { name: string; price: string; fit: string; items: string[] };
type RegisterSection = {
  eyebrow: string;
  title: string;
  body: string;
  portalTitle: string;
  portalText: string;
  portalCards: Card[];
  stepsTitle: string;
  steps: Card[];
  documentsTitle: string;
  documents: string[];
  fieldsTitle: string;
  fields: string[];
  secureTitle: string;
  secureItems: string[];
  consentTitle: string;
  consent: string;
  email: string;
  whatsapp: string;
  note: string;
};

export const mainSectionKeys = ["membership", "oncology", "mdt", "experts", "hospitals", "journey", "register", "contact"] as const;
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
    pain: { eyebrow: string; title: string; body: string; cards: Card[] };
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
    register: RegisterSection;
    clinicalTeam: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
    ethics: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
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
      register: "Register",
      contact: "Contact",
      privacy: "Privacy Notice",
      terms: "Service Boundaries",
    },
    seo: {
      title: `${brand.name} | Oncology Medical Coordination in China`,
      description:
        "Helping international cancer patients prepare records, connect with suitable oncology specialists, explore treatment pathways, and navigate hospital care in China.",
    },
    hero: {
      eyebrow: "Oncology-focused medical coordination in China",
      title: "Helping international cancer patients",
      highlight: "access trusted oncology care in China",
      body:
        `${brand.name} helps international cancer patients prepare medical records, connect with experienced oncology specialists, explore advanced treatment pathways, and navigate hospital care in China.`,
      primary: "Send records for review",
      secondary: "View the patient journey",
      trust: [
        { title: "Oncology-focused coordination", text: "We are not a general medical travel agency. Our public service line is focused on cancer care pathways." },
        { title: "Guangdong specialist access", text: "We help match each case with suitable oncology, lymphoma, MDT, or surgical resources in Guangdong and Guangzhou." },
        { title: "Clear service boundaries", text: "We help patients understand, prepare, coordinate, and communicate. We do not diagnose or treat patients." },
      ],
    },
    sections: {
      pain: {
        eyebrow: "Patient challenges",
        title: "Why international cancer patients need trusted guidance in China",
        body:
          "China has strong oncology resources, but the system can be difficult to navigate from overseas. Patients need medically literate coordination, not only translation or travel support.",
        cards: [
          { title: "Choosing the right pathway", text: "Patients may not know which hospital, department, or specialist is suitable for their cancer type and treatment history." },
          { title: "Verifying real resources", text: "It can be difficult to judge whether a medical resource is authentic, clinically relevant, and realistic for the case." },
          { title: "Medical-language complexity", text: "Pathology, imaging, genetic testing, and treatment plans require medically informed preparation beyond ordinary translation." },
          { title: "Unfamiliar hospital flow", text: "Appointments, investigations, admission, payment, discharge, and repeat review can feel unclear for overseas families." },
          { title: "Family logistics in China", text: "Accommodation, transport, accompaniment, meals, and communication with relatives all affect the patient's experience." },
        ],
      },
      focus: {
        eyebrow: "What we coordinate for patients",
        title: "A practical coordination layer around hospital-based oncology care",
        body:
          "Our role is to make the case understandable, the pathway realistic, and the communication structured before a patient commits time, money, and travel.",
        cards: [
          { title: "Medical record review and preparation", text: "We organize diagnosis, pathology, imaging, treatment history, medicines, molecular tests, and key questions for clinical review." },
          { title: "Oncology specialist matching", text: "We help identify suitable oncology specialists based on cancer type, stage, treatment history, current condition, and clinical needs." },
          { title: "Second opinion coordination", text: "We prepare the case and communication points for specialist opinion or hospital pathway discussion." },
          { title: "Multidisciplinary consultation arrangement", text: "For complex lymphoma or solid tumor questions, we help prepare materials for MDT-style discussion when appropriate." },
          { title: "Hospital appointment and admission support", text: "We coordinate practical steps around appointment preparation, admission communication, and required documents." },
          { title: "Medical translation and communication", text: "We support doctor-patient communication with medical context, while preserving the treating doctor's decision-making role." },
          { title: "Payment, accommodation, transport, and daily-life support", text: "We help families prepare for practical issues around hospital care and life in China." },
          { title: "Follow-up after returning home", text: "We help organize follow-up questions, repeat review timing, and communication after the patient leaves China." },
        ],
      },
      membership: {
        eyebrow: "Patient service fees",
        title: "Three coordination service levels for international oncology patients",
        body:
          "The fees below are H&C Care coordination service fees only. Hospital fees, physician fees, tests, medicines, treatment, surgery, travel, accommodation, insurance, vehicles, and other third-party costs are separate.",
        plans: [
          {
            name: "Basic Pathway Consultation",
            price: "Free",
            fit: "For patients who are first exploring whether China oncology care may be relevant.",
            items: ["Initial needs screening", "General China oncology pathway explanation", "Medical record and travel-preparation checklist", "One online explanation or basic text consultation"],
          },
          {
            name: "Single-Cycle Coordination",
            price: "USD 300 / patient / service cycle",
            fit: "For one focused medical-record preparation, specialist communication, consultation, or admission coordination cycle.",
            items: ["Medical record collection and case timeline", "Specialist or hospital communication preparation", "Appointment, remote consultation, or admission coordination", "Pre-travel checklist and one post-discharge follow-up"],
          },
          {
            name: "Annual Patient Coordination",
            price: "USD 980 / patient / 12 months",
            fit: "For patients who may need repeated China treatment visits and continuous case management within one year.",
            items: ["Annual electronic case file maintenance", "Follow-up and document update reminders", "Up to 4 hospital coordination cycles", "Up to 2 specialist or pathway reassessment coordination rounds"],
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
          "Fees are charged per patient and are not transferable. Basic free consultation is normally limited to one use per patient. These services are not insurance, medical packages, or prepaid treatment plans; acceptance, diagnosis, treatment eligibility, surgery, cost, and outcomes are determined by hospitals and licensed physicians. Final service scope should be confirmed in a written agreement before payment.",
      },
      oncology: {
        eyebrow: "Advanced oncology pathways",
        title: "Exploring appropriate treatment and research pathways in China",
        body:
          "For eligible patients, we can help prepare records and coordinate communication around advanced oncology options. Eligibility and treatment direction must always be assessed by licensed physicians and receiving institutions.",
        cards: [
          { title: "Immunotherapy and targeted therapy review", text: "We help prepare prior treatment history, biomarker results, response information, and questions for specialist discussion." },
          { title: "CLDN18.2-positive gastric cancer CAR-T pathway", text: "CLDN18.2 is an important biomarker in gastric and gastroesophageal junction cancers. Company public information reports that satri-cel/CT041 has been approved in China as the first CAR-T cell product for a solid tumor indication, for adults with CLDN18.2-positive, HER2-negative advanced gastric or gastroesophageal junction adenocarcinoma after at least two prior lines of therapy. We help organize pathology, biomarker, imaging, and treatment-history records for qualified team communication." },
          { title: "Cellular therapy discussion", text: "Where clinically relevant, we help families prepare questions about cellular therapy pathways, eligibility, safety, timing, and hospital requirements." },
          { title: "Clinical trial opportunity exploration", text: "For eligible patients, we can help explore potential clinical research opportunities, prepare documents, understand eligibility requirements, and coordinate communication." },
          { title: "Surgery-after-reassessment coordination", text: "When reassessment suggests surgery may be discussed, we help coordinate communication with appropriate surgical teams." },
          { title: "Family-facing pathway clarity", text: "We turn complex hospital steps into a practical timeline without replacing medical advice." },
        ],
        note:
          "We do not provide CAR-T or other treatments, determine eligibility, promise access to approved treatment or clinical research pathways, promise clinical trial enrollment, or promise outcomes. We help patients prepare, coordinate, and communicate.",
      },
      mdt: {
        eyebrow: "Guangdong oncology specialists",
        title: "Access to leading oncology specialists in Guangdong",
        body:
          "We help match each patient with suitable oncology resources based on cancer type, stage, treatment history, current condition, and clinical needs. The emphasis is suitability, not simply famous names.",
        cards: [
          { title: "Lymphoma MDT strength", text: "Our strongest resource layer is lymphoma and complex hematologic oncology coordination across Guangdong and Guangzhou." },
          { title: "Solid tumor specialist matching", text: "For solid tumors, we help prepare the case for appropriate medical oncology, surgical, radiation, or integrated pathway discussion." },
          { title: "Second opinion and MDT preparation", text: "We organize documents and questions so specialist or multidisciplinary discussions can be more focused." },
          { title: "Suitable pathway over reputation alone", text: "The right path depends on diagnosis, stage, prior therapy, patient condition, and realistic hospital availability." },
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
        title: "How the process works",
        body:
          "The first step is not to promise treatment. It is to understand the case, organize records, and decide what information is needed for a meaningful specialist or hospital discussion.",
        steps: [
          { title: "Submit medical records", text: "Share diagnosis, country or region, current status, prior treatment, and the main question the family needs answered." },
          { title: "Initial coordination assessment", text: "We assess whether coordination is realistic and what information is missing before specialist communication." },
          { title: "Specialist pathway matching", text: "We identify suitable oncology, MDT, research, or surgical communication pathways based on the case." },
          { title: "Appointment or consultation arrangement", text: "We coordinate appointment preparation, document flow, questions, and practical communication." },
          { title: "Travel and hospital preparation", text: "We help families understand travel timing, admission context, payment preparation, accommodation, and daily-life needs." },
          { title: "In-hospital translation and coordination", text: "When needed, we support medical communication and practical coordination during hospital visits." },
          { title: "Follow-up communication support", text: "After discharge or return home, we help track follow-up questions, repeat review timing, and family communication." },
        ],
        documentsTitle: "Documents to prepare",
        documents: ["Current diagnosis and medical summary", "Pathology report", "Imaging reports and recent test results", "Genetic or molecular testing, if available", "Prior treatment history and medication list", "Current symptoms, performance status, and infection history"],
      },
      register: {
        eyebrow: "Member registration",
        title: "Register interest and prepare medical records for case review",
        body:
          "Start here if the patient would like H&C Care to review whether membership or a coordination service is appropriate. Please do not upload emergency requests or urgent clinical instructions through this website.",
        portalTitle: "Patient member file entry",
        portalText:
          "The first online step is to register interest and create a structured case file. Before sensitive records are transferred, we confirm the service scope, consent, and the safest submission channel for the patient or authorized family member.",
        portalCards: [
          { title: "Create a member file", text: "We collect only the minimum basic information needed to understand the patient, language, cancer type, and coordination need." },
          { title: "Confirm consent and service scope", text: "Paid coordination starts only after the patient or authorized family member understands the service boundary and confirms the written arrangement." },
          { title: "Prepare secure record submission", text: "Medical documents are sent only through a confirmed channel. A full account-based upload portal should be added only with authentication, encrypted storage, and access logs." },
        ],
        stepsTitle: "How submission works",
        steps: [
          { title: "Register interest", text: "Send the patient's basic situation, country or region, preferred language, cancer type, and the service tier being considered." },
          { title: "Prepare the record package", text: "Use the checklist below to collect reports before case review. Clear PDFs, image links, and dated summaries are preferred." },
          { title: "Submit through a confirmed channel", text: "After initial contact, we will confirm the appropriate email or WhatsApp route and whether a written service agreement is needed before paid coordination begins." },
        ],
        documentsTitle: "Medical records checklist",
        documents: [
          "Biopsy reports",
          "PET/CT scan reports",
          "Any pathology or immunohistochemistry (IHC) reports",
          "Any genetic, molecular, or NGS test results",
          "Blood test results from the past 2-4 weeks",
          "A summary of all treatments received, including surgery, chemotherapy, radiotherapy, immunotherapy, targeted therapy, cellular therapy, or clinical trials",
          "A list of current medications, supplements, allergies, and major adverse reactions",
          "A brief description of current symptoms, daily activity level, appetite, weight change, fever, pain, and overall condition",
          "Recent CT, MRI, ultrasound, endoscopy, or other imaging reports, plus DICOM files or image-sharing links if available",
          "Hospital discharge summaries, diagnosis letters, surgery notes, endoscopy reports, or procedure records if available",
          "Important medical history such as heart, kidney, liver, infection, autoimmune disease, hepatitis, tuberculosis, or other major conditions",
          "Patient passport or identity page, contact person details, and authorization if a family member is communicating on behalf of the patient",
        ],
        fieldsTitle: "Information to include in the first message",
        fields: ["Patient initials or name", "Age and sex", "Country or region", "Diagnosis and stage, if known", "Current treatment status", "Main question for coordination", "Preferred language", "Preferred service tier"],
        secureTitle: "For a future secure member portal",
        secureItems: [
          "Patient login and authorized family access",
          "Encrypted document storage and controlled access logs",
          "Upload status, missing-document reminders, and case-manager notes",
          "Clear consent, retention, deletion, and emergency-use boundaries",
        ],
        consentTitle: "Privacy and consent",
        consent:
          "Medical records contain sensitive personal data. Please send documents only if the patient or authorized family member agrees that H&C Care may use them for case preparation and coordination communication.",
        email: "Email registration materials",
        whatsapp: "Ask before sending files on WhatsApp",
        note:
          "This registration page is an intake and preparation guide. It is not an emergency channel, medical consultation platform, diagnosis service, treatment recommendation, or guarantee that any hospital, doctor, treatment, surgery, or clinical research pathway will accept the case.",
      },
      clinicalTeam: {
        eyebrow: "Clinically led coordination",
        title: "Led by healthcare professionals, not general travel agents",
        body:
          "Medical coordination is different from ordinary travel support. Our team combines clinical literacy, case organization, and practical hospital navigation for oncology patients.",
        cards: [
          { title: "Healthcare professional leadership", text: "A core coordination member holds a UK Master's degree in Nursing, a New York State Registered Nurse license, a Chinese nursing license, and the title of Associate Chief Nurse in China." },
          { title: "Oncology and hospital experience", text: "Clinical background includes years of experience in oncology, emergency care, and operating room settings, supporting safer communication and case preparation." },
          { title: "Medical-language coordination", text: "We help families turn complex medical records, clinical questions, and hospital instructions into an organized pathway." },
        ],
        note:
          "These credentials support case coordination and medical communication. They do not mean that H&C Care provides diagnosis, treatment, nursing services, or medical practice in Hong Kong.",
      },
      ethics: {
        eyebrow: "Trust and compliance",
        title: "Transparent and ethical medical coordination",
        body:
          "Cancer patients and families need hope, but they also need honest boundaries. We keep the coordination role clear so patients can make informed decisions.",
        cards: [
          { title: "No diagnosis or treatment by H&C Care", text: "All diagnosis, prescriptions, procedures, admission decisions, and treatment decisions are made by hospitals and licensed physicians." },
          { title: "No outcome promises", text: "We do not promise any specific medical result, survival benefit, tumor response, surgery, treatment access, or cost savings." },
          { title: "No clinical trial enrollment promises", text: "We can help explore and communicate about research opportunities, but eligibility and enrollment are decided by trial teams." },
          { title: "No exaggerated hospital relationships", text: "We do not present ourselves as an official hospital website or promise access to a specific doctor or institution." },
          { title: "Transparent service and cost boundaries", text: "Membership fees cover coordination services. Medical expenses are charged separately by hospitals, doctors, or relevant institutions." },
        ],
        note:
          "Formal service scope, fees, privacy handling, and responsibility boundaries should be confirmed in a written membership agreement before payment.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Request a membership consultation",
        body:
          `Contact ${contact.name} by WhatsApp or email. Please include the patient's diagnosis, country or region, current status, and the main coordination question. Do not send emergency requests through this website.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp H&C Care",
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
      register: "會員登記",
      contact: "聯絡",
      privacy: "私隱聲明",
      terms: "服務邊界",
    },
    seo: {
      title: `${brand.name} | 國際腫瘤患者來華就醫協調`,
      description: "協助國際腫瘤患者整理病歷、對接合適的中國腫瘤專家、評估治療路徑，並協調在中國的醫院就醫流程。",
    },
    hero: {
      eyebrow: "專注腫瘤的來華就醫協調",
      title: "協助國際腫瘤患者",
      highlight: "對接可信賴、合適、可落地的中國腫瘤醫療資源",
      body:
        `${brand.name} 協助國際腫瘤患者整理病歷、匹配有經驗的腫瘤專家、評估前沿治療路徑，並協調在中國就醫的實際流程。`,
      primary: "提交病歷諮詢",
      secondary: "查看服務流程",
      trust: [
        { title: "專注腫瘤協調", text: "我們不是普通醫療旅遊中介，公開服務主線聚焦腫瘤患者來華就醫路徑。" },
        { title: "廣東腫瘤資源", text: "根據癌種、分期、既往治療和當前狀況，協助匹配廣東及廣州合適的腫瘤、MDT 或手術資源。" },
        { title: "清晰服務邊界", text: "我們協助患者理解、準備、協調和溝通，不替代醫生診斷或治療。" },
      ],
    },
    sections: {
      pain: {
        eyebrow: "患者痛點",
        title: "為何國際腫瘤患者在中國就醫需要可信賴的引導",
        body: "中國有豐富的腫瘤醫療資源，但境外患者從海外直接判斷和接入並不容易。患者需要懂醫學語境的協調，而不只是翻譯或旅行安排。",
        cards: [
          { title: "不知道該找哪條路徑", text: "患者往往不清楚哪家醫院、哪個科室、哪位專家更適合自己的癌種、分期和既往治療情況。" },
          { title: "難以判斷資源真實性", text: "境外家屬很難判斷醫療資源是否真實、專業、與個案相關，而且是否具備實際落地可能。" },
          { title: "醫學語言複雜", text: "病理、影像、基因檢測和治療方案需要醫學語境下整理，普通翻譯往往不足以支撐專家溝通。" },
          { title: "醫院流程陌生", text: "預約、檢查、入院、付款、出院和復查流程，對境外患者及家屬都可能造成不確定感。" },
          { title: "赴華生活安排壓力", text: "住宿、交通、陪診、飲食、家屬溝通和日常安排，都會影響患者在中國就醫的實際體驗。" },
        ],
      },
      focus: {
        eyebrow: "我們為患者協調什麼",
        title: "圍繞醫院腫瘤治療路徑的實務協調層",
        body: "我們的角色是讓個案資料更清楚、就醫路徑更可落地、醫患溝通更有結構，避免患者在投入時間、費用和跨境出行前盲目推進。",
        cards: [
          { title: "病歷審閱與整理", text: "協助整理診斷、病理、影像、既往治療、用藥、分子檢測和需要醫生回答的核心問題。" },
          { title: "腫瘤專家匹配", text: "根據癌種、分期、治療史、目前狀況和臨床需求，協助匹配合適的腫瘤專家路徑。" },
          { title: "第二意見協調", text: "協助準備個案摘要、溝通問題和資料包，用於專家意見或醫院路徑討論。" },
          { title: "多學科會診安排", text: "對複雜淋巴瘤或實體瘤問題，協助準備 MDT 式討論所需資料。" },
          { title: "預約與入院支持", text: "協調預約準備、資料流轉、入院溝通和所需文件。" },
          { title: "醫學翻譯與醫患溝通", text: "在醫學語境下協助溝通醫生意見和患者問題，但保留接診醫生的醫療決策角色。" },
          { title: "付款、住宿、交通與生活支持", text: "協助家屬準備醫院費用溝通、住宿交通和在華就醫期間的日常安排。" },
          { title: "回國後隨訪溝通", text: "協助整理後續問題、復評時間、資料補充和回國後與相關團隊的溝通。" },
        ],
      },
      membership: {
        eyebrow: "患者服務收費",
        title: "境外腫瘤患者三檔協調服務",
        body: "以下費用僅為 H&C Care 的協調服務費。醫院費、醫生費、檢查、藥物、治療、手術、出行、住宿、保險、車輛及其他第三方費用均另行計算。",
        plans: [
          {
            name: "基礎路徑諮詢",
            price: "免費",
            fit: "適合正在初步了解中國腫瘤就醫可行性的患者。",
            items: ["初步需求篩選", "中國腫瘤就醫一般流程說明", "病歷資料及赴華準備清單", "一次線上說明或基礎文字諮詢"],
          },
          {
            name: "單次協調服務",
            price: "USD 300 / 患者 / 服務周期",
            fit: "適合一次完整病歷整理、專家溝通、遠程諮詢或入院協調周期。",
            items: ["病歷收集及病情時間線整理", "專家或醫院溝通資料準備", "門診、遠程諮詢或住院申請協調", "赴華前清單及一次出院後隨訪協調"],
          },
          {
            name: "年度患者協調",
            price: "USD 980 / 患者 / 連續12個月",
            fit: "適合一年內可能多次來華治療、需要持續病例管理和協調的患者。",
            items: ["年度電子病歷檔案維護", "復診及資料更新提醒", "年度內最多4次住院協調周期", "年度內最多2次專家或治療資源重新評估協調"],
          },
        ],
        modulesTitle: "專項支持模組",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "針對淋巴瘤、復發難治或複雜個案，協助準備廣東及廣州專家討論資料。" },
          { title: "Immune Recovery Support", text: "穩定期或康復期患者的免疫狀態資料整理、醫師支持性諮詢跟進、營養與生活管理建議協調、季度復盤。" },
          { title: "Surgical Pathway Coordination", text: "在復評結果提示可討論手術路徑時，協助與合適團隊進行溝通準備。" },
        ],
        modulesNote: "專項模組屬於協調與諮詢支持，不是醫療套餐或治療承諾。任何臨床決策均由持牌醫生及接診機構判斷。",
        note: "以上費用按每名患者計算，不可轉讓。免費基礎諮詢通常每名患者限一次。服務不是保險、醫療套餐或預付治療計劃；是否接收、診斷、治療資格、手術、費用和結果均由醫院及持牌醫生決定。正式服務範圍應在付款前以書面協議確認。",
      },
      oncology: {
        eyebrow: "前沿腫瘤治療路徑",
        title: "協助評估中國的合適治療與臨床研究路徑",
        body: "對部分符合條件的患者，我們可協助準備資料並圍繞前沿腫瘤路徑進行溝通協調。是否適合及治療方向必須由持牌醫生和接診機構評估。",
        cards: [
          { title: "免疫與靶向治療評估", text: "協助整理既往治療、標誌物結果、療效反應和需要專家討論的問題。" },
          { title: "CLDN18.2 陽性胃癌 CAR-T 路徑溝通", text: "CLDN18.2 是胃癌及胃食管交界癌的重要標誌物。科濟藥業公開資訊顯示，satri-cel/CT041（恺力美®）已在中國獲批上市，被稱為全球首個用於實體瘤適應症的 CAR-T 細胞產品，適用於 CLDN18.2 陽性、HER2 陰性，且既往至少二線治療失敗的成人晚期胃或胃食管交界部腺癌患者。我們可協助整理病理、標誌物、影像及既往治療資料，並協調合資格團隊進行個案可行性溝通。" },
          { title: "細胞治療問題準備", text: "在臨床相關時，協助家屬準備關於細胞治療路徑、適應條件、安全性、時間安排和醫院要求的問題。" },
          { title: "臨床研究機會探索", text: "對符合條件的腫瘤患者，可協助了解中國潛在臨床研究機會、準備醫療文件、理解入選條件並協調溝通。" },
          { title: "復評後手術路徑協調", text: "當復評提示可討論手術時，協助與合適手術團隊進行溝通準備。" },
          { title: "面向家屬的路徑梳理", text: "把複雜醫院流程整理成家屬可理解的時間線，但不替代醫生建議。" },
        ],
        note: "我們不提供 CAR-T 或其他治療、不判定治療資格、不保證獲得已上市治療或臨床研究路徑、不保證臨床研究入組，也不承諾療效或結果。我們協助患者準備、協調和溝通。",
      },
      mdt: {
        eyebrow: "廣東腫瘤專家資源",
        title: "對接廣東領先腫瘤專家與合適臨床路徑",
        body: "我們根據癌種、分期、既往治療、目前狀況和臨床需求協助匹配合適的腫瘤資源。重點是合適，而不是單純名氣大。",
        cards: [
          { title: "淋巴瘤 MDT 優勢", text: "我們最核心的資源層集中在廣東及廣州的淋巴瘤與複雜血液腫瘤協調。" },
          { title: "實體瘤專家匹配", text: "對實體瘤患者，協助準備內科、手術、放療或綜合治療路徑討論所需資料。" },
          { title: "第二意見與 MDT 準備", text: "協助整理資料和問題，讓專家或多學科討論更聚焦。" },
          { title: "合適優先於名氣", text: "合適路徑取決於診斷、分期、既往治療、患者狀態和醫院實際接收可能。" },
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
        title: "服務流程如何運作",
        body: "第一步不是承諾治療，而是了解個案、整理病歷，並判斷哪些資訊足以支撐有意義的專家或醫院溝通。",
        steps: [
          { title: "提交病歷資料", text: "提供診斷、所在國家或地區、目前狀況、既往治療和家屬最想解決的問題。" },
          { title: "初步協調評估", text: "評估協調是否可行，以及在聯絡專家前還缺少哪些關鍵資料。" },
          { title: "匹配專家路徑", text: "根據個案匹配合適的腫瘤、MDT、臨床研究或手術溝通路徑。" },
          { title: "安排預約或諮詢", text: "協調預約準備、資料流轉、問題清單和實際溝通。" },
          { title: "赴華與入院準備", text: "協助家屬了解出行時間、入院背景、付款準備、住宿和日常安排。" },
          { title: "院內翻譯與協調", text: "在需要時支持醫學溝通和醫院就診期間的實務協調。" },
          { title: "後續隨訪溝通", text: "出院或回國後，協助追蹤後續問題、復評時間和家屬溝通。" },
        ],
        documentsTitle: "建議準備資料",
        documents: ["目前診斷與病情摘要", "病理報告", "影像報告和近期檢查結果", "基因或分子檢測，如有", "既往治療史和用藥清單", "目前症狀、體能狀態和感染史"],
      },
      register: {
        eyebrow: "會員登記",
        title: "登記會員意向並準備病歷資料供個案評估",
        body: "如果患者希望由 H&C Care 評估是否適合會員或協調服務，可先從此頁開始。請勿通過本網站提交急症請求或高度緊急的臨床指示。",
        portalTitle: "患者會員個案檔案入口",
        portalText: "線上第一步是登記服務意向並建立結構化個案檔案。在轉交敏感病歷前，我們會先確認服務範圍、患者授權，以及對患者或獲授權家屬最合適的提交渠道。",
        portalCards: [
          { title: "建立會員檔案", text: "只收集理解患者、語言、癌種和協調需求所需的最少基本資料。" },
          { title: "確認授權與服務範圍", text: "付費協調只會在患者或獲授權家屬理解服務邊界並確認書面安排後開始。" },
          { title: "準備安全資料提交", text: "病歷只通過確認渠道傳送。完整帳戶式資料上傳系統，應在身份驗證、加密儲存和存取記錄配置完成後再加入。" },
        ],
        stepsTitle: "提交流程",
        steps: [
          { title: "登記服務意向", text: "先說明患者基本情況、所在國家或地區、偏好語言、癌種，以及正在考慮的服務檔次。" },
          { title: "準備病歷資料包", text: "按以下清單整理報告。建議提供清晰 PDF、影像連結和帶日期的病情摘要。" },
          { title: "經確認渠道提交", text: "初步聯絡後，我們會確認適合的電郵或 WhatsApp 提交方式；付費協調開始前需確認書面服務協議。" },
        ],
        documentsTitle: "病歷資料清單",
        documents: [
          "活檢報告",
          "PET/CT 掃描報告",
          "任何病理或免疫組化（IHC）報告",
          "任何基因、分子或 NGS 檢測結果",
          "過去2至4週的血液檢查結果",
          "既往所有治療摘要，包括手術、化療、放療、免疫治療、靶向治療、細胞治療或臨床研究經歷",
          "目前用藥、營養補充劑、過敏史和重要不良反應清單",
          "目前症狀、日常活動能力、食慾、體重變化、發熱、疼痛及整體狀況簡述",
          "近期 CT、MRI、超聲、內鏡或其他影像報告；如有，請提供 DICOM 文件或影像分享連結",
          "出院小結、診斷證明、手術記錄、內鏡報告或操作記錄，如有",
          "重要既往病史，例如心、腎、肝、感染、自身免疫病、肝炎、結核或其他重大疾病",
          "患者護照或身份頁、聯絡人資料；如由家屬代為溝通，請提供患者授權",
        ],
        fieldsTitle: "首封信息建議包含",
        fields: ["患者姓名或縮寫", "年齡和性別", "所在國家或地區", "診斷和分期，如已知", "目前治療狀態", "希望協調的主要問題", "偏好語言", "希望了解的服務檔次"],
        secureTitle: "後續安全會員系統應包含",
        secureItems: [
          "患者登入和獲授權家屬訪問",
          "加密病歷儲存和受控存取記錄",
          "資料提交狀態、缺失文件提醒和個案經理備註",
          "清晰的同意、保存、刪除和急症使用邊界",
        ],
        consentTitle: "私隱與授權",
        consent: "病歷屬於敏感個人資料。請僅在患者本人或獲授權家屬同意後發送，並確認 H&C Care 可將資料用於個案準備及協調溝通。",
        email: "電郵提交登記資料",
        whatsapp: "WhatsApp 先確認提交方式",
        note: "此頁僅為登記與資料準備指引，不是急症渠道、醫療諮詢平台、診斷服務、治療建議，也不保證任何醫院、醫生、治療、手術或臨床研究路徑會接收個案。",
      },
      clinicalTeam: {
        eyebrow: "醫療專業人員主導",
        title: "我們不是普通旅行陪診團隊",
        body: "腫瘤就醫協調不同於普通旅行安排。團隊需要理解病歷、臨床問題、醫院流程和患者家庭的實際壓力。",
        cards: [
          { title: "醫療專業背景主導", text: "核心協調成員具備英國護理碩士、美國紐約州註冊護士資格、中國護士執業資格及中國副主任護師職稱。" },
          { title: "腫瘤與醫院場景經驗", text: "臨床背景涵蓋腫瘤、急診及手術室等工作場景，有助於更安全地進行病歷準備和醫學溝通。" },
          { title: "醫學語境下的協調", text: "協助家屬把複雜病歷、臨床問題和醫院要求整理成更清晰的就醫路徑。" },
        ],
        note: "以上背景用於支持個案協調和醫學溝通，不表示 H&C Care 在香港提供診斷、治療、護理服務或醫療執業。",
      },
      ethics: {
        eyebrow: "信任與合規",
        title: "透明、合規、負責任的醫療協調",
        body: "腫瘤患者和家屬需要希望，也需要真實邊界。我們清楚界定協調角色，讓患者能在充分理解下作出決定。",
        cards: [
          { title: "不由 H&C Care 診斷或治療", text: "所有診斷、處方、操作、入院和治療決定均由醫院及持牌醫生作出。" },
          { title: "不作醫療結果保證", text: "不承諾任何特定醫療結果、生存獲益、腫瘤反應、手術機會、治療可及或費用節省。" },
          { title: "不保證臨床研究入組", text: "我們可協助了解和溝通臨床研究機會，但是否符合條件及能否入組由研究團隊決定。" },
          { title: "不誇大醫院或專家關係", text: "我們不把自己呈現為任何醫院官方網站，也不承諾指定醫生或機構一定接收。" },
          { title: "服務與費用邊界透明", text: "會員費覆蓋協調服務；醫療相關費用由醫院、醫生或相關機構另行收取。" },
        ],
        note: "正式服務範圍、費用、私隱處理和責任邊界，應在付款前通過書面會員協議確認。",
      },
      contact: {
        eyebrow: "聯絡",
        title: "申請會員諮詢",
        body: `請通過 WhatsApp 或電郵聯絡 ${contact.name}。請說明患者診斷、所在國家或地區、目前狀況和主要協調問題。緊急情況請勿通過本網站處理。`,
        email: "電郵 H&C Care",
        whatsapp: "WhatsApp 聯絡 H&C Care",
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
      register: "Регистрация",
      contact: "Контакты",
      privacy: "Конфиденциальность",
      terms: "Границы услуг",
    },
    seo: {
      title: `${brand.name} | Координация онкологического лечения в Китае`,
      description: "Помогаем международным онкологическим пациентам подготовить документы, найти подходящих специалистов, изучить маршруты лечения и пройти больничный путь в Китае.",
    },
    hero: {
      eyebrow: "Координация онкологии в Китае",
      title: "Помогаем международным онкологическим пациентам",
      highlight: "получить доступ к надежным онкологическим маршрутам в Китае",
      body: `${brand.name} помогает подготовить медицинские документы, связаться с опытными онкологическими специалистами, изучить передовые маршруты лечения и пройти больничный путь в Китае.`,
      primary: "Отправить документы",
      secondary: "Посмотреть маршрут",
      trust: [
        { title: "Фокус на онкологии", text: "Мы не обычное агентство медицинского туризма; наша публичная линия сфокусирована на онкологии." },
        { title: "Специалисты Гуандуна", text: "Мы помогаем подобрать подходящие ресурсы онкологии, лимфомы, MDT или хирургии в Гуандуне и Гуанчжоу." },
        { title: "Четкие границы", text: "Мы помогаем понять, подготовить, координировать и коммуницировать, но не диагностируем и не лечим." },
      ],
    },
    sections: {
      pain: {
        eyebrow: "Проблемы пациента",
        title: "Почему международным пациентам нужна надежная навигация в Китае",
        body: "В Китае есть сильные онкологические ресурсы, но зарубежным семьям трудно понять систему без медицински грамотной координации.",
        cards: [
          { title: "Выбор маршрута", text: "Не всегда понятно, какая больница, отделение или специалист подходят для конкретного диагноза и истории лечения." },
          { title: "Проверка ресурсов", text: "Сложно оценить, является ли ресурс реальным, профессиональным и применимым к данному случаю." },
          { title: "Сложный медицинский язык", text: "Патология, визуализация, молекулярные тесты и схемы лечения требуют подготовки с медицинским контекстом." },
          { title: "Незнакомый процесс", text: "Запись, обследования, госпитализация, оплата, выписка и повторный контроль могут быть неясными." },
          { title: "Логистика семьи", text: "Проживание, транспорт, сопровождение и связь с родственниками влияют на весь опыт лечения." },
        ],
      },
      focus: {
        eyebrow: "Что мы координируем",
        title: "Практическая координация вокруг больничной онкологической помощи",
        body: "Мы помогаем сделать случай понятным, маршрут реалистичным, а коммуникацию структурированной до поездки и расходов.",
        cards: [
          { title: "Подготовка документов", text: "Диагноз, патология, визуализация, лечение, лекарства, молекулярные тесты и ключевые вопросы." },
          { title: "Подбор онколога", text: "Подбор подходящего специалиста по типу рака, стадии, истории лечения и текущему состоянию." },
          { title: "Координация second opinion", text: "Подготовка резюме случая и вопросов для экспертного мнения или больничного обсуждения." },
          { title: "MDT-обсуждение", text: "Подготовка материалов для сложной лимфомы или солидных опухолей, когда это уместно." },
          { title: "Запись и госпитализация", text: "Практические шаги по записи, передаче документов и коммуникации перед госпитализацией." },
          { title: "Медицинский перевод", text: "Поддержка общения врача и пациента с медицинским контекстом." },
          { title: "Бытовая поддержка", text: "Оплата, проживание, транспорт и повседневные вопросы во время лечения в Китае." },
          { title: "Follow-up после возвращения", text: "Вопросы после выписки, сроки повторного контроля и дальнейшая коммуникация." },
        ],
      },
      membership: {
        eyebrow: "Стоимость услуг для пациентов",
        title: "Три уровня координационных услуг для международных онкологических пациентов",
        body: "Указанные сборы являются только платой за координационные услуги H&C Care. Больничные, врачебные, анализы, лекарства, лечение, операция, поездка, проживание, страховка, транспорт и другие расходы третьих сторон оплачиваются отдельно.",
        plans: [
          { name: "Первичная консультация по маршруту", price: "Бесплатно", fit: "Для пациентов, которые впервые изучают возможность онкологической помощи в Китае.", items: ["Первичный скрининг потребностей", "Общее объяснение маршрута лечения в Китае", "Список медицинских документов и подготовки к поездке", "Одно онлайн-объяснение или базовая текстовая консультация"] },
          { name: "Координация одного цикла", price: "USD 300 / пациент / цикл услуги", fit: "Для одного цикла подготовки документов, связи со специалистом, консультации или госпитализации.", items: ["Сбор документов и временная линия случая", "Подготовка коммуникации со специалистом или больницей", "Координация записи, онлайн-консультации или госпитализации", "Список подготовки к поездке и один follow-up после выписки"] },
          { name: "Годовая координация пациента", price: "USD 980 / пациент / 12 месяцев", fit: "Для пациентов, которым в течение года могут понадобиться повторные поездки в Китай и постоянное управление случаем.", items: ["Ведение годового электронного файла случая", "Напоминания о follow-up и обновлении документов", "До 4 циклов координации госпитализации в год", "До 2 раундов координации повторной оценки специалиста или маршрута"] },
        ],
        modulesTitle: "Специальные модули поддержки",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "Подготовка материалов для обсуждения лимфомы и сложных случаев со специалистами Гуандуна и Гуанчжоу." },
          { title: "Immune Recovery Support", text: "Организация данных иммунного статуса, врачебное сопровождение, питание, образ жизни и квартальный обзор для стабильной или восстановительной фазы." },
          { title: "Surgical Pathway Coordination", text: "Поддержка коммуникации, когда повторная оценка позволяет обсуждать хирургический маршрут." },
        ],
        modulesNote: "Модули являются координационной и консультационной поддержкой, а не медицинскими пакетами или обещанием лечения.",
        note: "Сборы указаны на одного пациента и не передаются другим лицам. Бесплатная первичная консультация обычно ограничена одним разом для пациента. Услуги не являются страховкой, медицинским пакетом или предоплаченным лечением; принятие случая, диагноз, право на лечение, операция, стоимость и результат определяются больницами и врачами. Окончательный объем услуг должен быть подтвержден письменным соглашением до оплаты.",
      },
      oncology: {
        eyebrow: "Передовые онкологические маршруты",
        title: "Изучение подходящих лечебных и исследовательских возможностей в Китае",
        body: "Для подходящих пациентов мы помогаем подготовить документы и координировать коммуникацию по передовым онкологическим опциям. Решения принимают врачи и учреждения.",
        cards: [
          { title: "Иммуно- и таргетная терапия", text: "Подготовка истории лечения, биомаркеров, ответа на терапию и вопросов для специалиста." },
          { title: "CLDN18.2-позитивный рак желудка и CAR-T", text: "CLDN18.2 является важным биомаркером при раке желудка и гастроэзофагеального перехода. По публичной информации компании, satri-cel/CT041 одобрен в Китае как первый CAR-T продукт для солидной опухоли: для взрослых пациентов с CLDN18.2-позитивной, HER2-негативной распространенной аденокарциномой желудка или гастроэзофагеального перехода после неудачи как минимум двух линий терапии. Мы помогаем организовать патологию, биомаркеры, визуализацию и историю лечения для общения с квалифицированной командой." },
          { title: "Клеточная терапия", text: "Подготовка вопросов о маршрутах, критериях, безопасности, сроках и требованиях больницы." },
          { title: "Клинические исследования", text: "Помогаем изучить потенциальные исследования, документы, критерии и коммуникацию с командами." },
          { title: "Хирургия после переоценки", text: "Когда это уместно, координируем коммуникацию с хирургическими командами." },
          { title: "Ясность для семьи", text: "Переводим сложные шаги в понятную временную линию, не заменяя советы врача." },
        ],
        note: "Мы не предоставляем CAR-T или другое лечение, не определяем право на терапию, не гарантируем доступ к одобренному лечению или клиническим исследованиям, включение в исследование или результаты.",
      },
      mdt: {
        eyebrow: "Онкологи Гуандуна",
        title: "Доступ к ведущим онкологическим специалистам Гуандуна",
        body: "Мы помогаем подобрать подходящие ресурсы по типу рака, стадии, истории лечения, текущему состоянию и клиническим задачам.",
        cards: [
          { title: "Сильная сторона лимфомы", text: "Наиболее сильный слой ресурсов связан с лимфомой и сложной гематоонкологией." },
          { title: "Солидные опухоли", text: "Подготовка маршрута для медицинской онкологии, хирургии, лучевой терапии или комбинированного обсуждения." },
          { title: "Second opinion и MDT", text: "Организация документов и вопросов для более фокусного обсуждения." },
          { title: "Подходящий путь важнее имени", text: "Маршрут зависит от диагноза, стадии, прошлой терапии, состояния и реальной доступности." },
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
        title: "Как работает процесс",
        body: "Первый шаг — не обещать лечение, а понять случай, организовать документы и подготовить meaningful discussion со специалистом.",
        steps: [
          { title: "Передача документов", text: "Диагноз, страна, текущий статус, прошлое лечение и главный вопрос семьи." },
          { title: "Первичная оценка", text: "Оцениваем реалистичность координации и недостающие данные." },
          { title: "Подбор маршрута", text: "Онкология, MDT, исследование или хирургическая коммуникация по ситуации." },
          { title: "Запись или консультация", text: "Подготовка записи, документов, вопросов и коммуникации." },
          { title: "Подготовка поездки", text: "Сроки, госпитализация, оплата, проживание и бытовые потребности." },
          { title: "Внутрибольничная координация", text: "Поддержка медицинской коммуникации и практических шагов." },
          { title: "Follow-up", text: "Вопросы после выписки, сроки контроля и связь с семьей." },
        ],
        documentsTitle: "Документы",
        documents: ["Диагноз и резюме", "Патология", "Визуализация и анализы", "Генетика/молекулярные тесты", "История лечения и лекарства", "Текущие симптомы и инфекции"],
      },
      register: {
        eyebrow: "Регистрация пациента",
        title: "Регистрация интереса и подготовка медицинских документов",
        body: "Начните здесь, если пациент хочет понять, подходит ли членство или координационная услуга H&C Care. Не отправляйте экстренные запросы или срочные клинические инструкции через сайт.",
        portalTitle: "Вход для создания файла пациента",
        portalText:
          "Первый онлайн-шаг - регистрация интереса и создание структурированного файла случая. Перед передачей чувствительных медицинских документов мы подтверждаем объем услуги, согласие и самый безопасный канал отправки.",
        portalCards: [
          { title: "Создать файл пациента", text: "Мы собираем только минимальную базовую информацию о пациенте, языке, типе рака и потребности в координации." },
          { title: "Подтвердить согласие и объем услуги", text: "Платная координация начинается только после понимания границ услуги и подтверждения письменного соглашения пациентом или уполномоченной семьей." },
          { title: "Подготовить безопасную отправку", text: "Медицинские документы отправляются только через подтвержденный канал. Полный портал загрузки требует аутентификации, шифрованного хранения и журналов доступа." },
        ],
        stepsTitle: "Как отправляются материалы",
        steps: [
          { title: "Зарегистрировать интерес", text: "Укажите основную ситуацию пациента, страну или регион, предпочтительный язык, тип рака и интересующий уровень услуги." },
          { title: "Подготовить пакет документов", text: "Используйте список ниже. Предпочтительны четкие PDF, ссылки на изображения и резюме с датами." },
          { title: "Отправить через подтвержденный канал", text: "После первичного контакта мы подтвердим подходящий email или WhatsApp и необходимость письменного соглашения перед платной координацией." },
        ],
        documentsTitle: "Список медицинских документов",
        documents: [
          "Отчеты биопсии",
          "Отчеты PET/CT",
          "Любые патологоанатомические или IHC отчеты",
          "Любые генетические, молекулярные или NGS результаты",
          "Анализы крови за последние 2-4 недели",
          "Краткая история всех полученных видов лечения: операция, химиотерапия, радиотерапия, иммунотерапия, таргетная терапия, клеточная терапия или клинические исследования",
          "Список текущих лекарств, добавок, аллергий и серьезных нежелательных реакций",
          "Краткое описание текущих симптомов, активности, аппетита, изменения веса, температуры, боли и общего состояния",
          "Недавние CT, MRI, ultrasound, endoscopy или другие отчеты визуализации, а также DICOM-файлы или ссылки, если доступны",
          "Выписки, диагностические письма, операционные записи, эндоскопические отчеты или процедурные записи, если доступны",
          "Важный анамнез: сердце, почки, печень, инфекции, аутоиммунные болезни, гепатит, туберкулез или другие значимые заболевания",
          "Паспорт или удостоверение пациента, данные контактного лица и разрешение, если семья общается от имени пациента",
        ],
        fieldsTitle: "Что указать в первом сообщении",
        fields: ["Имя или инициалы пациента", "Возраст и пол", "Страна или регион", "Диагноз и стадия, если известны", "Текущий статус лечения", "Главный вопрос для координации", "Предпочтительный язык", "Интересующий уровень услуги"],
        secureTitle: "Для будущего безопасного портала",
        secureItems: [
          "Логин пациента и доступ уполномоченной семьи",
          "Шифрованное хранение документов и журналы контролируемого доступа",
          "Статус загрузки, напоминания о недостающих документах и заметки case manager",
          "Ясные правила согласия, хранения, удаления и экстренного использования",
        ],
        consentTitle: "Конфиденциальность и согласие",
        consent: "Медицинские документы содержат чувствительные персональные данные. Отправляйте их только при согласии пациента или уполномоченного члена семьи на использование H&C Care для подготовки случая и координации.",
        email: "Отправить материалы по email",
        whatsapp: "Сначала уточнить в WhatsApp",
        note: "Эта страница является руководством по регистрации и подготовке документов. Это не канал экстренной помощи, не медицинская консультация, не диагностика, не рекомендация лечения и не гарантия принятия больницей, врачом, лечением, операцией или клиническим исследованием.",
      },
      clinicalTeam: {
        eyebrow: "Клиническое руководство",
        title: "Медицинские специалисты, а не обычные travel agents",
        body: "Онкологическая координация требует клинической грамотности, организации случая и понимания больничных процессов.",
        cards: [
          { title: "Медицинская подготовка", text: "Ключевой координатор имеет Master's degree in Nursing from the UK, New York State RN license, Chinese nursing license и звание Associate Chief Nurse in China." },
          { title: "Опыт больничной работы", text: "Опыт включает онкологию, emergency care и operating room settings." },
          { title: "Медицинская коммуникация", text: "Мы помогаем структурировать документы, вопросы и инструкции больницы." },
        ],
        note: "Эти данные поддерживают координацию, но не означают диагностику, лечение, nursing services или медицинскую практику H&C Care в Гонконге.",
      },
      ethics: {
        eyebrow: "Доверие и комплаенс",
        title: "Прозрачная и этичная медицинская координация",
        body: "Пациентам нужна надежда, но также честные границы роли координатора.",
        cards: [
          { title: "Нет диагностики или лечения", text: "Все медицинские решения принимают больницы и лицензированные врачи." },
          { title: "Нет гарантии результата", text: "Мы не обещаем излечение, ремиссию, выживаемость, операцию, доступ к терапии или экономию." },
          { title: "Нет гарантии исследования", text: "Критерии и включение решают исследовательские команды." },
          { title: "Нет преувеличения связей", text: "Мы не являемся официальным сайтом больницы и не обещаем конкретного врача." },
          { title: "Прозрачные границы оплат", text: "Членские сборы покрывают координацию; медицинские расходы оплачиваются отдельно." },
        ],
        note: "Объем услуг, сборы, privacy и ответственность должны быть подтверждены письменным договором до оплаты.",
      },
      contact: {
        eyebrow: "Контакт",
        title: "Запросить консультацию по членству",
        body: `Свяжитесь с ${contact.name} по WhatsApp или email. Укажите диагноз, регион, текущее состояние и главный вопрос.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp H&C Care",
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
      register: "التسجيل",
      contact: "تواصل",
      privacy: "الخصوصية",
      terms: "حدود الخدمة",
    },
    seo: {
      title: `${brand.name} | تنسيق رعاية الأورام في الصين`,
      description: "نساعد مرضى السرطان الدوليين على تجهيز السجلات، والتواصل مع متخصصي الأورام المناسبين، واستكشاف المسارات العلاجية، والتنقل داخل المستشفيات في الصين.",
    },
    hero: {
      eyebrow: "تنسيق طبي متخصص في الأورام داخل الصين",
      title: "نساعد مرضى السرطان الدوليين",
      highlight: "على الوصول إلى مسارات أورام موثوقة في الصين",
      body: `تساعد ${brand.name} المرضى على تجهيز السجلات الطبية، والتواصل مع متخصصي أورام ذوي خبرة، واستكشاف مسارات علاجية متقدمة، والتنقل داخل رعاية المستشفى في الصين.`,
      primary: "إرسال السجلات للمراجعة",
      secondary: "عرض مسار المريض",
      trust: [
        { title: "تركيز على الأورام", text: "لسنا وكالة سفر طبية عامة. خط خدمتنا العام يركز على مسارات السرطان." },
        { title: "موارد غوانغدونغ", text: "نساعد في مطابقة الحالة مع موارد الأورام أو اللمفوما أو MDT أو الجراحة في غوانغدونغ وقوانغتشو." },
        { title: "حدود واضحة", text: "نساعد على الفهم والتحضير والتنسيق والتواصل، ولا نشخص أو نعالج المرضى." },
      ],
    },
    sections: {
      pain: {
        eyebrow: "تحديات المرضى",
        title: "لماذا يحتاج مرضى السرطان الدوليون إلى إرشاد موثوق في الصين",
        body: "تملك الصين موارد أورام قوية، لكن النظام قد يكون صعبا للعائلات من الخارج بدون تنسيق يفهم اللغة الطبية.",
        cards: [
          { title: "اختيار المسار المناسب", text: "قد لا يعرف المريض أي مستشفى أو قسم أو متخصص يناسب نوع السرطان وتاريخه العلاجي." },
          { title: "تقييم الموارد الحقيقية", text: "يصعب معرفة ما إذا كان المورد الطبي حقيقيا ومهنيا ومناسبا للحالة." },
          { title: "لغة طبية معقدة", text: "الباثولوجيا والتصوير والفحوص الجزيئية والخطط العلاجية تحتاج تحضيرا طبيا لا ترجمة عامة فقط." },
          { title: "إجراءات مستشفى غير مألوفة", text: "المواعيد والفحوص والدخول والدفع والخروج والمراجعة قد تكون غير واضحة." },
          { title: "ترتيبات الأسرة في الصين", text: "السكن والنقل والمرافقة والطعام والتواصل العائلي تؤثر على تجربة العلاج." },
        ],
      },
      focus: {
        eyebrow: "ما الذي ننسقه للمرضى",
        title: "طبقة تنسيق عملية حول رعاية الأورام داخل المستشفى",
        body: "نساعد على جعل الحالة مفهومة، والمسار واقعيا، والتواصل منظما قبل السفر والالتزام بالتكاليف.",
        cards: [
          { title: "تحضير السجلات الطبية", text: "تنظيم التشخيص، الباثولوجيا، التصوير، العلاج السابق، الأدوية، الفحوص الجزيئية والأسئلة." },
          { title: "مطابقة متخصص الأورام", text: "بناء على نوع السرطان والمرحلة وتاريخ العلاج والحالة الحالية." },
          { title: "تنسيق رأي ثان", text: "تحضير ملخص الحالة والأسئلة للتواصل مع متخصص أو مستشفى." },
          { title: "ترتيب نقاش متعدد التخصصات", text: "تحضير المواد لحالات اللمفوما أو الأورام المعقدة عند الملاءمة." },
          { title: "دعم المواعيد والدخول", text: "تنسيق الوثائق والتواصل العملي قبل الموعد أو الدخول." },
          { title: "ترجمة طبية وتواصل", text: "دعم تواصل الطبيب والمريض بسياق طبي مع بقاء القرار للطبيب." },
          { title: "دعم الدفع والسكن والنقل", text: "مساعدة الأسرة في التحضير للتكاليف العملية والحياة اليومية في الصين." },
          { title: "متابعة بعد العودة", text: "تنظيم أسئلة المتابعة وتوقيت المراجعة والتواصل اللاحق." },
        ],
      },
      membership: {
        eyebrow: "رسوم خدمات المرضى",
        title: "ثلاثة مستويات من خدمات التنسيق لمرضى الأورام الدوليين",
        body: "الرسوم أدناه هي رسوم تنسيق H&C Care فقط. رسوم المستشفى والأطباء والفحوصات والأدوية والعلاج والجراحة والسفر والإقامة والتأمين والمركبات وأي تكاليف طرف ثالث منفصلة.",
        plans: [
          { name: "استشارة المسار الأساسية", price: "مجانا", fit: "للمرضى الذين يستكشفون لأول مرة إمكانية رعاية الأورام في الصين.", items: ["فرز أولي للاحتياجات", "شرح عام لمسار الأورام في الصين", "قائمة السجلات الطبية والتحضير للسفر", "شرح واحد عبر الإنترنت أو استشارة نصية أساسية"] },
          { name: "تنسيق دورة واحدة", price: "USD 300 / مريض / دورة خدمة", fit: "لدورة واحدة من تحضير السجلات أو تواصل متخصص أو استشارة أو تنسيق دخول المستشفى.", items: ["جمع السجلات وجدول الحالة", "تحضير التواصل مع المتخصص أو المستشفى", "تنسيق الموعد أو الاستشارة عن بعد أو طلب الدخول", "قائمة ما قبل السفر ومتابعة واحدة بعد الخروج"] },
          { name: "تنسيق سنوي للمريض", price: "USD 980 / مريض / 12 شهرا", fit: "للمرضى الذين قد يحتاجون زيارات علاجية متكررة إلى الصين وإدارة مستمرة للحالة خلال عام.", items: ["صيانة ملف الحالة الإلكتروني السنوي", "تذكيرات المتابعة وتحديث الوثائق", "حتى 4 دورات تنسيق دخول المستشفى سنويا", "حتى جولتين من إعادة تقييم المتخصص أو المسار"] },
        ],
        modulesTitle: "وحدات دعم خاصة",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "تحضير مواد النقاش لحالات اللمفوما والحالات المعقدة مع متخصصي غوانغدونغ وقوانغتشو." },
          { title: "Immune Recovery Support", text: "تنظيم بيانات الحالة المناعية، متابعة استشارية طبية، تنسيق التغذية ونمط الحياة، ومراجعة ربع سنوية للمرحلة المستقرة أو التعافي." },
          { title: "Surgical Pathway Coordination", text: "دعم التواصل عندما تشير إعادة التقييم إلى إمكانية مناقشة المسار الجراحي." },
        ],
        modulesNote: "هذه الوحدات هي دعم تنسيقي واستشاري وليست حزمة طبية أو وعدا بالعلاج.",
        note: "تحتسب الرسوم لكل مريض ولا يمكن نقلها إلى شخص آخر. الاستشارة الأساسية المجانية عادة مرة واحدة لكل مريض. هذه الخدمات ليست تأمينا أو حزمة طبية أو خطة علاج مسبقة الدفع؛ القبول والتشخيص وأهلية العلاج والجراحة والتكلفة والنتائج تحددها المستشفيات والأطباء. يجب تأكيد نطاق الخدمة النهائي في اتفاق مكتوب قبل الدفع.",
      },
      oncology: {
        eyebrow: "مسارات أورام متقدمة",
        title: "استكشاف مسارات علاج وبحث مناسبة في الصين",
        body: "للمرضى المؤهلين، نساعد في تحضير السجلات وتنسيق التواصل حول خيارات أورام متقدمة. الأهلية والقرار الطبي للطبيب والمؤسسة.",
        cards: [
          { title: "العلاج المناعي والموجه", text: "تحضير تاريخ العلاج والواسمات الحيوية والاستجابة والأسئلة للنقاش." },
          { title: "سرطان المعدة CLDN18.2-positive ومسار CAR-T", text: "CLDN18.2 واسم حيوي مهم في سرطان المعدة وسرطان موصل المعدة والمريء. تفيد معلومات الشركة العامة بأن satri-cel/CT041 تمت الموافقة عليه في الصين كأول منتج CAR-T لمؤشر ورم صلب، للبالغين المصابين بسرطان معدة أو موصل معدة ومريء متقدم CLDN18.2-positive وHER2-negative بعد فشل خطين علاجيين سابقين على الأقل. نساعد في تنظيم تقارير الباثولوجيا والواسمات الحيوية والتصوير وتاريخ العلاج للتواصل مع فريق مؤهل." },
          { title: "نقاش العلاج الخلوي", text: "تحضير أسئلة حول المسارات والأهلية والسلامة والتوقيت ومتطلبات المستشفى." },
          { title: "استكشاف التجارب السريرية", text: "مساعدة في فهم فرص البحث المحتملة والوثائق وشروط الأهلية والتواصل." },
          { title: "تنسيق الجراحة بعد إعادة التقييم", text: "عندما يكون ذلك مناسبا، ننسق التواصل مع فرق الجراحة." },
          { title: "وضوح للعائلة", text: "تحويل الخطوات المعقدة إلى جدول عملي دون استبدال نصيحة الطبيب." },
        ],
        note: "لا نقدم CAR-T أو أي علاج آخر، ولا نحدد الأهلية، ولا نضمن الوصول إلى علاج معتمد أو مسارات بحث سريري، ولا نضمن دخول تجربة سريرية أو أي نتيجة علاجية.",
      },
      mdt: {
        eyebrow: "متخصصو أورام غوانغدونغ",
        title: "الوصول إلى متخصصي أورام بارزين في غوانغدونغ",
        body: "نساعد في مطابقة كل مريض مع موارد مناسبة حسب نوع السرطان والمرحلة وتاريخ العلاج والحالة الحالية والحاجة السريرية.",
        cards: [
          { title: "قوة اللمفوما MDT", text: "أقوى مواردنا في اللمفوما وأورام الدم المعقدة في غوانغدونغ وقوانغتشو." },
          { title: "مطابقة الأورام الصلبة", text: "تحضير الحالة لمسارات الأورام الطبية أو الجراحة أو الأشعة أو العلاج المتكامل." },
          { title: "رأي ثان وMDT", text: "تنظيم الوثائق والأسئلة كي يكون النقاش أكثر تركيزا." },
          { title: "المناسب أهم من الشهرة", text: "المسار يعتمد على التشخيص والمرحلة والعلاج السابق وحالة المريض والتوفر الواقعي." },
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
        title: "كيف يعمل المسار",
        body: "الخطوة الأولى ليست وعدا بالعلاج، بل فهم الحالة وتنظيم السجلات وتحديد المعلومات اللازمة لنقاش مفيد.",
        steps: [
          { title: "إرسال السجلات", text: "التشخيص والبلد والحالة الحالية والعلاج السابق والسؤال الرئيسي." },
          { title: "تقييم تنسيقي أولي", text: "تقييم إمكانية التنسيق وما ينقص من معلومات." },
          { title: "مطابقة المسار", text: "مسار أورام أو MDT أو بحث أو جراحة حسب الحالة." },
          { title: "ترتيب موعد أو استشارة", text: "تحضير الوثائق والأسئلة والتواصل." },
          { title: "تحضير السفر والمستشفى", text: "التوقيت والدخول والدفع والسكن والاحتياجات اليومية." },
          { title: "تنسيق داخل المستشفى", text: "دعم التواصل الطبي والخطوات العملية عند الحاجة." },
          { title: "دعم المتابعة", text: "أسئلة ما بعد الخروج وتوقيت المراجعة والتواصل العائلي." },
        ],
        documentsTitle: "وثائق للتحضير",
        documents: ["ملخص التشخيص", "تقرير الباثولوجيا", "تقارير التصوير والفحوصات", "اختبارات جينية أو جزيئية", "تاريخ العلاج والأدوية", "الأعراض الحالية وحالات العدوى"],
      },
      register: {
        eyebrow: "تسجيل العضوية",
        title: "تسجيل الاهتمام وتحضير السجلات الطبية لمراجعة الحالة",
        body: "ابدأ هنا إذا كان المريض يريد من H&C Care مراجعة ما إذا كانت العضوية أو خدمة التنسيق مناسبة. لا ترسل طلبات طارئة أو تعليمات سريرية عاجلة عبر هذا الموقع.",
        portalTitle: "مدخل ملف عضو المريض",
        portalText:
          "الخطوة الأولى عبر الإنترنت هي تسجيل الاهتمام وإنشاء ملف حالة منظم. قبل نقل السجلات الطبية الحساسة، نؤكد نطاق الخدمة والموافقة وأأمن قناة إرسال للمريض أو فرد العائلة المخول.",
        portalCards: [
          { title: "إنشاء ملف عضو", text: "نجمع فقط الحد الأدنى من المعلومات الأساسية لفهم المريض واللغة ونوع السرطان واحتياج التنسيق." },
          { title: "تأكيد الموافقة ونطاق الخدمة", text: "لا يبدأ التنسيق المدفوع إلا بعد أن يفهم المريض أو العائلة المخولة حدود الخدمة ويؤكد الترتيب المكتوب." },
          { title: "تحضير إرسال آمن للسجلات", text: "ترسل الوثائق الطبية فقط عبر قناة مؤكدة. بوابة رفع كاملة بالحسابات تحتاج إلى تحقق هوية وتخزين مشفر وسجلات وصول." },
        ],
        stepsTitle: "كيف يتم الإرسال",
        steps: [
          { title: "تسجيل الاهتمام", text: "أرسل الوضع الأساسي للمريض، البلد أو المنطقة، اللغة المفضلة، نوع السرطان، ومستوى الخدمة المطلوب." },
          { title: "تحضير ملف السجلات", text: "استخدم القائمة أدناه لجمع التقارير. يفضل إرسال PDF واضح وروابط صور وملخصات مؤرخة." },
          { title: "الإرسال عبر قناة مؤكدة", text: "بعد التواصل الأولي، سنؤكد البريد أو WhatsApp المناسب وما إذا كان يلزم اتفاق خدمة مكتوب قبل بدء التنسيق المدفوع." },
        ],
        documentsTitle: "قائمة السجلات الطبية",
        documents: [
          "تقارير الخزعة",
          "تقارير PET/CT",
          "أي تقارير باثولوجيا أو IHC",
          "أي نتائج جينية أو جزيئية أو NGS",
          "نتائج فحوص الدم خلال آخر 2-4 أسابيع",
          "ملخص لكل العلاجات السابقة، مثل الجراحة والكيميائي والإشعاعي والمناعي والموجه والعلاج الخلوي أو التجارب السريرية",
          "قائمة الأدوية الحالية والمكملات والحساسيات والتفاعلات السلبية المهمة",
          "وصف مختصر للأعراض الحالية، النشاط اليومي، الشهية، تغير الوزن، الحرارة، الألم، والحالة العامة",
          "تقارير CT أو MRI أو ultrasound أو endoscopy أو أي تصوير حديث، مع ملفات DICOM أو روابط مشاركة الصور إن وجدت",
          "ملخصات الخروج، خطابات التشخيص، ملاحظات الجراحة، تقارير المنظار أو سجلات الإجراءات إن وجدت",
          "تاريخ مرضي مهم مثل القلب، الكلى، الكبد، العدوى، أمراض المناعة الذاتية، التهاب الكبد، السل أو أمراض رئيسية أخرى",
          "صفحة جواز أو هوية المريض، بيانات الشخص المسؤول، وتفويض إذا كان أحد أفراد العائلة يتواصل نيابة عن المريض",
        ],
        fieldsTitle: "ما يجب تضمينه في الرسالة الأولى",
        fields: ["اسم المريض أو الأحرف الأولى", "العمر والجنس", "البلد أو المنطقة", "التشخيص والمرحلة إن عرفت", "حالة العلاج الحالية", "السؤال الرئيسي للتنسيق", "اللغة المفضلة", "مستوى الخدمة المطلوب"],
        secureTitle: "للبوابة الآمنة المستقبلية",
        secureItems: [
          "تسجيل دخول المريض ووصول العائلة المخولة",
          "تخزين وثائق مشفر وسجلات وصول مضبوطة",
          "حالة الرفع، تذكيرات الوثائق الناقصة، وملاحظات مدير الحالة",
          "حدود واضحة للموافقة والحفظ والحذف والاستخدام في الطوارئ",
        ],
        consentTitle: "الخصوصية والموافقة",
        consent: "السجلات الطبية تحتوي على بيانات شخصية حساسة. يرجى إرسالها فقط إذا وافق المريض أو فرد العائلة المخول على استخدامها من H&C Care لتحضير الحالة والتنسيق.",
        email: "إرسال مواد التسجيل بالبريد",
        whatsapp: "اسأل عبر WhatsApp قبل إرسال الملفات",
        note: "هذه الصفحة دليل تسجيل وتحضير مواد فقط. ليست قناة طوارئ أو منصة استشارة طبية أو خدمة تشخيص أو توصية علاجية، ولا تضمن قبول أي مستشفى أو طبيب أو علاج أو جراحة أو مسار بحث سريري للحالة.",
      },
      clinicalTeam: {
        eyebrow: "تنسيق بقيادة طبية",
        title: "يقوده متخصصون صحيون، لا وكلاء سفر عامون",
        body: "تنسيق الأورام يحتاج فهما طبيا وتنظيما للحالة ومعرفة بسير المستشفى.",
        cards: [
          { title: "خلفية صحية", text: "عضو تنسيق أساسي يحمل UK Master's degree in Nursing وNew York State RN license ورخصة تمريض صينية ولقب Associate Chief Nurse in China." },
          { title: "خبرة سريرية", text: "تشمل الخبرة الأورام والطوارئ وغرفة العمليات، مما يدعم تحضيرا وتواصلا أكثر أمانا." },
          { title: "تنسيق بلغة طبية", text: "نساعد في تنظيم السجلات والأسئلة وتعليمات المستشفى في مسار واضح." },
        ],
        note: "هذه الخلفية تدعم التنسيق والتواصل، ولا تعني أن H&C Care تقدم تشخيصا أو علاجا أو تمريضا أو ممارسة طبية في هونغ كونغ.",
      },
      ethics: {
        eyebrow: "الثقة والامتثال",
        title: "تنسيق طبي شفاف وأخلاقي",
        body: "يحتاج المرضى إلى الأمل وإلى حدود واضحة في الوقت نفسه.",
        cards: [
          { title: "لا تشخيص أو علاج من H&C Care", text: "كل القرارات الطبية للمستشفيات والأطباء المرخصين." },
          { title: "لا ضمان للنتائج", text: "لا نعد بالشفاء أو الهدأة أو البقاء أو الجراحة أو إتاحة العلاج أو توفير التكلفة." },
          { title: "لا ضمان للتجارب السريرية", text: "الأهلية والدخول تقررهما فرق البحث." },
          { title: "لا مبالغة في العلاقات", text: "لسنا موقعا رسميا لأي مستشفى ولا نعد بطبيب محدد." },
          { title: "حدود شفافة", text: "رسوم العضوية للتنسيق. التكاليف الطبية تدفع منفصلة للمؤسسات المعنية." },
        ],
        note: "يجب تأكيد نطاق الخدمة والرسوم والخصوصية والمسؤوليات في اتفاق مكتوب قبل الدفع.",
      },
      contact: {
        eyebrow: "تواصل",
        title: "طلب استشارة عضوية",
        body: `تواصل مع ${contact.name} عبر WhatsApp أو البريد. أرسل التشخيص والمنطقة والحالة الحالية والسؤال الرئيسي.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp H&C Care",
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
      register: "Registrasi",
      contact: "Kontak",
      privacy: "Privasi",
      terms: "Batas Layanan",
    },
    seo: {
      title: `${brand.name} | Koordinasi Medis Onkologi di China`,
      description: "Membantu pasien kanker internasional menyiapkan rekam medis, terhubung dengan spesialis onkologi yang sesuai, mengeksplorasi jalur terapi, dan menjalani perawatan rumah sakit di China.",
    },
    hero: {
      eyebrow: "Koordinasi medis fokus onkologi di China",
      title: "Membantu pasien kanker internasional",
      highlight: "mengakses jalur onkologi terpercaya di China",
      body: `${brand.name} membantu pasien menyiapkan rekam medis, terhubung dengan spesialis onkologi berpengalaman, mengeksplorasi jalur terapi lanjutan, dan menjalani alur rumah sakit di China.`,
      primary: "Kirim rekam medis",
      secondary: "Lihat alur pasien",
      trust: [
        { title: "Fokus onkologi", text: "Kami bukan agen wisata medis umum. Layanan publik kami berfokus pada jalur pasien kanker." },
        { title: "Akses spesialis Guangdong", text: "Kami membantu mencocokkan kasus dengan sumber onkologi, limfoma, MDT, atau bedah di Guangdong dan Guangzhou." },
        { title: "Batas jelas", text: "Kami membantu memahami, menyiapkan, mengoordinasikan, dan berkomunikasi. Kami tidak mendiagnosis atau mengobati." },
      ],
    },
    sections: {
      pain: {
        eyebrow: "Tantangan pasien",
        title: "Mengapa pasien kanker internasional membutuhkan panduan tepercaya di China",
        body: "China memiliki sumber onkologi yang kuat, tetapi sistemnya sulit dinavigasi dari luar negeri tanpa koordinasi yang memahami konteks medis.",
        cards: [
          { title: "Memilih jalur tepat", text: "Pasien sering tidak tahu rumah sakit, departemen, atau spesialis mana yang cocok untuk jenis kanker dan riwayat terapinya." },
          { title: "Memverifikasi sumber medis", text: "Sulit menilai apakah sumber medis nyata, profesional, relevan, dan realistis untuk kasus tersebut." },
          { title: "Bahasa medis kompleks", text: "Patologi, imaging, tes molekuler, dan rencana terapi perlu disiapkan dengan konteks medis." },
          { title: "Alur rumah sakit asing", text: "Janji, pemeriksaan, rawat inap, pembayaran, pulang, dan kontrol ulang dapat membingungkan." },
          { title: "Logistik keluarga di China", text: "Akomodasi, transportasi, pendampingan, makanan, dan komunikasi keluarga memengaruhi pengalaman pasien." },
        ],
      },
      focus: {
        eyebrow: "Yang kami koordinasikan untuk pasien",
        title: "Lapisan koordinasi praktis di sekitar perawatan onkologi berbasis rumah sakit",
        body: "Kami membantu membuat kasus lebih jelas, jalur lebih realistis, dan komunikasi lebih terstruktur sebelum pasien mengeluarkan waktu, biaya, dan perjalanan.",
        cards: [
          { title: "Review dan persiapan rekam medis", text: "Diagnosis, patologi, imaging, terapi sebelumnya, obat, tes molekuler, dan pertanyaan utama." },
          { title: "Pencocokan spesialis onkologi", text: "Berdasarkan jenis kanker, stadium, riwayat terapi, kondisi sekarang, dan kebutuhan klinis." },
          { title: "Koordinasi second opinion", text: "Persiapan ringkasan kasus dan pertanyaan untuk opini spesialis atau diskusi rumah sakit." },
          { title: "Konsultasi multidisiplin", text: "Persiapan materi untuk limfoma atau tumor kompleks bila sesuai." },
          { title: "Janji dan dukungan rawat inap", text: "Koordinasi persiapan janji, dokumen, dan komunikasi sebelum masuk rumah sakit." },
          { title: "Terjemahan medis dan komunikasi", text: "Dukungan komunikasi dokter-pasien dengan konteks medis." },
          { title: "Pembayaran, akomodasi, transportasi", text: "Membantu keluarga menyiapkan kebutuhan praktis selama berada di China." },
          { title: "Follow-up setelah pulang", text: "Membantu pertanyaan lanjutan, jadwal review ulang, dan komunikasi setelah pasien meninggalkan China." },
        ],
      },
      membership: {
        eyebrow: "Biaya layanan pasien",
        title: "Tiga tingkat layanan koordinasi untuk pasien onkologi internasional",
        body: "Biaya di bawah ini hanya biaya layanan koordinasi H&C Care. Biaya rumah sakit, dokter, tes, obat, terapi, operasi, perjalanan, akomodasi, asuransi, kendaraan, dan biaya pihak ketiga lainnya terpisah.",
        plans: [
          { name: "Konsultasi Jalur Dasar", price: "Gratis", fit: "Untuk pasien yang pertama kali menilai apakah layanan onkologi di China relevan.", items: ["Skrining kebutuhan awal", "Penjelasan umum jalur onkologi di China", "Checklist rekam medis dan persiapan perjalanan", "Satu penjelasan online atau konsultasi teks dasar"] },
          { name: "Koordinasi Satu Siklus", price: "USD 300 / pasien / siklus layanan", fit: "Untuk satu siklus persiapan rekam medis, komunikasi spesialis, konsultasi, atau koordinasi masuk rumah sakit.", items: ["Pengumpulan rekam medis dan timeline kasus", "Persiapan komunikasi spesialis atau rumah sakit", "Koordinasi janji, konsultasi jarak jauh, atau permohonan rawat inap", "Checklist sebelum perjalanan dan satu follow-up setelah pulang"] },
          { name: "Koordinasi Pasien Tahunan", price: "USD 980 / pasien / 12 bulan", fit: "Untuk pasien yang mungkin perlu beberapa kunjungan terapi ke China dan manajemen kasus berkelanjutan dalam satu tahun.", items: ["Pemeliharaan file kasus elektronik tahunan", "Pengingat follow-up dan pembaruan dokumen", "Hingga 4 siklus koordinasi rawat inap per tahun", "Hingga 2 putaran koordinasi evaluasi ulang spesialis atau jalur"] },
        ],
        modulesTitle: "Modul dukungan khusus",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "Persiapan materi diskusi untuk limfoma dan kasus kompleks dengan spesialis Guangdong dan Guangzhou." },
          { title: "Immune Recovery Support", text: "Organisasi data status imun, follow-up konsultatif dokter, koordinasi nutrisi dan gaya hidup, serta tinjauan triwulanan untuk fase stabil atau pemulihan." },
          { title: "Surgical Pathway Coordination", text: "Dukungan komunikasi bila evaluasi ulang menunjukkan jalur bedah dapat didiskusikan." },
        ],
        modulesNote: "Modul ini adalah dukungan koordinasi dan konsultasi, bukan paket medis atau janji terapi.",
        note: "Biaya dihitung per pasien dan tidak dapat dialihkan. Konsultasi dasar gratis biasanya dibatasi satu kali per pasien. Layanan ini bukan asuransi, paket medis, atau rencana terapi prabayar; penerimaan, diagnosis, kelayakan terapi, operasi, biaya, dan hasil ditentukan rumah sakit dan dokter. Ruang lingkup akhir harus dikonfirmasi dalam perjanjian tertulis sebelum pembayaran.",
      },
      oncology: {
        eyebrow: "Jalur onkologi lanjutan",
        title: "Mengeksplorasi jalur terapi dan riset yang sesuai di China",
        body: "Untuk pasien yang memenuhi syarat, kami membantu menyiapkan rekam medis dan koordinasi komunikasi seputar opsi onkologi lanjutan. Kelayakan dan arah terapi ditentukan dokter dan institusi.",
        cards: [
          { title: "Imunoterapi dan terapi target", text: "Persiapan riwayat terapi, biomarker, respons, dan pertanyaan untuk spesialis." },
          { title: "Kanker lambung CLDN18.2-positive dan jalur CAR-T", text: "CLDN18.2 adalah biomarker penting pada kanker lambung dan gastroesophageal junction. Informasi publik perusahaan menyebut satri-cel/CT041 telah disetujui di China sebagai produk CAR-T pertama untuk indikasi tumor solid, bagi pasien dewasa dengan adenokarsinoma lambung atau gastroesophageal junction lanjut yang CLDN18.2-positive dan HER2-negative setelah gagal setidaknya dua lini terapi sebelumnya. Kami membantu mengatur laporan patologi, biomarker, imaging, dan riwayat terapi untuk komunikasi dengan tim yang memenuhi syarat." },
          { title: "Diskusi terapi sel", text: "Persiapan pertanyaan tentang jalur, kelayakan, keamanan, waktu, dan persyaratan rumah sakit." },
          { title: "Eksplorasi clinical trial", text: "Membantu memahami peluang riset, dokumen, syarat kelayakan, dan komunikasi dengan tim terkait." },
          { title: "Koordinasi bedah setelah evaluasi ulang", text: "Bila sesuai, kami membantu komunikasi dengan tim bedah." },
          { title: "Kejelasan jalur untuk keluarga", text: "Mengubah langkah rumah sakit yang kompleks menjadi timeline praktis tanpa mengganti nasihat dokter." },
        ],
        note: "Kami tidak memberi CAR-T atau terapi lain, menentukan kelayakan, menjamin akses ke terapi yang disetujui atau jalur riset klinis, menjamin masuk clinical trial, atau menjanjikan hasil.",
      },
      mdt: {
        eyebrow: "Spesialis onkologi Guangdong",
        title: "Akses ke spesialis onkologi unggulan di Guangdong",
        body: "Kami membantu mencocokkan pasien dengan sumber onkologi yang sesuai berdasarkan jenis kanker, stadium, riwayat terapi, kondisi saat ini, dan kebutuhan klinis.",
        cards: [
          { title: "Kekuatan MDT limfoma", text: "Sumber terkuat kami adalah koordinasi limfoma dan hemato-onkologi kompleks di Guangdong dan Guangzhou." },
          { title: "Pencocokan tumor solid", text: "Persiapan kasus untuk diskusi onkologi medis, bedah, radiasi, atau jalur terpadu." },
          { title: "Second opinion dan MDT", text: "Merapikan dokumen dan pertanyaan agar diskusi lebih fokus." },
          { title: "Kesesuaian lebih penting dari nama besar", text: "Jalur tepat bergantung pada diagnosis, stadium, terapi sebelumnya, kondisi pasien, dan ketersediaan nyata." },
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
        title: "Cara proses bekerja",
        body: "Langkah pertama bukan menjanjikan terapi, tetapi memahami kasus, mengatur rekam medis, dan menentukan informasi untuk diskusi yang bermakna.",
        steps: [
          { title: "Kirim rekam medis", text: "Diagnosis, negara, status saat ini, terapi sebelumnya, dan pertanyaan utama keluarga." },
          { title: "Assessment koordinasi awal", text: "Menilai apakah koordinasi realistis dan informasi apa yang masih kurang." },
          { title: "Pencocokan jalur spesialis", text: "Onkologi, MDT, riset, atau jalur bedah sesuai kasus." },
          { title: "Pengaturan janji atau konsultasi", text: "Persiapan dokumen, pertanyaan, dan komunikasi." },
          { title: "Persiapan perjalanan dan rumah sakit", text: "Waktu perjalanan, rawat inap, pembayaran, akomodasi, dan kebutuhan harian." },
          { title: "Koordinasi di rumah sakit", text: "Dukungan komunikasi medis dan langkah praktis bila diperlukan." },
          { title: "Dukungan follow-up", text: "Pertanyaan setelah pulang, jadwal review, dan komunikasi keluarga." },
        ],
        documentsTitle: "Dokumen",
        documents: ["Diagnosis dan ringkasan", "Patologi", "Imaging dan hasil tes", "Tes genetik/molekuler", "Riwayat terapi dan obat", "Gejala dan infeksi saat ini"],
      },
      register: {
        eyebrow: "Registrasi anggota",
        title: "Daftar minat dan siapkan rekam medis untuk review kasus",
        body: "Mulai di sini bila pasien ingin H&C Care menilai apakah keanggotaan atau layanan koordinasi sesuai. Jangan kirim permintaan darurat atau instruksi klinis mendesak melalui situs ini.",
        portalTitle: "Pintu masuk file anggota pasien",
        portalText:
          "Langkah online pertama adalah mendaftarkan minat dan membuat file kasus yang terstruktur. Sebelum rekam medis sensitif dikirim, kami mengonfirmasi ruang lingkup layanan, persetujuan, dan kanal pengiriman paling aman bagi pasien atau keluarga yang berwenang.",
        portalCards: [
          { title: "Buat file anggota", text: "Kami hanya mengumpulkan informasi dasar minimum untuk memahami pasien, bahasa, jenis kanker, dan kebutuhan koordinasi." },
          { title: "Konfirmasi persetujuan dan ruang lingkup", text: "Koordinasi berbayar dimulai hanya setelah pasien atau keluarga yang berwenang memahami batas layanan dan menyetujui pengaturan tertulis." },
          { title: "Siapkan pengiriman rekam yang aman", text: "Dokumen medis dikirim hanya melalui kanal yang dikonfirmasi. Portal upload berbasis akun memerlukan autentikasi, penyimpanan terenkripsi, dan log akses." },
        ],
        stepsTitle: "Cara pengiriman",
        steps: [
          { title: "Daftar minat", text: "Kirim situasi dasar pasien, negara atau wilayah, bahasa pilihan, jenis kanker, dan tingkat layanan yang dipertimbangkan." },
          { title: "Siapkan paket rekam medis", text: "Gunakan checklist di bawah untuk mengumpulkan laporan. PDF jelas, tautan gambar, dan ringkasan bertanggal lebih disukai." },
          { title: "Kirim melalui kanal yang dikonfirmasi", text: "Setelah kontak awal, kami akan mengonfirmasi email atau WhatsApp yang sesuai dan apakah perjanjian layanan tertulis diperlukan sebelum koordinasi berbayar dimulai." },
        ],
        documentsTitle: "Checklist rekam medis",
        documents: [
          "Laporan biopsi",
          "Laporan PET/CT",
          "Laporan patologi atau immunohistochemistry (IHC), bila ada",
          "Hasil tes genetik, molekuler, atau NGS, bila ada",
          "Hasil tes darah dalam 2-4 minggu terakhir",
          "Ringkasan semua terapi yang pernah diterima, termasuk operasi, kemoterapi, radioterapi, imunoterapi, terapi target, terapi sel, atau clinical trial",
          "Daftar obat saat ini, suplemen, alergi, dan reaksi merugikan penting",
          "Deskripsi singkat gejala saat ini, aktivitas harian, nafsu makan, perubahan berat badan, demam, nyeri, dan kondisi umum",
          "Laporan CT, MRI, ultrasound, endoscopy, atau imaging terbaru lain, plus file DICOM atau tautan berbagi gambar bila tersedia",
          "Ringkasan pulang rumah sakit, surat diagnosis, catatan operasi, laporan endoscopy, atau catatan prosedur bila tersedia",
          "Riwayat medis penting seperti jantung, ginjal, hati, infeksi, penyakit autoimun, hepatitis, tuberkulosis, atau kondisi besar lainnya",
          "Paspor atau halaman identitas pasien, detail kontak keluarga, dan otorisasi bila keluarga berkomunikasi atas nama pasien",
        ],
        fieldsTitle: "Informasi untuk pesan pertama",
        fields: ["Nama atau inisial pasien", "Usia dan jenis kelamin", "Negara atau wilayah", "Diagnosis dan stadium bila diketahui", "Status terapi saat ini", "Pertanyaan utama untuk koordinasi", "Bahasa pilihan", "Tingkat layanan yang diminati"],
        secureTitle: "Untuk portal anggota aman di masa depan",
        secureItems: [
          "Login pasien dan akses keluarga yang berwenang",
          "Penyimpanan dokumen terenkripsi dan log akses terkontrol",
          "Status upload, pengingat dokumen yang kurang, dan catatan case manager",
          "Batas yang jelas untuk persetujuan, retensi, penghapusan, dan penggunaan darurat",
        ],
        consentTitle: "Privasi dan persetujuan",
        consent: "Rekam medis berisi data pribadi sensitif. Kirim dokumen hanya jika pasien atau keluarga yang berwenang setuju H&C Care menggunakannya untuk persiapan kasus dan komunikasi koordinasi.",
        email: "Kirim materi registrasi via email",
        whatsapp: "Tanya dulu sebelum kirim file di WhatsApp",
        note: "Halaman ini adalah panduan registrasi dan persiapan dokumen. Ini bukan kanal darurat, platform konsultasi medis, layanan diagnosis, rekomendasi terapi, atau jaminan bahwa rumah sakit, dokter, terapi, operasi, atau jalur riset klinis akan menerima kasus.",
      },
      clinicalTeam: {
        eyebrow: "Dipimpin tenaga kesehatan",
        title: "Dipimpin profesional kesehatan, bukan agen perjalanan umum",
        body: "Koordinasi onkologi membutuhkan literasi klinis, organisasi kasus, dan pemahaman alur rumah sakit.",
        cards: [
          { title: "Latar belakang profesional kesehatan", text: "Anggota koordinasi inti memiliki UK Master's degree in Nursing, New York State RN license, Chinese nursing license, dan gelar Associate Chief Nurse in China." },
          { title: "Pengalaman klinis", text: "Pengalaman mencakup onkologi, emergency care, dan operating room settings." },
          { title: "Koordinasi bahasa medis", text: "Membantu keluarga menyusun rekam medis, pertanyaan klinis, dan instruksi rumah sakit menjadi jalur yang jelas." },
        ],
        note: "Kredensial ini mendukung koordinasi dan komunikasi medis, bukan berarti H&C Care menyediakan diagnosis, terapi, nursing services, atau praktik medis di Hong Kong.",
      },
      ethics: {
        eyebrow: "Kepercayaan dan kepatuhan",
        title: "Koordinasi medis yang transparan dan etis",
        body: "Pasien membutuhkan harapan, tetapi juga batas yang jujur.",
        cards: [
          { title: "Tidak mendiagnosis atau mengobati", text: "Semua keputusan medis dibuat oleh rumah sakit dan dokter berlisensi." },
          { title: "Tidak menjamin hasil", text: "Kami tidak menjanjikan sembuh, remisi, survival, operasi, akses terapi, atau penghematan biaya." },
          { title: "Tidak menjamin clinical trial", text: "Kelayakan dan enrollment ditentukan oleh tim riset." },
          { title: "Tidak melebih-lebihkan hubungan", text: "Kami bukan situs resmi rumah sakit dan tidak menjanjikan dokter tertentu." },
          { title: "Batas layanan dan biaya jelas", text: "Biaya membership mencakup koordinasi. Biaya medis dibayar terpisah kepada institusi terkait." },
        ],
        note: "Ruang lingkup layanan, biaya, privasi, dan tanggung jawab perlu dikonfirmasi dalam perjanjian tertulis sebelum pembayaran.",
      },
      contact: {
        eyebrow: "Kontak",
        title: "Minta konsultasi keanggotaan",
        body: `Hubungi ${contact.name} via WhatsApp atau email. Sertakan diagnosis, wilayah, status saat ini, dan pertanyaan utama.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp H&C Care",
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
      register: "Pendaftaran",
      contact: "Hubungi",
      privacy: "Privasi",
      terms: "Sempadan Servis",
    },
    seo: {
      title: `${brand.name} | Koordinasi Perubatan Onkologi di China`,
      description: "Membantu pesakit kanser antarabangsa menyediakan rekod, berhubung dengan pakar onkologi sesuai, meneroka laluan rawatan, dan menavigasi penjagaan hospital di China.",
    },
    hero: {
      eyebrow: "Koordinasi perubatan berfokus onkologi di China",
      title: "Membantu pesakit kanser antarabangsa",
      highlight: "mengakses laluan onkologi dipercayai di China",
      body: `${brand.name} membantu pesakit menyediakan rekod perubatan, berhubung dengan pakar onkologi berpengalaman, meneroka laluan rawatan lanjutan dan menavigasi penjagaan hospital di China.`,
      primary: "Hantar rekod untuk semakan",
      secondary: "Lihat laluan pesakit",
      trust: [
        { title: "Fokus onkologi", text: "Kami bukan ejen pelancongan perubatan umum. Servis awam kami fokus pada laluan pesakit kanser." },
        { title: "Akses pakar Guangdong", text: "Kami membantu memadankan kes dengan sumber onkologi, limfoma, MDT atau bedah di Guangdong dan Guangzhou." },
        { title: "Sempadan jelas", text: "Kami membantu memahami, menyediakan, menyelaras dan berkomunikasi. Kami tidak mendiagnosis atau merawat." },
      ],
    },
    sections: {
      pain: {
        eyebrow: "Cabaran pesakit",
        title: "Mengapa pesakit kanser antarabangsa memerlukan panduan dipercayai di China",
        body: "China mempunyai sumber onkologi kuat, tetapi sistemnya sukar dinavigasi dari luar negara tanpa koordinasi yang memahami konteks perubatan.",
        cards: [
          { title: "Memilih laluan sesuai", text: "Pesakit sering tidak tahu hospital, jabatan atau pakar mana yang sesuai untuk jenis kanser dan sejarah rawatan." },
          { title: "Mengesahkan sumber sebenar", text: "Sukar menilai sama ada sumber perubatan itu benar, profesional, relevan dan realistik untuk kes tersebut." },
          { title: "Bahasa perubatan kompleks", text: "Patologi, imej, ujian molekul dan pelan rawatan memerlukan persediaan dengan konteks perubatan." },
          { title: "Aliran hospital asing", text: "Temu janji, pemeriksaan, kemasukan, bayaran, keluar hospital dan semakan semula boleh mengelirukan." },
          { title: "Logistik keluarga di China", text: "Penginapan, pengangkutan, pengiring, makanan dan komunikasi keluarga mempengaruhi pengalaman pesakit." },
        ],
      },
      focus: {
        eyebrow: "Apa yang kami selaras untuk pesakit",
        title: "Lapisan koordinasi praktikal sekitar penjagaan onkologi hospital",
        body: "Kami membantu menjadikan kes lebih jelas, laluan lebih realistik dan komunikasi lebih tersusun sebelum pesakit melaburkan masa, kos dan perjalanan.",
        cards: [
          { title: "Semakan dan persediaan rekod", text: "Diagnosis, patologi, imej, rawatan terdahulu, ubat, ujian molekul dan soalan utama." },
          { title: "Padanan pakar onkologi", text: "Berdasarkan jenis kanser, peringkat, sejarah rawatan, keadaan semasa dan keperluan klinikal." },
          { title: "Koordinasi second opinion", text: "Persediaan ringkasan kes dan soalan untuk pendapat pakar atau perbincangan hospital." },
          { title: "Konsultasi multidisiplin", text: "Persediaan bahan untuk limfoma atau tumor kompleks jika sesuai." },
          { title: "Temu janji dan kemasukan", text: "Koordinasi dokumen, komunikasi dan persediaan sebelum kemasukan hospital." },
          { title: "Terjemahan perubatan", text: "Sokongan komunikasi doktor-pesakit dengan konteks perubatan." },
          { title: "Bayaran, penginapan, pengangkutan", text: "Membantu keluarga menyediakan isu praktikal semasa berada di China." },
          { title: "Susulan selepas pulang", text: "Membantu soalan susulan, jadual semakan semula dan komunikasi selepas pesakit meninggalkan China." },
        ],
      },
      membership: {
        eyebrow: "Yuran servis pesakit",
        title: "Tiga tahap servis koordinasi untuk pesakit onkologi antarabangsa",
        body: "Yuran di bawah hanyalah yuran servis koordinasi H&C Care. Kos hospital, doktor, ujian, ubat, rawatan, pembedahan, perjalanan, penginapan, insurans, kenderaan dan kos pihak ketiga lain adalah berasingan.",
        plans: [
          { name: "Konsultasi Laluan Asas", price: "Percuma", fit: "Untuk pesakit yang pertama kali menilai sama ada rawatan onkologi di China relevan.", items: ["Saringan keperluan awal", "Penjelasan umum laluan onkologi di China", "Senarai semak rekod perubatan dan persediaan perjalanan", "Satu penjelasan dalam talian atau konsultasi teks asas"] },
          { name: "Koordinasi Satu Kitaran", price: "USD 300 / pesakit / kitaran servis", fit: "Untuk satu kitaran penyediaan rekod, komunikasi pakar, konsultasi atau koordinasi kemasukan hospital.", items: ["Pengumpulan rekod dan garis masa kes", "Persediaan komunikasi pakar atau hospital", "Koordinasi temu janji, konsultasi jauh atau permohonan rawat inap", "Senarai semak sebelum perjalanan dan satu susulan selepas keluar"] },
          { name: "Koordinasi Pesakit Tahunan", price: "USD 980 / pesakit / 12 bulan", fit: "Untuk pesakit yang mungkin memerlukan lawatan rawatan berulang ke China dan pengurusan kes berterusan dalam setahun.", items: ["Penyelenggaraan fail kes elektronik tahunan", "Peringatan susulan dan kemas kini dokumen", "Sehingga 4 kitaran koordinasi rawat inap setahun", "Sehingga 2 pusingan koordinasi penilaian semula pakar atau laluan"] },
        ],
        modulesTitle: "Modul sokongan khusus",
        modules: [
          { title: "Lymphoma MDT Coordination", text: "Persediaan bahan perbincangan untuk limfoma dan kes kompleks bersama pakar Guangdong dan Guangzhou." },
          { title: "Immune Recovery Support", text: "Organisasi data status imun, susulan konsultasi doktor, koordinasi nutrisi dan gaya hidup, serta semakan suku tahunan untuk fasa stabil atau pemulihan." },
          { title: "Surgical Pathway Coordination", text: "Sokongan komunikasi apabila penilaian semula menunjukkan laluan bedah boleh dibincangkan." },
        ],
        modulesNote: "Modul ini ialah sokongan koordinasi dan konsultasi, bukan pakej perubatan atau janji rawatan.",
        note: "Yuran dikira bagi setiap pesakit dan tidak boleh dipindahkan. Konsultasi asas percuma biasanya terhad kepada satu kali bagi setiap pesakit. Servis ini bukan insurans, pakej perubatan atau pelan rawatan prabayar; penerimaan, diagnosis, kelayakan rawatan, pembedahan, kos dan hasil ditentukan hospital dan doktor. Skop akhir perlu disahkan dalam perjanjian bertulis sebelum pembayaran.",
      },
      oncology: {
        eyebrow: "Laluan onkologi lanjutan",
        title: "Meneroka laluan rawatan dan penyelidikan sesuai di China",
        body: "Untuk pesakit yang layak, kami membantu menyediakan rekod dan koordinasi komunikasi sekitar pilihan onkologi lanjutan. Kelayakan dan arah rawatan ditentukan doktor dan institusi.",
        cards: [
          { title: "Imunoterapi dan terapi sasaran", text: "Persediaan sejarah rawatan, biomarker, respons dan soalan untuk pakar." },
          { title: "Kanser gastrik CLDN18.2-positive dan laluan CAR-T", text: "CLDN18.2 ialah biomarker penting dalam kanser gastrik dan gastroesophageal junction. Maklumat awam syarikat menyebut satri-cel/CT041 telah diluluskan di China sebagai produk CAR-T pertama untuk indikasi tumor pepejal, bagi pesakit dewasa dengan adenokarsinoma gastrik atau gastroesophageal junction lanjut yang CLDN18.2-positive dan HER2-negative selepas gagal sekurang-kurangnya dua lini rawatan terdahulu. Kami membantu menyusun laporan patologi, biomarker, imaging dan sejarah rawatan untuk komunikasi dengan pasukan yang layak." },
          { title: "Perbincangan terapi sel", text: "Persediaan soalan tentang laluan, kelayakan, keselamatan, masa dan keperluan hospital." },
          { title: "Eksplorasi clinical trial", text: "Membantu memahami peluang penyelidikan, dokumen, syarat kelayakan dan komunikasi pasukan berkaitan." },
          { title: "Koordinasi bedah selepas penilaian semula", text: "Jika sesuai, kami membantu komunikasi dengan pasukan bedah." },
          { title: "Kejelasan laluan untuk keluarga", text: "Menukar langkah hospital kompleks menjadi garis masa praktikal tanpa mengganti nasihat doktor." },
        ],
        note: "Kami tidak memberi CAR-T atau rawatan lain, menentukan kelayakan, menjamin akses kepada rawatan yang diluluskan atau laluan penyelidikan klinikal, menjamin kemasukan clinical trial, atau menjanjikan hasil.",
      },
      mdt: {
        eyebrow: "Pakar onkologi Guangdong",
        title: "Akses kepada pakar onkologi utama di Guangdong",
        body: "Kami membantu memadankan pesakit dengan sumber onkologi yang sesuai berdasarkan jenis kanser, peringkat, sejarah rawatan, keadaan semasa dan keperluan klinikal.",
        cards: [
          { title: "Kekuatan MDT limfoma", text: "Sumber terkuat kami ialah koordinasi limfoma dan hemato-onkologi kompleks di Guangdong dan Guangzhou." },
          { title: "Padanan tumor solid", text: "Persediaan kes untuk onkologi perubatan, bedah, radioterapi atau perbincangan bersepadu." },
          { title: "Second opinion dan MDT", text: "Menyusun dokumen dan soalan agar perbincangan lebih fokus." },
          { title: "Kesesuaian lebih penting daripada nama", text: "Laluan bergantung pada diagnosis, peringkat, rawatan terdahulu, keadaan pesakit dan ketersediaan sebenar." },
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
        title: "Bagaimana proses berfungsi",
        body: "Langkah pertama bukan menjanjikan rawatan, tetapi memahami kes, mengatur rekod dan menentukan maklumat untuk perbincangan bermakna.",
        steps: [
          { title: "Hantar rekod perubatan", text: "Diagnosis, negara, status semasa, rawatan terdahulu dan soalan utama keluarga." },
          { title: "Assessment koordinasi awal", text: "Menilai sama ada koordinasi realistik dan maklumat apa yang masih kurang." },
          { title: "Padanan laluan pakar", text: "Onkologi, MDT, penyelidikan atau laluan bedah mengikut kes." },
          { title: "Atur temu janji atau konsultasi", text: "Persediaan dokumen, soalan dan komunikasi." },
          { title: "Persediaan perjalanan dan hospital", text: "Masa perjalanan, kemasukan, bayaran, penginapan dan keperluan harian." },
          { title: "Koordinasi di hospital", text: "Sokongan komunikasi perubatan dan langkah praktikal jika diperlukan." },
          { title: "Sokongan susulan", text: "Soalan selepas keluar, jadual semakan dan komunikasi keluarga." },
        ],
        documentsTitle: "Dokumen",
        documents: ["Diagnosis dan ringkasan", "Patologi", "Imej dan keputusan ujian", "Ujian genetik/molekul", "Sejarah rawatan dan ubat", "Simptom dan jangkitan semasa"],
      },
      register: {
        eyebrow: "Pendaftaran ahli",
        title: "Daftar minat dan sediakan rekod perubatan untuk semakan kes",
        body: "Mulakan di sini jika pesakit mahu H&C Care menilai sama ada keahlian atau servis koordinasi sesuai. Jangan hantar permintaan kecemasan atau arahan klinikal mendesak melalui laman ini.",
        portalTitle: "Pintu masuk fail ahli pesakit",
        portalText:
          "Langkah online pertama ialah mendaftarkan minat dan mencipta fail kes berstruktur. Sebelum rekod perubatan sensitif dipindahkan, kami mengesahkan skop servis, persetujuan dan saluran penghantaran paling selamat untuk pesakit atau keluarga yang diberi kuasa.",
        portalCards: [
          { title: "Cipta fail ahli", text: "Kami hanya mengumpul maklumat asas minimum untuk memahami pesakit, bahasa, jenis kanser dan keperluan koordinasi." },
          { title: "Sahkan persetujuan dan skop servis", text: "Koordinasi berbayar bermula hanya selepas pesakit atau keluarga yang diberi kuasa memahami sempadan servis dan mengesahkan pengaturan bertulis." },
          { title: "Sediakan penghantaran rekod selamat", text: "Dokumen perubatan dihantar hanya melalui saluran yang disahkan. Portal upload berasaskan akaun memerlukan autentikasi, storan tersulit dan log akses." },
        ],
        stepsTitle: "Cara penghantaran",
        steps: [
          { title: "Daftar minat", text: "Hantar situasi asas pesakit, negara atau wilayah, bahasa pilihan, jenis kanser dan tahap servis yang dipertimbangkan." },
          { title: "Sediakan pakej rekod", text: "Gunakan senarai semak di bawah untuk mengumpul laporan. PDF jelas, pautan imej dan ringkasan bertarikh lebih baik." },
          { title: "Hantar melalui saluran disahkan", text: "Selepas kontak awal, kami akan mengesahkan email atau WhatsApp yang sesuai dan sama ada perjanjian servis bertulis diperlukan sebelum koordinasi berbayar bermula." },
        ],
        documentsTitle: "Senarai semak rekod perubatan",
        documents: [
          "Laporan biopsi",
          "Laporan PET/CT",
          "Sebarang laporan patologi atau immunohistochemistry (IHC)",
          "Sebarang keputusan ujian genetik, molekul atau NGS",
          "Keputusan ujian darah dalam 2-4 minggu terakhir",
          "Ringkasan semua rawatan yang pernah diterima, termasuk pembedahan, kemoterapi, radioterapi, imunoterapi, terapi sasaran, terapi sel atau clinical trial",
          "Senarai ubat semasa, suplemen, alergi dan reaksi buruk penting",
          "Penerangan ringkas simptom semasa, aktiviti harian, selera makan, perubahan berat badan, demam, sakit dan keadaan umum",
          "Laporan CT, MRI, ultrasound, endoscopy atau imej terbaru lain, serta fail DICOM atau pautan perkongsian imej jika ada",
          "Ringkasan keluar hospital, surat diagnosis, nota pembedahan, laporan endoscopy atau rekod prosedur jika ada",
          "Sejarah perubatan penting seperti jantung, buah pinggang, hati, jangkitan, penyakit autoimun, hepatitis, tuberkulosis atau keadaan utama lain",
          "Pasport atau halaman identiti pesakit, butiran orang hubungan dan kebenaran jika keluarga berkomunikasi bagi pihak pesakit",
        ],
        fieldsTitle: "Maklumat untuk mesej pertama",
        fields: ["Nama atau inisial pesakit", "Umur dan jantina", "Negara atau wilayah", "Diagnosis dan peringkat jika diketahui", "Status rawatan semasa", "Soalan utama untuk koordinasi", "Bahasa pilihan", "Tahap servis yang diminati"],
        secureTitle: "Untuk portal ahli selamat akan datang",
        secureItems: [
          "Login pesakit dan akses keluarga yang diberi kuasa",
          "Storan dokumen tersulit dan log akses terkawal",
          "Status upload, peringatan dokumen yang kurang dan nota case manager",
          "Sempadan jelas untuk persetujuan, penyimpanan, pemadaman dan penggunaan kecemasan",
        ],
        consentTitle: "Privasi dan persetujuan",
        consent: "Rekod perubatan mengandungi data peribadi sensitif. Hantar dokumen hanya jika pesakit atau keluarga yang diberi kuasa bersetuju H&C Care menggunakannya untuk persediaan kes dan komunikasi koordinasi.",
        email: "Hantar bahan pendaftaran melalui email",
        whatsapp: "Tanya dahulu sebelum hantar fail di WhatsApp",
        note: "Halaman ini ialah panduan pendaftaran dan persediaan dokumen. Ia bukan saluran kecemasan, platform konsultasi perubatan, servis diagnosis, cadangan rawatan atau jaminan bahawa hospital, doktor, rawatan, pembedahan atau laluan penyelidikan klinikal akan menerima kes.",
      },
      clinicalTeam: {
        eyebrow: "Dipimpin profesional kesihatan",
        title: "Dipimpin profesional kesihatan, bukan ejen perjalanan umum",
        body: "Koordinasi onkologi memerlukan literasi klinikal, organisasi kes dan pemahaman aliran hospital.",
        cards: [
          { title: "Latar profesional kesihatan", text: "Ahli koordinasi teras memiliki UK Master's degree in Nursing, New York State RN license, Chinese nursing license dan gelaran Associate Chief Nurse in China." },
          { title: "Pengalaman klinikal", text: "Pengalaman merangkumi onkologi, emergency care dan operating room settings." },
          { title: "Koordinasi bahasa perubatan", text: "Membantu keluarga menyusun rekod, soalan klinikal dan arahan hospital menjadi laluan jelas." },
        ],
        note: "Kredensial ini menyokong koordinasi dan komunikasi perubatan, bukan bermaksud H&C Care menyediakan diagnosis, rawatan, nursing services atau amalan perubatan di Hong Kong.",
      },
      ethics: {
        eyebrow: "Kepercayaan dan pematuhan",
        title: "Koordinasi perubatan yang telus dan beretika",
        body: "Pesakit memerlukan harapan, tetapi juga sempadan yang jujur.",
        cards: [
          { title: "Tidak mendiagnosis atau merawat", text: "Semua keputusan perubatan dibuat oleh hospital dan doktor berlesen." },
          { title: "Tidak menjamin hasil", text: "Kami tidak menjanjikan sembuh, remisi, survival, pembedahan, akses terapi atau penjimatan kos." },
          { title: "Tidak menjamin clinical trial", text: "Kelayakan dan enrollment ditentukan oleh pasukan penyelidikan." },
          { title: "Tidak melebih-lebihkan hubungan", text: "Kami bukan laman rasmi hospital dan tidak menjanjikan doktor tertentu." },
          { title: "Sempadan servis dan kos jelas", text: "Yuran keahlian meliputi koordinasi. Kos perubatan dibayar berasingan kepada institusi berkaitan." },
        ],
        note: "Skop servis, yuran, privasi dan tanggungjawab perlu disahkan dalam perjanjian bertulis sebelum pembayaran.",
      },
      contact: {
        eyebrow: "Hubungi",
        title: "Mohon konsultasi keahlian",
        body: `Hubungi ${contact.name} melalui WhatsApp atau email. Sertakan diagnosis, wilayah, status semasa dan soalan utama.`,
        email: "Email H&C Care",
        whatsapp: "WhatsApp H&C Care",
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
