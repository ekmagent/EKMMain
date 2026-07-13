import SchemaMarkup from "@/components/SchemaMarkup";
import { BUSINESS, businessAddress, founderPerson } from "@/lib/business";
import { getCity, getCounty } from "@/lib/nj-geo";

interface LocalServiceSchemaProps {
  citySlug?: string;
  countySlug?: string;
}

// Emits the InsuranceAgency node scoped to a specific NJ city or county via
// areaServed — ties each local page to the business entity and its locality.
export default function LocalServiceSchema({
  citySlug,
  countySlug,
}: LocalServiceSchemaProps) {
  const city = citySlug ? getCity(citySlug) : undefined;
  const county = countySlug
    ? getCounty(countySlug)
    : city
      ? getCounty(city.countySlug)
      : undefined;

  const areaServed: Record<string, unknown>[] = [];
  if (city) {
    areaServed.push({
      "@type": "City",
      name: `${city.name}, NJ`,
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
    });
  }
  if (county) {
    areaServed.push({
      "@type": "AdministrativeArea",
      name: `${county.name}, NJ`,
      geo: { "@type": "GeoCoordinates", latitude: county.lat, longitude: county.lng },
    });
  }
  if (areaServed.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    address: businessAddress(),
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    sameAs: BUSINESS.orgSameAs,
    areaServed,
    founder: founderPerson(),
    priceRange: "Free consultation",
  };

  return <SchemaMarkup schema={schema} />;
}
