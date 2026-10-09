import type { Locale } from "./site";

type Item = { title: string; text: string };
type Heading = { eyebrow: string; title: string; body: string };

export type PatientContent = {
  menu: string;
  languages: string;
  start: string;
  more: string;
  email: string;
  whatsapp: string;
  roomAlt: string;
  hero: Heading & { trust: string[] };
  team: Heading;
  focus: Heading & { items: Item[] };
  deliverables: Heading & { items: Item[] };
  journey: Heading & { items: Item[] };
  services: Heading & { quote: string; note: string; plans: Array<{ name: string; fit: string; items: string[] }>; modules: string[] };
  faq: Heading & { items: Item[] };
  contact: Heading & { labels: string[]; note: string };
  enquiry: Heading & {
    formTitle: string;
    name: string;
    country: string;
    language: string;
    role: string;
    roles: string[];
    interest: string;
    undecided: string;
    consent: string;
    privacy: string;
    note: string;
    recordsIntro: string;
    identityNote: string;
  };
  carT: Heading & { items: Item[]; note: string; source: string; published: string };
};

export const patientContent: Record<Locale, PatientContent> = {
  en: {
    menu: "Menu", languages: "Choose language", start: "Start an enquiry", more: "Explore this service", email: "Email us", whatsapp: "WhatsApp", roomAlt: "Patient room in Guangzhou; room arrangements depend on the receiving hospital",
    hero: { eyebrow: "H&C Care · International patient support", title: "Cancer care coordination in China", body: "Healthcare-professional-led support for international patients, with a focus on lymphoma and solid tumor care in Guangzhou. We help you prepare records, communicate with specialists, and plan the next step.", trust: ["Oncology-focused", "Clinical experience", "Guangzhou, China"] },
    team: { eyebrow: "People behind your care journey", title: "Clinical understanding. Personal coordination.", body: "Our coordinators bring healthcare experience to record preparation and hospital communication. The specialist profiles below describe clinical expertise relevant to Guangzhou oncology pathways. Availability is confirmed for each case." },
    focus: { eyebrow: "Our oncology focus", title: "Start with your diagnosis and your questions", body: "Your cancer type, treatment history, and current condition guide the coordination we discuss with you.", items: [
      { title: "Lymphoma & multidisciplinary review", text: "Prepare pathology, imaging, and treatment history for lymphoma specialist communication, second opinions, and multidisciplinary discussion in Guangdong." },
      { title: "Solid tumors & treatment pathways", text: "Organize biomarker results and prior treatment records for discussion of immunotherapy, targeted therapy, research opportunities, or surgical reassessment." },
    ] },
    deliverables: { eyebrow: "What you receive", title: "A clearer next step for you and your family", body: "Your written service scope defines the work we will deliver. Depending on the agreed support, this can include:", items: [
      { title: "An organized case summary", text: "A dated treatment timeline and a structured record package for specialist communication." },
      { title: "A missing-document checklist", text: "A practical list of reports and images to request from your current treating team." },
      { title: "Questions for the specialist", text: "Your family's priorities and clinical questions prepared for the receiving medical team." },
      { title: "A visit & follow-up plan", text: "Appointment preparation, hospital steps, and reminders for the next communication or review." },
    ] },
    journey: { eyebrow: "Your first steps", title: "Understand the options before you travel", body: "You can begin from home. We confirm the coordination scope before paid work or travel arrangements.", items: [
      { title: "Tell us what you need", text: "Contact us with your country, preferred language, and whether you are the patient or a family member." },
      { title: "Prepare the case together", text: "After confirming consent and the submission channel, gather the available reports and questions." },
      { title: "Agree on the next step", text: "Confirm specialist communication, service scope, and a written quote before deciding whether to proceed." },
    ] },
    services: { eyebrow: "Services & support", title: "Choose support that fits your situation", body: "Start with an initial enquiry, a focused coordination task, or ongoing annual case support. We confirm the scope and quote with you before paid services begin.", quote: "Request a service proposal", note: "Coordination fees and medical expenses are separate. Hospital, physician, testing, treatment, travel, accommodation, and third-party interpreter fees are confirmed separately. The written proposal explains inclusions, timing, and cancellation arrangements.", plans: [
      { name: "Initial pathway enquiry", fit: "For patients and families exploring care in China.", items: ["Discuss your coordination needs", "Understand the preparation process", "Receive a record checklist"] },
      { name: "Focused coordination", fit: "For a defined specialist or hospital coordination task.", items: ["Prepare the case and treatment timeline", "Coordinate agreed appointments or communication", "Clarify the next practical steps"] },
      { name: "Annual case support", fit: "For patients who need continuing coordination over time.", items: ["Maintain and update the case file", "Coordinate agreed reviews and follow-up", "Support family communication across stages"] },
    ], modules: ["Lymphoma MDT coordination", "Recovery & follow-up support", "Surgical pathway coordination"] },
    faq: { eyebrow: "Before you decide", title: "Questions patients and families ask", body: "A few practical answers before your first enquiry.", items: [
      { title: "Can I contact you before travelling?", text: "Yes. Begin by email or WhatsApp. After initial contact, we confirm what records are needed and whether specialist or hospital communication is appropriate." },
      { title: "What if some reports are missing?", text: "You can still make an initial enquiry. We help identify missing documents; the receiving clinical team decides whether the available material is sufficient for review." },
      { title: "Can a family member contact you?", text: "Yes. Please tell us your relationship to the patient. We confirm authorization before sharing or coordinating sensitive medical records." },
      { title: "Are hospital and treatment costs included?", text: "Medical costs are separate from our coordination fee. A written proposal will explain the agreed support, third-party costs, and payment arrangements before paid work begins." },
      { title: "Do you guarantee treatment or trial enrollment?", text: "No. Licensed clinicians and receiving institutions decide eligibility, acceptance, treatment, and research enrollment. We help with preparation and communication." },
      { title: "Can you help after I return home?", text: "Follow-up communication, document updates, and review reminders can be included in an agreed service scope. Your treating clinicians remain responsible for medical advice." },
    ] },
    contact: { eyebrow: "Here for your next step", title: "Let's start with a conversation", body: "Tell us where you are and what support your family needs. We will discuss the appropriate records and contact channel with you before you send a full medical file.", labels: ["New patient enquiries", "Service coordination", "Existing patient support"], note: "Please do not send passport copies or a full medical file in your first message. Contact local emergency services for urgent medical help." },
    enquiry: { eyebrow: "Patient enquiry", title: "Start your care coordination enquiry", body: "A few basic details are enough to begin. You do not need to have every report ready or choose a service level yet.", formTitle: "Prepare your first message", name: "Name or initials (optional)", country: "Country or region", language: "Preferred language", role: "You are contacting us as", roles: ["The patient", "A family member or authorized representative"], interest: "Support you would like to discuss", undecided: "Not sure yet", consent: "I am the patient or have permission to share this information for a coordination enquiry.", privacy: "Read the privacy notice", note: "These buttons open an editable email draft or WhatsApp message. Nothing is uploaded or submitted to this website, and you must send the message in your chosen app. Please leave out medical reports, passport numbers, and urgent clinical instructions.", recordsIntro: "After initial contact and consent, use this checklist to gather available reports. We will confirm how to send them. Missing a document does not prevent an initial enquiry.", identityNote: "Identity documents are requested only when needed for a specific hospital or service arrangement, through a confirmed channel. A family representative may need patient authorization." },
    carT: { eyebrow: "Patient information · Gastric cancer", title: "CLDN18.2 CAR-T: preparing for a specialist discussion", body: "Learn which records may be useful when discussing satri-cel (CT041) with a qualified oncology team in China.", items: [
      { title: "What is CLDN18.2?", text: "CLDN18.2 is a biomarker that can be assessed in tumor tissue. A specialist reviews the pathology, testing method, and results together with the patient's diagnosis and treatment history." },
      { title: "What approval has been announced?", text: "On 22 June 2026, CARsgen announced Chinese approval of satricabtagene autoleucel (satri-cel/CT041), described as the world's first approved CAR-T product for solid tumors. The announced indication is CLDN18.2-positive, HER2-negative advanced gastric or gastroesophageal junction adenocarcinoma after failure of at least two prior treatment lines." },
      { title: "What should you prepare?", text: "Available pathology and IHC reports, CLDN18.2 and HER2 results, recent imaging, a dated treatment history, blood tests, current medicines, and a summary of the patient's current condition. The receiving team confirms any additional testing and safety assessment." },
    ], note: "This is general information, not an assessment of treatment suitability. H&C Care coordinates records and communication. Receiving clinicians must confirm the current approved label, eligibility, risks, availability, and costs for the individual patient; access and outcomes are not guaranteed.", source: "Read the CARsgen approval announcement", published: "Source announcement: 22 June 2026" },
  },
  "zh-hant": {
    menu: "選單", languages: "選擇語言", start: "開始個案諮詢", more: "了解這項服務", email: "電郵聯絡", whatsapp: "WhatsApp", roomAlt: "廣州病房環境；實際房型以接診醫院安排為準",
    hero: { eyebrow: "H&C Care · 國際患者支持", title: "中國腫瘤就醫協調", body: "由具臨床背景的醫療專業人員參與，專注淋巴瘤及實體瘤的廣州就醫協調。協助您整理病歷、溝通專家，並為下一步做好準備。", trust: ["專注腫瘤", "臨床工作背景", "中國 · 廣州"] },
    team: { eyebrow: "了解支持您的團隊", title: "理解臨床，也理解患者與家屬", body: "協調團隊將醫療工作經驗用於病歷準備與醫院溝通。以下專家資料介紹廣州腫瘤路徑相關的臨床專長，實際接診與安排需按個案確認。" },
    focus: { eyebrow: "我們專注的方向", title: "從您的診斷與問題開始", body: "根據癌種、既往治療和目前狀況，與您討論適合的協調支持。", items: [
      { title: "淋巴瘤與多學科討論", text: "整理病理、影像和治療史，協調廣東淋巴瘤專家溝通、第二意見及多學科討論準備。" },
      { title: "實體瘤與治療路徑", text: "整理標誌物結果與既往治療資料，為免疫治療、靶向治療、臨床研究或手術復評討論做好準備。" },
    ] },
    deliverables: { eyebrow: "您會獲得什麼", title: "讓下一步更清楚，讓家屬更好安排", body: "具體交付內容以雙方確認的書面服務範圍為準，可包括：", items: [
      { title: "清晰的病情摘要", text: "按日期整理治療時間線與病歷資料包，方便向專家說明個案。" },
      { title: "缺失資料清單", text: "列出需要向原接診團隊索取的報告、影像及補充資料。" },
      { title: "專家溝通問題清單", text: "整理患者與家屬最關心的問題，供接診醫療團隊評估。" },
      { title: "就醫與後續安排", text: "準備預約、入院步驟及下一次溝通或復查的提醒。" },
    ] },
    journey: { eyebrow: "開始的三個步驟", title: "先了解，再決定是否赴華", body: "您可以先在所在地聯絡我們。付費服務與出行安排前，先確認協調範圍。", items: [
      { title: "說明您的需要", text: "提供所在國家或地區、偏好語言，以及您是患者本人還是家屬。" },
      { title: "一起準備個案", text: "確認授權與提交渠道後，再整理已有報告與需要醫生回答的問題。" },
      { title: "確認下一步安排", text: "了解專家溝通方式、服務範圍及書面報價後，再決定是否繼續。" },
    ] },
    services: { eyebrow: "服務與支持", title: "按您的情況選擇協調支持", body: "可從初步諮詢、專項協調或年度個案支持開始。付費服務開始前，我們會與您確認範圍及書面報價。", quote: "諮詢獲取服務方案", note: "協調服務費與醫療費用分開。醫院、醫生、檢查、治療、出行、住宿及第三方翻譯費另行確認。書面方案會說明包含項目、時間安排及取消服務的處理方式。", plans: [
      { name: "初步路徑諮詢", fit: "適合正在了解中國就醫的患者與家屬。", items: ["溝通協調需求", "了解資料準備流程", "獲取病歷資料清單"] },
      { name: "專項協調服務", fit: "適合有明確專家或醫院協調任務的患者。", items: ["整理病情與治療時間線", "協調約定的預約或溝通", "釐清下一步實際安排"] },
      { name: "年度個案支持", fit: "適合需要持續跟進與跨階段協調的患者。", items: ["維護與更新個案檔案", "協調約定的復評與隨訪", "支持不同階段的家屬溝通"] },
    ], modules: ["淋巴瘤 MDT 協調", "康復與隨訪支持", "手術路徑協調"] },
    faq: { eyebrow: "決定前先了解", title: "患者與家屬常見問題", body: "初次聯絡前，您可能想先知道這些。", items: [
      { title: "還沒來中國，也可以先聯絡嗎？", text: "可以。先通過電郵或 WhatsApp 聯絡，我們會確認需要哪些資料，以及是否適合進一步與專家或醫院溝通。" },
      { title: "病歷報告不齊全怎麼辦？", text: "仍可先作初步諮詢。我們協助釐清缺失資料；現有資料是否足以評估，由接診醫療團隊判斷。" },
      { title: "家屬可以代為聯絡嗎？", text: "可以，請說明與患者的關係。在轉交或協調敏感病歷前，我們會確認患者授權。" },
      { title: "服務費包含醫院和治療費嗎？", text: "醫療費用與協調服務費分開。付費服務前，書面方案會說明服務範圍、第三方費用及付款安排。" },
      { title: "能保證獲得治療或臨床研究入組嗎？", text: "不能。資格、接診、治療和臨床研究入組由持牌醫生及接診機構決定。我們提供準備與溝通支持。" },
      { title: "回國後還能繼續獲得支持嗎？", text: "隨訪溝通、資料更新和復查提醒可納入約定的服務範圍。醫療建議仍由接診醫生負責。" },
    ] },
    contact: { eyebrow: "為下一步做好準備", title: "先從一次溝通開始", body: "告訴我們您在哪裡，以及家庭需要什麼支持。在發送完整病歷前，我們會先與您確認所需資料及聯絡渠道。", labels: ["新患者諮詢", "服務協調", "現有患者支持"], note: "首封信息請勿附上護照副本或完整病歷。緊急醫療需要請聯絡所在地急救服務。" },
    enquiry: { eyebrow: "患者諮詢", title: "開始您的就醫協調諮詢", body: "先提供少量基本資料即可開始，不必等齊所有報告，也不必現在選定服務檔次。", formTitle: "準備您的首封信息", name: "姓名或縮寫（選填）", country: "所在國家或地區", language: "偏好語言", role: "您的聯絡身份", roles: ["患者本人", "家屬或獲授權代表"], interest: "希望了解的支持", undecided: "暫未確定", consent: "我是患者本人，或已獲允許為協調諮詢分享這些資料。", privacy: "閱讀私隱聲明", note: "按鈕會打開可編輯的電郵草稿或 WhatsApp 信息。資料不會上傳或提交至本網站，您仍需在所選應用中自行發送。請勿填寫病歷報告、護照號碼或緊急臨床指示。", recordsIntro: "初步聯絡並確認授權後，可按以下清單準備已有報告；我們會確認提交方式。資料暫缺不影響初步諮詢。", identityNote: "身份證明僅在具體醫院或服務安排需要時，經確認渠道另行索取。家屬代辦可能需要患者授權。" },
    carT: { eyebrow: "患者資訊 · 胃癌", title: "CLDN18.2 CAR-T：如何準備專家溝通", body: "了解與中國合資格腫瘤團隊討論 satri-cel（CT041）時，哪些資料可能有幫助。", items: [
      { title: "CLDN18.2 是什麼？", text: "CLDN18.2 是可在腫瘤組織中檢測的標誌物。專家需結合病理、檢測方法、結果、診斷及既往治療一併判斷。" },
      { title: "目前有哪些獲批資訊？", text: "科濟藥業於2026年6月22日公告 satricabtagene autoleucel（satri-cel／CT041）在中國獲批，稱其為全球首個獲批用於實體瘤的 CAR-T 產品。公告適應證為 CLDN18.2 陽性、HER2 陰性，既往至少二線治療失敗的晚期胃或胃食管交界部腺癌。" },
      { title: "建議先準備哪些資料？", text: "已有病理與免疫組化報告、CLDN18.2 和 HER2 結果、近期影像、按日期整理的治療史、血液檢查、目前用藥及整體狀況摘要。額外檢測與安全性評估由接診團隊確認。" },
    ], note: "本頁為一般資訊，不構成治療適用性評估。H&C Care 協調資料與溝通；接診醫生需按個案確認現行核准說明書、適應條件、風險、可及性及費用，不保證獲得治療或療效。", source: "閱讀科濟藥業獲批公告", published: "來源公告日期：2026年6月22日" },
  },
  ru: {
    menu: "Меню", languages: "Выбрать язык", start: "Обратиться к нам", more: "Подробнее об услуге", email: "Написать по email", whatsapp: "WhatsApp", roomAlt: "Палата в Гуанчжоу; размещение зависит от принимающей больницы",
    hero: { eyebrow: "H&C Care · Поддержка иностранных пациентов", title: "Координация онкологической помощи в Китае", body: "Поддержка специалистов с клиническим опытом для иностранных пациентов. Наш фокус — лимфомы и солидные опухоли в Гуанчжоу. Помогаем подготовить документы, связаться с врачами и спланировать следующий шаг.", trust: ["Онкологический фокус", "Клинический опыт", "Гуанчжоу, Китай"] },
    team: { eyebrow: "Кто помогает вам", title: "Понимание клиники и личная поддержка", body: "Координаторы используют медицинский опыт при подготовке документов и общении с больницами. Профили ниже описывают специалистов, связанных с онкологическими маршрутами Гуанчжоу. Возможность приема подтверждается для каждого случая." },
    focus: { eyebrow: "Наш фокус", title: "Начнем с вашего диагноза и вопросов", body: "Вид опухоли, история лечения и текущее состояние определяют обсуждаемый объем координации.", items: [
      { title: "Лимфомы и междисциплинарное обсуждение", text: "Подготовка патологии, снимков и истории лечения для общения со специалистами Гуандуна, второго мнения и междисциплинарного обсуждения." },
      { title: "Солидные опухоли и варианты лечения", text: "Подготовка биомаркеров и истории лечения для обсуждения иммунотерапии, таргетной терапии, исследований или повторной хирургической оценки." },
    ] },
    deliverables: { eyebrow: "Результат нашей работы", title: "Понятный следующий шаг для вашей семьи", body: "Конкретный результат определяется письменным объемом услуг и может включать:", items: [
      { title: "Структурированное резюме случая", text: "Хронология лечения и пакет документов для общения со специалистом." },
      { title: "Список недостающих документов", text: "Какие отчеты и снимки запросить у текущей лечащей команды." },
      { title: "Вопросы специалисту", text: "Приоритеты семьи и вопросы, подготовленные для принимающих врачей." },
      { title: "План посещения и связи", text: "Подготовка записи, этапов госпитализации и напоминаний о следующем обсуждении." },
    ] },
    journey: { eyebrow: "Первые шаги", title: "Изучите варианты до поездки", body: "Начать можно из дома. Объем координации согласуется до платной работы и организации поездки.", items: [
      { title: "Расскажите о потребностях", text: "Укажите страну, предпочтительный язык и обращаетесь ли вы как пациент или родственник." },
      { title: "Подготовим документы вместе", text: "После подтверждения согласия и канала передачи соберите имеющиеся отчеты и вопросы." },
      { title: "Согласуем следующий шаг", text: "До решения о продолжении подтвердим общение со специалистом, объем услуг и письменное предложение." },
    ] },
    services: { eyebrow: "Услуги и поддержка", title: "Поддержка с учетом вашей ситуации", body: "Первичное обращение, отдельная задача или годовое сопровождение. Объем и стоимость согласуются письменно до начала платных услуг.", quote: "Запросить предложение", note: "Координация и медицинские расходы оплачиваются отдельно. Стоимость больницы, врачей, обследований, лечения, поездки, проживания и стороннего перевода подтверждается отдельно. Письменное предложение описывает услуги, сроки и условия отмены.", plans: [
      { name: "Первичное обращение", fit: "Для семей, изучающих помощь в Китае.", items: ["Обсуждение потребностей", "Порядок подготовки", "Список документов"] },
      { name: "Отдельная координация", fit: "Для определенной задачи со специалистом или больницей.", items: ["Резюме и хронология случая", "Согласованная запись или коммуникация", "Следующие практические шаги"] },
      { name: "Годовое сопровождение", fit: "Для длительной координационной поддержки.", items: ["Обновление файла случая", "Согласованные повторные обсуждения", "Связь с семьей на разных этапах"] },
    ], modules: ["Координация MDT при лимфоме", "Поддержка восстановления и наблюдения", "Координация хирургического маршрута"] },
    faq: { eyebrow: "Перед решением", title: "Вопросы пациентов и близких", body: "Практическая информация до первого обращения.", items: [
      { title: "Можно обратиться до поездки?", text: "Да, по email или WhatsApp. После первого контакта уточним документы и уместность общения со специалистом или больницей." },
      { title: "Что делать, если нет всех отчетов?", text: "Можно обратиться с имеющимися материалами. Мы уточним, чего не хватает; достаточность документов для оценки определяет принимающая клиническая команда." },
      { title: "Может обратиться родственник?", text: "Да. Укажите родство. Перед передачей медицинских документов потребуется подтверждение разрешения пациента." },
      { title: "Включены ли расходы на лечение?", text: "Нет, медицинские расходы отделены от координации. Письменное предложение поясняет услуги, сторонние расходы и оплату до начала платной работы." },
      { title: "Гарантируете ли вы лечение или участие в исследовании?", text: "Нет. Критерии, прием, лечение и включение в исследование определяют врачи и учреждения. Мы помогаем с подготовкой и связью." },
      { title: "Есть ли поддержка после возвращения?", text: "Обновление документов, напоминания и последующая связь могут входить в согласованный объем. Медицинские рекомендации остаются ответственностью лечащих врачей." },
    ] },
    contact: { eyebrow: "Следующий шаг", title: "Начнем с разговора", body: "Расскажите, где вы находитесь и какая поддержка нужна семье. До отправки полного медицинского файла мы уточним документы и канал связи.", labels: ["Первичное обращение", "Координация услуг", "Поддержка текущих пациентов"], note: "Не прикладывайте паспорт и полный медицинский файл к первому сообщению. При неотложном состоянии обращайтесь в местную экстренную службу." },
    enquiry: { eyebrow: "Обращение пациента", title: "Начните обращение по координации", body: "Для начала достаточно нескольких основных сведений. Не нужно ждать всех отчетов или заранее выбирать услугу.", formTitle: "Подготовьте первое сообщение", name: "Имя или инициалы (необязательно)", country: "Страна или регион", language: "Предпочтительный язык", role: "Вы обращаетесь как", roles: ["Пациент", "Родственник или уполномоченный представитель"], interest: "Интересующая поддержка", undecided: "Пока не знаю", consent: "Я пациент или имею разрешение передать эти сведения для координационного обращения.", privacy: "Уведомление о конфиденциальности", note: "Кнопки открывают редактируемый черновик email или сообщение WhatsApp. Сайт ничего не загружает и не отправляет; отправьте сообщение сами в выбранном приложении. Не указывайте медицинские отчеты, паспортные номера и срочные клинические инструкции.", recordsIntro: "После первого контакта и согласия подготовьте имеющиеся отчеты по этому списку. Мы подтвердим канал передачи. Отсутствие документа не мешает первичному обращению.", identityNote: "Документы личности запрашиваются только при необходимости для конкретной больницы или услуги, через подтвержденный канал. Представителю может понадобиться разрешение пациента." },
    carT: { eyebrow: "Информация для пациентов · Рак желудка", title: "CLDN18.2 CAR-T: подготовка к обсуждению", body: "Какие документы могут помочь при обсуждении satri-cel (CT041) с квалифицированной онкологической командой Китая.", items: [
      { title: "Что такое CLDN18.2?", text: "CLDN18.2 — биомаркер, исследуемый в ткани опухоли. Врач оценивает патологию, метод тестирования и результаты вместе с диагнозом и историей лечения." },
      { title: "Какое одобрение объявлено?", text: "22 июня 2026 года CARsgen объявила об одобрении в Китае satricabtagene autoleucel (satri-cel/CT041), назвав его первым в мире одобренным CAR-T продуктом для солидных опухолей. Объявленное показание: CLDN18.2-положительная, HER2-отрицательная распространенная аденокарцинома желудка или гастроэзофагеального перехода после неудачи минимум двух линий лечения." },
      { title: "Что подготовить?", text: "Патологию и IHC, результаты CLDN18.2 и HER2, недавние снимки, хронологию лечения, анализы крови, лекарства и описание текущего состояния. Дополнительные обследования определяет принимающая команда." },
    ], note: "Это общая информация, а не оценка пригодности лечения. H&C Care координирует документы и связь. Врачи подтверждают действующую инструкцию, критерии, риски, доступность и стоимость для пациента. Доступ и результат не гарантируются.", source: "Объявление CARsgen об одобрении", published: "Дата источника: 22 июня 2026 года" },
  },
  ar: {
    menu: "القائمة", languages: "اختيار اللغة", start: "ابدأ استفسارك", more: "تفاصيل الخدمة", email: "البريد الإلكتروني", whatsapp: "WhatsApp", roomAlt: "غرفة مرضى في قوانغتشو؛ يحدد المستشفى ترتيبات الإقامة",
    hero: { eyebrow: "H&C Care · دعم المرضى الدوليين", title: "تنسيق رعاية الأورام في الصين", body: "دعم يشارك فيه مهنيون ذوو خبرة سريرية للمرضى الدوليين، مع التركيز على اللمفوما والأورام الصلبة في قوانغتشو. نساعد في إعداد السجلات والتواصل مع المختصين والتخطيط للخطوة التالية.", trust: ["تركيز على الأورام", "خبرة سريرية", "قوانغتشو، الصين"] },
    team: { eyebrow: "الفريق الذي يدعم رحلتك", title: "فهم سريري وتنسيق شخصي", body: "يستفيد المنسقون من خبرتهم الصحية في إعداد السجلات والتواصل مع المستشفيات. تعرض الملفات التالية خبرات ذات صلة بمسارات الأورام في قوانغتشو. يؤكد توفر المختص لكل حالة." },
    focus: { eyebrow: "مجالات التركيز", title: "نبدأ بتشخيصك وأسئلتك", body: "يوجه نوع السرطان وتاريخ العلاج والحالة الحالية نطاق التنسيق الذي نناقشه معك.", items: [
      { title: "اللمفوما والمناقشة متعددة التخصصات", text: "إعداد تقارير الأنسجة والتصوير وتاريخ العلاج للتواصل مع مختصي قوانغدونغ والرأي الثاني والمناقشة متعددة التخصصات." },
      { title: "الأورام الصلبة ومسارات العلاج", text: "تنظيم نتائج المؤشرات الحيوية والعلاجات السابقة لمناقشة العلاج المناعي أو الموجه أو الأبحاث أو إعادة التقييم الجراحي." },
    ] },
    deliverables: { eyebrow: "ما الذي تحصل عليه", title: "خطوة تالية أوضح لك ولعائلتك", body: "يحدد نطاق الخدمة المكتوب الأعمال المتفق عليها، وقد يشمل:", items: [
      { title: "ملخص حالة منظم", text: "تسلسل زمني مؤرخ للعلاج وملف سجلات للتواصل مع المختص." },
      { title: "قائمة الوثائق الناقصة", text: "التقارير والصور المطلوب طلبها من فريقك المعالج الحالي." },
      { title: "أسئلة للمختص", text: "تنظيم أولويات العائلة والأسئلة للفريق الطبي المستقبِل." },
      { title: "خطة زيارة ومتابعة", text: "التحضير للمواعيد وخطوات المستشفى والتذكير بالمراجعة التالية." },
    ] },
    journey: { eyebrow: "خطوات البداية", title: "افهم الخيارات قبل السفر", body: "يمكنك البدء من بلدك. نؤكد نطاق التنسيق قبل الخدمات المدفوعة أو ترتيبات السفر.", items: [
      { title: "أخبرنا باحتياجك", text: "اذكر البلد واللغة المفضلة وما إذا كنت المريض أو أحد أفراد العائلة." },
      { title: "نعد الملف معا", text: "بعد تأكيد الموافقة وقناة الإرسال، اجمع التقارير المتاحة والأسئلة." },
      { title: "نتفق على الخطوة التالية", text: "أكد التواصل مع المختص ونطاق الخدمة وعرض السعر المكتوب قبل المتابعة." },
    ] },
    services: { eyebrow: "الخدمات والدعم", title: "دعم يناسب حالتك", body: "استفسار أولي أو مهمة تنسيق محددة أو دعم سنوي. نؤكد النطاق وعرض السعر كتابيا قبل بدء الخدمات المدفوعة.", quote: "اطلب مقترح الخدمة", note: "رسوم التنسيق منفصلة عن النفقات الطبية. تؤكد تكاليف المستشفى والأطباء والفحوص والعلاج والسفر والإقامة والترجمة الخارجية بشكل منفصل. يوضح المقترح المكتوب الخدمات والتوقيت وترتيبات الإلغاء.", plans: [
      { name: "استفسار أولي عن المسار", fit: "للعائلات التي تستكشف الرعاية في الصين.", items: ["مناقشة احتياجات التنسيق", "فهم خطوات التحضير", "قائمة السجلات المطلوبة"] },
      { name: "تنسيق محدد", fit: "لمهمة واضحة مع مختص أو مستشفى.", items: ["إعداد ملخص الحالة وتاريخ العلاج", "تنسيق المواعيد أو التواصل المتفق عليه", "توضيح الخطوات العملية التالية"] },
      { name: "دعم الحالة السنوي", fit: "للمرضى الذين يحتاجون تنسيقا مستمرا.", items: ["تحديث ملف الحالة", "تنسيق المراجعات والمتابعة المتفق عليها", "التواصل مع العائلة عبر المراحل"] },
    ], modules: ["تنسيق MDT لللمفوما", "دعم التعافي والمتابعة", "تنسيق المسار الجراحي"] },
    faq: { eyebrow: "قبل اتخاذ القرار", title: "أسئلة المرضى والعائلات", body: "إجابات عملية قبل استفسارك الأول.", items: [
      { title: "هل يمكن التواصل قبل السفر؟", text: "نعم، عبر البريد أو WhatsApp. نؤكد بعدها السجلات المطلوبة ومدى ملاءمة التواصل مع المختص أو المستشفى." },
      { title: "ماذا لو كانت بعض التقارير ناقصة؟", text: "يمكن البدء باستفسار أولي. نساعد في تحديد النواقص، ويقرر الفريق السريري المستقبِل كفاية المواد للتقييم." },
      { title: "هل يمكن للعائلة التواصل بالنيابة؟", text: "نعم. يرجى توضيح العلاقة بالمريض. نؤكد التفويض قبل مشاركة السجلات الطبية الحساسة." },
      { title: "هل تشمل الرسوم العلاج والمستشفى؟", text: "النفقات الطبية منفصلة عن رسوم التنسيق. يوضح المقترح المكتوب الخدمات وتكاليف الأطراف الأخرى وترتيبات الدفع قبل العمل المدفوع." },
      { title: "هل تضمنون العلاج أو دخول الدراسة؟", text: "لا. يحدد الأطباء والمؤسسات الأهلية والقبول والعلاج والمشاركة البحثية. نساعد في التحضير والتواصل." },
      { title: "هل يوجد دعم بعد العودة؟", text: "يمكن إدراج التواصل اللاحق وتحديث الوثائق والتذكير بالمراجعات ضمن النطاق المتفق عليه. تبقى النصيحة الطبية مسؤولية الأطباء المعالجين." },
    ] },
    contact: { eyebrow: "لخطوتك التالية", title: "لنبدأ بمحادثة", body: "أخبرنا بمكانك والدعم الذي تحتاجه عائلتك. نؤكد الوثائق وقناة التواصل قبل إرسال ملف طبي كامل.", labels: ["استفسارات المرضى الجدد", "تنسيق الخدمات", "دعم المرضى الحاليين"], note: "لا ترسل نسخة جواز السفر أو ملفا طبيا كاملا في الرسالة الأولى. للحالات العاجلة اتصل بخدمات الطوارئ المحلية." },
    enquiry: { eyebrow: "استفسار المريض", title: "ابدأ استفسار تنسيق الرعاية", body: "تكفي معلومات أساسية قليلة للبدء. لا يلزم اكتمال التقارير أو اختيار الخدمة الآن.", formTitle: "جهز رسالتك الأولى", name: "الاسم أو الأحرف الأولى (اختياري)", country: "البلد أو المنطقة", language: "اللغة المفضلة", role: "تتواصل بصفتك", roles: ["المريض", "فرد من العائلة أو ممثل مفوض"], interest: "الدعم الذي ترغب بمناقشته", undecided: "لم أحدد بعد", consent: "أنا المريض أو لدي إذن بمشاركة هذه المعلومات لاستفسار التنسيق.", privacy: "اقرأ إشعار الخصوصية", note: "تفتح الأزرار مسودة بريد قابلة للتعديل أو رسالة WhatsApp. لا يرفع الموقع أي معلومات ولا يرسلها؛ يجب إرسال الرسالة من التطبيق المختار. لا تدرج تقارير طبية أو أرقام جوازات أو تعليمات سريرية عاجلة.", recordsIntro: "بعد التواصل والموافقة، اجمع التقارير المتاحة وفق القائمة. سنؤكد طريقة إرسالها. نقص وثيقة لا يمنع الاستفسار الأولي.", identityNote: "تطلب وثائق الهوية فقط عند الحاجة لترتيب محدد مع مستشفى أو خدمة وعبر قناة مؤكدة. قد يحتاج ممثل العائلة إلى تفويض المريض." },
    carT: { eyebrow: "معلومات المرضى · سرطان المعدة", title: "CLDN18.2 CAR-T: التحضير لمناقشة المختص", body: "السجلات التي قد تساعد عند مناقشة satri-cel (CT041) مع فريق أورام مؤهل في الصين.", items: [
      { title: "ما هو CLDN18.2؟", text: "مؤشر حيوي يمكن فحصه في نسيج الورم. يراجع المختص الأنسجة وطريقة الفحص والنتائج مع التشخيص وتاريخ العلاج." },
      { title: "ما الموافقة المعلنة؟", text: "في 22 يونيو 2026 أعلنت CARsgen الموافقة في الصين على satricabtagene autoleucel (satri-cel/CT041)، ووصفته بأول منتج CAR-T معتمد عالميا للأورام الصلبة. الاستطباب المعلن هو السرطان الغدي المتقدم للمعدة أو الوصلة المعدية المريئية، الإيجابي لـ CLDN18.2 والسلبي لـ HER2، بعد فشل خطين علاجيين سابقين على الأقل." },
      { title: "ما الذي تحضره؟", text: "تقارير الأنسجة وIHC ونتائج CLDN18.2 وHER2 والتصوير الحديث وتاريخ العلاج المؤرخ وفحوص الدم والأدوية ووصف الحالة الحالية. يؤكد الفريق المستقبِل الفحوص الإضافية وتقييم السلامة." },
    ], note: "هذه معلومات عامة وليست تقييما لملاءمة العلاج. تنسق H&C Care السجلات والتواصل. يؤكد الأطباء النشرة المعتمدة الحالية والأهلية والمخاطر والتوفر والتكاليف لكل مريض؛ لا يضمن الوصول أو النتائج.", source: "اقرأ إعلان الموافقة من CARsgen", published: "تاريخ إعلان المصدر: 22 يونيو 2026" },
  },
  id: {
    menu: "Menu", languages: "Pilih bahasa", start: "Mulai pertanyaan", more: "Lihat layanan", email: "Email kami", whatsapp: "WhatsApp", roomAlt: "Kamar pasien di Guangzhou; pengaturan bergantung pada rumah sakit penerima",
    hero: { eyebrow: "H&C Care · Dukungan pasien internasional", title: "Koordinasi perawatan kanker di China", body: "Dukungan tenaga kesehatan berpengalaman klinis bagi pasien internasional, dengan fokus limfoma dan tumor padat di Guangzhou. Kami membantu menyiapkan rekam medis, menghubungi spesialis, dan merencanakan langkah berikutnya.", trust: ["Fokus onkologi", "Pengalaman klinis", "Guangzhou, China"] },
    team: { eyebrow: "Tim di balik perjalanan Anda", title: "Pemahaman klinis, koordinasi personal", body: "Koordinator menerapkan pengalaman kesehatan dalam persiapan rekam medis dan komunikasi rumah sakit. Profil berikut menjelaskan keahlian terkait jalur onkologi Guangzhou. Ketersediaan dikonfirmasi untuk setiap kasus." },
    focus: { eyebrow: "Fokus kami", title: "Mulai dari diagnosis dan pertanyaan Anda", body: "Jenis kanker, riwayat terapi, dan kondisi saat ini menentukan dukungan koordinasi yang dibahas.", items: [
      { title: "Limfoma dan diskusi multidisiplin", text: "Persiapan patologi, pencitraan, dan riwayat terapi untuk spesialis limfoma Guangdong, opini kedua, dan diskusi multidisiplin." },
      { title: "Tumor padat dan jalur terapi", text: "Susun hasil biomarker dan terapi terdahulu untuk pembahasan imunoterapi, terapi target, penelitian, atau evaluasi ulang operasi." },
    ] },
    deliverables: { eyebrow: "Hasil layanan", title: "Langkah berikutnya lebih jelas bagi keluarga", body: "Lingkup tertulis menentukan pekerjaan yang disepakati, yang dapat meliputi:", items: [
      { title: "Ringkasan kasus terstruktur", text: "Linimasa terapi bertanggal dan paket rekam medis untuk komunikasi spesialis." },
      { title: "Daftar dokumen yang kurang", text: "Laporan dan gambar yang perlu diminta dari tim perawatan saat ini." },
      { title: "Pertanyaan untuk spesialis", text: "Prioritas keluarga dan pertanyaan yang disiapkan untuk tim medis penerima." },
      { title: "Rencana kunjungan dan tindak lanjut", text: "Persiapan janji, proses rumah sakit, dan pengingat komunikasi atau evaluasi berikutnya." },
    ] },
    journey: { eyebrow: "Langkah awal", title: "Pahami pilihan sebelum bepergian", body: "Anda dapat mulai dari rumah. Lingkup koordinasi dikonfirmasi sebelum layanan berbayar atau pengaturan perjalanan.", items: [
      { title: "Ceritakan kebutuhan Anda", text: "Sebutkan negara, bahasa pilihan, dan apakah Anda pasien atau anggota keluarga." },
      { title: "Siapkan kasus bersama", text: "Setelah persetujuan dan kanal pengiriman dikonfirmasi, kumpulkan laporan dan pertanyaan yang tersedia." },
      { title: "Sepakati langkah selanjutnya", text: "Konfirmasi komunikasi spesialis, lingkup layanan, dan penawaran tertulis sebelum melanjutkan." },
    ] },
    services: { eyebrow: "Layanan dan dukungan", title: "Dukungan sesuai situasi Anda", body: "Mulai dari pertanyaan awal, tugas koordinasi tertentu, atau dukungan kasus tahunan. Lingkup dan penawaran dikonfirmasi sebelum layanan berbayar.", quote: "Minta proposal layanan", note: "Biaya koordinasi terpisah dari biaya medis. Rumah sakit, dokter, pemeriksaan, terapi, perjalanan, akomodasi, dan penerjemah pihak ketiga dikonfirmasi terpisah. Proposal tertulis menjelaskan cakupan, waktu, dan pembatalan.", plans: [
      { name: "Pertanyaan jalur awal", fit: "Untuk keluarga yang menjajaki perawatan di China.", items: ["Bahas kebutuhan koordinasi", "Pahami proses persiapan", "Dapatkan daftar rekam medis"] },
      { name: "Koordinasi terfokus", fit: "Untuk tugas spesialis atau rumah sakit yang jelas.", items: ["Ringkasan dan linimasa kasus", "Janji atau komunikasi sesuai kesepakatan", "Langkah praktis berikutnya"] },
      { name: "Dukungan kasus tahunan", fit: "Untuk pasien yang memerlukan koordinasi berkelanjutan.", items: ["Perbarui berkas kasus", "Koordinasi evaluasi dan tindak lanjut", "Komunikasi keluarga lintas tahap"] },
    ], modules: ["Koordinasi MDT limfoma", "Dukungan pemulihan dan tindak lanjut", "Koordinasi jalur operasi"] },
    faq: { eyebrow: "Sebelum memutuskan", title: "Pertanyaan pasien dan keluarga", body: "Jawaban praktis sebelum menghubungi kami.", items: [
      { title: "Bisa menghubungi sebelum bepergian?", text: "Ya, melalui email atau WhatsApp. Setelah kontak awal kami mengonfirmasi dokumen dan apakah komunikasi spesialis atau rumah sakit sesuai." },
      { title: "Bagaimana jika laporan belum lengkap?", text: "Anda tetap dapat bertanya. Kami mengidentifikasi dokumen yang kurang; tim klinis penerima menentukan kecukupan bahan untuk evaluasi." },
      { title: "Bolehkah keluarga mewakili pasien?", text: "Ya. Jelaskan hubungan dengan pasien. Izin pasien dikonfirmasi sebelum rekam medis sensitif dibagikan." },
      { title: "Apakah biaya medis sudah termasuk?", text: "Biaya medis terpisah dari koordinasi. Proposal tertulis menjelaskan layanan, biaya pihak ketiga, dan pembayaran sebelum pekerjaan berbayar." },
      { title: "Apakah terapi atau masuk penelitian dijamin?", text: "Tidak. Dokter dan institusi menentukan kelayakan, penerimaan, terapi, dan keikutsertaan penelitian. Kami membantu persiapan dan komunikasi." },
      { title: "Ada dukungan setelah pulang?", text: "Komunikasi lanjutan, pembaruan dokumen, dan pengingat dapat masuk dalam lingkup yang disepakati. Saran medis tetap tanggung jawab dokter yang merawat." },
    ] },
    contact: { eyebrow: "Langkah berikutnya", title: "Mari mulai dengan percakapan", body: "Beri tahu lokasi Anda dan dukungan yang dibutuhkan keluarga. Kami mengonfirmasi dokumen dan kanal komunikasi sebelum Anda mengirim berkas medis lengkap.", labels: ["Pertanyaan pasien baru", "Koordinasi layanan", "Dukungan pasien aktif"], note: "Jangan lampirkan paspor atau berkas medis lengkap pada pesan pertama. Untuk keadaan mendesak hubungi layanan darurat setempat." },
    enquiry: { eyebrow: "Pertanyaan pasien", title: "Mulai pertanyaan koordinasi perawatan", body: "Beberapa informasi dasar cukup untuk memulai. Anda tidak perlu menunggu semua laporan atau memilih layanan sekarang.", formTitle: "Siapkan pesan pertama", name: "Nama atau inisial (opsional)", country: "Negara atau wilayah", language: "Bahasa pilihan", role: "Anda menghubungi sebagai", roles: ["Pasien", "Keluarga atau perwakilan berwenang"], interest: "Dukungan yang ingin dibahas", undecided: "Belum yakin", consent: "Saya pasien atau mendapat izin untuk membagikan informasi ini bagi pertanyaan koordinasi.", privacy: "Baca pemberitahuan privasi", note: "Tombol membuka draf email atau pesan WhatsApp yang dapat diedit. Situs tidak mengunggah atau mengirim data; Anda perlu mengirimnya melalui aplikasi pilihan. Jangan masukkan laporan medis, nomor paspor, atau instruksi klinis mendesak.", recordsIntro: "Setelah kontak awal dan persetujuan, kumpulkan laporan tersedia dengan daftar ini. Kami akan mengonfirmasi pengiriman. Dokumen yang kurang tidak menghalangi pertanyaan awal.", identityNote: "Identitas diminta hanya bila dibutuhkan untuk pengaturan rumah sakit atau layanan tertentu, melalui kanal terkonfirmasi. Perwakilan keluarga mungkin memerlukan izin pasien." },
    carT: { eyebrow: "Informasi pasien · Kanker lambung", title: "CLDN18.2 CAR-T: persiapan diskusi spesialis", body: "Dokumen yang dapat membantu saat membahas satri-cel (CT041) dengan tim onkologi berkualifikasi di China.", items: [
      { title: "Apa itu CLDN18.2?", text: "Biomarker yang dapat diperiksa pada jaringan tumor. Spesialis menilai patologi, metode, dan hasil tes bersama diagnosis dan riwayat terapi." },
      { title: "Persetujuan apa yang diumumkan?", text: "Pada 22 Juni 2026 CARsgen mengumumkan persetujuan China untuk satricabtagene autoleucel (satri-cel/CT041), disebut sebagai produk CAR-T pertama di dunia yang disetujui untuk tumor padat. Indikasi yang diumumkan ialah adenokarsinoma lambung atau sambungan gastroesofagus lanjut, CLDN18.2-positif, HER2-negatif, setelah kegagalan sedikitnya dua lini terapi sebelumnya." },
      { title: "Apa yang disiapkan?", text: "Patologi dan IHC, hasil CLDN18.2 dan HER2, pencitraan terbaru, riwayat terapi bertanggal, tes darah, obat, dan ringkasan kondisi terkini. Tim penerima menentukan pemeriksaan tambahan dan penilaian keselamatan." },
    ], note: "Informasi umum ini bukan penilaian kelayakan terapi. H&C Care mengoordinasikan dokumen dan komunikasi. Dokter perlu mengonfirmasi label resmi terkini, kelayakan, risiko, ketersediaan, dan biaya bagi setiap pasien. Akses dan hasil tidak dijamin.", source: "Baca pengumuman persetujuan CARsgen", published: "Tanggal pengumuman sumber: 22 Juni 2026" },
  },
  ms: {
    menu: "Menu", languages: "Pilih bahasa", start: "Mulakan pertanyaan", more: "Lihat perkhidmatan", email: "E-mel kami", whatsapp: "WhatsApp", roomAlt: "Bilik pesakit di Guangzhou; pengaturan bergantung pada hospital penerima",
    hero: { eyebrow: "H&C Care · Sokongan pesakit antarabangsa", title: "Koordinasi penjagaan kanser di China", body: "Sokongan profesional kesihatan berpengalaman klinikal untuk pesakit antarabangsa, dengan fokus limfoma dan tumor pepejal di Guangzhou. Kami membantu menyediakan rekod, berhubung dengan pakar, dan merancang langkah seterusnya.", trust: ["Fokus onkologi", "Pengalaman klinikal", "Guangzhou, China"] },
    team: { eyebrow: "Pasukan di sebalik perjalanan anda", title: "Pemahaman klinikal, koordinasi peribadi", body: "Penyelaras menggunakan pengalaman kesihatan dalam penyediaan rekod dan komunikasi hospital. Profil berikut menerangkan kepakaran berkaitan laluan onkologi Guangzhou. Ketersediaan disahkan untuk setiap kes." },
    focus: { eyebrow: "Fokus kami", title: "Bermula dengan diagnosis dan soalan anda", body: "Jenis kanser, sejarah rawatan dan keadaan semasa menentukan sokongan koordinasi yang dibincangkan.", items: [
      { title: "Limfoma dan perbincangan multidisiplin", text: "Sediakan patologi, pengimejan dan sejarah rawatan untuk pakar limfoma Guangdong, pendapat kedua dan perbincangan multidisiplin." },
      { title: "Tumor pepejal dan laluan rawatan", text: "Susun keputusan biomarker dan rawatan terdahulu untuk perbincangan imunoterapi, terapi sasaran, penyelidikan atau penilaian semula pembedahan." },
    ] },
    deliverables: { eyebrow: "Hasil perkhidmatan", title: "Langkah seterusnya lebih jelas untuk keluarga", body: "Skop bertulis menentukan kerja yang dipersetujui, yang boleh merangkumi:", items: [
      { title: "Ringkasan kes tersusun", text: "Garis masa rawatan bertarikh dan pakej rekod untuk komunikasi pakar." },
      { title: "Senarai dokumen belum lengkap", text: "Laporan dan imej yang perlu diminta daripada pasukan rawatan semasa." },
      { title: "Soalan untuk pakar", text: "Keutamaan keluarga dan soalan yang disediakan untuk pasukan perubatan penerima." },
      { title: "Pelan lawatan dan susulan", text: "Persediaan janji temu, langkah hospital dan peringatan komunikasi atau semakan seterusnya." },
    ] },
    journey: { eyebrow: "Langkah pertama", title: "Fahami pilihan sebelum perjalanan", body: "Anda boleh bermula dari rumah. Skop koordinasi disahkan sebelum kerja berbayar atau pengaturan perjalanan.", items: [
      { title: "Nyatakan keperluan anda", text: "Beritahu negara, bahasa pilihan dan sama ada anda pesakit atau ahli keluarga." },
      { title: "Sediakan kes bersama", text: "Selepas persetujuan dan saluran penghantaran disahkan, kumpulkan laporan dan soalan yang tersedia." },
      { title: "Persetujui langkah seterusnya", text: "Sahkan komunikasi pakar, skop dan sebut harga bertulis sebelum meneruskan." },
    ] },
    services: { eyebrow: "Perkhidmatan dan sokongan", title: "Sokongan mengikut keadaan anda", body: "Bermula dengan pertanyaan awal, tugas koordinasi tertentu atau sokongan kes tahunan. Skop dan sebut harga disahkan sebelum perkhidmatan berbayar.", quote: "Minta cadangan perkhidmatan", note: "Yuran koordinasi berasingan daripada kos perubatan. Hospital, doktor, ujian, rawatan, perjalanan, penginapan dan jurubahasa pihak ketiga disahkan berasingan. Cadangan bertulis menerangkan skop, masa dan pembatalan.", plans: [
      { name: "Pertanyaan laluan awal", fit: "Untuk keluarga yang meneroka penjagaan di China.", items: ["Bincang keperluan koordinasi", "Fahami proses persediaan", "Terima senarai rekod perubatan"] },
      { name: "Koordinasi khusus", fit: "Untuk tugas pakar atau hospital yang jelas.", items: ["Ringkasan dan garis masa kes", "Janji temu atau komunikasi dipersetujui", "Langkah praktikal seterusnya"] },
      { name: "Sokongan kes tahunan", fit: "Untuk pesakit yang memerlukan koordinasi berterusan.", items: ["Kemas kini fail kes", "Koordinasi semakan dan susulan", "Komunikasi keluarga merentas tahap"] },
    ], modules: ["Koordinasi MDT limfoma", "Sokongan pemulihan dan susulan", "Koordinasi laluan pembedahan"] },
    faq: { eyebrow: "Sebelum membuat keputusan", title: "Soalan pesakit dan keluarga", body: "Jawapan praktikal sebelum menghubungi kami.", items: [
      { title: "Boleh menghubungi sebelum perjalanan?", text: "Ya, melalui e-mel atau WhatsApp. Selepas hubungan awal, kami sahkan dokumen dan kesesuaian komunikasi pakar atau hospital." },
      { title: "Bagaimana jika laporan belum lengkap?", text: "Anda masih boleh membuat pertanyaan. Kami mengenal pasti kekurangan; pasukan klinikal penerima menentukan kecukupan bahan untuk penilaian." },
      { title: "Bolehkah keluarga mewakili pesakit?", text: "Ya. Nyatakan hubungan dengan pesakit. Kebenaran disahkan sebelum rekod sensitif dikongsi." },
      { title: "Adakah kos perubatan termasuk?", text: "Kos perubatan berasingan daripada koordinasi. Cadangan bertulis menerangkan perkhidmatan, kos pihak ketiga dan pembayaran sebelum kerja berbayar." },
      { title: "Adakah rawatan atau kemasukan kajian dijamin?", text: "Tidak. Doktor dan institusi menentukan kelayakan, penerimaan, rawatan dan penyertaan kajian. Kami membantu persediaan dan komunikasi." },
      { title: "Ada sokongan selepas pulang?", text: "Komunikasi susulan, kemas kini dokumen dan peringatan boleh termasuk dalam skop dipersetujui. Nasihat perubatan kekal tanggungjawab doktor yang merawat." },
    ] },
    contact: { eyebrow: "Langkah seterusnya", title: "Mari bermula dengan perbualan", body: "Beritahu lokasi dan sokongan yang keluarga perlukan. Kami sahkan dokumen dan saluran komunikasi sebelum fail perubatan penuh dihantar.", labels: ["Pertanyaan pesakit baharu", "Koordinasi perkhidmatan", "Sokongan pesakit sedia ada"], note: "Jangan lampirkan pasport atau fail perubatan penuh dalam mesej pertama. Untuk kecemasan hubungi perkhidmatan kecemasan tempatan." },
    enquiry: { eyebrow: "Pertanyaan pesakit", title: "Mulakan pertanyaan koordinasi penjagaan", body: "Beberapa maklumat asas mencukupi untuk bermula. Tidak perlu menunggu semua laporan atau memilih perkhidmatan sekarang.", formTitle: "Sediakan mesej pertama", name: "Nama atau singkatan (pilihan)", country: "Negara atau wilayah", language: "Bahasa pilihan", role: "Anda menghubungi sebagai", roles: ["Pesakit", "Ahli keluarga atau wakil diberi kuasa"], interest: "Sokongan untuk dibincangkan", undecided: "Belum pasti", consent: "Saya pesakit atau mempunyai kebenaran untuk berkongsi maklumat ini bagi pertanyaan koordinasi.", privacy: "Baca notis privasi", note: "Butang membuka draf e-mel atau mesej WhatsApp yang boleh disunting. Laman tidak memuat naik atau menghantar data; anda perlu menghantarnya melalui aplikasi pilihan. Jangan masukkan laporan perubatan, nombor pasport atau arahan klinikal segera.", recordsIntro: "Selepas hubungan awal dan persetujuan, kumpulkan laporan tersedia menggunakan senarai ini. Kami sahkan saluran penghantaran. Dokumen yang kurang tidak menghalang pertanyaan awal.", identityNote: "Dokumen identiti diminta hanya apabila diperlukan bagi hospital atau perkhidmatan tertentu, melalui saluran disahkan. Wakil keluarga mungkin memerlukan kebenaran pesakit." },
    carT: { eyebrow: "Maklumat pesakit · Kanser gastrik", title: "CLDN18.2 CAR-T: persediaan perbincangan pakar", body: "Rekod yang boleh membantu perbincangan satri-cel (CT041) dengan pasukan onkologi berkelayakan di China.", items: [
      { title: "Apakah CLDN18.2?", text: "Biomarker yang boleh diuji pada tisu tumor. Pakar menilai patologi, kaedah dan keputusan ujian bersama diagnosis serta sejarah rawatan." },
      { title: "Apakah kelulusan yang diumumkan?", text: "Pada 22 Jun 2026 CARsgen mengumumkan kelulusan China bagi satricabtagene autoleucel (satri-cel/CT041), digambarkan sebagai produk CAR-T pertama dunia diluluskan untuk tumor pepejal. Indikasi diumumkan ialah adenokarsinoma gastrik atau persimpangan gastroesofagus lanjut, CLDN18.2-positif, HER2-negatif, selepas kegagalan sekurang-kurangnya dua barisan rawatan terdahulu." },
      { title: "Apa yang perlu disediakan?", text: "Patologi dan IHC, keputusan CLDN18.2 dan HER2, pengimejan terkini, sejarah rawatan bertarikh, ujian darah, ubat dan ringkasan keadaan semasa. Pasukan penerima menentukan ujian tambahan dan penilaian keselamatan." },
    ], note: "Ini maklumat umum, bukan penilaian kesesuaian rawatan. H&C Care menyelaras rekod dan komunikasi. Doktor perlu mengesahkan label diluluskan semasa, kelayakan, risiko, ketersediaan dan kos setiap pesakit. Akses dan hasil tidak dijamin.", source: "Baca pengumuman kelulusan CARsgen", published: "Tarikh pengumuman sumber: 22 Jun 2026" },
  },
};

export const carTSource = "https://en.prnasia.com/releases/global/carsgen-announces-approval-of-satri-cel-the-world-s-first-car-t-cell-therapy-product-for-solid-tumors-538064.shtml";
