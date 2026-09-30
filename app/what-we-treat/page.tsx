import Link from "next/link";
import { practice, services } from "../../components/site-data";

export const metadata = {
  title: `What We Treat — ${practice.name}`,
  description:
    "Specialized geriatric physiotherapy for the conditions that matter most."
};

export default function WhatWeTreatPage() {
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
          <p className="eyebrow">What We Treat</p>
          <h1>Specialized care for aging parents.</h1>
          <p className="hero-lead">
            We focus on the conditions that steal independence from older
            adults. Every treatment plan is personalized, evidence-based, and
            delivered in the comfort of your parent's home.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="shell">
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

      {/* CONDITIONS WE FOCUS ON */}
      <section className="section section-sand">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Conditions We Manage</p>
            <h2>Common conditions we treat at home.</h2>
            <p>
              We work with your parent's medical team where needed — and design
              every plan around their specific diagnosis and goals.
            </p>
          </div>

          <div
            className="trust-grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {[
              "Osteoarthritis",
              "Rheumatoid arthritis",
              "Post-stroke weakness",
              "Parkinson's disease",
              "Balance disorders",
              "Chronic back pain",
              "Knee & hip pain",
              "Post-fracture recovery",
              "Muscle weakness & deconditioning",
              "Dementia-related mobility loss",
              "Post-surgical rehabilitation",
              "Fall-related injuries"
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

      {/* CTA */}
      <section className="cta-section">
        <div className="shell">
          <h2>Not sure which fits your parent?</h2>
          <p>Send us a message — we'll recommend the right approach.</p>
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