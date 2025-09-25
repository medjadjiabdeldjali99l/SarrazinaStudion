"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ImageCompareProps {
  imageBefore: string;
  imageAfter: string;
  alt: string;
  containerId?: string;
}

export default function ImageCompare({
  imageBefore,
  imageAfter,
  alt,
  containerId = "compare",
}: ImageCompareProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const initImageCompare = () => {
      const container = containerRef.current;
      const slider = sliderRef.current;
      const topImage = topImageRef.current;

      if (!container || !slider || !topImage) return;

      const updateSlider = (x: number) => {
        const rect = container.getBoundingClientRect();
        let offset = x - rect.left;

        const halfSliderWidth = 15;
        offset = Math.max(
          halfSliderWidth,
          Math.min(offset, rect.width - halfSliderWidth)
        );

        const percent = (offset / rect.width) * 100;
        slider.style.left = `${percent}%`;
        topImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      };

      const startDrag = (e: MouseEvent | TouchEvent) => {
        setIsDragging(true);
        const x = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
        updateSlider(x);
      };

      const stopDrag = () => {
        setIsDragging(false);
      };

      const duringDrag = (e: MouseEvent | TouchEvent) => {
        if (!isDragging) return;
        const x = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
        updateSlider(x);
      };

      // Événements souris
      slider.addEventListener("mousedown", startDrag);
      window.addEventListener("mousemove", duringDrag);
      window.addEventListener("mouseup", stopDrag);

      // Événements tactile
      slider.addEventListener("touchstart", startDrag);
      window.addEventListener("touchmove", duringDrag);
      window.addEventListener("touchend", stopDrag);

      // Nettoyage
      return () => {
        slider.removeEventListener("mousedown", startDrag);
        window.removeEventListener("mousemove", duringDrag);
        window.removeEventListener("mouseup", stopDrag);
        slider.removeEventListener("touchstart", startDrag);
        window.removeEventListener("touchmove", duringDrag);
        window.removeEventListener("touchend", stopDrag);
      };
    };

    const cleanup = initImageCompare();
    return cleanup;
  }, [isDragging]);

  return (
    <div
      className="image-compare-container"
      id={containerId}
      ref={containerRef}
    >
      {/* Image avant (en dessous) */}
      <Image
        src={imageBefore}
        alt={`${alt} - Avant`}
        width={800}
        height={600}
        className="imageComare"
      />

      {/* Image après (au dessus avec clip) */}
      <Image
        src={imageAfter}
        alt={`${alt} - Après`}
        width={800}
        height={600}
        className="imageComare image-top"
        ref={topImageRef}
        style={{ clipPath: "inset(0 50% 0 0)" }}
      />

      {/* Slider */}
      <div className="slider" id="slider" ref={sliderRef}></div>
    </div>
  );
}
