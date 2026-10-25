import type { MarqueeData } from "@/components/layouts/BusinessMarquee/type";
import { getSupabase } from "./client";
import type {
  AboutContent,
  BusinessInfo,
  Experience,
  GalleryImage,
  HeroSection,
  Processes,
  Project,
  QueryOptions,
  SocialLink,
} from "./types";

const LOCALE = "en";

type MediaRow = {
  id?: string;
  public_url: string | null;
  width: number | null;
  height: number | null;
  alt: string | null;
};

type LabelRow = { kind: string; label: string; sort_order: number };

type ProjectRow = {
  id: string;
  name_id: string | null;
  title: string;
  challenge: string | null;
  brief: string | null;
  year: string | null;
  preview_url: string | null;
  client: string | null;
  image: MediaRow | MediaRow[] | null;
  logo: MediaRow | MediaRow[] | null;
  project_labels: LabelRow[] | null;
  project_gallery:
    | { sort_order: number; media: MediaRow | MediaRow[] | null }[]
    | null;
};

const PROJECT_SELECT = `
  id,
  name_id,
  title,
  challenge,
  brief,
  year,
  preview_url,
  client,
  image:media_assets!projects_image_id_fkey(public_url, width, height, alt),
  logo:media_assets!projects_logo_id_fkey(public_url, width, height, alt),
  project_labels(kind, label, sort_order),
  project_gallery(sort_order, media:media_assets!project_gallery_media_id_fkey(id, public_url, width, height, alt))
`;

function labelsOf(rows: LabelRow[] | null, kind: string) {
  return (rows ?? [])
    .filter((row) => row.kind === kind)
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((row) => ({ label: row.label }));
}

function one<T>(value: T | T[] | null | undefined): T | null {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
}

function toMedia(row: MediaRow | MediaRow[] | null) {
  const media = one(row);
  return {
    url: media?.public_url ?? "",
    width: media?.width ?? 0,
    height: media?.height ?? 0,
    alternativeText: media?.alt ?? "",
  };
}

function toProject(row: ProjectRow): Project {
  return {
    id: row.id,
    nameID: row.name_id ?? "",
    title: row.title,
    challenge: row.challenge ?? "",
    image: toMedia(row.image),
    gallery: (row.project_gallery ?? [])
      .sort((a, b) => a.sort_order - b.sort_order)
      .flatMap((item) => {
        const media = one(item.media);
        if (!media) return [];
        return [{ id: media.id ?? "", ...toMedia(media) }];
      }),
    details: {
      brief: row.brief ?? "",
      year: row.year ?? "",
      preview: row.preview_url ?? "",
      industries: labelsOf(row.project_labels, "industry"),
      type: labelsOf(row.project_labels, "type"),
      roles: labelsOf(row.project_labels, "role"),
      collaboration: labelsOf(row.project_labels, "collaboration"),
    },
  };
}

function applyQuery<T>(query: T, options?: QueryOptions): T {
  let next = query as T & {
    eq: (column: string, value: string | number) => T;
    neq: (column: string, value: string | number) => T;
    order: (column: string, options: { ascending: boolean }) => T;
    limit: (count: number) => T;
  };

  options?.filters?.forEach((filter) => {
    if (filter.op === "eq")
      next = next.eq(filter.column, filter.value) as typeof next;
    if (filter.op === "neq")
      next = next.neq(filter.column, filter.value) as typeof next;
  });

  options?.sort?.forEach((sort) => {
    next = next.order(sort.column, {
      ascending: sort.ascending ?? true,
    }) as typeof next;
  });

  if (options?.limit) {
    next = next.limit(options.limit) as typeof next;
  }

  return next;
}

async function unwrap<T>(
  result: PromiseLike<{ data: T | null; error: { message: string } | null }>,
): Promise<T> {
  const { data, error } = await result;
  if (error) throw new Error(error.message);
  if (data === null) throw new Error("Supabase returned no data");
  return data;
}

export async function getSocialLinks(options?: QueryOptions) {
  const supabase = getSupabase();
  const query = applyQuery(
    supabase
      .from("social_links")
      .select("display_name, href, type")
      .not("published_at", "is", null),
    options,
  );
  const rows = await unwrap(
    query as PromiseLike<{
      data:
        | {
            display_name: string | null;
            href: string | null;
            type: string | null;
          }[]
        | null;
      error: { message: string } | null;
    }>,
  );

  return rows.map((row) => ({
    displayName: row.display_name ?? "",
    href: row.href ?? "",
    type: row.type ?? "",
  })) as SocialLink[];
}

export async function getBusinessInfo() {
  const supabase = getSupabase();
  const row = await unwrap<
    Record<string, unknown> & {
      legal_name: string | null;
      display_name: string | null;
      country: string | null;
      city: string | null;
      timezone: string | null;
      is_available: boolean | null;
      avatar: MediaRow | MediaRow[] | null;
      cv:
        | { public_url: string | null; alt: string | null }
        | { public_url: string | null; alt: string | null }[]
        | null;
      business_info_social_links: {
        sort_order: number;
        social_links:
          | {
              display_name: string | null;
              name_id: string | null;
              href: string | null;
              type: string | null;
            }
          | {
              display_name: string | null;
              name_id: string | null;
              href: string | null;
              type: string | null;
            }[]
          | null;
      }[];
    }
  >(
    supabase
      .from("business_infos")
      .select(
        `
        legal_name,
        display_name,
        country,
        city,
        timezone,
        is_available,
        avatar:media_assets!business_infos_avatar_id_fkey(public_url, width, height, alt),
        cv:media_assets!business_infos_cv_id_fkey(public_url, alt),
        business_info_social_links(
          sort_order,
          social_links(display_name, name_id, href, type)
        )
      `,
      )
      .eq("locale", LOCALE)
      .not("published_at", "is", null)
      .single(),
  );

  const links = row.business_info_social_links
    .sort((a, b) => a.sort_order - b.sort_order)
    .flatMap((item) => {
      const link = one(item.social_links);
      return link ? [link] : [];
    });

  const avatar = one(row.avatar);
  const cv = one(row.cv);

  return {
    legalName: row.legal_name ?? "",
    displayName: row.display_name ?? "",
    country: row.country ?? "",
    city: row.city ?? "",
    timezone: row.timezone ?? "",
    isAvailable: row.is_available,
    social_links: links.map((link) => ({
      displayName: link.display_name ?? "",
      nameID: link.name_id ?? "",
      href: link.href ?? "",
      type: link.type ?? "",
    })),
    cv: {
      alternativeText: cv?.alt ?? "",
      url: cv?.public_url ?? "",
    },
    avatar: {
      ...toMedia(avatar),
      alternativeText: avatar?.alt ?? "",
    },
  } as BusinessInfo;
}

export async function getProjects(options?: QueryOptions) {
  const supabase = getSupabase();
  const query = applyQuery(
    supabase
      .from("projects")
      .select(PROJECT_SELECT)
      .eq("locale", LOCALE)
      .not("published_at", "is", null),
    options,
  );
  const rows = await unwrap(
    query as PromiseLike<{
      data: unknown[] | null;
      error: { message: string } | null;
    }>,
  );
  return rows.map((row) => toProject(row as ProjectRow));
}

export async function getProjectByNameID(nameID: string) {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("projects")
    .select(PROJECT_SELECT)
    .eq("locale", LOCALE)
    .eq("name_id", nameID)
    .not("published_at", "is", null)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data ? toProject(data as ProjectRow) : undefined;
}

export async function getMarqueeProjects(): Promise<MarqueeData[]> {
  const supabase = getSupabase();
  const rows = await unwrap(
    supabase
      .from("projects")
      .select(PROJECT_SELECT)
      .eq("locale", LOCALE)
      .not("published_at", "is", null)
      .order("year", { ascending: false })
      .order("title", { ascending: true }),
  );

  return (rows as unknown as ProjectRow[])
    .filter((row) => row.client && one(row.logo)?.public_url)
    .map((row) => ({
      id: row.id,
      details: {
        preview: row.preview_url ?? undefined,
        client: row.client ?? undefined,
        logo: {
          url: one(row.logo)?.public_url ?? "",
          width: one(row.logo)?.width ?? 0,
          height: one(row.logo)?.height ?? 0,
        },
      },
    }));
}

export async function getHeroData() {
  const supabase = getSupabase();
  const row = await unwrap(
    supabase
      .from("hero_sections")
      .select("title, subtitle, description, cta_text, social_links(href)")
      .not("published_at", "is", null)
      .single() as PromiseLike<{
      data: {
        title: string | null;
        subtitle: string | null;
        description: string | null;
        cta_text: string | null;
        social_links:
          | { href: string | null }
          | { href: string | null }[]
          | null;
      } | null;
      error: { message: string } | null;
    }>,
  );
  const social = one(row.social_links);
  return {
    title: row.title ?? "",
    subtitle: row.subtitle ?? "",
    description: row.description ?? "",
    cta_text: row.cta_text ?? "",
    social_link: { href: social?.href ?? "" },
  } as HeroSection;
}

export async function getGalleryImages() {
  const supabase = getSupabase();
  const { data: row, error } = await supabase
    .from("gallery_sections")
    .select(
      `
        gallery_images(
          sort_order,
          media:media_assets!gallery_images_media_id_fkey(id, public_url, width, height, alt)
        )
      `,
    )
    .not("published_at", "is", null)
    .maybeSingle();
  if (error) throw new Error(error.message);

  const images = (
    (row?.gallery_images ?? []) as {
      sort_order: number;
      media: MediaRow | MediaRow[] | null;
    }[]
  ).sort((a, b) => a.sort_order - b.sort_order);

  return images.map((image, index) => ({
    id: index,
    src: {
      id: index,
      url: one(image.media)?.public_url ?? "",
      width: one(image.media)?.width ?? 0,
      height: one(image.media)?.height ?? 0,
      alternativeText: one(image.media)?.alt ?? null,
    },
  })) as GalleryImage[];
}

export async function getAboutData() {
  const supabase = getSupabase();
  const row = await unwrap(
    supabase
      .from("about_sections")
      .select(
        "id, title, description, about_capabilities(title, description, sort_order)",
      )
      .eq("locale", LOCALE)
      .not("published_at", "is", null)
      .single() as PromiseLike<{
      data: {
        id: string;
        title: string | null;
        description: string | null;
        about_capabilities: {
          title: string | null;
          description: string | null;
          sort_order: number;
        }[];
      } | null;
      error: { message: string } | null;
    }>,
  );

  const capabilities = row.about_capabilities
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((item) => ({
      title: item.title ?? "",
      description: item.description ?? "",
    }));

  return {
    id: row.id,
    title: row.title ?? "",
    description: row.description ?? "",
    capabilities,
    previewProject: null,
  } as AboutContent;
}

export async function getExperiences(options?: QueryOptions) {
  const supabase = getSupabase();
  const query = applyQuery(
    supabase
      .from("experiences")
      .select("id, role, company, industry, year")
      .eq("locale", LOCALE)
      .not("published_at", "is", null),
    options,
  );
  const rows = await unwrap(
    query as PromiseLike<{
      data: Experience[] | null;
      error: { message: string } | null;
    }>,
  );
  return rows;
}

export async function getProcesses(options?: QueryOptions) {
  const supabase = getSupabase();
  const query = applyQuery(
    supabase
      .from("processes")
      .select(
        "id, name, description, sort_order, image:media_assets!processes_media_id_fkey(public_url, width, height, alt)",
      )
      .not("published_at", "is", null),
    options,
  );
  const rows = await unwrap(
    query as PromiseLike<{
      data:
        | {
            id: string;
            name: string | null;
            description: string | null;
            sort_order: number | null;
            image: MediaRow | null;
          }[]
        | null;
      error: { message: string } | null;
    }>,
  );

  return rows.map((row) => ({
    id: row.id,
    name: row.name ?? "",
    description: row.description ?? "",
    order: row.sort_order ?? undefined,
    image: toMedia(row.image),
  })) as Processes[];
}
