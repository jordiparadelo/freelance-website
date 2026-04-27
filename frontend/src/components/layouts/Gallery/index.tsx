// Components
import { Curves } from "@/components/ui";

// Styles
import "./styles.scss";
import { getStrapiData } from "@/lib/db";
import GallerySlideShow from "./GallerySlideShow";

const Gallery = async () => {
  const query =
    "/api/gallery-section?fields[0]=id&populate[images][populate][src][fields][0]=url&populate[images][populate][src][fields][1]=width&populate[images][populate][src][fields][2]=height&populate[images][populate][src][fields][3]=alternativeText&status=published";
  const {
    data: { images },
  } = await getStrapiData(query);

  const GALLERY_IMAGES = images.map(
    (image: { id: string; src: string }) => image.src,
  );

  return (
    <section id="gallery" className="gallery">
      <Curves fill="var(--background-color--base)" orientation="top" />

      <GallerySlideShow images={GALLERY_IMAGES} />

      <Curves fill="var(--background-color--base)" orientation="bottom" />
    </section>
  );
};

export default Gallery;
