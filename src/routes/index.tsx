import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Apple,
  Heart,
  Pill,
  Globe2,
  ArrowUpRight,
  ScanLine,
  Upload,
  Check,
  AlertTriangle,
  X,
  FileCheck2,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { VerdictBadge } from "@/components/site/VerdictBadge";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halal Export Readiness Platform — AI Pre-Certification for Manufacturers" },
      {
        name: "description",
        content:
          "AI-powered halal pre-certification readiness for food exporters. Know which ingredients to fix before applying for JAKIM, ESMA, or HFA certification.",
      },
      { property: "og:title", content: "Halal Export Readiness Platform" },
      {
        property: "og:description",
        content:
          "AI-powered halal pre-certification readiness for Bangladeshi manufacturers entering global markets.",
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
        <PlatformDemo />
        <HowItWorks />
        <DomainsSection />
        <ProductShowcase />
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
      <div
        aria-hidden
        className="font-arabic pointer-events-none absolute right-4 top-12 select-none text-[120px] leading-none text-jade/[0.06] sm:right-10 sm:top-16 sm:text-[180px] md:text-[240px]"
      >
        حلال
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-jade animate-pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-jade" />
            </span>
            For halal food exporters · Private beta
          </div>

          <h1 className="font-display mt-7 text-balance text-[2.6rem] font-light leading-[1.02] text-foreground sm:text-6xl md:text-7xl">
            Turn Ingredients Into{" "}
            <span className="italic text-gradient-jade">Export Opportunities.</span>
          </h1>

          <p className="font-display mt-5 text-pretty text-xl italic text-jade-glow sm:text-2xl">
            AI-powered halal pre-certification readiness.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Know exactly which ingredients to fix before applying for JAKIM, ESMA, or HFA
            certification. Built for Bangladeshi manufacturers entering global markets.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/assistant"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] glow-jade"
            >
              <ScanLine className="h-4 w-4" strokeWidth={2} />
              Scan Your Product
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/assistant"
              className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-3 text-sm text-foreground backdrop-blur transition-colors hover:bg-surface"
            >
              <Upload className="h-4 w-4 text-jade" strokeWidth={1.75} />
              Upload Ingredient List
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {["JAKIM-aligned", "ESMA-aligned", "HFA-aligned", "EU-aligned"].map((p) => (
              <div key={p} className="inline-flex items-center gap-1.5">
                <Check className="h-3 w-3 text-jade" strokeWidth={3} />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================ PLATFORM DEMO */
function PlatformDemo() {
  return (
    <Section
      eyebrow="The platform"
      title="See your compliance gaps. Before the certifier does."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {/* Column 1 — Product Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-hairline bg-surface p-6 shadow-elegant"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Step 1
          </div>
          <h3 className="font-display mt-1 text-lg text-foreground">Product Input</h3>

          <div className="mt-5 inline-flex rounded-full border border-hairline bg-background/40 p-1 text-xs">
            {["Barcode", "Upload", "Manual"].map((t, i) => (
              <button
                key={t}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  i === 0
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-hairline bg-background/40 px-3.5 py-3 text-xs text-muted-foreground">
            Enter barcode or product name...
          </div>

          <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-[1.01]">
            <ScanLine className="h-4 w-4" strokeWidth={2.25} />
            Analyze
          </button>

          <div className="mt-5 space-y-2">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Try
            </div>
            <div className="flex flex-wrap gap-2">
              {["Soybean Oil", "Beef Sausage", "Mixed Biscuit"].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-full border border-hairline bg-background/40 px-3 py-1 text-xs text-foreground/85 transition-colors hover:border-jade/40"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Column 2 — Ingredient Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-hairline bg-surface p-6 shadow-elegant"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Step 2
          </div>
          <h3 className="font-display mt-1 text-lg text-foreground">Ingredient Analysis</h3>

          <div className="mt-5 space-y-2.5">
            <IngredientRow
              name="Salt"
              status="halal"
              note=""
            />
            <IngredientRow
              name="E471 — Mono/Di-glycerides"
              status="verify"
              note="Source documentation required"
            />
            <IngredientRow
              name="Pork Gelatin"
              status="haram"
              note="Must be removed before certification"
            />
          </div>
        </motion.div>

        {/* Column 3 — Market Readiness */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-hairline bg-surface p-6 shadow-elegant"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Step 3
          </div>
          <h3 className="font-display mt-1 text-lg text-foreground">Market Readiness</h3>

          <div className="mt-5 space-y-3.5">
            <MarketRow flag="🇲🇾" market="Malaysia JAKIM" pct={42} status="amber" label="Nearly Ready" />
            <MarketRow flag="🇦🇪" market="UAE ESMA" pct={58} status="amber" label="Nearly Ready" />
            <MarketRow flag="🇬🇧" market="UK HFA" pct={31} status="red" label="Gaps Found" />
            <MarketRow flag="🇪🇺" market="EU" pct={28} status="red" label="Gaps Found" />
          </div>

          <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-[1.01]">
            <FileCheck2 className="h-4 w-4" strokeWidth={2.25} />
            Generate Readiness Passport
          </button>
        </motion.div>
      </div>
    </Section>
  );
}

function IngredientRow({
  name,
  status,
  note,
}: {
  name: string;
  status: "halal" | "verify" | "haram";
  note: string;
}) {
  const cfg = {
    halal: {
      label: "HALAL",
      icon: Check,
      color: "text-verdict-halal",
      bg: "bg-verdict-halal/10",
      border: "border-verdict-halal/30",
    },
    verify: {
      label: "VERIFY",
      icon: AlertTriangle,
      color: "text-verdict-mushbooh",
      bg: "bg-verdict-mushbooh/10",
      border: "border-verdict-mushbooh/30",
    },
    haram: {
      label: "HARAM",
      icon: X,
      color: "text-verdict-haram",
      bg: "bg-verdict-haram/10",
      border: "border-verdict-haram/30",
    },
  }[status];
  const Icon = cfg.icon;
  return (
    <div className="rounded-xl border border-hairline bg-background/40 p-3.5">
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm text-foreground/90">{name}</div>
        <div
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wider ${cfg.border} ${cfg.bg} ${cfg.color}`}
        >
          <Icon className="h-3 w-3" strokeWidth={2.5} />
          {cfg.label}
        </div>
      </div>
      {note && <p className="mt-2 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

function MarketRow({
  flag,
  market,
  pct,
  status,
  label,
}: {
  flag: string;
  market: string;
  pct: number;
  status: "amber" | "red";
  label: string;
}) {
  const colorVar = status === "amber" ? "var(--verdict-mushbooh)" : "var(--verdict-haram)";
  const textColor = status === "amber" ? "text-verdict-mushbooh" : "text-verdict-haram";
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">{flag}</span>
          <span className="text-foreground/90">{market}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`font-mono text-xs ${textColor}`}>{pct}%</span>
        </div>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full"
          style={{ background: colorVar }}
        />
      </div>
      <div className={`mt-1.5 text-[10px] uppercase tracking-widest ${textColor}`}>{label}</div>
    </div>
  );
}

/* ============================================================ HOW IT WORKS */
function HowItWorks() {
  const steps = [
    { n: "01", t: "You scan", d: "Barcode, document upload, or manual entry." },
    { n: "02", t: "We extract", d: "Every ingredient identified and normalized." },
    {
      n: "03",
      t: "We analyze",
      d: "Knowledge graph checks each ingredient against JAKIM, ESMA, HFA, and EU standards simultaneously.",
    },
    {
      n: "04",
      t: "You export",
      d: "Gap report shows exactly what to fix before applying for certification.",
    },
  ];
  return (
    <Section eyebrow="How it works" title="From ingredient list to export-ready, in four steps.">
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
    {
      icon: Apple,
      t: "Food & Beverages",
      d: "E-numbers · Additives · Processing aids · Flavorings",
      verdict: "mushbooh" as const,
    },
    {
      icon: Heart,
      t: "Cosmetics & Personal Care",
      d: "Ingredients · Animal derivatives · Alcohol content · Carrier agents",
      verdict: "mushbooh" as const,
      customBadge: "verify",
    },
    {
      icon: Pill,
      t: "Pharmaceuticals",
      d: "Excipients · Capsule shells · Gelatin sources · Coating agents",
      verdict: "mushbooh" as const,
    },
    {
      icon: Globe2,
      t: "Export Compliance",
      d: "JAKIM · ESMA · HFA · EU certification readiness",
      verdict: "halal" as const,
    },
  ];
  return (
    <Section
      eyebrow="Coverage"
      title="Every category. Every market. One readiness report."
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
              {d.customBadge === "verify" ? (
                <div className="inline-flex items-center gap-1.5 rounded-full border border-verdict-mushbooh/30 bg-verdict-mushbooh/10 px-2.5 py-1 text-xs font-medium text-verdict-mushbooh">
                  <AlertTriangle className="h-3 w-3" strokeWidth={2.5} />
                  Verify
                </div>
              ) : (
                <VerdictBadge verdict={d.verdict} size="sm" />
              )}
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
