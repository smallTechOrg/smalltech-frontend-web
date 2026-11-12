"use client";

import { useState, useEffect, useId, type ReactNode } from "react";
import Image from "next/image";
import {
  hero,
  stats,
  services,
  ethos,
  programmes,
  products,
  zer0,
  aiStack,
  type Product,
} from "../landing/content";
import EmbedScript from "./embedScript";


const clients = [
  { name: "UP Police", logo: "/up police.png", url: "https://www.linkedin.com/posts/madhyamakist_what-does-real-sovereign-ai-mean-for-india-ugcPost-7462018105133940736-wDwl", w: 90, h: 90 },
  { name: "MeitY", logo: "/meity.png", url: "", w: 190, h: 62 },
  { name: "Baamboojah", logo: "/baamboojah-logo.svg", url: "https://baamboojah.com", w: 90, h: 90 },
  { name: "Canvs", logo: "/canvs.svg", url: "", w: 180, h: 43 },
  { name: "Swiggy", logo: "/swiggy.png", url: "", w: 90, h: 90 },
  { name: "MediBuddy", logo: "/medibuddy.png", url: "", w: 90, h: 90 },
  { name: "Super Procure", logo: "/super procure.png", url: "", w: 200, h: 80 },
  { name: "Loblaws", logo: "/loblaws.svg", url: "", w: 200, h: 36 },
  { name: "Digital Futurists", logo: "/df.png", url: "", w: 170, h: 48 },
  { name: "Avanse", logo: "/avanse-logo.svg", url: "", w: 170, h: 45 },
  { name: "TruHome", logo: "/truhome-logo.svg", url: "", w: 140, h: 70 },
  { name: "Ebco", logo: "/ebco.png", url: "", w: 120, h: 70 },
  { name: "Warburg Pincus", logo: "/Warburg-pincus.png", url: "", w: 160, h: 89 },
  { name: "Parksons", logo: "/Parksons-logo-1.png", url: "", w: 200, h: 46 },
];

const mailto = (subject: string) =>
  `mailto:contact@smalltech.in?subject=${encodeURIComponent(subject)}`;

/* Open Zero chat widget with a pre-filled visitor message if present, else fall back to email */
const openChat = () => {
  const widget = document.querySelector(`iframe[src^="${process.env.NEXT_PUBLIC_EMBED_BASE_URL}"]`);
  if (widget) {
    window.dispatchEvent(
      new CustomEvent("open-chat-widget", { detail: { message: "Hey, I want to contact you." } })
    );
  } else {
    window.open("mailto:contact@smalltech.in");
  }
};

const NAV: { label: string; href?: string; chat?: boolean }[] = [
  { label: "Zer0", href: "#zer0" },
  { label: "What we do", href: "#services" },
  { label: "Portfolio", href: "#products" },
  { label: "AI Training", href: "#training" },
  { label: "Contact", chat: true },
];

export default function LandingPro() {
  const [scrolled, setScrolled] = useState(false);

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
        className={`sticky top-0 z-50 bg-readme border-b transition-colors duration-300 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto flex items-center justify-between px-[4%] transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Brand — supplied Primary lockup (symbol + wordmark + "Replicable Success").
              Never retype it. Min width per guide is 120px; h-9 renders ~163px wide. */}
          <a href="#home" className="flex items-center shrink-0" aria-label="smallTech home">
            <Image
              src="/logo-smalltech.svg"
              alt="smallTech"
              width={416}
              height={92}
              priority
              className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-10 md:h-12"}`}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9 ml-auto pl-12">
            {NAV.map((item) =>
              item.chat ? (
                <button
                  key={item.label}
                  onClick={openChat}
                  className="relative text-[15px] font-[600] text-muted hover:text-ink transition-colors cursor-pointer
                    after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-ink
                    after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-[15px] font-[600] text-muted hover:text-ink transition-colors
                    after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-ink
                    after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-[4%]">
        {/* ===== HERO ===== */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center pt-12 md:pt-16 pb-10">
          <div className="flex flex-col">
            <p className="label mb-4">
              {hero.eyebrow}
            </p>
            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-[700] leading-[1.1] tracking-[-0.02em] text-ink mb-5">
              {hero.titleLead}{" "}
              {/* Gradient along the Gold Master scale (70 -> 50). Display size only. */}
              <span className="bg-[linear-gradient(90deg,var(--color-gold-70),var(--color-gold))] bg-clip-text text-transparent">
                {hero.titleAccent}
              </span>
            </h1>
            <p className="text-[16px] md:text-[17px] font-[400] leading-[1.6] text-muted max-w-xl mb-8">
              {hero.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#zer0"
                className="ga-cta rounded-[6px] bg-gold text-ink text-[15px] font-[600] px-6 py-3 hover:bg-gold-60 transition-colors"
              >
                Explore Zer0
              </a>
              <a
                href="#products"
                className="ga-cta rounded-[6px] border border-ink text-ink text-[15px] font-[600] px-6 py-3 hover:bg-surface transition-colors"
              >
                See our portfolio
              </a>
            </div>
          </div>

          {/* GLOBE — clipped: the spin animation's bounding box grows by √2 as it
              rotates, which otherwise pushes the page wider than the viewport.
              The artwork is a circle on transparent corners, so nothing shows. */}
          <div className="relative flex items-center justify-center md:justify-end overflow-hidden">
            <Image
              src="/globe.png"
              width={560}
              height={560}
              alt="globe"
              priority
              className="w-[260px] md:w-full md:max-w-[480px] animate-spin [animation-duration:26s] [animation-timing-function:linear]"
            />
          </div>
        </section>

        {/* ===== ZER0 ===== */}
        <section id="zer0" className="pb-16 scroll-mt-24">
          <div className="surface-inverse rounded-[16px] p-7 md:p-12">
            <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 mb-9">
              <div>
                <p className="text-[13px] font-[600] uppercase tracking-[0.18em] text-gold mb-3">
                  {zer0.label}
                </p>
                <h2 className="text-readme text-[30px] md:text-[38px] font-[700] leading-[1.15]">
                  {zer0.title}
                </h2>
              </div>
              <p className="text-ink-muted text-[16px] font-[400] leading-[1.6] md:self-end">{zer0.body}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {zer0.products.map((z) => {
                const body = (
                  <>
                    <strong className="text-readme text-[19px] font-[700] mb-2">{z.title}</strong>
                    <span className="text-ink-muted text-[14px] font-[400] leading-[1.6] mb-4">{z.blurb}</span>
                    {z.url && (
                      <span className="mt-auto text-readme text-[14px] font-[600]">
                        {z.cta ?? "Open"}{" "}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </span>
                    )}
                  </>
                );
                return z.url ? (
                  <a
                    key={z.title}
                    href={z.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ga-cta group rounded-[16px] surface-inset-interactive p-6 flex flex-col"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={z.title} className="rounded-[16px] surface-inset p-6 flex flex-col">
                    {body}
                  </div>
                );
              })}

              {/* Fills the last cell and points to the full suite (incl. upcoming agents) on zer0 */}
              <a
                href={zer0.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[16px] bg-gold hover:bg-gold-60 transition-colors p-6 flex flex-col"
              >
                <span className="text-ink text-[11px] font-[700] tracking-[1.5px] uppercase mb-2">zer0.smalltech.in</span>
                <strong className="text-ink text-[19px] font-[700] mb-2">See the full Zer0 suite</strong>
                <span className="text-ink text-[14px] font-[400] leading-[1.6] mb-4">
                  Every agent, how they work together, and what is coming next.
                </span>
                <span className="mt-auto text-ink text-[14px] font-[600]">
                  Visit Zer0{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ===== CUSTOMERS (with proof numbers) ===== */}
        <section id="customers" className="pb-16">
          <div className="border-t border-line pt-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
              <div>
                <p className="label mb-2">Customers</p>
                <h2 className="text-ink text-[24px] md:text-[28px] font-[700] leading-[1.2]">
                  Organisations we have worked with
                </h2>
              </div>
              <dl className="grid grid-cols-3 gap-4 sm:gap-8 lg:max-w-[620px]">
                {stats.map((s, idx) => (
                  <div key={s.label} className={idx > 0 ? "border-l border-line pl-4 sm:pl-8" : ""}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-ink text-[28px] md:text-[34px] font-[700] leading-none">{s.value}</dd>
                    <dd className="text-muted text-[12px] md:text-[13px] font-[400] leading-[1.4] mt-2">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-col gap-3">
              {[clients, [...clients].reverse()].map((row, rowIdx) => (
                <div key={rowIdx} className="brands-row relative overflow-hidden h-[90px] md:h-[110px]">
                  <div
                    className={`absolute flex top-0 left-0 ${
                      rowIdx === 0 ? "animate-marquee" : "animate-marquee-reverse"
                    }`}
                    style={{ width: "max-content", willChange: "transform", transform: "translateZ(0)" }}
                  >
                    {Array.from({ length: 10 }, () => row).flat().map((c, i) => {
                      const logo = (
                        <Image
                          src={c.logo}
                          alt={c.name}
                          width={c.w}
                          height={c.h}
                          style={{ width: c.w, height: c.h }}
                          className="object-contain shrink-0"
                          loading="eager"
                        />
                      );
                      const cls = "flex items-center justify-center w-[160px] md:w-[240px] shrink-0 px-2";
                      /* duplicated for the marquee loop — hide clones from a11y and search */
                      const clone = i >= row.length;
                      return c.url ? (
                        <a
                          key={i}
                          href={c.url}
                          target="_blank"
                          rel="noreferrer"
                          className={cls}
                          aria-hidden={clone}
                          tabIndex={clone ? -1 : undefined}
                        >
                          {logo}
                        </a>
                      ) : (
                        <span key={i} className={cls} aria-hidden={clone}>
                          {logo}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT WE DO ===== */}
        <section id="services" className="py-16">
          <SectionHead
            eyebrow="What we do"
            title="We build and run agentic software"
            sub={ethos}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-[16px] p-6 bg-surface border border-line hover:border-ink-line transition-colors"
              >
                <strong className="block text-ink text-[18px] font-[700] mb-2">{s.title}</strong>
                <span className="text-muted text-[14px] font-[400] leading-[1.6]">{s.blurb}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PRODUCTS ===== */}
        <section id="products" className="py-16">
          <SectionHead
            eyebrow="Our Portfolio"
            title="AI-native products we build and run"
            sub="Everything we ship, from autonomous agents to civic platforms — the same practice we teach."
          />
          <div className="grid md:grid-cols-4 md:auto-rows-[1fr] gap-4">
            {products.map((p) =>
              p.flagship ? (
                <FeatureTile key={p.title} product={p} />
              ) : (
                <SmallTile key={p.title} product={p} className="md:col-span-2" />
              )
            )}
          </div>
        </section>

        {/* ===== AI TRAINING (secondary since SMA-8) ===== */}
        <section id="training" className="py-16 scroll-mt-24">
          <SectionHead
            eyebrow="AI Training"
            title="AI Training for Leaders & Tech Teams"
            sub="Practitioner-led programmes for leadership and engineering teams. Every engagement starts with a one-day taster where the room builds a working agent."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programmes.map((p) => (
              <div key={p.title} className="rounded-[16px] bg-surface border border-line p-6 flex flex-col">
                <span className="text-muted text-[11px] font-[700] tracking-[1.5px] uppercase mb-2">{p.kicker}</span>
                <h3 className="text-ink text-[18px] font-[700] leading-tight mb-1">{p.title}</h3>
                <p className="text-muted text-[13px] font-[600] mb-3">{p.format}</p>
                <p className="text-muted text-[14px] font-[400] leading-[1.6]">{p.blurb}</p>
                <Reveal label="What you get" tone="light" className="mt-auto pt-4">
                  <ul className="space-y-1.5 pb-1">
                    {p.outcomes.map((o) => (
                      <li key={o} className="text-muted text-[13px] font-[400] flex gap-2">
                        <span className="text-ink font-[700]">›</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={mailto("AI Training enquiry")}
              className="ga-cta inline-block rounded-[6px] border border-ink text-ink text-[15px] font-[600] px-6 py-3 hover:bg-surface transition-colors"
            >
              Talk to us about a cohort
            </a>
            <a
              href="https://blog0.smalltech.in"
              target="_blank"
              rel="noreferrer"
              className="text-ink text-[15px] font-[600] underline decoration-line decoration-2 underline-offset-4 hover:decoration-ink"
            >
              Read what we are learning on blog0 →
            </a>
          </div>
        </section>

        {/* ===== TECH STACK (AI only) ===== */}
        <section id="tech" className="py-16">
          <SectionHead
            eyebrow="Tech Stack"
            title="The AI we build with"
            sub="Model-agnostic by design. What we build with today, and what we are bringing in next, so you are never locked to one vendor."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-[16px] bg-ink p-6 flex flex-col justify-between">
              <span className="text-gold text-[11px] font-[700] tracking-[1.5px] uppercase mb-3">Partner</span>
              <div>
                <strong className="block text-readme text-[24px] font-[700] leading-tight mb-2">Anthropic partner</strong>
                <span className="text-ink-muted text-[14px] font-[400] leading-[1.6]">
                  We build on Claude and Claude Code every day, and teach teams to do the same.
                </span>
              </div>
            </div>
            {aiStack.map((g) => (
              <div key={g.group} className="rounded-[16px] bg-surface border border-line p-6">
                <span className="block text-muted text-[11px] font-[700] tracking-[1.5px] uppercase mb-4">{g.group}</span>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-ink text-[14px] font-[600] bg-readme border border-line rounded-full px-3 py-1">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-line mt-8">
        <div className="max-w-[1200px] mx-auto px-[4%] py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] font-[400] text-ink">
          <div className="flex items-center gap-3 -mb-1 md:mb-0">
            <Image src="/logo-smalltech.svg" alt="smallTech" width={416} height={92} className="h-9 w-auto" />
          </div>
          <div className="contents md:flex md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-6">
              <a href="https://github.com/smallTechOrg" target="_blank" rel="noreferrer" className="hover:underline">
                github
              </a>
              <button onClick={openChat} className="hover:underline cursor-pointer">
                contact
              </button>
              <a href="https://www.linkedin.com/company/madhyamakist" target="_blank" rel="noreferrer" className="hover:underline">
                linkedin
              </a>
            </div>
            <span className="text-muted">© 2026 madhyamakist pvt ltd</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------ partials */

/**
 * Inline "show more" used inside a card. Animates on grid-template-rows so the
 * panel eases to its natural height without hard-coding a max-height.
 */
function Reveal({
  label,
  children,
  tone = "dark",
  className = "",
}: {
  label: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const colour = tone === "light" ? "text-ink" : "text-readme";

  return (
    <div className={className}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className={`group inline-flex items-center gap-1.5 text-[13px] font-[600] cursor-pointer ${colour} hover:opacity-80 transition-opacity`}
      >
        {label}
        <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>⌄</span>
      </button>
      <div
        id={id}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function TagPill({ tag, tone }: { tag: string; tone: "dark" | "light" }) {
  return (
    <span
      className={`inline-block text-[10px] font-[700] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full ${
        tone === "dark"
          ? "text-gold border border-ink-line"
          : "bg-readme text-muted border border-line"
      }`}
    >
      {tag}
    </span>
  );
}

function FeatureTile({ product }: { product: Product }) {
  return (
    <div className="md:col-span-2 md:row-span-2 surface-inverse-accent rounded-[16px] p-7 flex flex-col justify-between">
      <div>
        <TagPill tag={product.tag} tone="dark" />
        <Image
          src={product.image}
          alt={product.title}
          width={72}
          height={72}
          /* the icon artwork is stroked in espresso — invert it so it reads on the dark tile */
          className="object-contain mb-4 mt-5 opacity-85 [filter:brightness(0)_invert(1)]"
        />
        <h3 className="text-readme text-[26px] font-[700] mb-1">{product.title}</h3>
        <p className="text-ink-muted text-[14px] font-[500] mb-3">{product.role}</p>
        <p className="text-ink-muted text-[15px] font-[400]">{product.description}</p>
        {product.points && (
          <ul className="mt-5 space-y-2 border-t border-ink-line pt-5">
            {product.points.map((pt) => (
              <li key={pt} className="text-ink-muted text-[14px] font-[400] flex gap-2.5">
                <span className="text-gold font-[700]">›</span>
                {pt}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-6">
        <a
          href={product.url}
          target="_blank"
          rel="noreferrer"
          className="ga-cta group inline-flex items-center gap-2 rounded-[6px] bg-gold text-ink text-[15px] font-[600] px-6 py-3 hover:bg-gold-60 transition-colors"
        >
          {product.cta}
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </div>
  );
}

function SmallTile({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <div
      className={`rounded-[24px] p-6 flex items-start gap-5 bg-surface border border-line ${className}`}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={56}
        height={56}
        /* legacy icon artwork is drawn in the old brown — flatten it to Terminal Ink */
        className="object-contain shrink-0 mt-1 [filter:brightness(0)] opacity-85"
      />
      <div className="flex flex-col">
        <div className="mb-2">
          <TagPill tag={product.tag} tone="light" />
        </div>
        <h3 className="text-ink text-[19px] font-[700] leading-tight">{product.title}</h3>
        <p className="text-muted text-[13px] font-[600] mb-1.5">{product.role}</p>
        <p className="text-muted text-[14px] font-[400] leading-[1.6] mb-3">{product.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-4">
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="text-ink text-[14px] font-[600] underline decoration-line decoration-2 underline-offset-4 hover:decoration-ink"
          >
            {product.cta} →
          </a>
          {product.altUrl && (
            <a
              href={product.altUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted text-[14px] font-[500] hover:underline"
            >
              {product.altCta}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mb-8">
      <p className="label mb-2">{eyebrow}</p>
      <h2 className="text-ink text-[28px] md:text-[36px] font-[700] leading-[1.2] tracking-[-0.01em]">{title}</h2>
      <p className="text-muted text-[16px] md:text-[17px] font-[400] leading-[1.6] mt-2">{sub}</p>
    </div>
  );
}
