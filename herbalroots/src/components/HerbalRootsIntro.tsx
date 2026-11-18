import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import './herbalroots-intro.css'

const STORAGE_KEY = 'hr-intro-played'
const DURATION_MS = 4000
function prefersReducedMotion() {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function shouldPlay() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return false
  try {
    return !window.sessionStorage.getItem(STORAGE_KEY)
  } catch {
    // The intro still works if browser storage is unavailable.
    return true
  }
}

function markPlayed() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* ignore */
  }
}

/** Bhringraj: slender lanceolate leaf with a soft midrib */
function BhringrajLeaf() {
  return (
    <svg viewBox="0 0 40 120" width="40" height="120" aria-hidden="true">
      <path d="M20 118 C6 88 4 42 20 2 C36 42 34 88 20 118Z" fill="#5E8B60" />
      <path d="M20 116 L20 10" stroke="#EAF0E2" strokeOpacity=".55" strokeWidth="1.2" fill="none" />
    </svg>
  )
}

/** Amla: fine pinnate sprig of small paired leaflets */
function AmlaSprig() {
  const pairs = [18, 34, 50, 66, 82]
  return (
    <svg viewBox="0 0 60 110" width="60" height="110" aria-hidden="true">
      <path d="M30 108 C29 70 31 36 30 6" stroke="#4E7A52" strokeWidth="1.6" fill="none" />
      {pairs.map((y) => (
        <g key={y} fill="#7FA77A">
          <ellipse cx="20" cy={y} rx="9" ry="3.6" transform={`rotate(-24 20 ${y})`} />
          <ellipse cx="40" cy={y} rx="9" ry="3.6" transform={`rotate(24 40 ${y})`} />
        </g>
      ))}
      <ellipse cx="30" cy="5" rx="3.6" ry="7" fill="#7FA77A" />
    </svg>
  )
}

/** Neem: curved, gently serrated leaflet */
function NeemLeaf() {
  return (
    <svg viewBox="0 0 50 110" width="50" height="110" aria-hidden="true">
      <path
        d="M24 108 C10 92 6 70 9 52 L13 50 L11 42 L16 38 L15 30 L20 25 L21 16 L27 4 C38 26 42 54 36 80 C33 92 29 102 24 108Z"
        fill="#3F6B47"
      />
      <path d="M24 106 C26 74 27 40 27 8" stroke="#DCE7D4" strokeOpacity=".5" strokeWidth="1" fill="none" />
    </svg>
  )
}

/** HerbalRoots emblem: forest-green disc with an ivory sprout */
export function HerbalRootsEmblem({ size = 96 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#1C3D2B" />
      <g fill="#F8F5EC">
        <path d="M32 14 C27.5 20 27.5 27 32 32 C36.5 27 36.5 20 32 14Z" />
        <path d="M31 36 C26 31 20 31 16.5 33.5 C21 37.5 26.5 38 31 36Z" />
        <path d="M33 36 C38 31 44 31 47.5 33.5 C43 37.5 37.5 38 33 36Z" />
      </g>
      <path d="M32 30 L32 50" stroke="#F8F5EC" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

type LeafKind = 'b' | 'a' | 'n'

/**
 * Twelve leaves start near the edges and settle into a ring around the centre.
 * Each one starts on the same angle it ends on, and the field rotates as they move in,
 * so the leaves spiral inward instead of travelling in straight lines.
 */
const KINDS: LeafKind[] = ['b', 'a', 'n']
const LEAVES = Array.from({ length: 12 }, (_, i) => {
  const angle = i * 30 - 90
  const rad = (angle * Math.PI) / 180
  return {
    kind: KINDS[i % 3],
    cx: Math.cos(rad).toFixed(4),
    cy: Math.sin(rad).toFixed(4),
    // Start angled loosely toward the centre; finish tangent to the ring like a laurel wreath.
    startRot: angle - 30,
    endRot: angle + 145,
    scale: i % 3 === 1 ? 0.9 : 1,
    delay: (i % 4) * 45,
  }
})

const PARTICLES = [
  { x: -64, y: 26, d: 1900 },
  { x: 58, y: 16, d: 2000 },
  { x: -34, y: -58, d: 2080 },
  { x: 42, y: -50, d: 1960 },
  { x: -78, y: -16, d: 2140 },
  { x: 80, y: -6, d: 2100 },
]

export default function HerbalRootsIntro() {
  const [visible, setVisible] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const skipRef = useRef<HTMLButtonElement>(null)
  const finish = useCallback(() => setVisible(false), [])

  useEffect(() => {
    if (shouldPlay()) setVisible(true)
  }, [])

  useEffect(() => {
    // A reduced-motion visit counts as a visit without displaying the intro.
    if (!visible) {
      if (prefersReducedMotion()) markPlayed()
      return
    }
    markPlayed()
    const overlay = overlayRef.current
    const page = document.getElementById('herbalroots-site')
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    page?.setAttribute('inert', '')
    skipRef.current?.focus({ preventScroll: true })

    const block = (e: Event) => e.preventDefault()
    overlay?.addEventListener('wheel', block, { passive: false })
    overlay?.addEventListener('touchmove', block, { passive: false })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') finish()
    }
    const motion = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)') : null
    const onMotionChange = (e: MediaQueryListEvent) => { if (e.matches) finish() }
    motion?.addEventListener('change', onMotionChange)
    window.addEventListener('keydown', onKey)
    const timer = window.setTimeout(finish, DURATION_MS)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
      motion?.removeEventListener('change', onMotionChange)
      overlay?.removeEventListener('wheel', block)
      overlay?.removeEventListener('touchmove', block)
      page?.removeAttribute('inert')
      if (document.activeElement === skipRef.current) previousFocus?.focus({ preventScroll: true })
    }
  }, [visible, finish])

  if (!visible) return null

  return (
    <div ref={overlayRef} className="hr-intro" role="dialog" aria-modal="true" aria-label="HerbalRoots introduction">
      <div className="hr-intro__glow" />

      <div className="hr-intro__field">
        {LEAVES.map((leaf, i) => (
          <div
            key={i}
            className="hr-intro__leaf"
            style={
              {
                '--cx': leaf.cx,
                '--cy': leaf.cy,
                '--r0': `${leaf.startRot}deg`,
                '--r1': `${leaf.endRot}deg`,
                '--s': leaf.scale,
                animationDelay: `${leaf.delay}ms`,
              } as CSSProperties
            }
          >
            {leaf.kind === 'b' ? <BhringrajLeaf /> : leaf.kind === 'a' ? <AmlaSprig /> : <NeemLeaf />}
          </div>
        ))}
      </div>

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hr-intro__particle"
          style={{ '--px': `${p.x}px`, '--py': `${p.y}px`, animationDelay: `${p.d}ms` } as CSSProperties}
        />
      ))}

      <div className="hr-intro__lockup">
        <div className="hr-intro__emblem">
          <HerbalRootsEmblem size={112} />
        </div>
        <div className="hr-intro__text">
          <div className="hr-intro__wordmark">HerbalRoots</div>
          <div className="hr-intro__subtitle">AYURVEDIC HAIR CARE</div>
        </div>
      </div>

      <button ref={skipRef} type="button" className="hr-intro__skip" onClick={finish}>
        Skip intro
      </button>
    </div>
  )
}
