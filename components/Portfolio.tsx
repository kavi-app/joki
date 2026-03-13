'use client'
import { useState } from 'react'
import { ExternalLink, Github, Tag } from 'lucide-react'

type Category = 'Semua' | 'Web' | 'Mobile' | 'Backend' | 'Data' | 'Akademik'

interface Project {
  title: string
  desc: string
  category: Exclude<Category, 'Semua'>
  tech: string[]
  image: string // gradient placeholder
  link?: string
  github?: string
  highlight?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'SiKantin — Sistem Manajemen Kantin Sekolah',
    desc: 'Aplikasi kasir & stok kantin berbasis web dengan QR code payment dan laporan harian otomatis.',
    category: 'Web',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: 'from-blue-900 to-navy-mid',
    highlight: true,
  },
  {
    title: 'TrackMed — Mobile Health Tracker',
    desc: 'Aplikasi kesehatan Flutter dengan pengingat obat, grafik BMI, dan sinkronisasi Google Fit.',
    category: 'Mobile',
    tech: ['Flutter', 'Dart', 'Firebase', 'Health API'],
    image: 'from-teal-900 to-navy-mid',
    highlight: true,
  },
  {
    title: 'DataScrape Pro — Price Monitoring',
    desc: 'Bot scraping harga produk dari 5 marketplace dengan dashboard React dan notifikasi Telegram.',
    category: 'Data',
    tech: ['Python', 'Playwright', 'React', 'FastAPI'],
    image: 'from-purple-900 to-navy-mid',
  },
  {
    title: 'EduPlatform — LMS Mini',
    desc: 'Learning management system sederhana dengan upload materi, kuis, dan nilai otomatis.',
    category: 'Web',
    tech: ['Laravel', 'MySQL', 'Alpine.js'],
    image: 'from-emerald-900 to-navy-mid',
  },
  {
    title: 'Tugas Strukdat — Implementasi AVL Tree',
    desc: 'Implementasi lengkap AVL Tree dengan visualisasi animasi rotasi dan operasi insert/delete.',
    category: 'Akademik',
    tech: ['C++', 'SFML', 'Dokumentasi Lengkap'],
    image: 'from-orange-900 to-navy-mid',
  },
  {
    title: 'InvoiceGen API — Microservice',
    desc: 'REST API pembuatan invoice PDF otomatis dengan webhook, template custom, dan multi-bahasa.',
    category: 'Backend',
    tech: ['Node.js', 'Express', 'Puppeteer', 'Docker'],
    image: 'from-rose-900 to-navy-mid',
    highlight: true,
  },
  {
    title: 'FinDash — Dashboard Keuangan Pribadi',
    desc: 'Visualisasi data keuangan dengan chart interaktif, kategori otomatis, dan ekspor laporan.',
    category: 'Data',
    tech: ['React', 'Recharts', 'Python', 'SQLite'],
    image: 'from-cyan-900 to-navy-mid',
  },
  {
    title: 'AgriSmart — IoT Monitoring Pertanian',
    desc: 'Sistem monitoring sensor suhu, kelembaban, dan pH tanah real-time via MQTT & dashboard web.',
    category: 'Backend',
    tech: ['MQTT', 'Node.js', 'InfluxDB', 'Grafana'],
    image: 'from-lime-900 to-navy-mid',
  },
]

const CATEGORIES: Category[] = ['Semua', 'Web', 'Mobile', 'Backend', 'Data', 'Akademik']

export default function Portfolio() {
  const [active, setActive] = useState<Category>('Semua')

  const filtered =
    active === 'Semua' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(7,20,40,0.7) 0%, transparent 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-widest uppercase font-mono mb-4">— Portfolio Tim —</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Karya yang Kami{' '}
            <span className="gold-text italic font-semibold">Banggakan</span>
          </h2>
          <p className="text-cream/50 mt-4 text-sm font-body max-w-lg mx-auto">
            Setiap proyek dikerjakan dengan teliti, didokumentasikan dengan baik, dan diserahkan tepat waktu.
          </p>
          <div className="gold-line w-24 mx-auto mt-6" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-mono transition-all duration-300 border ${
                active === cat
                  ? 'border-gold bg-gold-dim text-gold'
                  : 'border-gold/20 text-cream/40 hover:border-gold/50 hover:text-cream/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card overflow-hidden group transition-all duration-400 hover:-translate-y-1 ${
                p.highlight ? 'ring-1 ring-gold/30' : ''
              }`}
            >
              {/* Image placeholder */}
              <div className={`relative h-44 bg-gradient-to-br ${p.image} overflow-hidden`}>
                {p.highlight && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-gold text-navy-deep text-xs font-mono px-2 py-0.5">
                    <Tag size={10} />
                    Featured
                  </div>
                )}
                {/* Decorative code lines */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 opacity-20">
                  {['const app = () => {', '  return <Magic />', '}', 'export default app'].map((line, j) => (
                    <p key={j} className="font-mono text-xs text-gold leading-6">
                      {line}
                    </p>
                  ))}
                </div>
                {/* Shimmer overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-mid/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-gold/50 text-xs font-mono mb-2 block">{p.category}</span>
                <h3 className="font-display text-lg font-semibold text-cream mb-2 leading-snug">{p.title}</h3>
                <p className="text-cream/50 text-sm font-body leading-relaxed mb-4">{p.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 border border-gold/20 text-gold/50 bg-gold-dim">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
                  {p.link && (
                    <a href={p.link} className="flex items-center gap-1 text-xs text-cream/40 hover:text-gold font-mono transition-colors">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} className="flex items-center gap-1 text-xs text-cream/40 hover:text-gold font-mono transition-colors">
                      <Github size={12} /> Code
                    </a>
                  )}
                  {!p.link && !p.github && (
                    <span className="text-xs text-cream/20 font-mono italic">Private project</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more CTA */}
        <div className="text-center mt-12">
          <p className="text-cream/30 text-xs font-mono mb-4">200+ proyek lainnya tersedia</p>
          <a
            href="#contact"
            className="border border-gold/40 text-gold hover:border-gold px-8 py-3 text-xs tracking-widest uppercase font-mono transition-all hover:bg-gold-dim inline-block"
          >
            Request Portfolio Lengkap
          </a>
        </div>
      </div>
    </section>
  )
}
