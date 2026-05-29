"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  Facebook,
  HeartHandshake,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Star,
  Users,
  X
} from "lucide-react";
import { Lang, languages, translations } from "@/components/translations";

const logoSrc = "/nibras-logo.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 }
};

function SectionTitle({
  eyebrow,
  title,
  intro
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-sm font-bold text-nibras-purple">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-nibras-ink sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-8 text-slate-600">{intro}</p> : null}
    </motion.div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nibras-lavender text-nibras-purple shadow-sm">
      {children}
    </div>
  );
}

function Navbar({ lang, setLang, t, onBook }: { lang: Lang; setLang: (lang: Lang) => void; t: (typeof translations)[Lang]; onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["#home", t.nav.home],
    ["#programs", t.nav.programs],
    ["#why", t.nav.why],
    ["#testimonials", t.nav.testimonials],
    ["#contact", t.nav.contact]
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/72 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-nibras-purple">
          <Image src={logoSrc} alt={t.hero.logoAlt} width={54} height={54} className="h-12 w-12 rounded-full object-cover shadow-soft" priority />
          <span className="text-2xl font-black text-nibras-purple">نبراس</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-bold text-slate-700 transition hover:text-nibras-purple">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <button type="button" onClick={onBook} className="rounded-full bg-nibras-purple px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#6d3eb7]">
            {t.nav.cta}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-nibras-purple shadow-sm ring-1 ring-purple-100 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="section-shell pb-5 lg:hidden">
          <div className="glass grid gap-2 rounded-soft p-3">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-nibras-lavender">
                {label}
              </a>
            ))}
            <div className="flex items-center justify-between gap-3 px-2 pt-2">
              <LanguageSwitcher lang={lang} setLang={setLang} />
              <button type="button" onClick={() => { setOpen(false); onBook(); }} className="rounded-full bg-nibras-purple px-4 py-3 text-sm font-bold text-white">
                {t.nav.cta}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LanguageSwitcher({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="inline-flex rounded-full bg-nibras-lavender p-1 ring-1 ring-purple-100" aria-label="Language switcher">
      {(["ar", "fr"] as Lang[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLang(item)}
          className={`rounded-full px-4 py-2 text-sm font-black transition ${lang === item ? "bg-white text-nibras-purple shadow-sm" : "text-slate-600 hover:text-nibras-purple"}`}
          aria-pressed={lang === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function LanternScene({ alt }: { alt: string }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-nibras-lavender via-white to-[#fff5d5] blur-2xl" />
      <div className="absolute left-8 top-16 h-16 w-28 rounded-full bg-white/80 blur-sm" />
      <div className="absolute bottom-20 right-3 h-14 w-36 rounded-full bg-white/80 blur-sm" />
      {[["left-6 top-20", 0], ["right-10 top-8", 1.1], ["left-16 bottom-24", 0.6], ["right-16 bottom-12", 1.6]].map(([pos, delay]) => (
        <Star key={pos} className={`absolute ${pos as string} animate-float fill-nibras-glow text-nibras-glow`} size={26} style={{ animationDelay: `${delay}s` }} />
      ))}
      <div className="absolute inset-x-12 top-10 mx-auto flex flex-col items-center">
        <div className="h-16 w-28 rounded-t-full border-8 border-nibras-purple border-b-0" />
        <div className="lantern-body relative h-72 w-56 bg-gradient-to-b from-[#8e66d0] via-nibras-purple to-[#5e35a5] p-5 shadow-soft">
          <div className="absolute inset-x-8 top-10 h-52 rounded-full bg-gradient-to-b from-nibras-glow via-[#fff0a5] to-nibras-pink opacity-90 blur-xl animate-glow" />
          <div className="relative mx-auto flex h-full w-full items-center justify-center rounded-[2rem] bg-white/16 ring-1 ring-white/35">
            <Image src={logoSrc} alt={alt} width={168} height={168} className="h-36 w-36 rounded-full object-cover shadow-glow" priority />
          </div>
        </div>
        <div className="h-9 w-28 rounded-b-full bg-nibras-purple shadow-soft" />
      </div>
    </motion.div>
  );
}

function Hero({ t, onBook }: { t: (typeof translations)[Lang]; onBook: () => void }) {
  return (
    <section id="home" className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr]">
      <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="max-w-2xl">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-nibras-purple shadow-sm ring-1 ring-purple-100">
          <Sparkles size={17} className="fill-nibras-glow text-nibras-glow" />
          {t.hero.badge}
        </motion.div>
        <motion.div variants={fadeUp} className="mt-7 flex items-center gap-4">
          <Image src={logoSrc} alt={t.hero.logoAlt} width={82} height={82} className="h-20 w-20 rounded-full object-cover shadow-soft" priority />
          <p className="text-5xl font-black text-nibras-purple sm:text-6xl">نبراس</p>
        </motion.div>
        <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-black leading-tight text-nibras-ink sm:text-6xl lg:text-7xl">
          {t.hero.title}
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-lg leading-9 text-slate-600 sm:text-xl">
          {t.hero.subtitle}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={onBook} className="rounded-full bg-nibras-purple px-7 py-4 text-center font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#6b3bb6]">
            {t.hero.primary}
          </button>
          <a href="#why" className="rounded-full bg-white px-7 py-4 text-center font-black text-nibras-purple shadow-sm ring-1 ring-purple-100 transition hover:-translate-y-1 hover:bg-nibras-lavender">
            {t.hero.secondary}
          </a>
        </motion.div>
      </motion.div>
      <LanternScene alt={t.hero.logoAlt} />
    </section>
  );
}

function About({ t }: { t: (typeof translations)[Lang] }) {
  const icons = [Sparkles, Users, HeartHandshake, Send];
  return (
    <section id="why" className="py-20">
      <div className="section-shell">
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.intro} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.cards.map(([title, body], index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass rounded-soft p-6 transition hover:-translate-y-2 hover:shadow-glow"
              >
                <IconBadge><Icon size={23} /></IconBadge>
                <h3 className="mt-5 text-xl font-black text-nibras-ink">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Programs({ t }: { t: (typeof translations)[Lang] }) {
  const iconMap = { BookOpen, Moon, Sparkles };
  return (
    <section id="programs" className="py-20">
      <div className="section-shell">
        <SectionTitle eyebrow={t.programs.eyebrow} title={t.programs.title} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.programs.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-soft border border-white/80 bg-white p-7 shadow-soft transition hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <IconBadge><Icon size={24} /></IconBadge>
                  <h3 className="text-2xl font-black text-nibras-ink">{item.title}</h3>
                </div>
                <ul className="mt-7 grid gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 rounded-2xl bg-nibras-lavender/70 px-4 py-3 font-bold text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-nibras-pink shadow-[0_0_16px_rgba(255,143,199,.8)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Classes({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionTitle eyebrow={t.classes.eyebrow} title={t.classes.title} intro={t.classes.note} />
        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-10 right-10 top-9 hidden h-1 rounded-full bg-gradient-to-r from-nibras-pink via-nibras-glow to-nibras-purple lg:block" />
          {t.classes.steps.map((step, index) => (
            <motion.div
              key={step}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-soft bg-white p-6 text-center shadow-soft ring-1 ring-purple-100"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-nibras-glow to-nibras-pink text-xl font-black text-nibras-ink shadow-glow">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-black text-nibras-ink">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <section id="testimonials" className="py-20">
      <div className="section-shell">
        <SectionTitle eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.testimonials.items.map(([name, quote], index) => (
            <motion.figure
              key={name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-soft bg-white p-7 shadow-soft ring-1 ring-purple-100"
            >
              <div className="flex gap-1 text-nibras-glow" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} className="fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-8 text-slate-700">“{quote}”</blockquote>
              <figcaption className="mt-6 font-black text-nibras-purple">{name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ t, onBook }: { t: (typeof translations)[Lang]; onBook: () => void }) {
  return (
    <section className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-nibras-purple via-[#9c65dc] to-nibras-pink px-6 py-14 text-center text-white shadow-soft"
        >
          <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-nibras-glow/35 blur-3xl" />
          <h2 className="relative text-3xl font-black sm:text-5xl">{t.cta.title}</h2>
          <button type="button" onClick={onBook} className="relative mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-nibras-purple shadow-glow transition hover:-translate-y-1">
            {t.cta.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function BookingModal({
  open,
  onClose,
  t,
  lang
}: {
  open: boolean;
  onClose: () => void;
  t: (typeof translations)[Lang];
  lang: Lang;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const phone = String(formData.get("phone") || "").replace(/\D/g, "");
    const dateOfBirth = String(formData.get("dateOfBirth") || "");

    const payload = {
      lang,
      firstName,
      lastName,
      kidName: `${firstName} ${lastName}`.trim(),
      phone,
      dateOfBirth,
      age: dateOfBirth,
      subject: String(formData.get("subject") || ""),
      freeTimes: String(formData.get("freeTimes") || ""),
      comments: String(formData.get("comments") || "")
    };

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 70000);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (response.status === 400 || response.status === 403 || response.status === 422 || response.status === 503) {
        throw new Error("Booking request failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const inputClass = "mt-2 w-full rounded-2xl border border-purple-100 bg-white px-4 py-3 text-nibras-ink outline-none transition placeholder:text-slate-400 focus:border-nibras-purple focus:ring-4 focus:ring-purple-100";

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-nibras-ink/45 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-5 shadow-soft sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black text-nibras-purple">{t.hero.badge}</p>
            <h2 id="booking-title" className="mt-2 text-2xl font-black text-nibras-ink sm:text-3xl">{t.form.title}</h2>
            <p className="mt-2 leading-7 text-slate-600">{t.form.intro}</p>
          </div>
          <button type="button" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-nibras-lavender text-nibras-purple" aria-label={t.form.close}>
            <X size={21} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-black text-slate-700">
            {t.form.firstName}
            <input name="firstName" required minLength={2} placeholder={t.form.firstNamePlaceholder} className={inputClass} />
          </label>
          <label className="text-sm font-black text-slate-700">
            {t.form.lastName}
            <input name="lastName" required minLength={2} placeholder={t.form.lastNamePlaceholder} className={inputClass} />
          </label>
          <label className="text-sm font-black text-slate-700">
            {t.form.phone}
            <input
              name="phone"
              required
              inputMode="numeric"
              pattern="[0-9]{8}"
              minLength={8}
              maxLength={8}
              title={t.form.phoneHint}
              placeholder={t.form.phonePlaceholder}
              className={inputClass}
            />
            <span className="mt-1 block text-xs font-bold text-slate-500">{t.form.phoneHint}</span>
          </label>
          <label className="text-sm font-black text-slate-700">
            {t.form.dateOfBirth}
            <input name="dateOfBirth" required type="date" max={new Date().toISOString().split("T")[0]} className={inputClass} />
          </label>
          <label className="text-sm font-black text-slate-700">
            {t.form.subject}
            <select name="subject" required defaultValue="" className={inputClass}>
              <option value="" disabled>{t.form.subjectPlaceholder}</option>
              {t.form.subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-black text-slate-700 sm:col-span-2">
            {t.form.freeTimes}
            <textarea name="freeTimes" required rows={3} placeholder={t.form.freeTimesPlaceholder} className={inputClass} />
          </label>
          <label className="text-sm font-black text-slate-700 sm:col-span-2">
            {t.form.comments}
            <textarea name="comments" rows={3} placeholder={t.form.commentsPlaceholder} className={inputClass} />
          </label>

          {status === "success" ? <p className="rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700 sm:col-span-2">{t.form.success}</p> : null}
          {status === "error" ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700 sm:col-span-2">{t.form.error}</p> : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-nibras-purple px-7 py-4 font-black text-white shadow-soft transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
          >
            {status === "sending" ? t.form.sending : t.form.submit}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function Contact({ t }: { t: (typeof translations)[Lang] }) {
  const items = [
    [Send, t.contact.whatsapp, "https://wa.me/21626616540"],
    [Mail, t.contact.email, "mailto:contact@nibras.tn"],
    [Facebook, t.contact.facebook, "#"]
  ] as const;
  return (
    <section id="contact" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} />
        <div className="grid gap-4">
          {items.map(([Icon, label, href]) => (
            <a key={label} href={href} className="glass flex items-center gap-4 rounded-soft p-5 font-black text-nibras-ink transition hover:-translate-y-1 hover:text-nibras-purple">
              <IconBadge><Icon size={22} /></IconBadge>
              <span>{label}</span>
              <ChevronDown className="ms-auto rotate-90 text-nibras-pink" size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <footer className="border-t border-purple-100 bg-white/65 py-10">
      <div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-xl items-center gap-4">
          <Image src={logoSrc} alt={t.hero.logoAlt} width={58} height={58} className="h-14 w-14 rounded-full object-cover shadow-soft" />
          <div>
            <p className="text-2xl font-black text-nibras-purple">نبراس</p>
            <p className="mt-1 leading-7 text-slate-600">{t.footer.description}</p>
          </div>
        </div>
        <p className="text-sm font-bold text-slate-500">© 2026 Nibras Academy. {t.footer.copyright}</p>
      </div>
    </footer>
  );
}

export function LandingPage() {
  const [lang, setLangState] = useState<Lang>("ar");
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("nibras-lang") as Lang | null;
    if (stored === "ar" || stored === "fr") {
      setLangState(stored);
    }
  }, []);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    window.localStorage.setItem("nibras-lang", nextLang);
  };

  const t = useMemo(() => translations[lang], [lang]);
  const dir = languages[lang].dir;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <main dir={dir} className="overflow-hidden">
      <Navbar lang={lang} setLang={setLang} t={t} onBook={() => setBookingOpen(true)} />
      <Hero t={t} onBook={() => setBookingOpen(true)} />
      <About t={t} />
      <Programs t={t} />
      <Classes t={t} />
      <Testimonials t={t} />
      <CTA t={t} onBook={() => setBookingOpen(true)} />
      <Contact t={t} />
      <Footer t={t} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} t={t} lang={lang} />
    </main>
  );
}
