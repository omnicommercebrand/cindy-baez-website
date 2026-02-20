import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
    title: "Testimonials | Cindy Baez — Reflections of the Return",
    description:
        "Read transformational stories from women who have walked the path back to themselves with Cindy Baez's sacred coaching.",
};

const BOOKING_URL =
    "https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true";

const featuredTestimonials = [
    {
        title: "The Cloud Is Lifted",
        text: "After my coaching session with Cindy I feel great! So much lighter. The energy around me isn't pushing on me and crowding me. Feeling less stagnant. The cloud is lifted. Ready to laugh, sing and have a good day. Thank you!",
        author: "Carol",
    },
    {
        title: "From Inner Blocks to Outer Success",
        text: "Before working with Cindy, I was in the middle of launching a new offer for my business... some doubts and limiting beliefs coming up... Our sessions helped me move through what was getting in the way... In the end, once my inner world shifted through my work with Cindy, my outer results fell into place and the launch ended up being a success. If you want a coach who can help you move through what's blocking you and bring out the best in you, I'd definitely recommend working with Cindy.",
        author: "Jared",
    },
    {
        title: "The Journey Back to Me",
        text: "Cindy's Warrior Wonder Women class is a confirmation that I'm not alone. Coming together to a safe place to be vulnerable... It's where I can shine my light and have the courage to be who I am and continue to dive deeper to falling in love with myself... This group is catalytic in my life and in the practice of how I want to be in the world... It just allows my joy to burst open even more. To be witness to each woman evolving and blossoming together.",
        author: "Gail",
    },
];

const shortTestimonials = [
    {
        text: "Cindy's gonna come and houseclean your life... She is not for the faint of heart because she is a warrior... If you're afraid, that's okay. She's also a warrior who can help you get to the other side.",
        author: "Suzanne",
    },
    {
        text: "Cindy's magic is her ability to hold and create an impeccable space where transformation is natural, potent and powerful.",
        author: "Ishan",
    },
    {
        text: "Cindy's magic is her sweetness that draws you into her warrior embrace to show you that she's on your side.",
        author: "Susan",
    },
    {
        text: "Cindy is a wise woman. She gathers women in a place of so much love and acceptance and belonging, making you feel so safe and welcomed.",
        author: "Laura Lee",
    },
    {
        text: "Cindy's magic is an invitation so full of love that a woman wants to open and go places that she didn't know she could before meeting and knowing Cindy.",
        author: "Amanda",
    },
    {
        text: "Whilst there is a beautiful vulnerability, Cindy's real magic is her incredible bravery that brings light to others.",
        author: "Steven",
    },
    {
        text: "Cindy's power is an alchemy. She is alchemizing her own journey... from being victimized to being strong, a hero, a heroine goddess in your life.",
        author: "Sara",
    },
    {
        text: "When in Cindy's Warrior Wonder Woman class I feel such a connection back to me, source, creator. It's like going from striving to something else and having my spirit show up and meet me.",
        author: "Janice",
    },
];

export default function TestimonialsPage() {
    return (
        <>
            <Navigation />
            <ScrollReveal />
            <main>
                {/* Hero */}
                <section className="hero" style={{ minHeight: "60vh", paddingTop: 160, paddingBottom: 80 }}>
                    <div className="hero-content">
                        <p className="hero-eyebrow">Testimonials</p>
                        <h1>Reflections of the Return</h1>
                        <p className="hero-subtitle">
                            You are not alone in this. The women who have walked this path
                            before you have generously shared their reflections. May their
                            words be a lantern for your own journey home.
                        </p>
                    </div>
                </section>

                {/* Featured Testimonials */}
                <section className="section">
                    <div className="container">
                        <div
                            style={{
                                display: "grid",
                                gap: 40,
                                maxWidth: 900,
                                margin: "0 auto",
                            }}
                        >
                            {featuredTestimonials.map((t, i) => (
                                <div className="testimonial-card reveal" key={i}>
                                    <div className="testimonial-title">{t.title}</div>
                                    <p className="testimonial-text">{t.text}</p>
                                    <span className="testimonial-author">— {t.author}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Shift heading */}
                <section className="section section-alt">
                    <div className="container">
                        <div className="text-center reveal" style={{ marginBottom: 48 }}>
                            <h2>The Shift: From Buried to Radiant</h2>
                            <div className="divider"></div>
                        </div>
                        <div className="short-testimonials-grid">
                            {shortTestimonials.map((t, i) => (
                                <div className="short-testimonial reveal" key={i}>
                                    <p className="testimonial-text" style={{ fontSize: "1rem" }}>
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                    <span className="testimonial-author">— {t.author}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="container reveal">
                        <h2>Your Return is Waiting</h2>
                        <p>
                            You&rsquo;ve heard their stories. You&rsquo;ve felt the
                            resonance. The same possibility for lightness, freedom, and
                            homecoming exists within you. If you are ready to take the next
                            step, I am here to hold the space.
                        </p>
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ position: "relative" }}
                        >
                            Book a Sacred Conversation
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
