import { brand, contact, type Locale } from "./site";
import { aboutContent, type AboutContent } from "./about-content";
import { serviceContent, type ServicePlan } from "./service-pricing";

type Card = { title: string; text: string };
type Step = { title: string; text: string };
type Expert = { name: string; role: string; text: string; image: string; affiliation?: string; source?: { label: string; url: string } };
type RegisterSection = {
  eyebrow: string;
  title: string;
  body: string;
  documentsTitle: string;
  documents: string[];
};

export const mainSectionKeys = ["about", "membership", "oncology", "mdt", "experts", "hospitals", "journey", "register", "contact", "car-t"] as const;
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
    about: AboutContent;
    pain: { eyebrow: string; title: string; body: string; cards: Card[] };
    focus: { eyebrow: string; title: string; body: string; cards: Card[] };
    membership: {
      eyebrow: string;
      title: string;
      body: string;
      plans: ServicePlan[];
      modulesTitle: string;
      modules: Card[];
      modulesNote: string;
      note: string;
    };
    oncology: { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
    "car-t": { eyebrow: string; title: string; body: string; cards: Card[]; note: string };
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
  peng: "/images/peng-roujun.webp",
};

const pengSource = "https://www.sysucc.org.cn/node/3765";

export const content: Record<Locale, SiteContent> = {
  en: {
    nav: {
      "home": "Home",
      "about": aboutContent.en.label,
      "membership": "Services",
      "oncology": "Oncology Coordination",
      "mdt": "MDT Resources",
      "experts": "Experts",
      "hospitals": "Hospitals",
      "journey": "Journey",
      "register": "Start an enquiry",
      "contact": "Contact",
      "privacy": "Privacy Notice",
      "terms": "Service Boundaries",
      "car-t": "CLDN18.2 CAR-T"
    },
    seo: {
      title: `${brand.name} | Oncology Medical Coordination in China`,
      description:
        "Helping international cancer patients prepare records, connect with suitable oncology specialists, explore treatment pathways, and navigate hospital care in China.",
    },
    hero: {
      "eyebrow": "H&C Care · International patient support",
      "title": "Cancer care coordination in China",
      "highlight": "",
      "body": "Healthcare-professional-led support for international patients, with a focus on lymphoma and solid tumor care in Guangzhou. We help you prepare records, communicate with specialists, and plan the next step.",
      "primary": "Start an enquiry",
      "secondary": "WhatsApp",
      "trust": [
        {
          "title": "Oncology-focused",
          "text": ""
        },
        {
          "title": "Clinical experience",
          "text": ""
        },
        {
          "title": "Guangzhou, China",
          "text": ""
        }
      ]
    },
    sections: {
      about: aboutContent.en,
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
        "eyebrow": serviceContent["en"].eyebrow,
        "title": serviceContent["en"].title,
        "body": serviceContent["en"].body,
        "plans": serviceContent["en"].plans,
        "modulesTitle": "Special support modules",
        "modules": [
          {
            "title": "Lymphoma MDT coordination",
            "text": "Focused preparation for lymphoma, relapsed or refractory disease, and Guangdong or Guangzhou specialist discussion."
          },
          {
            "title": "Recovery & follow-up support",
            "text": "Appointment preparation, hospital steps, and reminders for the next communication or review."
          },
          {
            "title": "Surgical pathway coordination",
            "text": "Communication support when reassessment suggests that a surgical pathway may be discussed with appropriate teams."
          }
        ],
        "modulesNote": "These modules are not automatically included in the admission packages; scope and any additional fee are agreed separately in writing. They are coordination and advisory services, not treatment commitments. Clinical decisions remain with licensed physicians and receiving institutions.",
        "note": serviceContent["en"].note
      },
      oncology: {
        "eyebrow": "Advanced oncology pathways",
        "title": "Exploring appropriate treatment and research pathways in China",
        "body": "For eligible patients, we can help prepare records and coordinate communication around advanced oncology options. Eligibility and treatment direction must always be assessed by licensed physicians and receiving institutions.",
        "cards": [
          {
            "title": "Immunotherapy and targeted therapy review",
            "text": "We help prepare prior treatment history, biomarker results, response information, and questions for specialist discussion."
          },
          {
            "title": "CLDN18.2-positive gastric cancer CAR-T pathway",
            "text": "On 22 June 2026, CARsgen announced Chinese approval of satricabtagene autoleucel (satri-cel/CT041), described as the world's first approved CAR-T product for solid tumors. The announced indication is CLDN18.2-positive, HER2-negative advanced gastric or gastroesophageal junction adenocarcinoma after failure of at least two prior treatment lines."
          },
          {
            "title": "Cellular therapy discussion",
            "text": "Where clinically relevant, we help families prepare questions about cellular therapy pathways, eligibility, safety, timing, and hospital requirements."
          },
          {
            "title": "Clinical trial opportunity exploration",
            "text": "For eligible patients, we can help explore potential clinical research opportunities, prepare documents, understand eligibility requirements, and coordinate communication."
          },
          {
            "title": "Surgery-after-reassessment coordination",
            "text": "When reassessment suggests surgery may be discussed, we help coordinate communication with appropriate surgical teams."
          },
          {
            "title": "Family-facing pathway clarity",
            "text": "We turn complex hospital steps into a practical timeline without replacing medical advice."
          }
        ],
        "note": "We do not provide CAR-T or other treatments, determine eligibility, promise access to approved treatment or clinical research pathways, promise clinical trial enrollment, or promise outcomes. We help patients prepare, coordinate, and communicate."
      },
      mdt: {
        "eyebrow": "Guangdong oncology specialists",
        "title": "Lymphoma & multidisciplinary review",
        "body": "We help match each patient with suitable oncology resources based on cancer type, stage, treatment history, current condition, and clinical needs. The emphasis is suitability, not simply famous names.",
        "cards": [
          {
            "title": "Lymphoma MDT strength",
            "text": "Our strongest resource layer is lymphoma and complex hematologic oncology coordination across Guangdong and Guangzhou."
          },
          {
            "title": "Solid tumor specialist matching",
            "text": "For solid tumors, we help prepare the case for appropriate medical oncology, surgical, radiation, or integrated pathway discussion."
          },
          {
            "title": "Second opinion and MDT preparation",
            "text": "We organize documents and questions so specialist or multidisciplinary discussions can be more focused."
          },
          {
            "title": "Suitable pathway over reputation alone",
            "text": "The right path depends on diagnosis, stage, prior therapy, patient condition, and realistic hospital availability."
          }
        ],
        "questionsTitle": "Case management questions we help prepare",
        "questions": [
          "Is the pathology and imaging package complete enough for a meaningful specialist review?",
          "Does a relapsed or refractory lymphoma case need MDT discussion before travel?",
          "After immunotherapy, what reassessment information is needed before discussing surgery?",
          "Which documents should be translated or organized before approaching a hospital team?",
          "What follow-up schedule should the family prepare for after discharge or online review?"
        ],
        "note": "MDT coordination means administrative and communication support. It does not guarantee that a specific doctor, hospital, treatment, or surgery will accept the case."
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
          {
            name: "Dr. Peng Roujun",
            role: "Chief Physician · PhD Supervisor · Comprehensive Oncology",
            affiliation: "Sun Yat-sen University Cancer Center",
            image: experts.peng,
            text: "Focuses on medical and multidisciplinary care for breast and gynecologic cancers, including ovarian, endometrial, and cervical cancer.",
            source: { label: "Official hospital profile", url: pengSource },
          },
        ],
        note:
          "Profiles are provided as clinical background, not as evidence of employment by or endorsement of H&C Care by these doctors or hospitals. Consultation availability must be confirmed with the receiving institution. This is not an offer of diagnosis, treatment, or prescribing services in Hong Kong.",
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
        "eyebrow": "Patient journey",
        "title": "How the process works",
        "body": "You can begin from home. We confirm the coordination scope before paid work or travel arrangements.",
        "steps": [
          {
            "title": "Tell us what you need",
            "text": "Contact us with your country, preferred language, and whether you are the patient or a family member."
          },
          {
            "title": "Initial coordination assessment",
            "text": "We assess whether coordination is realistic and what information is missing before specialist communication."
          },
          {
            "title": "Specialist pathway matching",
            "text": "We identify suitable oncology, MDT, research, or surgical communication pathways based on the case."
          },
          {
            "title": "Appointment or consultation arrangement",
            "text": "We coordinate appointment preparation, document flow, questions, and practical communication."
          },
          {
            "title": "Travel and hospital preparation",
            "text": "We help families understand travel timing, admission context, payment preparation, accommodation, and daily-life needs."
          },
          {
            "title": "In-hospital translation and coordination",
            "text": "When needed, we support medical communication and practical coordination during hospital visits."
          },
          {
            "title": "Follow-up communication support",
            "text": "After discharge or return home, we help track follow-up questions, repeat review timing, and family communication."
          }
        ],
        "documentsTitle": "Documents to prepare",
        "documents": [
          "Current diagnosis and medical summary",
          "Pathology report",
          "Imaging reports and recent test results",
          "Genetic or molecular testing, if available",
          "Prior treatment history and medication list",
          "Current symptoms, performance status, and infection history"
        ]
      },
      register: {
        "eyebrow": "Patient enquiry",
        "title": "Start your care coordination enquiry",
        "body": "A few basic details are enough to begin. You do not need to have every report ready or choose a service level yet.",
        "documentsTitle": "Medical records checklist",
        "documents": [
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
          "Important medical history such as heart, kidney, liver, infection, autoimmune disease, hepatitis, tuberculosis, or other major conditions"
        ]
      },
      clinicalTeam: {
        "eyebrow": "People behind your care journey",
        "title": "Clinical understanding. Personal coordination.",
        "body": "Our coordinators bring healthcare experience to record preparation and hospital communication. The specialist profiles below describe clinical expertise relevant to Guangzhou oncology pathways. Availability is confirmed for each case.",
        "cards": [
          {
            "title": "Healthcare professional leadership",
            "text": "A core coordination member holds a UK Master's degree in Nursing, a New York State Registered Nurse license, a Chinese nursing license, and the title of Associate Chief Nurse in China."
          },
          {
            "title": "Oncology and hospital experience",
            "text": "Clinical background includes years of experience in oncology, emergency care, and operating room settings, supporting safer communication and case preparation."
          },
          {
            "title": "Medical-language coordination",
            "text": "We help families turn complex medical records, clinical questions, and hospital instructions into an organized pathway."
          }
        ],
        "note": "These credentials support case coordination and medical communication. They do not mean that H&C Care provides diagnosis, treatment, nursing services, or medical practice in Hong Kong."
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
        "eyebrow": "Here for your next step",
        "title": "Let's start with a conversation",
        "body": "Tell us where you are and what support your family needs. We will discuss the appropriate records and contact channel with you before you send a full medical file.",
        "email": "Email us",
        "whatsapp": "WhatsApp",
        "privacy": "Medical information sent by email or WhatsApp is used to understand the case and arrange coordination. It may be shared with relevant medical teams outside Hong Kong only for case preparation and review."
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
          serviceContent["en"].included,
          serviceContent["en"].excluded,
          { title: "Medical decisions", text: "Diagnosis, treatment eligibility, admission, surgery, prescriptions, costs, and outcomes are decided by hospitals and licensed physicians." },
          { title: "No guarantees", text: "We do not guarantee acceptance by any hospital or doctor, treatment availability, surgical opportunity, outcome, survival, remission, or cost savings." },
        ],
        note:
          serviceContent["en"].note,
      },
      disclaimer: {
        title: "Medical disclaimer",
        body:
          `${brand.name} provides general information, membership-based case management, and coordination support. It does not replace diagnosis or treatment by licensed physicians. Eligibility, outcomes, and costs vary by individual case and cannot be guaranteed.`,
      },

      "car-t": {
        "eyebrow": "Patient information · Gastric cancer",
        "title": "CLDN18.2 CAR-T: preparing for a specialist discussion",
        "body": "Learn which records may be useful when discussing satri-cel (CT041) with a qualified oncology team in China.",
        "cards": [
          {
            "title": "What is CLDN18.2?",
            "text": "CLDN18.2 is a biomarker that can be assessed in tumor tissue. A specialist reviews the pathology, testing method, and results together with the patient's diagnosis and treatment history."
          },
          {
            "title": "What approval has been announced?",
            "text": "On 22 June 2026, CARsgen announced Chinese approval of satricabtagene autoleucel (satri-cel/CT041), described as the world's first approved CAR-T product for solid tumors. The announced indication is CLDN18.2-positive, HER2-negative advanced gastric or gastroesophageal junction adenocarcinoma after failure of at least two prior treatment lines."
          },
          {
            "title": "What should you prepare?",
            "text": "Available pathology and IHC reports, CLDN18.2 and HER2 results, recent imaging, a dated treatment history, blood tests, current medicines, and a summary of the patient's current condition. The receiving team confirms any additional testing and safety assessment."
          }
        ],
        "note": "This is general information, not an assessment of treatment suitability. H&C Care coordinates records and communication. Receiving clinicians must confirm the current approved label, eligibility, risks, availability, and costs for the individual patient; access and outcomes are not guaranteed."
      },
    },
  },

  "zh-hant": {
    nav: {
      "home": "首頁",
      "about": aboutContent["zh-hant"].label,
      "membership": "服務方案",
      "oncology": "腫瘤協調",
      "mdt": "MDT 資源",
      "experts": "專家背景",
      "hospitals": "醫院資源",
      "journey": "服務流程",
      "register": "開始個案諮詢",
      "contact": "聯絡",
      "privacy": "私隱聲明",
      "terms": "服務邊界",
      "car-t": "CLDN18.2 CAR-T"
    },
    seo: {
      title: `${brand.name} | 國際腫瘤患者來華就醫協調`,
      description: "協助國際腫瘤患者整理病歷、對接合適的中國腫瘤專家、評估治療路徑，並協調在中國的醫院就醫流程。",
    },
    hero: {
      "eyebrow": "H&C Care · 國際患者支持",
      "title": "中國腫瘤就醫協調",
      "highlight": "",
      "body": "由具臨床背景的醫療專業人員參與，專注淋巴瘤及實體瘤的廣州就醫協調。協助您整理病歷、溝通專家，並為下一步做好準備。",
      "primary": "開始個案諮詢",
      "secondary": "WhatsApp",
      "trust": [
        {
          "title": "專注腫瘤",
          "text": ""
        },
        {
          "title": "臨床工作背景",
          "text": ""
        },
        {
          "title": "中國 · 廣州",
          "text": ""
        }
      ]
    },
    sections: {
      about: aboutContent["zh-hant"],
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
        "eyebrow": serviceContent["zh-hant"].eyebrow,
        "title": serviceContent["zh-hant"].title,
        "body": serviceContent["zh-hant"].body,
        "plans": serviceContent["zh-hant"].plans,
        "modulesTitle": "專項支持模組",
        "modules": [
          {
            "title": "淋巴瘤 MDT 協調",
            "text": "針對淋巴瘤、復發難治或複雜個案，協助準備廣東及廣州專家討論資料。"
          },
          {
            "title": "康復與隨訪支持",
            "text": "準備預約、入院步驟及下一次溝通或復查的提醒。"
          },
          {
            "title": "手術路徑協調",
            "text": "在復評結果提示可討論手術路徑時，協助與合適團隊進行溝通準備。"
          }
        ],
        "modulesNote": "專項模組不自動包含在上述住院週期套餐內，範圍及可能的額外費用需另行書面確認。這些是協調與諮詢支持，不是治療承諾；臨床決策仍由持牌醫生及接診機構判斷。",
        "note": serviceContent["zh-hant"].note
      },
      oncology: {
        "eyebrow": "前沿腫瘤治療路徑",
        "title": "協助評估中國的合適治療與臨床研究路徑",
        "body": "對部分符合條件的患者，我們可協助準備資料並圍繞前沿腫瘤路徑進行溝通協調。是否適合及治療方向必須由持牌醫生和接診機構評估。",
        "cards": [
          {
            "title": "免疫與靶向治療評估",
            "text": "協助整理既往治療、標誌物結果、療效反應和需要專家討論的問題。"
          },
          {
            "title": "CLDN18.2 陽性胃癌 CAR-T 路徑溝通",
            "text": "科濟藥業於2026年6月22日公告 satricabtagene autoleucel（satri-cel／CT041）在中國獲批，稱其為全球首個獲批用於實體瘤的 CAR-T 產品。公告適應證為 CLDN18.2 陽性、HER2 陰性，既往至少二線治療失敗的晚期胃或胃食管交界部腺癌。"
          },
          {
            "title": "細胞治療問題準備",
            "text": "在臨床相關時，協助家屬準備關於細胞治療路徑、適應條件、安全性、時間安排和醫院要求的問題。"
          },
          {
            "title": "臨床研究機會探索",
            "text": "對符合條件的腫瘤患者，可協助了解中國潛在臨床研究機會、準備醫療文件、理解入選條件並協調溝通。"
          },
          {
            "title": "復評後手術路徑協調",
            "text": "當復評提示可討論手術時，協助與合適手術團隊進行溝通準備。"
          },
          {
            "title": "面向家屬的路徑梳理",
            "text": "把複雜醫院流程整理成家屬可理解的時間線，但不替代醫生建議。"
          }
        ],
        "note": "我們不提供 CAR-T 或其他治療、不判定治療資格、不保證獲得已上市治療或臨床研究路徑、不保證臨床研究入組，也不承諾療效或結果。我們協助患者準備、協調和溝通。"
      },
      mdt: {
        "eyebrow": "廣東腫瘤專家資源",
        "title": "淋巴瘤與多學科討論",
        "body": "我們根據癌種、分期、既往治療、目前狀況和臨床需求協助匹配合適的腫瘤資源。重點是合適，而不是單純名氣大。",
        "cards": [
          {
            "title": "淋巴瘤 MDT 優勢",
            "text": "我們最核心的資源層集中在廣東及廣州的淋巴瘤與複雜血液腫瘤協調。"
          },
          {
            "title": "實體瘤專家匹配",
            "text": "對實體瘤患者，協助準備內科、手術、放療或綜合治療路徑討論所需資料。"
          },
          {
            "title": "第二意見與 MDT 準備",
            "text": "協助整理資料和問題，讓專家或多學科討論更聚焦。"
          },
          {
            "title": "合適優先於名氣",
            "text": "合適路徑取決於診斷、分期、既往治療、患者狀態和醫院實際接收可能。"
          }
        ],
        "questionsTitle": "我們協助整理的個案管理問題",
        "questions": [
          "病理與影像資料是否足以進行有意義的專家評估？",
          "復發或難治淋巴瘤是否需要赴穗前進行 MDT 討論？",
          "免疫治療後，討論手術可能性前需要哪些復評資料？",
          "聯絡醫院團隊前，哪些資料需要翻譯或重新整理？",
          "出院或線上評估後，家屬應準備怎樣的隨訪時間線？"
        ],
        "note": "MDT 協調是行政與溝通支持，不保證指定醫生、醫院、治療或手術會接收個案。"
      },
      experts: {
        eyebrow: "臨床背景",
        title: "支持患者信任的專家資料",
        body: "以下資料幫助患者理解廣州腫瘤路徑背後的臨床背景，並不表示 H&C Care 在香港提供醫療執業服務。",
        people: [
          { name: "蔡綺純醫生", role: "主任醫師 · 腫瘤中心主任 · 碩士生導師", image: experts.cai, text: "長期從事淋巴瘤、精準免疫治療、細胞治療、靶向藥轉化及個體化腫瘤診療。" },
          { name: "黃慧強教授", role: "主任醫師 · 教授 · 博士生導師 · 幹細胞移植病區主任", image: experts.huang, text: "專注淋巴瘤及血液腫瘤，在少見淋巴瘤亞型、系統治療和自體造血幹細胞移植方面經驗豐富。" },
          { name: "謝國明醫生", role: "主任醫師 · 腫瘤科 · 實體瘤內科治療", image: experts.xie, text: "從事腫瘤診療四十餘年，擅長實體瘤化療、免疫治療、靶向治療、內分泌治療及個體化精準治療規劃。" },
          { name: "彭柔君醫生", role: "主任醫師 · 博士生導師 · 綜合科", affiliation: "中山大學腫瘤防治中心", image: experts.peng, text: "專注乳腺癌與婦科腫瘤的內科及多學科綜合診療，包括卵巢癌、子宮內膜癌和宮頸癌。", source: { label: "醫院官方專家資料", url: pengSource } },
        ],
        note: "以上資料僅作臨床背景介紹，不代表所列醫生受僱於 H&C Care，亦不表示醫生或所屬醫院為公司背書。能否安排諮詢須向接診機構確認，不構成在香港提供診斷、治療或處方服務。",
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
        "eyebrow": "服務流程",
        "title": "服務流程如何運作",
        "body": "您可以先在所在地聯絡我們。付費服務與出行安排前，先確認協調範圍。",
        "steps": [
          {
            "title": "說明您的需要",
            "text": "提供所在國家或地區、偏好語言，以及您是患者本人還是家屬。"
          },
          {
            "title": "初步協調評估",
            "text": "評估協調是否可行，以及在聯絡專家前還缺少哪些關鍵資料。"
          },
          {
            "title": "匹配專家路徑",
            "text": "根據個案匹配合適的腫瘤、MDT、臨床研究或手術溝通路徑。"
          },
          {
            "title": "安排預約或諮詢",
            "text": "協調預約準備、資料流轉、問題清單和實際溝通。"
          },
          {
            "title": "赴華與入院準備",
            "text": "協助家屬了解出行時間、入院背景、付款準備、住宿和日常安排。"
          },
          {
            "title": "院內翻譯與協調",
            "text": "在需要時支持醫學溝通和醫院就診期間的實務協調。"
          },
          {
            "title": "後續隨訪溝通",
            "text": "出院或回國後，協助追蹤後續問題、復評時間和家屬溝通。"
          }
        ],
        "documentsTitle": "建議準備資料",
        "documents": [
          "目前診斷與病情摘要",
          "病理報告",
          "影像報告和近期檢查結果",
          "基因或分子檢測，如有",
          "既往治療史和用藥清單",
          "目前症狀、體能狀態和感染史"
        ]
      },
      register: {
        "eyebrow": "患者諮詢",
        "title": "開始您的就醫協調諮詢",
        "body": "先提供少量基本資料即可開始，不必等齊所有報告，也不必現在選定服務檔次。",
        "documentsTitle": "病歷資料清單",
        "documents": [
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
          "重要既往病史，例如心、腎、肝、感染、自身免疫病、肝炎、結核或其他重大疾病"
        ]
      },
      clinicalTeam: {
        "eyebrow": "了解支持您的團隊",
        "title": "理解臨床，也理解患者與家屬",
        "body": "協調團隊將醫療工作經驗用於病歷準備與醫院溝通。以下專家資料介紹廣州腫瘤路徑相關的臨床專長，實際接診與安排需按個案確認。",
        "cards": [
          {
            "title": "醫療專業背景主導",
            "text": "核心協調成員具備英國護理碩士、美國紐約州註冊護士資格、中國護士執業資格及中國副主任護師職稱。"
          },
          {
            "title": "腫瘤與醫院場景經驗",
            "text": "臨床背景涵蓋腫瘤、急診及手術室等工作場景，有助於更安全地進行病歷準備和醫學溝通。"
          },
          {
            "title": "醫學語境下的協調",
            "text": "協助家屬把複雜病歷、臨床問題和醫院要求整理成更清晰的就醫路徑。"
          }
        ],
        "note": "以上背景用於支持個案協調和醫學溝通，不表示 H&C Care 在香港提供診斷、治療、護理服務或醫療執業。"
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
        "eyebrow": "為下一步做好準備",
        "title": "先從一次溝通開始",
        "body": "告訴我們您在哪裡，以及家庭需要什麼支持。在發送完整病歷前，我們會先與您確認所需資料及聯絡渠道。",
        "email": "電郵聯絡",
        "whatsapp": "WhatsApp",
        "privacy": "通過電郵或 WhatsApp 發送的醫療資料將用於了解個案及安排協調，並可能僅為個案準備及評估目的分享予香港以外相關醫療團隊。"
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
          serviceContent["zh-hant"].included,
          serviceContent["zh-hant"].excluded,
          { title: "醫療決定", text: "診斷、治療資格、入院、手術、處方、費用和結果均由醫院及持牌醫生決定。" },
          { title: "不作保證", text: "不保證任何醫院或醫生接收、不保證治療可及、手術機會、療效、生存、緩解或費用節省。" },
        ],
        note: serviceContent["zh-hant"].note,
      },
      disclaimer: {
        title: "醫療免責聲明",
        body: `${brand.name} 提供一般資訊、會員制個案管理及協調支持，不能替代持牌醫生的診斷或治療。是否適合治療、治療結果和費用均因個案而異，不能作出保證。`,
      },

      "car-t": {
        "eyebrow": "患者資訊 · 胃癌",
        "title": "CLDN18.2 CAR-T：如何準備專家溝通",
        "body": "了解與中國合資格腫瘤團隊討論 satri-cel（CT041）時，哪些資料可能有幫助。",
        "cards": [
          {
            "title": "CLDN18.2 是什麼？",
            "text": "CLDN18.2 是可在腫瘤組織中檢測的標誌物。專家需結合病理、檢測方法、結果、診斷及既往治療一併判斷。"
          },
          {
            "title": "目前有哪些獲批資訊？",
            "text": "科濟藥業於2026年6月22日公告 satricabtagene autoleucel（satri-cel／CT041）在中國獲批，稱其為全球首個獲批用於實體瘤的 CAR-T 產品。公告適應證為 CLDN18.2 陽性、HER2 陰性，既往至少二線治療失敗的晚期胃或胃食管交界部腺癌。"
          },
          {
            "title": "建議先準備哪些資料？",
            "text": "已有病理與免疫組化報告、CLDN18.2 和 HER2 結果、近期影像、按日期整理的治療史、血液檢查、目前用藥及整體狀況摘要。額外檢測與安全性評估由接診團隊確認。"
          }
        ],
        "note": "本頁為一般資訊，不構成治療適用性評估。H&C Care 協調資料與溝通；接診醫生需按個案確認現行核准說明書、適應條件、風險、可及性及費用，不保證獲得治療或療效。"
      },
    },
  },

  ru: {
    nav: {
      "home": "Главная",
      "about": aboutContent.ru.label,
      "membership": "Услуги",
      "oncology": "Онкология",
      "mdt": "MDT",
      "experts": "Эксперты",
      "hospitals": "Больницы",
      "journey": "Маршрут",
      "register": "Обратиться к нам",
      "contact": "Контакты",
      "privacy": "Конфиденциальность",
      "terms": "Границы услуг",
      "car-t": "CLDN18.2 CAR-T"
    },
    seo: {
      title: `${brand.name} | Координация онкологического лечения в Китае`,
      description: "Помогаем международным онкологическим пациентам подготовить документы, найти подходящих специалистов, изучить маршруты лечения и пройти больничный путь в Китае.",
    },
    hero: {
      "eyebrow": "H&C Care · Поддержка иностранных пациентов",
      "title": "Координация онкологической помощи в Китае",
      "highlight": "",
      "body": "Поддержка специалистов с клиническим опытом для иностранных пациентов. Наш фокус — лимфомы и солидные опухоли в Гуанчжоу. Помогаем подготовить документы, связаться с врачами и спланировать следующий шаг.",
      "primary": "Обратиться к нам",
      "secondary": "WhatsApp",
      "trust": [
        {
          "title": "Онкологический фокус",
          "text": ""
        },
        {
          "title": "Клинический опыт",
          "text": ""
        },
        {
          "title": "Гуанчжоу, Китай",
          "text": ""
        }
      ]
    },
    sections: {
      about: aboutContent.ru,
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
        "eyebrow": serviceContent["ru"].eyebrow,
        "title": serviceContent["ru"].title,
        "body": serviceContent["ru"].body,
        "plans": serviceContent["ru"].plans,
        "modulesTitle": "Специальные модули поддержки",
        "modules": [
          {
            "title": "Координация MDT при лимфоме",
            "text": "Подготовка материалов для обсуждения лимфомы и сложных случаев со специалистами Гуандуна и Гуанчжоу."
          },
          {
            "title": "Поддержка восстановления и наблюдения",
            "text": "Подготовка записи, этапов госпитализации и напоминаний о следующем обсуждении."
          },
          {
            "title": "Координация хирургического маршрута",
            "text": "Поддержка коммуникации, когда повторная оценка позволяет обсуждать хирургический маршрут."
          }
        ],
        "modulesNote": "Модули автоматически не включены в пакеты госпитализации; объем и возможная доплата согласуются отдельно письменно. Это координация и консультативная поддержка, а не обещание лечения. Медицинские решения принимают врачи и учреждения.",
        "note": serviceContent["ru"].note
      },
      oncology: {
        "eyebrow": "Передовые онкологические маршруты",
        "title": "Изучение подходящих лечебных и исследовательских возможностей в Китае",
        "body": "Для подходящих пациентов мы помогаем подготовить документы и координировать коммуникацию по передовым онкологическим опциям. Решения принимают врачи и учреждения.",
        "cards": [
          {
            "title": "Иммуно- и таргетная терапия",
            "text": "Подготовка истории лечения, биомаркеров, ответа на терапию и вопросов для специалиста."
          },
          {
            "title": "CLDN18.2-позитивный рак желудка и CAR-T",
            "text": "22 июня 2026 года CARsgen объявила об одобрении в Китае satricabtagene autoleucel (satri-cel/CT041), назвав его первым в мире одобренным CAR-T продуктом для солидных опухолей. Объявленное показание: CLDN18.2-положительная, HER2-отрицательная распространенная аденокарцинома желудка или гастроэзофагеального перехода после неудачи минимум двух линий лечения."
          },
          {
            "title": "Клеточная терапия",
            "text": "Подготовка вопросов о маршрутах, критериях, безопасности, сроках и требованиях больницы."
          },
          {
            "title": "Клинические исследования",
            "text": "Помогаем изучить потенциальные исследования, документы, критерии и коммуникацию с командами."
          },
          {
            "title": "Хирургия после переоценки",
            "text": "Когда это уместно, координируем коммуникацию с хирургическими командами."
          },
          {
            "title": "Ясность для семьи",
            "text": "Переводим сложные шаги в понятную временную линию, не заменяя советы врача."
          }
        ],
        "note": "Мы не предоставляем CAR-T или другое лечение, не определяем право на терапию, не гарантируем доступ к одобренному лечению или клиническим исследованиям, включение в исследование или результаты."
      },
      mdt: {
        "eyebrow": "Онкологи Гуандуна",
        "title": "Лимфомы и междисциплинарное обсуждение",
        "body": "Мы помогаем подобрать подходящие ресурсы по типу рака, стадии, истории лечения, текущему состоянию и клиническим задачам.",
        "cards": [
          {
            "title": "Сильная сторона лимфомы",
            "text": "Наиболее сильный слой ресурсов связан с лимфомой и сложной гематоонкологией."
          },
          {
            "title": "Солидные опухоли",
            "text": "Подготовка маршрута для медицинской онкологии, хирургии, лучевой терапии или комбинированного обсуждения."
          },
          {
            "title": "Second opinion и MDT",
            "text": "Организация документов и вопросов для более фокусного обсуждения."
          },
          {
            "title": "Подходящий путь важнее имени",
            "text": "Маршрут зависит от диагноза, стадии, прошлой терапии, состояния и реальной доступности."
          }
        ],
        "questionsTitle": "Вопросы, которые мы помогаем подготовить",
        "questions": [
          "Достаточно ли документов для экспертного разбора?",
          "Нужен ли MDT до поездки?",
          "Какая переоценка нужна перед обсуждением операции?",
          "Какие документы нужно перевести?",
          "Какую временную линию контроля подготовить?"
        ],
        "note": "MDT-координация не гарантирует принятие конкретным врачом, больницей, лечением или операцией."
      },
      experts: {
        eyebrow: "Клинический фон",
        title: "Профили специалистов для доверия пациента",
        body: "Профили помогают понять клинический фон маршрутов в Гуанчжоу и не означают медицинскую практику H&C Care в Гонконге.",
        people: [
          { name: "Д-р Цай Цичунь", role: "Chief Physician · Oncology Center Director", image: experts.cai, text: "Опытный онколог в области лимфомы, иммунотерапии, клеточной терапии и индивидуализированной онкологии." },
          { name: "Профессор Хуан Хуйцян", role: "Chief Physician · Professor · PhD Supervisor", image: experts.huang, text: "Специалист по лимфоме и гематологическим опухолям, системной терапии и трансплантации стволовых клеток." },
          { name: "Д-р Се Гомин", role: "Chief Physician · Solid Tumor Medical Oncology", image: experts.xie, text: "Медицинский онколог с более чем 40-летним опытом в терапии солидных опухолей." },
          { name: "Д-р Пэн Жоужунь", role: "Chief Physician · Научный руководитель докторантов · Комплексная онкология", affiliation: "Онкологический центр Университета Сунь Ятсена", image: experts.peng, text: "Специализируется на лекарственном и комплексном лечении рака молочной железы и гинекологических опухолей, включая рак яичников, эндометрия и шейки матки.", source: { label: "Профиль на сайте больницы", url: pengSource } },
        ],
        note: "Профили представлены для ознакомления с клинической специализацией. Они не означают, что врачи работают в H&C Care или что врачи и больницы поддерживают компанию. Возможность консультации подтверждает принимающее учреждение. Это не предложение диагностики, лечения или назначения лекарств в Гонконге.",
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
        "eyebrow": "Маршрут пациента",
        "title": "Как работает процесс",
        "body": "Начать можно из дома. Объем координации согласуется до платной работы и организации поездки.",
        "steps": [
          {
            "title": "Расскажите о потребностях",
            "text": "Укажите страну, предпочтительный язык и обращаетесь ли вы как пациент или родственник."
          },
          {
            "title": "Первичная оценка",
            "text": "Оцениваем реалистичность координации и недостающие данные."
          },
          {
            "title": "Подбор маршрута",
            "text": "Онкология, MDT, исследование или хирургическая коммуникация по ситуации."
          },
          {
            "title": "Запись или консультация",
            "text": "Подготовка записи, документов, вопросов и коммуникации."
          },
          {
            "title": "Подготовка поездки",
            "text": "Сроки, госпитализация, оплата, проживание и бытовые потребности."
          },
          {
            "title": "Внутрибольничная координация",
            "text": "Поддержка медицинской коммуникации и практических шагов."
          },
          {
            "title": "Follow-up",
            "text": "Вопросы после выписки, сроки контроля и связь с семьей."
          }
        ],
        "documentsTitle": "Документы",
        "documents": [
          "Диагноз и резюме",
          "Патология",
          "Визуализация и анализы",
          "Генетика/молекулярные тесты",
          "История лечения и лекарства",
          "Текущие симптомы и инфекции"
        ]
      },
      register: {
        "eyebrow": "Обращение пациента",
        "title": "Начните обращение по координации",
        "body": "Для начала достаточно нескольких основных сведений. Не нужно ждать всех отчетов или заранее выбирать услугу.",
        "documentsTitle": "Список медицинских документов",
        "documents": [
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
          "Важный анамнез: сердце, почки, печень, инфекции, аутоиммунные болезни, гепатит, туберкулез или другие значимые заболевания"
        ]
      },
      clinicalTeam: {
        "eyebrow": "Кто помогает вам",
        "title": "Понимание клиники и личная поддержка",
        "body": "Координаторы используют медицинский опыт при подготовке документов и общении с больницами. Профили ниже описывают специалистов, связанных с онкологическими маршрутами Гуанчжоу. Возможность приема подтверждается для каждого случая.",
        "cards": [
          {
            "title": "Медицинская подготовка",
            "text": "Ключевой координатор имеет Master's degree in Nursing from the UK, New York State RN license, Chinese nursing license и звание Associate Chief Nurse in China."
          },
          {
            "title": "Опыт больничной работы",
            "text": "Опыт включает онкологию, emergency care и operating room settings."
          },
          {
            "title": "Медицинская коммуникация",
            "text": "Мы помогаем структурировать документы, вопросы и инструкции больницы."
          }
        ],
        "note": "Эти данные поддерживают координацию, но не означают диагностику, лечение, nursing services или медицинскую практику H&C Care в Гонконге."
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
        "eyebrow": "Следующий шаг",
        "title": "Начнем с разговора",
        "body": "Расскажите, где вы находитесь и какая поддержка нужна семье. До отправки полного медицинского файла мы уточним документы и канал связи.",
        "email": "Написать по email",
        "whatsapp": "WhatsApp",
        "privacy": "Медицинская информация используется для понимания случая и координации; она может передаваться релевантным медицинским командам за пределами Гонконга."
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
          serviceContent["ru"].included,
          serviceContent["ru"].excluded,
          { title: "Медицинские решения", text: "Все решения принимают больницы и лицензированные врачи." },
          { title: "Нет гарантий", text: "Нет гарантии принятия, лечения, операции, результата или экономии." },
        ],
        note: serviceContent["ru"].note,
      },
      disclaimer: {
        title: "Медицинское уведомление",
        body: `${brand.name} предоставляет информацию и координацию, но не заменяет врачебную диагностику или лечение. Результаты и стоимость не гарантируются.`,
      },

      "car-t": {
        "eyebrow": "Информация для пациентов · Рак желудка",
        "title": "CLDN18.2 CAR-T: подготовка к обсуждению",
        "body": "Какие документы могут помочь при обсуждении satri-cel (CT041) с квалифицированной онкологической командой Китая.",
        "cards": [
          {
            "title": "Что такое CLDN18.2?",
            "text": "CLDN18.2 — биомаркер, исследуемый в ткани опухоли. Врач оценивает патологию, метод тестирования и результаты вместе с диагнозом и историей лечения."
          },
          {
            "title": "Какое одобрение объявлено?",
            "text": "22 июня 2026 года CARsgen объявила об одобрении в Китае satricabtagene autoleucel (satri-cel/CT041), назвав его первым в мире одобренным CAR-T продуктом для солидных опухолей. Объявленное показание: CLDN18.2-положительная, HER2-отрицательная распространенная аденокарцинома желудка или гастроэзофагеального перехода после неудачи минимум двух линий лечения."
          },
          {
            "title": "Что подготовить?",
            "text": "Патологию и IHC, результаты CLDN18.2 и HER2, недавние снимки, хронологию лечения, анализы крови, лекарства и описание текущего состояния. Дополнительные обследования определяет принимающая команда."
          }
        ],
        "note": "Это общая информация, а не оценка пригодности лечения. H&C Care координирует документы и связь. Врачи подтверждают действующую инструкцию, критерии, риски, доступность и стоимость для пациента. Доступ и результат не гарантируются."
      },
    },
  },

  ar: {
    nav: {
      "home": "الرئيسية",
      "about": aboutContent.ar.label,
      "membership": "الخدمات",
      "oncology": "تنسيق الأورام",
      "mdt": "موارد MDT",
      "experts": "الخبراء",
      "hospitals": "المستشفيات",
      "journey": "المسار",
      "register": "ابدأ استفسارك",
      "contact": "تواصل",
      "privacy": "الخصوصية",
      "terms": "حدود الخدمة",
      "car-t": "CLDN18.2 CAR-T"
    },
    seo: {
      title: `${brand.name} | تنسيق رعاية الأورام في الصين`,
      description: "نساعد مرضى السرطان الدوليين على تجهيز السجلات، والتواصل مع متخصصي الأورام المناسبين، واستكشاف المسارات العلاجية، والتنقل داخل المستشفيات في الصين.",
    },
    hero: {
      "eyebrow": "H&C Care · دعم المرضى الدوليين",
      "title": "تنسيق رعاية الأورام في الصين",
      "highlight": "",
      "body": "دعم يشارك فيه مهنيون ذوو خبرة سريرية للمرضى الدوليين، مع التركيز على اللمفوما والأورام الصلبة في قوانغتشو. نساعد في إعداد السجلات والتواصل مع المختصين والتخطيط للخطوة التالية.",
      "primary": "ابدأ استفسارك",
      "secondary": "WhatsApp",
      "trust": [
        {
          "title": "تركيز على الأورام",
          "text": ""
        },
        {
          "title": "خبرة سريرية",
          "text": ""
        },
        {
          "title": "قوانغتشو، الصين",
          "text": ""
        }
      ]
    },
    sections: {
      about: aboutContent.ar,
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
        "eyebrow": serviceContent["ar"].eyebrow,
        "title": serviceContent["ar"].title,
        "body": serviceContent["ar"].body,
        "plans": serviceContent["ar"].plans,
        "modulesTitle": "وحدات دعم خاصة",
        "modules": [
          {
            "title": "تنسيق MDT لللمفوما",
            "text": "تحضير مواد النقاش لحالات اللمفوما والحالات المعقدة مع متخصصي غوانغدونغ وقوانغتشو."
          },
          {
            "title": "دعم التعافي والمتابعة",
            "text": "التحضير للمواعيد وخطوات المستشفى والتذكير بالمراجعة التالية."
          },
          {
            "title": "تنسيق المسار الجراحي",
            "text": "دعم التواصل عندما تشير إعادة التقييم إلى إمكانية مناقشة المسار الجراحي."
          }
        ],
        "modulesNote": "لا تشمل باقات الدخول هذه الوحدات تلقائيا؛ يؤكد نطاقها وأي رسوم إضافية باتفاق مكتوب منفصل. هي دعم تنسيقي واستشاري وليست وعدا بالعلاج. القرارات الطبية للأطباء والمؤسسات المعالجة.",
        "note": serviceContent["ar"].note
      },
      oncology: {
        "eyebrow": "مسارات أورام متقدمة",
        "title": "استكشاف مسارات علاج وبحث مناسبة في الصين",
        "body": "للمرضى المؤهلين، نساعد في تحضير السجلات وتنسيق التواصل حول خيارات أورام متقدمة. الأهلية والقرار الطبي للطبيب والمؤسسة.",
        "cards": [
          {
            "title": "العلاج المناعي والموجه",
            "text": "تحضير تاريخ العلاج والواسمات الحيوية والاستجابة والأسئلة للنقاش."
          },
          {
            "title": "سرطان المعدة CLDN18.2-positive ومسار CAR-T",
            "text": "في 22 يونيو 2026 أعلنت CARsgen الموافقة في الصين على satricabtagene autoleucel (satri-cel/CT041)، ووصفته بأول منتج CAR-T معتمد عالميا للأورام الصلبة. الاستطباب المعلن هو السرطان الغدي المتقدم للمعدة أو الوصلة المعدية المريئية، الإيجابي لـ CLDN18.2 والسلبي لـ HER2، بعد فشل خطين علاجيين سابقين على الأقل."
          },
          {
            "title": "نقاش العلاج الخلوي",
            "text": "تحضير أسئلة حول المسارات والأهلية والسلامة والتوقيت ومتطلبات المستشفى."
          },
          {
            "title": "استكشاف التجارب السريرية",
            "text": "مساعدة في فهم فرص البحث المحتملة والوثائق وشروط الأهلية والتواصل."
          },
          {
            "title": "تنسيق الجراحة بعد إعادة التقييم",
            "text": "عندما يكون ذلك مناسبا، ننسق التواصل مع فرق الجراحة."
          },
          {
            "title": "وضوح للعائلة",
            "text": "تحويل الخطوات المعقدة إلى جدول عملي دون استبدال نصيحة الطبيب."
          }
        ],
        "note": "لا نقدم CAR-T أو أي علاج آخر، ولا نحدد الأهلية، ولا نضمن الوصول إلى علاج معتمد أو مسارات بحث سريري، ولا نضمن دخول تجربة سريرية أو أي نتيجة علاجية."
      },
      mdt: {
        "eyebrow": "متخصصو أورام غوانغدونغ",
        "title": "اللمفوما والمناقشة متعددة التخصصات",
        "body": "نساعد في مطابقة كل مريض مع موارد مناسبة حسب نوع السرطان والمرحلة وتاريخ العلاج والحالة الحالية والحاجة السريرية.",
        "cards": [
          {
            "title": "قوة اللمفوما MDT",
            "text": "أقوى مواردنا في اللمفوما وأورام الدم المعقدة في غوانغدونغ وقوانغتشو."
          },
          {
            "title": "مطابقة الأورام الصلبة",
            "text": "تحضير الحالة لمسارات الأورام الطبية أو الجراحة أو الأشعة أو العلاج المتكامل."
          },
          {
            "title": "رأي ثان وMDT",
            "text": "تنظيم الوثائق والأسئلة كي يكون النقاش أكثر تركيزا."
          },
          {
            "title": "المناسب أهم من الشهرة",
            "text": "المسار يعتمد على التشخيص والمرحلة والعلاج السابق وحالة المريض والتوفر الواقعي."
          }
        ],
        "questionsTitle": "أسئلة نساعد في تحضيرها",
        "questions": [
          "هل السجلات كافية للمراجعة؟",
          "هل تحتاج اللمفوما المتكررة إلى MDT قبل السفر؟",
          "ما إعادة التقييم المطلوبة قبل الجراحة؟",
          "ما الوثائق التي تحتاج ترجمة؟",
          "ما جدول المتابعة المناسب؟"
        ],
        "note": "تنسيق MDT لا يضمن قبول طبيب أو مستشفى أو علاج أو عملية محددة."
      },
      experts: {
        eyebrow: "خلفية سريرية",
        title: "ملفات متخصصين تدعم ثقة المريض",
        body: "هذه الملفات خلفية لمسارات قوانغتشو ولا تعني ممارسة طبية في هونغ كونغ.",
        people: [
          { name: "د. تساي تشيتشون", role: "Chief Physician · Oncology Center Director", image: experts.cai, text: "اختصاصي أورام ذو خبرة في اللمفوما والعلاج المناعي والخلوي والفردي." },
          { name: "البروفيسور هوانغ هويتشيانغ", role: "Chief Physician · Professor · PhD Supervisor", image: experts.huang, text: "اختصاصي لمفوما وأورام دم مع خبرة في العلاج الجهازي وزراعة الخلايا الجذعية." },
          { name: "د. شيه غوومينغ", role: "Chief Physician · Solid Tumor Medical Oncology", image: experts.xie, text: "اختصاصي أورام طبية بخبرة تزيد عن 40 عاما في علاج الأورام الصلبة." },
          { name: "د. بنغ روجون", role: "طبيبة بدرجة Chief Physician · مشرفة دكتوراه · قسم الأورام الشامل", affiliation: "مركز السرطان بجامعة صن يات سن", image: experts.peng, text: "تركز على العلاج الدوائي والرعاية متعددة التخصصات لسرطان الثدي والأورام النسائية، بما فيها سرطان المبيض وبطانة الرحم وعنق الرحم.", source: { label: "الملف الرسمي على موقع المستشفى", url: pengSource } },
        ],
        note: "هذه الملفات للتعريف بالخلفية السريرية، ولا تعني أن الأطباء موظفون لدى H&C Care أو أنهم أو مستشفياتهم يزكون الشركة. تؤكد المؤسسة المستقبلة إمكانية الاستشارة. هذه المعلومات ليست عرضا للتشخيص أو العلاج أو وصف الأدوية في هونغ كونغ.",
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
        "eyebrow": "مسار المريض",
        "title": "كيف يعمل المسار",
        "body": "يمكنك البدء من بلدك. نؤكد نطاق التنسيق قبل الخدمات المدفوعة أو ترتيبات السفر.",
        "steps": [
          {
            "title": "أخبرنا باحتياجك",
            "text": "اذكر البلد واللغة المفضلة وما إذا كنت المريض أو أحد أفراد العائلة."
          },
          {
            "title": "تقييم تنسيقي أولي",
            "text": "تقييم إمكانية التنسيق وما ينقص من معلومات."
          },
          {
            "title": "مطابقة المسار",
            "text": "مسار أورام أو MDT أو بحث أو جراحة حسب الحالة."
          },
          {
            "title": "ترتيب موعد أو استشارة",
            "text": "تحضير الوثائق والأسئلة والتواصل."
          },
          {
            "title": "تحضير السفر والمستشفى",
            "text": "التوقيت والدخول والدفع والسكن والاحتياجات اليومية."
          },
          {
            "title": "تنسيق داخل المستشفى",
            "text": "دعم التواصل الطبي والخطوات العملية عند الحاجة."
          },
          {
            "title": "دعم المتابعة",
            "text": "أسئلة ما بعد الخروج وتوقيت المراجعة والتواصل العائلي."
          }
        ],
        "documentsTitle": "وثائق للتحضير",
        "documents": [
          "ملخص التشخيص",
          "تقرير الباثولوجيا",
          "تقارير التصوير والفحوصات",
          "اختبارات جينية أو جزيئية",
          "تاريخ العلاج والأدوية",
          "الأعراض الحالية وحالات العدوى"
        ]
      },
      register: {
        "eyebrow": "استفسار المريض",
        "title": "ابدأ استفسار تنسيق الرعاية",
        "body": "تكفي معلومات أساسية قليلة للبدء. لا يلزم اكتمال التقارير أو اختيار الخدمة الآن.",
        "documentsTitle": "قائمة السجلات الطبية",
        "documents": [
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
          "تاريخ مرضي مهم مثل القلب، الكلى، الكبد، العدوى، أمراض المناعة الذاتية، التهاب الكبد، السل أو أمراض رئيسية أخرى"
        ]
      },
      clinicalTeam: {
        "eyebrow": "الفريق الذي يدعم رحلتك",
        "title": "فهم سريري وتنسيق شخصي",
        "body": "يستفيد المنسقون من خبرتهم الصحية في إعداد السجلات والتواصل مع المستشفيات. تعرض الملفات التالية خبرات ذات صلة بمسارات الأورام في قوانغتشو. يؤكد توفر المختص لكل حالة.",
        "cards": [
          {
            "title": "خلفية صحية",
            "text": "عضو تنسيق أساسي يحمل UK Master's degree in Nursing وNew York State RN license ورخصة تمريض صينية ولقب Associate Chief Nurse in China."
          },
          {
            "title": "خبرة سريرية",
            "text": "تشمل الخبرة الأورام والطوارئ وغرفة العمليات، مما يدعم تحضيرا وتواصلا أكثر أمانا."
          },
          {
            "title": "تنسيق بلغة طبية",
            "text": "نساعد في تنظيم السجلات والأسئلة وتعليمات المستشفى في مسار واضح."
          }
        ],
        "note": "هذه الخلفية تدعم التنسيق والتواصل، ولا تعني أن H&C Care تقدم تشخيصا أو علاجا أو تمريضا أو ممارسة طبية في هونغ كونغ."
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
        "eyebrow": "لخطوتك التالية",
        "title": "لنبدأ بمحادثة",
        "body": "أخبرنا بمكانك والدعم الذي تحتاجه عائلتك. نؤكد الوثائق وقناة التواصل قبل إرسال ملف طبي كامل.",
        "email": "البريد الإلكتروني",
        "whatsapp": "WhatsApp",
        "privacy": "تستخدم المعلومات الطبية لفهم الحالة والتنسيق، وقد تشارك مع فرق طبية مناسبة خارج هونغ كونغ."
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
          serviceContent["ar"].included,
          serviceContent["ar"].excluded,
          { title: "قرارات طبية", text: "كل القرارات للطبيب والمستشفى." },
          { title: "لا ضمانات", text: "لا نضمن القبول أو العلاج أو الجراحة أو النتائج أو التوفير." },
        ],
        note: serviceContent["ar"].note,
      },
      disclaimer: {
        title: "إخلاء مسؤولية طبية",
        body: `${brand.name} تقدم معلومات وتنسيقا ولا تحل محل تشخيص أو علاج الطبيب. النتائج والتكاليف غير مضمونة.`,
      },

      "car-t": {
        "eyebrow": "معلومات المرضى · سرطان المعدة",
        "title": "CLDN18.2 CAR-T: التحضير لمناقشة المختص",
        "body": "السجلات التي قد تساعد عند مناقشة satri-cel (CT041) مع فريق أورام مؤهل في الصين.",
        "cards": [
          {
            "title": "ما هو CLDN18.2؟",
            "text": "مؤشر حيوي يمكن فحصه في نسيج الورم. يراجع المختص الأنسجة وطريقة الفحص والنتائج مع التشخيص وتاريخ العلاج."
          },
          {
            "title": "ما الموافقة المعلنة؟",
            "text": "في 22 يونيو 2026 أعلنت CARsgen الموافقة في الصين على satricabtagene autoleucel (satri-cel/CT041)، ووصفته بأول منتج CAR-T معتمد عالميا للأورام الصلبة. الاستطباب المعلن هو السرطان الغدي المتقدم للمعدة أو الوصلة المعدية المريئية، الإيجابي لـ CLDN18.2 والسلبي لـ HER2، بعد فشل خطين علاجيين سابقين على الأقل."
          },
          {
            "title": "ما الذي تحضره؟",
            "text": "تقارير الأنسجة وIHC ونتائج CLDN18.2 وHER2 والتصوير الحديث وتاريخ العلاج المؤرخ وفحوص الدم والأدوية ووصف الحالة الحالية. يؤكد الفريق المستقبِل الفحوص الإضافية وتقييم السلامة."
          }
        ],
        "note": "هذه معلومات عامة وليست تقييما لملاءمة العلاج. تنسق H&C Care السجلات والتواصل. يؤكد الأطباء النشرة المعتمدة الحالية والأهلية والمخاطر والتوفر والتكاليف لكل مريض؛ لا يضمن الوصول أو النتائج."
      },
    },
  },

  id: {
    nav: {
      "home": "Beranda",
      "about": aboutContent.id.label,
      "membership": "Layanan",
      "oncology": "Koordinasi Onkologi",
      "mdt": "Sumber MDT",
      "experts": "Dokter",
      "hospitals": "Rumah sakit",
      "journey": "Alur",
      "register": "Mulai pertanyaan",
      "contact": "Kontak",
      "privacy": "Privasi",
      "terms": "Batas Layanan",
      "car-t": "CLDN18.2 CAR-T"
    },
    seo: {
      title: `${brand.name} | Koordinasi Medis Onkologi di China`,
      description: "Membantu pasien kanker internasional menyiapkan rekam medis, terhubung dengan spesialis onkologi yang sesuai, mengeksplorasi jalur terapi, dan menjalani perawatan rumah sakit di China.",
    },
    hero: {
      "eyebrow": "H&C Care · Dukungan pasien internasional",
      "title": "Koordinasi perawatan kanker di China",
      "highlight": "",
      "body": "Dukungan tenaga kesehatan berpengalaman klinis bagi pasien internasional, dengan fokus limfoma dan tumor padat di Guangzhou. Kami membantu menyiapkan rekam medis, menghubungi spesialis, dan merencanakan langkah berikutnya.",
      "primary": "Mulai pertanyaan",
      "secondary": "WhatsApp",
      "trust": [
        {
          "title": "Fokus onkologi",
          "text": ""
        },
        {
          "title": "Pengalaman klinis",
          "text": ""
        },
        {
          "title": "Guangzhou, China",
          "text": ""
        }
      ]
    },
    sections: {
      about: aboutContent.id,
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
        "eyebrow": serviceContent["id"].eyebrow,
        "title": serviceContent["id"].title,
        "body": serviceContent["id"].body,
        "plans": serviceContent["id"].plans,
        "modulesTitle": "Modul dukungan khusus",
        "modules": [
          {
            "title": "Koordinasi MDT limfoma",
            "text": "Persiapan materi diskusi untuk limfoma dan kasus kompleks dengan spesialis Guangdong dan Guangzhou."
          },
          {
            "title": "Dukungan pemulihan dan tindak lanjut",
            "text": "Persiapan janji, proses rumah sakit, dan pengingat komunikasi atau evaluasi berikutnya."
          },
          {
            "title": "Koordinasi jalur operasi",
            "text": "Dukungan komunikasi bila evaluasi ulang menunjukkan jalur bedah dapat didiskusikan."
          }
        ],
        "modulesNote": "Modul tidak otomatis termasuk paket rawat inap; lingkup dan biaya tambahan yang mungkin ada disepakati tertulis secara terpisah. Ini koordinasi dan konsultasi, bukan janji terapi. Keputusan medis tetap pada dokter dan institusi penerima.",
        "note": serviceContent["id"].note
      },
      oncology: {
        "eyebrow": "Jalur onkologi lanjutan",
        "title": "Mengeksplorasi jalur terapi dan riset yang sesuai di China",
        "body": "Untuk pasien yang memenuhi syarat, kami membantu menyiapkan rekam medis dan koordinasi komunikasi seputar opsi onkologi lanjutan. Kelayakan dan arah terapi ditentukan dokter dan institusi.",
        "cards": [
          {
            "title": "Imunoterapi dan terapi target",
            "text": "Persiapan riwayat terapi, biomarker, respons, dan pertanyaan untuk spesialis."
          },
          {
            "title": "Kanker lambung CLDN18.2-positive dan jalur CAR-T",
            "text": "Pada 22 Juni 2026 CARsgen mengumumkan persetujuan China untuk satricabtagene autoleucel (satri-cel/CT041), disebut sebagai produk CAR-T pertama di dunia yang disetujui untuk tumor padat. Indikasi yang diumumkan ialah adenokarsinoma lambung atau sambungan gastroesofagus lanjut, CLDN18.2-positif, HER2-negatif, setelah kegagalan sedikitnya dua lini terapi sebelumnya."
          },
          {
            "title": "Diskusi terapi sel",
            "text": "Persiapan pertanyaan tentang jalur, kelayakan, keamanan, waktu, dan persyaratan rumah sakit."
          },
          {
            "title": "Eksplorasi clinical trial",
            "text": "Membantu memahami peluang riset, dokumen, syarat kelayakan, dan komunikasi dengan tim terkait."
          },
          {
            "title": "Koordinasi bedah setelah evaluasi ulang",
            "text": "Bila sesuai, kami membantu komunikasi dengan tim bedah."
          },
          {
            "title": "Kejelasan jalur untuk keluarga",
            "text": "Mengubah langkah rumah sakit yang kompleks menjadi timeline praktis tanpa mengganti nasihat dokter."
          }
        ],
        "note": "Kami tidak memberi CAR-T atau terapi lain, menentukan kelayakan, menjamin akses ke terapi yang disetujui atau jalur riset klinis, menjamin masuk clinical trial, atau menjanjikan hasil."
      },
      mdt: {
        "eyebrow": "Spesialis onkologi Guangdong",
        "title": "Limfoma dan diskusi multidisiplin",
        "body": "Kami membantu mencocokkan pasien dengan sumber onkologi yang sesuai berdasarkan jenis kanker, stadium, riwayat terapi, kondisi saat ini, dan kebutuhan klinis.",
        "cards": [
          {
            "title": "Kekuatan MDT limfoma",
            "text": "Sumber terkuat kami adalah koordinasi limfoma dan hemato-onkologi kompleks di Guangdong dan Guangzhou."
          },
          {
            "title": "Pencocokan tumor solid",
            "text": "Persiapan kasus untuk diskusi onkologi medis, bedah, radiasi, atau jalur terpadu."
          },
          {
            "title": "Second opinion dan MDT",
            "text": "Merapikan dokumen dan pertanyaan agar diskusi lebih fokus."
          },
          {
            "title": "Kesesuaian lebih penting dari nama besar",
            "text": "Jalur tepat bergantung pada diagnosis, stadium, terapi sebelumnya, kondisi pasien, dan ketersediaan nyata."
          }
        ],
        "questionsTitle": "Pertanyaan kasus yang kami bantu siapkan",
        "questions": [
          "Apakah dokumen cukup untuk review spesialis?",
          "Apakah limfoma kambuh perlu MDT sebelum perjalanan?",
          "Evaluasi ulang apa yang diperlukan sebelum operasi?",
          "Dokumen apa yang perlu diterjemahkan?",
          "Timeline follow-up apa yang perlu disiapkan?"
        ],
        "note": "Koordinasi MDT tidak menjamin penerimaan dokter, rumah sakit, terapi, atau operasi tertentu."
      },
      experts: {
        eyebrow: "Latar klinis",
        title: "Profil spesialis untuk membangun kepercayaan",
        body: "Profil ini membantu memahami latar klinis jalur Guangzhou dan bukan praktik medis H&C Care di Hong Kong.",
        people: [
          { name: "Dr. Cai Qichun", role: "Chief Physician · Oncology Center Director", image: experts.cai, text: "Onkolog senior dengan pengalaman dalam limfoma, imunoterapi, terapi sel, dan perawatan individual." },
          { name: "Prof. Huang Huiqiang", role: "Chief Physician · Professor · PhD Supervisor", image: experts.huang, text: "Spesialis limfoma dan keganasan hematologi dengan pengalaman terapi sistemik dan transplantasi sel punca." },
          { name: "Dr. Xie Guoming", role: "Chief Physician · Solid Tumor Medical Oncology", image: experts.xie, text: "Onkolog medis dengan pengalaman lebih dari 40 tahun dalam tumor padat." },
          { name: "Dr. Peng Roujun", role: "Chief Physician · Pembimbing Doktoral · Onkologi Komprehensif", affiliation: "Pusat Kanker Universitas Sun Yat-sen", image: experts.peng, text: "Berfokus pada terapi medis dan perawatan multidisiplin kanker payudara serta kanker ginekologi, termasuk kanker ovarium, endometrium, dan serviks.", source: { label: "Profil resmi rumah sakit", url: pengSource } },
        ],
        note: "Profil ini menjelaskan latar klinis, bukan bukti bahwa dokter bekerja untuk H&C Care atau bahwa dokter maupun rumah sakit mendukung perusahaan. Ketersediaan konsultasi harus dikonfirmasi oleh fasilitas penerima. Ini bukan tawaran diagnosis, pengobatan, atau peresepan di Hong Kong.",
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
        "eyebrow": "Alur pasien",
        "title": "Cara proses bekerja",
        "body": "Anda dapat mulai dari rumah. Lingkup koordinasi dikonfirmasi sebelum layanan berbayar atau pengaturan perjalanan.",
        "steps": [
          {
            "title": "Ceritakan kebutuhan Anda",
            "text": "Sebutkan negara, bahasa pilihan, dan apakah Anda pasien atau anggota keluarga."
          },
          {
            "title": "Assessment koordinasi awal",
            "text": "Menilai apakah koordinasi realistis dan informasi apa yang masih kurang."
          },
          {
            "title": "Pencocokan jalur spesialis",
            "text": "Onkologi, MDT, riset, atau jalur bedah sesuai kasus."
          },
          {
            "title": "Pengaturan janji atau konsultasi",
            "text": "Persiapan dokumen, pertanyaan, dan komunikasi."
          },
          {
            "title": "Persiapan perjalanan dan rumah sakit",
            "text": "Waktu perjalanan, rawat inap, pembayaran, akomodasi, dan kebutuhan harian."
          },
          {
            "title": "Koordinasi di rumah sakit",
            "text": "Dukungan komunikasi medis dan langkah praktis bila diperlukan."
          },
          {
            "title": "Dukungan follow-up",
            "text": "Pertanyaan setelah pulang, jadwal review, dan komunikasi keluarga."
          }
        ],
        "documentsTitle": "Dokumen",
        "documents": [
          "Diagnosis dan ringkasan",
          "Patologi",
          "Imaging dan hasil tes",
          "Tes genetik/molekuler",
          "Riwayat terapi dan obat",
          "Gejala dan infeksi saat ini"
        ]
      },
      register: {
        "eyebrow": "Pertanyaan pasien",
        "title": "Mulai pertanyaan koordinasi perawatan",
        "body": "Beberapa informasi dasar cukup untuk memulai. Anda tidak perlu menunggu semua laporan atau memilih layanan sekarang.",
        "documentsTitle": "Checklist rekam medis",
        "documents": [
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
          "Riwayat medis penting seperti jantung, ginjal, hati, infeksi, penyakit autoimun, hepatitis, tuberkulosis, atau kondisi besar lainnya"
        ]
      },
      clinicalTeam: {
        "eyebrow": "Tim di balik perjalanan Anda",
        "title": "Pemahaman klinis, koordinasi personal",
        "body": "Koordinator menerapkan pengalaman kesehatan dalam persiapan rekam medis dan komunikasi rumah sakit. Profil berikut menjelaskan keahlian terkait jalur onkologi Guangzhou. Ketersediaan dikonfirmasi untuk setiap kasus.",
        "cards": [
          {
            "title": "Latar belakang profesional kesehatan",
            "text": "Anggota koordinasi inti memiliki UK Master's degree in Nursing, New York State RN license, Chinese nursing license, dan gelar Associate Chief Nurse in China."
          },
          {
            "title": "Pengalaman klinis",
            "text": "Pengalaman mencakup onkologi, emergency care, dan operating room settings."
          },
          {
            "title": "Koordinasi bahasa medis",
            "text": "Membantu keluarga menyusun rekam medis, pertanyaan klinis, dan instruksi rumah sakit menjadi jalur yang jelas."
          }
        ],
        "note": "Kredensial ini mendukung koordinasi dan komunikasi medis, bukan berarti H&C Care menyediakan diagnosis, terapi, nursing services, atau praktik medis di Hong Kong."
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
        "eyebrow": "Langkah berikutnya",
        "title": "Mari mulai dengan percakapan",
        "body": "Beri tahu lokasi Anda dan dukungan yang dibutuhkan keluarga. Kami mengonfirmasi dokumen dan kanal komunikasi sebelum Anda mengirim berkas medis lengkap.",
        "email": "Email kami",
        "whatsapp": "WhatsApp",
        "privacy": "Informasi medis digunakan untuk memahami kasus dan koordinasi; dapat dibagikan dengan tim medis relevan di luar Hong Kong."
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
          serviceContent["id"].included,
          serviceContent["id"].excluded,
          { title: "Keputusan medis", text: "Semua keputusan dibuat rumah sakit dan dokter." },
          { title: "Tanpa jaminan", text: "Tidak menjamin penerimaan, terapi, operasi, hasil, atau penghematan biaya." },
        ],
        note: serviceContent["id"].note,
      },
      disclaimer: {
        title: "Penafian medis",
        body: `${brand.name} menyediakan informasi dan koordinasi, tidak menggantikan diagnosis atau terapi dokter. Hasil dan biaya tidak dijamin.`,
      },

      "car-t": {
        "eyebrow": "Informasi pasien · Kanker lambung",
        "title": "CLDN18.2 CAR-T: persiapan diskusi spesialis",
        "body": "Dokumen yang dapat membantu saat membahas satri-cel (CT041) dengan tim onkologi berkualifikasi di China.",
        "cards": [
          {
            "title": "Apa itu CLDN18.2?",
            "text": "Biomarker yang dapat diperiksa pada jaringan tumor. Spesialis menilai patologi, metode, dan hasil tes bersama diagnosis dan riwayat terapi."
          },
          {
            "title": "Persetujuan apa yang diumumkan?",
            "text": "Pada 22 Juni 2026 CARsgen mengumumkan persetujuan China untuk satricabtagene autoleucel (satri-cel/CT041), disebut sebagai produk CAR-T pertama di dunia yang disetujui untuk tumor padat. Indikasi yang diumumkan ialah adenokarsinoma lambung atau sambungan gastroesofagus lanjut, CLDN18.2-positif, HER2-negatif, setelah kegagalan sedikitnya dua lini terapi sebelumnya."
          },
          {
            "title": "Apa yang disiapkan?",
            "text": "Patologi dan IHC, hasil CLDN18.2 dan HER2, pencitraan terbaru, riwayat terapi bertanggal, tes darah, obat, dan ringkasan kondisi terkini. Tim penerima menentukan pemeriksaan tambahan dan penilaian keselamatan."
          }
        ],
        "note": "Informasi umum ini bukan penilaian kelayakan terapi. H&C Care mengoordinasikan dokumen dan komunikasi. Dokter perlu mengonfirmasi label resmi terkini, kelayakan, risiko, ketersediaan, dan biaya bagi setiap pasien. Akses dan hasil tidak dijamin."
      },
    },
  },

  ms: {
    nav: {
      "home": "Utama",
      "about": aboutContent.ms.label,
      "membership": "Perkhidmatan",
      "oncology": "Koordinasi Onkologi",
      "mdt": "Sumber MDT",
      "experts": "Pakar",
      "hospitals": "Hospital",
      "journey": "Laluan",
      "register": "Mulakan pertanyaan",
      "contact": "Hubungi",
      "privacy": "Privasi",
      "terms": "Sempadan Servis",
      "car-t": "CLDN18.2 CAR-T"
    },
    seo: {
      title: `${brand.name} | Koordinasi Perubatan Onkologi di China`,
      description: "Membantu pesakit kanser antarabangsa menyediakan rekod, berhubung dengan pakar onkologi sesuai, meneroka laluan rawatan, dan menavigasi penjagaan hospital di China.",
    },
    hero: {
      "eyebrow": "H&C Care · Sokongan pesakit antarabangsa",
      "title": "Koordinasi penjagaan kanser di China",
      "highlight": "",
      "body": "Sokongan profesional kesihatan berpengalaman klinikal untuk pesakit antarabangsa, dengan fokus limfoma dan tumor pepejal di Guangzhou. Kami membantu menyediakan rekod, berhubung dengan pakar, dan merancang langkah seterusnya.",
      "primary": "Mulakan pertanyaan",
      "secondary": "WhatsApp",
      "trust": [
        {
          "title": "Fokus onkologi",
          "text": ""
        },
        {
          "title": "Pengalaman klinikal",
          "text": ""
        },
        {
          "title": "Guangzhou, China",
          "text": ""
        }
      ]
    },
    sections: {
      about: aboutContent.ms,
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
        "eyebrow": serviceContent["ms"].eyebrow,
        "title": serviceContent["ms"].title,
        "body": serviceContent["ms"].body,
        "plans": serviceContent["ms"].plans,
        "modulesTitle": "Modul sokongan khusus",
        "modules": [
          {
            "title": "Koordinasi MDT limfoma",
            "text": "Persediaan bahan perbincangan untuk limfoma dan kes kompleks bersama pakar Guangdong dan Guangzhou."
          },
          {
            "title": "Sokongan pemulihan dan susulan",
            "text": "Persediaan janji temu, langkah hospital dan peringatan komunikasi atau semakan seterusnya."
          },
          {
            "title": "Koordinasi laluan pembedahan",
            "text": "Sokongan komunikasi apabila penilaian semula menunjukkan laluan bedah boleh dibincangkan."
          }
        ],
        "modulesNote": "Modul tidak termasuk dalam pakej kemasukan secara automatik; skop dan sebarang caj tambahan dipersetujui berasingan secara bertulis. Ini koordinasi dan konsultasi, bukan janji rawatan. Keputusan perubatan kekal pada doktor dan institusi penerima.",
        "note": serviceContent["ms"].note
      },
      oncology: {
        "eyebrow": "Laluan onkologi lanjutan",
        "title": "Meneroka laluan rawatan dan penyelidikan sesuai di China",
        "body": "Untuk pesakit yang layak, kami membantu menyediakan rekod dan koordinasi komunikasi sekitar pilihan onkologi lanjutan. Kelayakan dan arah rawatan ditentukan doktor dan institusi.",
        "cards": [
          {
            "title": "Imunoterapi dan terapi sasaran",
            "text": "Persediaan sejarah rawatan, biomarker, respons dan soalan untuk pakar."
          },
          {
            "title": "Kanser gastrik CLDN18.2-positive dan laluan CAR-T",
            "text": "Pada 22 Jun 2026 CARsgen mengumumkan kelulusan China bagi satricabtagene autoleucel (satri-cel/CT041), digambarkan sebagai produk CAR-T pertama dunia diluluskan untuk tumor pepejal. Indikasi diumumkan ialah adenokarsinoma gastrik atau persimpangan gastroesofagus lanjut, CLDN18.2-positif, HER2-negatif, selepas kegagalan sekurang-kurangnya dua barisan rawatan terdahulu."
          },
          {
            "title": "Perbincangan terapi sel",
            "text": "Persediaan soalan tentang laluan, kelayakan, keselamatan, masa dan keperluan hospital."
          },
          {
            "title": "Eksplorasi clinical trial",
            "text": "Membantu memahami peluang penyelidikan, dokumen, syarat kelayakan dan komunikasi pasukan berkaitan."
          },
          {
            "title": "Koordinasi bedah selepas penilaian semula",
            "text": "Jika sesuai, kami membantu komunikasi dengan pasukan bedah."
          },
          {
            "title": "Kejelasan laluan untuk keluarga",
            "text": "Menukar langkah hospital kompleks menjadi garis masa praktikal tanpa mengganti nasihat doktor."
          }
        ],
        "note": "Kami tidak memberi CAR-T atau rawatan lain, menentukan kelayakan, menjamin akses kepada rawatan yang diluluskan atau laluan penyelidikan klinikal, menjamin kemasukan clinical trial, atau menjanjikan hasil."
      },
      mdt: {
        "eyebrow": "Pakar onkologi Guangdong",
        "title": "Limfoma dan perbincangan multidisiplin",
        "body": "Kami membantu memadankan pesakit dengan sumber onkologi yang sesuai berdasarkan jenis kanser, peringkat, sejarah rawatan, keadaan semasa dan keperluan klinikal.",
        "cards": [
          {
            "title": "Kekuatan MDT limfoma",
            "text": "Sumber terkuat kami ialah koordinasi limfoma dan hemato-onkologi kompleks di Guangdong dan Guangzhou."
          },
          {
            "title": "Padanan tumor solid",
            "text": "Persediaan kes untuk onkologi perubatan, bedah, radioterapi atau perbincangan bersepadu."
          },
          {
            "title": "Second opinion dan MDT",
            "text": "Menyusun dokumen dan soalan agar perbincangan lebih fokus."
          },
          {
            "title": "Kesesuaian lebih penting daripada nama",
            "text": "Laluan bergantung pada diagnosis, peringkat, rawatan terdahulu, keadaan pesakit dan ketersediaan sebenar."
          }
        ],
        "questionsTitle": "Soalan kes yang kami bantu sediakan",
        "questions": [
          "Adakah dokumen cukup untuk semakan pakar?",
          "Adakah limfoma berulang perlu MDT sebelum perjalanan?",
          "Penilaian semula apa diperlukan sebelum bedah?",
          "Dokumen apa perlu diterjemah?",
          "Garis masa susulan apa perlu disediakan?"
        ],
        "note": "Koordinasi MDT tidak menjamin penerimaan doktor, hospital, rawatan atau pembedahan tertentu."
      },
      experts: {
        eyebrow: "Latar klinikal",
        title: "Profil pakar untuk membina keyakinan",
        body: "Profil ini membantu memahami latar klinikal laluan Guangzhou dan bukan amalan perubatan H&C Care di Hong Kong.",
        people: [
          { name: "Dr. Cai Qichun", role: "Chief Physician · Oncology Center Director", image: experts.cai, text: "Pakar onkologi kanan dengan pengalaman limfoma, imunoterapi, terapi sel dan rawatan individu." },
          { name: "Prof. Huang Huiqiang", role: "Chief Physician · Professor · PhD Supervisor", image: experts.huang, text: "Pakar limfoma dan keganasan hematologi dengan pengalaman terapi sistemik dan transplantasi sel stem." },
          { name: "Dr. Xie Guoming", role: "Chief Physician · Solid Tumor Medical Oncology", image: experts.xie, text: "Pakar onkologi perubatan dengan pengalaman lebih 40 tahun dalam tumor pepejal." },
          { name: "Dr. Peng Roujun", role: "Chief Physician · Penyelia Kedoktoran · Onkologi Komprehensif", affiliation: "Pusat Kanser Universiti Sun Yat-sen", image: experts.peng, text: "Memfokuskan rawatan perubatan dan penjagaan pelbagai disiplin bagi kanser payudara serta kanser ginekologi, termasuk kanser ovari, endometrium dan serviks.", source: { label: "Profil rasmi hospital", url: pengSource } },
        ],
        note: "Profil ini menerangkan latar klinikal, bukan bukti bahawa doktor bekerja untuk H&C Care atau bahawa doktor mahupun hospital menyokong syarikat. Ketersediaan konsultasi perlu disahkan oleh institusi penerima. Ini bukan tawaran diagnosis, rawatan atau preskripsi di Hong Kong.",
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
        "eyebrow": "Laluan pesakit",
        "title": "Bagaimana proses berfungsi",
        "body": "Anda boleh bermula dari rumah. Skop koordinasi disahkan sebelum kerja berbayar atau pengaturan perjalanan.",
        "steps": [
          {
            "title": "Nyatakan keperluan anda",
            "text": "Beritahu negara, bahasa pilihan dan sama ada anda pesakit atau ahli keluarga."
          },
          {
            "title": "Assessment koordinasi awal",
            "text": "Menilai sama ada koordinasi realistik dan maklumat apa yang masih kurang."
          },
          {
            "title": "Padanan laluan pakar",
            "text": "Onkologi, MDT, penyelidikan atau laluan bedah mengikut kes."
          },
          {
            "title": "Atur temu janji atau konsultasi",
            "text": "Persediaan dokumen, soalan dan komunikasi."
          },
          {
            "title": "Persediaan perjalanan dan hospital",
            "text": "Masa perjalanan, kemasukan, bayaran, penginapan dan keperluan harian."
          },
          {
            "title": "Koordinasi di hospital",
            "text": "Sokongan komunikasi perubatan dan langkah praktikal jika diperlukan."
          },
          {
            "title": "Sokongan susulan",
            "text": "Soalan selepas keluar, jadual semakan dan komunikasi keluarga."
          }
        ],
        "documentsTitle": "Dokumen",
        "documents": [
          "Diagnosis dan ringkasan",
          "Patologi",
          "Imej dan keputusan ujian",
          "Ujian genetik/molekul",
          "Sejarah rawatan dan ubat",
          "Simptom dan jangkitan semasa"
        ]
      },
      register: {
        "eyebrow": "Pertanyaan pesakit",
        "title": "Mulakan pertanyaan koordinasi penjagaan",
        "body": "Beberapa maklumat asas mencukupi untuk bermula. Tidak perlu menunggu semua laporan atau memilih perkhidmatan sekarang.",
        "documentsTitle": "Senarai semak rekod perubatan",
        "documents": [
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
          "Sejarah perubatan penting seperti jantung, buah pinggang, hati, jangkitan, penyakit autoimun, hepatitis, tuberkulosis atau keadaan utama lain"
        ]
      },
      clinicalTeam: {
        "eyebrow": "Pasukan di sebalik perjalanan anda",
        "title": "Pemahaman klinikal, koordinasi peribadi",
        "body": "Penyelaras menggunakan pengalaman kesihatan dalam penyediaan rekod dan komunikasi hospital. Profil berikut menerangkan kepakaran berkaitan laluan onkologi Guangzhou. Ketersediaan disahkan untuk setiap kes.",
        "cards": [
          {
            "title": "Latar profesional kesihatan",
            "text": "Ahli koordinasi teras memiliki UK Master's degree in Nursing, New York State RN license, Chinese nursing license dan gelaran Associate Chief Nurse in China."
          },
          {
            "title": "Pengalaman klinikal",
            "text": "Pengalaman merangkumi onkologi, emergency care dan operating room settings."
          },
          {
            "title": "Koordinasi bahasa perubatan",
            "text": "Membantu keluarga menyusun rekod, soalan klinikal dan arahan hospital menjadi laluan jelas."
          }
        ],
        "note": "Kredensial ini menyokong koordinasi dan komunikasi perubatan, bukan bermaksud H&C Care menyediakan diagnosis, rawatan, nursing services atau amalan perubatan di Hong Kong."
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
        "eyebrow": "Langkah seterusnya",
        "title": "Mari bermula dengan perbualan",
        "body": "Beritahu lokasi dan sokongan yang keluarga perlukan. Kami sahkan dokumen dan saluran komunikasi sebelum fail perubatan penuh dihantar.",
        "email": "E-mel kami",
        "whatsapp": "WhatsApp",
        "privacy": "Maklumat perubatan digunakan untuk memahami kes dan koordinasi; boleh dikongsi dengan pasukan perubatan relevan di luar Hong Kong."
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
          serviceContent["ms"].included,
          serviceContent["ms"].excluded,
          { title: "Keputusan perubatan", text: "Semua keputusan dibuat hospital dan doktor." },
          { title: "Tiada jaminan", text: "Tidak menjamin penerimaan, rawatan, pembedahan, hasil atau penjimatan." },
        ],
        note: serviceContent["ms"].note,
      },
      disclaimer: {
        title: "Penafian perubatan",
        body: `${brand.name} menyediakan maklumat dan koordinasi, tidak menggantikan diagnosis atau rawatan doktor. Hasil dan kos tidak dijamin.`,
      },

      "car-t": {
        "eyebrow": "Maklumat pesakit · Kanser gastrik",
        "title": "CLDN18.2 CAR-T: persediaan perbincangan pakar",
        "body": "Rekod yang boleh membantu perbincangan satri-cel (CT041) dengan pasukan onkologi berkelayakan di China.",
        "cards": [
          {
            "title": "Apakah CLDN18.2?",
            "text": "Biomarker yang boleh diuji pada tisu tumor. Pakar menilai patologi, kaedah dan keputusan ujian bersama diagnosis serta sejarah rawatan."
          },
          {
            "title": "Apakah kelulusan yang diumumkan?",
            "text": "Pada 22 Jun 2026 CARsgen mengumumkan kelulusan China bagi satricabtagene autoleucel (satri-cel/CT041), digambarkan sebagai produk CAR-T pertama dunia diluluskan untuk tumor pepejal. Indikasi diumumkan ialah adenokarsinoma gastrik atau persimpangan gastroesofagus lanjut, CLDN18.2-positif, HER2-negatif, selepas kegagalan sekurang-kurangnya dua barisan rawatan terdahulu."
          },
          {
            "title": "Apa yang perlu disediakan?",
            "text": "Patologi dan IHC, keputusan CLDN18.2 dan HER2, pengimejan terkini, sejarah rawatan bertarikh, ujian darah, ubat dan ringkasan keadaan semasa. Pasukan penerima menentukan ujian tambahan dan penilaian keselamatan."
          }
        ],
        "note": "Ini maklumat umum, bukan penilaian kesesuaian rawatan. H&C Care menyelaras rekod dan komunikasi. Doktor perlu mengesahkan label diluluskan semasa, kelayakan, risiko, ketersediaan dan kos setiap pesakit. Akses dan hasil tidak dijamin."
      },
    },
  },
};
