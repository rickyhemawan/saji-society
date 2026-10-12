/**
 * img-07 is the SAJI_SOCIETY photo and stays.
 * Every other file is a Pixabay photo chosen to match the section it sits in.
 */
export const photos = {
  logo: "img-00.jpg",
  hero: "img-07.jpg",
  coffee: "img-02.jpg",
  team: "img-03.jpg",
  gallery: ["img-00.jpg", "img-08.jpg", "img-06.jpg", "img-10.jpg"],
  hospitality: "img-05.jpg",
  visit: "img-08.jpg",
} as const;

export const menuItems = [
  {
    file: "img-09.jpg",
    name: "Mont Blanc",
    detail: "Coffee finished with whipped cream.",
    price: "RP.48.000",
  },
  {
    file: "img-02.jpg",
    name: "Latte",
    detail: "Espresso and steamed milk.",
    price: "RP.32.000",
  },
  {
    file: "img-01.jpg",
    name: "Avocado toast",
    detail: "Toast stacked with avocado.",
    price: "RP.55.000",
  },
  {
    file: "img-04.jpg",
    name: "Cheeseburger",
    detail: "Beef patties and cheese.",
    price: "RP.69.000",
  },
] as const;
