import React, { useEffect, useMemo, useState } from "react";

const carouselImages = [
  {
    src: "/bakery-demo/images/anniversary-cake.png",
    alt: "Anniversary cake collection",
  },
  {
    src: "/bakery-demo/images/birthday-cake.png",
    alt: "Birthday cake collection",
  },
  {
    src: "/bakery-demo/images/designer-cake.png",
    alt: "Designer cake showcase",
  },
  {
    src: "/bakery-demo/images/chocolate-cake.png",
    alt: "Chocolate cake specials",
  },
  { src: "/bakery-demo/images/kid-cake.png", alt: "Kids cake specials" },
  { src: "/bakery-demo/images/Fruite-cake.png", alt: "Fruit cake specials" },
  { src: "/bakery-demo/images/luxury-cake.png", alt: "Luxury cake collection" },
  {
    src: "/bakery-demo/images/strawberry-cake.png",
    alt: "Strawberry cake specials",
  },
  {
    src: "/bakery-demo/images/wedding cakes-1.png",
    alt: "Wedding cake collection",
  },
];

function HeroCarousel({ className = "", ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => {
        setPreviousIndex(prev);
        return (prev + 1) % carouselImages.length;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (previousIndex === null) {
      return undefined;
    }

    const t = setTimeout(() => setPreviousIndex(null), 760);
    return () => clearTimeout(t);
  }, [previousIndex]);

  const goToSlide = (index) => {
    if (index === currentIndex) {
      return;
    }

    setDirection(index > currentIndex ? "next" : "prev");
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  };

  const getSlideClassName = (index) => {
    const cls = [
      "absolute inset-0 bg-no-repeat bg-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform",
      "bg-[length:100%_100%]",
    ];

    if (index === currentIndex) {
      cls.push("z-30 opacity-100 translate-x-0");
    } else if (index === previousIndex) {
      cls.push("z-20 opacity-100");
      cls.push(direction === "next" ? "-translate-x-full" : "translate-x-full");
    } else {
      cls.push("z-10 opacity-100");
      if (ready) {
        cls.push(
          direction === "next" ? "translate-x-full" : "-translate-x-full",
        );
      } else {
        cls.push("translate-x-0");
      }
    }

    return cls.join(" ");
  };

  const renderedSlides = useMemo(() => {
    const total = carouselImages.length;
    const nextIndex = (currentIndex + 1) % total;
    const prevIndex = (currentIndex - 1 + total) % total;
    const indices = new Set([currentIndex, nextIndex, prevIndex]);

    if (previousIndex !== null) {
      indices.add(previousIndex);
    }

    return carouselImages
      .map((_, index) => index)
      .filter((index) => indices.has(index));
  }, [currentIndex, previousIndex]);

  return (
    <section
      className={[
        "relative mt-0 mb-1 aspect-[1460/590] max-h-[620px] h-[clamp(190px,54vw,310px)] w-full overflow-hidden rounded-[10px] bg-[#f3dfe6] shadow-[0_10px_24px_rgba(0,0,0,0.1)] md:h-auto md:rounded-[14px]",
        className,
      ].join(" ")}
      aria-label="Featured bakery highlights"
      {...props}
    >
      <div className="relative h-full w-full overflow-hidden">
        {renderedSlides.map((index) => {
          const image = carouselImages[index];
          const isActive = index === currentIndex;

          return (
            <div key={image.src} className={getSlideClassName(index)}>
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-fill"
                loading={isActive ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={isActive ? "high" : "auto"}
                sizes="(min-width: 1024px) 1200px, 100vw"
              />
            </div>
          );
        })}
      </div>

      <div
        className="absolute bottom-2.5 left-1/2 z-40 flex -translate-x-1/2 gap-2 md:bottom-4 md:gap-2.5"
        aria-label="Slide indicators"
      >
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={[
              "h-2 w-2 rounded-full border p-0 transition duration-300 md:h-2.5 md:w-2.5",
              index === currentIndex
                ? "scale-125 border-white bg-white"
                : "border-white/85 bg-white/30 hover:bg-white/65",
            ].join(" ")}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
