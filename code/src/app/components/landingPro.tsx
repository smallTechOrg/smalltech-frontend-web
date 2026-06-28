"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./common/button";
import { techItems } from "../offerings/icons";
import { techDomains, businessDomains } from "../domains/constants";
import { trainingTracks, readingList } from "../training/constants";
import EmbedScript from "./embedScript";

/* normalise "./foo.png" | "foo.png" -> "/foo.png" */
const asset = (s: string) => "/" + s.replace(/^\.?\//, "");

const products = [
  {
    image: "/local.png",
    title: "#local",
    role: "Location-Based Community Platform",
    tag: "Flagship · Civic Tech",
    description:
      "The fastest way to report potholes, illegal dumping, broken lights and other civic issues directly to your local government.",
    cta: "Download",
    url: "https://local.smalltech.in",
  },
  {
    image: "/robot.svg",
    title: "Zer0",
    role: "AI Agents for Small Businesses",
    tag: "AI Agents",
    description:
      "Embeddable smart agent for your website. Automate customer support, lead generation, and sales with AI.",
    cta: "Visit Site",
    url: "https://zero.smalltech.in",
  },
  {
    image: "/ai.png",
    title: "zero-shot SDD",
    role: "Claude Code Native Coding Agent Harness",
    tag: "Open Source · Dev Tools",
    description:
      "An open-source spec-driven-development harness for Claude Code — orchestrating autonomous coding agents for zero-shot software delivery.",
    cta: "View on GitHub",
    url: "https://github.com/smallTechOrg/zero-shot-sdd-harness",
  },
];

const clients = [
  { name: "Baamboojah", logo: "/baamboojah-logo.svg", url: "https://baamboojah.com", w: 90, h: 90 },
  { name: "UP Police", logo: "/up police.png", url: "https://www.linkedin.com/posts/madhyamakist_what-does-real-sovereign-ai-mean-for-india-ugcPost-7462018105133940736-wDwl", w: 90, h: 90 },
  { name: "Canvs", logo: "/canvs.svg", url: "", w: 180, h: 43 },
  { name: "Swiggy", logo: "/swiggy.png", url: "", w: 90, h: 90 },
  { name: "MediBuddy", logo: "/medibuddy.png", url: "", w: 90, h: 90 },
  { name: "Super Procure", logo: "/super procure.png", url: "", w: 200, h: 80 },
  { name: "Loblaws", logo: "/loblaws.svg", url: "", w: 200, h: 36 },
  { name: "Digital Futurists", logo: "/df.png", url: "", w: 170, h: 48 },
];

const open = (url: string) => url && window.open(url, "_blank");

/* Open Zero chat widget if present, else fall back to email */
const openChat = () => {
  const container = document.querySelector("[data-embed-container]") as HTMLElement | null;
  const launcher = container?.querySelector('button, a, [role="button"]') as HTMLElement | null;
  if (launcher || container) {
    (launcher || container)!.click();
  } else {
    window.open("mailto:contact@smalltech.in");
  }
};

const NAV: { label: string; href?: string; chat?: boolean }[] = [
  { label: "Work", href: "#work" },
  { label: "AI Training", href: "#training" },
  { label: "Contact", chat: true },
];

export default function LandingPro() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Zero chat agent widget */}
      <EmbedScript />
      {/* ===== HEADER ===== */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-seashell-pink/80 border-b border-redwood/15 shadow-[0_8px_30px_-12px_rgba(90,42,39,0.35)]"
            : "backdrop-blur-md bg-seashell-pink/40 border-b border-transparent"
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto flex items-center justify-between px-[4%] transition-all duration-300 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          {/* Brand */}
          <a href="#home" className="group flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="SmallTech Logo"
              width={0}
              height={0}
              sizes="64px"
              priority
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "h-9" : "h-11"
              }`}
            />
            <span className="flex flex-col leading-none">
              <span className="text-[24px] md:text-[26px] font-[700] text-deep-mocha leading-none tracking-[-0.01em]">
                smallTech
              </span>
              <span className="text-[11px] md:text-[12px] font-[300] text-redwood leading-none tracking-[0.18em] uppercase mt-1">
                replicable success
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) =>
              item.chat ? (
                <button
                  key={item.label}
                  onClick={openChat}
                  className="relative px-4 py-2 text-[15px] font-[400] text-liver-brown hover:text-expresso transition-colors cursor-pointer
                    after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-redwood
                    after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-[15px] font-[400] text-liver-brown hover:text-expresso transition-colors
                    after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-redwood
                    after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile menu toggle */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-xl bg-almond-silk hover:bg-cream transition-colors cursor-pointer"
            >
              {/* top bar — rotates to form top of X */}
              <span className={`absolute w-5 h-0.5 rounded-full bg-expresso transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-0" : "-translate-y-[6px]"}`} />
              {/* middle bar — fades out */}
              <span className={`absolute w-5 h-0.5 rounded-full bg-expresso transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`} />
              {/* bottom bar — rotates to form bottom of X */}
              <span className={`absolute w-5 h-0.5 rounded-full bg-expresso transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col mx-4 mb-4 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-redwood/10 shadow-[0_8px_30px_-8px_rgba(90,42,39,0.2)]">
            {NAV.map((item, i) =>
              item.chat ? (
                <button
                  key={item.label}
                  onClick={() => { setMenuOpen(false); openChat(); }}
                  className={`flex items-center justify-between px-5 py-4 text-left text-[16px] font-[400] text-liver-brown active:bg-almond-silk/50 cursor-pointer ${i < NAV.length - 1 ? "border-b border-redwood/8" : ""}`}
                >
                  {item.label}
                  <span className="text-redwood text-lg">→</span>
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-4 text-[16px] font-[400] text-liver-brown active:bg-almond-silk/50 ${i < NAV.length - 1 ? "border-b border-redwood/8" : ""}`}
                >
                  {item.label}
                  <span className="text-redwood/40 text-lg">›</span>
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-[4%]">
        {/* ===== HERO ===== */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center pt-12 md:pt-16 pb-16">
          <div className="flex flex-col">
            <h1 className="text-[40px] sm:text-[52px] md:text-[58px] font-[600] leading-[1.05] text-deep-mocha mb-5">
              Changing how the world{" "}
              <span className="bg-[linear-gradient(90deg,#8D5B4C,#B8887A)] bg-clip-text text-transparent">
                works.
              </span>
            </h1>
            <p className="text-[17px] md:text-lg font-[300] text-liver-brown max-w-xl mb-8">
              We are a collective of software developers, designers and thinkers building tools
              and platforms that empower individuals and communities — striking balance between
              production and consumption for a more equitable, sustainable future.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => open("mailto:contact@smalltech.in?subject=AI%20Training")}
                className="rounded-full bg-expresso text-seashell-pink text-[15px] font-[500] px-6 py-3 shadow-[0_3px_8px_0_rgba(0,0,0,0.25)] hover:opacity-90 transition cursor-pointer"
              >
                Explore AI Training
              </button>
              <a
                href="#work"
                className="rounded-full border border-brown/40 text-brown text-[15px] font-[400] px-6 py-3 hover:bg-white/40 transition"
              >
                See our work
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {["AI Integration", "Web & App Dev", "Cloud Architecture"].map((p) => (
                <span key={p} className="bg-white/50 border border-brown/15 text-liver-brown text-[13px] font-[400] px-4 py-1.5 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* GLOBE — kept */}
          <div className="relative flex items-center justify-center md:justify-end">
            <Image
              src="/globe.png"
              width={560}
              height={560}
              alt="globe"
              priority
              className="w-[260px] md:w-[480px] max-w-none animate-spin [animation-duration:26s] [animation-timing-function:linear]"
            />
          </div>
        </section>

        {/* ===== WORK ===== */}
        <section id="work" className="py-16">
          <SectionHead eyebrow="Portfolio" title="Building smart tools for a smarter world"
            sub="Explore our portfolio of AI agents and apps." />
          <div className="grid md:grid-cols-4 md:auto-rows-[1fr] gap-4">
            {/* feature tile */}
            <div className="md:col-span-2 md:row-span-2 rounded-[24px] p-7 flex flex-col justify-between bg-[linear-gradient(150deg,#6A534D_0%,#5C4742_100%)] shadow-[0_3px_18px_0_rgba(0,0,0,0.18)]">
              <div>
                <p className="text-almond-silk text-[11px] font-[600] tracking-[2px] uppercase mb-4">{products[0].tag}</p>
                <Image src={products[0].image} alt={products[0].title} width={72} height={72} className="object-contain opacity-90 mb-4" />
                <h3 className="text-seashell-pink text-[26px] font-[600] mb-1">{products[0].title}</h3>
                <p className="text-almond-silk text-[14px] font-[400] mb-3">{products[0].role}</p>
                <p className="text-cream text-[15px] font-[300]">{products[0].description}</p>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => open(products[0].url)}
                  className="group inline-flex items-center gap-2 rounded-full bg-seashell-pink text-expresso text-[15px] font-[500] px-6 py-3 hover:bg-white transition cursor-pointer"
                >
                  {products[0].cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </div>
            {/* two smaller tiles */}
            {products.slice(1).map((p) => (
              <div key={p.title} className="md:col-span-2 rounded-[24px] p-6 flex items-start gap-5 bg-[linear-gradient(to_bottom,#F2E3E1_0%,#DBC2BD_100%)] shadow-[0_3px_20px_0_rgba(0,0,0,0.15)]">
                <Image src={p.image} alt={p.title} width={64} height={64} className="object-contain opacity-70 shrink-0" />
                <div className="flex flex-col">
                  <h3 className="text-expresso text-[20px] font-[600] leading-tight">{p.title}</h3>
                  <p className="text-redwood text-[13px] font-[500] mb-1.5">{p.role}</p>
                  <p className="text-liver-brown text-[14px] font-[300] mb-3 line-clamp-3">{p.description}</p>
                  <button onClick={() => open(p.url)} className="self-start text-expresso text-[14px] font-[500] hover:underline cursor-pointer">
                    {p.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ===== BRANDS MARQUEE — kept ===== */}
          <div className="mt-12">
            <h2 className="text-expresso font-[500]">Brands</h2>
            <p className="text-liver-brown font-[300] mt-1 mb-6">Brands our team has worked with</p>
            <div className="flex flex-col gap-3">
              {[clients, [...clients].reverse()].map((row, rowIdx) => (
                <div key={rowIdx} className="brands-row relative overflow-hidden h-[90px] md:h-[110px]">
                  <div
                    className={`absolute flex top-0 left-0 ${rowIdx === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}
                    style={{ width: "max-content", willChange: "transform", transform: "translateZ(0)" }}
                  >
                    {Array.from({ length: 10 }, () => row).flat().map((c, i) => (
                      <button
                        key={i}
                        onClick={() => open(c.url)}
                        className={`flex items-center justify-center w-[160px] md:w-[240px] shrink-0 px-2 bg-transparent border-0 ${c.url ? "cursor-pointer" : "cursor-default"}`}
                      >
                        <Image src={c.logo} alt={c.name} width={c.w} height={c.h} style={{ width: c.w, height: c.h }} className="object-contain shrink-0" loading="eager" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== AI TRAINING ===== */}
        <section id="training" className="py-16">
          <div className="rounded-[28px] p-7 md:p-12 bg-[linear-gradient(135deg,#6A534D_0%,#5C4742_100%)] shadow-[0_3px_24px_0_rgba(0,0,0,0.18)]">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
              <div>
                <span className="inline-block bg-almond-silk text-expresso text-[12px] font-[600] tracking-wide px-3 py-1 rounded-full mb-3">
                  New · AI Training
                </span>
                <h2 className="text-seashell-pink text-[30px] md:text-[38px] font-[600] leading-tight">
                  Teach your team to build with AI
                </h2>
              </div>
              <p className="text-cream font-[300] md:max-w-sm">
                Practitioner-led programs from the engineers behind our own AI agents — from
                literacy to shipping agentic systems with Claude Code.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {trainingTracks.map((t, i) => (
                <div
                  key={t.title}
                  className={`rounded-[20px] p-6 flex flex-col ${
                    i === 1
                      ? "bg-[linear-gradient(to_bottom,#F2E3E1_0%,#DBC2BD_100%)]"
                      : "bg-white/[0.06] border border-cream/15"
                  }`}
                >
                  <span className={`text-[11px] font-[600] tracking-[1.5px] uppercase mb-2 ${i === 1 ? "text-redwood" : "text-almond-silk"}`}>
                    {t.level}
                  </span>
                  <h3 className={`text-[19px] font-[600] mb-2 ${i === 1 ? "text-expresso" : "text-seashell-pink"}`}>{t.title}</h3>
                  <p className={`text-[14px] font-[300] mb-4 ${i === 1 ? "text-liver-brown" : "text-cream"}`}>{t.blurb}</p>
                  <ul className="mt-auto space-y-1.5">
                    {t.points.map((pt) => (
                      <li key={pt} className={`text-[13px] font-[300] flex gap-2 ${i === 1 ? "text-liver-brown" : "text-cream"}`}>
                        <span className="text-rose font-[600]">›</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[20px] p-5 md:p-6 bg-white/[0.05] border border-cream/15 flex flex-col md:flex-row md:items-center gap-5">
              <Image src="/workshop.svg" alt="workshop" width={64} height={64} className="object-contain opacity-90 shrink-0" />
              <div className="flex-1">
                <h3 className="text-seashell-pink text-[17px] font-[500] mb-1">Built on the canon</h3>
                <p className="text-cream text-[13px] font-[300] mb-2">Our curriculum draws on the foundational texts in agentic AI:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  {readingList.map((b) => (
                    <li key={b} className="text-cream text-[12px] font-[300] flex gap-2"><span className="text-rose">•</span>{b}</li>
                  ))}
                </ul>
              </div>
              <Button text="Book a workshop" onClick={() => open("mailto:contact@smalltech.in?subject=AI%20Training")} />
            </div>
          </div>
        </section>

        {/* ===== TECHNOLOGIES ===== */}
        <section id="tech" className="py-16">
          <SectionHead eyebrow="Stack" title="Technologies we support"
            sub="Integrate AI across your existing tech stack." />
          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-3">
            {techItems.map((icon) => (
              <div key={icon.src} className="aspect-square rounded-[16px] bg-white/45 border border-white/60 grid place-items-center hover:bg-white/70 transition">
                <Image src={asset(icon.src)} alt={icon.alt} width={42} height={42} className="object-contain opacity-80" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== DOMAINS ===== */}
        <section id="domains" className="py-16">
          <SectionHead eyebrow="Reach" title="Domains we work across"
            sub="Deep expertise across technology and business workflows." />
          <div className="grid md:grid-cols-2 gap-8">
            <DomainGroup label="Tech Domains" items={techDomains.flat()} />
            <DomainGroup label="Business Workflows" items={businessDomains.flat()} />
          </div>
        </section>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-redwood/10 mt-8">
        <div className="max-w-[1200px] mx-auto px-[4%] py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] font-[300] text-deep-mocha">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={0} height={0} sizes="36px" className="h-7 w-auto object-contain" />
            <span className="font-[500]">smallTech</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/smallTechOrg" target="_blank" rel="noreferrer" className="hover:underline">github</a>
            <a href="mailto:contact@smalltech.in" className="hover:underline">mail</a>
            <span className="text-expresso">© 2026 madhyamakist pvt ltd</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mb-8">
      <p className="text-redwood text-[12px] font-[600] tracking-[3px] uppercase mb-2">{eyebrow}</p>
      <h2 className="text-deep-mocha text-[30px] md:text-[36px] font-[600] leading-tight">{title}</h2>
      <p className="text-liver-brown text-[16px] md:text-[17px] font-[300] mt-1">{sub}</p>
    </div>
  );
}

function DomainGroup({ label, items }: { label: string; items: { src: string; title: string; subtitle: string }[] }) {
  return (
    <div>
      <h3 className="text-redwood text-[13px] font-[600] tracking-[2px] uppercase mb-4">{label}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((d) => (
          <div key={d.title} className="rounded-[16px] p-4 bg-white/50 border border-white/60 flex items-center gap-4">
            <Image src={asset(d.src)} alt={d.title} width={40} height={40} className="object-contain opacity-80 shrink-0" />
            <div>
              <strong className="block text-expresso text-[16px] font-[600]">{d.title}</strong>
              <span className="text-liver-brown text-[12px] font-[300]">{d.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
