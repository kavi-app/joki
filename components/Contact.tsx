"use client";
import { useState } from "react";
import {
    Send,
    MessageCircle,
    Instagram,
    Github,
    Mail,
    CheckCircle2,
    Loader2,
} from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        contact: "",
        service: "",
        desc: "",
    });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const noAdmin = process.env.NEXT_PUBLIC_NOMOR_WA;
    const ig = process.env.NEXT_PUBLIC_INSTAGRAM;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Ganti dengan API call / WhatsApp redirect sesuai kebutuhan
        const msg = encodeURIComponent(
            `Halo Admin! 👋\n\n*Nama:* ${form.name}\n*Kontak:* ${form.contact}\n*Layanan:* ${form.service}\n*Deskripsi:*\n${form.desc}`,
        );
        setTimeout(() => {
            window.open(`https://wa.me/${noAdmin}?text=${msg}`, "_blank");
            setSent(true);
            setLoading(false);
        }, 800);
    };

    const contacts = [
        {
            icon: <MessageCircle size={18} />,
            label: "WhatsApp",
            value: `+${noAdmin}`,
            href: `https://wa.me/${noAdmin}`,
            sub: "Fast response < 5 menit",
        },
        {
            icon: <Instagram size={18} />,
            label: "Instagram",
            value: `@${ig}`,
            href: `https://instagram.com/${ig}`,
            sub: "DM untuk inquiry",
        },
        // {
        //     icon: <Mail size={18} />,
        //     label: "Email",
        //     value: "hi@codecraft.dev",
        //     href: "mailto:hi@codecraft.dev",
        //     sub: "Untuk brief panjang",
        // },
        // {
        //     icon: <Github size={18} />,
        //     label: "GitHub",
        //     value: "github.com/codecraft",
        //     href: "https://github.com",
        //     sub: "Lihat open-source kami",
        // },
    ];

    return (
        <section id="contact" className="py-28 relative">
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-10 blur-3xl pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse, #c8a84b, transparent 70%)",
                }}
            />
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(200,168,75,0.3), transparent)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-xs tracking-widest uppercase font-mono mb-4">
                        — Hubungi Kami —
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-light">
                        Yuk, Mulai{" "}
                        <span className="gold-text italic font-semibold">
                            Ngobrol
                        </span>
                    </h2>
                    <p className="text-cream/50 mt-4 text-sm font-body max-w-md mx-auto">
                        Ceritakan proyek Anda dan kami akan balas dengan
                        estimasi harga & waktu secepatnya.
                    </p>
                    <div className="gold-line w-24 mx-auto mt-6" />
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact cards */}
                    <div>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {contacts.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card p-5 group transition-all duration-300 hover:-translate-y-0.5 block"
                                >
                                    <div className="flex items-center gap-2 text-gold mb-2 group-hover:text-gold-light transition-colors">
                                        {c.icon}
                                        <span className="text-sm font-mono font-medium">
                                            {c.label}
                                        </span>
                                    </div>
                                    <p className="text-cream text-sm font-body mb-1">
                                        {c.value}
                                    </p>
                                    <p className="text-cream/30 text-xs font-mono">
                                        {c.sub}
                                    </p>
                                </a>
                            ))}
                        </div>

                        {/* Guarantee box */}
                        <div
                            className="border border-gold/20 p-6 relative overflow-hidden"
                            style={{ background: "rgba(13,34,64,0.5)" }}
                        >
                            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/50" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/50" />
                            <h4 className="font-display text-lg font-semibold gold-text mb-4">
                                Jaminan Kami
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Garansi revisi hingga Anda lulus",
                                    "Pengerjaan tepat deadline atau refund parsial",
                                    "Kode bersih, terdokumentasi, siap deploy",
                                    "Source code full ownership milik Anda",
                                    "Konsultasi gratis pasca-serah terima",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-sm text-cream/60 font-body"
                                    >
                                        <CheckCircle2
                                            size={14}
                                            className="text-gold mt-0.5 shrink-0"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Order form */}
                    <div className="glass-card p-8">
                        {sent ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <CheckCircle2
                                    size={48}
                                    className="text-gold mb-4"
                                />
                                <h3 className="font-display text-2xl font-semibold gold-text mb-2">
                                    Terima Kasih!
                                </h3>
                                <p className="text-cream/50 text-sm font-body mb-6">
                                    Anda akan diarahkan ke WhatsApp. Tim kami
                                    akan segera merespons.
                                </p>
                                <button
                                    onClick={() => setSent(false)}
                                    className="border border-gold/40 text-gold px-6 py-2.5 text-xs tracking-widest uppercase font-mono hover:bg-gold-dim transition-all"
                                >
                                    Kirim Lagi
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="text-xs text-gold/60 font-mono uppercase tracking-widest block mb-2">
                                        Nama Anda *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Roni Noor Istiqlal"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value,
                                            })
                                        }
                                        className="input-gold w-full px-4 py-3 text-sm font-body"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gold/60 font-mono uppercase tracking-widest block mb-2">
                                        WhatsApp / Telegram *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="+62 812-xxxx-xxxx"
                                        value={form.contact}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                contact: e.target.value,
                                            })
                                        }
                                        className="input-gold w-full px-4 py-3 text-sm font-body"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gold/60 font-mono uppercase tracking-widest block mb-2">
                                        Jenis Layanan *
                                    </label>
                                    <select
                                        required
                                        value={form.service}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                service: e.target.value,
                                            })
                                        }
                                        className="input-gold w-full px-4 py-3 text-sm font-body appearance-none"
                                    >
                                        <option value="" disabled>
                                            Pilih layanan...
                                        </option>
                                        <option>Web Development</option>
                                        <option>Mobile App</option>
                                        <option>Backend & API</option>
                                        {/* <option>Scripting & Automation</option> */}
                                        <option>Tugas Akademik</option>
                                        <option>Data & Analitik</option>
                                        <option>Lainnya</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs text-gold/60 font-mono uppercase tracking-widest block mb-2">
                                        Deskripsi Proyek *
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Jelaskan kebutuhan Anda: fitur yang diinginkan, deadline, bahasa pemrograman (jika ada), dll..."
                                        value={form.desc}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                desc: e.target.value,
                                            })
                                        }
                                        className="input-gold w-full px-4 py-3 text-sm font-body resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-gold w-full py-4 text-sm tracking-widest uppercase font-mono flex items-center justify-center gap-2 disabled:opacity-60"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2
                                                size={16}
                                                className="animate-spin"
                                            />{" "}
                                            Mengarahkan ke WA...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} /> Kirim via
                                            WhatsApp
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-cream/25 text-xs font-mono">
                                    Form ini akan membuka WhatsApp secara
                                    otomatis
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
