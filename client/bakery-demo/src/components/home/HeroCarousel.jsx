import React, { useEffect, useState } from 'react'
import './HeroCarousel.css'

const carouselImages = [
  { src: '/bakery-demo/images/anniversary-cake.png' },
  { src: '/bakery-demo/images/birthday-cake.png' },
  { src: '/bakery-demo/images/designer-cake.png' },
  { src: '/bakery-demo/images/chocolate-cake.png' },
  { src: '/bakery-demo/images/kid-cake.png' },
  { src: '/bakery-demo/images/Fruite-cake.png' },
  { src: '/bakery-demo/images/luxury-cake.png' },
  { src: '/bakery-demo/images/strawberry-cake.png' },
  { src: '/bakery-demo/images/wedding cakes-1.png' },
]

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(null)
  const [direction, setDirection] = useState('next')
  const [ready, setReady] = useState(false) // skip animation on first render

  // Show first slide instantly, then enable animations
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next')
      setCurrentIndex((prev) => {
        setPreviousIndex(prev)
        return (prev + 1) % carouselImages.length
      })
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  // Clear exit class after transition
  useEffect(() => {
    if (previousIndex === null) return
    const t = setTimeout(() => setPreviousIndex(null), 750)
    return () => clearTimeout(t)
  }, [previousIndex])

  const goToSlide = (index) => {
    if (index === currentIndex) return
    setDirection(index > currentIndex ? 'next' : 'prev')
    setPreviousIndex(currentIndex)
    setCurrentIndex(index)
  }

  const getSlideClass = (index) => {
    const cls = ['carousel-slide']
    if (index === currentIndex) {
      cls.push('active')
      if (ready) cls.push(direction === 'next' ? 'enter-right' : 'enter-left')
    } else if (index === previousIndex) {
      cls.push('exit')
      cls.push(direction === 'next' ? 'exit-left' : 'exit-right')
    }
    return cls.join(' ')
  }

  return (
    <section className="bakery-hero-carousel-wrapper" aria-label="Featured bakery highlights">
      <div className="bakery-hero-carousel">
        {carouselImages.map((image, index) => (
          <div
            key={image.src}
            className={getSlideClass(index)}
            style={{ backgroundImage: `url('${image.src}')` }}
          />
        ))}
      </div>

      <div className="carousel-dots" aria-label="Slide indicators">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`dot${index === currentIndex ? ' active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel

