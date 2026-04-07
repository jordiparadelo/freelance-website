import { BUSINESS_INFO } from "@/app/seo.config";

interface BusinessInfoProps {
  variant?: "full" | "compact";
  className?: string;
}

export function BusinessInfo({ variant = "full", className = "" }: BusinessInfoProps) {
  const { name, address, phone, email } = BUSINESS_INFO;
  
  if (variant === "compact") {
    return (
      <address className={`not-italic ${className}`}>
        <span className="font-medium">{name}</span>
        <br />
        {address.streetAddress && (
          <>
            {address.streetAddress}, {address.postalCode}
            <br />
          </>
        )}
        {phone && (
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="hover:underline"
          >
            {phone}
          </a>
        )}
      </address>
    );
  }

  return (
    <address className={`not-italic space-y-2 ${className}`}>
      <div>
        <span className="font-medium">{name}</span>
        {address.streetAddress && (
          <div>
            {address.streetAddress}
            <br />
            {address.addressLocality}, {address.addressRegion} {address.postalCode}
            <br />
            {address.addressCountry}
          </div>
        )}
      </div>
      
      {phone && (
        <div>
          <span className="font-medium">Phone: </span>
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="hover:underline"
          >
            {phone}
          </a>
        </div>
      )}
      
      {email && (
        <div>
          <span className="font-medium">Email: </span>
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>
      )}
    </address>
  );
} 