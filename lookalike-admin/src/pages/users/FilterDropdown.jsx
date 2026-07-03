import React, { useState, useRef, useEffect } from "react";
import * as Slider from "@radix-ui/react-slider";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TiArrowSortedDown } from "react-icons/ti";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const MEMBERSHIP_STATUSES = [
  { title: "All", key: "all" },
  { title: "Free Trial", key: "free_trial" },
  { title: "Trial Expired", key: "trial_expired" },
  { title: "Subscribed", key: "subscribed" },
  { title: "Never Subscribed", key: "never_subscribed" },
];

const GENDERS = [
  { title: "Women", key: "women" },
  { title: "Men", key: "men" },
  { title: "Everyone", key: "everyone" },
];

const DEFAULT_FILTERS = {
  membershipStatus: "all",
  minAge: 18,
  maxAge: 80,
  startDate: null,
  endDate: null,
  gender: "everyone",
};

// "YYYY-MM-DD" (from <input type="date">) -> full ISO string, anchored to
// UTC midnight so the selected calendar day never shifts with local tz.
function toISODate(dateStr) {
  if (!dateStr) return null;
  return new Date(`${dateStr}T00:00:00.000Z`).toISOString();
}

// ISO string -> "YYYY-MM-DD" so we can pre-fill <input type="date">.
function toInputDate(isoStr) {
  if (!isoStr) return "";
  return isoStr.slice(0, 10);
}

export default function FilterDropdown({ onApply, initialFilters = {} }) {
  const merged = { ...DEFAULT_FILTERS, ...initialFilters };

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Form state
  const [ageRange, setAgeRange] = useState([merged.minAge, merged.maxAge]);
  const [startDate, setStartDate] = useState(toInputDate(merged.startDate));
  const [endDate, setEndDate] = useState(toInputDate(merged.endDate));
  const [selectedStatus, setSelectedStatus] = useState(merged.membershipStatus);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState(merged.gender);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsStatusDropdownOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // const handleReset = () => {
  //   setAgeRange([DEFAULT_FILTERS.minAge, DEFAULT_FILTERS.maxAge]);
  //   setStartDate("");
  //   setEndDate("");
  //   setSelectedStatus(DEFAULT_FILTERS.membershipStatus);
  //   setSelectedGender(DEFAULT_FILTERS.gender);
  //   setIsOpen(false);
  //   setIsStatusDropdownOpen(false);
  // };

  const handleApply = () => {
    const filters = {
      membershipStatus: selectedStatus,
      minAge: ageRange[0],
      maxAge: ageRange[1],
      startDate: toISODate(startDate),
      endDate: toISODate(endDate),
      gender: selectedGender,
    };
    onApply?.(filters);
    setIsOpen(false);
    setIsStatusDropdownOpen(false);
  };

  const handleReset = () => {
    setAgeRange([DEFAULT_FILTERS.minAge, DEFAULT_FILTERS.maxAge]);
    setStartDate("");
    setEndDate("");
    setSelectedStatus(DEFAULT_FILTERS.membershipStatus);
    setSelectedGender(DEFAULT_FILTERS.gender);

    onApply?.({
      ...DEFAULT_FILTERS,
      startDate: null,
      endDate: null,
    });

    setIsOpen(false);
    setIsStatusDropdownOpen(false);
  };

  const selectedStatusTitle =
    MEMBERSHIP_STATUSES.find((s) => s.key === selectedStatus)?.title ?? "All";

  return (
    <div
      className="relative inline-block text-left font-sans"
      ref={containerRef}
    >
      <button
        type="button"
        className="custom-shadow rounded-[12px] h-[43px] w-[43px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/filter-button-icon.png"
          alt="filter-button-icon"
          width={53}
          height={53}
          className="w-full h-full"
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-[480px] p-8 rounded-[32px] overflow-hidden custom-shadow"
          style={{ background: "white" }}
        >
          <img
            src="/blue-glow.svg"
            alt="blue-glow"
            className="w-[100%] absolute top-0 right-0 z-0 pointer-events-none opacity-30"
          />
          <img
            src="/purple-glow.svg"
            alt="blue-glow"
            className="w-[100%] absolute bottom-0 left-0 z-0 pointer-events-none opacity-20"
          />

          {/* Header */}
          <div className="flex items-center justify-between mb-4 relative z-10">
            <h2 className="text-[24px] font-semibold text-gray-900 tracking-tight leading-none">
              Filter
            </h2>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsStatusDropdownOpen(false);
              }}
            >
              <img src="/close.png" alt="close" width={22} height={22} />
            </button>
          </div>

          <div className="w-full h-px bg-[#C1D2EB] mb-4 relative z-10" />

          {/* Age Range */}
          <div className="mb-5 relative z-10">
            <label className="block text-xs font-semibold text-gray-900 mb-2">
              Age Range:
            </label>
            <div className="px-1">
              <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5 mb-3"
                value={ageRange}
                onValueChange={setAgeRange}
                max={100}
                min={0}
                step={1}
                minStepsBetweenThumbs={1}
              >
                <Slider.Track className="bg-[#B5C5EE] relative grow rounded-full h-[3px]">
                  <Slider.Range className="absolute bg-[#6578E5] rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb
                  className="block w-4 h-4 bg-[#6578E5] rounded-full border-[6px] border-[#CBD5FB] box-content focus:outline-none hover:scale-110 transition-transform shadow-sm"
                  aria-label="Min Age"
                />
                <Slider.Thumb
                  className="block w-4 h-4 bg-[#6578E5] rounded-full border-[6px] border-[#CBD5FB] box-content focus:outline-none hover:scale-110 transition-transform shadow-sm"
                  aria-label="Max Age"
                />
              </Slider.Root>
              <div className="flex justify-between text-sm font-medium text-gray-900">
                <span>{ageRange[0]}</span>
                <span>{ageRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="flex gap-4 mb-5 relative z-10">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-900 mb-2">
                Starting Date
              </label>
              <input
                type="date"
                value={startDate}
                max={endDate || undefined}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-[#5473E3] outline-none placeholder:text-gray-400 text-gray-700 text-sm custom-shadow"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-900 mb-2">
                Ending Date
              </label>
              <input
                type="date"
                value={endDate}
                min={startDate || undefined}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-[#5473E3] outline-none placeholder:text-gray-400 text-gray-700 text-sm custom-shadow"
              />
            </div>
          </div>

          {/* Membership Status (single-select) */}
          <div className="mb-5 relative z-40">
            <label className="block text-xs font-semibold text-gray-900 mb-2">
              Membership Status
            </label>
            <button
              type="button"
              onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
              className="w-full flex items-center justify-between pl-5 pr-4 py-3.5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-[#5473E3] outline-none text-gray-900 custom-shadow text-sm"
            >
              <span>{selectedStatusTitle}</span>
              <TiArrowSortedDown className="w-6 h-6 text-gray-800" />
            </button>

            {isStatusDropdownOpen && (
              <div className="absolute w-full mt-2 bg-white z-50 rounded-2xl shadow-lg p-2 border border-gray-100 max-h-48 overflow-y-auto">
                {MEMBERSHIP_STATUSES.map((status) => (
                  <button
                    type="button"
                    key={status.key}
                    onClick={() => {
                      setSelectedStatus(status.key);
                      setIsStatusDropdownOpen(false);
                    }}
                    className="w-full flex items-center justify-between gap-3 p-2.5 hover:bg-gray-50 rounded-xl cursor-pointer text-left"
                  >
                    <span className="text-gray-800 text-sm">
                      {status.title}
                    </span>
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center transition-colors",
                        selectedStatus === status.key
                          ? "border-[#5473E3] bg-[#5473E3]"
                          : "border-gray-400 bg-white",
                      )}
                    >
                      {selectedStatus === status.key && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Gender (single-select) */}
          <div className="mb-8 relative z-10">
            <label className="block text-xs font-semibold text-gray-900 mb-2">
              Gender
            </label>
            <div className="flex gap-4">
              {GENDERS.map((gender) => (
                <button
                  type="button"
                  key={gender.key}
                  onClick={() => setSelectedGender(gender.key)}
                  className={cn(
                    "flex-1 h-[48px] px-4 rounded-[12px] font-semibold text-xs transition-colors custom-shadow text-center",
                    selectedGender === gender.key
                      ? "gradient-bg text-white"
                      : "bg-white text-gray-900 hover:bg-gray-50",
                  )}
                >
                  {gender.title}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 relative z-20">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 h-[49px] text-base font-medium px-6 rounded-[12px] bg-white text-gray-900"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="flex-1 h-[49px] text-base font-medium px-6 rounded-[12px] bg-[#5473E3] text-white"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
