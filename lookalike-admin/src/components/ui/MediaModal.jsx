import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

import "./swiper.css";

// modules
import { Navigation, Zoom, Keyboard } from "swiper/modules";
import { IoClose } from "react-icons/io5";

const MediaModal = ({ media = [], onclose }) => {
  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
      {/* Close Button */}
      <button
        type="button"
        onClick={onclose}
        aria-label="Close preview"
        className="absolute top-5 right-5 z-50 bg-white/90 hover:bg-white p-2 rounded-full shadow"
      >
        <IoClose size={22} />
      </button>

      {/* Slider Container */}
      <div className="w-full max-w-6xl h-[85vh] flex items-center justify-center">
        <Swiper
          navigation
          zoom
          keyboard={{ enabled: true }}
          modules={[Navigation, Zoom, Keyboard]}
          className="w-full h-full"
        >
          {media.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-zoom-container flex items-center justify-center">
                <img
                  src={src}
                  alt={`preview-${i}`}
                  loading="lazy"
                  className="max-h-[80vh] max-w-full object-contain rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default MediaModal;
