import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Book a Sacred Conversation | Cindy Baez Life Coaching",
    description:
        "Schedule your sacred conversation with Cindy Baez. This is the first step on your path back to yourself.",
};

const BOOKING_URL =
    "https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true";

export default function ContactPage() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero */}
                <section
                    className="hero"
                    style={{ minHeight: "50vh", paddingTop: 160, paddingBottom: 40 }}
                >
                    <div className="hero-content">
                        <p className="hero-eyebrow">Contact</p>
                        <h1>Book a Sacred Conversation</h1>
                        <p className="hero-subtitle">
                            This is not a sales call. It&rsquo;s a moment carved out of your
                            life, for your life, where you can finally tell the truth without
                            fear or judgment.
                        </p>
                    </div>
                </section>

                {/* Cal.com Embed */}
                <section className="section" style={{ paddingTop: 0 }}>
                    <div className="container" style={{ maxWidth: 900 }}>
                        <div
                            style={{
                                background: "var(--card-bg)",
                                borderRadius: "var(--radius-lg)",
                                border: "1px solid var(--light-border)",
                                boxShadow: "var(--shadow-medium)",
                                overflow: "hidden",
                                minHeight: 700,
                            }}
                        >
                            <iframe
                                src={BOOKING_URL}
                                title="Book a Sacred Conversation with Cindy Baez"
                                style={{
                                    width: "100%",
                                    height: 700,
                                    border: "none",
                                    borderRadius: "var(--radius-lg)",
                                }}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-center" style={{ marginTop: 48 }}>
                            <p style={{ fontSize: "0.9rem", color: "var(--muted-text)" }}>
                                Prefer to book directly?{" "}
                                <a
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "var(--gold)",
                                        fontWeight: 600,
                                        textDecoration: "underline",
                                    }}
                                >
                                    Open scheduling page →
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
