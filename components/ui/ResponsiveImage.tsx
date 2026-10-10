import React from "react";
import Image from "next/image";
import type { ImageSlot } from "@/content/site";

export interface ResponsiveImageProps {
  slot: ImageSlot;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ResponsiveImage({
  slot,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  imageClassName = "object-cover",
  priority = false,
}: ResponsiveImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: slot.aspectRatio }}
    >
      <Image
        src={slot.src}
        alt={slot.alt}
        width={slot.width}
        height={slot.height}
        sizes={sizes}
        priority={priority}
        style={slot.objectPosition ? { objectPosition: slot.objectPosition } : undefined}
        className={`w-full h-full transition-transform duration-500 ease-out ${imageClassName}`}
      />
    </div>
  );
}

export default ResponsiveImage;
