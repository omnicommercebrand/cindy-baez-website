import { NextResponse } from 'next/server'
import { isAuthed } from '@/lib/editor-auth'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const SECURITY_HEADERS = {
  'content-type': 'text/html; charset=utf-8',
  'cache-control': 'private, no-store, max-age=0, must-revalidate',
  'pragma': 'no-cache',
  'x-robots-tag': 'noindex, nofollow, noarchive, nosnippet, noimageindex',
  'x-frame-options': 'DENY',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'no-referrer',
  'permissions-policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'content-security-policy':
    "default-src 'none'; style-src 'unsafe-inline'; img-src data:; font-src data:; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
  'cross-origin-opener-policy': 'same-origin',
  'cross-origin-resource-policy': 'same-origin',
}

const REDIRECT_HEADERS = {
  location: '/editor',
  'cache-control': 'no-store',
  'referrer-policy': 'no-referrer',
  'x-robots-tag': 'noindex, nofollow, noarchive',
  'x-frame-options': 'DENY',
}

const GUIDE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<title>Your Website Editor — A Simple Guide</title>
<style>
  :root {
    --bg: #fffaf3;
    --ink: #2a1f3a;
    --ink-soft: #574666;
    --cream: #f6efe4;
    --line: #ead8c6;
    --primary: #a85a8a;
    --primary-dark: #8a4773;
    --accent: #c98b5e;
    --green: #6b8e5a;
    --warn: #c97a3a;
    --shadow: 0 8px 30px rgba(60, 30, 50, 0.08);
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    color: var(--ink);
    background: var(--bg);
    line-height: 1.7;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
  }
  header.top {
    padding: 56px 24px 40px;
    text-align: center;
    background: linear-gradient(180deg, #f6e8d8 0%, #fffaf3 100%);
    border-bottom: 1px solid var(--line);
  }
  header.top .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 12px;
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 10px;
  }
  header.top h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 400;
    font-size: 38px;
    margin: 0 0 12px;
    color: var(--ink);
    letter-spacing: -0.02em;
  }
  header.top h1 em { color: var(--primary); font-style: italic; }
  header.top p {
    max-width: 560px;
    margin: 0 auto;
    color: var(--ink-soft);
    font-size: 16px;
  }
  .login-card {
    max-width: 720px;
    margin: -28px auto 0;
    background: white;
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 24px 28px;
    box-shadow: var(--shadow);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    position: relative;
    z-index: 2;
  }
  .login-card .field { font-size: 14px; }
  .login-card .field .label {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 11px;
    color: var(--ink-soft);
    margin-bottom: 4px;
  }
  .login-card .field .value {
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    background: var(--cream);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 14px;
    word-break: break-all;
    color: var(--ink);
  }
  .login-card .field a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
  }
  .login-card .field a:hover { text-decoration: underline; }
  main {
    max-width: 760px;
    margin: 0 auto;
    padding: 60px 24px 80px;
  }
  .toc {
    background: var(--cream);
    border-radius: 14px;
    padding: 22px 28px;
    margin-bottom: 56px;
    border: 1px solid var(--line);
  }
  .toc h3 {
    margin: 0 0 12px;
    font-size: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-soft);
    font-weight: 600;
  }
  .toc ol {
    margin: 0;
    padding-left: 22px;
    color: var(--ink);
  }
  .toc ol li {
    padding: 4px 0;
  }
  .toc ol li a {
    color: var(--ink);
    text-decoration: none;
  }
  .toc ol li a:hover { color: var(--primary); }
  section {
    margin-bottom: 64px;
    scroll-margin-top: 24px;
  }
  section h2 {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: 28px;
    margin: 0 0 8px;
    color: var(--ink);
    letter-spacing: -0.01em;
  }
  section h2 .num {
    color: var(--primary);
    font-weight: 600;
    font-style: italic;
    margin-right: 10px;
  }
  section .lead {
    color: var(--ink-soft);
    margin: 0 0 24px;
  }
  .steps {
    counter-reset: step;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .steps li {
    counter-increment: step;
    padding: 16px 20px 16px 60px;
    margin-bottom: 12px;
    background: white;
    border: 1px solid var(--line);
    border-radius: 12px;
    position: relative;
  }
  .steps li::before {
    content: counter(step);
    position: absolute;
    left: 16px;
    top: 16px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    font-weight: 600;
    font-size: 13px;
    display: grid;
    place-items: center;
  }
  .steps li strong { color: var(--ink); }
  .steps li .hint {
    display: block;
    font-size: 14px;
    color: var(--ink-soft);
    margin-top: 4px;
  }
  .compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 8px;
  }
  .compare .card {
    background: white;
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 22px 22px 18px;
  }
  .compare .card.publish { border-color: var(--primary); background: linear-gradient(180deg, #fdf3f8 0%, #ffffff 100%); }
  .compare .card .tag {
    display: inline-block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--cream);
    color: var(--ink-soft);
    margin-bottom: 10px;
  }
  .compare .card.publish .tag {
    background: var(--primary);
    color: white;
  }
  .compare .card h3 {
    margin: 0 0 8px;
    font-family: Georgia, serif;
    font-weight: 500;
    font-size: 20px;
  }
  .compare .card p {
    margin: 0 0 12px;
    font-size: 15px;
    color: var(--ink-soft);
  }
  .compare .card ul {
    margin: 0;
    padding-left: 18px;
    font-size: 14px;
    color: var(--ink);
  }
  .compare .card ul li { margin: 6px 0; }
  .pill-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .pill-grid .pill {
    background: white;
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 14px;
  }
  .pill-grid .pill .check {
    color: var(--green);
    font-weight: 700;
    margin-right: 8px;
  }
  .callout {
    border-radius: 12px;
    padding: 18px 22px;
    margin: 20px 0;
    border-left: 4px solid var(--accent);
    background: #fbf2e6;
    color: var(--ink);
    font-size: 15px;
  }
  .callout strong { color: var(--ink); }
  .callout.tip { border-left-color: var(--green); background: #f0f4ea; }
  .callout.warn { border-left-color: var(--warn); background: #fcefe1; }
  details {
    background: white;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 10px;
  }
  details[open] { box-shadow: var(--shadow); }
  details summary {
    cursor: pointer;
    font-weight: 500;
    list-style: none;
    color: var(--ink);
    padding: 4px 0;
    position: relative;
    padding-right: 30px;
  }
  details summary::-webkit-details-marker { display: none; }
  details summary::after {
    content: "+";
    position: absolute;
    right: 0;
    top: 0;
    color: var(--primary);
    font-weight: 400;
    font-size: 22px;
    line-height: 1;
    transition: transform 200ms;
  }
  details[open] summary::after { content: "−"; }
  details p {
    margin: 12px 0 4px;
    color: var(--ink-soft);
    font-size: 15px;
  }
  footer {
    text-align: center;
    padding: 40px 24px 60px;
    border-top: 1px solid var(--line);
    color: var(--ink-soft);
    font-size: 14px;
  }
  footer .heart { color: var(--primary); }
  .back-bar {
    background: var(--ink);
    color: white;
    padding: 10px 24px;
    text-align: center;
    font-size: 13px;
  }
  .back-bar a { color: #f6e8d8; text-decoration: none; font-weight: 500; }
  .back-bar a:hover { text-decoration: underline; }
  @media (max-width: 640px) {
    header.top { padding: 40px 20px 30px; }
    header.top h1 { font-size: 30px; }
    .login-card { grid-template-columns: 1fr; padding: 20px; margin: -24px 16px 0; }
    main { padding: 48px 20px 60px; }
    .compare { grid-template-columns: 1fr; }
    .pill-grid { grid-template-columns: 1fr; }
    section h2 { font-size: 24px; }
    .steps li { padding-left: 56px; }
  }
  @media print {
    .back-bar { display: none; }
    body { font-size: 12pt; }
    header.top, .login-card, .toc, .callout, .compare .card, .pill-grid .pill, details { box-shadow: none; }
    details { break-inside: avoid; }
    details summary::after { display: none; }
    details > div, details > p { display: block !important; }
    section { break-inside: avoid; }
  }
</style>
</head>
<body>

<div class="back-bar">
  <a href="/editor">← Back to the editor</a>
</div>

<header class="top">
  <div class="eyebrow">For Cindy</div>
  <h1>Your Website Editor — <em>The Easy Guide</em></h1>
  <p>Edit any text or image on your homepage in minutes — no code, no calls, no help needed. This is yours.</p>
</header>

<div class="login-card">
  <div class="field">
    <div class="label">Editor Address</div>
    <div class="value"><a href="https://cindybaez.com/editor">cindybaez.com/editor</a></div>
  </div>
  <div class="field">
    <div class="label">Your Password</div>
    <div class="value">cindy2026</div>
  </div>
</div>

<main>

  <div class="toc">
    <h3>What's Inside</h3>
    <ol>
      <li><a href="#login">Logging In (the first time)</a></li>
      <li><a href="#text">Editing Text — Click. Type. Done.</a></li>
      <li><a href="#images">Changing Images</a></li>
      <li><a href="#draft-publish">Save Draft vs. Publish (read this one)</a></li>
      <li><a href="#editable">What You Can Edit</a></li>
      <li><a href="#faq">FAQ &amp; Troubleshooting</a></li>
    </ol>
  </div>

  <section id="login">
    <h2><span class="num">1.</span>Logging In</h2>
    <p class="lead">You only do this once per browser. After that, you're remembered for 30 days.</p>
    <ol class="steps">
      <li><strong>Open</strong> <a href="https://cindybaez.com/editor">cindybaez.com/editor</a> in any browser (Chrome, Safari, Firefox — all work).</li>
      <li><strong>Enter the password</strong> <code>cindy2026</code> and click <em>Sign In</em>.<span class="hint">Tip: bookmark this page so you never have to type the address again.</span></li>
      <li><strong>That's it.</strong> You'll see your homepage on the left and an editing panel on the right.</li>
    </ol>
    <div class="callout tip">
      <strong>Keep this password private.</strong> Anyone with it can edit your website. If you ever feel like rotating it, just text Ishan and he'll change it in 30 seconds.
    </div>
  </section>

  <section id="text">
    <h2><span class="num">2.</span>Editing Text</h2>
    <p class="lead">If you can edit a Google Doc, you can edit your website. Same energy.</p>
    <ol class="steps">
      <li><strong>Click any text on the left side</strong> (the live preview of your homepage).<span class="hint">A purple outline will appear. The right panel jumps to that exact field.</span></li>
      <li><strong>Type your changes</strong> in the box on the right. Watch the preview — wait, the preview won't update yet. That's normal.</li>
      <li><strong>Click <em>Save Draft</em>.</strong> Now the preview updates with your edits.</li>
      <li><strong>Happy with it?</strong> Click <em>Publish</em>. Boom — live on cindybaez.com for the world to see.</li>
    </ol>
    <div class="callout">
      <strong>The right panel is organized by section.</strong> Click a section heading (Hero, Sacred Signal, Programs Preview, etc.) to expand it. Each field has a clear label so you always know what you're editing.
    </div>
  </section>

  <section id="images">
    <h2><span class="num">3.</span>Changing Images</h2>
    <p class="lead">Two ways to swap an image. Pick whichever feels easier.</p>
    <ol class="steps">
      <li><strong>Find the image</strong> in the right panel (click on the image in the preview to jump to it).</li>
      <li><strong>Option A: Upload from your computer.</strong> Click the <em>Upload</em> button → choose a photo from your Mac/phone → done.<span class="hint">JPG, PNG, WebP all work. Try to keep images under 5 MB so the site stays fast.</span></li>
      <li><strong>Option B: Paste a URL.</strong> If you found an image online (Unsplash, Pinterest, etc.), copy the image URL and paste it in the text box.</li>
      <li><strong>Save Draft → check it looks good → Publish.</strong></li>
    </ol>
    <div class="callout warn">
      <strong>Quality matters.</strong> Use horizontal photos for backgrounds (1920×1080 or wider works best). Square or vertical photos work great for the program cards and your portrait. Avoid screenshots — they tend to look fuzzy on big screens.
    </div>
  </section>

  <section id="draft-publish">
    <h2><span class="num">4.</span>Save Draft vs. Publish</h2>
    <p class="lead">This is the most important page in this guide. Read it twice.</p>

    <div class="compare">
      <div class="card">
        <span class="tag">Private</span>
        <h3>Save Draft</h3>
        <p>Saves your changes <strong>privately</strong>. Only you (and the editor preview) see them.</p>
        <ul>
          <li>The public site does <strong>not</strong> change</li>
          <li>Use this to experiment freely</li>
          <li>You can come back tomorrow and your draft is still there</li>
          <li>You can save 100 drafts in a row without consequence</li>
        </ul>
      </div>
      <div class="card publish">
        <span class="tag">Live</span>
        <h3>Publish</h3>
        <p>Pushes your latest content <strong>live</strong> to cindybaez.com — every visitor sees it.</p>
        <ul>
          <li>Updates on the live site within ~30 seconds</li>
          <li>This <strong>overwrites</strong> the previous live version</li>
          <li>Always Save Draft and review first</li>
          <li>Refresh cindybaez.com in another tab to confirm</li>
        </ul>
      </div>
    </div>

    <div class="callout tip">
      <strong>Golden workflow:</strong> Edit → Save Draft → Look at it → Edit again → Save Draft → Look at it → only when you love it → Publish.
    </div>

    <div class="callout warn">
      <strong>There is no Undo button after publishing.</strong> Once you publish, the previous version is replaced. So review carefully before clicking Publish. (If something ever goes really wrong, text Ishan — he can pull a backup.)
    </div>
  </section>

  <section id="editable">
    <h2><span class="num">5.</span>What You Can Edit</h2>
    <p class="lead">Right now, the editor handles your <strong>entire homepage</strong>. Here's the full list:</p>

    <div class="pill-grid">
      <div class="pill"><span class="check">✓</span>Hero headline &amp; subtitle</div>
      <div class="pill"><span class="check">✓</span>Hero background image</div>
      <div class="pill"><span class="check">✓</span>Your portrait photo</div>
      <div class="pill"><span class="check">✓</span>"Book" button text &amp; link</div>
      <div class="pill"><span class="check">✓</span>Marquee strip (rolling text)</div>
      <div class="pill"><span class="check">✓</span>Seeking section text</div>
      <div class="pill"><span class="check">✓</span>White flowers strip</div>
      <div class="pill"><span class="check">✓</span>"Why It's Hard" cards (6)</div>
      <div class="pill"><span class="check">✓</span>Sacred Signal quote</div>
      <div class="pill"><span class="check">✓</span>Homecoming Steps (3)</div>
      <div class="pill"><span class="check">✓</span>Lavender strip</div>
      <div class="pill"><span class="check">✓</span>Programs Preview (3 cards)</div>
      <div class="pill"><span class="check">✓</span>Retreat photo banner</div>
      <div class="pill"><span class="check">✓</span>Testimonial pull quote</div>
      <div class="pill"><span class="check">✓</span>Final CTA section</div>
      <div class="pill"><span class="check">✓</span>All section eyebrows</div>
    </div>

    <div class="callout">
      <strong>Other pages</strong> (About, Programs, Testimonials, Contact) can be added to the editor whenever you want. Just text Ishan and he'll wire them up. The structure already exists.
    </div>
  </section>

  <section id="faq">
    <h2><span class="num">6.</span>FAQ &amp; Troubleshooting</h2>

    <details>
      <summary>I published, but the live site still shows the old text. What gives?</summary>
      <p>Refresh the page on cindybaez.com (Cmd+R on Mac, Ctrl+R on Windows). If that doesn't work, do a hard refresh (Cmd+Shift+R / Ctrl+Shift+R). The site updates within ~30 seconds — usually faster.</p>
    </details>

    <details>
      <summary>I clicked something on the preview and the wrong field opened.</summary>
      <p>Just scroll the right panel and find the field you want. Every field has a clear label (e.g. "Hero — Headline (line 1)").</p>
    </details>

    <details>
      <summary>The image I uploaded looks blurry or stretched.</summary>
      <p>Use higher-resolution images. For backgrounds: 1920px wide or larger. For portraits: 800×1000 or larger. Avoid screenshots and avoid zooming into low-res photos.</p>
    </details>

    <details>
      <summary>Can I add or remove items in a list (like the marquee or programs)?</summary>
      <p>Yes! Click <em>+ Add item</em> at the bottom of any list. Click the ✕ next to an item to remove it. Use ↑ ↓ arrows to reorder.</p>
    </details>

    <details>
      <summary>I forgot to Save Draft and refreshed the page. Did I lose my work?</summary>
      <p>Yes — the editor only remembers what's saved as a draft. Habit: hit Save Draft every few minutes, like a Google Doc.</p>
    </details>

    <details>
      <summary>Can I edit on my phone or iPad?</summary>
      <p>Yes. The editor is fully responsive. On smaller screens you'll see a "Preview / Edit" toggle in the top-right to switch views.</p>
    </details>

    <details>
      <summary>I want to change something the editor doesn't show (logo, colors, navigation).</summary>
      <p>Text Ishan. The editor handles content — for design changes (fonts, colors, layout, navigation menu, footer), he'll do that for you directly.</p>
    </details>

    <details>
      <summary>I broke something. Help.</summary>
      <p>Take a breath. Nothing is permanent. Text Ishan with what happened and he'll restore the previous version. The site has automatic backups.</p>
    </details>

    <details>
      <summary>How do I log out?</summary>
      <p>Click the <em>Logout</em> link in the top-right of the editor. Or just close the tab — your session lasts 30 days.</p>
    </details>
  </section>

</main>

<footer>
  Made with <span class="heart">♥</span> for Cindy &nbsp;·&nbsp; Questions? Text Ishan anytime.
</footer>

</body>
</html>`

export async function GET() {
  if (!(await isAuthed())) {
    return new NextResponse(null, { status: 302, headers: REDIRECT_HEADERS })
  }
  return new NextResponse(GUIDE_HTML, { headers: SECURITY_HEADERS })
}
