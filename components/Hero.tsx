'use client'
import { useEffect, useRef } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const stars: { x: number; y: number; r: number; a: number; speed: number }[] = []
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
      })
    }

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        s.a += s.speed
        const alpha = (Math.sin(s.a) + 1) / 2
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,168,75,${alpha * 0.6})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient bg */}
      <div className="absolute inset-0 bg-gradient-radial from-navy-subtle/60 via-navy-deep to-navy-deep" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(18,43,80,0.7) 0%, transparent 70%)',
        }}
      />

      {/* Animated star canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />

      {/* Orbiting decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[500px] h-[500px] opacity-10">
          <div className="absolute inset-0 rounded-full border border-gold" />
          <div className="absolute inset-8 rounded-full border border-gold/50" />
          <div className="absolute inset-16 rounded-full border border-gold/30" />
          <div className="orbit-1 absolute top-1/2 left-1/2 w-2 h-2 -mt-1 -ml-1 rounded-full bg-gold" />
          <div className="orbit-2 absolute top-1/2 left-1/2 w-1.5 h-1.5 -mt-1 -ml-1 rounded-full bg-gold-light" />
          <div className="orbit-3 absolute top-1/2 left-1/2 w-1 h-1 -mt-0.5 -ml-0.5 rounded-full bg-gold-pale" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold-dim px-4 py-1.5 mb-8 text-gold text-xs tracking-widest uppercase font-mono">
          <Sparkles size={11} />
          Professional Coding Service
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-6">
          <span className="block text-cream/90 italic">Kode yang</span>
          <span className="block gold-text font-semibold">Bekerja.</span>
          <span className="block text-cream/90 italic">Tepat Waktu.</span>
        </h1>

        <div className="gold-line w-40 mx-auto my-8" />

        <p className="font-body text-cream/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light mb-12">
          Tim kami mengerjakan tugas koding, web, mobile, dan aplikasi dengan standar industri —{' '}
          <em className="text-gold/80 not-italic">terstruktur, bersih, dan profesional.</em>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#cta"
            className="btn-gold px-10 py-4 text-sm tracking-widest uppercase font-mono shadow-lg animate-pulse-gold"
          >
            Mulai Pesan
          </a>
          <a
            href="#track"
            className="border border-gold/40 text-gold hover:border-gold px-10 py-4 text-sm tracking-widest uppercase font-mono transition-all duration-300 hover:bg-gold-dim"
          >
            Track Order
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-20">
          {[
            { num: '200+', label: 'Proyek Selesai' },
            { num: '98%', label: 'Client Puas' },
            { num: '24/7', label: 'Support Aktif' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl gold-text font-semibold">{s.num}</p>
              <p className="text-cream/40 text-xs tracking-widest uppercase font-mono mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#track"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/50 hover:text-gold transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
