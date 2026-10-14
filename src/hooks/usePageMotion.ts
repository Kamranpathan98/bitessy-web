import { useEffect } from 'react'
import type { RefObject } from 'react'

/** Progressive enhancement: content stays visible if motion or observation is unavailable. */
export function useScrollReveals(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!root || preference.matches || !('IntersectionObserver' in window)) return

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const element = entry.target as HTMLElement
        element.classList.remove('reveal-pending')
        element.classList.add('reveal-visible')
        observer.unobserve(element)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' })

    // Batch geometry reads before class/style writes; no work runs on scroll events.
    const positions = targets.map(element => element.getBoundingClientRect())
    targets.forEach((element, index) => {
      // Children of a .reveal-stagger container without an explicit delay are staggered by DOM order.
      const stagger = element.dataset.revealDelay === undefined && element.parentElement?.classList.contains('reveal-stagger')
        ? Array.prototype.indexOf.call(element.parentElement.children, element) * 70
        : 0
      const delay = Math.min(Number(element.dataset.revealDelay) || stagger, 420)
      element.style.setProperty('--reveal-delay', `${delay}ms`)
      if (positions[index].bottom > 0 && positions[index].top < window.innerHeight) {
        element.classList.add('reveal-visible')
      } else {
        element.classList.add('reveal-pending')
        observer.observe(element)
      }
    })

    const showAll = () => {
      if (!preference.matches) return
      observer.disconnect()
      targets.forEach(element => element.classList.remove('reveal-pending', 'reveal-visible'))
    }
    preference.addEventListener('change', showAll)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', showAll)
      targets.forEach(element => {
        element.classList.remove('reveal-pending', 'reveal-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [rootRef])
}

/** Sticky header gains body on scroll. Toggles a class (no React state) and only writes when scrolled past the threshold. */
export function useScrolledHeader(headerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    let frame = 0
    const update = () => {
      frame = 0
      header.classList.toggle('is-scrolled', window.scrollY > 8)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
      header.classList.remove('is-scrolled')
    }
  }, [headerRef])
}

/**
 * Desktop pointer parallax. Pointer events only update a target; a rAF loop eases the current value toward it
 * and writes two CSS custom properties on the hero (no React state, no layout reads inside the frame loop).
 * The loop stops itself once settled, so the page is idle when the pointer is.
 */
export function useHeroParallax(heroRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const enabled = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 901px) and (prefers-reduced-motion: no-preference)')
    const RANGE = 8
    const EASING = 0.1
    let bounds: DOMRect | null = null
    let frame = 0
    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0

    const tick = () => {
      frame = 0
      x += (targetX - x) * EASING
      y += (targetY - y) * EASING
      if (Math.abs(targetX - x) < 0.01 && Math.abs(targetY - y) < 0.01) {
        x = targetX
        y = targetY
      }
      hero.style.setProperty('--hero-x', `${x.toFixed(2)}px`)
      hero.style.setProperty('--hero-y', `${y.toFixed(2)}px`)
      if (x !== targetX || y !== targetY) frame = window.requestAnimationFrame(tick)
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(tick)
    }
    const invalidate = () => { bounds = null }
    const release = () => {
      bounds = null
      targetX = 0
      targetY = 0
      schedule()
    }
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      bounds ??= hero.getBoundingClientRect()
      targetX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1)) * RANGE
      targetY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1)) * RANGE
      schedule()
    }
    const detach = () => {
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', release)
      hero.removeEventListener('pointercancel', release)
      window.removeEventListener('resize', invalidate)
      window.removeEventListener('scroll', invalidate)
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
      bounds = null
      targetX = targetY = x = y = 0
      hero.style.removeProperty('--hero-x')
      hero.style.removeProperty('--hero-y')
    }
    const configure = () => {
      detach()
      if (!enabled.matches) return
      hero.addEventListener('pointermove', move, { passive: true })
      hero.addEventListener('pointerleave', release, { passive: true })
      hero.addEventListener('pointercancel', release, { passive: true })
      window.addEventListener('resize', invalidate, { passive: true })
      window.addEventListener('scroll', invalidate, { passive: true })
    }
    configure()
    enabled.addEventListener('change', configure)
    return () => {
      enabled.removeEventListener('change', configure)
      detach()
    }
  }, [heroRef])
}
