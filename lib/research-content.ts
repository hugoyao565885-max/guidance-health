import type { Locale } from "./site";

export const researchUpdated = "2026-10-26";
export const lungStudy = {
  protocol: "IBR854-204",
  announcementDate: "2026-09-10",
  sourceUrl: "https://www.clifford-hospital.org/research/gcp_15277.html",
};

export type ResearchContent = {
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  updated: string;
  statusTitle: string;
  status: string;
  studyTitle: string;
  facts: Array<{ title: string; text: string }>;
  overview: string;
  armsTitle: string;
  arms: Array<{ title: string; text: string }>;
  allocation: string;
  eligibilityTitle: string;
  eligibility: string[];
  eligibilityNote: string;
  recordsTitle: string;
  records: string[];
  recordsNote: string;
  processTitle: string;
  steps: Array<{ title: string; text: string }>;
  questionsTitle: string;
  questions: Array<{ title: string; text: string }>;
  boundary: string;
  source: string;
  enquire: string;
  submit: string;
  checklist: string;
};

export const researchContent: Record<Locale, ResearchContent> = {
  en: {
    label: "Clinical research", eyebrow: "Research information",
    title: "Lung cancer clinical research",
    body: "Information about the IBR854-204 phase II study for advanced non-squamous non-small cell lung cancer, and the records needed to discuss a possible assessment with the research team.",
    updated: "Information reviewed", statusTitle: "Study announced; availability to be confirmed",
    status: "A public announcement reported the study launch in August 2026. This does not confirm current recruitment, places at a particular centre, or acceptance of international patients. Confirm these with the research team before making travel plans.",
    studyTitle: "IBR854-204 · Advanced non-squamous lung cancer",
    facts: [{ title: "Research phase", text: "Phase II" }, { title: "Study design", text: "Multicentre, randomized, open-label" }, { title: "Treatment setting", text: "First-line treatment of advanced disease" }],
    overview: "The study evaluates an investigational 5T4-targeted cell therapy, IBR854, combined with chemotherapy. It compares effectiveness and safety with chemotherapy alone. This is clinical research, not a treatment package offered by H&C Care; benefit for an individual patient is uncertain.",
    armsTitle: "What is being compared?",
    arms: [{ title: "Investigational group", text: "IBR854 with pemetrexed and cisplatin." }, { title: "Comparison group", text: "Pemetrexed and cisplatin without IBR854." }],
    allocation: "Allocation is randomized. Joining the study does not guarantee receiving IBR854, and the coordination service cannot choose a treatment group.",
    eligibilityTitle: "Initial points for discussion",
    eligibility: ["Adults aged 18 or older with confirmed locally advanced or metastatic non-squamous non-small cell lung cancer.", "Reports showing no relevant EGFR, ALK or ROS1 driver alterations, and PD-L1 TPS below 1%.", "No previous systemic treatment for advanced lung cancer; earlier treatment in other settings needs individual review.", "The research team assesses physical condition, measurable disease, organ function and all other protocol requirements."],
    eligibilityNote: "This is a summary, not the full eligibility criteria or a self-assessment tool. The current approved protocol and the investigator's assessment determine eligibility. Do not stop or postpone treatment to try to qualify.",
    recordsTitle: "Records to prepare, if available",
    records: ["Biopsy, pathology and immunohistochemistry reports confirming the lung cancer subtype.", "PD-L1 report including TPS, and EGFR, ALK, ROS1 or broader genetic/NGS results.", "Recent CT or PET/CT reports; other imaging and brain imaging reports if already available.", "Complete treatment history with dates, current medicines, allergies and important medical conditions.", "Recent blood counts, liver and kidney tests, plus current symptoms and ability to carry out daily activities."],
    recordsNote: "Use the private member portal for medical records. Missing reports can be identified during preparation; do not arrange extra tests or send physical tissue samples without instructions from the receiving medical team.",
    processTitle: "From an enquiry to a research assessment",
    steps: [{ title: "Prepare your case", text: "Create a free member account and upload available records. Mention IBR854-204 in your case summary." }, { title: "Confirm the pathway", text: "We help organize and translate records and ask the research team about current availability, international-patient requirements and assessment arrangements." }, { title: "Independent clinical assessment", text: "The research team explains the protocol, alternatives, risks, costs and follow-up requirements. Screening and informed consent are separate from website registration." }],
    questionsTitle: "Before considering participation",
    questions: [{ title: "Does an enquiry reserve a place?", text: "No. Submitting records, registering or purchasing coordination does not secure enrollment or a particular treatment. Only the research team can confirm suitability and availability." }, { title: "What are the risks and alternatives?", text: "Research treatment may not help and may cause adverse effects, including serious ones. Ask the investigator about known and unknown risks and standard-care alternatives. Continue care with your treating doctor while exploring options." }, { title: "What costs and travel arrangements should be checked?", text: "Ask for written clarification of study-covered items, costs outside the study, coordination fees, visit schedules and follow-up after returning home. We do not promise free treatment or reimbursement. Confirm eligibility and logistics before booking travel." }],
    boundary: "H&C Care provides information, record preparation and communication support. We are not the study sponsor or a treatment provider, do not make enrollment decisions, and do not guarantee access or outcomes. No affiliation or exclusive research access is implied.",
    source: "Public study announcement", enquire: "Ask about this study", submit: "Member login / submit records", checklist: "Full medical-record checklist",
  },
  "zh-hant": {
    label: "臨床研究", eyebrow: "研究資訊",
    title: "肺癌臨床研究項目",
    body: "了解面向晚期非鱗狀非小細胞肺癌的 IBR854-204 II 期研究，以及與研究團隊討論進一步評估時可準備的資料。",
    updated: "資訊核對日期", statusTitle: "已公布啟動，招募情況待確認",
    status: "公開公告記載本研究於 2026 年 8 月啟動。這不代表目前仍有招募名額、指定中心可接診，或境外患者一定能參加。請在安排行程前向研究團隊確認。",
    studyTitle: "IBR854-204 · 晚期非鱗狀肺癌",
    facts: [{ title: "研究分期", text: "II 期" }, { title: "研究設計", text: "多中心、隨機、開放性研究" }, { title: "治療階段", text: "晚期疾病的一線治療" }],
    overview: "本研究評估靶向 5T4 的在研細胞療法 IBR854 聯合化療，與單純化療相比的有效性和安全性。這是臨床研究，不是 H&C Care 提供的治療套餐；個別患者能否獲益尚不確定。",
    armsTitle: "研究比較什麼？",
    arms: [{ title: "試驗組", text: "IBR854 聯合培美曲塞及順鉑。" }, { title: "對照組", text: "培美曲塞及順鉑，不包含 IBR854。" }],
    allocation: "研究採用隨機分組。參加研究不代表一定接受 IBR854，協調服務亦不能選擇治療組別。",
    eligibilityTitle: "可先討論的基本條件",
    eligibility: ["年滿 18 歲，已確診局部晚期或轉移性非鱗狀非小細胞肺癌。", "相關報告未檢出 EGFR、ALK、ROS1 驅動基因陽性變異，且 PD-L1 TPS 低於 1%。", "既往未接受晚期肺癌的全身性抗腫瘤治療；其他階段的既往治療須個別審核。", "研究團隊須評估體能狀況、可測量病灶、器官功能及完整方案中的其他條件。"],
    eligibilityNote: "以上只是摘要，不是完整入排標準或自我判定工具。是否適合須以現行獲批方案及研究醫生評估為準，請勿為符合研究條件自行停藥或延誤治療。",
    recordsTitle: "如已具備，可準備以下資料",
    records: ["確認肺癌病理類型的活檢、病理及免疫組化報告。", "註明 TPS 的 PD-L1 報告，以及 EGFR、ALK、ROS1 或更完整的基因／NGS 檢測結果。", "近期 CT 或 PET/CT 報告；已有的其他影像及腦部影像報告。", "包含日期的完整治療經過、目前用藥、過敏史及重要既往病史。", "近期血常規、肝腎功能，以及目前症狀和日常活動能力的簡述。"],
    recordsNote: "病歷請透過私密會員平台提交。可先整理已有資料並標明缺項；未經接診醫療團隊指示，毋須自行加做檢查或寄送實體組織標本。",
    processTitle: "從諮詢到研究評估",
    steps: [{ title: "準備個案資料", text: "免費註冊會員並上傳已有病歷，在個案摘要中註明 IBR854-204。" }, { title: "確認評估路徑", text: "我們協助整理及翻譯資料，與研究團隊確認現時招募情況、境外患者要求和評估安排。" }, { title: "獨立醫療評估", text: "由研究團隊解釋方案、替代選擇、風險、費用及隨訪要求。研究篩選及知情同意與網站會員註冊是不同程序。" }],
    questionsTitle: "參加前需要了解",
    questions: [{ title: "提交資料是否等於預留名額？", text: "不是。提交病歷、註冊會員或購買協調服務，均不保證入組或指定治療。適用資格及名額只能由研究團隊確認。" }, { title: "風險和替代選擇是什麼？", text: "研究治療可能沒有幫助，也可能產生包括嚴重反應在內的不良影響。請與研究醫生討論已知及未知風險，以及標準治療選擇；了解研究期間仍應持續與原主診醫生保持診療聯繫。" }, { title: "費用和行程要確認什麼？", text: "請書面確認研究承擔的項目、研究以外費用、協調服務費、訪視安排及回國後隨訪要求。我們不承諾免費治療或報銷；確認資格及安排後再預訂行程。" }],
    boundary: "H&C Care 提供資訊、病歷準備和溝通協調，不是本研究的申辦方或治療提供方，不決定入組，亦不保證治療機會或效果。介紹本研究不代表附屬關係或獨家研究資源。",
    source: "公開研究公告", enquire: "諮詢此研究", submit: "會員登入／提交病歷", checklist: "完整病歷準備清單",
  },
  ru: {
    label: "Клинические исследования", eyebrow: "Информация об исследованиях",
    title: "Клиническое исследование при раке лёгкого",
    body: "Информация об исследовании II фазы IBR854-204 при распространённом неплоскоклеточном немелкоклеточном раке лёгкого и подготовке документов для обсуждения оценки с исследовательской командой.",
    updated: "Дата проверки информации", statusTitle: "О запуске объявлено; доступность требует подтверждения",
    status: "В публичном сообщении указан запуск исследования в августе 2026 года. Это не подтверждает текущий набор, места в конкретном центре или приём иностранных пациентов. Уточните эти вопросы у исследовательской команды до планирования поездки.",
    studyTitle: "IBR854-204 · Распространённый неплоскоклеточный рак лёгкого",
    facts: [{ title: "Фаза", text: "II фаза" }, { title: "Дизайн", text: "Многоцентровое, рандомизированное, открытое" }, { title: "Этап лечения", text: "Первая линия при распространённом заболевании" }],
    overview: "Исследование оценивает эффективность и безопасность экспериментальной клеточной терапии IBR854, направленной на 5T4, в сочетании с химиотерапией по сравнению с одной химиотерапией. Это исследование, а не лечебный пакет H&C Care; польза для отдельного пациента неизвестна.",
    armsTitle: "Какие группы сравниваются?",
    arms: [{ title: "Исследуемая группа", text: "IBR854 с пеметрекседом и цисплатином." }, { title: "Группа сравнения", text: "Пеметрексед и цисплатин без IBR854." }],
    allocation: "Распределение случайное. Участие не гарантирует получение IBR854; служба координации не может выбрать группу лечения.",
    eligibilityTitle: "Что можно обсудить предварительно",
    eligibility: ["Возраст от 18 лет и подтверждённый местно-распространённый или метастатический неплоскоклеточный немелкоклеточный рак лёгкого.", "Отсутствие соответствующих драйверных изменений EGFR, ALK и ROS1; показатель PD-L1 TPS менее 1%.", "Отсутствие предшествующей системной терапии распространённого рака лёгкого; лечение на других стадиях оценивается индивидуально.", "Исследователи оценивают общее состояние, измеряемые очаги, функции органов и все остальные требования протокола."],
    eligibilityNote: "Это краткий обзор, а не полные критерии или инструмент самостоятельного отбора. Решение принимает исследователь по действующему утверждённому протоколу. Не отменяйте и не откладывайте лечение ради участия.",
    recordsTitle: "Подготовьте имеющиеся документы",
    records: ["Результаты биопсии, патологии и иммуногистохимии с подтипом опухоли.", "Отчёт PD-L1 с TPS, результаты EGFR, ALK, ROS1 или расширенного генетического/NGS-анализа.", "Недавние заключения КТ или ПЭТ/КТ, другие имеющиеся снимки и заключения обследования головного мозга.", "История лечения с датами, текущие лекарства, аллергии и существенные сопутствующие заболевания.", "Недавние анализы крови, показатели печени и почек, описание симптомов и повседневной активности."],
    recordsNote: "Передавайте медицинские документы через закрытый кабинет участника. Отметьте недостающие отчёты; не проходите дополнительные тесты и не отправляйте образцы ткани без указаний принимающей медицинской команды.",
    processTitle: "От обращения к оценке исследователями",
    steps: [{ title: "Подготовка случая", text: "Создайте бесплатный аккаунт, загрузите имеющиеся документы и укажите IBR854-204 в описании случая." }, { title: "Уточнение маршрута", text: "Мы помогаем систематизировать и переводить документы, уточнять наличие мест, требования к иностранным пациентам и порядок оценки." }, { title: "Независимая клиническая оценка", text: "Исследователи объясняют протокол, альтернативы, риски, расходы и наблюдение. Скрининг и информированное согласие не заменяются регистрацией на сайте." }],
    questionsTitle: "Перед решением об участии",
    questions: [{ title: "Резервирует ли обращение место?", text: "Нет. Передача документов, регистрация и оплата координации не гарантируют включение или определённое лечение. Пригодность и наличие мест подтверждают только исследователи." }, { title: "Какие риски и альтернативы нужно обсудить?", text: "Исследуемое лечение может не помочь и вызвать нежелательные реакции, в том числе серьёзные. Обсудите известные и неизвестные риски и стандартное лечение с исследователем. Продолжайте наблюдение у своего врача." }, { title: "Какие расходы и поездки нужно уточнить?", text: "Запросите письменные сведения о покрываемых исследованием услугах, остальных расходах, оплате координации, графике визитов и наблюдении после возвращения. Мы не обещаем бесплатное лечение или возмещение. Бронируйте поездку после подтверждения условий." }],
    boundary: "H&C Care предоставляет информацию, подготовку документов и помощь в коммуникации. Мы не являемся спонсором исследования или поставщиком лечения, не принимаем решений о включении и не гарантируем доступ или результат. Описание не означает аффилированность или эксклюзивный доступ.",
    source: "Публичное сообщение об исследовании", enquire: "Спросить об исследовании", submit: "Войти / передать документы", checklist: "Полный список медицинских документов",
  },
  ar: {
    label: "الأبحاث السريرية", eyebrow: "معلومات بحثية",
    title: "دراسة سريرية لسرطان الرئة",
    body: "معلومات عن دراسة IBR854-204 من المرحلة الثانية لسرطان الرئة غير صغير الخلايا وغير الحرشفي المتقدم، والوثائق اللازمة لمناقشة إمكانية التقييم مع فريق البحث.",
    updated: "تاريخ مراجعة المعلومات", statusTitle: "أُعلن إطلاق الدراسة؛ التوفر يحتاج إلى تأكيد",
    status: "ذكر إعلان عام بدء الدراسة في أغسطس 2026. ولا يؤكد ذلك استمرار استقبال المشاركين أو توفر أماكن في مركز معين أو قبول المرضى الدوليين. يجب تأكيد هذه النقاط مع فريق البحث قبل ترتيب السفر.",
    studyTitle: "IBR854-204 · سرطان الرئة غير الحرشفي المتقدم",
    facts: [{ title: "مرحلة البحث", text: "المرحلة الثانية" }, { title: "تصميم الدراسة", text: "متعددة المراكز، عشوائية، مفتوحة التسمية" }, { title: "مرحلة العلاج", text: "الخط الأول للمرض المتقدم" }],
    overview: "تقيّم الدراسة فعالية وسلامة العلاج الخلوي البحثي IBR854 الذي يستهدف 5T4 مع العلاج الكيميائي، مقارنة بالعلاج الكيميائي وحده. هذه دراسة سريرية وليست باقة علاج تقدمها H&C Care؛ والمنفعة للمريض الفرد غير مؤكدة.",
    armsTitle: "ما المجموعات التي تتم مقارنتها؟",
    arms: [{ title: "المجموعة البحثية", text: "IBR854 مع بيميتريكسيد وسيسبلاتين." }, { title: "مجموعة المقارنة", text: "بيميتريكسيد وسيسبلاتين دون IBR854." }],
    allocation: "التوزيع عشوائي. المشاركة لا تضمن تلقي IBR854، ولا تستطيع خدمة التنسيق اختيار مجموعة العلاج.",
    eligibilityTitle: "نقاط أولية للمناقشة",
    eligibility: ["العمر 18 سنة أو أكثر، مع تشخيص مؤكد لسرطان الرئة غير صغير الخلايا وغير الحرشفي المتقدم موضعياً أو المنتشر.", "تقارير لا تُظهر تغيرات دافعة ذات صلة في EGFR أو ALK أو ROS1، مع PD-L1 TPS أقل من 1%.", "عدم تلقي علاج جهازي سابق لسرطان الرئة المتقدم؛ ويُراجع العلاج في مراحل أخرى لكل حالة على حدة.", "يقيّم فريق البحث الحالة الجسدية والآفات القابلة للقياس ووظائف الأعضاء وجميع متطلبات البروتوكول الأخرى."],
    eligibilityNote: "هذا ملخص وليس معايير الأهلية الكاملة أو أداة للتقييم الذاتي. يحدد البروتوكول المعتمد الحالي وتقييم الباحث الأهلية. لا توقف العلاج ولا تؤجله لمحاولة التأهل.",
    recordsTitle: "وثائق للتحضير إذا كانت متاحة",
    records: ["تقارير الخزعة والباثولوجيا والكيمياء النسيجية المناعية التي تحدد نوع سرطان الرئة.", "تقرير PD-L1 متضمناً TPS، ونتائج EGFR وALK وROS1 أو الفحص الجيني/NGS الأوسع.", "تقارير حديثة للتصوير المقطعي أو PET/CT، وأي تصوير آخر أو تصوير للدماغ متاح مسبقاً.", "تاريخ العلاج الكامل مع التواريخ والأدوية الحالية والحساسيات والأمراض المهمة.", "تعداد دم حديث وفحوص الكبد والكلى، ووصف للأعراض والقدرة على أداء الأنشطة اليومية."],
    recordsNote: "استخدم بوابة العضوية الخاصة لتقديم السجلات الطبية. حدد التقارير الناقصة؛ لا ترتب فحوصاً إضافية ولا ترسل عينات أنسجة دون تعليمات من الفريق الطبي المستقبِل.",
    processTitle: "من الاستفسار إلى التقييم البحثي",
    steps: [{ title: "تحضير الحالة", text: "أنشئ حساب عضوية مجانياً وارفع الوثائق المتاحة، واذكر IBR854-204 في ملخص الحالة." }, { title: "تأكيد المسار", text: "نساعد في تنظيم السجلات وترجمتها والاستفسار عن التوفر ومتطلبات المرضى الدوليين وترتيبات التقييم." }, { title: "تقييم سريري مستقل", text: "يشرح فريق البحث البروتوكول والبدائل والمخاطر والتكاليف والمتابعة. الفحص والموافقة المستنيرة منفصلان عن التسجيل في الموقع." }],
    questionsTitle: "قبل التفكير في المشاركة",
    questions: [{ title: "هل يحجز الاستفسار مكاناً؟", text: "لا. تقديم السجلات أو التسجيل أو شراء التنسيق لا يضمن الانضمام أو علاجاً معيناً. وحده فريق البحث يؤكد الملاءمة والتوفر." }, { title: "ما المخاطر والبدائل؟", text: "قد لا يفيد العلاج البحثي وقد يسبب آثاراً ضارة، بما فيها آثار خطيرة. ناقش المخاطر المعروفة وغير المعروفة وبدائل الرعاية المعتادة مع الباحث. استمر في الرعاية مع طبيبك أثناء استكشاف الخيارات." }, { title: "ما الذي يجب تأكيده بشأن التكاليف والسفر؟", text: "اطلب توضيحاً مكتوباً لما تغطيه الدراسة والتكاليف الأخرى ورسوم التنسيق وجدول الزيارات والمتابعة بعد العودة. لا نعد بعلاج مجاني أو تعويض. أكد الأهلية والترتيبات قبل حجز السفر." }],
    boundary: "تقدم H&C Care المعلومات وتحضير السجلات ودعم التواصل. لسنا الجهة الراعية للدراسة أو مقدم العلاج، ولا نقرر القبول ولا نضمن الوصول أو النتائج. عرض الدراسة لا يعني انتساباً أو وصولاً حصرياً.",
    source: "الإعلان العام عن الدراسة", enquire: "الاستفسار عن الدراسة", submit: "دخول العضوية / تقديم السجلات", checklist: "القائمة الكاملة للسجلات الطبية",
  },
  id: {
    label: "Penelitian klinis", eyebrow: "Informasi penelitian",
    title: "Penelitian klinis kanker paru",
    body: "Informasi studi fase II IBR854-204 untuk kanker paru bukan sel kecil non-skuamosa stadium lanjut, serta dokumen untuk membahas kemungkinan penilaian dengan tim penelitian.",
    updated: "Informasi ditinjau", statusTitle: "Studi telah diumumkan; ketersediaan perlu dikonfirmasi",
    status: "Pengumuman publik menyebut peluncuran studi pada Agustus 2026. Ini tidak memastikan rekrutmen saat ini, tempat di pusat tertentu, atau penerimaan pasien internasional. Konfirmasikan dengan tim penelitian sebelum merencanakan perjalanan.",
    studyTitle: "IBR854-204 · Kanker paru non-skuamosa stadium lanjut",
    facts: [{ title: "Fase penelitian", text: "Fase II" }, { title: "Desain studi", text: "Multisenter, acak, terbuka" }, { title: "Tahap pengobatan", text: "Lini pertama untuk penyakit stadium lanjut" }],
    overview: "Studi menilai efektivitas dan keamanan terapi sel eksperimental bertarget 5T4, IBR854, bersama kemoterapi dibandingkan kemoterapi saja. Ini penelitian klinis, bukan paket pengobatan H&C Care; manfaat bagi setiap pasien belum pasti.",
    armsTitle: "Apa yang dibandingkan?",
    arms: [{ title: "Kelompok penelitian", text: "IBR854 bersama pemetrexed dan cisplatin." }, { title: "Kelompok pembanding", text: "Pemetrexed dan cisplatin tanpa IBR854." }],
    allocation: "Pembagian kelompok dilakukan secara acak. Keikutsertaan tidak menjamin menerima IBR854, dan layanan koordinasi tidak dapat memilih kelompok pengobatan.",
    eligibilityTitle: "Poin awal untuk dibahas",
    eligibility: ["Usia 18 tahun atau lebih dengan diagnosis kanker paru bukan sel kecil non-skuamosa stadium lanjut lokal atau metastatik.", "Laporan tanpa perubahan driver terkait pada EGFR, ALK atau ROS1, serta PD-L1 TPS di bawah 1%.", "Belum menerima terapi sistemik untuk kanker paru stadium lanjut; terapi pada tahap lain perlu ditinjau secara individual.", "Tim penelitian menilai kondisi fisik, lesi terukur, fungsi organ dan seluruh persyaratan protokol lainnya."],
    eligibilityNote: "Ini ringkasan, bukan kriteria lengkap atau alat penilaian mandiri. Kelayakan ditentukan oleh protokol terbaru yang disetujui dan peneliti. Jangan menghentikan atau menunda pengobatan demi memenuhi syarat.",
    recordsTitle: "Dokumen yang disiapkan jika tersedia",
    records: ["Laporan biopsi, patologi dan imunohistokimia yang memastikan subtipe kanker paru.", "Laporan PD-L1 dengan TPS serta hasil EGFR, ALK, ROS1 atau pemeriksaan genetik/NGS yang lebih luas.", "Laporan CT atau PET/CT terbaru, serta pencitraan lain dan otak jika sudah tersedia.", "Riwayat pengobatan lengkap beserta tanggal, obat saat ini, alergi dan penyakit penting lainnya.", "Darah lengkap, fungsi hati dan ginjal terbaru, serta gejala dan kemampuan aktivitas sehari-hari."],
    recordsNote: "Kirim dokumen medis melalui portal anggota privat. Tandai laporan yang belum ada; jangan melakukan tes tambahan atau mengirim sampel jaringan fisik tanpa arahan tim medis penerima.",
    processTitle: "Dari pertanyaan menuju penilaian penelitian",
    steps: [{ title: "Siapkan kasus", text: "Buat akun anggota gratis, unggah dokumen yang tersedia dan sebutkan IBR854-204 dalam ringkasan kasus." }, { title: "Konfirmasikan jalur", text: "Kami membantu menyusun dan menerjemahkan dokumen, menanyakan ketersediaan, persyaratan pasien internasional dan pengaturan penilaian." }, { title: "Penilaian klinis independen", text: "Tim penelitian menjelaskan protokol, alternatif, risiko, biaya dan tindak lanjut. Skrining dan persetujuan setelah penjelasan terpisah dari pendaftaran situs." }],
    questionsTitle: "Sebelum mempertimbangkan partisipasi",
    questions: [{ title: "Apakah pertanyaan memesan tempat?", text: "Tidak. Mengirim dokumen, mendaftar atau membayar koordinasi tidak menjamin masuk studi atau pengobatan tertentu. Hanya tim penelitian dapat memastikan kelayakan dan tempat." }, { title: "Apa risiko dan alternatifnya?", text: "Terapi penelitian mungkin tidak membantu dan dapat menyebabkan efek samping, termasuk yang serius. Bahas risiko yang diketahui maupun belum diketahui serta perawatan standar dengan peneliti. Tetap lanjutkan perawatan bersama dokter Anda." }, { title: "Biaya dan perjalanan apa yang perlu dipastikan?", text: "Minta penjelasan tertulis tentang item yang ditanggung studi, biaya lain, biaya koordinasi, jadwal kunjungan dan tindak lanjut setelah pulang. Kami tidak menjanjikan pengobatan gratis atau penggantian biaya. Pastikan kelayakan dan pengaturan sebelum memesan perjalanan." }],
    boundary: "H&C Care menyediakan informasi, persiapan dokumen dan dukungan komunikasi. Kami bukan sponsor studi atau penyedia pengobatan, tidak menentukan penerimaan, dan tidak menjamin akses atau hasil. Informasi ini tidak menyatakan afiliasi atau akses eksklusif.",
    source: "Pengumuman publik studi", enquire: "Tanyakan studi ini", submit: "Masuk anggota / kirim dokumen", checklist: "Daftar lengkap dokumen medis",
  },
  ms: {
    label: "Penyelidikan klinikal", eyebrow: "Maklumat penyelidikan",
    title: "Penyelidikan klinikal kanser paru-paru",
    body: "Maklumat kajian fasa II IBR854-204 bagi kanser paru-paru bukan sel kecil bukan skuamus peringkat lanjut, serta dokumen untuk membincangkan kemungkinan penilaian dengan pasukan penyelidikan.",
    updated: "Maklumat disemak", statusTitle: "Kajian diumumkan; ketersediaan perlu disahkan",
    status: "Pengumuman awam menyatakan kajian dilancarkan pada Ogos 2026. Ini tidak mengesahkan pengambilan semasa, tempat di pusat tertentu atau penerimaan pesakit antarabangsa. Sahkan dengan pasukan penyelidikan sebelum merancang perjalanan.",
    studyTitle: "IBR854-204 · Kanser paru-paru bukan skuamus peringkat lanjut",
    facts: [{ title: "Fasa kajian", text: "Fasa II" }, { title: "Reka bentuk", text: "Berbilang pusat, rawak, label terbuka" }, { title: "Peringkat rawatan", text: "Barisan pertama bagi penyakit peringkat lanjut" }],
    overview: "Kajian menilai keberkesanan dan keselamatan terapi sel penyelidikan bersasaran 5T4, IBR854, bersama kemoterapi berbanding kemoterapi sahaja. Ini kajian klinikal, bukan pakej rawatan H&C Care; manfaat kepada seseorang pesakit belum pasti.",
    armsTitle: "Apakah yang dibandingkan?",
    arms: [{ title: "Kumpulan penyelidikan", text: "IBR854 bersama pemetrexed dan cisplatin." }, { title: "Kumpulan perbandingan", text: "Pemetrexed dan cisplatin tanpa IBR854." }],
    allocation: "Pembahagian kumpulan adalah secara rawak. Penyertaan tidak menjamin penerimaan IBR854, dan perkhidmatan penyelarasan tidak boleh memilih kumpulan rawatan.",
    eligibilityTitle: "Perkara awal untuk dibincangkan",
    eligibility: ["Berumur 18 tahun atau lebih dengan kanser paru-paru bukan sel kecil bukan skuamus lanjutan setempat atau metastatik yang disahkan.", "Laporan tanpa perubahan pemacu berkaitan EGFR, ALK atau ROS1, serta PD-L1 TPS kurang daripada 1%.", "Belum menerima terapi sistemik untuk kanser paru-paru peringkat lanjut; rawatan pada peringkat lain memerlukan semakan individu.", "Pasukan penyelidikan menilai keadaan fizikal, lesi yang boleh diukur, fungsi organ dan semua syarat protokol yang lain."],
    eligibilityNote: "Ini ringkasan, bukan kriteria lengkap atau alat penilaian kendiri. Protokol semasa yang diluluskan dan penilaian penyelidik menentukan kelayakan. Jangan hentikan atau tangguhkan rawatan untuk cuba memenuhi syarat.",
    recordsTitle: "Dokumen untuk disediakan jika ada",
    records: ["Laporan biopsi, patologi dan imunohistokimia yang mengesahkan subjenis kanser paru-paru.", "Laporan PD-L1 termasuk TPS, serta keputusan EGFR, ALK, ROS1 atau ujian genetik/NGS yang lebih menyeluruh.", "Laporan CT atau PET/CT terkini, serta pengimejan lain dan otak jika sudah tersedia.", "Sejarah rawatan lengkap berserta tarikh, ubat semasa, alahan dan penyakit penting yang lain.", "Kiraan darah, fungsi hati dan buah pinggang terkini, serta gejala dan keupayaan aktiviti harian."],
    recordsNote: "Hantar rekod perubatan melalui portal ahli persendirian. Nyatakan laporan yang belum ada; jangan aturkan ujian tambahan atau hantar sampel tisu fizikal tanpa arahan pasukan perubatan penerima.",
    processTitle: "Daripada pertanyaan kepada penilaian kajian",
    steps: [{ title: "Sediakan kes", text: "Daftar akaun ahli percuma, muat naik rekod yang ada dan nyatakan IBR854-204 dalam ringkasan kes." }, { title: "Sahkan laluan", text: "Kami membantu menyusun dan menterjemah rekod serta bertanya tentang ketersediaan, syarat pesakit antarabangsa dan aturan penilaian." }, { title: "Penilaian klinikal bebas", text: "Pasukan penyelidikan menerangkan protokol, alternatif, risiko, kos dan susulan. Saringan dan persetujuan termaklum berasingan daripada pendaftaran laman web." }],
    questionsTitle: "Sebelum mempertimbangkan penyertaan",
    questions: [{ title: "Adakah pertanyaan menempah tempat?", text: "Tidak. Penyerahan rekod, pendaftaran atau pembelian penyelarasan tidak menjamin penyertaan atau rawatan tertentu. Hanya pasukan penyelidikan boleh mengesahkan kelayakan dan ketersediaan." }, { title: "Apakah risiko dan alternatif?", text: "Rawatan kajian mungkin tidak membantu dan boleh menyebabkan kesan buruk, termasuk yang serius. Bincangkan risiko yang diketahui dan belum diketahui serta rawatan standard dengan penyelidik. Teruskan penjagaan bersama doktor anda." }, { title: "Apakah kos dan perjalanan yang perlu disahkan?", text: "Minta penjelasan bertulis tentang perkara yang ditanggung kajian, kos lain, yuran penyelarasan, jadual lawatan dan susulan selepas pulang. Kami tidak menjanjikan rawatan percuma atau bayaran balik. Sahkan kelayakan dan aturan sebelum menempah perjalanan." }],
    boundary: "H&C Care menyediakan maklumat, persediaan rekod dan sokongan komunikasi. Kami bukan penaja kajian atau penyedia rawatan, tidak menentukan penyertaan dan tidak menjamin akses atau hasil. Penerangan ini tidak bermaksud hubungan gabungan atau akses eksklusif.",
    source: "Pengumuman awam kajian", enquire: "Tanya tentang kajian ini", submit: "Log masuk ahli / hantar rekod", checklist: "Senarai lengkap rekod perubatan",
  },
};
