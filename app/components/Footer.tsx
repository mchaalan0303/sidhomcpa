export default function Footer() {
  const services = [
    "Tax Planning",
    "Tax Preparation",
    "Accounting Services",
    "Estate Planning",
    "Investment Services",
    "Cash Management",
    "Computer Consulting",
  ];

  return (
    <footer className="bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-base">N</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">
                  Nazih A. Sidhom
                </p>
                <p className="text-gold text-xs tracking-wide">
                  Certified Public Accountant
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Full-service accounting, tax planning, and consulting for
              businesses and high net worth individuals. Serving clients since
              1992 from Cypress, California.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-white/40 text-xs">
                Est. 1992 · Cypress, CA
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/45 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Why Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gold-dark transition-colors duration-200"
            >
              Free Consultation
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Nazih A. Sidhom, CPA. All rights
            reserved.
          </p>
          <p className="text-white/20 text-xs">Cypress, California</p>
        </div>
      </div>
    </footer>
  );
}