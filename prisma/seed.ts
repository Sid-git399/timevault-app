import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const watches = [
  {
    slug: "rolex-submariner-date-126610ln",
    brand: "Rolex",
    model: "Submariner Date",
    referenceNumber: "126610LN",
    movement: "Automatic, Calibre 3235",
    caseMaterial: "Oystersteel",
    caseDiameterMm: 41,
    waterResistanceM: 300,
    yearProduced: 2021,
    condition: "EXCELLENT",
    boxAndPapers: true,
    priceCents: 1495000,
    description:
      "A one-owner example with light wear consistent with occasional use. Bracelet links are unstretched and the ceramic bezel insert shows no fading.",
    imageSeed: "watch-submariner",
  },
  {
    slug: "omega-speedmaster-professional-moonwatch",
    brand: "Omega",
    model: "Speedmaster Professional Moonwatch",
    referenceNumber: "310.30.42.50.01.001",
    movement: "Manual-winding, Calibre 3861",
    caseMaterial: "Stainless steel",
    caseDiameterMm: 42,
    waterResistanceM: 50,
    yearProduced: 2022,
    condition: "VERY_GOOD",
    boxAndPapers: true,
    priceCents: 549000,
    description:
      "The current-production Moonwatch with the hesalite crystal and manual-winding movement. Minor hairline marks on the caseback, otherwise sharp.",
    imageSeed: "watch-speedmaster",
  },
  {
    slug: "tudor-black-bay-58-79030n",
    brand: "Tudor",
    model: "Black Bay 58",
    referenceNumber: "79030N",
    movement: "Automatic, Calibre MT5402",
    caseMaterial: "Stainless steel",
    caseDiameterMm: 39,
    waterResistanceM: 200,
    yearProduced: 2020,
    condition: "GOOD",
    boxAndPapers: false,
    priceCents: 289000,
    description:
      "A well-loved 58 with honest wear on the case edges. Runs within spec on our timing machine. Sold on a third-party leather strap; original bracelet not included.",
    imageSeed: "watch-blackbay",
  },
  {
    slug: "seiko-presage-cocktail-time-srpb43",
    brand: "Seiko",
    model: "Presage Cocktail Time",
    referenceNumber: "SRPB43",
    movement: "Automatic, Calibre 4R35",
    caseMaterial: "Stainless steel",
    caseDiameterMm: 40,
    waterResistanceM: 30,
    yearProduced: 2019,
    condition: "VERY_GOOD",
    boxAndPapers: true,
    priceCents: 32500,
    description:
      "The 'Cocktail Time' with its sunburst dial. A great entry point into mechanical watches with barely any signs of wear.",
    imageSeed: "watch-presage",
  },
  {
    slug: "rolex-datejust-41-126334",
    brand: "Rolex",
    model: "Datejust 41",
    referenceNumber: "126334",
    movement: "Automatic, Calibre 3235",
    caseMaterial: "Stainless steel and white gold",
    caseDiameterMm: 41,
    waterResistanceM: 100,
    yearProduced: 2023,
    condition: "UNWORN",
    boxAndPapers: true,
    priceCents: 1125000,
    description:
      "Purchased directly from an authorized dealer and never worn. Full factory stickers still on the caseback and clasp.",
    imageSeed: "watch-datejust",
  },
  {
    slug: "omega-seamaster-diver-300m",
    brand: "Omega",
    model: "Seamaster Diver 300M",
    referenceNumber: "210.30.42.20.01.001",
    movement: "Automatic, Calibre 8800",
    caseMaterial: "Stainless steel",
    caseDiameterMm: 42,
    waterResistanceM: 300,
    yearProduced: 2021,
    condition: "EXCELLENT",
    boxAndPapers: true,
    priceCents: 425000,
    description:
      "The wave-dial Seamaster with the helium escape valve. Clean bezel and crystal, light desk diving marks on the bracelet clasp only.",
    imageSeed: "watch-seamaster",
  },
  {
    slug: "tag-heuer-carrera-calibre-16",
    brand: "TAG Heuer",
    model: "Carrera Calibre 16",
    referenceNumber: "CV2A1AB",
    movement: "Automatic chronograph, Calibre 16",
    caseMaterial: "Stainless steel",
    caseDiameterMm: 43,
    waterResistanceM: 100,
    yearProduced: 2018,
    condition: "GOOD",
    boxAndPapers: false,
    priceCents: 189000,
    description:
      "A sporty chronograph with a black dial and tachymeter bezel. Some fine scratches on the pushers from regular use.",
    imageSeed: "watch-carrera",
  },
  {
    slug: "grand-seiko-snowflake-sbga211",
    brand: "Grand Seiko",
    model: "Spring Drive 'Snowflake'",
    referenceNumber: "SBGA211",
    movement: "Spring Drive, Calibre 9R65",
    caseMaterial: "Titanium",
    caseDiameterMm: 41,
    waterResistanceM: 100,
    yearProduced: 2022,
    condition: "EXCELLENT",
    boxAndPapers: true,
    priceCents: 598000,
    description:
      "The iconic textured 'Snowflake' dial that mimics fresh snowfall in Shinshu. Titanium case shows almost no wear.",
    imageSeed: "watch-snowflake",
  },
  {
    slug: "cartier-tank-solo-wsta0028",
    brand: "Cartier",
    model: "Tank Solo",
    referenceNumber: "WSTA0028",
    movement: "Quartz",
    caseMaterial: "Stainless steel",
    caseDiameterMm: 31,
    waterResistanceM: 30,
    yearProduced: 2020,
    condition: "VERY_GOOD",
    boxAndPapers: true,
    priceCents: 245000,
    description:
      "A dress watch classic with the signature Roman numeral dial and blue sword hands. Light wear on the strap only.",
    imageSeed: "watch-tanksolo",
  },
  {
    slug: "longines-master-collection-l2-928-4",
    brand: "Longines",
    model: "Master Collection",
    referenceNumber: "L2.928.4.78.3",
    movement: "Automatic, Calibre L888",
    caseMaterial: "Stainless steel",
    caseDiameterMm: 40,
    waterResistanceM: 30,
    yearProduced: 2019,
    condition: "GOOD",
    boxAndPapers: true,
    priceCents: 128000,
    description:
      "Classic three-hand dress watch with a moonphase complication and small seconds. A few light marks on the case back.",
    imageSeed: "watch-longines",
  },
];

async function main() {
  for (const watch of watches) {
    await prisma.watch.upsert({
      where: { slug: watch.slug },
      update: watch,
      create: watch,
    });
  }
  console.log(`Seeded ${watches.length} watches.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
