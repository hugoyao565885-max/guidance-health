import { localeMeta, type Locale } from "./site";

export type ServiceStage = "preArrival" | "duringStay" | "afterDischarge";
export type ServicePlan = { stage: ServiceStage; name: string; fit: string; items: string[] };
type Item = { title: string; text: string };

export type ServiceContent = {
  eyebrow: string;
  title: string;
  body: string;
  quote: string;
  note: string;
  plans: ServicePlan[];
  modules: string[];
  pricing: {
    title: string;
    body: string;
    combinationLabel: string;
    allStagesLabel: string;
    inChinaAfterLabel: string;
    allStagesNote: string;
    inChinaAfterNote: string;
    vehicles: [string, string];
    unit: string;
  };
  conditionsTitle: string;
  conditions: Item[];
  scopeTitle: string;
  included: Item;
  excluded: Item;
};

export const servicePrices = {
  currency: "CNY",
  quotedOn: "2026-10-10",
  preArrival: 2880,
  duringStay: { fiveSeat: 3580, business: 3730 },
  afterDischarge: 1180,
} as const;

export function serviceCombinationTotal(vehicle: keyof typeof servicePrices.duringStay, includePreArrival: boolean) {
  return (includePreArrival ? servicePrices.preArrival : 0) + servicePrices.duringStay[vehicle] + servicePrices.afterDischarge;
}

export function formatServiceAmount(amount: number, locale: Locale) {
  return new Intl.NumberFormat(localeMeta[locale].htmlLang, { maximumFractionDigits: 0 }).format(amount);
}

export const serviceContent: Record<Locale, ServiceContent> = {
  en: {
    eyebrow: "Service packages · CNY",
    title: "Choose the stages of support you need",
    body: "Pre-arrival, in-China and after-discharge support can be purchased separately or combined according to your needs. You do not have to purchase all three stages. Services apply to one agreed hospital admission cycle, not an annual membership.",
    quote: "Enquire about this stage",
    note: "Prices are in Chinese yuan (CNY), per patient and per hospital admission cycle. Confirm the staff arrangements, language coverage, dates, payment and cancellation terms in writing before payment. Included services are not charged twice; additional services require an agreed quote. We coordinate care; licensed clinicians provide assessment and medical advice.",
    plans: [
      { stage: "preArrival", name: "Before coming to China", fit: "Case preparation and travel readiness; available as a separate stage.", items: ["Create a case file, organize and translate the agreed records, and request missing documents", "Coordinate specialist record assessment and one online consultation, including that consultation fee and Indonesian interpretation", "Help arrange a medical institution's invitation letter and confirm arrival dates and flights"] },
      { stage: "duringStay", name: "During your stay in China", fit: "Hospital and daily-life coordination; choose one airport pickup vehicle option.", items: ["One one-way Guangzhou airport pickup, including tolls, parking and driver fees", "Hospital accompaniment: 24 cumulative hours; Indonesian medical interpretation: 24 cumulative hours, recorded separately", "Daily-life assistance and admission coordination over 7 days, by agreed schedule", "One accompanied inter-hospital round trip including transport; accompaniment and interpretation use the same hour allowances"] },
      { stage: "afterDischarge", name: "After discharge", fit: "Return-travel coordination and communication for 15 days after discharge.", items: ["Help organize and submit documents requested by the insurer", "Coordinate return-travel information and discharge arrangements; airport drop-off is arranged separately", "Support case-related follow-up communication and questions during agreed contact hours for 15 days after discharge"] },
    ],
    modules: ["Lymphoma MDT coordination", "Recovery & follow-up support", "Surgical pathway coordination"],
    pricing: { title: "Example service combination totals", body: "These examples are not required bundles. Purchase any stage separately or combine the stages you need. For in-China support, choose either a 5-seat car or a business vehicle for airport pickup; only that stage's price changes, not the service allowances.", combinationLabel: "Service combination", allStagesLabel: "All three stages", inChinaAfterLabel: "In-China + after discharge", allStagesNote: "Pre-arrival, during the stay and after discharge.", inChinaAfterNote: "Two selected stages, without pre-arrival support.", vehicles: ["5-seat car pickup", "Business vehicle pickup"], unit: "Per patient, per admission" },
    conditionsTitle: "Service allowances and arrangements",
    conditions: [
      { title: "Hours and days are limited", text: "Accompaniment and interpretation each have a separate 24-hour allowance, recorded by actual start and end time. Seven days of life assistance and admission coordination follow an agreed schedule; this is not 24-hour bedside care. Additional hours or days are quoted before service." },
      { title: "Language and specialist appointments", text: "The quoted interpretation is Indonesian. Other languages, additional consultations or specifically requested specialists require confirmation of availability and any additional fee. One agreed online consultation is included only in the pre-arrival stage; it is not automatically included in the other stages." },
      { title: "Records and invitation letters", text: "Record preparation follows the agreed receipt list. Large additional batches, extra languages, certified translation or notarization require an agreed quote. Invitation letters are issued by medical institutions; any separate issuance fee is confirmed in advance. A letter does not guarantee a visa or admission." },
      { title: "Transport and daily life", text: "Airport pickup and one inter-hospital return trip are included as listed. Help booking city rides is free; other actual fares, accommodation, meals and airport drop-off are not included." },
      { title: "After discharge", text: "The after-discharge package covers insurer documentation, return-travel coordination and communication for 15 days after discharge. It is not an insurance policy and does not guarantee reimbursement. Clinical follow-up advice remains the treating team's responsibility." },
      { title: "Choose stages for each service cycle", text: "Each stage can be purchased separately or combined with others. For a subsequent hospital admission, select and purchase only the stages you need for that new cycle, with newly agreed dates and service allowances. This is not year-round or unlimited care." },
    ],
    scopeTitle: "What the package fee covers",
    included: { title: "Included in the selected stages", text: "Only the services listed in the stages you purchase are included. The pre-arrival stage includes one online specialist consultation with Indonesian interpretation; transport is included as listed in the in-China stage. Hours, dates, staffing and language arrangements are confirmed in the written service agreement." },
    excluded: { title: "Not included unless expressly agreed", text: "Other medical consultations, hospital care, tests, medicines, treatment, surgery, emergency services, accommodation, meals, flights, visa fees, airport drop-off and services beyond the stated allowances. Additional fees must be confirmed before the added service begins." },
  },
  "zh-hant": {
    eyebrow: "服務套餐 · 人民幣",
    title: "三階段服務，按需要選購",
    body: "來華前、來華期間及治療後離院服務，可按實際需要單獨購買或組合購買，無須一次購買全部三階段。服務以約定的一次住院週期為範圍，不是年度會員費。",
    quote: "諮詢這個階段",
    note: "報價以人民幣（CNY）計算，按每位患者、每次住院週期收取。付款前以書面確認人員安排、語言範圍、服務日期、付款及取消條款。已包含的服務不重複收費；新增服務先確認報價。公司負責協調，醫療評估及建議由執業醫生提供。",
    plans: [
      { stage: "preArrival", name: "來華前", fit: "建檔評估與來華準備，可單獨選購。", items: ["建立患者檔案，整理及翻譯約定病歷，溝通補充資料", "協調專科醫生病歷評估及一次線上面診，包含該次面診費與印尼語翻譯", "協助醫療機構邀請函辦理，確認抵達日期及航班"] },
      { stage: "duringStay", name: "來華期間", fit: "在華就醫與生活協調；接機車型二選一。", items: ["廣州機場單程接機一次，包含高速費、停車費及司機費", "醫院陪診累計 24 小時，醫患溝通印尼語翻譯累計 24 小時，分別計時", "生活協助及住院協調 7 日，按約定排班提供", "跨院陪同及往返交通一次，陪診與翻譯時數計入上述對應額度"] },
      { stage: "afterDischarge", name: "治療後離院", fit: "返程銜接及離院後 15 天內溝通支持。", items: ["按保險機構要求協助收集、整理及提交就醫資料", "協調返程資訊、航班及離院銜接；送機另行安排", "離院後 15 天內，在約定聯絡時段協助個案隨訪溝通與問題銜接"] },
    ],
    modules: ["淋巴瘤 MDT 協調", "康復與隨訪支持", "手術路徑協調"],
    pricing: { title: "服務組合參考總價", body: "以下組合僅供參考，並非必須整套購買。您可以單獨選購任一階段，或按需要組合。選購來華期間服務時，5 座車與商務車接機方案二選一，其他服務額度相同。", combinationLabel: "服務組合", allStagesLabel: "三階段組合", inChinaAfterLabel: "來華期間＋治療後離院", allStagesNote: "來華前、來華期間及治療後離院。", inChinaAfterNote: "選購兩個階段，不含來華前服務。", vehicles: ["5 座車接機", "商務車接機"], unit: "每位患者／每次住院" },
    conditionsTitle: "服務額度與安排說明",
    conditions: [
      { title: "時數與天數有明確額度", text: "陪診及翻譯各累計 24 小時，按實際開始與結束時間分別記錄。生活協助及住院協調為 7 日，按約定排班提供，不代表連續 24 小時駐院。超出時數或天數，先確認新增服務報價。" },
      { title: "語言與專科預約", text: "報價包含的翻譯語種為印尼語。其他語種、增加面診或指定特殊專家，需另行確認可安排性與費用。一次約定線上面診僅包含於來華前階段，其他階段不自動包含面診。" },
      { title: "病歷與邀請函", text: "建檔按約定的本次資料清單整理。新增大量資料、額外語種、認證翻譯或公證，先確認範圍及費用。邀請函由醫療機構出具，如另收出具費，會提前確認；邀請函不保證簽證或入院。" },
      { title: "交通與生活費用", text: "包含列明的一次接機及一次跨院往返。市區叫車協助免費，其他實際車費、住宿、餐飲及送機費用不包含在套餐內。" },
      { title: "離院後服務邊界", text: "治療後離院套餐包含保險資料、返程協調及離院後 15 天內溝通。這不是保險產品，不保證理賠。臨床隨訪建議仍由接診醫療團隊負責。" },
      { title: "按每次服務週期選購", text: "各階段可單獨購買或組合購買。再次住院時，按新週期的實際需要重新選購所需階段，另行確認日期與服務額度。本報價不是全年或無限次服務。" },
    ],
    scopeTitle: "套餐費用包含與不包含",
    included: { title: "所購階段包含", text: "僅包含您選購階段內列明的服務。來華前階段含一次專科線上面診及印尼語翻譯；來華期間階段包含列明的交通。時數、日期、人員及語言安排以書面服務協議確認。" },
    excluded: { title: "除非另有明確約定，否則不包含", text: "其他面診、醫院診療、檢查、藥物、治療、手術、急症服務、住宿、餐飲、機票、簽證、送機及超出額度的服務。新增費用須在額外服務開始前確認。" },
  },
  ru: {
    eyebrow: "Пакеты услуг · CNY",
    title: "Выберите нужные этапы поддержки",
    body: "Подготовку до приезда, поддержку в Китае и после выписки можно приобрести отдельно или сочетать по потребностям. Покупать все три этапа не обязательно. Услуги относятся к одному согласованному циклу госпитализации, а не годовому абонементу.",
    quote: "Узнать об этом этапе",
    note: "Цены указаны в китайских юанях (CNY) на пациента и один цикл госпитализации. До оплаты письменно подтвердите персонал, язык, даты, оплату и отмену. Включенные услуги не оплачиваются повторно; дополнительные услуги требуют согласованной цены. Мы координируем, а медицинскую оценку и рекомендации дают лицензированные врачи.",
    plans: [
      { stage: "preArrival", name: "До приезда в Китай", fit: "Подготовка случая и поездки; можно приобрести отдельно.", items: ["Создание файла, систематизация и перевод согласованных документов, запрос недостающих сведений", "Координация оценки специалистом и одной онлайн-консультации, включая ее стоимость и индонезийский перевод", "Помощь с приглашением от медицинского учреждения, датой приезда и рейсом"] },
      { stage: "duringStay", name: "Во время пребывания", fit: "Координация больницы и быта; выберите один вариант трансфера.", items: ["Один трансфер из аэропорта Гуанчжоу, включая платные дороги, парковку и водителя", "Сопровождение в больнице: суммарно 24 часа; индонезийский медицинский перевод: отдельно 24 часа", "Бытовая помощь и координация госпитализации на 7 дней по согласованному графику", "Одна поездка между больницами туда и обратно с транспортом; сопровождение и перевод расходуют указанные часы"] },
      { stage: "afterDischarge", name: "После выписки", fit: "Координация возвращения и коммуникация в течение 15 дней после выписки.", items: ["Помощь в подготовке и подаче документов, запрошенных страховщиком", "Координация обратной поездки и выписки; трансфер в аэропорт организуется отдельно", "Коммуникация по случаю и передача вопросов в согласованные часы в течение 15 дней после выписки"] },
    ],
    modules: ["Координация MDT по лимфомам", "Поддержка восстановления и наблюдения", "Координация хирургического маршрута"],
    pricing: { title: "Примеры стоимости сочетаний услуг", body: "Эти сочетания не обязательны: можно приобрести любой этап отдельно или выбрать нужные этапы вместе. Для поддержки в Китае выберите 5-местный автомобиль или бизнес-трансфер из аэропорта. Меняется только цена этого этапа, а не объем услуг.", combinationLabel: "Сочетание услуг", allStagesLabel: "Все три этапа", inChinaAfterLabel: "В Китае + после выписки", allStagesNote: "До приезда, во время пребывания и после выписки.", inChinaAfterNote: "Два выбранных этапа без подготовки до приезда.", vehicles: ["5-местный автомобиль", "Бизнес-трансфер"], unit: "На пациента и госпитализацию" },
    conditionsTitle: "Лимиты и организация услуг",
    conditions: [
      { title: "Ограниченные часы и дни", text: "Сопровождение и перевод имеют отдельные лимиты по 24 часа, учитываемые по фактическому времени. Бытовая помощь и координация госпитализации на 7 дней предоставляются по графику, а не круглосуточно у постели. Дополнительные часы и дни согласуются по цене заранее." },
      { title: "Язык и консультации", text: "В стоимость включен индонезийский перевод. Другие языки, дополнительные консультации или конкретные специалисты требуют подтверждения доступности и доплаты. Одна согласованная онлайн-консультация включена только в этап до приезда; другие этапы не включают ее автоматически." },
      { title: "Документы и приглашение", text: "Документы готовятся по согласованному перечню. Большие дополнительные объемы, другие языки, заверенный перевод и нотариальные услуги оплачиваются по отдельному согласованию. Приглашение выдает медицинское учреждение; возможный отдельный сбор подтверждается заранее. Виза и госпитализация не гарантируются." },
      { title: "Транспорт и быт", text: "Включены указанный трансфер из аэропорта и одна межбольничная поездка туда и обратно. Помощь с городским такси бесплатна; другие поездки, проживание, питание и трансфер в аэропорт не включены." },
      { title: "После выписки", text: "Пакет охватывает страховые документы, обратную поездку и коммуникацию в течение 15 дней после выписки. Это не страховой полис и не гарантия возмещения. Медицинские рекомендации дает лечащая команда." },
      { title: "Выбор этапов для каждого цикла", text: "Этапы можно приобретать отдельно или вместе. При следующей госпитализации выберите и оплатите только необходимые этапы для нового цикла, согласовав новые даты и лимиты. Это не годовой или безлимитный пакет." },
    ],
    scopeTitle: "Что покрывает стоимость",
    included: { title: "В выбранных этапах", text: "Только услуги, перечисленные в приобретенных этапах. Этап до приезда включает одну онлайн-консультацию специалиста с индонезийским переводом; этап в Китае включает указанный транспорт. Часы, даты, персонал и язык подтверждаются письменно." },
    excluded: { title: "Не включено без отдельного соглашения", text: "Другие консультации, больничное лечение, обследования, лекарства, операции, экстренная помощь, жилье, питание, авиабилеты, визы, трансфер в аэропорт и услуги сверх лимитов. Доплаты подтверждаются до начала дополнительных услуг." },
  },
  ar: {
    eyebrow: "باقات الخدمات · CNY",
    title: "اختر مراحل الدعم التي تحتاجها",
    body: "يمكن شراء دعم ما قبل القدوم وأثناء الإقامة في الصين وما بعد الخروج بشكل منفصل أو معا حسب حاجتك. لا يلزم شراء المراحل الثلاث كلها. الخدمات لدورة دخول واحدة متفق عليها وليست عضوية سنوية.",
    quote: "استفسر عن هذه المرحلة",
    note: "الأسعار باليوان الصيني (CNY) لكل مريض ولكل دورة دخول إلى المستشفى. يجب تأكيد الموظفين واللغة والتواريخ والدفع والإلغاء كتابيا قبل الدفع. لا تفرض رسوم مرتين على الخدمات المشمولة؛ الخدمات الإضافية تتطلب سعرا متفقا عليه. نقدم التنسيق ويقدم الأطباء المرخصون التقييم والنصيحة الطبية.",
    plans: [
      { stage: "preArrival", name: "قبل القدوم إلى الصين", fit: "تجهيز الملف والاستعداد للسفر؛ يمكن شراء المرحلة منفصلة.", items: ["إنشاء ملف وتنظيم وترجمة الوثائق المتفق عليها وطلب المعلومات الناقصة", "تنسيق تقييم المختص واستشارة واحدة عبر الإنترنت تشمل رسومها والترجمة الإندونيسية", "المساعدة في خطاب دعوة من مؤسسة طبية وتأكيد موعد الوصول والرحلة"] },
      { stage: "duringStay", name: "أثناء الإقامة في الصين", fit: "تنسيق المستشفى والمعيشة؛ اختر نوع سيارة الاستقبال.", items: ["استقبال واحد باتجاه واحد من مطار غوانغجو يشمل رسوم الطرق والمواقف والسائق", "مرافقة بالمستشفى لمدة 24 ساعة تراكمية وترجمة طبية إندونيسية لمدة 24 ساعة منفصلة", "مساعدة معيشية وتنسيق الدخول لمدة 7 أيام حسب الجدول المتفق عليه", "رحلة واحدة بين مستشفيين ذهابا وإيابا تشمل النقل؛ تحتسب المرافقة والترجمة من الساعات المحددة"] },
      { stage: "afterDischarge", name: "بعد الخروج من المستشفى", fit: "تنسيق العودة والتواصل لمدة 15 يوما بعد الخروج.", items: ["المساعدة في تنظيم وتقديم الوثائق المطلوبة من شركة التأمين", "تنسيق معلومات العودة والخروج؛ النقل إلى المطار يرتب بشكل منفصل", "التواصل بشأن الحالة وإحالة الأسئلة خلال ساعات الاتصال المتفق عليها لمدة 15 يوما بعد الخروج"] },
    ],
    modules: ["تنسيق MDT للّيمفوما", "دعم التعافي والمتابعة", "تنسيق المسار الجراحي"],
    pricing: { title: "أمثلة لإجمالي مجموعات الخدمات", body: "هذه أمثلة وليست باقات إلزامية. يمكنك شراء أي مرحلة منفصلة أو جمع المراحل المطلوبة. لدعم الإقامة اختر سيارة بخمسة مقاعد أو سيارة أعمال للاستقبال؛ يختلف سعر هذه المرحلة فقط وحدود الخدمات متساوية.", combinationLabel: "مجموعة الخدمات", allStagesLabel: "المراحل الثلاث", inChinaAfterLabel: "أثناء الإقامة + بعد الخروج", allStagesNote: "قبل القدوم وأثناء الإقامة وبعد الخروج.", inChinaAfterNote: "مرحلتان مختارتان دون دعم ما قبل القدوم.", vehicles: ["سيارة بخمسة مقاعد", "سيارة أعمال"], unit: "لكل مريض ولكل دخول" },
    conditionsTitle: "حدود الخدمات وترتيباتها",
    conditions: [
      { title: "ساعات وأيام محددة", text: "للمرافقة والترجمة حدان منفصلان قدر كل منهما 24 ساعة، يسجلان حسب البداية والنهاية الفعلية. المساعدة المعيشية وتنسيق الدخول لمدة 7 أيام وفق جدول، وليست رعاية مستمرة بجانب السرير. تؤكد أسعار الساعات والأيام الإضافية مسبقا." },
      { title: "اللغة والمواعيد", text: "الترجمة المشمولة إندونيسية. اللغات الأخرى والاستشارات الإضافية أو المختصون المحددون تتطلب تأكيد التوفر وأي رسوم إضافية. تشمل مرحلة ما قبل القدوم فقط استشارة واحدة متفقا عليها عبر الإنترنت؛ لا تشملها المراحل الأخرى تلقائيا." },
      { title: "الوثائق وخطاب الدعوة", text: "تنظم السجلات حسب قائمة متفق عليها. الوثائق الإضافية الكبيرة واللغات الأخرى والترجمة المعتمدة والتوثيق تتطلب سعرا متفقا عليه. تصدر المؤسسة الطبية خطاب الدعوة وتؤكد أي رسوم إصدار مسبقا؛ الخطاب لا يضمن التأشيرة أو الدخول." },
      { title: "النقل والمعيشة", text: "يشمل العرض الاستقبال المحدد ورحلة واحدة بين المستشفيات ذهابا وإيابا. المساعدة في طلب سيارات داخل المدينة مجانية؛ الأجور الأخرى والإقامة والطعام والنقل إلى المطار غير مشمولة." },
      { title: "بعد الخروج", text: "تشمل الباقة وثائق التأمين وتنسيق العودة والتواصل لمدة 15 يوما بعد الخروج. ليست وثيقة تأمين ولا تضمن التعويض. النصائح الطبية مسؤولية الفريق المعالج." },
      { title: "اختيار المراحل لكل دورة خدمة", text: "يمكن شراء المراحل منفصلة أو معا. عند دخول لاحق اختر واشتر فقط المراحل اللازمة للدورة الجديدة، مع تأكيد تواريخ وحدود جديدة. هذه ليست خدمة سنوية أو غير محدودة." },
    ],
    scopeTitle: "ما تغطيه رسوم الباقة",
    included: { title: "ضمن المراحل المختارة", text: "فقط الخدمات المذكورة في المراحل التي تشتريها. تشمل مرحلة ما قبل القدوم استشارة مختص واحدة عبر الإنترنت مع ترجمة إندونيسية؛ وتشمل مرحلة الإقامة النقل المحدد. تؤكد الساعات والتواريخ والموظفون واللغة في الاتفاق المكتوب." },
    excluded: { title: "غير مشمول دون اتفاق صريح", text: "الاستشارات الأخرى ورعاية المستشفى والفحوص والأدوية والعلاج والجراحة والطوارئ والإقامة والطعام والطيران والتأشيرة والنقل إلى المطار والخدمات فوق الحدود. تؤكد الرسوم الإضافية قبل بدء الخدمة الإضافية." },
  },
  id: {
    eyebrow: "Paket layanan · CNY",
    title: "Pilih tahap dukungan yang Anda perlukan",
    body: "Dukungan sebelum datang, selama di China, dan setelah keluar rumah sakit dapat dibeli terpisah atau digabung sesuai kebutuhan. Anda tidak harus membeli ketiga tahap. Layanan berlaku untuk satu siklus rawat inap yang disepakati, bukan keanggotaan tahunan.",
    quote: "Tanyakan tahap ini",
    note: "Harga dalam yuan China (CNY), per pasien dan per siklus rawat inap. Konfirmasikan staf, bahasa, tanggal, pembayaran dan pembatalan secara tertulis sebelum membayar. Layanan yang sudah termasuk tidak ditagih dua kali; layanan tambahan memerlukan harga yang disepakati. Kami mengoordinasikan; penilaian dan saran medis diberikan dokter berizin.",
    plans: [
      { stage: "preArrival", name: "Sebelum datang ke China", fit: "Persiapan kasus dan perjalanan; dapat dibeli terpisah.", items: ["Membuat berkas pasien, menyusun dan menerjemahkan dokumen yang disepakati, serta meminta dokumen yang kurang", "Koordinasi penilaian spesialis dan satu konsultasi daring, termasuk biaya konsultasi tersebut dan penerjemahan bahasa Indonesia", "Bantuan surat undangan dari institusi medis dan konfirmasi tanggal kedatangan serta penerbangan"] },
      { stage: "duringStay", name: "Selama berada di China", fit: "Koordinasi rumah sakit dan kehidupan sehari-hari; pilih kendaraan penjemputan.", items: ["Satu penjemputan searah dari bandara Guangzhou, termasuk tol, parkir dan pengemudi", "Pendampingan rumah sakit: total 24 jam; penerjemahan medis bahasa Indonesia: total 24 jam, dicatat terpisah", "Bantuan kehidupan sehari-hari dan koordinasi rawat inap selama 7 hari sesuai jadwal", "Satu perjalanan antar-rumah-sakit pulang-pergi termasuk transportasi; waktu pendampingan dan terjemahan memakai kuota yang sama"] },
      { stage: "afterDischarge", name: "Setelah keluar rumah sakit", fit: "Koordinasi kepulangan dan komunikasi selama 15 hari setelah keluar.", items: ["Bantuan menyiapkan dan mengajukan dokumen yang diminta perusahaan asuransi", "Koordinasi informasi kepulangan dan proses keluar; antar ke bandara diatur terpisah", "Komunikasi tindak lanjut terkait kasus dan pertanyaan selama 15 hari setelah keluar, pada jam kontak yang disepakati"] },
    ],
    modules: ["Koordinasi MDT limfoma", "Dukungan pemulihan dan tindak lanjut", "Koordinasi jalur operasi"],
    pricing: { title: "Contoh total kombinasi layanan", body: "Contoh ini bukan paket wajib. Anda dapat membeli setiap tahap terpisah atau menggabungkan tahap yang dibutuhkan. Untuk dukungan di China, pilih mobil 5 kursi atau kendaraan bisnis; hanya harga tahap tersebut yang berbeda, kuota sama.", combinationLabel: "Kombinasi layanan", allStagesLabel: "Ketiga tahap", inChinaAfterLabel: "Di China + setelah keluar", allStagesNote: "Sebelum datang, selama di China, dan setelah keluar.", inChinaAfterNote: "Dua tahap pilihan tanpa dukungan sebelum datang.", vehicles: ["Penjemputan mobil 5 kursi", "Penjemputan kendaraan bisnis"], unit: "Per pasien, per rawat inap" },
    conditionsTitle: "Kuota dan pengaturan layanan",
    conditions: [
      { title: "Jam dan hari terbatas", text: "Pendampingan dan terjemahan masing-masing memiliki kuota terpisah 24 jam, dicatat dari waktu mulai sampai selesai. Bantuan harian dan koordinasi rawat inap 7 hari mengikuti jadwal, bukan penjagaan di samping tempat tidur 24 jam. Tambahan jam atau hari dikonfirmasi harganya lebih dulu." },
      { title: "Bahasa dan janji spesialis", text: "Terjemahan yang termasuk adalah bahasa Indonesia. Bahasa lain, konsultasi tambahan atau spesialis tertentu memerlukan konfirmasi ketersediaan dan biaya tambahan. Satu konsultasi daring yang disepakati hanya termasuk dalam tahap sebelum datang, bukan otomatis dalam tahap lain." },
      { title: "Dokumen dan surat undangan", text: "Persiapan dokumen mengikuti daftar penerimaan yang disepakati. Dokumen tambahan dalam jumlah besar, bahasa lain, terjemahan tersumpah atau notaris memerlukan penawaran. Surat undangan diterbitkan institusi medis; biaya penerbitan terpisah dikonfirmasi lebih dulu. Surat tidak menjamin visa atau penerimaan rawat inap." },
      { title: "Transportasi dan kehidupan sehari-hari", text: "Termasuk penjemputan dan satu perjalanan antar-rumah-sakit pulang-pergi yang tercantum. Bantuan memesan kendaraan kota gratis; ongkos lain, penginapan, makan dan antar ke bandara tidak termasuk." },
      { title: "Setelah keluar rumah sakit", text: "Paket meliputi dokumen asuransi, koordinasi kepulangan dan komunikasi selama 15 hari setelah keluar. Ini bukan polis asuransi dan tidak menjamin penggantian biaya. Saran klinis tetap tanggung jawab tim yang merawat." },
      { title: "Pilih tahap untuk setiap siklus layanan", text: "Setiap tahap dapat dibeli terpisah atau digabung. Untuk rawat inap berikutnya, pilih dan beli hanya tahap yang dibutuhkan pada siklus baru dengan tanggal dan kuota yang disepakati kembali. Ini bukan layanan tahunan atau tanpa batas." },
    ],
    scopeTitle: "Cakupan biaya paket",
    included: { title: "Termasuk pada tahap yang dipilih", text: "Hanya layanan yang tercantum pada tahap yang Anda beli. Tahap sebelum datang mencakup satu konsultasi spesialis daring dengan penerjemahan bahasa Indonesia; tahap di China mencakup transportasi yang disebutkan. Jam, tanggal, staf dan bahasa dikonfirmasi dalam perjanjian tertulis." },
    excluded: { title: "Tidak termasuk kecuali disepakati jelas", text: "Konsultasi lainnya, perawatan rumah sakit, tes, obat, terapi, operasi, layanan darurat, penginapan, makan, tiket pesawat, visa, antar ke bandara dan layanan di luar kuota. Biaya tambahan dikonfirmasi sebelum layanan tambahan dimulai." },
  },
  ms: {
    eyebrow: "Pakej perkhidmatan · CNY",
    title: "Pilih peringkat sokongan yang diperlukan",
    body: "Sokongan sebelum datang, semasa di China dan selepas keluar hospital boleh dibeli berasingan atau digabung mengikut keperluan. Anda tidak perlu membeli ketiga-tiga peringkat. Perkhidmatan untuk satu kitaran kemasukan yang dipersetujui, bukan keahlian tahunan.",
    quote: "Tanya tentang peringkat ini",
    note: "Harga dalam yuan China (CNY), setiap pesakit dan setiap kitaran kemasukan. Sahkan kakitangan, bahasa, tarikh, pembayaran dan pembatalan secara bertulis sebelum membayar. Perkhidmatan termasuk tidak dicaj dua kali; tambahan memerlukan harga dipersetujui. Kami menyelaras; penilaian dan nasihat perubatan diberi doktor berlesen.",
    plans: [
      { stage: "preArrival", name: "Sebelum datang ke China", fit: "Persediaan kes dan perjalanan; boleh dibeli berasingan.", items: ["Membuka fail, menyusun dan menterjemah dokumen dipersetujui serta meminta maklumat yang kurang", "Menyelaras penilaian pakar dan satu konsultasi dalam talian, termasuk yurannya dan terjemahan bahasa Indonesia", "Membantu surat jemputan institusi perubatan serta mengesahkan tarikh ketibaan dan penerbangan"] },
      { stage: "duringStay", name: "Semasa berada di China", fit: "Koordinasi hospital dan kehidupan harian; pilih kenderaan jemputan.", items: ["Satu jemputan sehala dari lapangan terbang Guangzhou termasuk tol, parkir dan pemandu", "Pengiring hospital: jumlah 24 jam; terjemahan perubatan bahasa Indonesia: jumlah 24 jam, direkod berasingan", "Bantuan harian dan koordinasi kemasukan selama 7 hari mengikut jadual", "Satu perjalanan antara hospital pergi balik termasuk pengangkutan; masa pengiring dan terjemahan menggunakan kuota yang sama"] },
      { stage: "afterDischarge", name: "Selepas keluar hospital", fit: "Koordinasi pulang dan komunikasi selama 15 hari selepas keluar.", items: ["Membantu menyediakan dan mengemukakan dokumen diminta penanggung insurans", "Menyelaras maklumat pulang dan keluar hospital; penghantaran ke lapangan terbang diatur berasingan", "Komunikasi susulan kes dan soalan selama 15 hari selepas keluar pada waktu hubungan dipersetujui"] },
    ],
    modules: ["Koordinasi MDT limfoma", "Sokongan pemulihan dan susulan", "Koordinasi laluan pembedahan"],
    pricing: { title: "Contoh jumlah gabungan perkhidmatan", body: "Contoh ini bukan pakej wajib. Beli mana-mana peringkat berasingan atau gabungkan peringkat yang diperlukan. Untuk sokongan di China, pilih kereta 5 tempat duduk atau kenderaan perniagaan; hanya harga peringkat itu berubah, kuota sama.", combinationLabel: "Gabungan perkhidmatan", allStagesLabel: "Ketiga-tiga peringkat", inChinaAfterLabel: "Di China + selepas keluar", allStagesNote: "Sebelum datang, semasa di China dan selepas keluar.", inChinaAfterNote: "Dua peringkat dipilih tanpa sokongan sebelum datang.", vehicles: ["Kereta 5 tempat duduk", "Kenderaan perniagaan"], unit: "Setiap pesakit, setiap kemasukan" },
    conditionsTitle: "Kuota dan aturan perkhidmatan",
    conditions: [
      { title: "Jam dan hari terhad", text: "Pengiring dan terjemahan mempunyai kuota berasingan 24 jam setiap satu, direkod dari mula hingga tamat. Bantuan harian dan koordinasi kemasukan 7 hari mengikut jadual, bukan jagaan tepi katil 24 jam. Harga jam atau hari tambahan disahkan terlebih dahulu." },
      { title: "Bahasa dan temu janji pakar", text: "Terjemahan termasuk adalah bahasa Indonesia. Bahasa lain, konsultasi tambahan atau pakar tertentu memerlukan pengesahan ketersediaan dan caj tambahan. Satu konsultasi dalam talian dipersetujui hanya termasuk dalam peringkat sebelum datang, bukan secara automatik dalam peringkat lain." },
      { title: "Dokumen dan surat jemputan", text: "Persediaan rekod mengikut senarai dipersetujui. Dokumen tambahan banyak, bahasa lain, terjemahan diperakui atau notari memerlukan sebut harga. Surat jemputan dikeluarkan institusi perubatan; caj pengeluaran berasingan disahkan awal. Surat tidak menjamin visa atau kemasukan." },
      { title: "Pengangkutan dan kehidupan harian", text: "Termasuk jemputan dan satu perjalanan antara hospital pergi balik yang dinyatakan. Bantuan menempah kenderaan bandar percuma; tambang lain, penginapan, makanan dan penghantaran ke lapangan terbang tidak termasuk." },
      { title: "Selepas keluar hospital", text: "Pakej meliputi dokumen insurans, koordinasi pulang dan komunikasi 15 hari selepas keluar. Ia bukan polisi insurans dan tidak menjamin pembayaran tuntutan. Nasihat klinikal tanggungjawab pasukan yang merawat." },
      { title: "Pilih peringkat bagi setiap kitaran", text: "Peringkat boleh dibeli berasingan atau digabung. Bagi kemasukan seterusnya, pilih dan beli hanya peringkat yang diperlukan untuk kitaran baharu dengan tarikh dan kuota dipersetujui semula. Ini bukan perkhidmatan tahunan atau tanpa had." },
    ],
    scopeTitle: "Skop yuran pakej",
    included: { title: "Termasuk dalam peringkat dipilih", text: "Hanya perkhidmatan disenaraikan dalam peringkat yang anda beli. Peringkat sebelum datang merangkumi satu konsultasi pakar dalam talian dengan terjemahan bahasa Indonesia; peringkat di China merangkumi pengangkutan dinyatakan. Jam, tarikh, kakitangan dan bahasa disahkan dalam perjanjian bertulis." },
    excluded: { title: "Tidak termasuk tanpa persetujuan jelas", text: "Konsultasi lain, rawatan hospital, ujian, ubat, terapi, pembedahan, kecemasan, penginapan, makanan, penerbangan, visa, penghantaran ke lapangan terbang dan layanan melebihi kuota. Caj tambahan disahkan sebelum layanan tambahan bermula." },
  },
};
