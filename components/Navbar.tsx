"use client";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "Track Order", href: "#track" },
        { label: "Layanan", href: "#cta" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Kontak", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-navy-deep/90 backdrop-blur-xl border-b border-gold/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 border border-gold/50 flex items-center justify-center group-hover:border-gold transition-colors">
                        <Code2 size={16} className="text-gold" />
                    </div>
                    <span className="font-display text-xl font-semibold tracking-wide gold-text">
                        JokiApk Mjlk
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="text-cream/60 hover:text-gold text-sm tracking-widest uppercase font-body transition-colors duration-300"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden md:block btn-gold text-xs tracking-widest uppercase px-6 py-2.5 font-mono"
                >
                    Pesan Sekarang
                </a>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-gold"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-navy-mid/95 backdrop-blur-xl border-t border-gold/10 px-6 py-6">
                    <ul className="flex flex-col gap-6">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-cream/70 hover:text-gold text-sm tracking-widest uppercase transition-colors"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                className="btn-gold text-xs tracking-widest uppercase px-6 py-2.5 font-mono inline-block text-center"
                            >
                                Pesan Sekarang
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
