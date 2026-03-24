import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  productCatalog,
  isCakeBasePriceItem as isWeightSelectableProduct,
  getBaseCakePrice,
  getDisplayPriceByWeight
} from "../data/storefrontData";

const cartStorageKey = "bakery-cart";
const deliveryLocationStorageKey = "bakery-delivery-location";
const fallbackCakeImage = "/bakery-demo/images/Classic-Menu-cake.png";
const weightOptions = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

function getFallbackSourcePath(item) {
  if (item.type) {
    return `/menu?type=${encodeURIComponent(item.type)}#product-${item.id}`;
  }

  if (item.occasion && item.occasion !== "Occasions") {
    return `/menu?occasion=${encodeURIComponent(item.occasion)}#product-${item.id}`;
  }

  if (item.category) {
    return `/menu?category=${encodeURIComponent(item.category)}#product-${item.id}`;
  }

  return "/menu";
}

function getDeliverySchedule(deliveryMode) {
  const now = new Date();
  const deliveryDate = new Date(now);
  let timeLabel = "10:00 AM - 1:00 PM";

  if (deliveryMode === "Same Day") {
    if (now.getHours() >= 18) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      timeLabel = "10:00 AM - 1:00 PM";
    } else {
      timeLabel = "By 7:00 PM Today";
    }
  } else if (deliveryMode === "Midnight") {
    deliveryDate.setDate(deliveryDate.getDate() + 1);
    timeLabel = "11:00 PM - 11:59 PM";
  } else {
    deliveryDate.setDate(deliveryDate.getDate() + 1);
    timeLabel = "10:00 AM - 1:00 PM";
  }

  return {
    dateLabel: deliveryDate.toLocaleDateString("en-IN", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }),
    timeLabel,
  };
}

function getItemMeta(item) {
  if (item.category === "Desserts") {
    return "Serving: 1 dessert box";
  }

  if (item.category === "Combos") {
    return "Pack: 1 hamper set";
  }

  return "Pack: 1 unit";
}

function CartPage() {
  const [cartItems, setCartItems] = useState({});
  const [deliveryLocation, setDeliveryLocation] = useState({
    label: "Select delivery location in header",
    details: "Delivery address will appear here",
  });

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(cartStorageKey) || "{}");
      if (stored && typeof stored === "object") {
        setCartItems(stored);
      }
    } catch {
      setCartItems({});
    }
  }, []);

  useEffect(() => {
    const readLocation = () => {
      try {
        const storedLocation = JSON.parse(
          localStorage.getItem(deliveryLocationStorageKey) || "null",
        );

        if (storedLocation?.label) {
          setDeliveryLocation(storedLocation);
          return;
        }
      } catch {
        // Fall through to default state.
      }

      setDeliveryLocation({
        label: "Select delivery location in header",
        details: "Delivery address will appear here",
      });
    };

    readLocation();
    window.addEventListener("storage", readLocation);
    window.addEventListener("bakery-location-updated", readLocation);

    return () => {
      window.removeEventListener("storage", readLocation);
      window.removeEventListener("bakery-location-updated", readLocation);
    };
  }, []);

  const syncCart = (nextCart) => {
    setCartItems(nextCart);
    localStorage.setItem(cartStorageKey, JSON.stringify(nextCart));
    window.dispatchEvent(new CustomEvent("bakery-cart-updated"));
  };

  const cartProducts = useMemo(() => {
    return Object.entries(cartItems)
      .map(([id, rawEntry]) => {
        const item = productCatalog.find((product) => product.id === id);
        if (!item) {
          return null;
        }

        const entry =
          typeof rawEntry === "number"
            ? { quantity: Number(rawEntry) }
            : rawEntry && typeof rawEntry === "object"
              ? rawEntry
              : { quantity: 0 };

        const quantity = Number(entry.quantity || 0);
        if (quantity <= 0) {
          return null;
        }

        const weight = isWeightSelectableProduct(item)
          ? Number(entry.weight || 1)
          : null;
        const basePrice = getBaseCakePrice(item);
        const unitPrice = isWeightSelectableProduct(item)
          ? Math.round((basePrice * weight) / 0.5)
          : basePrice;
        const deliverySchedule = getDeliverySchedule(item.delivery);

        return {
          ...item,
          quantity,
          weight,
          sourcePath: entry.sourcePath || getFallbackSourcePath(item),
          unitPrice,
          lineTotal: unitPrice * quantity,
          deliveryDate: deliverySchedule.dateLabel,
          deliveryTime: deliverySchedule.timeLabel,
        };
      })
      .filter(Boolean);
  }, [cartItems]);

  const subtotal = useMemo(
    () => cartProducts.reduce((sum, item) => sum + item.lineTotal, 0),
    [cartProducts],
  );

  const totalItems = useMemo(
    () => cartProducts.reduce((sum, item) => sum + item.quantity, 0),
    [cartProducts],
  );

  const deliveryFee = 0;
  const grandTotal = subtotal + deliveryFee;

  const updateEntry = (itemId, updates) => {
    const currentRawEntry = cartItems[itemId];
    const currentEntry =
      typeof currentRawEntry === "number"
        ? { quantity: Number(currentRawEntry) }
        : currentRawEntry && typeof currentRawEntry === "object"
          ? currentRawEntry
          : { quantity: 0 };

    const nextEntry = {
      ...currentEntry,
      ...updates,
    };

    if (Number(nextEntry.quantity || 0) <= 0) {
      const nextCart = { ...cartItems };
      delete nextCart[itemId];
      syncCart(nextCart);
      return;
    }

    syncCart({
      ...cartItems,
      [itemId]: nextEntry,
    });
  };

  const clearCart = () => syncCart({});

  return (
    <section className="bakery-section !mt-1.5 rounded-xl md:rounded-2xl" data-reveal="up">
      <div className="rounded-[1.9rem] bg-[#f6f3ef] p-4 sm:p-5 lg:p-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-sm font-medium text-[#6f6257]">Home / Cart</div>
            <h2 className="m-0 mt-1 text-2xl font-semibold tracking-tight text-[#1f1f1f] sm:text-[2rem]" data-reveal="up" style={{'--reveal-delay': '0ms'}}>
              Your Cart
            </h2>
            <p className="mt-1 text-sm font-medium text-[#6b6b6b]" data-reveal="up" style={{'--reveal-delay': '40ms'}}>
              {totalItems} item{totalItems === 1 ? "" : "s"} in your order
            </p>
          </div>

          {cartProducts.length > 0 ? (
            <button
              type="button"
              onClick={clearCart}
              className="inline-flex items-center rounded-full border border-[#e1d7ce] bg-white px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#6d5e53] transition hover:border-[#cfbeb2]"
            >
              Clear Cart
            </button>
          ) : null}
        </div>

        {cartProducts.length === 0 ? (
          <div className="grid place-items-center rounded-2xl border border-[#ebdfd3] bg-[#fffaf5] px-4 py-10 text-center">
            <h3 className="m-0 text-xl font-semibold text-[#2b2b2b]">Your cart is empty</h3>
            <p className="mt-2 text-sm text-[#6b6b6b]">Add cakes from menu to see them here.</p>
            <Link
              to="/menu"
              className="mt-4 inline-flex items-center rounded-full border border-[#e02b2b]/25 bg-[#fde8e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#c62828] no-underline transition hover:-translate-y-0.5 hover:border-[#e02b2b]/45"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 xl:grid-cols-[1.58fr_1fr] xl:items-start">
            <div className="overflow-hidden rounded-[1.65rem] border border-[#ddd4cb] bg-white shadow-[0_16px_32px_rgba(0,0,0,0.04)]">
              {cartProducts.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-3 border-b border-[#ebe1d9] p-4 last:border-b-0 sm:grid-cols-[132px_1fr] sm:gap-4 sm:p-5"
                  data-reveal="up"
                  style={{ '--reveal-delay': `${cartProducts.indexOf(item) * 60}ms` }}
                >
                  <Link
                    to={item.sourcePath}
                    className="block overflow-hidden rounded-[1.1rem] bg-[#f6f0eb] no-underline"
                  >
                    <img
                      src={item.imageUrl || fallbackCakeImage}
                      alt={item.name}
                      className="h-[132px] w-full object-cover sm:w-[132px]"
                      loading="eager"
                      onError={(event) => {
                        event.currentTarget.src = fallbackCakeImage;
                      }}
                    />
                  </Link>

                  <div className="grid gap-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={item.sourcePath}
                          className="line-clamp-1 text-[1rem] font-semibold text-[#24211d] no-underline hover:text-[#c62828]"
                        >
                          {item.name}
                        </Link>
                        <p className="m-0 mt-1 text-[0.98rem] font-bold text-[#1f1f1f]">
                          ₹ {item.unitPrice}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => updateEntry(item.id, { quantity: 0 })}
                        className="rounded-full border border-[#f0d0d4] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-[#b24759] transition hover:border-[#e4a7b0]"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-[0.86rem] text-[#2f2924]">
                      <span className="font-semibold">Qty:</span>
                      <div className="inline-flex items-center overflow-hidden rounded-lg border border-[#ff6a77] bg-white text-[#ff233d]">
                        <button
                          type="button"
                          onClick={() => updateEntry(item.id, { quantity: item.quantity - 1 })}
                          className="h-8 w-9 border-r border-[#ffb1b9] text-lg font-bold leading-none transition hover:bg-[#fff2f4]"
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          −
                        </button>
                        <span className="inline-flex min-w-8 items-center justify-center text-sm font-bold text-[#2f2a26]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateEntry(item.id, { quantity: item.quantity + 1 })}
                          className="h-8 w-9 border-l border-[#ffb1b9] text-lg font-bold leading-none transition hover:bg-[#fff2f4]"
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {isWeightSelectableProduct(item) ? (
                      <div className="flex flex-wrap items-center gap-2 text-[0.86rem] text-[#2f2924]">
                        <label htmlFor={`weight-${item.id}`} className="font-semibold">
                          Weight:
                        </label>
                        <select
                          id={`weight-${item.id}`}
                          value={item.weight}
                          onChange={(event) =>
                            updateEntry(item.id, { weight: Number(event.target.value) })
                          }
                          className="rounded-lg border border-[#dfd3c8] bg-white px-3 py-1.5 text-[0.82rem] font-semibold text-[#2d2824] outline-none transition focus:border-[#ff7a84]"
                        >
                          {weightOptions.map((weight) => (
                            <option key={weight} value={weight}>
                              {weight} Kg
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <p className="m-0 text-[0.84rem] font-medium text-[#6b645d]">
                        {getItemMeta(item)}
                      </p>
                    )}

                    <div className="grid gap-1 text-[0.8rem] text-[#655e58] sm:grid-cols-2">
                      <p className="m-0">
                        Deliver to: <strong className="text-[#2b2724]">{deliveryLocation.label}</strong>
                      </p>
                      <p className="m-0 sm:text-right">
                        Delivery by: <strong className="text-[#2b2724]">{item.deliveryDate}</strong>
                      </p>
                      <p className="m-0">
                        Time: <strong className="text-[#2b2724]">{item.deliveryTime}</strong>
                      </p>
                      <p className="m-0 sm:text-right">
                        Line Total: <strong className="text-[#2b2724]">₹ {item.lineTotal}</strong>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="overflow-hidden rounded-[1.55rem] border border-[#ddd4cb] bg-white shadow-[0_16px_32px_rgba(0,0,0,0.04)]">
              <div className="p-5 sm:p-6">
                <h3 className="m-0 text-[1.45rem] font-semibold text-[#24211d]">Order Summary</h3>
                <div className="mt-4 rounded-2xl bg-[#faf6f2] p-3 text-[0.82rem] text-[#645d57]">
                  <div className="font-bold uppercase tracking-[0.08em] text-[#a4554d]">
                    Delivery Location
                  </div>
                  <div className="mt-1 text-[0.92rem] font-semibold text-[#27231f]">
                    {deliveryLocation.label}
                  </div>
                  <div className="mt-1 text-[0.78rem]">{deliveryLocation.details}</div>
                </div>

                <div className="mt-4 space-y-3 text-[0.98rem] text-[#2a2622]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Sub Total</span>
                    <strong>₹{subtotal}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Delivery Charges</span>
                    <strong className="text-[#0d9b4d]">Free</strong>
                  </div>
                  <div className="border-t border-dashed border-[#e4d9cf] pt-3">
                    <div className="flex items-center justify-between text-[1.12rem] font-bold text-[#1f1a17]">
                      <span>Grand Total</span>
                      <span>₹{grandTotal}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#efe4db] bg-[#fffaf6] p-5 sm:p-6">
                <Link
                  to="/custom-cake"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[#ff0015] px-4 py-3.5 text-[0.98rem] font-bold text-white no-underline transition hover:bg-[#dd0012]"
                >
                  Place Order
                </Link>
                <Link
                  to="/menu"
                  className="mt-4 inline-flex w-full items-center justify-center text-[0.94rem] font-semibold text-[#3b74c1] no-underline transition hover:text-[#215ead]"
                >
                  Continue Shopping.
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPage;
