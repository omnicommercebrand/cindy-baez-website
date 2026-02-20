import "./globals.css";

export const metadata = {
  title: "Cindy Baez | Life Coach — Your Sacred Return Home",
  description:
    "Cindy Baez guides women from the exhaustion of over-giving back to their own sacred center. Book a Sacred Conversation and begin your journey home.",
  keywords: [
    "life coach",
    "women empowerment",
    "personal transformation",
    "sacred coaching",
    "emotional healing",
    "Cindy Baez",
    "life coaching for women",
  ],
  openGraph: {
    title: "Cindy Baez | Life Coach — Your Sacred Return Home",
    description:
      "Guided Accelerated Evolution for women ready to come home to themselves.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cindy Baez | Life Coach",
    description:
      "Guided Accelerated Evolution for women ready to come home to themselves.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Cindy Baez Life Coaching",
              description:
                "Guided Accelerated Evolution — guiding women from exhaustion to their sacred center.",
              provider: {
                "@type": "Person",
                name: "Cindy Baez",
                jobTitle: "Certified Life Coach",
              },
              serviceType: "Life Coaching",
              areaServed: "Worldwide",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
