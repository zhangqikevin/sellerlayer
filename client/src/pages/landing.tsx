import { useState, useEffect, useRef } from "react";
import {
  BarChart3,
  Database,
  Crosshair,
  Zap,
  MessageCircle,
  Tag,
  Menu,
  X,
  ArrowRight,
  Check,
  TrendingUp,
  Code2,
  FileJson,
  Layers,
  Terminal,
  ChevronRight,
  ExternalLink,
  Shield,
  Clock,
  Server,
  Globe,
  ShoppingCart,
  Eye,
  DollarSign,
  Search,
  Sparkles,
  PackageSearch,
} from "lucide-react";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e8f0]" : "bg-white"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5" data-testid="logo">
            <div className="w-9 h-9 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] rounded-xl flex items-center justify-center shadow-sm shadow-indigo-200">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#0f172a] font-bold text-xl tracking-tight">SellerLayer</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#capabilities" className="text-[#64748b] hover:text-[#0f172a] text-sm font-medium transition-colors" data-testid="nav-products">Products</a>
            <a href="#pricing" className="text-[#64748b] hover:text-[#0f172a] text-sm font-medium transition-colors" data-testid="nav-pricing">Pricing</a>
            <a href="#endpoints" className="text-[#64748b] hover:text-[#0f172a] text-sm font-medium transition-colors" data-testid="nav-docs">Docs</a>
            <a href="#endpoints" className="text-[#64748b] hover:text-[#0f172a] text-sm font-medium transition-colors" data-testid="nav-api">API Reference</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-[#1e293b] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#f8fafc] transition-colors" data-testid="button-signin">
              Sign In
            </button>
            <button className="bg-[#6366f1] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#5558e6] transition-all shadow-sm shadow-indigo-200" data-testid="button-get-api-key">
              Get API Key
            </button>
          </div>

          <button
            className="md:hidden p-2 text-[#1e293b]"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e2e8f0] px-4 py-4 space-y-3">
          <a href="#capabilities" className="block text-[#1e293b] text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Products</a>
          <a href="#pricing" className="block text-[#1e293b] text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="#endpoints" className="block text-[#1e293b] text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Docs</a>
          <a href="#endpoints" className="block text-[#1e293b] text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>API Reference</a>
          <hr className="border-[#e2e8f0]" />
          <button className="block w-full text-left text-[#1e293b] text-sm font-medium py-2">Sign In</button>
          <button className="block w-full bg-[#6366f1] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center">Get API Key</button>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="hero-section">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[60%]">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#6366f1] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6" data-testid="badge-agent-ready">
              <Code2 className="w-3.5 h-3.5" />
              Agent-Ready API
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-6" data-testid="hero-title">
              #1 Amazon Data API for AI-Powered Sellers
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg text-[#64748b] leading-relaxed mb-8 max-w-xl" data-testid="hero-subtitle">
              Comprehensive endpoints covering real-time products, market intelligence, competitor lookup, and AI review analysis. Built for developers, agents, and the teams that build them.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="bg-[#6366f1] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#5558e6] transition-all shadow-md shadow-indigo-200 text-sm" data-testid="button-start-free">
                Start for Free
              </button>
              <button className="flex items-center justify-center gap-2 text-[#1e293b] font-semibold px-7 py-3.5 rounded-lg border border-[#e2e8f0] hover:bg-[#f8fafc] transition-all text-sm" data-testid="button-view-docs">
                View Documentation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-[#64748b]" data-testid="trust-strip">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#22c55e]" />
                Real-time Amazon data
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#22c55e]" />
                AI-ready structured responses
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#22c55e]" />
                Sub-200ms latency
              </span>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="flex-1 w-full lg:max-w-[40%]" delay={300}>
          <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-xl shadow-slate-200/50 overflow-hidden" data-testid="hero-dashboard-card">
            <div className="px-5 py-4 border-b border-[#e2e8f0] bg-[#f8fafc]">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#6366f1]" />
                <span className="text-sm font-semibold text-[#0f172a]">Market Analysis</span>
              </div>
              <p className="text-xs text-[#64748b] mt-0.5">Electronics &gt; Headphones</p>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f8fafc] rounded-xl p-3.5 border border-[#e2e8f0]">
                  <p className="text-[10px] font-medium text-[#64748b] uppercase tracking-wider">Monthly Demand</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-lg font-bold text-[#0f172a]">124,500</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#22c55e]" />
                  </div>
                </div>
                <div className="bg-[#f8fafc] rounded-xl p-3.5 border border-[#e2e8f0]">
                  <p className="text-[10px] font-medium text-[#64748b] uppercase tracking-wider">Avg Price</p>
                  <p className="text-lg font-bold text-[#0f172a] mt-1">$34.99</p>
                </div>
                <div className="bg-[#f8fafc] rounded-xl p-3.5 border border-[#e2e8f0]">
                  <p className="text-[10px] font-medium text-[#64748b] uppercase tracking-wider">Gross Margin</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-lg font-bold text-[#22c55e]">31.2%</span>
                  </div>
                </div>
                <div className="bg-[#f8fafc] rounded-xl p-3.5 border border-[#e2e8f0]">
                  <p className="text-[10px] font-medium text-[#64748b] uppercase tracking-wider">Competition</p>
                  <div className="mt-1">
                    <span className="inline-flex items-center px-2 py-0.5 bg-[#fff7ed] text-[#f97316] text-xs font-semibold rounded-full">
                      Medium
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-[#0d1117] rounded-lg px-4 py-3">
                <code className="text-xs font-mono">
                  <span className="text-[#22c55e]">POST</span>{" "}
                  <span className="text-[#e2e8f0]">/openapi/v2/markets/search</span>
                </code>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "18", label: "API Endpoints", icon: Code2 },
    { value: "10M+", label: "Products Indexed", icon: Database },
    { value: "<200ms", label: "Avg Response", icon: Clock },
    { value: "99.9%", label: "Uptime", icon: Shield },
  ];

  return (
    <section className="bg-[#f8fafc] border-y border-[#e2e8f0]" data-testid="stats-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <stat.icon className="w-5 h-5 text-[#6366f1] mx-auto mb-2" />
                <p className="text-3xl font-extrabold text-[#0f172a]">{stat.value}</p>
                <p className="text-sm text-[#64748b] mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      icon: PackageSearch,
      color: "text-[#6366f1]",
      bg: "bg-[#eef2ff]",
      title: "Product Research & Selection",
      desc: "Discover winning products by analyzing demand, margins, and competition across any Amazon category. Make data-backed sourcing decisions instead of guessing.",
    },
    {
      icon: Eye,
      color: "text-[#8b5cf6]",
      bg: "bg-[#f5f3ff]",
      title: "Competitor Tracking",
      desc: "Monitor competitor pricing, BSR changes, and listing updates in real time. Get alerts when rivals adjust strategy so you can respond fast.",
    },
    {
      icon: DollarSign,
      color: "text-[#22c55e]",
      bg: "bg-[#f0fdf4]",
      title: "Dynamic Pricing Intelligence",
      desc: "Track historical price trends and market benchmarks to set optimal prices. Maximize profit while staying competitive in your niche.",
    },
    {
      icon: Search,
      color: "text-[#3b82f6]",
      bg: "bg-[#eff6ff]",
      title: "Market Opportunity Analysis",
      desc: "Identify underserved categories with high demand and low competition. Find gaps in the market before other sellers do.",
    },
    {
      icon: Sparkles,
      color: "text-[#f97316]",
      bg: "bg-[#fff7ed]",
      title: "AI-Powered Review Insights",
      desc: "Extract customer pain points and feature requests from reviews at scale. Build better listings and products based on what buyers actually want.",
    },
    {
      icon: ShoppingCart,
      color: "text-[#ec4899]",
      bg: "bg-[#fdf2f8]",
      title: "Listing & Catalog Automation",
      desc: "Auto-enrich product catalogs with tags, attributes, and market data. Power your e-commerce tools with structured Amazon intelligence.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="use-cases" data-testid="use-cases-section">
      <AnimatedSection>
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-[#6366f1] uppercase tracking-[0.15em] mb-3">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
            Built for how sellers actually work
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-lg">
            From product research to pricing strategy — power every part of your Amazon business with real data.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {useCases.map((uc, i) => (
          <AnimatedSection key={uc.title} delay={i * 80}>
            <div
              className="group bg-white rounded-xl border border-[#e2e8f0] p-6 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
              data-testid={`card-usecase-${i}`}
            >
              <div className={`w-11 h-11 ${uc.bg} rounded-xl flex items-center justify-center mb-4`}>
                <uc.icon className={`w-5 h-5 ${uc.color}`} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{uc.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed flex-1">{uc.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function AIStackSection() {
  const bullets = [
    { icon: FileJson, text: "Flat JSON responses — no deeply nested objects to parse" },
    { icon: Layers, text: "OpenAPI spec — import directly into LangChain, CrewAI, AutoGen" },
    { icon: Terminal, text: "Consistent POST interface — one pattern, 18 endpoints" },
    { icon: Zap, text: "v2 endpoints optimized for tool-calling" },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="ai-stack" data-testid="ai-stack-section">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        <div className="flex-1">
          <AnimatedSection>
            <p className="text-xs font-bold text-[#6366f1] uppercase tracking-[0.15em] mb-3">Agent-Native Design</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight mb-8">
              Drop it into any AI workflow
            </h2>
          </AnimatedSection>

          <div className="space-y-5">
            {bullets.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#eef2ff] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4.5 h-4.5 text-[#6366f1]" />
                  </div>
                  <p className="text-[#1e293b] text-[15px] leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="flex-1 w-full" delay={200}>
          <div className="bg-[#0d1117] rounded-2xl p-6 shadow-2xl shadow-slate-900/20 overflow-x-auto">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="text-[#64748b] text-xs ml-2 font-mono">market_analysis.py</span>
            </div>
            <pre className="text-sm font-mono leading-relaxed">
              <code>
                <span className="text-[#ff7b72]">import</span>{" "}
                <span className="text-[#c9d1d9]">requests</span>{"\n\n"}
                <span className="text-[#c9d1d9]">response = requests.</span>
                <span className="text-[#d2a8ff]">post</span>
                <span className="text-[#c9d1d9]">(</span>{"\n"}
                <span className="text-[#a5d6ff]">    "https://api.sellerlayer.com/openapi/v2/markets/search"</span>
                <span className="text-[#c9d1d9]">,</span>{"\n"}
                <span className="text-[#c9d1d9]">    headers=</span>
                <span className="text-[#c9d1d9]">{"{"}</span>
                <span className="text-[#a5d6ff]">"Authorization"</span>
                <span className="text-[#c9d1d9]">: </span>
                <span className="text-[#a5d6ff]">"Bearer YOUR_KEY"</span>
                <span className="text-[#c9d1d9]">{"}"}</span>
                <span className="text-[#c9d1d9]">,</span>{"\n"}
                <span className="text-[#c9d1d9]">    json=</span>
                <span className="text-[#c9d1d9]">{"{"}</span>
                <span className="text-[#a5d6ff]">"categoryPath"</span>
                <span className="text-[#c9d1d9]">: [</span>
                <span className="text-[#a5d6ff]">"Electronics"</span>
                <span className="text-[#c9d1d9]">, </span>
                <span className="text-[#a5d6ff]">"Headphones"</span>
                <span className="text-[#c9d1d9]">], </span>
                <span className="text-[#a5d6ff]">"dateRange"</span>
                <span className="text-[#c9d1d9]">: </span>
                <span className="text-[#a5d6ff]">"30d"</span>
                <span className="text-[#c9d1d9]">{"}"}</span>{"\n"}
                <span className="text-[#c9d1d9]">)</span>{"\n\n"}
                <span className="text-[#c9d1d9]">market = response.</span>
                <span className="text-[#d2a8ff]">json</span>
                <span className="text-[#c9d1d9]">()</span>{"\n"}
                <span className="text-[#ff7b72]">print</span>
                <span className="text-[#c9d1d9]">(</span>
                <span className="text-[#a5d6ff]">f"Monthly demand: </span>
                <span className="text-[#c9d1d9]">{"{"}market['totalDemand']{"}"}</span>
                <span className="text-[#a5d6ff]">"</span>
                <span className="text-[#c9d1d9]">)</span>{"\n"}
                <span className="text-[#ff7b72]">print</span>
                <span className="text-[#c9d1d9]">(</span>
                <span className="text-[#a5d6ff]">f"Avg gross margin: </span>
                <span className="text-[#c9d1d9]">{"{"}market['avgGrossMargin']{"}"}</span>
                <span className="text-[#a5d6ff]">%"</span>
                <span className="text-[#c9d1d9]">)</span>
              </code>
            </pre>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const cards = [
    {
      icon: BarChart3,
      color: "text-[#6366f1]",
      bg: "bg-[#eef2ff]",
      title: "Category Market Analysis",
      desc: "Demand volume, pricing, margin, competition density and FBA rate for any Amazon category — aggregated and ready.",
      badge: "POST /v2/markets/search",
    },
    {
      icon: Database,
      color: "text-[#3b82f6]",
      bg: "bg-[#eff6ff]",
      title: "18M+ Product Database",
      desc: "Search, filter, and batch-lookup products with BSR, ratings, price, dimensions, and seller data.",
      badge: "POST /v1/products/search",
    },
    {
      icon: Crosshair,
      color: "text-[#8b5cf6]",
      bg: "bg-[#f5f3ff]",
      title: "Competitor Lookup",
      desc: "Find what's competing against any keyword, brand, or ASIN. Understand the field before you enter it.",
      badge: "POST /v2/products/competitor-lookup",
    },
    {
      icon: Zap,
      color: "text-[#f97316]",
      bg: "bg-[#fff7ed]",
      title: "Live Amazon Scraping",
      desc: "Direct from Amazon — no cache. Products, bestsellers, search results, and reviews in real time.",
      badge: "POST /v1/realtime/product",
    },
    {
      icon: MessageCircle,
      color: "text-[#22c55e]",
      bg: "bg-[#f0fdf4]",
      title: "AI Review Intelligence",
      desc: "Sentiment analysis, rating distribution, and consumer insight extraction across any ASIN or category.",
      badge: "POST /v1/reviews/analyze",
    },
    {
      icon: Tag,
      color: "text-[#ec4899]",
      bg: "bg-[#fdf2f8]",
      title: "Fashion Tag Extraction",
      desc: "Auto-extract style, material, fit, and occasion attributes from clothing ASINs. The only API with this.",
      badge: "POST /v1/products/tags",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="capabilities" data-testid="capabilities-section">
      <AnimatedSection>
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-[#6366f1] uppercase tracking-[0.15em] mb-3">Core Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
            Everything you need to win on Amazon
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-lg">
            From market research to real-time data — six powerful modules, one unified API.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 80}>
            <div
              className="group bg-white rounded-xl border border-[#e2e8f0] p-6 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
              data-testid={`card-capability-${i}`}
            >
              <div className={`w-11 h-11 ${card.bg} rounded-xl flex items-center justify-center mb-4`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{card.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4 flex-1">{card.desc}</p>
              <div className="inline-flex">
                <span className="inline-flex items-center gap-1.5 bg-[#f8fafc] text-[#64748b] text-xs font-mono px-3 py-1.5 rounded-md border border-[#e2e8f0]">
                  <span className="text-[#22c55e] font-semibold">POST</span>
                  {card.badge.replace("POST ", "")}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function EndpointReference() {
  const groups = [
    {
      title: "Markets",
      version: "v1",
      endpoints: [
        { path: "/v1/markets/search", desc: "Search market data by category" },
      ],
    },
    {
      title: "Products",
      version: "v1",
      endpoints: [
        { path: "/v1/products/search", desc: "Search product database" },
        { path: "/v1/products/detail", desc: "Get product details by ASIN" },
        { path: "/v1/products/batch", desc: "Batch lookup multiple ASINs" },
        { path: "/v1/products/tags", desc: "Extract fashion tags" },
        { path: "/v1/products/history", desc: "Price & BSR history" },
        { path: "/v1/products/sellers", desc: "Get seller info for a product" },
      ],
    },
    {
      title: "Realtime",
      version: "v1",
      endpoints: [
        { path: "/v1/realtime/product", desc: "Live product data from Amazon" },
        { path: "/v1/realtime/search", desc: "Live Amazon search results" },
        { path: "/v1/realtime/bestsellers", desc: "Live bestseller rankings" },
        { path: "/v1/realtime/reviews", desc: "Live review data" },
      ],
    },
    {
      title: "Reviews",
      version: "v1",
      endpoints: [
        { path: "/v1/reviews/analyze", desc: "AI review sentiment analysis" },
      ],
    },
    {
      title: "System",
      version: "v1",
      endpoints: [
        { path: "/v1/system/status", desc: "API health check" },
        { path: "/v1/system/usage", desc: "Your usage statistics" },
      ],
    },
    {
      title: "Categories",
      version: "v2",
      endpoints: [
        { path: "/v2/categories/list", desc: "Browse category taxonomy" },
      ],
    },
    {
      title: "Markets",
      version: "v2",
      endpoints: [
        { path: "/v2/markets/search", desc: "Agent-optimized market data" },
      ],
    },
    {
      title: "Products",
      version: "v2",
      endpoints: [
        { path: "/v2/products/search", desc: "Agent-optimized product search" },
        { path: "/v2/products/competitor-lookup", desc: "Competitor intelligence" },
      ],
    },
  ];

  const v1Groups = groups.filter((g) => g.version === "v1");
  const v2Groups = groups.filter((g) => g.version === "v2");

  return (
    <section className="bg-[#0f172a] py-20 md:py-28" id="endpoints" data-testid="endpoints-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Full API Reference
            </h2>
            <p className="text-[#94a3b8] mt-3 text-lg">
              v1 stable &bull; v2 optimized for agents
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.08]">
                <span className="text-[10px] font-bold bg-[#6366f1]/20 text-[#818cf8] px-2 py-0.5 rounded font-mono uppercase tracking-wider">v1</span>
                <span className="text-sm font-semibold text-white">Stable Endpoints</span>
              </div>
              <div className="space-y-0.5">
                {v1Groups.map((group) =>
                  group.endpoints.map((ep) => (
                    <div
                      key={ep.path}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-white/[0.04] transition-colors group"
                      data-testid={`endpoint-${ep.path.replace(/\//g, "-").slice(1)}`}
                    >
                      <span className="text-[9px] font-bold text-[#22c55e] bg-[#22c55e]/10 px-1.5 py-0.5 rounded font-mono flex-shrink-0">
                        POST
                      </span>
                      <code className="text-[13px] text-[#cbd5e1] font-mono truncate">{ep.path}</code>
                      <span className="text-[11px] text-[#475569] ml-auto hidden lg:block flex-shrink-0">{ep.desc}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.08]">
                <span className="text-[10px] font-bold bg-[#f97316]/20 text-[#fb923c] px-2 py-0.5 rounded font-mono uppercase tracking-wider">v2</span>
                <span className="text-sm font-semibold text-white">Agent-Optimized</span>
              </div>
              <div className="space-y-0.5">
                {v2Groups.map((group) =>
                  group.endpoints.map((ep) => (
                    <div
                      key={ep.path}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-white/[0.04] transition-colors group"
                      data-testid={`endpoint-${ep.path.replace(/\//g, "-").slice(1)}`}
                    >
                      <span className="text-[9px] font-bold text-[#22c55e] bg-[#22c55e]/10 px-1.5 py-0.5 rounded font-mono flex-shrink-0">
                        POST
                      </span>
                      <code className="text-[13px] text-[#cbd5e1] font-mono truncate">{ep.path}</code>
                      <span className="text-[11px] text-[#475569] ml-auto hidden lg:block flex-shrink-0">{ep.desc}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.08]">
                <p className="text-xs text-[#64748b] leading-relaxed">
                  v2 endpoints return flat JSON optimized for LLM tool-calling. Compatible with LangChain, CrewAI, and AutoGen out of the box.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      features: ["1,000 calls/mo", "Products Search & Detail", "Basic market data", "Community support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/mo",
      features: ["50,000 calls/mo", "All 18 endpoints", "Realtime data", "AI review analysis", "Priority support"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited calls", "SLA guarantee", "Dedicated support", "Custom integrations", "On-boarding assistance"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="pricing" data-testid="pricing-section">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-[#64748b] mt-4 text-lg">
            Start free. Scale as you grow.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <AnimatedSection key={plan.name} delay={i * 120}>
            <div
              className={`relative bg-white rounded-2xl p-7 h-full flex flex-col ${
                plan.popular
                  ? "border-2 border-[#6366f1] shadow-xl shadow-indigo-100"
                  : "border border-[#e2e8f0]"
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#6366f1] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#0f172a]">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#0f172a]">{plan.price}</span>
                  {plan.period && <span className="text-[#64748b] text-sm">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-[#1e293b]">
                    <Check className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-[#6366f1] text-white hover:bg-[#5558e6] shadow-md shadow-indigo-200"
                    : "bg-[#f8fafc] text-[#0f172a] border border-[#e2e8f0] hover:bg-[#f1f5f9]"
                }`}
                data-testid={`button-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function QuickStartSection() {
  const steps = [
    {
      step: "1",
      title: "Get your API key",
      desc: "Sign up, grab your Bearer token",
    },
    {
      step: "2",
      title: "Make a POST request",
      desc: "Pick any endpoint, send JSON body",
    },
    {
      step: "3",
      title: "Get structured data",
      desc: "Clean JSON response, ready for your app",
    },
  ];

  const curlCode = `curl -X POST https://api.sellerlayer.com/openapi/v2/markets/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"categoryPath": ["Electronics", "Headphones"], "dateRange": "30d"}'`;

  return (
    <section className="bg-[#f8fafc] border-y border-[#e2e8f0] py-20 md:py-28" data-testid="quickstart-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
              From zero to first API call in 5 minutes
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-14 max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-[#e2e8f0]" />
          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 120}>
              <div className="text-center relative z-10" data-testid={`quickstart-step-${s.step}`}>
                <div className="w-14 h-14 bg-[#6366f1] text-white font-bold text-lg rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-indigo-200">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-[#0f172a] mb-1">{s.title}</h3>
                <p className="text-sm text-[#64748b]">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={200}>
          <div className="bg-[#0d1117] rounded-2xl p-6 max-w-4xl mx-auto overflow-x-auto shadow-xl shadow-slate-900/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="text-[#64748b] text-xs ml-2 font-mono">terminal</span>
            </div>
            <pre className="text-sm font-mono text-[#e2e8f0] whitespace-pre-wrap break-all">
              <span className="text-[#64748b]">$</span> {curlCode}
            </pre>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#818cf8] to-[#6366f1] rounded-xl flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">SellerLayer</span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              The Amazon data layer for what you're building.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-16">
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2.5">
                <li><a href="#capabilities" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-products">Products</a></li>
                <li><a href="#pricing" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-pricing">Pricing</a></li>
                <li><a href="#endpoints" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-docs">Docs</a></li>
                <li><a href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-status">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-github">GitHub</a></li>
                <li><a href="#endpoints" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-api-reference">API Reference</a></li>
                <li><a href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-changelog">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy</a></li>
                <li><a href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors" data-testid="link-footer-terms">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#64748b]">&copy; 2025 SellerLayer &middot; Powered by yesy.dev</p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <UseCasesSection />
      <AIStackSection />
      <CapabilitiesSection />
      <EndpointReference />
      <PricingSection />
      <QuickStartSection />
      <Footer />
    </div>
  );
}
