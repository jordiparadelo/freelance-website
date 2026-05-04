// Components
import { Curves } from "@/components/ui";

// Styles
import "./styles.scss";
import { getGalleryImages } from "@/lib/db";
import GallerySlideShow from "./GallerySlideShow";

const Gallery = async () => {
  const images = await getGalleryImages();

  return (
    <section id="gallery" className="gallery">
      <Curves fill="var(--background-color--base)" orientation="top" />

      <GallerySlideShow images={images} />

      <Curves fill="var(--background-color--base)" orientation="bottom" />
    </section>
  );
};

export default Gallery;
