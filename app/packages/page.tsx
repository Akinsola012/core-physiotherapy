import Link from "next/link";
import { practice, packages, faqs } from "../../components/site-data";

export const metadata = {
  title: `Packages & Pricing — ${practice.name}`,
  description:
    "Transparent pricing for home physiotherapy. Pay in NGN, USD, GBP, or CAD via Selar."
};

export default function PackagesPage() {
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

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Packages & Pricing</p>
          <h1>Simple pricing. International cards welcome.</h1>
          <p className="hero-lead">
            Choose the package that fits your parent's recovery. All prices
            shown in NGN — international cards are billed automatically in your
            local currency via Selar.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section">
        <div className="shell">
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
                  className="button button-gold"
                  href={pkg.selarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book & Pay Securely
                </a>
              </div>
            ))}
          </div>

          <p className="pricing-note">
            Secure checkout via Selar. International cards accepted in USD,
            GBP, and CAD. No hidden fees.
          </p>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="section section-sand">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Available Add-Ons</p>
            <h2>Consumables & extras — one-time or as-needed.</h2>
            <p>
              These items are not included in package prices. Purchase from us
              or use your own.
            </p>
          </div>

          <div
            className="trust-grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {[
              "Analgesic (pain-relief) cream",
              "Electrode pads",
              "Sandbags",
              "Hot & cold packs",
              "Resistance bands (yours to keep)",
              "Other equipment as needed"
            ].map((item) => (
              <div
                className="trust-item"
                key={item}
                style={{
                  borderLeft: "2px solid var(--gold)",
                  paddingLeft: "18px"
                }}
              >
                <h4 style={{ color: "var(--ink)" }}>{item}</h4>
              </div>
            ))}
          </div>
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
            <h2>Payment & booking questions</h2>
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
          <h2>Not sure which package?</h2>
          <p>Send us a message — we'll recommend the right fit.</p>
          <a className="button button-gold" href={practice.whatsappHref}>
            Talk to Us
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