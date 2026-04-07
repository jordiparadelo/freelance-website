import type { Project } from "@/lib/actions";

export interface SerializedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SerializedProject extends Omit<Project, "image" | "gallery"> {
  image: SerializedImage;
  gallery: SerializedImage[];
}

function toImageJson(image: Project["image"]): SerializedImage {
  return {
    src: image.src.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
  };
}

export function toProjectJson(project: Project): SerializedProject {
  return {
    ...project,
    image: toImageJson(project.image),
    gallery: project.gallery.map(toImageJson),
  };
}
