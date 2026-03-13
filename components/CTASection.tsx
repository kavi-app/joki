'use client'
import { Globe, Smartphone, Database, Bot, FileCode2, BarChart3, ArrowRight, Zap } from 'lucide-react'

const SERVICES = [
  {
    icon: <Globe size={22} />,
    title: 'Web Development',
    desc: 'Landing page, sistem informasi, e-commerce, CMS, hingga full-stack web app.',
    tags: ['React', 'Next.js', 'Laravel', 'PHP'],
    price: 'Mulai 150rb',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Mobile App',
    desc: 'Aplikasi Android & iOS dengan Flutter atau React Native, UI/UX siap pakai.',
    tags: ['Flutter', 'React Native', 'Firebase'],
    price: 'Mulai 250rb',
  },
  {
    icon: <Database size={22} />,
    title: 'Backend & API',
    desc: 'REST API, microservices, database design, dan integrasi pihak ketiga.',
    tags: ['Node.js', 'FastAPI', 'PostgreSQL'],
    price: 'Mulai 100rb',
  },
  {
    icon: <Bot size={22} />,
    title: 'Scripting & Automation',
    desc: 'Web scraping, bot Telegram/Discord, otomasi data, dan task automation.',
    tags: ['Python', 'Selenium', 'Playwright'],
    price: 'Mulai 75rb',
  },
  {
    icon: <FileCode2 size={22} />,
    title: 'Tugas Akademik',
    desc: 'Tugas kuliah, laporan praktek, UML, ERD, hingga skripsi coding.',
    tags: ['Semua Bahasa', 'Revisi Gratis'],
    price: 'Mulai 50rb',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Data & Analitik',
    desc: 'Analisis data, visualisasi, machine learning, dan laporan dashboard.',
    tags: ['Python', 'R', 'Tableau', 'Power BI'],
    price: 'Mulai 100rb',
  },
]

export default function CTASection() {
  return (
    <section id="cta" className="py-28 relative">
      {/* Diagonal accent line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,168,75,0.3), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,168,75,0.3), transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-widest uppercase font-mono mb-4">— Layanan Kami —</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Apa yang Bisa Kami{' '}
            <span className="gold-text italic font-semibold">Kerjakan</span>
          </h2>
          <p className="text-cream/50 mt-4 max-w-xl mx-auto text-sm font-body">
            Dari tugas sederhana hingga proyek kompleks — kami tangani dengan serius,
            transparan, dan tepat deadline.
          </p>
          <div className="gold-line w-24 mx-auto mt-6" />
        </div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="glass-card p-6 group cursor-pointer transition-all duration-400 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-11 h-11 border border-gold/30 flex items-center justify-center text-gold mb-5 group-hover:bg-gold-dim group-hover:border-gold transition-all duration-300">
                {s.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-cream mb-2">{s.title}</h3>
              <p className="text-cream/50 text-sm font-body leading-relaxed mb-4">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 border border-gold/20 text-gold/50">
                    {t}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                <span className="text-gold font-mono text-sm font-medium">{s.price}</span>
                <a
                  href="#contact"
                  className="flex items-center gap-1 text-xs text-cream/40 hover:text-gold font-mono transition-colors group-hover:text-gold"
                >
                  Pesan <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA banner */}
        <div
          className="relative overflow-hidden border border-gold/30 p-10 md:p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(13,34,64,0.8) 0%, rgba(18,43,80,0.6) 50%, rgba(13,34,64,0.8) 100%)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />

          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap size={16} className="text-gold" />
            <span className="text-gold text-xs tracking-widest uppercase font-mono">Fast Response</span>
          </div>
          <h3 className="font-display text-3xl md:text-5xl font-light mb-4">
            Ada proyek yang ingin <span className="gold-text italic font-semibold">segera dikerjakan?</span>
          </h3>
          <p className="text-cream/50 mb-8 text-sm font-body max-w-md mx-auto">
            Ceritakan kebutuhan Anda, dan tim kami akan memberikan estimasi harga & waktu dalam hitungan menit.
          </p>
          <a
            href="#contact"
            className="btn-gold inline-flex items-center gap-2 px-10 py-4 text-sm tracking-widest uppercase font-mono"
          >
            Konsultasi Gratis <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
