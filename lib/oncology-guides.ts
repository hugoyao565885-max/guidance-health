import type { Locale } from "./site";
import type { PatientGuide } from "./patient-guides";

export const oncologyGuideTopics = ["lymphoma", "immunotherapy", "cell-therapy"] as const;
export type OncologyGuideTopic = (typeof oncologyGuideTopics)[number];
export const oncologyGuidesUpdated = "2026-10-29";
export function isOncologyGuideTopic(value: string): value is OncologyGuideTopic {
  return oncologyGuideTopics.includes(value as OncologyGuideTopic);
}

const lymphomaSources = [
  { title: "NCI: Lymphoma", url: "https://www.cancer.gov/types/lymphoma" },
  { title: "NCI: Finding Cancer Care", url: "https://www.cancer.gov/about-cancer/managing-care/finding-cancer-care" },
];
const immunotherapySources = [
  { title: "NCI: Immunotherapy", url: "https://www.cancer.gov/about-cancer/treatment/types/immunotherapy" },
  { title: "NCI: Immune Checkpoint Inhibitors", url: "https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/checkpoint-inhibitors" },
  { title: "NCI: Biomarker Testing", url: "https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment" },
];
const cellSources = [
  { title: "NCI: CAR T-cell Therapy", url: "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/car-t-cell-therapy" },
  { title: "NCI: TIL Therapy", url: "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/til-therapy" },
  { title: "NCI: T-cell Receptor Therapy", url: "https://www.cancer.gov/news-events/cancer-currents-blog/2024/fda-tecelra-synovial-sarcoma-mage-a4" },
  { title: "NCI: CAR-NK Research Example (NCI-2025-04622)", url: "https://www.cancer.gov/research/participate/clinical-trials-search/v?id=NCI-2025-04622" },
  { title: "NCI: T-cell Transfer Therapy and Risks", url: "https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/t-cell-transfer-therapy" },
];

export const oncologyGuides: Record<Locale, Record<OncologyGuideTopic, PatientGuide>> = {
  en: {
    lymphoma: {
      label: "Lymphoma treatment in China",
      title: "Lymphoma treatment in China: a patient guide",
      description: "Preparing for lymphoma care in Guangzhou, China: pathology, second opinions, MDT questions, CAR-T discussions and international patient coordination.",
      sections: [
        { title: "Begin with the exact lymphoma diagnosis", text: "Hodgkin and non-Hodgkin lymphoma are different groups, and the subtype matters. If your report says diffuse large B-cell lymphoma (DLBCL), follicular lymphoma or another subtype, keep the full wording. Ask the specialist whether pathology review is needed before discussing a different treatment pathway." },
        { title: "New diagnosis, relapse or refractory disease", text: "For a new diagnosis, prepare the proposed plan and your questions. If lymphoma has returned or not responded as expected, list each treatment, dates, response scans and reasons for stopping. Ask how the current assessment changes the options, rather than choosing a treatment from an online success story." },
        { title: "Questions about CAR-T and other options", text: "Ask the receiving team which options fit the confirmed subtype and previous treatment. If CAR-T is discussed, request the exact product, indication, eligibility requirements, risks and follow-up plan. A lymphoma diagnosis alone does not establish eligibility. This guide does not recommend a drug, transplant or cell therapy." },
        { title: "A second opinion or MDT in Guangzhou", text: "H&C Care helps organize records and enquiries to relevant Guangdong specialists. Clarify whether the proposed service is an individual consultation, pathology review or multidisciplinary team (MDT) discussion, who issues the medical opinion, and what written documents will be provided. Availability is confirmed case by case." },
        { title: "Prepare the visit and the full budget", text: "Gather pathology/IHC, PET/CT or other scans, recent blood tests, medicines and a dated treatment summary. Request a hospital estimate covering assessment, treatment, admission and follow-up separately from our coordination fee. Confirm acceptance and travel advice with the treating teams before booking. Do not interrupt current care while awaiting an enquiry." },
      ],
      questions: [
        { title: "Can international patients start before travelling to China?", text: "You can prepare records and ask about coordination from home. A remote specialist appointment, hospital acceptance and treatment eligibility must each be confirmed; submitting records does not guarantee any of them." },
        { title: "How much does lymphoma treatment in China cost?", text: "There is no single reliable price for all lymphoma cases. Request an itemized estimate from the receiving institution after clinical assessment. The service prices on this website are coordination fees, not lymphoma treatment or CAR-T prices." },
      ],
      related: ["mdt", "experts", "records", "journey", "membership"], sources: lymphomaSources,
    },
    immunotherapy: {
      label: "Cancer immunotherapy in China",
      title: "Cancer immunotherapy in China: preparing for review",
      description: "Questions about cancer immunotherapy in China: PD-1/PD-L1, biomarkers, previous treatment, safety, hospital assessment and support for international patients.",
      sections: [
        { title: "What does cancer immunotherapy mean?", text: "Immunotherapy works through the immune system; it is not one interchangeable treatment. Checkpoint medicines and immune-cell approaches are different categories. Ask which exact treatment is being discussed, why it is relevant to your cancer, and what alternatives the clinician recommends." },
        { title: "PD-1, PD-L1 and biomarker reports", text: "PD-1/PD-L1 checkpoint inhibitors are one form of immunotherapy. Bring any PD-L1, MSI/MMR, TMB or NGS reports already available, including test methods and dates. Do not order every test independently: the oncologist decides which information is useful. A positive marker does not guarantee a response." },
        { title: "Prepare the previous-treatment and safety history", text: "Include the names and dates of earlier immunotherapy, chemotherapy, targeted therapy and radiotherapy, plus response assessments. Tell the clinician about adverse reactions, autoimmune disease, infections, organ transplants and current medicines. Immunotherapy can affect healthy tissues; ask who will manage new symptoms and urgent problems, including after you return home." },
        { title: "Separate a standard option from a research opportunity", text: "Ask for the medicine or protocol name, its status for your cancer in China, and whether the proposal involves a clinical study. Published research or an overseas approval is not confirmation of local availability. The hospital or research team must confirm eligibility and current access; H&C Care cannot guarantee treatment or enrollment." },
        { title: "Coordinate an assessment in Guangzhou", text: "We can organize and translate the record package, prepare your questions and coordinate specialist communication. Before travel, clarify the appointment, expected tests, hospital charges, language support and follow-up arrangements. If surgery is being considered later, ask who will coordinate reassessment with the surgical team." },
      ],
      questions: [
        { title: "Is immunotherapy the same as targeted therapy or CAR-T?", text: "These terms do not describe the same treatment. Bring the actual medicine or cell-product name to the specialist so that the purpose, evidence, risks and eligibility can be explained for your case." },
        { title: "Can I change or stop treatment while arranging a second opinion?", text: "Do not change prescribed treatment on the basis of this website. Discuss timing and any proposed change with your treating clinician. This is a coordination service, not emergency or prescribing care." },
      ],
      related: ["oncology", "records", "research", "journey", "membership"], sources: immunotherapySources,
    },
    "cell-therapy": {
      label: "Cell therapy: CAR-T, NK, TCR-T and TIL",
      title: "Cell therapy in China: CAR-T, NK, TCR-T and TIL",
      description: "Understand differences between CAR-T, NK, TCR-T and TIL, and the questions international cancer patients should ask about evidence, eligibility and care in China.",
      sections: [
        { title: "Different cells, different treatment questions", text: "Cell therapy is a broad term, not a single product or a guarantee of benefit. When considering cancer care in China, identify the exact cell product, intended cancer type and treatment setting. Do not assume that evidence for one cell approach applies to another." },
        { title: "CAR-T: engineered T cells", text: "CAR-T modifies T cells to recognize a selected target. Ask which product and indication match the case. For lymphoma enquiries, include the exact subtype and prior treatment; for CLDN18.2-related gastric cancer enquiries, include the complete biomarker report. The clinical team must confirm the product's current status and suitability in China." },
        { title: "NK cells and CAR-NK research", text: "Natural killer (NK) cells are distinct from T cells; CAR-NK uses engineered NK cells. Research explores specific products and cancers. A trial listing or laboratory result is not marketing approval. Ask for the product or study identifier, evidence in your cancer, responsible institution and eligibility criteria. This page is not an offer of an NK treatment package or a general immunity-boosting service." },
        { title: "TCR-T and TIL are not other names for CAR-T", text: "TCR-T uses engineered T-cell receptors; target and HLA matching can matter. TIL approaches use lymphocytes collected from tumor tissue. Ask which tests or tissue samples the proposed approach requires. Neither term establishes that treatment is available for your particular tumor or at a particular hospital." },
        { title: "Ask about risks, monitoring and practical limits", text: "CAR-T can cause serious immune and neurological complications; risks differ between approaches. Ask about pretreatment, cell collection or manufacture when applicable, hospital monitoring, caregiver needs, emergency arrangements and longer-term follow-up. Confirm what happens if the patient becomes unwell or the planned product cannot be provided. Do not book travel before medical and practical requirements are clear." },
        { title: "Verify access in China before paying or travelling", text: "Ask the clinical institution to distinguish an approved indication, another clinical use and a research protocol. Request the relevant Chinese regulatory information or study registration and the site's current status. The NCI references below explain concepts and include US examples; they do not establish Chinese approval or recruitment. H&C Care supports document preparation and communication, not product sales, clinical eligibility decisions or guaranteed enrollment." },
      ],
      questions: [
        { title: "Does a positive biomarker guarantee cell therapy?", text: "No. The full diagnosis, treatment history, current condition and product or protocol requirements still need review by the responsible clinical team. A search result or test result alone is not acceptance." },
        { title: "What should I request in a cell-therapy cost estimate?", text: "Ask the institution to separate evaluation, product-related charges, hospital care, management of complications and follow-up. Ask which costs a research sponsor covers, if applicable. Our listed coordination fees are not cell-therapy prices; no treatment outcome or fixed saving is promised." },
      ],
      related: ["car-t", "mdt", "research", "records", "journey"], sources: cellSources,
    },
  },
  "zh-hant": {
    lymphoma: {
      label: "中國淋巴瘤治療指南",
      title: "中國淋巴瘤治療：國際患者就醫指南",
      description: "準備在中國廣州就診：了解淋巴瘤病理資料、第二意見、MDT 問題、CAR-T 評估溝通及國際患者就醫協調。",
      sections: [
        { title: "先確認具體淋巴瘤類型", text: "霍奇金與非霍奇金淋巴瘤是不同類別，具體亞型很重要。如報告寫有瀰漫性大 B 細胞淋巴瘤（DLBCL）、濾泡性淋巴瘤或其他亞型，請保留完整診斷。討論另一治療路徑前，先向專家確認是否需要病理覆核。" },
        { title: "初診、復發與難治個案的準備不同", text: "初診患者可準備擬議方案和希望解答的問題。如疾病復發或未達預期反應，請列明每項治療、日期、療效評估影像及停藥原因。應向醫生了解當前評估如何影響選項，不宜根據網上成功個案自行選擇治療。" },
        { title: "如何詢問 CAR-T 及其他選項", text: "請接診團隊解釋哪些選項符合已確認的亞型與既往治療。如討論 CAR-T，應詢問具體產品、適應症、評估條件、風險及隨訪計劃。淋巴瘤診斷本身不等於符合資格；本指南不推薦特定藥物、移植或細胞治療。" },
        { title: "廣州第二意見與 MDT 協調", text: "H&C Care 協助整理病歷及溝通廣東相關專家。確認所安排的是個別諮詢、病理覆核還是多學科團隊（MDT）討論，由誰出具醫療意見，以及會取得哪些書面資料。能否安排須按個案確認。" },
        { title: "病歷、來華安排與完整預算", text: "準備病理與免疫組化、PET/CT 或其他影像、近期驗血、目前用藥及按日期整理的治療摘要。請醫院分項估算評估、治療、住院和隨訪費用，與本公司的協調服務費分開。訂行程前先確認接診和出行建議；等待溝通期間不要自行中斷既有治療。" },
      ],
      questions: [
        { title: "尚未來華，可以先開始準備嗎？", text: "可在所在地整理病歷並提出協調需求。遠程專家諮詢、醫院接診和治療資格均須分別確認，提交資料不代表獲得其中任何一項保證。" },
        { title: "中國淋巴瘤治療費用是多少？", text: "不同個案不能套用同一價格。請在醫療評估後向接診機構取得分項估算。網站的服務方案是協調費用，不是淋巴瘤治療或 CAR-T 的報價。" },
      ],
      related: ["mdt", "experts", "records", "journey", "membership"], sources: lymphomaSources,
    },
    immunotherapy: {
      label: "中國腫瘤免疫治療指南",
      title: "中國腫瘤免疫治療：評估前需要了解甚麼",
      description: "了解在中國評估腫瘤免疫治療前應準備的資料：PD-1／PD-L1、生物標誌物、既往用藥、安全問題及國際患者協調。",
      sections: [
        { title: "腫瘤免疫治療不是單一療法", text: "免疫治療透過免疫系統發揮作用，並非可以互換的單一治療。免疫檢查點藥物與免疫細胞治療屬不同方向。請醫生說明正在討論哪一種治療、為何與您的癌種相關，以及有哪些替代方案。" },
        { title: "PD-1、PD-L1 與生物標誌物報告", text: "PD-1／PD-L1 檢查點抑制劑是免疫治療的一類。帶備已有的 PD-L1、MSI／MMR、TMB 或 NGS 完整報告，包括檢測方法及日期。不必自行安排所有檢查，由腫瘤科醫生決定哪些資料有用；標誌物陽性不保證有效。" },
        { title: "整理既往治療與安全資料", text: "列明既往免疫治療、化療、靶向及放療的名稱、日期和療效評估，並告知不良反應、自身免疫病、感染、器官移植及目前用藥。免疫治療可能影響健康組織，應確認新症狀及急症由誰處理，包括回國後的安排。" },
        { title: "區分常規選項與研究機會", text: "詢問藥物或研究方案名稱、在中國對應癌種的狀態，以及是否屬臨床研究。已發表研究或海外批准不代表本地可取得。資格與實際安排須由醫院或研究團隊確認，H&C Care 不保證可接受治療或入組。" },
        { title: "在廣州評估前可協調甚麼", text: "我們可協助整理與翻譯病歷、準備問題及溝通專家。出行前確認預約、可能需要的檢查、醫院費用、語言支持與隨訪安排。如後續考慮手術，應詢問誰負責與手術團隊銜接復評。" },
      ],
      questions: [
        { title: "免疫治療、靶向治療和 CAR-T 是一樣的嗎？", text: "這些名稱不代表同一治療。請提供實際藥物或細胞產品名稱，讓專家按個案解釋目的、證據、風險與資格。" },
        { title: "等待第二意見時，可以自行停藥或換藥嗎？", text: "不要根據網站內容更改醫生已處方的治療。任何調整及時間安排應與接診醫生商量。本公司提供協調服務，不提供急症或處方服務。" },
      ],
      related: ["oncology", "records", "research", "journey", "membership"], sources: immunotherapySources,
    },
    "cell-therapy": {
      label: "細胞治療：CAR-T、NK、TCR-T 與 TIL",
      title: "中國腫瘤細胞治療：CAR-T、NK、TCR-T 與 TIL",
      description: "了解 CAR-T、NK、TCR-T、TIL 的區別，以及國際腫瘤患者評估中國細胞治療時需要詢問的證據、資格與就醫安排。",
      sections: [
        { title: "不同細胞，不能視為同一治療", text: "細胞治療是廣泛名稱，不是單一產品，也不代表療效保證。考慮來華就醫時，先確認具體細胞產品、對應癌種與治療場景。一種細胞療法的證據，不能直接套用於另一種。" },
        { title: "CAR-T：經改造的 T 細胞", text: "CAR-T 透過改造 T 細胞識別指定靶點。請確認哪個產品與適應症對應個案。淋巴瘤溝通應附具體亞型及既往治療；CLDN18.2 相關胃癌溝通應附完整標誌物報告。產品在中國的最新狀態與適用性須由醫療團隊確認。" },
        { title: "NK 細胞與 CAR-NK 研究", text: "自然殺傷（NK）細胞不同於 T 細胞；CAR-NK 使用經改造的 NK 細胞。研究針對特定產品及癌種，研究登記或實驗室結果不等於上市批准。應詢問產品或研究編號、對應癌種的證據、負責機構及評估條件。本頁是科普資訊，不是 NK 治療套餐或一般「提升免疫力」服務的邀約。" },
        { title: "TCR-T 與 TIL 並非 CAR-T 的別稱", text: "TCR-T 使用經改造的 T 細胞受體，可能涉及靶點與 HLA 配型；TIL 則使用從腫瘤組織取得的淋巴細胞。應詢問具體方案需要哪些檢測或組織樣本。僅有療法名稱，不代表適用於自己的腫瘤或指定醫院可提供。" },
        { title: "風險、監測與實務限制", text: "CAR-T 可引起嚴重免疫及神經系統併發症，不同方向的風險並不相同。應了解預處理、適用時的細胞採集及製備、住院監測、陪護、急症處理與長期隨訪，並確認病情變化或產品無法提供時的安排。醫療與實務要求清楚前，不宜先訂行程。" },
        { title: "付款或出行前核實中國的實際安排", text: "請醫療機構區分已批准適應症、其他臨床使用與研究方案，提供相應中國監管資訊或研究登記及該中心目前狀態。下列 NCI 資料介紹概念並包含美國例子，不代表中國批准或招募。H&C Care 協助準備資料與溝通，不銷售產品、不判定臨床資格，也不保證入組。" },
      ],
      questions: [
        { title: "標誌物陽性，就能接受細胞治療嗎？", text: "不能據此確定。負責的醫療團隊仍須評估完整診斷、治療史、目前狀況，以及產品或研究方案的要求。搜尋結果或單一檢測結果不等於接診。" },
        { title: "細胞治療費用估算應包括甚麼？", text: "請機構分列評估、產品相關費用、住院、併發症處理與隨訪；如屬研究，另問哪些費用由申辦方承擔。本網站的協調費不是細胞治療報價，也不承諾療效或固定節省比例。" },
      ],
      related: ["car-t", "mdt", "research", "records", "journey"], sources: cellSources,
    },
  },
  ru: {
    lymphoma: {
      label: "Лечение лимфомы в Китае",
      title: "Лечение лимфомы в Китае: руководство для пациентов",
      description: "Подготовка к обращению в Гуанчжоу: патология, второе мнение, вопросы для консилиума и обсуждения CAR-T, координация для зарубежных пациентов.",
      sections: [
        { title: "Уточните точный тип лимфомы", text: "Лимфома Ходжкина и неходжкинские лимфомы относятся к разным группам; подтип имеет значение. Если в заключении указана диффузная В-крупноклеточная лимфома (DLBCL), фолликулярная или другая лимфома, сохраните полную формулировку. Спросите специалиста, нужен ли пересмотр патологии перед обсуждением другого пути лечения." },
        { title: "Первичный диагноз, рецидив или рефрактерное заболевание", text: "При первичном диагнозе подготовьте предложенный план и вопросы. Если болезнь вернулась или ответ оказался недостаточным, перечислите методы лечения, даты, контрольные исследования и причины отмены. Обсудите, как текущая оценка влияет на варианты, а не выбирайте лечение по истории успеха в интернете." },
        { title: "Как обсудить CAR-T и другие варианты", text: "Попросите принимающую команду объяснить варианты с учетом подтипа и предыдущего лечения. При обсуждении CAR-T уточните продукт, показание, требования, риски и наблюдение. Сам диагноз лимфомы не означает соответствия критериям. Руководство не рекомендует препарат, трансплантацию или клеточную терапию." },
        { title: "Второе мнение и консилиум в Гуанчжоу", text: "H&C Care систематизирует документы и координирует обращения к специалистам Гуандуна. Уточните, предполагается ли индивидуальная консультация, пересмотр патологии или мультидисциплинарный консилиум (MDT), кто дает медицинское заключение и какие письменные документы предоставляются. Возможность организации подтверждается отдельно." },
        { title: "Документы, поездка и полный бюджет", text: "Подготовьте патологию и ИГХ, ПЭТ/КТ или другие снимки, свежие анализы крови, лекарства и хронологию лечения. Запросите у больницы отдельную оценку обследования, лечения, госпитализации и наблюдения, не смешивая ее с нашей платой за координацию. До бронирования подтвердите прием и рекомендации по поездке. Не прерывайте текущую помощь в ожидании ответа." },
      ],
      questions: [
        { title: "Можно ли начать до поездки в Китай?", text: "Документы и запрос на координацию можно подготовить дома. Дистанционная консультация, прием больницей и пригодность лечения подтверждаются отдельно; отправка документов ничего из этого не гарантирует." },
        { title: "Сколько стоит лечение лимфомы в Китае?", text: "Единой достоверной цены для всех случаев нет. После клинической оценки запросите подробную смету принимающего учреждения. Цены на этом сайте относятся к координации, а не к лечению лимфомы или CAR-T." },
      ], related: ["mdt", "experts", "records", "journey", "membership"], sources: lymphomaSources,
    },
    immunotherapy: {
      label: "Иммунотерапия рака в Китае",
      title: "Иммунотерапия рака в Китае: подготовка к оценке",
      description: "Вопросы об иммунотерапии в Китае: PD-1/PD-L1, биомаркеры, предыдущее лечение, безопасность и координация для зарубежных пациентов.",
      sections: [
        { title: "Иммунотерапия не является единым методом", text: "Иммунотерапия действует через иммунную систему. Препараты контрольных точек и иммуноклеточные подходы относятся к разным категориям. Уточните название обсуждаемого лечения, его связь с вашим диагнозом и альтернативы, предлагаемые врачом." },
        { title: "PD-1, PD-L1 и результаты биомаркеров", text: "Ингибиторы PD-1/PD-L1 относятся к иммунотерапии. Приложите имеющиеся результаты PD-L1, MSI/MMR, TMB или NGS с методами и датами. Не заказывайте все анализы самостоятельно: их необходимость определяет онколог. Положительный маркер не гарантирует ответ." },
        { title: "История лечения и сведения о безопасности", text: "Укажите названия и даты иммунотерапии, химиотерапии, таргетного и лучевого лечения и оценку ответа. Сообщите о нежелательных реакциях, аутоиммунных заболеваниях, инфекциях, трансплантации органов и лекарствах. Иммунотерапия может затронуть здоровые ткани; уточните помощь при новых симптомах и неотложных проблемах, в том числе после возвращения домой." },
        { title: "Различайте обычное лечение и исследование", text: "Запросите название препарата или протокола, статус для вашего диагноза в Китае и участие в исследовании, если оно предполагается. Публикация или зарубежное разрешение не подтверждают местную доступность. Больница или исследователи определяют критерии и возможности; H&C Care не гарантирует лечение или включение." },
        { title: "Организация оценки в Гуанчжоу", text: "Мы можем подготовить и перевести документы, составить вопросы и координировать связь со специалистами. До поездки уточните прием, обследования, больничные расходы, перевод и наблюдение. Если позже рассматривается операция, спросите, кто согласует повторную оценку с хирургами." },
      ],
      questions: [
        { title: "Иммунотерапия, таргетная терапия и CAR-T одинаковы?", text: "Эти термины не обозначают одно и то же лечение. Предоставьте точное название препарата или клеточного продукта, чтобы врач объяснил цель, доказательства, риски и критерии для вашего случая." },
        { title: "Можно ли отменить лечение в ожидании второго мнения?", text: "Не меняйте назначенное лечение на основании сайта. Обсудите сроки и изменения с лечащим врачом. Наша услуга является координационной, а не неотложной или назначающей лечение." },
      ], related: ["oncology", "records", "research", "journey", "membership"], sources: immunotherapySources,
    },
    "cell-therapy": {
      label: "Клеточная терапия: CAR-T, NK, TCR-T и TIL",
      title: "Клеточная терапия в Китае: CAR-T, NK, TCR-T и TIL",
      description: "Различия CAR-T, NK, TCR-T и TIL: вопросы о доказательствах, критериях, рисках и организации помощи в Китае для зарубежных пациентов.",
      sections: [
        { title: "Разные клетки означают разные вопросы", text: "Клеточная терапия — широкое понятие, а не один продукт или гарантия пользы. Уточняйте точный продукт, тип рака и условия применения в Китае. Доказательства для одного клеточного подхода нельзя автоматически переносить на другой." },
        { title: "CAR-T: измененные Т-клетки", text: "В CAR-T Т-клетки изменяют для распознавания определенной мишени. Уточните продукт и показание. Для лимфомы приложите подтип и историю лечения, для обсуждения CLDN18.2 при раке желудка — полный отчет о биомаркере. Статус продукта и пригодность в Китае подтверждает клиническая команда." },
        { title: "NK-клетки и исследования CAR-NK", text: "Естественные киллеры (NK) отличаются от Т-клеток; CAR-NK использует измененные NK-клетки. Исследования касаются конкретных продуктов и опухолей. Регистрация исследования или лабораторный результат не равны разрешению на продажу. Запросите идентификатор продукта или протокола, доказательства для вашего рака, ответственное учреждение и критерии. Страница не предлагает пакет NK-терапии или общее «укрепление иммунитета»." },
        { title: "TCR-T и TIL не являются названиями CAR-T", text: "TCR-T использует измененные Т-клеточные рецепторы; могут иметь значение мишень и совместимость HLA. TIL использует лимфоциты из опухолевой ткани. Уточните необходимые анализы и образцы. Само название метода не подтверждает доступность для вашей опухоли или в конкретной больнице." },
        { title: "Риски, наблюдение и практические ограничения", text: "CAR-T может вызывать серьезные иммунные и неврологические осложнения; риски подходов различаются. Обсудите подготовку, сбор и производство клеток при необходимости, стационарное наблюдение, сопровождающего, экстренную помощь и длительный контроль. Уточните действия при ухудшении состояния или невозможности предоставить продукт до бронирования поездки." },
        { title: "Проверьте доступность в Китае до оплаты", text: "Попросите учреждение различить разрешенное показание, иное клиническое применение и исследовательский протокол. Запросите китайскую регуляторную информацию или регистрацию исследования и текущий статус центра. Источники NCI объясняют понятия и содержат примеры США, а не подтверждение китайского разрешения или набора. H&C Care готовит документы и связь, не продает продукты, не определяет клиническую пригодность и не гарантирует включение." },
      ],
      questions: [
        { title: "Гарантирует ли положительный биомаркер клеточную терапию?", text: "Нет. Ответственная команда оценивает диагноз, лечение, текущее состояние и требования продукта или протокола. Поисковый результат или отдельный анализ не означают приема." },
        { title: "Что включить в запрос стоимости?", text: "Попросите раздельно оценить обследование, продукт, больничную помощь, осложнения и наблюдение. Для исследования уточните расходы спонсора. Наши цены относятся к координации, не к клеточной терапии; результат и фиксированная экономия не обещаются." },
      ], related: ["car-t", "mdt", "research", "records", "journey"], sources: cellSources,
    },
  },
  ar: {
    lymphoma: {
      label: "علاج اللمفوما في الصين",
      title: "علاج اللمفوما في الصين: دليل المرضى الدوليين",
      description: "التحضير للرعاية في غوانغجو: تقارير اللمفوما والرأي الثاني وأسئلة الفريق متعدد التخصصات ومناقشة CAR-T وتنسيق شؤون المرضى الدوليين.",
      sections: [
        { title: "ابدأ بالتشخيص الدقيق للّـمفوما", text: "تختلف لمفوما هودجكين عن اللمفوما اللاهودجكينية، وللنوع الفرعي أهمية. احتفظ بصياغة التقرير كاملة إذا ذكر لمفوما الخلايا البائية الكبيرة المنتشرة (DLBCL) أو اللمفوما الجريبية أو نوعا آخر. اسأل الاختصاصي عن ضرورة مراجعة الأنسجة قبل مناقشة مسار علاجي مختلف." },
        { title: "التشخيص الجديد أو النكس أو المرض المقاوم", text: "للتشخيص الجديد، جهز الخطة المقترحة وأسئلتك. إذا عاد المرض أو لم يستجب كما كان متوقعا، سجل العلاجات وتواريخها وصور تقييم الاستجابة وأسباب التوقف. اسأل كيف يؤثر التقييم الحالي في الخيارات بدلا من اختيار علاج بناء على قصة نجاح على الإنترنت." },
        { title: "مناقشة CAR-T والخيارات الأخرى", text: "اطلب من الفريق المستقبل شرح الخيارات المناسبة للنوع المؤكد والعلاج السابق. عند مناقشة CAR-T، اسأل عن المنتج والاستطباب والمعايير والمخاطر والمتابعة. تشخيص اللمفوما وحده لا يثبت الأهلية. لا يوصي هذا الدليل بدواء أو زرع أو علاج خلوي معين." },
        { title: "رأي ثان أو فريق متعدد التخصصات في غوانغجو", text: "تساعد H&C Care في ترتيب السجلات والتواصل مع اختصاصيين مناسبين في غوانغدونغ. وضح هل المطلوب استشارة فردية أم مراجعة أنسجة أم اجتماع فريق متعدد التخصصات (MDT)، ومن يصدر الرأي الطبي وما المستندات المكتوبة المتوقعة. يُؤكد التوافر لكل حالة." },
        { title: "الزيارة والوثائق والميزانية الكاملة", text: "اجمع تقارير الأنسجة وIHC وPET/CT أو التصوير الآخر وتحاليل الدم الحديثة والأدوية وتسلسل العلاج. اطلب تقديرا مفصلا من المستشفى للتقييم والعلاج والإقامة والمتابعة منفصلا عن رسوم تنسيقنا. أكد القبول ونصيحة السفر قبل الحجز، ولا توقف الرعاية الحالية أثناء انتظار الرد." },
      ],
      questions: [
        { title: "هل يمكن البدء قبل السفر إلى الصين؟", text: "يمكن إعداد السجلات وطلب التنسيق من بلدك. يجب تأكيد الاستشارة عن بعد وقبول المستشفى وأهلية العلاج كل على حدة؛ تقديم المستندات لا يضمن أيا منها." },
        { title: "ما تكلفة علاج اللمفوما في الصين؟", text: "لا يوجد سعر واحد موثوق لجميع الحالات. اطلب تقديرا مفصلا من المؤسسة المستقبلة بعد التقييم السريري. الأسعار المعروضة هنا للتنسيق وليست أسعار علاج اللمفوما أو CAR-T." },
      ], related: ["mdt", "experts", "records", "journey", "membership"], sources: lymphomaSources,
    },
    immunotherapy: {
      label: "العلاج المناعي للسرطان في الصين",
      title: "العلاج المناعي للسرطان في الصين: التحضير للتقييم",
      description: "أسئلة عن العلاج المناعي في الصين: PD-1 وPD-L1 والمؤشرات الحيوية والعلاج السابق والسلامة والتقييم بالمستشفى وتنسيق المرضى الدوليين.",
      sections: [
        { title: "العلاج المناعي ليس علاجا واحدا", text: "يعمل العلاج المناعي عبر الجهاز المناعي. أدوية نقاط التفتيش والنهج الخلوية المناعية فئات مختلفة. اسأل عن العلاج المحدد المقترح وعلاقته بنوع السرطان لديك والبدائل التي ينصح بها الطبيب." },
        { title: "تقارير PD-1 وPD-L1 والمؤشرات الحيوية", text: "مثبطات PD-1 وPD-L1 شكل من العلاج المناعي. أرفق نتائج PD-L1 أو MSI/MMR أو TMB أو NGS المتوافرة، مع الطريقة والتاريخ. لا تطلب جميع الفحوص بنفسك؛ يحدد طبيب الأورام المفيد منها. إيجابية المؤشر لا تضمن الاستجابة." },
        { title: "تاريخ العلاج ومعلومات السلامة", text: "اذكر أسماء وتواريخ العلاج المناعي والكيميائي والموجه والإشعاعي وتقييم الاستجابة. أخبر الطبيب بالتفاعلات الضارة وأمراض المناعة الذاتية والعدوى وزرع الأعضاء والأدوية الحالية. قد يؤثر العلاج المناعي في أنسجة سليمة؛ اسأل من يتولى الأعراض الجديدة والمشكلات العاجلة، بما فيها بعد العودة إلى بلدك." },
        { title: "ميّز العلاج المعتاد عن فرصة البحث", text: "اطلب اسم الدواء أو البروتوكول ووضعه لنوع سرطانك في الصين وهل المقترح دراسة سريرية. النشر العلمي أو الموافقة الخارجية لا يؤكدان التوافر محليا. تؤكد المستشفى أو جهة البحث الأهلية والإتاحة الحالية؛ ولا تضمن H&C Care العلاج أو القبول بالدراسة." },
        { title: "تنسيق التقييم في غوانغجو", text: "يمكننا تنظيم السجلات وترجمتها وتحضير الأسئلة وتنسيق التواصل مع الاختصاصي. قبل السفر، وضح الموعد والفحوص المتوقعة ورسوم المستشفى ودعم اللغة والمتابعة. إن كانت الجراحة محتملة لاحقا، اسأل من ينسق إعادة التقييم مع الجراحين." },
      ],
      questions: [
        { title: "هل العلاج المناعي والموجه وCAR-T متطابقة؟", text: "لا تعني هذه المصطلحات العلاج نفسه. قدم اسم الدواء أو المنتج الخلوي الفعلي ليشرح الاختصاصي الغرض والدليل والمخاطر والمعايير لحالتك." },
        { title: "هل أوقف العلاج أثناء انتظار الرأي الثاني؟", text: "لا تغير العلاج الموصوف بناء على الموقع. ناقش التوقيت وأي تعديل مع الطبيب المعالج. نقدم التنسيق، لا الرعاية الإسعافية أو وصف العلاج." },
      ], related: ["oncology", "records", "research", "journey", "membership"], sources: immunotherapySources,
    },
    "cell-therapy": {
      label: "العلاج الخلوي: CAR-T وNK وTCR-T وTIL",
      title: "العلاج الخلوي في الصين: CAR-T وNK وTCR-T وTIL",
      description: "الفروق بين CAR-T وNK وTCR-T وTIL، والأسئلة عن الأدلة والأهلية والمخاطر وترتيب الرعاية في الصين لمرضى السرطان الدوليين.",
      sections: [
        { title: "خلايا مختلفة وأسئلة علاجية مختلفة", text: "العلاج الخلوي مصطلح واسع، وليس منتجا واحدا أو ضمانا للفائدة. عند التفكير بالرعاية في الصين، حدد المنتج ونوع السرطان وسياق العلاج. لا تفترض أن دليل نهج خلوي ينطبق على نهج آخر." },
        { title: "CAR-T: خلايا تائية معدلة", text: "يعدل CAR-T الخلايا التائية للتعرف على هدف معين. اسأل عن المنتج والاستطباب المناسبين. لاستفسارات اللمفوما أرفق النوع الفرعي والعلاج السابق؛ ولمناقشة سرطان المعدة المرتبط بـCLDN18.2 أرفق التقرير الكامل للمؤشر. يؤكد الفريق السريري وضع المنتج وملاءمته في الصين." },
        { title: "الخلايا القاتلة الطبيعية NK وأبحاث CAR-NK", text: "تختلف خلايا NK عن الخلايا التائية؛ ويستخدم CAR-NK خلايا NK معدلة. يدرس الباحثون منتجات وأنواع سرطان محددة. تسجيل دراسة أو نتيجة مختبرية لا يعني الموافقة على التسويق. اطلب معرف المنتج أو الدراسة والدليل لنوع سرطانك والمؤسسة المسؤولة ومعايير الأهلية. هذه الصفحة ليست عرضا لباقة علاج NK أو لخدمة عامة لتعزيز المناعة." },
        { title: "TCR-T وTIL ليسا اسمين آخرين لـCAR-T", text: "يستخدم TCR-T مستقبلات تائية معدلة، وقد يكون الهدف وتوافق HLA مهمين. يستخدم TIL خلايا لمفاوية مأخوذة من النسيج الورمي. اسأل عن الفحوص والعينات المطلوبة. الاسم وحده لا يثبت التوافر لنوع ورمك أو في مستشفى معين." },
        { title: "المخاطر والمراقبة والقيود العملية", text: "قد يسبب CAR-T مضاعفات مناعية وعصبية خطيرة، وتختلف المخاطر بين النهج. اسأل عن التحضير وجمع الخلايا أو تصنيعها إن لزم والمراقبة بالمستشفى والمرافق والطوارئ والمتابعة الطويلة. وضح ما يحدث عند تدهور الحالة أو تعذر توفير المنتج قبل حجز السفر." },
        { title: "تحقق من الإتاحة في الصين قبل الدفع", text: "اطلب من المؤسسة التمييز بين استطباب معتمد واستخدام سريري آخر وبروتوكول بحثي، وتقديم المعلومات التنظيمية الصينية أو تسجيل الدراسة ووضع المركز الحالي. تشرح مراجع NCI المفاهيم وتتضمن أمثلة أمريكية، ولا تثبت الموافقة أو التجنيد في الصين. تساعد H&C Care في المستندات والتواصل، ولا تبيع المنتجات أو تحدد الأهلية أو تضمن القبول." },
      ],
      questions: [
        { title: "هل المؤشر الإيجابي يضمن العلاج الخلوي؟", text: "لا. يجب أن يراجع الفريق المسؤول التشخيص الكامل والعلاجات والحالة الراهنة ومتطلبات المنتج أو البروتوكول. نتيجة البحث أو اختبار منفرد لا تعني القبول." },
        { title: "ماذا أطلب في تقدير تكلفة العلاج الخلوي؟", text: "اطلب فصل التقييم ورسوم المنتج والرعاية بالمستشفى ومعالجة المضاعفات والمتابعة. اسأل عن تكاليف الراعي إن كانت دراسة. رسوم تنسيقنا ليست أسعار علاج خلوي؛ ولا نعد بنتيجة أو وفر ثابت." },
      ], related: ["car-t", "mdt", "research", "records", "journey"], sources: cellSources,
    },
  },
  id: {
    lymphoma: {
      label: "Pengobatan limfoma di China",
      title: "Pengobatan limfoma di China: panduan pasien",
      description: "Persiapan perawatan limfoma di Guangzhou: patologi, pendapat kedua, pertanyaan MDT dan CAR-T, serta koordinasi untuk pasien internasional.",
      sections: [
        { title: "Mulai dari diagnosis limfoma yang tepat", text: "Limfoma Hodgkin dan non-Hodgkin merupakan kelompok berbeda; subtipe penting. Jika laporan menyebut limfoma sel B besar difus (DLBCL), limfoma folikular atau subtipe lain, simpan diagnosis lengkap. Tanyakan apakah perlu tinjauan ulang patologi sebelum membahas jalur pengobatan berbeda." },
        { title: "Diagnosis baru, kambuh atau refrakter", text: "Untuk diagnosis baru, siapkan rencana yang diajukan dan pertanyaan Anda. Jika penyakit kembali atau respons tidak sesuai harapan, catat setiap terapi, tanggal, pemeriksaan respons dan alasan berhenti. Tanyakan pengaruh penilaian terkini terhadap pilihan, bukan memilih terapi berdasarkan kisah sukses daring." },
        { title: "Pertanyaan tentang CAR-T dan pilihan lain", text: "Minta tim penerima menjelaskan pilihan sesuai subtipe dan terapi sebelumnya. Jika membahas CAR-T, tanyakan produk, indikasi, persyaratan, risiko dan rencana tindak lanjut. Diagnosis limfoma saja tidak memastikan kelayakan. Panduan ini tidak merekomendasikan obat, transplantasi atau terapi sel." },
        { title: "Pendapat kedua atau MDT di Guangzhou", text: "H&C Care menata rekam medis dan mengoordinasikan pertanyaan kepada spesialis Guangdong yang relevan. Pastikan apakah layanan berupa konsultasi individual, tinjauan patologi atau diskusi multidisiplin (MDT), siapa yang memberi pendapat medis dan dokumen tertulis yang disediakan. Ketersediaan dikonfirmasi per kasus." },
        { title: "Dokumen, perjalanan dan anggaran lengkap", text: "Kumpulkan patologi/IHC, PET/CT atau pencitraan lain, darah terbaru, obat dan ringkasan terapi bertanggal. Minta estimasi rumah sakit untuk evaluasi, pengobatan, rawat inap dan tindak lanjut terpisah dari biaya koordinasi kami. Pastikan penerimaan serta saran perjalanan sebelum memesan. Jangan menghentikan perawatan saat menunggu balasan." },
      ],
      questions: [
        { title: "Bisakah dimulai sebelum datang ke China?", text: "Dokumen dan permintaan koordinasi dapat disiapkan dari rumah. Konsultasi jarak jauh, penerimaan rumah sakit dan kelayakan terapi perlu dikonfirmasi secara terpisah; pengiriman dokumen tidak menjamin salah satunya." },
        { title: "Berapa biaya pengobatan limfoma di China?", text: "Tidak ada satu harga yang dapat diandalkan untuk semua kasus. Setelah evaluasi klinis, minta estimasi rinci dari institusi penerima. Harga pada situs ini adalah biaya koordinasi, bukan harga pengobatan limfoma atau CAR-T." },
      ], related: ["mdt", "experts", "records", "journey", "membership"], sources: lymphomaSources,
    },
    immunotherapy: {
      label: "Imunoterapi kanker di China",
      title: "Imunoterapi kanker di China: persiapan evaluasi",
      description: "Pertanyaan imunoterapi di China: PD-1/PD-L1, biomarker, pengobatan sebelumnya, keamanan, evaluasi rumah sakit dan koordinasi pasien internasional.",
      sections: [
        { title: "Imunoterapi bukan satu pengobatan yang sama", text: "Imunoterapi bekerja melalui sistem imun. Obat checkpoint dan pendekatan sel imun merupakan kategori berbeda. Tanyakan pengobatan persis yang dibahas, relevansinya bagi kanker Anda dan alternatif yang dianjurkan dokter." },
        { title: "PD-1, PD-L1 dan laporan biomarker", text: "Inhibitor PD-1/PD-L1 merupakan salah satu imunoterapi. Bawa hasil PD-L1, MSI/MMR, TMB atau NGS yang sudah tersedia beserta metode dan tanggal. Jangan memesan semua tes sendiri; ahli onkologi menentukan informasi yang diperlukan. Marker positif tidak menjamin respons." },
        { title: "Riwayat pengobatan dan keamanan", text: "Cantumkan nama serta tanggal imunoterapi, kemoterapi, terapi target dan radioterapi sebelumnya, termasuk evaluasi respons. Beri tahu dokter tentang reaksi merugikan, penyakit autoimun, infeksi, transplantasi organ dan obat saat ini. Imunoterapi dapat memengaruhi jaringan sehat; pastikan penanganan gejala baru dan masalah mendesak, termasuk setelah pulang." },
        { title: "Bedakan pilihan biasa dengan penelitian", text: "Tanyakan nama obat atau protokol, statusnya untuk kanker Anda di China dan apakah melibatkan studi klinis. Publikasi atau persetujuan di luar negeri tidak membuktikan ketersediaan lokal. Rumah sakit atau peneliti memastikan kelayakan dan akses; H&C Care tidak menjamin terapi atau penerimaan penelitian." },
        { title: "Koordinasi evaluasi di Guangzhou", text: "Kami dapat menata dan menerjemahkan rekam medis, menyiapkan pertanyaan dan mengoordinasikan komunikasi spesialis. Sebelum perjalanan, pastikan janji temu, pemeriksaan, biaya rumah sakit, dukungan bahasa dan tindak lanjut. Jika operasi dipertimbangkan kemudian, tanyakan siapa yang menyelaraskan evaluasi ulang dengan tim bedah." },
      ],
      questions: [
        { title: "Apakah imunoterapi sama dengan terapi target atau CAR-T?", text: "Istilah ini tidak berarti pengobatan yang sama. Bawa nama obat atau produk sel sebenarnya agar spesialis menjelaskan tujuan, bukti, risiko dan kriteria untuk kasus Anda." },
        { title: "Bolehkah menghentikan terapi saat menunggu pendapat kedua?", text: "Jangan mengubah terapi yang diresepkan berdasarkan situs ini. Bahas waktu dan perubahan dengan dokter yang menangani. Layanan kami adalah koordinasi, bukan layanan darurat atau pemberian resep." },
      ], related: ["oncology", "records", "research", "journey", "membership"], sources: immunotherapySources,
    },
    "cell-therapy": {
      label: "Terapi sel: CAR-T, NK, TCR-T dan TIL",
      title: "Terapi sel di China: CAR-T, NK, TCR-T dan TIL",
      description: "Perbedaan CAR-T, NK, TCR-T dan TIL serta pertanyaan tentang bukti, kelayakan, risiko dan pengaturan perawatan di China bagi pasien kanker internasional.",
      sections: [
        { title: "Sel berbeda, pertanyaan terapi berbeda", text: "Terapi sel merupakan istilah luas, bukan satu produk atau jaminan manfaat. Saat mempertimbangkan perawatan di China, pastikan produk, jenis kanker dan konteks pengobatan. Bukti satu pendekatan tidak otomatis berlaku untuk pendekatan lain." },
        { title: "CAR-T: sel T yang dimodifikasi", text: "CAR-T mengubah sel T untuk mengenali target tertentu. Tanyakan produk dan indikasi yang sesuai. Untuk limfoma, sertakan subtipe serta terapi sebelumnya; untuk diskusi kanker lambung terkait CLDN18.2, sertakan laporan biomarker lengkap. Tim klinis memastikan status produk dan kesesuaian di China." },
        { title: "Sel NK dan penelitian CAR-NK", text: "Sel natural killer (NK) berbeda dari sel T; CAR-NK menggunakan sel NK yang dimodifikasi. Penelitian menguji produk dan kanker tertentu. Registrasi studi atau hasil laboratorium bukan persetujuan pemasaran. Tanyakan identitas produk atau studi, bukti pada kanker Anda, institusi penanggung jawab dan kriteria. Halaman ini bukan penawaran paket terapi NK atau layanan peningkatan imunitas umum." },
        { title: "TCR-T dan TIL bukan nama lain CAR-T", text: "TCR-T memakai reseptor sel T yang direkayasa; kecocokan target dan HLA dapat penting. TIL menggunakan limfosit dari jaringan tumor. Tanyakan pemeriksaan atau sampel yang diperlukan. Nama terapi tidak membuktikan ketersediaan bagi tumor Anda atau di rumah sakit tertentu." },
        { title: "Risiko, pemantauan dan batas praktis", text: "CAR-T dapat menyebabkan komplikasi imun dan saraf serius; risiko setiap pendekatan berbeda. Bahas persiapan, pengumpulan atau produksi sel bila perlu, pemantauan rumah sakit, pendamping, keadaan darurat dan tindak lanjut panjang. Pastikan rencana bila kondisi memburuk atau produk tidak tersedia sebelum memesan perjalanan." },
        { title: "Verifikasi akses di China sebelum membayar", text: "Minta institusi membedakan indikasi yang disetujui, penggunaan klinis lain dan protokol penelitian. Minta informasi regulasi China atau registrasi penelitian serta status pusat saat ini. Sumber NCI menjelaskan konsep dan contoh AS, bukan bukti persetujuan atau rekrutmen di China. H&C Care mendukung dokumen dan komunikasi, tidak menjual produk, menentukan kelayakan klinis atau menjamin penerimaan." },
      ],
      questions: [
        { title: "Apakah biomarker positif menjamin terapi sel?", text: "Tidak. Tim klinis tetap meninjau diagnosis lengkap, riwayat terapi, kondisi dan persyaratan produk atau protokol. Hasil pencarian atau satu tes bukan penerimaan." },
        { title: "Apa yang perlu ada dalam estimasi biaya?", text: "Minta rincian evaluasi, biaya produk, perawatan rumah sakit, komplikasi dan tindak lanjut. Untuk studi, tanyakan biaya yang ditanggung sponsor. Biaya koordinasi kami bukan harga terapi sel; hasil atau penghematan tetap tidak dijanjikan." },
      ], related: ["car-t", "mdt", "research", "records", "journey"], sources: cellSources,
    },
  },
  ms: {
    lymphoma: {
      label: "Rawatan limfoma di China",
      title: "Rawatan limfoma di China: panduan pesakit",
      description: "Persediaan rawatan limfoma di Guangzhou: patologi, pendapat kedua, soalan MDT dan CAR-T serta penyelarasan bagi pesakit antarabangsa.",
      sections: [
        { title: "Mulakan dengan diagnosis limfoma yang tepat", text: "Limfoma Hodgkin dan bukan Hodgkin ialah kumpulan berbeza; subjenis penting. Jika laporan menyatakan limfoma sel B besar meresap (DLBCL), limfoma folikular atau subjenis lain, simpan diagnosis penuh. Tanya pakar sama ada semakan patologi diperlukan sebelum membincangkan laluan rawatan lain." },
        { title: "Diagnosis baharu, berulang atau refraktori", text: "Bagi diagnosis baharu, sediakan rancangan dicadangkan dan soalan anda. Jika penyakit kembali atau respons tidak seperti dijangka, senaraikan rawatan, tarikh, penilaian pengimejan dan sebab berhenti. Tanya bagaimana penilaian semasa mempengaruhi pilihan, bukan memilih rawatan berdasarkan kisah kejayaan dalam talian." },
        { title: "Soalan tentang CAR-T dan pilihan lain", text: "Minta pasukan penerima menjelaskan pilihan mengikut subjenis dan rawatan terdahulu. Jika CAR-T dibincangkan, tanyakan produk, indikasi, syarat, risiko dan susulan. Diagnosis limfoma sahaja tidak memastikan kelayakan. Panduan ini tidak mengesyorkan ubat, pemindahan atau terapi sel." },
        { title: "Pendapat kedua atau MDT di Guangzhou", text: "H&C Care menyusun rekod dan menyelaras pertanyaan kepada pakar Guangdong yang berkaitan. Sahkan sama ada perkhidmatan ialah konsultasi individu, semakan patologi atau perbincangan pelbagai disiplin (MDT), siapa memberi pendapat perubatan dan dokumen bertulis yang disediakan. Ketersediaan disahkan bagi setiap kes." },
        { title: "Rekod, lawatan dan bajet penuh", text: "Kumpulkan patologi/IHC, PET/CT atau pengimejan lain, darah terkini, ubat dan ringkasan rawatan bertarikh. Minta anggaran hospital bagi penilaian, rawatan, kemasukan dan susulan secara berasingan daripada yuran penyelarasan kami. Sahkan penerimaan serta nasihat perjalanan sebelum tempahan. Jangan hentikan penjagaan semasa menunggu jawapan." },
      ],
      questions: [
        { title: "Bolehkah bermula sebelum datang ke China?", text: "Rekod dan permintaan penyelarasan boleh disediakan dari rumah. Konsultasi jarak jauh, penerimaan hospital dan kelayakan rawatan mesti disahkan berasingan; penghantaran dokumen tidak menjamin mana-mana daripadanya." },
        { title: "Berapakah kos rawatan limfoma di China?", text: "Tiada satu harga yang boleh dipercayai bagi semua kes. Selepas penilaian klinikal, minta anggaran terperinci daripada institusi penerima. Harga laman ini ialah yuran penyelarasan, bukan harga rawatan limfoma atau CAR-T." },
      ], related: ["mdt", "experts", "records", "journey", "membership"], sources: lymphomaSources,
    },
    immunotherapy: {
      label: "Imunoterapi kanser di China",
      title: "Imunoterapi kanser di China: persediaan penilaian",
      description: "Soalan imunoterapi di China: PD-1/PD-L1, biomarker, rawatan terdahulu, keselamatan, penilaian hospital dan penyelarasan pesakit antarabangsa.",
      sections: [
        { title: "Imunoterapi bukan satu rawatan yang sama", text: "Imunoterapi bertindak melalui sistem imun. Ubat pusat pemeriksaan dan pendekatan sel imun ialah kategori berbeza. Tanya rawatan tepat yang dibincangkan, kaitannya dengan kanser anda dan alternatif yang disyorkan doktor." },
        { title: "PD-1, PD-L1 dan laporan biomarker", text: "Perencat PD-1/PD-L1 ialah satu bentuk imunoterapi. Bawa keputusan PD-L1, MSI/MMR, TMB atau NGS yang tersedia bersama kaedah dan tarikh. Jangan mengatur semua ujian sendiri; pakar onkologi menentukan maklumat yang diperlukan. Marker positif tidak menjamin respons." },
        { title: "Sejarah rawatan dan keselamatan", text: "Senaraikan nama serta tarikh imunoterapi, kemoterapi, terapi sasaran dan radioterapi terdahulu, termasuk penilaian respons. Maklumkan tindak balas buruk, penyakit autoimun, jangkitan, pemindahan organ dan ubat semasa. Imunoterapi boleh menjejaskan tisu sihat; sahkan pihak yang mengurus gejala baharu dan masalah segera termasuk selepas pulang." },
        { title: "Bezakan pilihan biasa daripada penyelidikan", text: "Tanya nama ubat atau protokol, statusnya bagi kanser anda di China dan sama ada cadangan melibatkan kajian. Penerbitan atau kelulusan luar negara tidak membuktikan ketersediaan tempatan. Hospital atau penyelidik mengesahkan kelayakan dan akses; H&C Care tidak menjamin rawatan atau penyertaan." },
        { title: "Penyelarasan penilaian di Guangzhou", text: "Kami boleh menyusun dan menterjemah rekod, menyediakan soalan dan menyelaras komunikasi pakar. Sebelum perjalanan, sahkan temu janji, pemeriksaan, caj hospital, sokongan bahasa dan susulan. Jika pembedahan dipertimbangkan kemudian, tanya siapa yang menyelaras penilaian semula dengan pasukan bedah." },
      ],
      questions: [
        { title: "Adakah imunoterapi sama dengan terapi sasaran atau CAR-T?", text: "Istilah ini tidak bermaksud rawatan yang sama. Bawa nama ubat atau produk sel sebenar supaya pakar menerangkan tujuan, bukti, risiko dan kriteria bagi kes anda." },
        { title: "Bolehkah menghentikan rawatan semasa menunggu pendapat kedua?", text: "Jangan mengubah rawatan dipreskripsikan berdasarkan laman ini. Bincangkan masa dan perubahan dengan doktor yang merawat. Perkhidmatan kami ialah penyelarasan, bukan rawatan kecemasan atau pemberian preskripsi." },
      ], related: ["oncology", "records", "research", "journey", "membership"], sources: immunotherapySources,
    },
    "cell-therapy": {
      label: "Terapi sel: CAR-T, NK, TCR-T dan TIL",
      title: "Terapi sel di China: CAR-T, NK, TCR-T dan TIL",
      description: "Perbezaan CAR-T, NK, TCR-T dan TIL serta soalan bukti, kelayakan, risiko dan urusan penjagaan di China bagi pesakit kanser antarabangsa.",
      sections: [
        { title: "Sel berbeza, soalan rawatan berbeza", text: "Terapi sel ialah istilah luas, bukan satu produk atau jaminan manfaat. Apabila mempertimbangkan penjagaan di China, sahkan produk, jenis kanser dan konteks rawatan. Bukti bagi satu pendekatan tidak semestinya terpakai kepada pendekatan lain." },
        { title: "CAR-T: sel T yang diubah suai", text: "CAR-T mengubah sel T untuk mengenali sasaran tertentu. Tanya produk dan indikasi yang sesuai. Bagi limfoma, sertakan subjenis serta rawatan terdahulu; bagi perbincangan kanser perut berkaitan CLDN18.2, sertakan laporan biomarker lengkap. Pasukan klinikal mengesahkan status produk dan kesesuaian di China." },
        { title: "Sel NK dan penyelidikan CAR-NK", text: "Sel pembunuh semula jadi (NK) berbeza daripada sel T; CAR-NK menggunakan sel NK yang diubah suai. Penyelidikan menguji produk dan kanser tertentu. Pendaftaran kajian atau hasil makmal bukan kelulusan pemasaran. Tanya pengenalan produk atau kajian, bukti bagi kanser anda, institusi bertanggungjawab dan kriteria. Halaman ini bukan tawaran pakej terapi NK atau perkhidmatan meningkatkan imuniti secara umum." },
        { title: "TCR-T dan TIL bukan nama lain CAR-T", text: "TCR-T menggunakan reseptor sel T yang direkayasa; padanan sasaran dan HLA mungkin penting. TIL menggunakan limfosit daripada tisu tumor. Tanya ujian atau sampel yang diperlukan. Nama terapi tidak mengesahkan ketersediaan bagi tumor anda atau di hospital tertentu." },
        { title: "Risiko, pemantauan dan batas praktikal", text: "CAR-T boleh menyebabkan komplikasi imun dan saraf yang serius; risiko pendekatan berbeza. Bincangkan persediaan, pengumpulan atau penghasilan sel jika perlu, pemantauan hospital, penjaga, kecemasan dan susulan panjang. Sahkan rancangan jika keadaan merosot atau produk tidak dapat disediakan sebelum menempah perjalanan." },
        { title: "Sahkan akses di China sebelum pembayaran", text: "Minta institusi membezakan indikasi diluluskan, penggunaan klinikal lain dan protokol penyelidikan. Dapatkan maklumat kawal selia China atau pendaftaran kajian serta status pusat semasa. Rujukan NCI menerangkan konsep dan contoh AS, bukan bukti kelulusan atau pengambilan di China. H&C Care menyokong dokumen dan komunikasi, tidak menjual produk, menentukan kelayakan klinikal atau menjamin penyertaan." },
      ],
      questions: [
        { title: "Adakah biomarker positif menjamin terapi sel?", text: "Tidak. Pasukan klinikal masih menilai diagnosis penuh, rawatan, keadaan semasa dan syarat produk atau protokol. Hasil carian atau satu ujian bukan penerimaan." },
        { title: "Apa yang perlu ada dalam anggaran kos?", text: "Minta pecahan penilaian, caj produk, penjagaan hospital, komplikasi dan susulan. Bagi kajian, tanya kos yang ditanggung penaja. Yuran penyelarasan kami bukan harga terapi sel; hasil atau penjimatan tetap tidak dijanjikan." },
      ], related: ["car-t", "mdt", "research", "records", "journey"], sources: cellSources,
    },
  },
};
