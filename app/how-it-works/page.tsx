import Link from "next/link";
import { practice, steps, trustPoints } from "../../components/site-data";

export const metadata = {
  title: `How It Works — ${practice.name}`,
  description:
    "Our transparent process for delivering physiotherapy to your parents in Nigeria."
};

export default function HowItWorksPage() {
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
          <p className="eyebrow">How It Works</p>
          <h1>Zero guesswork. Full transparency.</h1>
          <p className="hero-lead">
            We built our entire workflow around your peace of mind. Every
            session is documented, every week you get a report, and every
            question reaches the treating physiotherapist directly.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">The Process</p>
            <h2>From first contact to full recovery.</h2>
            <p>
              Four clear steps. No hidden stages. No surprises.
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

      {/* PROMISES */}
      <section className="section section-sand">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Our Promises</p>
            <h2>What we commit to — every single time.</h2>
          </div>

          <div
            className="trust-grid"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            {trustPoints.map((point) => (
              <div
                className="trust-item"
                key={point.title}
                style={{
                  borderLeft: "2px solid var(--gold)",
                  paddingLeft: "18px"
                }}
              >
                <h4 style={{ color: "var(--ink)" }}>{point.title}</h4>
                <p style={{ color: "var(--muted)" }}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTING DETAIL */}
      <section className="section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">What You Receive</p>
            <h2>Proof of every session — sent to your phone.</h2>
            <p>
              We believe transparency is the foundation of trust. Here's
              exactly what lands in your WhatsApp and email.
            </p>
          </div>

          <div className="fear-grid">
            <div className="fear-card">
              <h3>📹 Video Snippets</h3>
              <p>
                Short WhatsApp clips of every session — with your parent's
                consent — so you can see progress with your own eyes.
              </p>
            </div>
            <div className="fear-card">
              <h3>📄 PDF Progress Reports</h3>
              <p>
                Weekly reports covering range of motion, strength, pain
                levels, and functional goals — clean, clinical, professional.
              </p>
            </div>
            <div className="fear-card">
              <h3>💬 Direct WhatsApp Line</h3>
              <p>
                A direct line to the treating physiotherapist. Ask questions,
                raise concerns, get updates — no middlemen, no delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="shell">
          <h2>Ready to start?</h2>
          <p>Book a mobility assessment for your parent today.</p>
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