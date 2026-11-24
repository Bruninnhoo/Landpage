import { useEffect, useRef, type PointerEvent } from 'react'
import './ScrollRuler.css'

const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight

// Ruler-style scroll indicator that replaces the native scrollbar on desktop (see ScrollRuler.css).
export default function ScrollRuler() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rail = ref.current!
    const mark = rail.firstElementChild as HTMLElement
    const update = () => {
      const max = maxScroll()
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      rail.style.setProperty('--p', String(p))
      mark.dataset.p = `${String(Math.round(p * 100)).padStart(3, '0')}%`
      rail.style.backgroundPositionY = `${-window.scrollY * 0.2}px`
    }
    // Page height changes on route change and image load, not only on scroll.
    const ro = new ResizeObserver(update)
    ro.observe(document.body)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const jump = (e: PointerEvent) =>
    window.scrollTo({ top: (e.clientY / window.innerHeight) * maxScroll(), behavior: 'instant' })

  return (
    <div
      ref={ref}
      className="scroll-ruler"
      aria-hidden="true"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId)
        jump(e)
      }}
      onPointerMove={(e) => e.buttons === 1 && jump(e)}
    >
      <i data-p="000%" />
    </div>
  )
}
