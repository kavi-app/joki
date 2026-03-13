'use client'
import { useState } from 'react'
import { Search, Clock, CheckCircle2, Eye, Loader2, AlertCircle } from 'lucide-react'

type Status = 'done' | 'progress' | 'review' | 'pending'

interface Order {
  id: string
  title: string
  client: string
  status: Status
  tech: string[]
  deadline: string
  progress: number
  lastUpdate: string
}

// Demo data — ganti dengan API call sesuai backend kalian
const ORDERS: Order[] = [
  {
    id: 'CC-001',
    title: 'Sistem Manajemen Inventori',
    client: 'Budi S.',
    status: 'done',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    deadline: '10 Mar 2025',
    progress: 100,
    lastUpdate: '2 hari lalu',
  },
  {
    id: 'CC-002',
    title: 'REST API E-Commerce',
    client: 'Rina A.',
    status: 'progress',
    tech: ['Node.js', 'Express', 'MongoDB'],
    deadline: '20 Mar 2025',
    progress: 65,
    lastUpdate: '3 jam lalu',
  },
  {
    id: 'CC-003',
    title: 'Mobile App Flutter Todo',
    client: 'Hendra K.',
    status: 'review',
    tech: ['Flutter', 'Firebase'],
    deadline: '15 Mar 2025',
    progress: 90,
    lastUpdate: '1 hari lalu',
  },
  {
    id: 'CC-004',
    title: 'Scraper Data Produk',
    client: 'Sari M.',
    status: 'pending',
    tech: ['Python', 'BeautifulSoup'],
    deadline: '25 Mar 2025',
    progress: 0,
    lastUpdate: 'Menunggu konfirmasi',
  },
  {
    id: 'CC-005',
    title: 'Dashboard Analytics',
    client: 'Anton P.',
    status: 'progress',
    tech: ['React', 'Recharts', 'FastAPI'],
    deadline: '22 Mar 2025',
    progress: 40,
    lastUpdate: '5 jam lalu',
  },
]

const STATUS_CONFIG: Record<Status, { label: string; icon: React.ReactNode; className: string }> = {
  done: { label: 'Selesai', icon: <CheckCircle2 size={12} />, className: 'status-done' },
  progress: { label: 'Dikerjakan', icon: <Loader2 size={12} className="animate-spin" />, className: 'status-progress' },
  review: { label: 'Review', icon: <Eye size={12} />, className: 'status-review' },
  pending: { label: 'Pending', icon: <Clock size={12} />, className: 'status-pending' },
}

export default function TrackOrder() {
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState(false)
  const [results, setResults] = useState<Order[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = () => {
    if (!query.trim()) return
    setLoading(true)
    setSearched(false)
    setTimeout(() => {
      const q = query.toLowerCase()
      const found = ORDERS.filter(
        (o) =>
          o.id.toLowerCase().includes(q) ||
          o.title.toLowerCase().includes(q) ||
          o.client.toLowerCase().includes(q)
      )
      setResults(found)
      setSearched(true)
      setLoading(false)
    }, 800)
  }

  return (
    <section id="track" className="py-28 relative">
      {/* bg accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #c8a84b, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-widest uppercase font-mono mb-4">— Track Your Order —</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Pantau <span className="gold-text italic font-semibold">Progress</span> Tugas Anda
          </h2>
          <p className="text-cream/50 mt-4 font-body text-sm">
            Masukkan ID order, nama proyek, atau nama Anda untuk melihat status pengerjaan.
          </p>
          <div className="gold-line w-24 mx-auto mt-6" />
        </div>

        {/* Search bar */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50 pointer-events-none"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Cari ID (CC-001), nama proyek, atau nama client..."
              className="input-gold w-full pl-11 pr-4 py-4 text-sm font-mono rounded-none"
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={loading}
            className="btn-gold px-8 text-xs tracking-widest uppercase font-mono flex items-center gap-2 disabled:opacity-60"
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Search size={14} />}
            Cari
          </button>
        </div>

        {/* Results */}
        {searched && (
          <div className="mt-8 space-y-4">
            {results.length === 0 ? (
              <div className="glass-card p-8 text-center">
                <AlertCircle size={32} className="text-gold/40 mx-auto mb-3" />
                <p className="text-cream/50 font-body text-sm">
                  Tidak ditemukan order dengan kata kunci <em className="text-gold">"{query}"</em>
                </p>
                <p className="text-cream/30 text-xs mt-2 font-mono">
                  Pastikan ID atau nama sudah benar, atau hubungi tim kami.
                </p>
              </div>
            ) : (
              results.map((order) => {
                const cfg = STATUS_CONFIG[order.status]
                return (
                  <div
                    key={order.id}
                    className="glass-card p-6 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-mono text-xs text-gold/60">{order.id}</span>
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono ${cfg.className}`}
                          >
                            {cfg.icon}
                            {cfg.label}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-cream">{order.title}</h3>
                        <p className="text-cream/40 text-xs font-mono mt-0.5">Client: {order.client}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-cream/30 text-xs font-mono">Deadline</p>
                        <p className="text-gold text-sm font-mono">{order.deadline}</p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-cream/40 text-xs font-mono">Progress</span>
                        <span className="text-gold text-xs font-mono font-medium">{order.progress}%</span>
                      </div>
                      <div className="h-1 bg-navy-subtle rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${order.progress}%`,
                            background: 'linear-gradient(90deg, #c8a84b, #e2c97e)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Tech stack + last update */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {order.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2 py-0.5 border border-gold/20 text-gold/60 bg-gold-dim"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-cream/30 text-xs font-mono shrink-0">↻ {order.lastUpdate}</span>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        )}
      </div>
    </section>
  )
}
