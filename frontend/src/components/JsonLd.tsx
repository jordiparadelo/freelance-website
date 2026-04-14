type JsonLdType = {
	"@context": string;
	"@type": string;
	name?: string;
	description?: string;
	url?: string;
	[key: string]: string | number | boolean | string[] | undefined;
};

interface JsonLdProps {
	data: JsonLdType;
}

export default function JsonLd({ data }: JsonLdProps) {
	return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
