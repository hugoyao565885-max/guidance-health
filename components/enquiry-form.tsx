"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { useEffect, useRef, type FormEvent } from "react";
import type { PatientContent } from "../lib/patient-content";
import { contact, localeMeta, pagePath, locales, type Locale } from "../lib/site";

export function EnquiryForm({ locale, copy }: { locale: Locale; copy: PatientContent }) {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("service");
    const select = form.current?.elements.namedItem("interest");
    if (selected && /^[0-2]$/.test(selected) && select instanceof HTMLSelectElement) select.value = selected;
  }, []);

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const interest = String(data.get("interest"));
    const selectedLocale = String(data.get("language")) as Locale;
    const text = [
      "H&C Care coordination enquiry",
      `${copy.enquiry.name}: ${String(data.get("name")).trim() || "-"}`,
      `${copy.enquiry.role}: ${copy.enquiry.roles[Number(data.get("role"))]}`,
      `${copy.enquiry.country}: ${String(data.get("country")).trim()}`,
      `${copy.enquiry.language}: ${localeMeta[selectedLocale].nativeLabel}`,
      `${copy.enquiry.interest}: ${interest === "" ? copy.enquiry.undecided : copy.services.plans[Number(interest)].name}`,
      copy.enquiry.consent,
    ].join("\n");
    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    if (submitter instanceof HTMLButtonElement && submitter.value === "whatsapp") {
      window.open(`${contact.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("H&C Care patient enquiry")}&body=${encodeURIComponent(text)}`;
    }
  }

  return (
    <form className="enquiry-form" ref={form} onSubmit={prepareMessage}>
      <h2>{copy.enquiry.formTitle}</h2>
      <div className="form-grid">
        <label>{copy.enquiry.name}<input name="name" autoComplete="name" maxLength={80} /></label>
        <label>{copy.enquiry.country}<input name="country" autoComplete="country-name" required maxLength={80} /></label>
        <label>{copy.enquiry.role}<select name="role">{copy.enquiry.roles.map((role, index) => <option value={index} key={role}>{role}</option>)}</select></label>
        <label>{copy.enquiry.language}<select name="language" defaultValue={locale}>{locales.map((item) => <option value={item} lang={localeMeta[item].htmlLang} key={item}>{localeMeta[item].nativeLabel}</option>)}</select></label>
        <label className="form-full">{copy.enquiry.interest}<select name="interest" defaultValue=""><option value="">{copy.enquiry.undecided}</option>{copy.services.plans.map((plan, index) => <option value={index} key={plan.name}>{plan.name}</option>)}</select></label>
      </div>
      <label className="consent-checkbox"><input name="consent" type="checkbox" required /><span>{copy.enquiry.consent} <Link href={pagePath(locale, "privacy")}>{copy.enquiry.privacy}</Link></span></label>
      <div className="cta-row"><button type="submit" value="email" className="button button-dark"><Mail size={18} aria-hidden="true" />{copy.email}</button><button type="submit" value="whatsapp" className="button button-light"><MessageCircle size={18} aria-hidden="true" />{copy.whatsapp}</button></div>
      <p className="form-note">{copy.enquiry.note}</p>
    </form>
  );
}
