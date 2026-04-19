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
    <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-jade animate-pulse-ring" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-jade" />
          </span>
          Now in private beta · v1.0
        </div>

        <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[1.05] text-foreground md:text-7xl">
          Halal guidance,{" "}
          <span className="italic text-gradient-jade">grounded in evidence.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          A halal-aware intelligence layer for finance, food, and life — retrieval-backed,
          source-traceable, and privately deployed. AI that doesn't guess.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/assistant"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] glow-jade"
          >
            Ask a question
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/transparency"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-3 text-sm text-foreground backdrop-blur transition-colors hover:bg-surface"
          >
            See the methodology
          </Link>
        </div>
      </motion.div>

    </section>
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
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-jade/20 bg-gradient-to-br from-surface via-background to-surface p-12 text-center md:p-20">
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
          <h2 className="font-display mt-6 text-balance text-5xl font-light leading-[1.05] md:text-6xl">
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
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <div className="text-xs uppercase tracking-widest text-jade">{eyebrow}</div>
        <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[1.1] md:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
