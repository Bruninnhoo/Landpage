import { useLayoutEffect, type RefObject } from 'react'

const MOVE = 'cubic-bezier(0.65, 0, 0.2, 1)'
// Pointer tip of a balloon, relative to its box (see .hm-cur::before)
const TIP = { x: -14, y: -16 }

let played = false

// Once per page load the balloons act as the cursors they look like: Next.js tilts the portrait, React selects and paints the surname,
// Spring Boot writes the role, AWS puts the Cadena window live, Django fills the e-mail pill. The CSS without [data-intro] is the final state,
// so reduced motion just shows the finished hero.
export function useHeroIntro(hero: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = hero.current!
    if (played || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const $ = (s: string) => root.querySelector<HTMLElement>(s)!
    const running: Animation[] = []
    let gone = false

    const run = (el: Element, frames: Keyframe[], delay: number, duration: number, easing = 'linear', fill: FillMode = 'both') => {
      const a = el.animate(frames, { delay, duration, easing, fill })
      running.push(a)
      return a
    }

    // Moves a balloon's tip through viewport points ([time, x, y]) and back to rest.
    // Phones hide some balloons; what they edit still reaches its final state.
    const travel = (el: HTMLElement, stops: [number, number, number][], start: number, end: number) => {
      const r = el.getBoundingClientRect()
      if (!r.width) return
      const frames: Keyframe[] = [{ translate: '0 0', easing: MOVE }]
      for (const [time, x, y] of stops) {
        frames.push({ translate: `${x - r.left - TIP.x}px ${y - r.top - TIP.y}px`, offset: (time - start) / (end - start), easing: MOVE })
      }
      run(el, [...frames, { translate: '0 0' }], start, end - start)
    }

    const click = (el: HTMLElement, time: number) =>
      run(el, [{ scale: 1 }, { scale: 0.82 }, { scale: 1 }], time, 260, 'ease-out')

    const play = () => {
      if (gone) return
      played = true
      const tokens = getComputedStyle(root)

      const next = $('.hm-cur--next')
      const photo = $('.hm-portrait').getBoundingClientRect()
      travel(next, [
        [650, photo.right - 14, photo.top + 34],
        [750, photo.right - 14, photo.top + 34],
        [1250, photo.right - 34, photo.top + 6],
        [1350, photo.right - 34, photo.top + 6],
      ], 50, 2000)
      run($('.hm-portrait'), [{ rotate: '9deg' }, { rotate: '0deg' }], 750, 500, MOVE)

      const react = $('.hm-cur--react')
      const em = $('.hm-title em')
      const name = em.getBoundingClientRect()
      travel(react, [
        [800, name.left - 8, name.top],
        [900, name.left - 8, name.top],
        [1500, name.right + 8, name.bottom],
        [1900, name.right + 8, name.bottom],
      ], 200, 2600)
      click(react, 1550)
      run($('.hm-sel'), [{ opacity: 1, inset: '0 100% 100% -8px' }, { opacity: 1, inset: '0 -8px' }], 900, 600, MOVE, 'forwards')
      run($('.hm-sel'), [{ opacity: 1 }, { opacity: 0 }], 2000, 300, 'linear', 'forwards')
      run(em, [{ color: tokens.color }, { color: tokens.getPropertyValue('--accent-primary') }], 1600, 250)

      const spring = $('.hm-cur--spring')
      const role = $('.hm-role').getBoundingClientRect()
      travel(spring, [
        [1100, role.left, role.bottom - 4],
        [1200, role.left, role.bottom - 4],
        [2300, role.right, role.bottom - 4],
        [2450, role.right, role.bottom - 4],
      ], 400, 3100)
      run($('.hm-role'), [{ backgroundPosition: '100% 0' }, { backgroundPosition: '0% 0' }], 1200, 1100, MOVE)

      const django = $('.hm-cur--django')
      const mail = $('.hm-mail')
      const pill = mail.getBoundingClientRect()
      travel(django, [[3000, pill.right - 24, pill.bottom - 10], [3300, pill.right - 24, pill.bottom - 10]], 2300, 4100)
      click(django, 3030)
      run(mail, [{ backgroundColor: 'transparent', color: tokens.color }, { backgroundColor: filled.bg, color: filled.fg }], 3120, 250)

      const end = 4100
      const shot = $('.hm-shot').getBoundingClientRect()
      if (shot.width) {
        const aws = $('.hm-cur--aws')
        const x = Math.min(shot.left + shot.width / 2, root.ownerDocument.body.clientWidth - 150)
        const y = shot.top + shot.height / 2
        travel(aws, [[2200, x, y], [2600, x, y]], 1400, 3300)
        click(aws, 2250)
        run($('.hm-load'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(0.7)' }, { transform: 'scaleX(1)' }], 2300, 700, 'linear', 'forwards')
        run($('.hm-shot img'), [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0)' }], 3000, 800, 'cubic-bezier(0.16, 1, 0.3, 1)')
        run($('.hm-load'), [{ opacity: 1 }, { opacity: 0 }], 3100, 300, 'linear', 'forwards')
      }
      run(root, [{}, {}], 0, end).onfinish = finish
    }

    const finish = () => {
      gone = true
      running.forEach((a) => a.cancel())
      root.removeAttribute('data-intro')
    }

    // The display face changes every measurement, so wait for it (but not long); a background tab waits to be seen.
    const final = getComputedStyle($('.hm-mail'))
    const filled = { bg: final.backgroundColor, fg: final.color }
    root.setAttribute('data-intro', '')
    const visible = () =>
      new Promise<void>((done) => {
        if (!document.hidden) return done()
        document.addEventListener('visibilitychange', () => done(), { once: true })
      })
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]).then(visible).then(play)
    return finish
  }, [hero])
}
