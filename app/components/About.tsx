export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                About the Firm
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 leading-tight">
              Three Decades of
              <br />
              Financial Excellence
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-5">
              Since 1992, Nazih A. Sidhom Accounting Firm has delivered
              exceptional accounting, tax, and consulting services from Cypress,
              California.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-5">
              We combine the comprehensive capabilities of a larger practice
              with the personalized attention only a dedicated, close-knit team
              can provide. Our clients — business owners and high net worth
              individuals — value both our expertise and our accessibility.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-10">
              Our Certified Public Accountants bring deep expertise across
              accounting, taxation, financial planning, and business advisory
              services, ensuring you receive complete, integrated financial
              guidance under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-xl hover:bg-navy-dark transition-colors duration-200"
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
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-navy/5 transition-colors duration-200"
              >
                View Our Services
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <p className="text-5xl font-bold text-gold mb-2">30+</p>
              <p className="text-white font-semibold text-base">Years in Business</p>
              <p className="text-white/50 text-sm mt-2">
                Founded in Cypress, CA in 1992
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 mt-6">
              <p className="text-5xl font-bold text-navy mb-2">CPA</p>
              <p className="text-navy font-semibold text-base">Certified Team</p>
              <p className="text-zinc-400 text-sm mt-2">
                Licensed & credentialed professionals
              </p>
            </div>
            <div className="bg-gold rounded-2xl p-8 -mt-2">
              <p className="text-5xl font-bold text-navy mb-2">Full</p>
              <p className="text-navy font-semibold text-base">Service Firm</p>
              <p className="text-navy/60 text-sm mt-2">
                Accounting, tax & consulting
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 mt-4">
              <p className="text-5xl font-bold text-navy mb-2">1:1</p>
              <p className="text-navy font-semibold text-base">Personal Service</p>
              <p className="text-zinc-400 text-sm mt-2">
                Direct access to your CPA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}