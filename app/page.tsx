import Link from "next/link";
import {
  practice,
  trustPoints,
  fearPoints,
  services,
  steps,
  packages,
  faqs
} from "../components/site-data";

export default function HomePage() {
  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">◆</span>
            <span>{practice.name}</span>
          </Link>

          <nav className="header-nav">
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/what-we-treat">What We Treat</Link>
            <Link href="/packages">Packages</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
          </nav>

          <a className="button button-small" href={practice.whatsappHref}>
            Book an Assessment
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">For Nigerians Abroad</p>
            <h1>Give your aging parents the gift of movement.</h1>
            <p className="hero-lead">
              Specialized home physiotherapy for your parents in Nigeria —
              with video proof of every session, weekly digital reports, and a
              direct line to the treating physiotherapist.
            </p>

            <div className="hero-actions">
              <a className="button button-gold" href={practice.whatsappHref}>
                Book a Mobility Assessment
              </a>
              <Link className="button button-outline" href="/how-it-works">
                How It Works
              </Link>
            </div>

            <p className="hero-note">
              Licensed Physiotherapists (MRTB) · Home visits across{" "}
              {practice.serviceArea}
            </p>
          </div>

          <div className="hero-image">
            <img
              src="/images/hero-physio.jpg"
              alt="Core Physiotherapy licensed physiotherapist"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="shell trust-grid">
          {trustPoints.map((point) => (
            <div className="trust-item" key={point.title}>
              <h4>{point.title}</h4>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEAR */}
      <section className="section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">The Hardest Part of Living Abroad</p>
            <h2>You worry about their health — every single day.</h2>
            <p>
              You send money home every month. But when it comes to their
              actual physical health, you're left hoping, guessing, and
              worrying.
            </p>
          </div>

          <div className="fear-grid">
            {fearPoints.map((point) => (
              <div className="fear-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-sand">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">What We Treat</p>
            <h2>Specialized care for the conditions that matter most.</h2>
            <p>
              We focus on geriatric physiotherapy — the conditions that steal
              independence from aging parents.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card" key={service.slug}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">How It Works</p>
            <h2>Zero guesswork. Full transparency.</h2>
            <p>
              We built our entire workflow around your peace of mind — so you
              always know exactly what's happening on the ground.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.number}>
                <span className="step-number">Step {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section section-sand">
        <div className="shell">
          <div
            className="section-header"
            style={{ textAlign: "center", margin: "0 auto 48px" }}
          >
            <p className="eyebrow">Packages</p>
            <h2>Simple pricing. International cards welcome.</h2>
            <p>
              Pay securely in NGN, USD, GBP, or CAD via Selar. Prices shown in
              NGN with USD equivalent.
            </p>
          </div>

          <div className="pricing-grid">
            {packages.map((pkg) => (
              <div
                className={`pricing-card ${pkg.featured ? "featured" : ""}`}
                key={pkg.slug}
              >
                {pkg.featured && (
                  <div className="pricing-badge">Most Popular</div>
                )}

                <h3>{pkg.name}</h3>
                <p className="pricing-sessions">{pkg.sessions}</p>
                <p className="pricing-amount-usd">{pkg.priceNGN}</p>
                <p className="pricing-amount-ngn">{pkg.priceUSD}</p>
                <p className="pricing-desc">{pkg.description}</p>

                <ul className="pricing-includes">
                  {pkg.includes.map((item) => (
                    <li key={item}>
                      <span className="pricing-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  className="button"
                  href={pkg.selarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>

          <p className="pricing-note">
            Secure checkout via Selar. International cards accepted. No hidden
            fees.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="shell">
          <div
            className="section-header"
            style={{ textAlign: "center", margin: "0 auto 48px" }}
          >
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from families abroad.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details className="faq-item" key={i}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="shell">
          <h2>Start with a mobility assessment.</h2>
          <p>
            One visit. A clear picture. A plan you can trust — from anywhere in
            the world.
          </p>
          <a className="button button-gold" href={practice.whatsappHref}>
            Book a Mobility Assessment
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <h2>{practice.name}</h2>
            <p>
              Specialized geriatric physiotherapy for your parents in Nigeria.
              Licensed, video-documented, and delivered with dignity.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/what-we-treat">What We Treat</Link>
            <Link href="/packages">Packages</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div>
            <h3>Contact</h3>
            <a href={practice.whatsappHref}>💬 WhatsApp</a>
            <a href={practice.phoneHref}>📞 {practice.phone}</a>
            <a href={practice.emailHref}>✉️ {practice.email}</a>
            <p style={{ fontSize: "0.85rem", marginTop: "12px" }}>
              {practice.serviceArea}
            </p>
          </div>
        </div>

        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} {practice.name}. All rights reserved.
          </span>
          <span>{practice.credentials}</span>
        </div>
      </footer>
    </main>
  );
}