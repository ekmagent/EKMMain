// NJ geographic dataset powering local-SEO pages and schema.
// Counties: all 21 NJ counties with a representative ZIP (used by the CSG
// county rate probe) and approximate centroid coordinates.
// Cities: every NJ locality that has a page under /services, mapped to its
// county and existing route so hubs/schema can be generated from one source.

export interface NJCounty {
  name: string; // e.g. "Camden County"
  slug: string; // e.g. "camden-county"
  seat: string;
  // Representative ZIP for CSG rate probes — deliberately the county's largest
  // senior-population center, NOT necessarily the county seat's own ZIP.
  zip: string;
  lat: number;
  lng: number;
}

export interface NJCity {
  name: string;
  slug: string;
  countySlug: string;
  zip: string;
  lat: number;
  lng: number;
  route: string; // existing page route
}

export const NJ_COUNTIES: NJCounty[] = [
  { name: "Atlantic County", slug: "atlantic-county", seat: "Mays Landing", zip: "08234", lat: 39.4776, lng: -74.6335 },
  { name: "Bergen County", slug: "bergen-county", seat: "Hackensack", zip: "07601", lat: 40.9263, lng: -74.077 },
  { name: "Burlington County", slug: "burlington-county", seat: "Mount Holly", zip: "08054", lat: 39.8777, lng: -74.668 },
  { name: "Camden County", slug: "camden-county", seat: "Camden", zip: "08002", lat: 39.8035, lng: -74.9598 },
  { name: "Cape May County", slug: "cape-may-county", seat: "Cape May Court House", zip: "08210", lat: 39.0854, lng: -74.85 },
  { name: "Cumberland County", slug: "cumberland-county", seat: "Bridgeton", zip: "08360", lat: 39.3281, lng: -75.1291 },
  { name: "Essex County", slug: "essex-county", seat: "Newark", zip: "07102", lat: 40.787, lng: -74.2452 },
  { name: "Gloucester County", slug: "gloucester-county", seat: "Woodbury", zip: "08080", lat: 39.7173, lng: -75.1416 },
  { name: "Hudson County", slug: "hudson-county", seat: "Jersey City", zip: "07030", lat: 40.731, lng: -74.0759 },
  { name: "Hunterdon County", slug: "hunterdon-county", seat: "Flemington", zip: "08822", lat: 40.5673, lng: -74.9122 },
  { name: "Mercer County", slug: "mercer-county", seat: "Trenton", zip: "08608", lat: 40.2831, lng: -74.7015 },
  { name: "Middlesex County", slug: "middlesex-county", seat: "New Brunswick", zip: "08817", lat: 40.44, lng: -74.4088 },
  { name: "Monmouth County", slug: "monmouth-county", seat: "Freehold", zip: "07728", lat: 40.2874, lng: -74.1522 },
  { name: "Morris County", slug: "morris-county", seat: "Morristown", zip: "07960", lat: 40.8336, lng: -74.5463 },
  { name: "Ocean County", slug: "ocean-county", seat: "Toms River", zip: "08753", lat: 39.866, lng: -74.25 },
  { name: "Passaic County", slug: "passaic-county", seat: "Paterson", zip: "07470", lat: 41.0086, lng: -74.3005 },
  { name: "Salem County", slug: "salem-county", seat: "Salem", zip: "08079", lat: 39.5765, lng: -75.3579 },
  { name: "Somerset County", slug: "somerset-county", seat: "Somerville", zip: "08807", lat: 40.5635, lng: -74.6163 },
  { name: "Sussex County", slug: "sussex-county", seat: "Newton", zip: "07860", lat: 41.1391, lng: -74.6907 },
  { name: "Union County", slug: "union-county", seat: "Elizabeth", zip: "07083", lat: 40.6598, lng: -74.3086 },
  { name: "Warren County", slug: "warren-county", seat: "Belvidere", zip: "08865", lat: 40.8571, lng: -74.9974 },
];

export const NJ_CITIES: NJCity[] = [
  { name: "Atlantic City", slug: "atlantic-city", countySlug: "atlantic-county", zip: "08401", lat: 39.3643, lng: -74.4229, route: "/services/medicare-insurance-agents-in-atlantic-city-new-jersey" },
  { name: "Bayonne", slug: "bayonne", countySlug: "hudson-county", zip: "07002", lat: 40.6687, lng: -74.1143, route: "/services/medicare-insurance-agents-in-bayonne-new-jersey" },
  { name: "Belleville", slug: "belleville", countySlug: "essex-county", zip: "07109", lat: 40.7937, lng: -74.1502, route: "/services/medicare-insurance-agents-in-belleville-new-jersey" },
  { name: "Bloomfield", slug: "bloomfield", countySlug: "essex-county", zip: "07003", lat: 40.8068, lng: -74.1854, route: "/services/medicare-insurance-agents-in-bloomfield-new-jersey" },
  { name: "Brick", slug: "brick", countySlug: "ocean-county", zip: "08723", lat: 40.0576, lng: -74.1057, route: "/services/medicare-insurance-agents-in-brick-new-jersey" },
  { name: "Bridgeton", slug: "bridgeton", countySlug: "cumberland-county", zip: "08302", lat: 39.4274, lng: -75.2341, route: "/services/medicare-insurance-agents-in-bridgeton-new-jersey" },
  { name: "Bridgewater", slug: "bridgewater", countySlug: "somerset-county", zip: "08807", lat: 40.6001, lng: -74.6483, route: "/services/medicare-insurance-agents-in-bridgewater-new-jersey" },
  { name: "Burlington", slug: "burlington", countySlug: "burlington-county", zip: "08016", lat: 40.0712, lng: -74.8649, route: "/services/medicare-insurance-agents-in-burlington-new-jersey" },
  { name: "Camden", slug: "camden", countySlug: "camden-county", zip: "08102", lat: 39.9259, lng: -75.1196, route: "/services/medicare-insurance-agents-in-camden-new-jersey" },
  { name: "Cherry Hill", slug: "cherry-hill", countySlug: "camden-county", zip: "08002", lat: 39.9348, lng: -75.0307, route: "/services/medicare-insurance-agents-in-cherry-hill-new-jersey" },
  { name: "Clifton", slug: "clifton", countySlug: "passaic-county", zip: "07011", lat: 40.8584, lng: -74.1638, route: "/services/medicare-insurance-agents-in-clifton-new-jersey" },
  { name: "Edison", slug: "edison", countySlug: "middlesex-county", zip: "08817", lat: 40.5187, lng: -74.4121, route: "/services/medicare-insurance-agents-in-edison-new-jersey" },
  { name: "Egg Harbor Township", slug: "egg-harbor-township", countySlug: "atlantic-county", zip: "08234", lat: 39.3801, lng: -74.6031, route: "/services/medicare-insurance-agents-in-egg-harbor-township-new-jersey" },
  { name: "Elizabeth", slug: "elizabeth", countySlug: "union-county", zip: "07201", lat: 40.6639, lng: -74.2107, route: "/services/medicare-insurance-agents-in-elizabeth-new-jersey" },
  { name: "Fort Lee", slug: "fort-lee", countySlug: "bergen-county", zip: "07024", lat: 40.8509, lng: -73.9701, route: "/services/medicare-insurance-agents-in-fort-lee-new-jersey" },
  { name: "Franklin Township", slug: "franklin", countySlug: "somerset-county", zip: "08873", lat: 40.4767, lng: -74.5416, route: "/services/medicare-insurance-agents-in-franklin-new-jersey" },
  { name: "Freehold", slug: "freehold", countySlug: "monmouth-county", zip: "07728", lat: 40.2602, lng: -74.2735, route: "/services/medicare-insurance-agents-in-freehold-new-jersey" },
  { name: "Hackensack", slug: "hackensack", countySlug: "bergen-county", zip: "07601", lat: 40.8859, lng: -74.0435, route: "/services/hackensack-nj-medicare-insurance-agents" },
  { name: "Hillsborough", slug: "hillsborough", countySlug: "somerset-county", zip: "08844", lat: 40.4676, lng: -74.6294, route: "/services/hillsborough-nj-medicare-insurance-agents" },
  { name: "Hoboken", slug: "hoboken", countySlug: "hudson-county", zip: "07030", lat: 40.744, lng: -74.0324, route: "/services/hoboken-nj-medicare-insurance-agents" },
  { name: "Howell", slug: "howell", countySlug: "monmouth-county", zip: "07731", lat: 40.1698, lng: -74.1965, route: "/services/howell-nj-medicare-insurance-agents" },
  { name: "Irvington", slug: "irvington", countySlug: "essex-county", zip: "07111", lat: 40.7323, lng: -74.2349, route: "/services/irvington-nj-medicare-insurance-agents" },
  { name: "Jackson", slug: "jackson", countySlug: "ocean-county", zip: "08527", lat: 40.1, lng: -74.3587, route: "/services/jackson-nj-medicare-insurance-agents" },
  { name: "Kearny", slug: "kearny", countySlug: "hudson-county", zip: "07032", lat: 40.7684, lng: -74.1454, route: "/services/kearny-nj-medicare-insurance-agents" },
  { name: "Lakewood", slug: "lakewood", countySlug: "ocean-county", zip: "08701", lat: 40.0978, lng: -74.2176, route: "/services/lakewood-nj-medicare-insurance-agents" },
  { name: "Linden", slug: "linden", countySlug: "union-county", zip: "07036", lat: 40.622, lng: -74.2446, route: "/services/linden-nj-medicare-insurance-agents" },
  { name: "Monroe Township", slug: "monroe-township", countySlug: "middlesex-county", zip: "08831", lat: 40.319, lng: -74.4285, route: "/services/find-a-medicare-agent-in-monroe-township-nj" },
  { name: "Montclair", slug: "montclair", countySlug: "essex-county", zip: "07042", lat: 40.8259, lng: -74.209, route: "/services/find-a-medicare-agent-in-montclair-nj" },
  { name: "Mount Laurel", slug: "mount-laurel", countySlug: "burlington-county", zip: "08054", lat: 39.934, lng: -74.891, route: "/services/find-a-medicare-agent-in-mount-laurel-nj" },
  { name: "Neptune", slug: "neptune", countySlug: "monmouth-county", zip: "07753", lat: 40.2115, lng: -74.0324, route: "/services/find-a-medicare-agent-in-neptune-nj" },
  { name: "New Brunswick", slug: "new-brunswick", countySlug: "middlesex-county", zip: "08901", lat: 40.4862, lng: -74.4518, route: "/services/find-a-medicare-agent-in-new-brunswick-nj" },
  { name: "Newark", slug: "newark", countySlug: "essex-county", zip: "07102", lat: 40.7357, lng: -74.1724, route: "/services/find-a-medicare-agent-in-newark-nj" },
  { name: "North Bergen", slug: "north-bergen", countySlug: "hudson-county", zip: "07047", lat: 40.8043, lng: -74.0121, route: "/services/find-a-medicare-agent-in-north-bergen-nj" },
  { name: "North Brunswick", slug: "north-brunswick", countySlug: "middlesex-county", zip: "08902", lat: 40.454, lng: -74.482, route: "/services/find-a-medicare-agent-in-north-brunswick-nj" },
  { name: "Passaic", slug: "passaic", countySlug: "passaic-county", zip: "07055", lat: 40.8568, lng: -74.1285, route: "/services/find-a-medicare-agent-in-passaic-nj" },
  { name: "Paterson", slug: "paterson", countySlug: "passaic-county", zip: "07501", lat: 40.9168, lng: -74.1718, route: "/services/find-a-medicare-agent-in-paterson-nj" },
  { name: "Piscataway", slug: "piscataway", countySlug: "middlesex-county", zip: "08854", lat: 40.4993, lng: -74.399, route: "/services/find-a-medicare-agent-in-piscataway-nj" },
  { name: "Plainfield", slug: "plainfield", countySlug: "union-county", zip: "07060", lat: 40.6337, lng: -74.4074, route: "/services/find-a-medicare-agent-in-plainfield-nj" },
  { name: "Sayreville", slug: "sayreville", countySlug: "middlesex-county", zip: "08872", lat: 40.4594, lng: -74.361, route: "/services/local-medicare-agents-in-sayreville-nj" },
  { name: "Sewell", slug: "sewell", countySlug: "gloucester-county", zip: "08080", lat: 39.7657, lng: -75.1013, route: "/services/local-medicare-agents-in-sewell-nj" },
  { name: "Sicklerville", slug: "sicklerville", countySlug: "camden-county", zip: "08081", lat: 39.7415, lng: -74.9694, route: "/services/local-medicare-agents-in-sicklerville-nj" },
  { name: "Teaneck", slug: "teaneck", countySlug: "bergen-county", zip: "07666", lat: 40.8976, lng: -74.016, route: "/services/local-medicare-agents-in-teaneck-nj" },
  { name: "Toms River", slug: "toms-river", countySlug: "ocean-county", zip: "08753", lat: 39.9537, lng: -74.1979, route: "/services/local-medicare-agents-in-toms-river-nj" },
  { name: "Trenton", slug: "trenton", countySlug: "mercer-county", zip: "08608", lat: 40.2206, lng: -74.7597, route: "/services/local-medicare-agents-in-trenton-nj" },
  { name: "Union City", slug: "union-city", countySlug: "hudson-county", zip: "07087", lat: 40.7795, lng: -74.0246, route: "/services/local-medicare-agents-in-union-city-nj" },
  { name: "Union Township", slug: "union", countySlug: "union-county", zip: "07083", lat: 40.6976, lng: -74.2632, route: "/services/local-medicare-agents-in-union-nj" },
  { name: "Wayne", slug: "wayne", countySlug: "passaic-county", zip: "07470", lat: 40.9254, lng: -74.2765, route: "/services/local-medicare-agents-in-wayne-nj" },
  { name: "West New York", slug: "west-new-york", countySlug: "hudson-county", zip: "07093", lat: 40.7879, lng: -74.0143, route: "/services/local-medicare-agents-in-west-new-york-nj" },
  { name: "West Orange", slug: "west-orange", countySlug: "essex-county", zip: "07052", lat: 40.7987, lng: -74.239, route: "/services/local-medicare-agents-in-west-orange-nj" },
];

export function getCounty(slug: string): NJCounty | undefined {
  return NJ_COUNTIES.find((c) => c.slug === slug);
}

export function getCity(slug: string): NJCity | undefined {
  return NJ_CITIES.find((c) => c.slug === slug);
}

export function citiesInCounty(countySlug: string): NJCity[] {
  return NJ_CITIES.filter((c) => c.countySlug === countySlug);
}
