const businessServices = [
  {
    title: "Accounting Services",
    desc: "Comprehensive bookkeeping, financial statements, and reporting tailored to your business needs.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Cash Management",
    desc: "Strategic cash flow analysis and management to optimize your business financial health.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Computer Consulting",
    desc: "Technology solutions and specialized industry applications to streamline your operations.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Business Advisory",
    desc: "Expert guidance on financial decisions, growth strategies, and business planning.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

const individualServices = [
  {
    title: "Tax Planning",
    desc: "Proactive strategies to minimize your tax liability and maximize your financial position year-round.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Tax Preparation",
    desc: "Accurate, timely preparation of federal and state tax returns with meticulous attention to detail.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Estate Planning",
    desc: "Comprehensive planning to protect, grow, and transfer your wealth effectively to future generations.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Investment Services",
    desc: "Financial planning and investment guidance aligned with your personal goals and risk tolerance.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
  },
];

function ServiceCard({
  title,
  desc,
  icon,
  accent,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: "navy" | "gold";
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-gold/40 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            accent === "navy"
              ? "bg-navy/8 text-navy group-hover:bg-navy group-hover:text-gold"
              : "bg-gold/15 text-gold-dark group-hover:bg-gold group-hover:text-navy"
          } transition-colors duration-300`}
        >
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-navy mb-1.5 text-base">{title}</h4>
          <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              What We Offer
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Comprehensive Services
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From complex business accounting to individual tax planning, we
            deliver the expertise and attention your finances deserve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">
                  Business Services
                </h3>
                <p className="text-zinc-400 text-sm">For business owners</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {businessServices.map((s) => (
                <ServiceCard
                  key={s.title}
                  title={s.title}
                  desc={s.desc}
                  icon={s.icon}
                  accent="navy"
                />
              ))}
            </div>
          </div>

          {/* Individual Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gold rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">
                  Individual Services
                </h3>
                <p className="text-zinc-400 text-sm">
                  For high net worth individuals
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {individualServices.map((s) => (
                <ServiceCard
                  key={s.title}
                  title={s.title}
                  desc={s.desc}
                  icon={s.icon}
                  accent="gold"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}