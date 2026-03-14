import React, { useState } from 'react'

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

  const goToSlide = (index) => setCurrentIndex(index)

  return (
    <section
      className="relative mt-0 mb-1 aspect-[1460/590] max-h-[620px] h-[clamp(190px,54vw,310px)] w-full overflow-hidden rounded-[10px] bg-[#f3dfe6] shadow-[0_10px_24px_rgba(0,0,0,0.1)] md:h-auto md:rounded-[14px]"
      aria-label="Featured bakery highlights"
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-[length:100%_100%]"
          style={{ backgroundImage: `url('${carouselImages[currentIndex].src}')` }}
        />
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

