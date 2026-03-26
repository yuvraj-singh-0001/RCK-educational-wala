import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { productCatalog } from "../../data/storefrontData";

const deliveryLocationStorageKey = "bakery-delivery-location";

const desktopCategories = [
  { label: "Cakes", to: "/menu?category=Cakes" },
  { label: "Gourmet Cakes", to: "/menu?category=Gourmet%20Cakes" },
  { label: "Theme Cakes", to: "/menu?type=Theme%20Cakes" },
  { label: "By Relationship", to: "/menu?occasion=Relationship" },
  { label: "Desserts", to: "/menu?category=Desserts" },
  { label: "Birthday", to: "/menu?occasion=Birthday" },
  { label: "Hampers", to: "/menu?category=Combos", badge: "New" },
  { label: "Anniversary", to: "/menu?occasion=Anniversary" },
  { label: "Occasions", to: "/menu?occasion=Occasions" },
  { label: "Customized Cakes", to: "/custom-cake" },
];

const mobileMenuLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Custom Cake", to: "/custom-cake" },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Portfolio", to: "/portfolio", badge: "Demo" },
  { label: "Contact", to: "/contact" },
  { label: "Track Order", to: "/track-order" },
];

const quickActions = [
  { label: "Track Order", to: "/track-order", icon: PercentIcon },
  { label: "Cart", to: "/cart", icon: CartIcon },
  { label: "Login/Signup", to: "/contact", icon: UserIcon },
];

function PublicHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [deliveryLocation, setDeliveryLocation] = useState({
    label: "Select delivery location",
    details: "Add address or use current location",
    source: "manual",
  });
  const [manualLocation, setManualLocation] = useState("");
  const [locationMessage, setLocationMessage] = useState("");
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const locationPanelRef = useRef(null);
  const searchPanelRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const searchSuggestions = useMemo(() => {
    const normalizedTerm = searchText.trim().toLowerCase();
    if (!normalizedTerm) return [];
    return productCatalog
      .filter((item) => {
        const searchableText = [item.name, item.category, item.flavour, item.type, item.occasion]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return searchableText.includes(normalizedTerm);
      })
      .slice(0, 8);
  }, [searchText]);

  const saveDeliveryLocation = (nextLocation) => {
    setDeliveryLocation(nextLocation);
    localStorage.setItem(deliveryLocationStorageKey, JSON.stringify(nextLocation));
    window.dispatchEvent(new CustomEvent("bakery-location-updated"));
  };

  useEffect(() => {
    const readCartCount = () => {
      try {
        const parsedCart = JSON.parse(localStorage.getItem("bakery-cart") || "{}");
        const totalItems = Object.values(parsedCart).reduce(
          (sum, value) =>
            sum + Number(typeof value === "object" && value !== null ? value.quantity || 0 : value || 0),
          0,
        );
        setCartCount(totalItems);
      } catch {
        setCartCount(0);
      }
    };
    readCartCount();
    window.addEventListener("storage", readCartCount);
    window.addEventListener("bakery-cart-updated", readCartCount);
    return () => {
      window.removeEventListener("storage", readCartCount);
      window.removeEventListener("bakery-cart-updated", readCartCount);
    };
  }, []);

  useEffect(() => {
    const readLocation = () => {
      try {
        const storedLocation = JSON.parse(localStorage.getItem(deliveryLocationStorageKey) || "null");
        if (storedLocation?.label) {
          setDeliveryLocation(storedLocation);
          setManualLocation(storedLocation.label);
          return;
        }
      } catch {}
      setDeliveryLocation({
        label: "Select delivery location",
        details: "Add address or use current location",
        source: "manual",
      });
      setManualLocation("");
    };
    readLocation();
    window.addEventListener("storage", readLocation);
    window.addEventListener("bakery-location-updated", readLocation);
    return () => {
      window.removeEventListener("storage", readLocation);
      window.removeEventListener("bakery-location-updated", readLocation);
    };
  }, []);

  useEffect(() => {
    const activeSearch = new URLSearchParams(location.search).get("q") || "";
    setSearchText(activeSearch);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!isLocationOpen) return undefined;
    const handleOutsideClick = (event) => {
      if (!locationPanelRef.current?.contains(event.target)) setIsLocationOpen(false);
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsLocationOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isLocationOpen]);

  useEffect(() => {
    if (!isSearchOpen) return undefined;
    const handleOutsideClick = (event) => {
      if (!searchPanelRef.current?.contains(event.target)) setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSearchOpen]);

  useEffect(() => {
    if (!isMobileSearchOpen) return undefined;
    const handleOutsideClick = (event) => {
      if (!mobileSearchRef.current?.contains(event.target)) setIsMobileSearchOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileSearchOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = () => {
    const trimmedSearch = searchText.trim();
    setIsSearchOpen(false);
    setIsMobileSearchOpen(false);
    if (!trimmedSearch) { navigate("/menu"); return; }
    navigate(`/menu?q=${encodeURIComponent(trimmedSearch)}`);
  };

  const handleSearchSuggestionSelect = (item) => {
    setSearchText(item.name);
    setIsSearchOpen(false);
    setIsMobileSearchOpen(false);
    navigate(`/menu?q=${encodeURIComponent(item.name)}#product-${item.id}`);
  };

  const handleManualLocationSave = () => {
    const nextLabel = manualLocation.trim();
    if (!nextLabel) { setLocationMessage("Please enter your delivery area."); return; }
    saveDeliveryLocation({ label: nextLabel, details: "Manual delivery address selected", source: "manual" });
    setLocationMessage("Delivery location updated.");
    setIsLocationOpen(false);
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) { setLocationMessage("Current location is not supported on this device."); return; }
    setIsDetectingLocation(true);
    setLocationMessage("Detecting your current location...");
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}`,
            { headers: { Accept: "application/json" } },
          );
          const data = await response.json();
          const address = data.address || {};
          const area = address.suburb || address.neighbourhood || address.city_district || address.town || address.village || "Current Location";
          const city = address.city || address.town || address.state_district || address.state || "";
          const displayLabel = city && city !== area ? `${area}, ${city}` : area;
          saveDeliveryLocation({ label: displayLabel, details: "Using your current device location", source: "current" });
          setManualLocation(displayLabel);
          setLocationMessage("Current location selected.");
          setIsLocationOpen(false);
        } catch {
          const fallbackLabel = `Lat ${coords.latitude.toFixed(3)}, Lon ${coords.longitude.toFixed(3)}`;
          saveDeliveryLocation({ label: fallbackLabel, details: "Using detected current location", source: "current" });
          setManualLocation(fallbackLabel);
          setLocationMessage("Current location selected.");
          setIsLocationOpen(false);
        } finally {
          setIsDetectingLocation(false);
        }
      },
      () => { setIsDetectingLocation(false); setLocationMessage("Location permission denied or unavailable."); },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 },
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_7px_18px_rgba(0,0,0,0.08)]">

        {/* ─────────────────────────────────────────────
            DESKTOP HEADER (xl and above) — UNCHANGED
        ───────────────────────────────────────────── */}
        <div className="hidden xl:block">
          <div className="bg-[#ff0015] text-white">
            <div className="mx-auto flex w-full max-w-[1900px] flex-col gap-2.5 px-4 py-2 sm:px-6 lg:px-10 xl:flex-row xl:items-center xl:gap-3 xl:py-[8px]">
              <div className="flex items-center justify-between gap-2.5 xl:min-w-[250px] xl:justify-start">
                <Link to="/" className="shrink-0 text-white no-underline">
                  <span
                    className="block text-[1.8rem] font-black leading-none tracking-[-0.06em] sm:text-[2.25rem]"
                    style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
                  >
                    yourbrands
                  </span>
                </Link>
              </div>

              {/* Desktop Location */}
              <div
                ref={locationPanelRef}
                className="relative flex items-center gap-1.5 text-[0.8rem] font-semibold sm:text-[0.9rem] xl:min-w-[220px] xl:flex-1 xl:justify-start"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12">
                  <PinIcon />
                </span>
                <button
                  type="button"
                  onClick={() => { setLocationMessage(""); setIsLocationOpen((c) => !c); }}
                  className="inline-flex max-w-[240px] items-center gap-1 rounded-2xl px-2 py-1 text-left text-white transition hover:bg-white/10"
                  aria-expanded={isLocationOpen}
                  aria-label="Select delivery location"
                >
                  <span className="max-w-[200px] truncate">
                    <span className="block text-[0.64rem] font-bold uppercase tracking-[0.08em] text-white/75">Delivering To</span>
                    <span className="block truncate text-[0.8rem] font-semibold text-white sm:text-[0.9rem]">{deliveryLocation.label}</span>
                  </span>
                  <ChevronDownIcon />
                </button>
                {isLocationOpen && <LocationPanel onClose={() => setIsLocationOpen(false)} deliveryLocation={deliveryLocation} manualLocation={manualLocation} setManualLocation={setManualLocation} locationMessage={locationMessage} isDetectingLocation={isDetectingLocation} handleUseCurrentLocation={handleUseCurrentLocation} handleManualLocationSave={handleManualLocationSave} />}
              </div>

              {/* Desktop Search */}
              <div ref={searchPanelRef} className="relative w-full xl:mx-auto xl:max-w-[540px] xl:flex-[1.3]">
                <label htmlFor="bakery-search-input" className="flex min-h-10 w-full items-center gap-2 rounded-2xl bg-white px-3.5 text-[#191919] shadow-[0_8px_22px_rgba(0,0,0,0.12)]">
                  <button type="button" onClick={handleSearchSubmit} className="inline-flex items-center justify-center rounded-full p-0.5 text-[#111111]" aria-label="Search products">
                    <SearchIcon />
                  </button>
                  <input
                    id="bakery-search-input"
                    type="text"
                    value={searchText}
                    onFocus={() => setIsSearchOpen(true)}
                    onChange={(e) => { setSearchText(e.target.value); setIsSearchOpen(true); }}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleSearchSubmit(); } }}
                    placeholder="Search For Cakes, Occasion, Flavour And More..."
                    className="w-full border-none bg-transparent text-[0.8rem] font-medium text-[#141414] outline-none placeholder:text-[#333333] sm:text-[0.88rem]"
                  />
                </label>
                {isSearchOpen && (
                  <SearchDropdown
                    searchText={searchText}
                    suggestions={searchSuggestions}
                    onSelect={handleSearchSuggestionSelect}
                  />
                )}
              </div>

              {/* Desktop Quick Actions */}
              <nav className="flex items-start justify-end gap-1.5 xl:flex-1 xl:gap-2" aria-label="Quick actions">
                {quickActions.map((item) => {
                  const Icon = item.icon;
                  const isCart = item.label === "Cart";
                  return (
                    <NavLink key={item.label} to={item.to} className="group flex min-w-[64px] flex-col items-center gap-0.5 text-center text-white no-underline">
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/18 bg-white/8 transition duration-200 group-hover:-translate-y-0.5 group-hover:bg-white/14">
                        <Icon />
                        {isCart && cartCount > 0 && (
                          <span className="absolute -right-1 -top-1 inline-flex min-w-4 items-center justify-center rounded-full bg-[#fff1f3] px-1 text-[0.62rem] font-extrabold leading-4 text-[#db123d]">{cartCount}</span>
                        )}
                      </span>
                      <span className="text-[0.64rem] font-semibold leading-tight xl:text-[0.75rem]">{item.label}</span>
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Desktop Categories Nav */}
          <div className="overflow-hidden bg-white text-[#121212] border-b border-[#e9e9e9]">
            <div className="mx-auto flex max-w-[1900px] items-center justify-between gap-4 overflow-x-auto whitespace-nowrap px-4 py-2.5 sm:px-6 lg:px-10 xl:gap-5">
              {desktopCategories.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className="group inline-flex shrink-0 items-center gap-1 text-[0.84rem] font-semibold text-[#111111] no-underline transition hover:text-[#ff0015] xl:text-[0.92rem]"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded-full bg-[#ff0015] px-2 py-0.5 text-[0.68rem] font-bold leading-none text-white">{item.badge}</span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            MOBILE HEADER (below xl) — BAKINGO STYLE
        ───────────────────────────────────────────── */}
        <div className="xl:hidden">
          {/* Row 1: Hamburger | Logo | Search + Cart + User */}
          <div className="bg-[#ff0015] text-white">
            <div className="flex items-center justify-between px-3 py-2.5 sm:px-5">
              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </button>

              {/* Logo - Center */}
              <Link to="/" className="text-white no-underline">
                <span
                  className="block text-[1.9rem] font-black leading-none tracking-[-0.06em]"
                  style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
                >
                  yourbrands
                </span>
              </Link>

              {/* Right icons: Search + Cart + User */}
              <div className="flex items-center gap-1">
                {/* Search icon */}
                <button
                  type="button"
                  onClick={() => setIsMobileSearchOpen((c) => !c)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                  aria-label="Search"
                >
                  <SearchIcon className="h-5 w-5" />
                </button>

                {/* Cart icon */}
                <NavLink
                  to="/cart"
                  className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10 no-underline"
                  aria-label="Cart"
                >
                  <CartIcon />
                  {cartCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 inline-flex min-w-[18px] items-center justify-center rounded-full bg-white px-1 text-[0.58rem] font-extrabold leading-[18px] text-[#db123d]">
                      {cartCount}
                    </span>
                  )}
                </NavLink>

                {/* User icon */}
                <NavLink
                  to="/contact"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10 no-underline"
                  aria-label="Login/Signup"
                >
                  <UserIcon />
                </NavLink>
              </div>
            </div>

            {/* Row 2: Location bar */}
            <div
              ref={locationPanelRef}
              className="relative border-t border-white/15 px-3 py-2 sm:px-5"
            >
              <button
                type="button"
                onClick={() => { setLocationMessage(""); setIsLocationOpen((c) => !c); }}
                className="flex w-full items-center gap-2 text-left"
                aria-expanded={isLocationOpen}
                aria-label="Select delivery location"
              >
                <PinIcon />
                <div className="flex-1 min-w-0">
                  <span className="block truncate text-[0.82rem] font-semibold text-white">
                    {deliveryLocation.label}
                  </span>
                </div>
                <ChevronDownIcon />
              </button>

              {isLocationOpen && (
                <div className="absolute left-3 right-3 top-full z-30 mt-1">
                  <LocationPanel
                    onClose={() => setIsLocationOpen(false)}
                    deliveryLocation={deliveryLocation}
                    manualLocation={manualLocation}
                    setManualLocation={setManualLocation}
                    locationMessage={locationMessage}
                    isDetectingLocation={isDetectingLocation}
                    handleUseCurrentLocation={handleUseCurrentLocation}
                    handleManualLocationSave={handleManualLocationSave}
                  />
                </div>
              )}
            </div>

            {/* Row 3: Mobile Search bar (expandable) */}
            {isMobileSearchOpen && (
              <div ref={mobileSearchRef} className="border-t border-white/15 px-3 pb-3 pt-2 sm:px-5">
                <div className="relative">
                  <label
                    htmlFor="mobile-search-input"
                    className="flex min-h-[42px] w-full items-center gap-2 rounded-2xl bg-white px-3.5 text-[#191919] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                  >
                    <button type="button" onClick={handleSearchSubmit} className="shrink-0 text-[#111]" aria-label="Search">
                      <SearchIcon />
                    </button>
                    <input
                      id="mobile-search-input"
                      type="text"
                      autoFocus
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleSearchSubmit(); } }}
                      placeholder="Search cakes, flavours, occasions..."
                      className="w-full border-none bg-transparent text-[0.82rem] font-medium text-[#141414] outline-none placeholder:text-[#555]"
                    />
                    <button type="button" onClick={() => setIsMobileSearchOpen(false)} className="shrink-0 text-[#555]" aria-label="Close search">
                      <CloseIcon />
                    </button>
                  </label>

                  {searchText.trim().length > 0 && searchSuggestions.length > 0 && (
                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 overflow-hidden rounded-2xl border border-[#edded8] bg-white shadow-[0_18px_36px_rgba(0,0,0,0.2)]">
                      <div className="max-h-[260px] overflow-y-auto py-1">
                        {searchSuggestions.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleSearchSuggestionSelect(item)}
                            className="grid w-full gap-0.5 px-4 py-2.5 text-left transition hover:bg-[#fff3f4]"
                          >
                            <span className="line-clamp-1 text-[0.84rem] font-semibold text-[#26211c]">{item.name}</span>
                            <span className="text-[0.74rem] font-medium text-[#7a6e66]">{item.category}{item.type ? ` • ${item.type}` : ""}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────
          MOBILE SIDE DRAWER (Left slide-in)
      ───────────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        className={[
          "xl:hidden fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={[
          "xl:hidden fixed left-0 top-0 z-[70] h-full w-[80vw] max-w-[320px] bg-white shadow-[4px_0_30px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between bg-[#ff0015] px-4 py-3.5">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white no-underline"
          >
            <span
              className="block text-[1.7rem] font-black leading-none tracking-[-0.06em]"
              style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
            >
              yourbrands
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Navigation Links */}
          <nav aria-label="Main navigation" className="py-2">
            {mobileMenuLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "flex items-center justify-between px-5 py-3.5 text-[0.92rem] font-semibold no-underline transition",
                    isActive ? "bg-[#fff0f1] text-[#ff0015]" : "text-[#1a1a1a] hover:bg-[#fff7f7] hover:text-[#ff0015]",
                  ].join(" ")
                }
                end={item.to === "/"}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="rounded-full bg-[#ff0015] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Divider */}
          <div className="mx-5 border-t border-[#f0e8e8]" />

          {/* All Categories */}
          <div className="px-5 pb-2 pt-4">
            <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#b14a55]">
              All Categories
            </p>
            <nav aria-label="Product categories">
              {desktopCategories.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-[0.88rem] font-semibold text-[#1a1a1a] no-underline transition hover:text-[#ff0015] border-b border-[#f5eeee] last:border-0"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#ff0015] text-[0.7rem]">✦</span>
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="rounded-full bg-[#ff0015] px-2 py-0.5 text-[0.65rem] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-[#ccc] text-lg leading-none">+</span>
                  </div>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-[#f0e8e8] px-5 py-4">
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff0015] px-4 py-3 text-[0.85rem] font-bold text-white no-underline transition hover:bg-[#df0013]"
          >
            <UserIcon />
            Login / Signup
          </NavLink>
        </div>
      </div>
    </>
  );
}

/* ─── Shared Sub-components ─── */

function LocationPanel({ onClose, deliveryLocation, manualLocation, setManualLocation, locationMessage, isDetectingLocation, handleUseCurrentLocation, handleManualLocationSave }) {
  return (
    <div className="rounded-3xl bg-white p-4 text-[#191919] shadow-[0_18px_40px_rgba(0,0,0,0.22)] ring-1 ring-black/5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#b14a55]">Delivery Location</p>
          <h3 className="m-0 mt-1 text-[1rem] font-semibold text-[#1f1f1f]">Where should we deliver?</h3>
          <p className="m-0 mt-1 text-[0.78rem] text-[#6d6762]">Set your area manually or use your current location.</p>
        </div>
        <button type="button" onClick={onClose} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#eadfd5] bg-white text-[#6b625b]" aria-label="Close location panel">
          <CloseIcon />
        </button>
      </div>
      <div className="mt-4 rounded-2xl border border-[#efe4da] bg-[#fff8f2] p-3">
        <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[#9b6a48]">Selected Location</div>
        <div className="mt-1 text-[0.92rem] font-semibold text-[#2f2a26]">{deliveryLocation.label}</div>
        <div className="mt-0.5 text-[0.78rem] text-[#726963]">{deliveryLocation.details}</div>
      </div>
      <button type="button" onClick={handleUseCurrentLocation} disabled={isDetectingLocation} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff0015] px-4 py-3 text-[0.82rem] font-bold text-white transition hover:bg-[#df0013] disabled:cursor-not-allowed disabled:bg-[#f27a84]">
        <PinIcon />
        {isDetectingLocation ? "Detecting Current Location..." : "Use Current Location"}
      </button>
      <div className="mt-4">
        <label htmlFor="location-input" className="mb-1.5 block text-[0.76rem] font-bold uppercase tracking-[0.08em] text-[#7b5d49]">Enter Delivery Area</label>
        <input id="location-input" type="text" value={manualLocation} onChange={(e) => setManualLocation(e.target.value)} placeholder="Ex: Indirapuram, Ghaziabad" className="w-full rounded-2xl border border-[#e6dbd1] bg-white px-3.5 py-3 text-[0.86rem] font-medium text-[#191919] outline-none transition placeholder:text-[#9a928b] focus:border-[#ff7a84]" />
        <button type="button" onClick={handleManualLocationSave} className="mt-2 inline-flex w-full items-center justify-center rounded-2xl border border-[#e2d7ce] bg-white px-4 py-3 text-[0.8rem] font-bold text-[#332d29] transition hover:border-[#cdbdb0]">
          Save Delivery Location
        </button>
      </div>
      {locationMessage && <p className="m-0 mt-3 text-[0.78rem] font-medium text-[#7a6357]">{locationMessage}</p>}
    </div>
  );
}

function SearchDropdown({ searchText, suggestions, onSelect }) {
  return (
    <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-[#edded8] bg-white shadow-[0_18px_36px_rgba(0,0,0,0.2)]">
      {searchText.trim().length === 0 ? (
        <div className="px-4 py-3 text-[0.8rem] font-medium text-[#756b64]">Type to search cakes, flavours, occasions...</div>
      ) : suggestions.length === 0 ? (
        <div className="px-4 py-3 text-[0.8rem] font-medium text-[#756b64]">No matching items found.</div>
      ) : (
        <div className="max-h-[320px] overflow-y-auto py-1">
          {suggestions.map((item) => (
            <button key={item.id} type="button" onClick={() => onSelect(item)} className="grid w-full gap-0.5 px-4 py-2.5 text-left transition hover:bg-[#fff3f4]">
              <span className="line-clamp-1 text-[0.84rem] font-semibold text-[#26211c]">{item.name}</span>
              <span className="text-[0.74rem] font-medium text-[#7a6e66]">{item.category}{item.type ? ` • ${item.type}` : ""}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Icons ─── */
function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s6-5.7 6-11a6 6 0 10-12 0c0 5.3 6 11 6 11z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="11" cy="11" r="6.6" />
      <path d="M20 20l-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}
function PercentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7" strokeLinecap="round" />
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="16" r="2.5" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 5h2l2.2 9.2a1 1 0 001 .8h8.9a1 1 0 001-.76L21 8H7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19a7 7 0 0114 0" strokeLinecap="round" />
    </svg>
  );
}

export default PublicHeader;