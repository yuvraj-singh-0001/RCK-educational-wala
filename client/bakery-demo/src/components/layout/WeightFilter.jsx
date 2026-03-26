import { useEffect, useState } from "react";
import {
  weightFilterOptions,
  getGlobalWeight,
  setGlobalWeight,
  weightUpdatedEvent
} from "../../data/storefrontData";

/**
 * Shared weight filter component that updates and syncs with global state.
 */
function WeightFilter({ className = "" }) {
  const [selectedWeight, setSelectedWeight] = useState(getGlobalWeight());

  useEffect(() => {
    const handleWeightUpdate = (e) => {
      setSelectedWeight(Number(e.detail || 1));
    };

    window.addEventListener(weightUpdatedEvent, handleWeightUpdate);
    window.addEventListener("storage", () => {
      setSelectedWeight(getGlobalWeight());
    });

    return () => {
      window.removeEventListener(weightUpdatedEvent, handleWeightUpdate);
      window.removeEventListener("storage", () => {});
    };
  }, []);

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    setGlobalWeight(weight);
  };

  return (
    <div className={`flex items-center justify-between gap-2 ${className}`}>
      <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#6d5f55] whitespace-nowrap md:hidden">
        Weight
      </span>
      <span className="hidden md:inline text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#6d5f55] whitespace-nowrap">
        Weight Filter
      </span>
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide md:flex-wrap md:overflow-visible flex-1 md:flex-none md:justify-end">
        {weightFilterOptions.map((weight) => (
          <button
            key={weight}
            type="button"
            onClick={() => handleWeightChange(weight)}
            className={[
              "inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-bold transition shrink-0 whitespace-nowrap",
              selectedWeight === weight
                ? "border-[#ff0015] bg-[#ffebed] text-[#c5162f]"
                : "border-[#e2d7ce] bg-white text-[#4b413a] hover:border-[#d0c2b7]",
            ].join(" ")}
          >
            {weight} Kg
          </button>
        ))}
      </div>
    </div>
  );
}

export default WeightFilter;
