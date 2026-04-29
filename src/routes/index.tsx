import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Apple,
  Heart,
  Pill,
  Globe2,
  Banknote,
  ArrowUpRight,
  ScanLine,
  Upload,
  Check,
  AlertTriangle,
  ChevronDown,
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
          "AI-powered halal pre-certification readiness for food exporters. Know which ingredients to fix before applying for JAKIM, ESMA, HFA, or EU certification.",
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

type Market = "MY" | "AE" | "UK" | "EU";
const MARKETS: { id: Market; label: string; framework: string; flag: string }[] = [
  { id: "MY", label: "Malaysia", framework: "JAKIM", flag: "🇲🇾" },
  { id: "AE", label: "UAE", framework: "ESMA", flag: "🇦🇪" },
  { id: "UK", label: "UK", framework: "HFA", flag: "🇬🇧" },
  { id: "EU", label: "European Union", framework: "EU", flag: "🇪🇺" },
];

const MARKET_DATA: Record<
  Market,
  { score: number; gaps: { title: string; detail: string }[]; trace: { agent: string; line: string }[] }
> = {
  MY: {
    score: 62,
    gaps: [
      { title: "Documentation Missing", detail: "E471 emulsifier — JAKIM-recognized supplier certificate not attached." },
      { title: "Source Verification Required", detail: "Bovine glycerin origin must be traced to JAKIM-approved abattoir." },
      { title: "Process Audit Pending", detail: "Shared production line requires segregation declaration." },
    ],
    trace: [
      { agent: "Molecular Auditor", line: "Decomposing E-codes... E471 flagged for plant/animal ambiguity." },
      { agent: "Regulatory Jurist", line: "Cross-referencing JAKIM 2024 standards... Source certificate missing." },
      { agent: "Gap Strategist", line: "Identifying plant-based alternatives in the local supply chain..." },
    ],
  },
  AE: {
    score: 71,
    gaps: [
      { title: "Documentation Missing", detail: "ESMA UAE.S 2055-1:2015 supplier declaration not on file." },
      { title: "Labeling Non-Conformance", detail: "Arabic ingredient list required for UAE retail entry." },
    ],
    trace: [
      { agent: "Molecular Auditor", line: "Decomposing E-codes... All additives within ESMA tolerance." },
      { agent: "Regulatory Jurist", line: "Cross-referencing ESMA UAE.S 2055-1... Supplier attestation absent." },
      { agent: "Gap Strategist", line: "Drafting bilingual label template for GCC market entry..." },
    ],
  },
  UK: {
    score: 48,
    gaps: [
      { title: "Source Verification Required", detail: "Gelatin must originate from HFA-recognized facility." },
      { title: "Documentation Missing", detail: "HMC/HFA chain-of-custody records absent." },
      { title: "Process Audit Pending", detail: "Stunning method declaration not provided for meat inputs." },
    ],
    trace: [
      { agent: "Molecular Auditor", line: "Decomposing E-codes... Animal-derived gelatin detected." },
      { agent: "Regulatory Jurist", line: "Cross-referencing HFA UK 2023 standards... Chain-of-custody gap." },
      { agent: "Gap Strategist", line: "Mapping HFA-certified UK importers for partnership..." },
    ],
  },
  EU: {
    score: 39,
    gaps: [
      { title: "Documentation Missing", detail: "EU 1169/2011 allergen disclosure incomplete." },
      { title: "Source Verification Required", detail: "Halal Control / GD verification body audit pending." },
      { title: "Process Audit Pending", detail: "Cross-contamination risk assessment required for EU entry." },
      { title: "Labeling Non-Conformance", detail: "Multilingual nutrition panel missing." },
    ],
    trace: [
      { agent: "Molecular Auditor", line: "Decomposing E-codes... Multiple flagged inputs across SKUs." },
      { agent: "Regulatory Jurist", line: "Cross-referencing EU Halal Control 2024... Audit body unassigned." },
      { agent: "Gap Strategist", line: "Sequencing remediation roadmap for EU export readiness..." },
    ],
  },
};

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px]"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <Nav />

      <LDCBanner />

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

/* ============================================================ LDC INFO BANNER */
function LDCBanner() {
  return (
    <div className="relative z-10 border-b border-hairline bg-surface/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-4 py-2.5 text-center text-xs sm:px-6">
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-jade animate-pulse-ring" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-jade" />
        </span>
        <span className="text-foreground/85">
          <span className="font-medium text-jade-glow">LDC Graduation Mode: Active.</span>{" "}
          <span className="text-muted-foreground">
            Optimizing for High-Value Global Exports.
          </span>
        </span>
      </div>
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
            Know exactly which ingredients to fix before applying for JAKIM, ESMA, HFA, or EU
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
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================ PLATFORM DEMO */
function PlatformDemo() {
  const [market, setMarket] = useState<Market>("MY");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const data = MARKET_DATA[market];
  const activeMarket = MARKETS.find((m) => m.id === market)!;

  return (
    <Section eyebrow="Product Analysis" title="Check your product's halal export readiness.">
      {/* Market Segmented Control */}
      <div className="mb-8 flex justify-center">
        <div className="glass inline-flex rounded-full p-1 text-xs sm:text-sm">
          {MARKETS.map((m) => (
            <button
              key={m.id}
              onClick={() => setMarket(m.id)}
              className={`relative rounded-full px-4 py-2 font-medium transition-all sm:px-5 ${
                market === m.id
                  ? "bg-foreground text-background shadow-elegant"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="mr-1.5">{m.flag}</span>
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Column 1 — Product Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 shadow-elegant"
        >
          <h3 className="font-display text-lg text-foreground">Enter Product</h3>

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
            Analyze Product
          </button>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Soybean Oil", "Beef Sausage", "Mixed Biscuit"].map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full border border-hairline bg-background/40 px-3 py-1 text-xs text-foreground/85 transition-colors hover:border-jade/40"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Column 2 — Readiness Score */}
        <motion.div
          key={`gauge-${market}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-6 shadow-elegant"
        >
          <h3 className="font-display text-lg text-foreground">Readiness Score</h3>

          <RadialGauge value={data.score} />

          <div className="mt-2 text-center text-xs text-muted-foreground">
            {activeMarket.flag} {activeMarket.label}
          </div>
        </motion.div>

        {/* Column 3 — Compliance Gaps */}
        <motion.div
          key={`gaps-${market}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-6 shadow-elegant"
        >
          <h3 className="font-display text-lg text-foreground">What to Fix</h3>

          <div className="mt-5 space-y-2.5">
            {data.gaps.map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-hairline bg-background/40 p-3.5"
                style={{ borderLeft: "3px solid var(--safety-orange)" }}
              >
                <div className="flex items-start gap-2.5">
                  <AlertTriangle
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    strokeWidth={2.5}
                    style={{ color: "var(--safety-orange)" }}
                  />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--safety-orange)" }}>
                      {g.title}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/80">{g.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Collapsed Analysis Details link */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setDetailsOpen((v) => !v)}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {detailsOpen ? "Hide" : "View"} Analysis Details
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${detailsOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {detailsOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 overflow-hidden rounded-2xl border border-hairline bg-ink/80 px-5 py-4"
        >
          <div className="font-mono text-xs leading-relaxed">
            {data.trace.map((t, i) => (
              <div key={`${market}-${i}`} className="flex items-start gap-3 py-1">
                <span className="text-jade">›</span>
                <span className="text-foreground/75">{t.line}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

    </Section>
  );
}

/* ============================================================ RADIAL GAUGE */
function RadialGauge({ value }: { value: number }) {
  const size = 200;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (value / 100) * circ;

  // Color based on score
  const color =
    value >= 80
      ? "var(--verdict-halal)"
      : value >= 50
        ? "var(--verdict-mushbooh)"
        : "var(--safety-orange)";

  const label =
    value >= 80 ? "Export Ready" : value >= 50 ? "Nearly Ready" : "Significant Gaps";

  return (
    <div className="relative mx-auto mt-5 flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="oklch(1 0 0 / 0.06)"
          strokeWidth={stroke}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: `drop-shadow(0 0 12px ${color})` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display text-5xl font-light text-foreground">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {value}
          </motion.span>
          <span className="text-2xl text-muted-foreground">%</span>
        </div>
        <div
          className="mt-1 text-[10px] font-semibold uppercase tracking-widest"
          style={{ color }}
        >
          {label}
        </div>
      </div>
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
      icon: Banknote,
      t: "Finance",
      d: "Islamic finance screening · Riba-free verification · Sukuk & halal investment compliance",
      verdict: "halal" as const,
    },
  ];
  return (
    <Section eyebrow="Coverage" title="Every category. Every market. One readiness report.">
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
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================ PRODUCT SHOWCASE */
function ProductShowcase() {
  return (
    <Section eyebrow="The interface" title="Designed for clarity. Engineered for nuance.">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
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
                    className="h-full"
                    style={{ background: `var(--${s.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

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
