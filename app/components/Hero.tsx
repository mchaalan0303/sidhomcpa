export default function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-light/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Est. 1992 · Cypress, California
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Trusted CPA
            <br />
            <span className="text-gold">Expertise</span> for
            <br />
            Every Stage
          </h1>

          {/* Subheading */}
          <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Full-service accounting, tax planning, and financial consulting for
            businesses and high net worth individuals. Over 30 years of
            personalized service.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-gold text-navy font-semibold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors duration-200 text-base"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-200 text-base"
            >
              Schedule a Consultation
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl font-bold text-white">30+</p>
              <p className="text-white/50 text-sm mt-1">Years of Experience</p>
            </div>
            <div className="w-px bg-white/15 hidden sm:block" />
            <div>
              <p className="text-4xl font-bold text-white">CPA</p>
              <p className="text-white/50 text-sm mt-1">Certified Professionals</p>
            </div>
            <div className="w-px bg-white/15 hidden sm:block" />
            <div>
              <p className="text-4xl font-bold text-white">Full</p>
              <p className="text-white/50 text-sm mt-1">Service Firm</p>
            </div>
            <div className="w-px bg-white/15 hidden sm:block" />
            <div>
              <p className="text-4xl font-bold text-white">1:1</p>
              <p className="text-white/50 text-sm mt-1">Personal Attention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/5 to-transparent" />
    </section>
  );
}