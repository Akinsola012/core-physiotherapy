import Link from "next/link";
import { practice, faqs } from "../../components/site-data";

export const metadata = {
  title: `FAQ — ${practice.name}`,
  description:
    "Frequently asked questions about home physiotherapy for your parents in Nigeria."
};

export default function FAQPage() {
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
          <p className="eyebrow">FAQ</p>
          <h1>Questions from families abroad.</h1>
          <p className="hero-lead">
            Everything you need to know about our home physiotherapy service.
            Can't find your answer? Send us a WhatsApp message.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="section">
        <div className="shell">
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
          <h2>Still have questions?</h2>
          <p>Call or WhatsApp us — we respond the same day.</p>
          <a className="button button-gold" href={practice.whatsappHref}>
            Contact Us
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