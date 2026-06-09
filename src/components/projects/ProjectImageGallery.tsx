"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProjectImageGallery.module.scss";

interface ProjectImageGalleryProps {
  images: StaticImageData[];
  title: string;
}

interface SlickArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: "prev" | "next";
}

function SlickArrow({ className, style, onClick, direction }: SlickArrowProps) {
  return (
    <button
      type="button"
      className={`${styles.arrow} ${styles[direction]} ${className ?? ""}`}
      style={style}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous image" : "Next image"}
    >
      {direction === "prev" ? (
        <ChevronLeft size={22} />
      ) : (
        <ChevronRight size={22} />
      )}
    </button>
  );
}

export default function ProjectImageGallery({
  images,
  title,
}: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeModal]);

  if (!images.length) return null;

  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: images.length > 1,
    prevArrow: <SlickArrow direction="prev" />,
    nextArrow: <SlickArrow direction="next" />,
  };

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.header}>
          <h2 className={styles.title}>Project Screenshots</h2>
          <p className={styles.hint}>Click any image to view full size</p>
        </div>

        <Slider {...settings} className={styles.slider}>
          {images.map((image, index) => (
            <div key={image.src} className={styles.slide}>
              <button
                type="button"
                className={styles.slideButton}
                onClick={() => setActiveIndex(index)}
                aria-label={`View screenshot ${index + 1} of ${images.length} for ${title}`}
              >
                <div className={styles.imageFrame}>
                  <Image
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    className={styles.slideImage}
                    sizes="(max-width: 768px) 100vw, 900px"
                    priority={index === 0}
                  />
                </div>
                <span className={styles.zoomHint}>
                  <ZoomIn size={16} />
                  View larger
                </span>
              </button>
            </div>
          ))}
        </Slider>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image viewer`}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close image viewer"
            >
              <X size={22} />
            </button>

            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`${title} screenshot ${activeIndex + 1}`}
                className={styles.modalImage}
                sizes="100vw"
                priority
              />
              <p className={styles.modalCaption}>
                {activeIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
