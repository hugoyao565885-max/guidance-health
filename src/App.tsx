
import React, { useEffect, useState } from "react";
import "./index.css";

type PageKey =
  | "home"
  | "about"
  | "treatments"
  | "experts"
  | "hospitals"
  | "outcomes"
  | "journey"
  | "contact";

const pages: Array<{ key: PageKey; label: string }> = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "treatments", label: "Treatments" },
  { key: "experts", label: "Experts" },
  { key: "hospitals", label: "Hospitals" },
  { key: "outcomes", label: "Outcomes" },
  { key: "journey", label: "Patient Journey" },
  { key: "contact", label: "Contact" },
];

function getPageFromHash(): PageKey {
  const raw = window.location.hash.replace("#", "").trim().toLowerCase() as PageKey;
  return pages.some((p) => p.key === raw) ? raw : "home";
}

function SectionShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-shell">
      <div className="container">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 className="page-title">{title}</h1>
        {description ? <p className="page-desc">{description}</p> : null}
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>("home");

  useEffect(() => {
    const syncFromHash = () => setCurrentPage(getPageFromHash());
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const goToPage = (page: PageKey) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const NavLink = ({ page, label }: { page: PageKey; label: string }) => (
    <button
      type="button"
      className={`nav-link ${currentPage === page ? "active" : ""}`}
      onClick={() => goToPage(page)}
    >
      {label}
    </button>
  );

  const home = (
    <>
      <section className="hero">
        <div className="hero-blur blur-1" />
        <div className="hero-blur blur-2" />
        <div className="hero-blur blur-3" />
        <div className="container hero-grid">
          <div>
            <div className="pill">Clinically Led Lymphoma Care in Guangzhou</div>
            <h1 className="hero-title">
              Advanced Lymphoma Treatment
              <span>with Expert Access, Modern Cell Therapy, and Better Value</span>
            </h1>
            <p className="hero-copy">
              We are not a traditional medical intermediary. We are a medically led oncology team helping
              international patients access CAR-T, NK cell therapy, precision immunotherapy, and specialist-led
              treatment pathways in Guangzhou.
            </p>

            <div className="cta-row">
              <button type="button" className="btn btn-dark" onClick={() => goToPage("contact")}>
                Start Consultation
              </button>
              <button type="button" className="btn btn-light" onClick={() => goToPage("journey")}>
                View Patient Journey
              </button>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">1/3</div>
                <div className="stat-text">
                  Approximate cost level compared with some international treatment markets
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-value">CAR-T</div>
                <div className="stat-text">
                  NK, TCR-T, ADC, bispecific antibodies, and integrated immunotherapy options
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-value">MDT</div>
                <div className="stat-text">
                  Hospital-based care guided by lymphoma experts, oncology nurses, and multidisciplinary planning
                </div>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-inner">
              <div className="eyebrow">Why patients pay attention</div>
              <div className="panel-stack">
                <div className="mini-card">
                  <div className="mini-card-title">Clinically led, not referral-only</div>
                  <div className="mini-card-text">
                    Cases are reviewed within a real oncology treatment framework, with direct physician involvement in
                    evaluation and planning.
                  </div>
                </div>
                <div className="mini-card">
                  <div className="mini-card-title">Advanced therapy access in Guangzhou</div>
                  <div className="mini-card-text">
                    Cell therapy, immunotherapy, targeted treatment, and specialist collaboration are brought into one
                    coordinated pathway.
                  </div>
                </div>
                <div className="mini-card">
                  <div className="mini-card-title">Fast first-step process</div>
                  <div className="mini-card-text">
                    Patients submit records by email, receive follow-up within 3 days, and can move quickly into an
                    online medical review.
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-title">Direct contact</div>
                <div className="contact-card-text">
                  Hugo Yao · hugoyao565885@gmail.com · WhatsApp +852 95813961
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section">
        <div className="container card-grid three">
          <div className="card">
            <h3>Clinically led team</h3>
            <p>Direct physician involvement in patient care, not a traditional medical intermediary model.</p>
          </div>
          <div className="card">
            <h3>Advanced therapies</h3>
            <p>CAR-T, NK, TCR-T, ADC, bispecific antibodies, and precision immunotherapy options.</p>
          </div>
          <div className="card">
            <h3>Cost advantage</h3>
            <p>Treatment may cost around one-third compared with some other international treatment destinations.</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container narrow center">
          <h2 className="section-heading">Led by lymphoma experts</h2>
          <p className="page-desc center">
            Our team includes Dr. Cai Qichun and Professor Huang Huiqiang, supported by a broader network of oncology
            specialists across Guangdong and beyond.
          </p>
          <div className="cta-row center">
            <button type="button" className="btn btn-light" onClick={() => goToPage("experts")}>
              View Expert Profiles
            </button>
            <button type="button" className="btn btn-light" onClick={() => goToPage("hospitals")}>
              Explore Hospitals
            </button>
            <button type="button" className="btn btn-light" onClick={() => goToPage("journey")}>
              View Patient Journey
            </button>
          </div>
        </div>
      </section>

      <section className="consult-strip">
        <div className="container narrow center">
          <h2 className="section-heading">Start your consultation</h2>
          <p className="page-desc center">Contact us directly to discuss your case and explore treatment options.</p>
          <div className="cta-row center">
            <a href="mailto:hugoyao565885@gmail.com" className="btn btn-dark">
              Email Hugo
            </a>
            <a href="https://wa.me/85295813961" className="btn btn-light">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );

  const about = (
    <SectionShell
      eyebrow="About Us"
      title="A medically led oncology team, not a traditional intermediary"
      description="We are a professional oncology team made up of cancer physicians, lymphoma specialists, and oncology nurses. Unlike conventional medical coordination agencies, our work is clinically driven and directly connected to patient treatment."
    >
      <div className="card-grid two">
        <div className="card large">
          <h3>Who we are</h3>
          <p>
            Our core strength lies in hospital-based oncology care, especially in lymphoma and advanced cancer
            treatment. We work with structured treatment pathways that combine immunotherapy, cell therapy, targeted
            therapy, and multidisciplinary care.
          </p>
          <p>
            Because we are part of the treatment process itself, our guidance is grounded in clinical realities rather
            than purely administrative coordination.
          </p>
        </div>
        <div className="card large">
          <h3>What makes us different</h3>
          <div className="stack-list">
            <div className="soft-item">Clinically led oncology team</div>
            <div className="soft-item">Direct physician involvement in treatment</div>
            <div className="soft-item">Access to leading lymphoma experts</div>
            <div className="soft-item">Multidisciplinary care across major hospitals</div>
          </div>
        </div>
      </div>
      <div className="banner-card">
        <h3>Expert network</h3>
        <p>
          In addition to our core clinical team, we collaborate with oncology professors and senior specialists across
          Guangdong Province, as well as selected national and international experts. This helps us support complex
          cases with broader specialist input and more flexible treatment strategy design.
        </p>
      </div>
    </SectionShell>
  );

  const treatments = (
    <SectionShell
      eyebrow="Treatments"
      title="Advanced treatment options for lymphoma and complex cancers"
      description="Our program emphasizes individualized treatment planning. Depending on diagnosis, disease stage, prior therapy, and overall condition, patients may be considered for advanced cellular therapy, immunotherapy, targeted therapy, or integrated combination treatment."
    >
      <div className="card-grid four">
        {[
          {
            title: "CAR-T Therapy",
            text: "A highly targeted cellular therapy with strong activity in relapsed or refractory lymphoma and other hematologic malignancies.",
          },
          {
            title: "NK Cell Therapy",
            text: "A rapid-response immune approach that may support immune surveillance, improve immune balance, and enhance antibody-based treatment effects.",
          },
          {
            title: "TCR-T / TIL",
            text: "Precision cellular approaches with particular potential in solid tumors and complex advanced cases where other options may be limited.",
          },
          {
            title: "ADC & Immunotherapy",
            text: "Integrated use of targeted drugs, bispecific antibodies, PD-1 or PD-L1 therapy, and individualized immunotherapy strategies.",
          },
        ].map((item) => (
          <div key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="soft-banner">
        <h3>Why treatment in China can be attractive</h3>
        <p>
          In many cases, treatment in China may cost around one-third of what patients may pay in some other countries,
          while still offering access to advanced oncology drugs, cellular therapy programs, and rapidly developing
          biotech resources.
        </p>
      </div>
    </SectionShell>
  );

  const experts = (
    const experts = (
  <SectionShell
    eyebrow="Experts"
    title="Led by lymphoma specialists with complementary expertise"
    description="Our core expert structure combines deep lymphoma treatment experience, immunotherapy expertise, stem cell transplantation capability, and wider multidisciplinary collaboration."
  >
    <div className="card-grid two">
      {/* Dr. Cai */}
      <div className="photo-card">
       <img
        src="/cai-qichun.jpg"
        alt="Dr. Cai Qichun"
        className="photo-real"
     />
        <div className="photo-content">
          <h3>Dr. Cai Qichun</h3>
          <div className="subtle">
            Chief Physician · Director of Oncology Center, Clifford Hospital · Master&apos;s Supervisor, Jinan University
          </div>

          <p>
            Dr. Cai Qichun is a senior oncologist with over 30 years of clinical experience in lymphoma and
            immunotherapy-based cancer treatment. She completed her undergraduate, master&apos;s, and doctoral training
            at Sun Yat-sen University.
          </p>

          <p>
            Her clinical work focuses on precision immunotherapy, low-toxicity treatment strategies, and individualized
            cancer care. She established a dedicated immunotherapy ward and has been actively involved in the clinical
            translation of cellular therapies, targeted therapies, and tumor immunoregulation approaches.
          </p>

          <p>
            Dr. Cai has made significant contributions to the development of the P-GEMOX regimen for NK/T-cell lymphoma,
            which has been incorporated into the NCCN guidelines as a first-line treatment.
          </p>

          <p>
            Her research output includes more than 40 peer-reviewed publications in journals such as Nature Medicine,
            Science China Life Sciences, and National Science Review.
          </p>
        </div>
      </div>

      {/* Prof. Huang */}
      <div className="photo-card">
        <img
         src="/huang-huiqiang.jpg"
         alt="Professor Huang Huiqiang"
         className="photo-real"
        />
        <div className="photo-content">
          <h3>Professor Huang Huiqiang</h3>
          <div className="subtle">
            Deputy Director of Internal Medicine · Director of Stem Cell Transplant Unit · Chief Physician · Professor · PhD Supervisor · Sun Yat-sen University Cancer Center
          </div>

          <p>
            Professor Huang Huiqiang is a leading expert in hematologic malignancies and lymphoma, with decades of
            clinical experience at one of China&apos;s top oncology centers. His work focuses particularly on NK/T-cell
            lymphoma and complex, treatment-resistant cases.
          </p>

          <p>
            He has extensive experience in malignant lymphoma management, autologous hematopoietic stem cell
            transplantation, and integrated systemic therapy for advanced cancers.
          </p>

          <p>
            Professor Huang led the development of the P-GEMOX regimen, which significantly improved outcomes for
            patients with NK/T-cell lymphoma and has been widely recognized in international lymphoma research and
            clinical practice.
          </p>

          <p>
            He is also actively involved in clinical trials exploring immunotherapy, including PD-1-based treatment
            strategies, and the application of molecular diagnostics in treatment monitoring.
          </p>
        </div>
      </div>
    </div>

    <div className="soft-banner">
      <h3>Broader specialist collaboration</h3>
      <p>
        Beyond the core team, patients may benefit from collaboration with senior oncology professors and
        multidisciplinary specialists across Guangdong Province, creating more flexible pathways for complex or
        advanced cases.
      </p>
    </div>
  </SectionShell>
);

  const hospitals = (
    <SectionShell
      eyebrow="Hospitals"
      title="Hospital-based treatment resources in Guangzhou"
      description="Our care pathways are built around real hospital systems in Guangzhou, combining specialist expertise, inpatient capability, oncology nursing, and multidisciplinary treatment planning."
    >
      <div className="card-grid two">
        <div className="photo-card">
          <div className="photo-slot">Hospital Photo</div>
          <div className="photo-content">
            <h3>Clifford Hospital</h3>
            <p>
              Clifford Hospital provides an international-facing treatment environment with oncology infrastructure,
              inpatient support, and a setting that can be reassuring for overseas patients and families.
            </p>
            <p>
              The oncology center is designed for integrated treatment planning and practical patient management,
              especially in lymphoma, immunotherapy, and advanced cancer care.
            </p>
          </div>
        </div>

        <div className="photo-card">
          <div className="photo-slot">Hospital Photo</div>
          <div className="photo-content">
            <h3>Sun Yat-sen University Cancer Center</h3>
            <p>
              One of China&apos;s leading oncology centers, Sun Yat-sen University Cancer Center contributes high-level
              specialist expertise, strong lymphoma experience, and a broad academic and clinical oncology platform.
            </p>
            <p>
              This connection strengthens access to advanced opinions, multidisciplinary planning, and broader treatment
              options for difficult cases.
            </p>
          </div>
        </div>
      </div>

      <div className="card-grid three compact-top">
        <div className="soft-card">
          <h3>Hospital-based care</h3>
          <p>Real physicians, real treatment settings, and direct integration into oncology workflows.</p>
        </div>
        <div className="soft-card">
          <h3>Multidisciplinary structure</h3>
          <p>
            Treatment planning can involve oncology, hematology, transplantation, immunotherapy, nursing, and
            supportive care resources.
          </p>
        </div>
        <div className="soft-card">
          <h3>International patient readiness</h3>
          <p>The pathway is designed to support patients traveling from Europe, North America, and Southeast Asia.</p>
        </div>
      </div>
    </SectionShell>
  );

  const outcomes = (
    <SectionShell
      eyebrow="Outcomes"
      title="Real patient outcomes"
      description="These examples reflect real-world clinical experience in lymphoma and advanced cancer care. Outcomes differ by diagnosis, disease stage, prior therapy, and overall health status."
    >
      <div className="card-grid three">
        {[
          {
            title: "Relapsed DLBCL",
            desc: "A patient with multiple relapses after prior chemotherapy achieved complete remission following CAR-T therapy, with ongoing disease control during follow-up.",
          },
          {
            title: "Elderly CNS Lymphoma",
            desc: "An elderly patient not suitable for intensive therapy showed significant tumor reduction and neurological improvement after integrated immunotherapy-based treatment.",
          },
          {
            title: "Refractory Lymphoma",
            desc: "A refractory lymphoma patient who failed multiple prior treatments achieved meaningful response after combination cellular therapy and targeted strategies.",
          },
        ].map((item) => (
          <div key={item.title} className="photo-card">
            <div className="photo-slot small">Medical Image Placeholder</div>
            <div className="photo-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="tiny-note">Outcome observed during clinical follow-up</div>
            </div>
          </div>
        ))}
      </div>
      <p className="fine-print">
        These cases are representative clinical observations and are not guarantees of outcome. Treatment decisions must
        always be made by qualified physicians.
      </p>
    </SectionShell>
  );

  const journey = (
    <SectionShell
      eyebrow="Patient Journey"
      title="A clear process from first inquiry to treatment planning"
      description="For international patients, clarity matters as much as treatment itself. Our process is designed to help patients and families understand what to prepare, what happens next, and how clinical review is organized."
    >
      <div className="journey-grid">
        {[
          {
            step: "01",
            title: "Submit an inquiry",
            text: "Start by contacting Hugo Yao and sending an initial consultation request by email.",
          },
          {
            step: "02",
            title: "Send medical records",
            text: "Please include key documents such as case history, imaging and test results, pathology reports, genetic testing, and prior treatment details.",
          },
          {
            step: "03",
            title: "Initial review and reply",
            text: "After receiving the materials, we will review the case and contact you within 3 days to arrange an online meeting time.",
          },
          {
            step: "04",
            title: "Online medical evaluation",
            text: "Our medical team will assess the case during an online meeting, discuss the condition, and clarify key treatment questions.",
          },
          {
            step: "05",
            title: "Preliminary treatment direction",
            text: "After the evaluation, we will provide a preliminary treatment direction together with an estimated price range.",
          },
        ].map((item) => (
          <div key={item.step} className="card">
            <div className="eyebrow step">{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="soft-banner">
        <h3>What to prepare before sending your email</h3>
        <div className="prep-grid">
          <div className="prep-item">Case history and current diagnosis</div>
          <div className="prep-item">Pathology report</div>
          <div className="prep-item">Imaging and examination results</div>
          <div className="prep-item">Genetic testing, if available</div>
          <div className="prep-item wide">
            Treatment history, including chemotherapy, immunotherapy, targeted therapy, radiation, transplantation, or
            cell therapy
          </div>
        </div>
      </div>
    </SectionShell>
  );

  const contact = (
    <SectionShell
      eyebrow="Contact"
      title="Start your consultation"
      description="Contact us directly to discuss your case and explore treatment options in Guangzhou."
    >
      <div className="contact-wrap">
        <div className="cta-row">
          <a href="mailto:hugoyao565885@gmail.com" className="btn btn-dark">
            Email Hugo
          </a>
          <a href="https://wa.me/85295813961" className="btn btn-light">
            WhatsApp
          </a>
        </div>
        <div className="contact-box">
          <div>
            <strong>Contact Person:</strong> Hugo Yao
          </div>
          <div>
            <strong>Email:</strong> hugoyao565885@gmail.com
          </div>
          <div>
            <strong>WhatsApp:</strong> +852 95813961
          </div>
        </div>
      </div>
    </SectionShell>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return about;
      case "treatments":
        return treatments;
      case "experts":
        return experts;
      case "hospitals":
        return hospitals;
      case "outcomes":
        return outcomes;
      case "journey":
        return journey;
      case "contact":
        return contact;
      case "home":
      default:
        return home;
    }
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="container nav-bar">
          <div>
            <div className="brand">Guidance Health</div>
            <div className="brand-sub">INTERNATIONAL LYMPHOMA ACCESS</div>
          </div>
          <nav className="nav-desktop">
            {pages.map((page) => (
              <NavLink key={page.key} page={page.key} label={page.label} />
            ))}
          </nav>
          <button type="button" onClick={() => goToPage("contact")} className="btn btn-dark small">
            Get Started
          </button>
        </div>
      </header>

      <main>{renderPage()}</main>
    </div>
  );
}
