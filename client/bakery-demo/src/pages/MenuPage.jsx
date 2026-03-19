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

  useEffect(() => {
    const handleSync = (e) => setSelectedWeight(Number(e.detail || 1));
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

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied === "true") {
      return;
    }

    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = fallbackCakeImage;
  };

  const getRevealClass = (index) =>
    index % 2 === 0 ? "bakery-reveal-left" : "bakery-reveal-right";

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
      <div className="rounded-2xl bg-white/80 p-4 sm:p-5 lg:p-6">
        <div className="mb-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="m-0 text-2xl font-semibold tracking-tight text-[#1f1f1f] sm:text-3xl">
              {pageContext.heading}
            </h2>
            <WeightFilter />
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-[#6b6b6b] sm:text-[0.95rem]">
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
                data-bakery-reveal
                className={`bakery-reveal ${getRevealClass(index)} flex h-full flex-col overflow-hidden rounded-2xl border border-[#ece4dc] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(0,0,0,0.09)]`}
                style={{ transitionDelay: `${Math.min(index * 24, 200)}ms` }}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-[#f6f0eb] ${item.imageClass || ""}`}
                >
                  <img
                    src={item.imageUrl || fallbackCakeImage}
                    alt={item.name}
                    className={`h-full w-full ${isImageCakePage ? "object-contain p-2" : "object-cover"}`}
                    onError={handleImageError}
                    loading={index < 8 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 4 ? "high" : "auto"}
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
                    <strong className="bakery-live-price">
                      ₹ {getDisplayPriceByWeight(item, selectedWeight)}
                    </strong>
                    {getDisplayOriginalPrice(item, selectedWeight) >
                      getDisplayPriceByWeight(item, selectedWeight) && (
                      <s className="bakery-old-price">₹ {getDisplayOriginalPrice(item, selectedWeight)}</s>
                    )}
                    {getDiscountPercent(item) > 0 && (
                      <span className="bakery-offer-pill-live inline-flex items-center rounded-full bg-[#ffe8ec] px-2 py-0.5 text-[0.72rem] font-extrabold text-[#cf244a]">
                        {getDiscountPercent(item)}% OFF
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#eef8ef] px-2 py-0.5 text-[0.74rem] font-extrabold text-[#1f7a41]">
                      {item.rating} ★
                    </span>
                    {item.reviews && (
                      <span className="text-[0.78rem] font-semibold text-[#6f6a65]">
                        ({item.reviews} Reviews)
                      </span>
                    )}
                  </div>
                  <p className="m-0 text-[0.82rem] text-[#6b6b6b]">
                    Weight: <strong className="text-[#2b2b2b]">{selectedWeight} Kg</strong>
                    <span className="px-1">•</span>
                    Earliest Delivery:{" "}
                    <strong className="text-[#2b2b2b]">{item.delivery}</strong>
                  </p>
                  <div className="mt-1 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      className="inline-flex items-center justify-center gap-1 rounded-lg border border-[#d9d2cb] bg-white px-2 py-1.5 text-[0.74rem] font-bold text-[#2f2f2f] transition hover:border-[#c8b7aa]"
                    >
                      Add to Cart
                      {getItemCount(item.id) > 0 && (
                        <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-[#ffebed] px-1.5 py-0.5 text-[0.68rem] font-extrabold text-[#d81b42]">
                          {getItemCount(item.id)}
                        </span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOrderNow(item)}
                      className="inline-flex items-center justify-center rounded-lg bg-[#ff0015] px-2 py-1.5 text-[0.74rem] font-bold text-white transition hover:bg-[#dd0012]"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MenuPage;
