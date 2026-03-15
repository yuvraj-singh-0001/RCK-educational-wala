import React, { useEffect, useState } from 'react'

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
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50)
    return () => clearTimeout(t)
  }, [])

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

  useEffect(() => {
    if (previousIndex === null) {
      return undefined
    }

    const t = setTimeout(() => setPreviousIndex(null), 760)
    return () => clearTimeout(t)
  }, [previousIndex])

  const goToSlide = (index) => {
    if (index === currentIndex) {
      return
    }

    setDirection(index > currentIndex ? 'next' : 'prev')
    setPreviousIndex(currentIndex)
    setCurrentIndex(index)
  }

  const getSlideClassName = (index) => {
    const cls = [
      'absolute inset-0 bg-no-repeat bg-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform',
      'bg-[length:100%_100%]'
    ]

    if (index === currentIndex) {
      cls.push('z-30 opacity-100 translate-x-0')
    } else if (index === previousIndex) {
      cls.push('z-20 opacity-100')
      cls.push(direction === 'next' ? '-translate-x-full' : 'translate-x-full')
    } else {
      cls.push('z-10 opacity-100')
      if (ready) {
        cls.push(direction === 'next' ? 'translate-x-full' : '-translate-x-full')
      } else {
        cls.push('translate-x-0')
      }
    }

    return cls.join(' ')
  }

  
  return (
    <section
      className="relative mt-0 mb-1 aspect-[1460/590] max-h-[620px] h-[clamp(190px,54vw,310px)] w-full overflow-hidden rounded-[10px] bg-[#f3dfe6] shadow-[0_10px_24px_rgba(0,0,0,0.1)] md:h-auto md:rounded-[14px]"
      aria-label="Featured bakery highlights"
    >
      <div className="relative h-full w-full overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={image.src}
            className={getSlideClassName(index)}
            style={{ backgroundImage: `url('${image.src}')` }}
          />
        ))}
      </div>

      <div
        className="absolute bottom-2.5 left-1/2 z-40 flex -translate-x-1/2 gap-2 md:bottom-4 md:gap-2.5"
        aria-label="Slide indicators"
      >
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={[
              'h-2 w-2 rounded-full border p-0 transition duration-300 md:h-2.5 md:w-2.5',
              index === currentIndex
                ? 'scale-125 border-white bg-white'
                : 'border-white/85 bg-white/30 hover:bg-white/65'
            ].join(' ')}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel

