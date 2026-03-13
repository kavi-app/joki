import { Code2 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gold/10 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 border border-gold/40 flex items-center justify-center">
                        <Code2 size={13} className="text-gold" />
                    </div>
                    <span className="font-display text-lg gold-text font-semibold">
                        JokiApk Mjlk
                    </span>
                </div>

                <p className="text-cream/25 text-xs font-mono text-center">
                    © {new Date().getFullYear()} JokiApk Mjlk. Dibuat dengan ♥
                    oleh tim kami.
                </p>

                <div className="flex items-center gap-6">
                    {["#track", "#cta", "#portfolio", "#contact"].map(
                        (href, i) => (
                            <a
                                key={href}
                                href={href}
                                className="text-cream/30 hover:text-gold text-xs font-mono uppercase tracking-widest transition-colors"
                            >
                                {["Track", "Layanan", "Portfolio", "Kontak"][i]}
                            </a>
                        ),
                    )}
                </div>
            </div>
        </footer>
    );
}
