import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { METADATA, SITE_URL } from "../seo.config";

const title = "Contact Jordi Paradelo for Web Design Work";
const description =
  "Contact Jordi Paradelo about a freelance web design or development project. Share the brief and get a reply about scope and timing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: new URL("/contact", SITE_URL).toString(),
  },
  openGraph: {
    ...METADATA.openGraph,
    title,
    description,
    url: new URL("/contact", SITE_URL).toString(),
  },
};

const Contact = () => <ContactPage />;

export default Contact;
