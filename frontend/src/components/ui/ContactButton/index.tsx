"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { getStrapiData } from "@/lib/strapi";
import type { SocialLink } from "@/lib/types";

interface ContactButtonProps {
	children: React.ReactNode;
}

const ContactButton: React.FC<ContactButtonProps> = ({ children }) => {
	// const strapiData =  getStrapiData("social-links");
	// const href = strapiData.data.find((item: any) => item.type === "email")?.href;
	const [href, setHref] = useState<string | null>(null);

	// INSERT_YOUR_CODE
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getStrapiData("/api/social-links");
			// setHref(data);
			setHref(
				`mailto:${data.find((item: SocialLink) => item.type === "email")?.href}`,
			);
		};
		fetchData();
	}, []);

	return href && <Button href={href}>{children}</Button>;
};

export default ContactButton;
