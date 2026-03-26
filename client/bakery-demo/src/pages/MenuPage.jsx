import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  productCatalog,
  weightFilterOptions,
  getGlobalWeight,
  weightUpdatedEvent,
  isCakeBasePriceItem,
  getBaseCakePrice,
  getDisplayPriceByWeight,
  getDisplayOriginalPrice
} from "../data/storefrontData";
import WeightFilter from "../components/layout/WeightFilter";

const fallbackCakeImage = "/bakery-demo/images/Classic-Menu-cake.png";
const cartStorageKey = "bakery-cart";

function MenuPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState({});
  const [selectedWeight, setSelectedWeight] = useState(getGlobalWeight());
  const [animatingPrices, setAnimatingPrices] = useState({});

  useEffect(() => {
    const handleSync = (e) => {
      const newWeight = Number(e.detail || 1);
      setSelectedWeight(newWeight);
      
      // Trigger price animation
      const newAnimatingPrices = {};
      productCatalog.forEach(item => {
        newAnimatingPrices[item.id] = {
          start: 0,
          end: getDisplayPriceByWeight(item, newWeight),
          isAnimating: true
        };
      });
      setAnimatingPrices(newAnimatingPrices);
      
      // Complete animation after duration
      setTimeout(() => {
        setAnimatingPrices({});
      }, 800);
    };
    
    window.addEventListener(weightUpdatedEvent, handleSync);
    window.addEventListener("storage", () => setSelectedWeight(getGlobalWeight()));
    return () => {
      window.removeEventListener(weightUpdatedEvent, handleSync);
    };
  }, []);

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem(cartStorageKey) || "{}");
      if (storedCart && typeof storedCart === "object") {
        setCartItems(storedCart);
      }
    } catch {
      setCartItems({});
    }
  }, []);

  const activeCategory = searchParams.get("category") || "";
  const activeOccasion = searchParams.get("occasion") || "";
  const activeDelivery = searchParams.get("delivery") || "";
  const activeFlavour = searchParams.get("flavour") || "";
  const activeType = searchParams.get("type") || "";
  const activeSearch = searchParams.get("q") || "";

  const filteredProducts = useMemo(() => {
    const hasAnyFilter = activeCategory || activeOccasion || activeDelivery || 
                        activeFlavour || activeType || activeSearch;
    
    if (!hasAnyFilter) {
      return productCatalog; 
    }

    const items = productCatalog.filter((item) => {
      const isAnniversaryCollectionPage = activeOccasion === "Anniversary";

      const matchesCategory =
        !activeCategory || item.category === activeCategory;
      const matchesOccasion =
        !activeOccasion ||
        (isAnniversaryCollectionPage
          ? item.imageUrl?.includes("/bakery-demo/images/Anniversary%20Cakes-")
          : item.occasion === activeOccasion);
      const matchesDelivery =
        !activeDelivery || item.delivery === activeDelivery;
      const matchesFlavour = !activeFlavour || item.flavour === activeFlavour;
      const matchesType =
        !activeType ||
        (activeType === "Designer Cakes" || activeType === "Photo Cakes"
          ? item.type === activeType && item.category === "Cakes"
          : item.type === activeType);
      const searchTerm = activeSearch.trim().toLowerCase();
      const searchableText = [
        item.name,
        item.category,
        item.flavour,
        item.type,
        item.occasion,
        item.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesSearch = !searchTerm || searchableText.includes(searchTerm);

      return (
        matchesCategory &&
        matchesOccasion &&
        matchesDelivery &&
        matchesFlavour &&
        matchesType &&
        matchesSearch
      );
    });

    const sortedItems = [...items].sort((firstItem, secondItem) => {
      return (
        secondItem.rating * 100 +
        getBaseCakePrice(secondItem) -
        (firstItem.rating * 100 + getBaseCakePrice(firstItem))
      );
    });

    if (activeType !== "Designer Cakes") {
      return sortedItems;
    }

    const seenImageUrls = new Set();

    return sortedItems.filter((item) => {
      const imageKey = item.imageUrl || item.id;

      if (seenImageUrls.has(imageKey)) {
        return false;
      }

      seenImageUrls.add(imageKey);
      return true;
    });
  }, [
    activeCategory,
    activeDelivery,
    activeOccasion,
    activeFlavour,
    activeType,
    activeSearch,
  ]);

  const pageContext = useMemo(() => {
    if (activeSearch) {
      return {
        breadcrumb: `Search / ${activeSearch}`,
        heading: `Search: ${activeSearch}`,
      };
    }

    if (activeType) {
      return {
        breadcrumb: `Home / ${activeType}`,
        heading: activeType,
      };
    }

    if (activeCategory) {
      return {
        breadcrumb: `Home / ${activeCategory}`,
        heading: activeCategory,
      };
    }

    if (activeOccasion) {
      return {
        breadcrumb: `Home / ${activeOccasion} Cakes`,
        heading: `${activeOccasion} Cakes`,
      };
    }

    if (activeDelivery) {
      return {
        breadcrumb: `Home / ${activeDelivery} Delivery Cakes`,
        heading: `${activeDelivery} Delivery Cakes`,
      };
    }

    if (activeFlavour) {
      return {
        breadcrumb: `Home / ${activeFlavour} Cakes`,
        heading: `${activeFlavour} Cakes`,
      };
    }

    return {
      breadcrumb: "Home / All Cakes Collection",
      heading: "All Cakes Collection",
    };
  }, [
    activeCategory,
    activeDelivery,
    activeFlavour,
    activeOccasion,
    activeType,
    activeSearch,
  ]);

  const getDiscountPercent = (item) => {
    const effectivePrice = getDisplayPriceByWeight(item, selectedWeight);
    const effectiveOriginalPrice = getDisplayOriginalPrice(item, selectedWeight);

    if (typeof item.discountPercent === "number") {
      if (isCakeBasePriceItem(item)) {
        return Math.round(
          ((effectiveOriginalPrice - effectivePrice) / effectiveOriginalPrice) * 100,
        );
      }

      return item.discountPercent;
    }

    if (!effectiveOriginalPrice || effectiveOriginalPrice <= effectivePrice) {
      return 0;
    }

    return Math.round(
      ((effectiveOriginalPrice - effectivePrice) / effectiveOriginalPrice) * 100,
    );
  };

  const getAnimatedPrice = (item) => {
    const animation = animatingPrices[item.id];
    if (animation && animation.isAnimating) {
      return animation.start;
    }
    return getDisplayPriceByWeight(item, selectedWeight);
  };

  const getAnimatedOriginalPrice = (item) => {
    const animation = animatingPrices[item.id];
    if (animation && animation.isAnimating) {
      return 0;
    }
    return getDisplayOriginalPrice(item, selectedWeight);
  };

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied === "true") {
      return;
    }

    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = fallbackCakeImage;
  };

  
  const getCartEntry = (itemId) => {
    const entry = cartItems[itemId];

    if (typeof entry === "number") {
      return { quantity: entry };
    }

    if (entry && typeof entry === "object") {
      return entry;
    }

    return { quantity: 0 };
  };

  const getItemCount = (itemId) => Number(getCartEntry(itemId).quantity || 0);

  const syncCart = (nextCart) => {
    setCartItems(nextCart);
    localStorage.setItem(cartStorageKey, JSON.stringify(nextCart));
    window.dispatchEvent(new CustomEvent("bakery-cart-updated"));
  };

  const handleAddToCart = (item) => {
    const currentEntry = getCartEntry(item.id);
    const nextCount = getItemCount(item.id) + 1;
    const nextCart = {
      ...cartItems,
      [item.id]: {
        ...currentEntry,
        quantity: nextCount,
        sourcePath: `${location.pathname}${location.search}#product-${item.id}`,
        weight:
          currentEntry.weight ??
          (item.category === "Cakes" || item.category === "Gourmet Cakes"
            ? selectedWeight
            : null),
      },
    };

    syncCart(nextCart);
  };

  const handleOrderNow = (item) => {
    if (getItemCount(item.id) === 0) {
      const currentEntry = getCartEntry(item.id);
      const nextCart = {
        ...cartItems,
        [item.id]: {
          ...currentEntry,
          quantity: 1,
          sourcePath: `${location.pathname}${location.search}#product-${item.id}`,
          weight:
            currentEntry.weight ??
            (item.category === "Cakes" || item.category === "Gourmet Cakes"
              ? selectedWeight
              : null),
        },
      };
      syncCart(nextCart);
    }

    navigate("/cart");
  };

  const isImageCakePage =
    activeType === "Photo Cakes" || activeType === "Designer Cakes";

  return (
    <section className="bakery-section !mt-1.5 rounded-xl md:rounded-2xl">
      <div className="mb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="m-0 text-2xl font-semibold tracking-tight text-[#1f1f1f] sm:text-3xl simple-reveal" style={{animationDelay: '0ms'}}>
            {pageContext.heading}
          </h2>
          <div className="sm:hidden">
            <WeightFilter className="justify-start" />
          </div>
          <div className="hidden sm:block">
            <WeightFilter className="justify-end" />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-[#6b6b6b] sm:text-[0.95rem] simple-reveal" style={{animationDelay: '100ms'}}>
          <span>{filteredProducts.length} Products</span>
          <span>•</span>
          <span>Overall Rating: 4.8</span>
          <span>•</span>
          <span>3,000+ Reviews</span>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="grid place-items-center rounded-2xl border border-[#ebdfd3] bg-[#fffaf5] px-4 py-10 text-center">
          <h3 className="m-0 text-xl font-semibold text-[#2b2b2b]">
            No products found
          </h3>
          <p className="mt-2 text-sm text-[#6b6b6b]">
            Please try another category from the menu bar.
          </p>
          <Link
            to="/menu"
            className="mt-4 inline-flex items-center rounded-full border border-[#e02b2b]/25 bg-[#fde8e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#c62828] no-underline transition hover:-translate-y-0.5 hover:border-[#e02b2b]/45"
          >
            View Full Menu
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((item, index) => (
            <article
              key={item.id}
              id={`product-${item.id}`}
              className={`simple-reveal flex h-full flex-col overflow-hidden rounded-2xl border border-[#ece4dc] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(0,0,0,0.09)]`}
              style={{ animationDelay: `${Math.min(index * 80, 400)}ms` }}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden bg-[#f6f0eb] ${item.imageClass || ""}`}
              >
                <img
                  src={item.imageUrl || fallbackCakeImage}
                  alt={item.name}
                  className={`h-full w-full ${isImageCakePage ? "object-contain p-2" : "object-cover"}`}
                  onError={handleImageError}
                  loading={index < 4 ? "eager" : "lazy"}
                  sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, 96vw"
                />
                {item.badge && (
                  <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.04em] text-[#9f2138] shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="grid flex-1 gap-1.5 p-3">
                <h3 className="m-0 line-clamp-1 text-[1rem] font-semibold text-[#232323]">
                  {item.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <strong className="bakery-live-price price-animate">
                    ₹ {getAnimatedPrice(item)}
                  </strong>
                  {getAnimatedOriginalPrice(item) >
                    getAnimatedPrice(item) && (
                    <s className="bakery-old-price price-animate">₹ {getAnimatedOriginalPrice(item)}</s>
                  )}
                  {getDiscountPercent(item) > 0 && (
                    <span className="bakery-offer-pill-live inline-flex items-center rounded-full bg-[#ffe8ec] px-2 py-0.5 text-[0.72rem] font-extrabold text-[#cf244a]">
                      {getDiscountPercent(item)}% OFF
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[0.75rem] text-[#6b6b6b]">
                  <span>⭐ {item.rating}</span>
                  <span>•</span>
                  <span>{item.reviews} reviews</span>
                  {item.delivery && (
                    <>
                      <span>•</span>
                      <span>{item.delivery}</span>
                    </>
                  )}
                </div>
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 rounded-xl bg-[#f20d24] px-3 py-2.5 text-[0.8rem] font-extrabold uppercase text-white transition hover:bg-[#e00c20] active:scale-95"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleOrderNow(item)}
                    className="rounded-xl border-2 border-[#f20d24] bg-white px-3 py-2.5 text-[0.8rem] font-extrabold uppercase text-[#f20d24] transition hover:bg-[#f20d24] hover:text-white active:scale-95"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default MenuPage;
