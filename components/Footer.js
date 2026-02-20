import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <p className="disclaimer">
                    Disclaimer: I am a certified coach providing personal development and
                    emotional processing services. This work is a powerful complement to
                    but not a substitute for professional medical or psychological advice,
                    diagnosis, or treatment. I do not diagnose or treat any medical
                    conditions.
                </p>
                <p>
                    Copyright &copy; {new Date().getFullYear()} Cindy Baez | All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
}
