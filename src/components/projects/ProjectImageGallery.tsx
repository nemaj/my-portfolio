"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ProjectImageGallery.module.scss";

interface ProjectImageGalleryProps {
  images: StaticImageData[];
  title: string;
}

export default function ProjectImageGallery({
  images,
  title,
}: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeModal, showPrev, showNext]);

  if (!images.length) return null;

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.header}>
          <h2 className={styles.title}>Project Screenshots</h2>
          <p className={styles.hint}>
            {images.length} screenshot{images.length === 1 ? "" : "s"} — click any
            image to view full size
          </p>
        </div>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={styles.gridItem}
              onClick={() => setActiveIndex(index)}
              aria-label={`View screenshot ${index + 1} of ${images.length} for ${title}`}
            >
              <div
                className={styles.imageFrame}
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              >
                <Image
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className={styles.gridImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                <span className={styles.overlay}>
                  <ZoomIn size={20} />
                </span>
              </div>
            </button>
          ))}
        </div>
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

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.navPrev}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.navNext}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              className={styles.modalContent}
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`${title} screenshot ${activeIndex + 1}`}
                width={images[activeIndex].width}
                height={images[activeIndex].height}
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
