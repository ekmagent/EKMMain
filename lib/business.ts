// Canonical business entity (NAP) constants — single source of truth for
// every JSON-LD node that describes EasyKind Medicare / MedicareYourself.
// Must always match the footer NAP and the Google Business Profile exactly.

export const BUSINESS = {
  name: "EasyKind Medicare",
  alternateName: "MedicareYourself",
  legalName: "EasyKind Health LLC",
  url: "https://medicareyourself.com",
  telephone: "+18555591700",
  streetAddress: "1309 Route 70 West",
  addressLocality: "Cherry Hill",
  addressRegion: "NJ",
  postalCode: "08002",
  addressCountry: "US",
  // Office coordinates for 1309 Route 70 West (geocoded via OSM Nominatim)
  lat: 39.9165,
  lng: -75.0255,
  founderName: "Anthony Orner",
  founderJobTitle: "Licensed Medicare Insurance Broker",
  founderNPN: "20586791",
  founderNPI: "1902584006",
  aboutUrl: "https://medicareyourself.com/about",
  // Public profiles of the SAME business entity (easyKind Medicare) — these
  // stitch medicareyourself.com to the review/citation footprint that lives
  // under the easykindmedicare.com brand. Verified live 2026-07-12.
  orgSameAs: [
    "https://www.easykindmedicare.com",
    "https://www.yelp.com/biz/easykind-medicare-cherry-hill",
    "https://www.bbb.org/us/nj/cherry-hill/profile/health-consultants/easykind-medicare-0221-90234473",
    "https://www.facebook.com/easyKindMedicare/",
    "https://www.linkedin.com/company/easykind-medicare",
  ],
  sameAs: [
    // NPPES registry entry for Anthony Orner — authoritative identity link
    "https://npiregistry.cms.hhs.gov/provider-view/1902584006",
    "https://www.linkedin.com/in/anthonyorner/",
  ],
} as const;

export function businessAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  };
}

export function founderPerson() {
  return {
    "@type": "Person",
    "@id": `${BUSINESS.aboutUrl}#anthony-orner`,
    name: BUSINESS.founderName,
    jobTitle: BUSINESS.founderJobTitle,
    url: BUSINESS.aboutUrl,
    identifier: [
      { "@type": "PropertyValue", propertyID: "NPN", value: BUSINESS.founderNPN },
      { "@type": "PropertyValue", propertyID: "NPI", value: BUSINESS.founderNPI },
    ],
    sameAs: BUSINESS.sameAs,
  };
}
