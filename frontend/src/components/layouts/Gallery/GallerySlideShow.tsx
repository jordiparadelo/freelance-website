"use client";

import Image from "next/image";
import { useRef } from "react";
import { formatStrapiMediaUrl } from "@/lib/db";
import type { GalleryImage } from "@/lib/db/types";

const GallerySlideShow = ({ images }: { images: GalleryImage[] }) => {
  const componentRef = useRef(null);

  return (
    <div className="gallery__slideshow" ref={componentRef}>
      {images.map((image) => {
        const imageSrc = formatStrapiMediaUrl(image.src.url);
        return (
          <figure className="gallery__slide" key={image.id}>
            <Image
              src={imageSrc}
              alt={image.src.alternativeText || ""}
              width={image.src.width}
              height={image.src.height}
            />
          </figure>
        );
      })}
    </div>
  );
};

export default GallerySlideShow;
