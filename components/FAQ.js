"use client";
import { useState } from "react";

const faqs = [
    {
        question: "How long before I start feeling the shift?",
        answer:
            "Many women feel a significant shift after their very first session. The body remembers what the mind has tried to forget, and when we create the right container for release, the shifts can be profound and immediate. That said, deeper patterns may unfold over multiple sessions. This is not a one-size-fits-all timeline — it is your unique journey.",
    },
    {
        question: "How is this different from the therapy I've already tried?",
        answer:
            "Traditional talk therapy is valuable, but it primarily engages the cognitive mind. What I offer works with the body, the nervous system, and the emotional patterns stored at a cellular level. You don't need to analyze your pain — you need to release it. This is an embodied process, not an intellectual one. It's not about understanding why; it's about finally letting go.",
    },
    {
        question: "What if I let myself feel and I completely fall apart?",
        answer:
            "This is one of the most common fears, and it's also the biggest myth. You will not fall apart. What happens is the opposite: when you finally allow yourself to feel what you've been holding, you don't break — you break open. And on the other side of that opening is a lightness, a clarity, and a sense of coming home you may not have felt in years. I hold an impeccable container for this process. You are not alone in it.",
    },
    {
        question:
            "If I have a deep history of trauma, is this still a good fit for me?",
        answer:
            "Yes, with an important caveat. This work is designed to complement, not replace, professional therapeutic support for severe trauma. If you are currently in crisis or managing a diagnosed condition, I recommend working with a licensed therapist alongside our sessions. For many women, this work becomes the missing piece that traditional therapy alone couldn't reach.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="faq-list" role="list">
            {faqs.map((faq, i) => (
                <div
                    key={i}
                    className={`faq-item ${openIndex === i ? "open" : ""}`}
                    role="listitem"
                >
                    <button
                        className="faq-question"
                        onClick={() => toggle(i)}
                        aria-expanded={openIndex === i}
                    >
                        <span>{faq.question}</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer" aria-hidden={openIndex !== i}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
