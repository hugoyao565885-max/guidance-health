import type { Locale } from "./site";

type Item = { title: string; text: string };
export type GuideKey = "mdt" | "journey" | "records";
export type PatientGuide = {
  label: string;
  title: string;
  description: string;
  sections: Item[];
  questions: Item[];
  related: Array<GuideKey | "membership" | "experts" | "car-t">;
  sources: Array<{ title: string; url: string }>;
};

// Change this date only when the guide content is substantively updated.
export const guidesUpdated = "2026-10-19";
const secondOpinionSource = { title: "National Cancer Institute: Finding Cancer Care", url: "https://www.cancer.gov/about-cancer/managing-care/finding-cancer-care" };
const pathologySource = { title: "National Cancer Institute: Pathology Reports", url: "https://www.cancer.gov/about-cancer/diagnosis-staging/diagnosis/pathology-reports-fact-sheet" };

type GuideContent = {
  eyebrow: string; publishedBy: string; updated: string; questions: string;
  related: string; sources: string; scope: string; recordsLink: string;
  guides: Record<GuideKey, PatientGuide>;
};

export const patientGuides: Record<Locale, GuideContent> = {
  en: {
    eyebrow: "International patient guide", publishedBy: "Published by H&C Care Advisory Limited", updated: "Updated", questions: "Common questions", related: "Plan your next step", sources: "Further reading", recordsLink: "Medical records checklist",
    scope: "This guide explains preparation and coordination. It does not assess your diagnosis or treatment suitability. Your treating clinicians decide what is medically appropriate; appointments, admission and outcomes are not guaranteed.",
    guides: {
      mdt: {
        label: "Lymphoma second opinion", title: "Lymphoma second opinion & MDT coordination in China",
        description: "Prepare for a lymphoma second opinion in Guangzhou: records to gather, questions for specialists, and how H&C Care coordinates multidisciplinary review.",
        sections: [
          { title: "Start with the question you need answered", text: "Tell us whether your family needs clarification of an existing diagnosis, discussion of a proposed plan, or a further opinion after relapse or an unsatisfactory response. Include your current doctor's recommendations and any time-sensitive decisions. A second opinion does not automatically mean changing treatment." },
          { title: "Prepare a dated lymphoma record package", text: "Gather the biopsy and pathology reports, IHC results, PET/CT or other imaging reports, available molecular tests and a dated treatment history. Include recent blood tests, current medicines and your present condition. Tell us whether pathology slides or blocks and original scan files can be obtained; the receiving team decides what it needs." },
          { title: "Match the review to the case", text: "We organize the information and coordinate enquiries to suitable lymphoma specialists in Guangdong, with a focus on Guangzhou. The receiving team confirms whether an individual consultation, pathology review or multidisciplinary discussion is available and appropriate. A named specialist or an MDT meeting is not automatically included." },
          { title: "Agree on the format and deliverables", text: "Before paid coordination, confirm the receiving team, consultation format, language support, fees and whether a written clinical opinion is included. We help prepare your question list and communicate administrative requirements. All medical opinions come from the clinicians involved." },
          { title: "Make the next step clear", text: "After the consultation, we can help organize the documents and follow-up questions for your current treating team. If an in-person visit is proposed, confirm acceptance, travel feasibility and costs before making arrangements. Do not interrupt prescribed treatment while waiting for coordination." },
        ],
        questions: [
          { title: "Can preparation begin before I travel?", text: "Yes. You can prepare records and request coordination from your home country. Whether a remote specialist consultation is available must be confirmed with the receiving institution." },
          { title: "What if some reports are missing?", text: "Send the available reports through the member portal and identify what is missing. We help prepare a document request list. Only the receiving clinical team decides whether the information is enough to proceed." },
          { title: "Does an MDT guarantee treatment in China?", text: "No. Review, hospital acceptance, treatment eligibility and research enrollment are separate decisions made by the responsible medical teams." },
        ], related: ["records", "experts", "journey", "membership"], sources: [secondOpinionSource],
      },
      journey: {
        label: "Coming to Guangzhou", title: "Cancer care in Guangzhou: a guide for international patients",
        description: "Plan medical records, specialist communication, hospital appointments, payment, travel and follow-up when arranging cancer care in Guangzhou, China.",
        sections: [
          { title: "Before making travel arrangements", text: "Share your country, preferred language, diagnosis summary and coordination needs. Prepare the available records and obtain any required patient authorization. Confirm the proposed receiving team and next assessment step before booking non-refundable travel; an enquiry is not hospital acceptance." },
          { title: "Confirm services and the budget", text: "Choose pre-arrival, in-China or after-discharge coordination separately according to your needs. Agree on the scope and price in writing. Hospital consultations, tests, medicines and treatment are billed separately by the relevant providers; ask for their estimate, payment methods and cancellation terms." },
          { title: "Prepare for arrival and hospital care", text: "Confirm appointment and admission instructions, document requirements, interpretation, accommodation and transport. Ask your treating doctor about fitness to travel, and check current entry requirements with official authorities. Our support does not guarantee a visa, hospital bed or admission date." },
          { title: "During the visit and after returning home", text: "Keep copies of hospital bills, results, prescriptions and discharge documents. Agree with the clinical team on the follow-up plan and who handles urgent medical concerns. Within the purchased scope, we can coordinate translation, record organization, appointments and communication with the receiving team." },
        ],
        questions: [
          { title: "Can I purchase just one service stage?", text: "Yes. The stages are optional and can be purchased separately. Each quote relates to the agreed admission cycle and scope; support for another admission is agreed separately." },
          { title: "Can a relative coordinate on my behalf?", text: "Yes, with the patient's authorization. Tell us the relationship, preferred contact person and language so communication responsibilities can be agreed." },
        ], related: ["records", "membership", "mdt"], sources: [],
      },
      records: {
        label: "Medical records checklist", title: "Medical records for a cancer second opinion in China",
        description: "A practical checklist of pathology, scans, genetic tests, treatment history and current medicines for international cancer patients preparing a specialist enquiry.",
        sections: [
          { title: "Diagnosis, biopsy and pathology", text: "Include the original diagnosis, biopsy or surgical pathology reports and all available IHC reports. Note where slides or tissue blocks are held. Do not send physical specimens until the receiving institution confirms its requirements." },
          { title: "Imaging and test results", text: "Include PET/CT, CT or MRI reports with dates and previous comparison reports. Keep original scan files available. Add any genetic/NGS or other biomarker results, with the full laboratory report rather than selected screenshots." },
          { title: "Recent blood tests and current condition", text: "If available, include blood results from the past 2–4 weeks, with units and reference ranges. Describe current symptoms, daily activity and recent changes. The receiving doctor decides whether newer or additional tests are needed." },
          { title: "Treatment timeline and medicines", text: "List surgeries, radiotherapy and drug treatments with dates, names, number of cycles if known, response assessments and reasons for stopping. Add current medicines and doses, allergies, significant other illnesses and available discharge summaries." },
          { title: "Your questions and authorization", text: "Include the questions you want the specialist to address, preferred language and a contact person. A family representative should confirm patient authorization. Identity documents are requested only when needed for a specific arrangement through an agreed channel." },
          { title: "Organize and upload the available files", text: "Keep all pages legible, including dates and laboratory details. Retain original-language reports alongside any translations. Register for a free account, save your case and upload PDF, JPG or PNG files up to 10 MB each. For large scan files, ask support for an appropriate transfer arrangement. Missing records do not prevent an initial enquiry." },
        ], questions: [], related: ["mdt", "journey", "membership"], sources: [pathologySource],
      },
    },
  },
  "zh-hant": {
    eyebrow: "國際患者指南", publishedBy: "發布機構：康誠健康顧問有限公司", updated: "更新日期", questions: "常見問題", related: "準備下一步", sources: "延伸閱讀", recordsLink: "病歷準備清單",
    scope: "本指南介紹資料準備與協調流程，不判斷診斷或治療適用性。醫療決定由接診醫生作出；專家預約、入院及治療結果均不作保證。",
    guides: {
      mdt: {
        label: "淋巴瘤第二意見", title: "中國淋巴瘤第二意見與廣州 MDT 協調",
        description: "了解在廣州尋求淋巴瘤第二意見需要哪些病歷、應向專家提出甚麼問題，以及 H&C Care 如何協調多學科討論準備。",
        sections: [
          { title: "先釐清希望解答的問題", text: "告訴我們您希望進一步了解既有診斷、討論擬議方案，還是在復發或療效未如預期後尋求另一意見。提供原接診醫生的建議及有時間限制的決定。尋求第二意見不等於一定要更改治療。" },
          { title: "整理有日期的淋巴瘤病歷", text: "準備活檢與病理報告、免疫組化、PET/CT 或其他影像報告、已有分子檢測及按日期排列的治療史。補充近期驗血、目前用藥及身體狀況，並說明能否取得病理切片、蠟塊與原始影像；具體需要由接診團隊確認。" },
          { title: "按個案協調合適的評估", text: "我們整理資料，協調廣東省內、以廣州為重點的淋巴瘤專家溝通。由接診團隊確認適合且可安排的是個別諮詢、病理覆核還是多學科討論。服務不自動包含指定專家或一場 MDT 會議。" },
          { title: "確認諮詢方式與交付內容", text: "付費協調前，先確認接診團隊、諮詢形式、語言支持、費用，以及是否包含書面臨床意見。我們協助整理問題和行政要求；醫療意見由參與的醫生提供。" },
          { title: "把後續安排說清楚", text: "諮詢後，可協助整理文件及需向原接診團隊提出的問題。如建議親身就診，應先確認接診、出行可行性與費用。等待協調期間，請勿自行中斷醫生已處方的治療。" },
        ], questions: [
          { title: "未來中國，可以先準備嗎？", text: "可以在所在地整理病歷並提出協調需求。能否進行遠程專家諮詢，需向接診機構確認。" },
          { title: "報告不齊全怎麼辦？", text: "可先經會員平台提交已有報告，註明缺失資料。我們協助整理補件清單；現有資料是否足夠，由接診團隊判斷。" },
          { title: "MDT 是否代表一定可以來華治療？", text: "不是。病歷評估、醫院接診、治療適用資格及研究入組，是由相關醫療團隊分別作出的決定。" },
        ], related: ["records", "experts", "journey", "membership"], sources: [secondOpinionSource],
      },
      journey: {
        label: "廣州就醫準備", title: "國際腫瘤患者廣州就醫準備指南",
        description: "來廣州就醫前，了解病歷、專家溝通、預約、住院、付款、交通住宿及回國隨訪需要如何準備。",
        sections: [
          { title: "安排行程前", text: "先說明所在國家或地區、偏好語言、診斷摘要及協調需要，整理已有病歷並取得所需患者授權。在預訂不可退款的行程前，確認擬接診團隊及下一步評估安排；提出諮詢並不等於醫院已接受個案。" },
          { title: "確認服務及預算", text: "按需要單獨選購來華前、在華期間或出院後支持，並以書面確認服務範圍與價格。醫院諮詢、檢查、藥物及治療另由相關機構收費；請向其確認估算、付款方式及取消條款。" },
          { title: "準備抵達與住院安排", text: "確認預約、入院指引、文件要求、翻譯、住宿及交通。向原接診醫生確認是否適宜出行，並向官方機構核實最新入境要求。協調服務不保證簽證、床位或入院日期。" },
          { title: "就醫期間及回國後", text: "保存收據、檢查結果、處方和出院文件，與醫療團隊確認隨訪計劃及緊急醫療問題的聯絡方式。我們按已購服務範圍協調翻譯、病歷整理、預約及接診團隊溝通。" },
        ], questions: [
          { title: "可以只購買其中一個階段嗎？", text: "可以，各階段可按需要單獨購買。報價對應約定的住院周期和服務範圍；另一次住院所需的支持另行確認。" },
          { title: "家屬可以代為協調嗎？", text: "可以，但需取得患者授權。請說明與患者的關係、主要聯絡人和偏好語言，以便確認溝通安排。" },
        ], related: ["records", "membership", "mdt"], sources: [],
      },
      records: {
        label: "病歷準備清單", title: "來中國尋求腫瘤第二意見的病歷清單",
        description: "國際腫瘤患者準備專家諮詢時，可參考病理、影像、基因檢測、治療史、目前用藥及資料上傳清單。",
        sections: [
          { title: "診斷、活檢與病理", text: "提供原診斷、活檢或手術病理報告，以及已有的免疫組化報告。說明切片或蠟塊保存在哪裡；接診機構確認要求前，請勿自行寄送實物標本。" },
          { title: "影像與檢測結果", text: "提供有日期的 PET/CT、CT 或 MRI 報告及以往對照報告，並保留原始影像。已有的基因／NGS 或其他生物標誌物結果應提供完整報告，避免只截取部分數值。" },
          { title: "近期驗血及目前狀況", text: "如有，提供過去 2–4 週的驗血結果，保留單位和參考範圍。簡述目前症狀、日常活動能力及近期變化；是否需要更新或補充檢查，由接診醫生判斷。" },
          { title: "治療時間線與用藥", text: "按日期列出手術、放療及藥物治療，盡量包括名稱、已知療程數、療效評估及停止原因。補充目前藥物與劑量、過敏、重要共病及已有出院摘要。" },
          { title: "您的問題與授權", text: "列出希望專家回答的問題、偏好語言及聯絡人。家屬代辦應確認患者授權；身份證明僅在具體安排需要時，經雙方確認的渠道另行索取。" },
          { title: "整理並上傳已有文件", text: "請確保各頁清晰，保留日期與檢驗資料；翻譯件應連同原文保存。免費註冊後，可保存個案並上傳 PDF、JPG 或 PNG，每份不超過 10 MB。大型原始影像請聯絡支持團隊確認傳輸方式。資料暫缺不影響初步聯絡。" },
        ], questions: [], related: ["mdt", "journey", "membership"], sources: [pathologySource],
      },
    },
  },
  ru: {
    eyebrow: "Руководство для иностранных пациентов", publishedBy: "Опубликовано H&C Care Advisory Limited", updated: "Обновлено", questions: "Частые вопросы", related: "Подготовьте следующий шаг", sources: "Дополнительные материалы", recordsLink: "Список медицинских документов",
    scope: "Руководство посвящено подготовке и координации, а не оценке диагноза или пригодности лечения. Медицинские решения принимают лечащие врачи. Запись, госпитализация и результаты не гарантируются.",
    guides: {
      mdt: {
        label: "Второе мнение при лимфоме", title: "Второе мнение при лимфоме и координация консилиума в Китае",
        description: "Подготовка к консультации по лимфоме в Гуанчжоу: медицинские документы, вопросы специалистам и координация междисциплинарного обсуждения.",
        sections: [
          { title: "Определите главный вопрос", text: "Уточните, нужна ли вам дополнительная информация о диагнозе, обсуждение предложенного плана или мнение после рецидива либо недостаточного ответа. Приложите рекомендации лечащего врача и сроки важных решений. Второе мнение не обязательно означает смену лечения." },
          { title: "Соберите документы с датами", text: "Подготовьте биопсию, патологическое заключение, ИГХ, отчеты ПЭТ/КТ или другой визуализации, имеющиеся молекулярные тесты и историю лечения. Добавьте свежие анализы крови, лекарства и описание состояния. Сообщите о доступности стекол, блоков и исходных снимков; требования определяет принимающая команда." },
          { title: "Согласуйте подходящий формат оценки", text: "Мы систематизируем информацию и координируем обращения к специалистам по лимфомам в Гуандуне, прежде всего в Гуанчжоу. Принимающая команда решает, доступны ли индивидуальная консультация, пересмотр патологии или консилиум. Конкретный врач и заседание консилиума не включены автоматически." },
          { title: "Уточните формат и результат услуги", text: "До платной координации согласуйте принимающую команду, формат, перевод, стоимость и наличие письменного медицинского заключения. Мы готовим вопросы и уточняем административные требования. Медицинские мнения предоставляют врачи." },
          { title: "Спланируйте дальнейшие действия", text: "После консультации мы можем помочь систематизировать документы и вопросы для вашего лечащего врача. Если предложен очный визит, сначала подтвердите прием, возможность поездки и расходы. Не прерывайте назначенное лечение в ожидании координации." },
        ], questions: [
          { title: "Можно начать до поездки?", text: "Да, документы и запрос можно подготовить из своей страны. Возможность дистанционной консультации подтверждает принимающее учреждение." },
          { title: "Что делать, если документов не хватает?", text: "Загрузите доступные отчеты в личном кабинете и укажите недостающие. Мы поможем составить список запросов. Достаточность информации оценивает только клиническая команда." },
          { title: "Гарантирует ли консилиум лечение в Китае?", text: "Нет. Рассмотрение документов, прием в больнице, показания к лечению и включение в исследование являются отдельными решениями медицинских команд." },
        ], related: ["records", "experts", "journey", "membership"], sources: [secondOpinionSource],
      },
      journey: {
        label: "Поездка в Гуанчжоу", title: "Онкологическая помощь в Гуанчжоу: подготовка иностранных пациентов",
        description: "Как подготовить документы, консультации, запись, оплату, поездку и последующее общение при организации онкологической помощи в Китае.",
        sections: [
          { title: "До бронирования поездки", text: "Сообщите страну, язык, краткий диагноз и нужную помощь. Соберите документы и разрешение пациента, если оно требуется. До невозвратных бронирований подтвердите принимающую команду и следующий этап оценки. Запрос не означает согласия больницы принять пациента." },
          { title: "Услуги и бюджет", text: "Поддержку до приезда, в Китае и после выписки можно выбирать отдельно. Согласуйте объем и цену письменно. Консультации, анализы, лекарства и лечение оплачиваются отдельно соответствующим учреждениям; уточните смету, способы оплаты и отмену." },
          { title: "Прибытие и госпитализация", text: "Подтвердите запись, инструкции больницы, документы, перевод, жилье и транспорт. Обсудите с лечащим врачом возможность поездки, а актуальные правила въезда проверьте у официальных органов. Мы не гарантируем визу, место в стационаре или дату госпитализации." },
          { title: "Во время визита и после возвращения", text: "Сохраняйте счета, результаты, рецепты и выписки. С врачами согласуйте наблюдение и контакты на случай срочных медицинских вопросов. В согласованный объем могут входить перевод, систематизация документов, запись и связь с принимающей командой." },
        ], questions: [
          { title: "Можно приобрести только один этап?", text: "Да, этапы необязательны и приобретаются отдельно. Предложение относится к согласованному циклу госпитализации и объему; помощь при следующей госпитализации согласуется отдельно." },
          { title: "Может ли общаться родственник?", text: "Да, с разрешения пациента. Укажите родство, основное контактное лицо и язык, чтобы согласовать порядок общения." },
        ], related: ["records", "membership", "mdt"], sources: [],
      },
      records: {
        label: "Список медицинских документов", title: "Документы для второго онкологического мнения в Китае",
        description: "Практический список патологии, снимков, генетических тестов, истории лечения и лекарств для обращения к онкологу в Китае.",
        sections: [
          { title: "Диагноз, биопсия и патология", text: "Приложите исходный диагноз, биопсию или послеоперационное патологическое заключение и имеющиеся отчеты ИГХ. Укажите место хранения стекол и блоков. Не отправляйте образцы до подтверждения требований больницей." },
          { title: "Снимки и результаты исследований", text: "Приложите отчеты ПЭТ/КТ, КТ или МРТ с датами и предыдущими сравнениями. Сохраните исходные снимки. Генетические/NGS и другие биомаркерные результаты предоставляйте полностью, а не отдельными скриншотами." },
          { title: "Свежие анализы и состояние", text: "Если имеются, приложите анализы крови за последние 2–4 недели с единицами и референсами. Опишите симптомы, повседневную активность и недавние изменения. Необходимость новых исследований определяет врач." },
          { title: "История лечения и лекарства", text: "Перечислите операции, облучение и лекарственные схемы с датами, названиями, известным числом циклов, оценкой ответа и причинами отмены. Добавьте текущие препараты и дозы, аллергии, важные сопутствующие заболевания и выписки." },
          { title: "Вопросы и разрешение пациента", text: "Укажите вопросы специалисту, язык и контактное лицо. Представитель должен подтвердить разрешение пациента. Удостоверение личности запрашивается только для конкретной необходимости по согласованному каналу." },
          { title: "Подготовка и загрузка", text: "Все страницы, даты и данные лаборатории должны быть читаемыми. Храните оригиналы вместе с переводами. После бесплатной регистрации сохраните случай и загрузите PDF, JPG или PNG до 10 МБ каждый. Для больших файлов снимков согласуйте передачу с поддержкой. Недостающие документы не мешают первому обращению." },
        ], questions: [], related: ["mdt", "journey", "membership"], sources: [pathologySource],
      },
    },
  },
  ar: {
    eyebrow: "دليل المريض الدولي", publishedBy: "الناشر: H&C Care Advisory Limited", updated: "آخر تحديث", questions: "أسئلة شائعة", related: "خطط للخطوة التالية", sources: "للمزيد من المعلومات", recordsLink: "قائمة المستندات الطبية",
    scope: "يشرح هذا الدليل التحضير والتنسيق ولا يقيّم التشخيص أو ملاءمة العلاج. يتخذ الأطباء المعالجون القرارات الطبية، ولا نضمن المواعيد أو القبول أو نتائج العلاج.",
    guides: {
      mdt: {
        label: "رأي ثان للّيمفوما", title: "رأي ثان للّيمفوما وتنسيق مناقشة متعددة التخصصات في الصين",
        description: "التحضير لرأي ثان للّيمفوما في قوانغتشو: المستندات اللازمة والأسئلة للأخصائيين وكيفية تنسيق المناقشة متعددة التخصصات.",
        sections: [
          { title: "حدد السؤال الذي تريد الإجابة عنه", text: "أوضح إن كنت تريد فهم التشخيص الحالي أو مناقشة خطة مقترحة أو طلب رأي بعد الانتكاس أو استجابة غير مرضية. أرفق توصيات طبيبك والقرارات المرتبطة بموعد محدد. طلب رأي ثان لا يعني بالضرورة تغيير العلاج." },
          { title: "جهز ملفا طبيا مؤرخا", text: "اجمع تقارير الخزعة والباثولوجيا وIHC وتقارير PET/CT أو التصوير الآخر والفحوص الجزيئية المتاحة وتاريخ العلاج. أضف تحاليل الدم الحديثة والأدوية والحالة الحالية. اذكر إمكانية الحصول على الشرائح والكتل النسيجية وملفات الصور الأصلية؛ الفريق المستقبل يحدد المطلوب." },
          { title: "نسق التقييم المناسب للحالة", text: "ننظم المعلومات وننسق التواصل مع أخصائيي الليمفوما المناسبين في غوانغدونغ، خصوصا قوانغتشو. يؤكد الفريق المستقبل توفر وملاءمة الاستشارة الفردية أو مراجعة الباثولوجيا أو المناقشة متعددة التخصصات. لا تشمل الخدمة تلقائيا طبيبا معينا أو اجتماعا طبيا." },
          { title: "اتفق على الصيغة والمخرجات", text: "قبل التنسيق المدفوع، أكد الفريق المستقبل وشكل الاستشارة ودعم اللغة والرسوم وما إذا كان الرأي الطبي المكتوب مشمولا. نساعد في إعداد الأسئلة والمتطلبات الإدارية، ويقدم الأطباء الآراء الطبية." },
          { title: "وضح الخطوات اللاحقة", text: "بعد الاستشارة يمكننا تنظيم المستندات وأسئلة المتابعة لطبيبك الحالي. إذا اقترحت زيارة حضورية، أكد القبول وإمكانية السفر والتكلفة أولا. لا توقف العلاج الموصوف أثناء انتظار التنسيق." },
        ], questions: [
          { title: "هل يمكن البدء قبل السفر؟", text: "نعم، يمكنك تجهيز المستندات وطلب التنسيق من بلدك. يجب تأكيد توفر الاستشارة عن بعد مع المؤسسة المستقبلة." },
          { title: "ماذا إذا كانت بعض التقارير ناقصة؟", text: "ارفع المتاح عبر بوابة العضو وحدد النواقص. نساعد في إعداد قائمة بالمستندات المطلوبة، والفريق الطبي وحده يقرر إن كانت المعلومات كافية." },
          { title: "هل تضمن المناقشة الطبية العلاج في الصين؟", text: "لا. مراجعة الملف والقبول بالمستشفى وأهلية العلاج والانضمام إلى البحث قرارات منفصلة تتخذها الفرق الطبية المسؤولة." },
        ], related: ["records", "experts", "journey", "membership"], sources: [secondOpinionSource],
      },
      journey: {
        label: "الاستعداد لقوانغتشو", title: "رعاية السرطان في قوانغتشو: دليل استعداد المرضى الدوليين",
        description: "جهز المستندات والتواصل مع الأخصائيين والمواعيد والدفع والسفر والمتابعة عند تنسيق رعاية السرطان في قوانغتشو بالصين.",
        sections: [
          { title: "قبل حجز السفر", text: "شارك بلدك ولغتك المفضلة وملخص التشخيص والدعم المطلوب. جهز التقارير وتفويض المريض عند الحاجة. أكد الفريق المقترح وخطوة التقييم التالية قبل الحجوزات غير القابلة للاسترداد؛ الاستفسار لا يعني قبول المستشفى." },
          { title: "الخدمات والميزانية", text: "يمكن اختيار دعم ما قبل الوصول وأثناء الإقامة وبعد الخروج كل على حدة. اتفق كتابيا على النطاق والسعر. الاستشارات والفحوص والأدوية والعلاج لها رسوم منفصلة لدى الجهات المقدمة؛ اطلب تقديرا وطرق الدفع وشروط الإلغاء." },
          { title: "الوصول والمستشفى", text: "أكد المواعيد وتعليمات الدخول والمستندات والترجمة والسكن والنقل. اسأل طبيبك عن ملاءمة السفر وتحقق من متطلبات الدخول الحالية لدى الجهات الرسمية. لا نضمن التأشيرة أو سريرا أو موعد دخول." },
          { title: "أثناء الزيارة وبعد العودة", text: "احتفظ بالفواتير والنتائج والوصفات ومستندات الخروج. اتفق مع الفريق الطبي على المتابعة وجهة التواصل للحالات الطبية العاجلة. ضمن النطاق المشترى، ننسق الترجمة وتنظيم السجلات والمواعيد والتواصل مع الفريق المستقبل." },
        ], questions: [
          { title: "هل يمكن شراء مرحلة واحدة؟", text: "نعم، المراحل اختيارية وتشترى منفصلة. يخص العرض دورة الدخول والنطاق المتفق عليهما؛ ويُتفق بصورة منفصلة على الدعم لدخول آخر." },
          { title: "هل يمكن لأحد الأقارب التواصل نيابة عني؟", text: "نعم، بتفويض من المريض. حدد العلاقة والشخص الرئيسي للتواصل واللغة لتوضيح المسؤوليات." },
        ], related: ["records", "membership", "mdt"], sources: [],
      },
      records: {
        label: "قائمة المستندات الطبية", title: "المستندات المطلوبة لرأي ثان في السرطان في الصين",
        description: "قائمة عملية بتقارير الباثولوجيا والتصوير والفحوص الجينية وتاريخ العلاج والأدوية للتحضير لاستفسار متخصص في الصين.",
        sections: [
          { title: "التشخيص والخزعة والباثولوجيا", text: "أرفق التشخيص الأصلي وتقارير الخزعة أو الباثولوجيا الجراحية وتقارير IHC المتاحة. اذكر مكان الشرائح والكتل النسيجية. لا ترسل عينات قبل تأكيد متطلبات المؤسسة المستقبلة." },
          { title: "التصوير والفحوص", text: "أرفق تقارير PET/CT أو CT أو MRI المؤرخة والتقارير السابقة للمقارنة، واحتفظ بملفات الصور الأصلية. أرسل تقارير الفحوص الجينية/NGS والمؤشرات الحيوية كاملة بدلا من لقطات منتقاة." },
          { title: "تحاليل الدم والحالة الحالية", text: "إذا توفرت، أرفق تحاليل الدم خلال آخر 2–4 أسابيع مع الوحدات والمجالات المرجعية. صف الأعراض والنشاط اليومي والتغيرات الحديثة. يقرر الطبيب الحاجة لفحوص أحدث أو إضافية." },
          { title: "تسلسل العلاج والأدوية", text: "سجل العمليات والعلاج الإشعاعي والأدوية مع التواريخ والأسماء وعدد الدورات إن عُرف وتقييم الاستجابة وأسباب التوقف. أضف الأدوية الحالية والجرعات والحساسية والأمراض الأخرى المهمة وملخصات الخروج." },
          { title: "الأسئلة والتفويض", text: "حدد أسئلتك للطبيب واللغة والشخص المسؤول عن التواصل. على ممثل الأسرة تأكيد تفويض المريض. تطلب وثائق الهوية فقط عند الحاجة لترتيب محدد عبر قناة متفق عليها." },
          { title: "التنظيم والرفع", text: "تأكد من وضوح كل الصفحات والتواريخ وتفاصيل المختبر. احتفظ بالأصل مع الترجمة. بعد التسجيل المجاني، احفظ الحالة وارفع PDF أو JPG أو PNG حتى 10 ميغابايت لكل ملف. اتفق مع الدعم على نقل ملفات الصور الكبيرة. نقص المستندات لا يمنع الاستفسار الأولي." },
        ], questions: [], related: ["mdt", "journey", "membership"], sources: [pathologySource],
      },
    },
  },
  id: {
    eyebrow: "Panduan pasien internasional", publishedBy: "Diterbitkan oleh H&C Care Advisory Limited", updated: "Diperbarui", questions: "Pertanyaan umum", related: "Siapkan langkah berikutnya", sources: "Bacaan lebih lanjut", recordsLink: "Daftar rekam medis",
    scope: "Panduan ini menjelaskan persiapan dan koordinasi, bukan penilaian diagnosis atau kelayakan terapi. Keputusan medis dibuat oleh dokter yang menangani. Janji temu, penerimaan rumah sakit, dan hasil tidak dijamin.",
    guides: {
      mdt: {
        label: "Pendapat kedua limfoma", title: "Pendapat kedua limfoma dan koordinasi MDT di China",
        description: "Persiapan pendapat kedua limfoma di Guangzhou: rekam medis, pertanyaan untuk spesialis, dan koordinasi diskusi multidisiplin bersama H&C Care.",
        sections: [
          { title: "Tentukan pertanyaan utama Anda", text: "Jelaskan apakah keluarga ingin memahami diagnosis, membahas rencana yang diusulkan, atau mencari pendapat setelah kekambuhan atau respons yang kurang memuaskan. Sertakan saran dokter saat ini dan keputusan yang mendesak. Pendapat kedua tidak otomatis berarti mengganti pengobatan." },
          { title: "Siapkan rekam limfoma bertanggal", text: "Kumpulkan laporan biopsi, patologi, IHC, PET/CT atau pencitraan lain, tes molekuler yang tersedia, dan riwayat terapi. Tambahkan hasil darah terbaru, obat, dan kondisi saat ini. Beri tahu apakah preparat, blok jaringan, dan berkas citra asli tersedia; tim penerima menentukan kebutuhannya." },
          { title: "Sesuaikan bentuk penilaian dengan kasus", text: "Kami menata informasi dan mengoordinasikan komunikasi dengan spesialis limfoma yang sesuai di Guangdong, terutama Guangzhou. Tim penerima memastikan apakah konsultasi individual, tinjauan patologi, atau diskusi multidisiplin tersedia dan sesuai. Dokter tertentu atau pertemuan MDT tidak otomatis termasuk." },
          { title: "Sepakati format dan hasil layanan", text: "Sebelum koordinasi berbayar, pastikan tim penerima, format konsultasi, dukungan bahasa, biaya, dan apakah pendapat klinis tertulis termasuk. Kami membantu menyiapkan pertanyaan dan persyaratan administrasi. Pendapat medis diberikan oleh dokter." },
          { title: "Perjelas langkah berikutnya", text: "Setelah konsultasi, kami dapat menata dokumen dan pertanyaan lanjutan untuk dokter Anda. Jika kunjungan langsung diusulkan, pastikan penerimaan, kelayakan perjalanan, dan biaya sebelum mengatur perjalanan. Jangan menghentikan terapi yang diresepkan sambil menunggu koordinasi." },
        ], questions: [
          { title: "Bisakah dimulai sebelum bepergian?", text: "Ya. Rekam medis dan permintaan koordinasi dapat disiapkan dari negara Anda. Ketersediaan konsultasi jarak jauh harus dikonfirmasi dengan institusi penerima." },
          { title: "Bagaimana jika laporan belum lengkap?", text: "Unggah laporan yang tersedia melalui portal anggota dan tandai yang belum ada. Kami membantu membuat daftar permintaan dokumen. Hanya tim klinis yang menentukan kecukupan informasi." },
          { title: "Apakah MDT menjamin pengobatan di China?", text: "Tidak. Peninjauan berkas, penerimaan rumah sakit, kelayakan terapi, dan pendaftaran penelitian merupakan keputusan terpisah dari tim medis yang bertanggung jawab." },
        ], related: ["records", "experts", "journey", "membership"], sources: [secondOpinionSource],
      },
      journey: {
        label: "Persiapan ke Guangzhou", title: "Perawatan kanker di Guangzhou: panduan pasien internasional",
        description: "Siapkan rekam medis, komunikasi spesialis, janji temu, pembayaran, perjalanan, dan tindak lanjut untuk koordinasi perawatan kanker di Guangzhou, China.",
        sections: [
          { title: "Sebelum memesan perjalanan", text: "Sampaikan negara, bahasa, ringkasan diagnosis, dan kebutuhan koordinasi. Siapkan dokumen dan izin pasien jika diperlukan. Pastikan tim penerima dan langkah penilaian berikutnya sebelum pemesanan yang tidak dapat dikembalikan; pertanyaan awal bukan penerimaan rumah sakit." },
          { title: "Layanan dan anggaran", text: "Pilih dukungan sebelum kedatangan, selama di China, atau setelah pulang secara terpisah sesuai kebutuhan. Sepakati lingkup dan harga secara tertulis. Konsultasi, tes, obat, dan pengobatan ditagih terpisah oleh penyedia; tanyakan perkiraan, metode pembayaran, dan ketentuan pembatalan." },
          { title: "Kedatangan dan rumah sakit", text: "Pastikan janji temu, instruksi masuk, dokumen, penerjemahan, akomodasi, dan transportasi. Tanyakan kelayakan perjalanan kepada dokter dan cek syarat masuk terkini pada otoritas resmi. Kami tidak menjamin visa, tempat tidur, atau tanggal rawat inap." },
          { title: "Selama kunjungan dan setelah kembali", text: "Simpan tagihan, hasil pemeriksaan, resep, dan dokumen pemulangan. Sepakati rencana tindak lanjut serta kontak untuk masalah medis mendesak dengan tim klinis. Dalam lingkup yang dibeli, kami mengoordinasikan terjemahan, berkas, janji temu, dan komunikasi." },
        ], questions: [
          { title: "Bisakah membeli satu tahap saja?", text: "Ya. Tahap bersifat opsional dan dapat dibeli terpisah. Penawaran berlaku untuk siklus rawat inap dan lingkup yang disepakati; dukungan rawat inap berikutnya disepakati lagi." },
          { title: "Bisakah keluarga mewakili saya?", text: "Ya, dengan izin pasien. Sampaikan hubungan, kontak utama, dan bahasa agar tanggung jawab komunikasi jelas." },
        ], related: ["records", "membership", "mdt"], sources: [],
      },
      records: {
        label: "Daftar rekam medis", title: "Rekam medis untuk pendapat kedua kanker di China",
        description: "Daftar praktis patologi, pencitraan, tes genetik, riwayat terapi, dan obat untuk pasien kanker internasional yang menyiapkan konsultasi spesialis.",
        sections: [
          { title: "Diagnosis, biopsi, dan patologi", text: "Sertakan diagnosis awal, laporan biopsi atau patologi operasi, dan IHC yang tersedia. Catat tempat penyimpanan preparat atau blok jaringan. Jangan kirim spesimen sebelum institusi penerima memastikan persyaratannya." },
          { title: "Pencitraan dan pemeriksaan", text: "Sertakan laporan PET/CT, CT, atau MRI bertanggal dan pembanding sebelumnya. Simpan berkas citra asli. Kirim hasil genetik/NGS atau biomarker lain sebagai laporan laboratorium lengkap, bukan tangkapan layar pilihan." },
          { title: "Darah terbaru dan kondisi saat ini", text: "Jika tersedia, sertakan hasil darah 2–4 minggu terakhir beserta satuan dan nilai rujukan. Jelaskan gejala, aktivitas harian, dan perubahan terbaru. Dokter penerima menentukan kebutuhan tes baru atau tambahan." },
          { title: "Linimasa terapi dan obat", text: "Catat operasi, radioterapi, dan terapi obat dengan tanggal, nama, jumlah siklus jika diketahui, evaluasi respons, dan alasan berhenti. Tambahkan obat dan dosis saat ini, alergi, penyakit penyerta penting, dan ringkasan pemulangan." },
          { title: "Pertanyaan dan izin", text: "Tuliskan pertanyaan untuk spesialis, bahasa, dan kontak utama. Wakil keluarga perlu memastikan izin pasien. Identitas diminta hanya bila diperlukan untuk pengaturan tertentu melalui kanal yang disepakati." },
          { title: "Penataan dan unggahan", text: "Pastikan semua halaman, tanggal, dan rincian laboratorium terbaca. Simpan laporan asli bersama terjemahan. Setelah registrasi gratis, simpan kasus dan unggah PDF, JPG, atau PNG hingga 10 MB per berkas. Tanyakan cara transfer berkas citra besar kepada tim dukungan. Dokumen yang belum lengkap tidak menghalangi pertanyaan awal." },
        ], questions: [], related: ["mdt", "journey", "membership"], sources: [pathologySource],
      },
    },
  },
  ms: {
    eyebrow: "Panduan pesakit antarabangsa", publishedBy: "Diterbitkan oleh H&C Care Advisory Limited", updated: "Dikemas kini", questions: "Soalan lazim", related: "Sediakan langkah seterusnya", sources: "Bacaan lanjut", recordsLink: "Senarai rekod perubatan",
    scope: "Panduan ini menerangkan persediaan dan penyelarasan, bukan penilaian diagnosis atau kesesuaian rawatan. Keputusan perubatan dibuat oleh doktor yang merawat. Janji temu, kemasukan dan hasil tidak dijamin.",
    guides: {
      mdt: {
        label: "Pendapat kedua limfoma", title: "Pendapat kedua limfoma dan penyelarasan MDT di China",
        description: "Persediaan pendapat kedua limfoma di Guangzhou: rekod perubatan, soalan untuk pakar dan penyelarasan perbincangan pelbagai disiplin oleh H&C Care.",
        sections: [
          { title: "Tentukan soalan utama anda", text: "Nyatakan sama ada keluarga mahu memahami diagnosis, membincangkan rancangan yang dicadangkan atau mendapatkan pendapat selepas penyakit berulang atau tindak balas tidak memuaskan. Sertakan cadangan doktor dan keputusan yang terikat masa. Pendapat kedua tidak semestinya bermakna menukar rawatan." },
          { title: "Sediakan rekod limfoma bertarikh", text: "Kumpulkan laporan biopsi, patologi, IHC, PET/CT atau pengimejan lain, ujian molekul yang tersedia dan sejarah rawatan. Tambah ujian darah terkini, ubat dan keadaan semasa. Maklumkan jika slaid, blok tisu dan fail imej asal boleh diperoleh; pasukan penerima menentukan keperluannya." },
          { title: "Padankan penilaian dengan kes", text: "Kami menyusun maklumat dan menyelaras pertanyaan kepada pakar limfoma yang sesuai di Guangdong, khususnya Guangzhou. Pasukan penerima mengesahkan ketersediaan serta kesesuaian konsultasi individu, semakan patologi atau perbincangan pelbagai disiplin. Doktor tertentu atau mesyuarat MDT tidak termasuk secara automatik." },
          { title: "Sahkan bentuk dan hasil perkhidmatan", text: "Sebelum penyelarasan berbayar, sahkan pasukan penerima, bentuk konsultasi, sokongan bahasa, yuran dan sama ada pendapat klinikal bertulis termasuk. Kami membantu menyediakan soalan dan keperluan pentadbiran. Pendapat perubatan diberikan oleh doktor." },
          { title: "Jelaskan tindakan susulan", text: "Selepas konsultasi, kami boleh menyusun dokumen dan soalan susulan untuk doktor anda. Jika lawatan bersemuka dicadangkan, sahkan penerimaan, kesesuaian perjalanan dan kos dahulu. Jangan hentikan rawatan yang dipreskripsikan semasa menunggu penyelarasan." },
        ], questions: [
          { title: "Bolehkah bermula sebelum perjalanan?", text: "Ya. Rekod dan permintaan penyelarasan boleh disediakan dari negara anda. Ketersediaan konsultasi jarak jauh perlu disahkan dengan institusi penerima." },
          { title: "Bagaimana jika laporan tidak lengkap?", text: "Muat naik laporan yang ada melalui portal ahli dan nyatakan kekurangan. Kami membantu menyediakan senarai permintaan dokumen. Hanya pasukan klinikal menentukan kecukupan maklumat." },
          { title: "Adakah MDT menjamin rawatan di China?", text: "Tidak. Semakan rekod, penerimaan hospital, kelayakan rawatan dan penyertaan kajian ialah keputusan berasingan oleh pasukan perubatan yang bertanggungjawab." },
        ], related: ["records", "experts", "journey", "membership"], sources: [secondOpinionSource],
      },
      journey: {
        label: "Persediaan ke Guangzhou", title: "Penjagaan kanser di Guangzhou: panduan pesakit antarabangsa",
        description: "Sediakan rekod, komunikasi pakar, janji temu, pembayaran, perjalanan dan susulan untuk penyelarasan penjagaan kanser di Guangzhou, China.",
        sections: [
          { title: "Sebelum menempah perjalanan", text: "Maklumkan negara, bahasa, ringkasan diagnosis dan sokongan diperlukan. Sediakan rekod dan kebenaran pesakit jika perlu. Sahkan pasukan penerima serta langkah penilaian seterusnya sebelum tempahan tidak boleh dibayar balik; pertanyaan bukan penerimaan hospital." },
          { title: "Perkhidmatan dan bajet", text: "Pilih sokongan sebelum ketibaan, semasa di China atau selepas discaj secara berasingan mengikut keperluan. Sahkan skop dan harga secara bertulis. Konsultasi, ujian, ubat dan rawatan dicaj berasingan oleh penyedia; dapatkan anggaran, cara bayaran dan syarat pembatalan." },
          { title: "Ketibaan dan hospital", text: "Sahkan janji temu, arahan kemasukan, dokumen, terjemahan, penginapan dan pengangkutan. Tanya doktor tentang kesesuaian perjalanan dan semak syarat kemasukan terkini dengan pihak rasmi. Kami tidak menjamin visa, katil atau tarikh kemasukan." },
          { title: "Semasa lawatan dan selepas pulang", text: "Simpan bil, keputusan, preskripsi dan dokumen discaj. Sahkan rancangan susulan serta saluran bagi masalah perubatan segera dengan pasukan klinikal. Dalam skop yang dibeli, kami menyelaras terjemahan, rekod, janji temu dan komunikasi dengan pasukan penerima." },
        ], questions: [
          { title: "Bolehkah membeli satu peringkat sahaja?", text: "Ya, setiap peringkat adalah pilihan dan boleh dibeli berasingan. Sebut harga merujuk kitaran kemasukan dan skop yang dipersetujui; sokongan bagi kemasukan lain dipersetujui secara berasingan." },
          { title: "Bolehkah ahli keluarga mewakili saya?", text: "Ya, dengan kebenaran pesakit. Nyatakan hubungan, orang hubungan utama dan bahasa supaya tanggungjawab komunikasi dapat dipersetujui." },
        ], related: ["records", "membership", "mdt"], sources: [],
      },
      records: {
        label: "Senarai rekod perubatan", title: "Rekod perubatan untuk pendapat kedua kanser di China",
        description: "Senarai praktikal patologi, pengimejan, ujian genetik, sejarah rawatan dan ubat untuk pesakit kanser antarabangsa yang menyediakan pertanyaan pakar.",
        sections: [
          { title: "Diagnosis, biopsi dan patologi", text: "Sertakan diagnosis asal, laporan biopsi atau patologi pembedahan dan laporan IHC tersedia. Nyatakan tempat slaid atau blok tisu disimpan. Jangan hantar spesimen sebelum institusi penerima mengesahkan keperluannya." },
          { title: "Pengimejan dan ujian", text: "Sertakan laporan PET/CT, CT atau MRI bertarikh serta perbandingan terdahulu. Simpan fail imej asal. Berikan laporan genetik/NGS atau biomarker lain yang lengkap, bukan tangkap layar terpilih." },
          { title: "Darah terkini dan keadaan semasa", text: "Jika ada, sertakan keputusan darah 2–4 minggu lalu dengan unit dan julat rujukan. Huraikan gejala, aktiviti harian dan perubahan terkini. Doktor penerima menentukan keperluan ujian baharu atau tambahan." },
          { title: "Garis masa rawatan dan ubat", text: "Senaraikan pembedahan, radioterapi dan ubat dengan tarikh, nama, bilangan kitaran jika diketahui, penilaian respons dan sebab berhenti. Tambah ubat serta dos semasa, alahan, penyakit lain yang penting dan ringkasan discaj." },
          { title: "Soalan dan kebenaran", text: "Nyatakan soalan untuk pakar, bahasa dan orang hubungan. Wakil keluarga perlu mengesahkan kebenaran pesakit. Dokumen pengenalan diminta hanya apabila perlu bagi urusan tertentu melalui saluran yang dipersetujui." },
          { title: "Penyusunan dan muat naik", text: "Pastikan semua halaman, tarikh dan butiran makmal jelas. Simpan laporan asal bersama terjemahan. Selepas pendaftaran percuma, simpan kes dan muat naik PDF, JPG atau PNG sehingga 10 MB setiap fail. Hubungi sokongan untuk pemindahan fail imej besar. Rekod tidak lengkap tidak menghalang pertanyaan awal." },
        ], questions: [], related: ["mdt", "journey", "membership"], sources: [pathologySource],
      },
    },
  },
};
