import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Wallet,
  Apple,
  Heart,
  Building2,
  ArrowUpRight,
  Quote,
  QrCode,
  ScanLine,
  Mic,
  Paperclip,
  BookOpen,
  Check,
  PlayCircle,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { VerdictBadge } from "@/components/site/VerdictBadge";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halal Intelligence Platform — Trusted AI for Halal Decisions" },
      {
        name: "description",
        content:
          "An evidence-grounded, privacy-first intelligence layer for halal-aware decisions across finance, food, lifestyle, and enterprise.",
      },
      { property: "og:title", content: "Halal Intelligence Platform" },
      {
        property: "og:description",
        content: "A trustworthy halal-aware intelligence layer for modern life.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Aurora background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px]"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <Nav />

      <main className="relative">
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <DomainsSection />
        <ProductShowcase />
        <TestimonialsSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

/* ============================================================ HERO */
function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28 md:pt-24">
      {/* Floating Arabic accent — sacred, never decorative */}
      <div
        aria-hidden
        className="font-arabic pointer-events-none absolute right-4 top-12 select-none text-[120px] leading-none text-jade/[0.06] sm:right-10 sm:top-16 sm:text-[180px] md:text-[240px]"
      >
        حلال
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* LEFT — Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-jade animate-pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-jade" />
            </span>
            Now in private beta · v1.0
          </div>

          <h1 className="font-display mt-7 text-balance text-[2.6rem] font-light leading-[1.02] text-foreground sm:text-6xl md:text-7xl">
            Clarity in every{" "}
            <span className="italic text-gradient-jade">halal</span>{" "}
            decision.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            A source-grounded reasoning system for finance, food, and everyday life.
            Every verdict is traced to scholarly evidence — never invented, never guessed.
          </p>

          {/* Pillars row */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {["Source-traced", "Scholar-reviewed", "Privacy-first"].map((p) => (
              <div key={p} className="inline-flex items-center gap-1.5">
                <Check className="h-3 w-3 text-jade" strokeWidth={3} />
                <span>{p}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/assistant"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] glow-jade"
            >
              Try Halal Intelligence
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/transparency"
              className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-3 text-sm text-foreground backdrop-blur transition-colors hover:bg-surface"
            >
              <PlayCircle className="h-4 w-4 text-jade" strokeWidth={1.5} />
              See how it works
            </Link>
          </div>

          {/* Capture modes — quieter, multimodal entry points */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70">
              Or capture
            </span>
            <span className="h-px w-6 bg-hairline" />
            {[
              { icon: QrCode, label: "QR" },
              { icon: ScanLine, label: "Image" },
              { icon: Mic, label: "Voice" },
              { icon: Paperclip, label: "Attach" },
            ].map((m) => (
              <Link
                key={m.label}
                to="/assistant"
                className="group inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:border-jade/40 hover:bg-surface hover:text-foreground"
              >
                <m.icon className="h-3.5 w-3.5 text-jade" strokeWidth={1.75} />
                {m.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Premium Answer Card centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] opacity-60 blur-3xl"
            style={{ background: "var(--gradient-aurora)" }}
          />

          <HeroAnswerCard />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-full border border-hairline bg-background/90 px-3 py-1.5 text-[11px] text-muted-foreground shadow-elegant backdrop-blur sm:inline-flex"
          >
            <Sparkles className="h-3 w-3 text-jade" />
            <span className="font-mono">Live response · 1.2s</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----- Hero answer card (premium centerpiece) ----- */
function HeroAnswerCard() {
  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-hairline bg-surface/80 p-1.5 shadow-elegant backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1">
      <div className="relative rounded-[1.4rem] bg-gradient-to-b from-surface-elevated to-surface p-5 sm:p-6">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-hairline pb-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="font-mono text-[10px] tracking-wider text-muted-foreground/70">
            halal-intel · v1.0
          </div>
        </div>

        {/* Question */}
        <div className="mt-4 flex items-start gap-3">
          <div className="font-mono mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-[10px] text-muted-foreground">
            Q
          </div>
          <p className="text-[14px] leading-relaxed text-foreground/90">
            Is this tech-sector ETF halal? It holds{" "}
            <span className="text-foreground">3.8% conventional banks</span>.
          </p>
        </div>

        {/* Verdict header */}
        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-jade/20 bg-jade/[0.04] p-3.5">
          <VerdictBadge verdict="halal" size="lg" />
          <div className="ml-auto flex items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Confidence
            </span>
            <span className="font-mono text-sm font-medium text-jade-glow">92%</span>
          </div>
        </div>

        {/* Answer */}
        <p className="mt-4 text-[13.5px] leading-relaxed text-foreground/80">
          Permissible under AAOIFI tolerance (incidental income &lt; 5%).{" "}
          <span className="text-foreground">Purify ~3.8%</span> of dividends as{" "}
          <em className="font-display italic">ṣadaqah</em>.
        </p>

        {/* Confidence meter */}
        <div className="mt-4 grid gap-[3px]" style={{ gridTemplateColumns: "repeat(20, 1fr)" }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-sm ${
                i < 18 ? "bg-jade/80" : i < 19 ? "bg-jade/30" : "bg-foreground/10"
              }`}
            />
          ))}
        </div>

        {/* Sources */}
        <div className="mt-5 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Grounded in
            </div>
            <div className="font-mono text-[10px] text-muted-foreground/70">3 sources</div>
          </div>
          {[
            { label: "AAOIFI Standard 21 §3.4", tag: "Standard" },
            { label: "Usmani — Intro to Islamic Finance", tag: "Treatise" },
            { label: "ISRA Screening Methodology", tag: "Research" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between rounded-lg border border-hairline bg-background/40 px-3 py-2 transition-colors hover:border-jade/30"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="h-3 w-3 text-jade" strokeWidth={2} />
                <span className="text-xs text-foreground/85">{s.label}</span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top scanline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-jade/40 to-transparent"
      />
    </div>
  );
}

/* ============================================================ TRUST STRIP */
function TrustStrip() {
  return (
    <section className="border-y border-hairline bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { num: "12,400+", label: "Verified rulings" },
            { num: "180+", label: "Scholarly references" },
            { num: "100%", label: "Source-traceable" },
            { num: "0", label: "Data leaves device" },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl text-foreground">{s.num}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================================ HOW IT WORKS */
function HowItWorks() {
  const steps = [
    { n: "01", t: "You ask", d: "In natural language. Any domain." },
    { n: "02", t: "We retrieve", d: "From a curated, scholar-reviewed knowledge corpus." },
    { n: "03", t: "We reason", d: "Across principles, context, and differing positions." },
    { n: "04", t: "You decide", d: "With evidence, confidence, and the safer path noted." },
  ];
  return (
    <Section eyebrow="How it works" title="From question to clarity, in four traceable steps.">
      <div className="relative">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-jade/40 to-transparent md:block" />
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-hairline bg-surface backdrop-blur">
                <span className="font-display text-xl text-jade-glow">{s.n}</span>
              </div>
              <h3 className="mt-5 font-display text-lg text-foreground">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================================================ DOMAINS */
function DomainsSection() {
  const domains = [
    { icon: Wallet, t: "Finance", d: "Stock screening · Sukuk · Mortgages · Crypto", verdict: "halal" as const },
    { icon: Apple, t: "Food", d: "Ingredients · E-numbers · Brands · Restaurants", verdict: "mushbooh" as const },
    { icon: Heart, t: "Lifestyle", d: "Cosmetics · Pharmaceuticals · Daily choices", verdict: "ikhtilaf" as const },
    { icon: Building2, t: "Enterprise", d: "Compliance APIs · Internal copilots · Audit trails", verdict: "halal" as const },
  ];
  return (
    <Section
      eyebrow="One platform, every domain"
      title="A coherent intelligence surface across the choices that shape a Muslim life."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {domains.map((d, i) => (
          <motion.div
            key={d.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-all hover:border-jade/30 hover:bg-surface-elevated"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
                <d.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <h3 className="mt-6 font-display text-xl">{d.t}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">{d.d}</p>
            <div className="mt-5">
              <VerdictBadge verdict={d.verdict} size="sm" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================ PRODUCT SHOWCASE */
function ProductShowcase() {
  return (
    <Section
      eyebrow="The interface"
      title="Designed for clarity. Engineered for nuance."
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Opinion comparison matrix */}
        <div className="glass rounded-3xl p-6 shadow-elegant">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Scholarly comparison
              </div>
              <h3 className="mt-1 font-display text-lg">Music in worship contexts</h3>
            </div>
            <VerdictBadge verdict="ikhtilaf" size="sm" />
          </div>
          <div className="mt-6 space-y-3">
            {[
              { school: "Hanafi (majority)", pos: "Generally impermissible", lean: 18, color: "verdict-haram" },
              { school: "Mālikī", pos: "Discouraged with exceptions", lean: 35, color: "verdict-mushbooh" },
              { school: "Al-Ghazālī (Iḥyāʾ)", pos: "Permissible with conditions", lean: 72, color: "verdict-halal" },
              { school: "Ibn Ḥazm (Ẓāhirī)", pos: "Permissible", lean: 88, color: "verdict-halal" },
            ].map((s) => (
              <div key={s.school} className="rounded-xl border border-hairline bg-background/30 p-3.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{s.school}</span>
                  <span className="text-xs text-muted-foreground">{s.pos}</span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-foreground/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.lean}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-${s.color}`}
                    style={{ background: `var(--${s.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confidence + reasoning panel */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-hairline bg-surface p-6">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Confidence signal
            </div>
            <div className="mt-4 flex items-end gap-3">
              <div className="font-display text-5xl text-foreground">86</div>
              <div className="mb-1.5 text-sm text-muted-foreground">/ 100</div>
            </div>
            <div className="mt-5 grid grid-cols-12 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-8 rounded-sm ${
                    i < 10 ? "bg-jade/80" : i < 11 ? "bg-jade/30" : "bg-foreground/5"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Strong consensus across primary sources. Minor variation in contemporary application.
            </p>
          </div>

          <div className="rounded-3xl border border-hairline bg-surface p-6">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Safer path
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              When in doubt, the more cautious position protects the religion. Choose the
              Shariah-screened alternative where available.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-jade">
              <ShieldCheck className="h-3.5 w-3.5" />
              Recommended caution applied
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}



/* ============================================================ TESTIMONIALS */
function TestimonialsSection() {
  const t = [
    {
      q: "The first AI I would actually trust to discuss matters of dīn. The transparency layer is unprecedented.",
      a: "Dr. Yasmin K.",
      r: "Islamic Finance Researcher",
    },
    {
      q: "We integrated the API into our screening dashboard in a weekend. Our analysts finally trust the explanations.",
      a: "Omar R.",
      r: "Head of Compliance, MENA Capital",
    },
    {
      q: "It treats ikhtilāf with the seriousness scholars demand. That alone sets it apart from every consumer app.",
      a: "Sh. Abdul-Hakim",
      r: "Faculty, Zaytuna Institute",
    },
  ];
  return (
    <Section eyebrow="Voices" title="Trusted by scholars, researchers, and operators.">
      <div className="grid gap-5 md:grid-cols-3">
        {t.map((it, i) => (
          <motion.div
            key={it.a}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-hairline bg-surface p-7"
          >
            <Quote className="h-5 w-5 text-jade/60" strokeWidth={1.5} />
            <p className="font-display mt-4 text-pretty text-lg leading-relaxed text-foreground/90">
              "{it.q}"
            </p>
            <div className="mt-6 border-t border-hairline pt-4">
              <div className="text-sm font-medium">{it.a}</div>
              <div className="text-xs text-muted-foreground">{it.r}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================ FINAL CTA */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-jade/20 bg-gradient-to-br from-surface via-background to-surface p-8 text-center sm:rounded-[2rem] sm:p-12 md:p-20">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-aurora)" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-jade" />
            Built for the next billion decisions
          </div>
          <h2 className="font-display mt-6 text-balance text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            Make every choice with{" "}
            <span className="italic text-gradient-jade">conviction.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-muted-foreground">
            Halal Intelligence is the trust layer for modern Muslim life — from the kitchen to the
            capital markets.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/assistant"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:scale-[1.02] glow-jade"
            >
              Open the assistant
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/enterprise"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-6 py-3.5 text-sm backdrop-blur transition-colors hover:bg-surface"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Section helper */
function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <div className="text-xs uppercase tracking-widest text-jade">{eyebrow}</div>
        <h2 className="font-display mt-4 text-balance text-3xl font-light leading-[1.1] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
