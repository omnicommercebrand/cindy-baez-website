import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const BOOKING_URL =
  "https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true";

const problems = [
  {
    title: "Feeling Like a Shadow in Your Own Home",
    desc: "You walk past the mirror and flinch, avoiding the reflection of a woman you no longer recognize.",
  },
  {
    title: "The Silent War",
    desc: "You rage-clean the kitchen or snap at your partner — the pressure valve releasing for everything you've swallowed.",
  },
  {
    title: "Constant Depletion",
    desc: "You forget to eat until 3 PM because you were busy serving everyone else, surviving on leftover crusts and coffee.",
  },
  {
    title: "Numb & Disconnected",
    desc: "You scroll your phone for hours, looking for a spark of connection but ending up feeling even lonelier.",
  },
  {
    title: "The Performance",
    desc: 'You say "I\'m fine" even when you\'re falling apart inside, because asking for help doesn\'t even cross your mind.',
  },
  {
    title: "Loss of Desire",
    desc: "You can't remember the last time you felt truly sexy or alive in your body; it feels more like a duty than a home.",
  },
];

const steps = [
  {
    title: "A Moment of Truth",
    desc: "We begin with a sacred conversation. This is not a sales call. It's a moment carved out of your life, for your life, where you can finally tell the truth without fear or judgment.",
  },
  {
    title: "The Sacred Release",
    desc: "In our private sessions, I create an impeccable container of safety for you to release what's been held for so long. You do not have to relive trauma to heal from it. You just have to be willing to let it go.",
  },
  {
    title: "Your Embodied Return",
    desc: "This is where you feel the shift in your bones. You walk away lighter, calmer, and with a renewed sense of who you are. You begin living a life that finally feels like your own.",
  },
];

const marqueeItems = [
  "Fierce Love & Unwavering Support",
  "A Black Belt in Reality",
  "A Sacred Space for Deep Transformation",
];

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollReveal />
      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="hero" id="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Begin your sacred return</p>
            <h1>
              Hi, I&rsquo;m Cindy &mdash;
              <br />
              <em>Nice to meet you</em>
            </h1>
            <p className="hero-subtitle">
              You&rsquo;ve become the keeper of everyone else&rsquo;s life. But
              who is the keeper of yours? It&rsquo;s time to escape from quiet
              self-abandonment to the radiant, embodied woman you were always
              meant to be.
            </p>
            <div className="hero-cta">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book a Sacred Conversation
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════ MARQUEE ═══════════════ */}
        <div className="marquee-section" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((rep) => (
              <div className="marquee-content" key={rep}>
                {marqueeItems.map((item, i) => (
                  <span key={i}>
                    <span className="marquee-item">{item}</span>
                    <span className="marquee-dot"></span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════ SEEKING ═══════════════ */}
        <section className="section text-center">
          <div className="container max-w-prose reveal">
            <h2>
              You are here because you are seeking a way back to yourself.
            </h2>
            <div className="divider"></div>
            <p>
              Sometimes, the advice everyone gives — &ldquo;just love
              yourself,&rdquo; &ldquo;take more me-time&rdquo; — but
              that&rsquo;s not the answer that quiets the ache in your soul.
            </p>
            <p>
              Countless women stay stuck, believing they have to try harder,
              when the truth is they need to be{" "}
              <strong>held differently.</strong>
            </p>
          </div>
        </section>

        {/* ═══════════════ REMEMBER ═══════════════ */}
        <section className="section section-alt text-center">
          <div className="container max-w-prose reveal">
            <h2 style={{ fontStyle: "italic", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              Remember being a girl, when you danced for no reason, laughed from
              your belly, and knew exactly who you were?
            </h2>
            <div className="divider"></div>
            <p className="text-italic">That wasn&rsquo;t a fairy tale.</p>
            <p>
              That was before you started carrying the weight of a world that was
              never yours to hold.
            </p>
            <p>
              You&rsquo;ve tried to be the perfect mom who never drops the ball,
              the wife who keeps everyone emotionally afloat, and the ambitious
              woman climbing the corporate ladder working late nights — all while
              dragging an invisible backpack filled with everyone&rsquo;s
              expectations, and no room left for your own breath.
            </p>
            <p>
              <strong
                style={{ color: "var(--deep-plum)", fontSize: "1.2rem", fontFamily: "var(--font-heading)" }}
              >
                It doesn&rsquo;t have to be this way.
              </strong>
            </p>
          </div>
        </section>

        {/* ═══════════════ ABOUT CINDY ═══════════════ */}
        <section className="section" id="about">
          <div className="container">
            <div className="about-content reveal">
              <div className="about-image-wrapper">
                <div className="about-image">
                  <Image
                    src="/cindy-portrait.png"
                    alt="Cindy Baez — Life Coach and guide for women's transformation"
                    width={600}
                    height={800}
                    quality={90}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="about-image-accent"></div>
              </div>
              <div className="about-text">
                <h2>My name is Cindy Baez</h2>
                <div className="divider divider-left"></div>
                <p className="text-italic">
                  I guide women from the exhaustion of over-giving back to their
                  own sacred center.
                </p>
                <p>
                  <strong style={{ color: "var(--deep-plum)" }}>
                    The struggle is a soul-deep ache.
                  </strong>
                </p>
                <p>
                  The quiet rage, the hidden grief, the feeling of being a ghost
                  in your own home — it&rsquo;s a crushing weight. I know this
                  place. I&rsquo;ve walked this path, too.
                </p>
                <p>
                  After navigating my own dark nights of the soul, countless
                  self-help books, and years of personal development, I realized
                  the truth:
                </p>
                <p>
                  No amount of journaling, meditating, or intellectualizing your
                  pain will truly <strong>shift</strong> you until you release
                  the emotional patterns from your body. And I finally know how
                  to hold the sacred space for that return.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ PROBLEMS ═══════════════ */}
        <section className="section section-alt">
          <div className="container">
            <div className="text-center max-w-prose reveal" style={{ marginBottom: 60 }}>
              <h2>
                What is keeping you from the woman you know you are?
              </h2>
              <div className="divider"></div>
            </div>
            <div className="problems-grid">
              {problems.map((p, i) => (
                <div className="problem-card reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SACRED SIGNAL ═══════════════ */}
        <section className="sacred-signal reveal">
          <div className="container max-w-prose">
            <h2>
              If you&rsquo;re experiencing any of these, it&rsquo;s not a sign
              you are broken. It&rsquo;s a sacred signal that you are ready to
              come home.
            </h2>
            <div className="divider"></div>
            <p>
              You need a space where you can stop managing your pain and finally
              release it. You need{" "}
              <strong style={{ color: "var(--deep-plum)" }}>
                powerful guided exercises.
              </strong>
            </p>
            <p>
              There is so much misinformation that keeps you running in circles,
              trying to think your way into feeling better. But true, lasting
              transformation is not an intellectual process. It is an embodied
              return.
            </p>
          </div>
        </section>

        {/* ═══════════════ PHOTO MOMENT — RETREAT ═══════════════ */}
        <section className="photo-moment">
          <div className="container">
            <div className="photo-moment-frame reveal">
              <Image
                src="/cindy-retreat.png"
                alt="Cindy connecting one-on-one with a woman at a retreat"
                width={900}
                height={600}
                quality={90}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════ HOMECOMING STEPS ═══════════════ */}
        <section className="section">
          <div className="container">
            <div className="text-center reveal">
              <h2>Homecoming: Your Path Back to You</h2>
              <div className="divider"></div>
            </div>
            <div className="steps-grid">
              {steps.map((s, i) => (
                <div className="step-card reveal" key={i}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center reveal" style={{ marginTop: 60 }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book a Sacred Conversation
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════ WARRIOR WONDER WOMEN & SELF-DEFENSE ═══════════════ */}
        <section className="section" id="programs">
          <div className="container">
            <div className="text-center reveal" style={{ marginBottom: 60 }}>
              <p className="hero-eyebrow" style={{ opacity: 1, animation: "none" }}>
                Programs & Classes
              </p>
              <h2>More Ways to Come Home to Yourself</h2>
              <div className="divider"></div>
            </div>

            <div className="programs-grid">
              {/* Warrior Wonder Women */}
              <div className="program-card reveal">
                <div className="program-card-image">
                  <Image
                    src="/cindy-group-class.png"
                    alt="Cindy leading a Warrior Wonder Women group class"
                    width={700}
                    height={467}
                    quality={90}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="program-card-body">
                  <h3>Warrior Wonder Women</h3>
                  <p>
                    A sacred circle where women come together to shed the armor,
                    reconnect with their bodies, and remember who they are. Through
                    powerful guided exercises, breathwork, and deep sisterhood, this
                    class is a weekly homecoming — a place to be witnessed, held,
                    and transformed.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Self-Defense */}
              <div className="program-card reveal">
                <div className="program-card-image">
                  <Image
                    src="/cindy-warrior.png"
                    alt="Cindy Baez — Black Belt martial artist and empowerment coach"
                    width={600}
                    height={600}
                    quality={90}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="program-card-body">
                  <h3>Self-Defense for Women</h3>
                  <p>
                    Reclaim your power — physically and emotionally. As a Black Belt
                    martial artist, Cindy teaches women practical self-defense skills
                    rooted in confidence, awareness, and inner strength. These classes
                    are about more than technique — they are about remembering that
                    your body is your home, and you have every right to protect it.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="section section-alt">
          <div className="container">
            <div className="text-center reveal">
              <p className="hero-eyebrow" style={{ opacity: 1, animation: "none" }}>
                FAQs
              </p>
              <h2>Frequently Asked Questions</h2>
              <p className="text-italic">
                Truths for the Tender and Brave Heart
              </p>
            </div>
            <FAQ />
          </div>
        </section>

        {/* ═══════════════ CTA / FREE GIFT ═══════════════ */}
        <section className="cta-section">
          <div className="container reveal">
            <h2>You are not broken. You are buried.</h2>
            <p>
              A conversation is the first step to finding your way back.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ position: "relative" }}
            >
              Book Your Sacred Conversation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
