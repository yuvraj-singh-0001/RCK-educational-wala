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
    <div className={`flex flex-wrap items-center justify-end gap-2 ${className}`}>
      <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#6d5f55]">
        Weight Filter
      </span>
      {weightFilterOptions.map((weight) => (
        <button
          key={weight}
          type="button"
          onClick={() => handleWeightChange(weight)}
          className={[
            "inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-bold transition",
            selectedWeight === weight
              ? "border-[#ff0015] bg-[#ffebed] text-[#c5162f]"
              : "border-[#e2d7ce] bg-white text-[#4b413a] hover:border-[#d0c2b7]",
          ].join(" ")}
        >
          {weight} Kg
        </button>
      ))}
    </div>
  );
}

export default WeightFilter;
