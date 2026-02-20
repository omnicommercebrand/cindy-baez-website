"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const BOOKING_URL =
    "https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav className={`nav ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
            <div className="nav-inner">
                <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                    Cindy Baez
                </Link>

                <div className="nav-links">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/testimonials" className="nav-link">Testimonials</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-nav"
                    >
                        Book a Call
                    </a>
                </div>

                <button
                    className={`nav-toggle ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-label="Mobile navigation">
                <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonials</Link>
                <Link href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
                <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={() => setMenuOpen(false)}
                >
                    Book a Sacred Conversation
                </a>
            </div>
        </nav>
    );
}
