import Link from "next/link";
import { practice } from "../../components/site-data";

export const metadata = {
  title: `About — ${practice.name}`,
  description:
    "Licensed physiotherapy for aging parents in Nigeria, with transparency built in."
};

export default function AboutPage() {
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
          <p className="eyebrow">About Us</p>
          <h1>Why we built Core Physiotherapy.</h1>
          <p className="hero-lead">
            We saw a problem worth solving: Nigerian families abroad want to
            care for their aging parents — but had no way to know if their
            money actually turned into real care.
          </p>
        </div>
      </section>

      {/* STORY + PHOTO */}
      <section className="section">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2>Built for families separated by distance.</h2>
            <p>
              Every week, we hear the same story. A son in London. A daughter
              in Toronto. A parent in Lagos or Ibadan. They send money home
              every month — but they have no way of knowing what actually
              happened.
            </p>
            <p>
              Did their mother see a doctor? Did their father get the
              physiotherapy he needed after his fall? Did the funds actually
              turn into real, professional care — or did they disappear into
              the void?
            </p>
            <p>
              We built Core Physiotherapy to solve that problem. Every session
              is documented with video and PDF reports. Every question reaches
              the treating physiotherapist. Every week you get proof.
            </p>
            <p>
              We are licensed physiotherapists (MRTB) with experience in
              geriatric rehabilitation, stroke recovery, and fall prevention.
              We deliver care with the dignity every parent deserves.
            </p>
          </div>

          <div className="hero-image">
            <img
              src="/images/about-physio.jpg"
              alt="Core Physiotherapy licensed physiotherapist"
            />
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section section-sand">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Credentials</p>
            <h2>Professional standards you can trust.</h2>
          </div>

          <div
            className="trust-grid"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            <div
              className="trust-item"
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "18px"
              }}
            >
              <h4 style={{ color: "var(--ink)" }}>MRTB Licensed</h4>
              <p style={{ color: "var(--muted)" }}>
                Registered with the Medical Rehabilitation Therapists Board of
                Nigeria.
              </p>
            </div>
            <div
              className="trust-item"
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "18px"
              }}
            >
              <h4 style={{ color: "var(--ink)" }}>Geriatric Specialty</h4>
              <p style={{ color: "var(--muted)" }}>
                Focused on the conditions that affect older adults — falls,
                stroke, arthritis, mobility decline.
              </p>
            </div>
            <div
              className="trust-item"
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "18px"
              }}
            >
              <h4 style={{ color: "var(--ink)" }}>Home-Based Care</h4>
              <p style={{ color: "var(--muted)" }}>
                We come to your parent. No travel required, no clinic waiting
                rooms.
              </p>
            </div>
            <div
              className="trust-item"
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "18px"
              }}
            >
              <h4 style={{ color: "var(--ink)" }}>Full Transparency</h4>
              <p style={{ color: "var(--muted)" }}>
                Video snippets, PDF reports, and a direct line to the treating
                physio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Where We Work</p>
            <h2>Home visits across South-West Nigeria.</h2>
            <p>{practice.serviceArea}</p>
          </div>

          <div
            className="trust-grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {[
              { city: "Ibadan", note: "Primary base — same-day visits available." },
              { city: "Lagos", note: "Home visits across the mainland and island." },
              { city: "Abeokuta", note: "Scheduled visits throughout the week." },
              { city: "Osogbo", note: "Home visits by appointment." },
              { city: "Ife", note: "Home visits by appointment." },
              { city: "Other cities", note: "Contact us to arrange." }
            ].map((loc) => (
              <div
                className="trust-item"
                key={loc.city}
                style={{
                  borderLeft: "2px solid var(--gold)",
                  paddingLeft: "18px"
                }}
              >
                <h4 style={{ color: "var(--ink)" }}>{loc.city}</h4>
                <p style={{ color: "var(--muted)" }}>{loc.note}</p>
              </div>
            ))}
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