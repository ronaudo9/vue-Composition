type products={
  "id": number,
  "name": string,
  "href": string,
  "price": string,
  "imageSrc": string,
  "imageAlt": string
};

type carts={
  userId: number,
  itemId: number,
  name: string,
  href: string,
  price:string,
  imageSrc:
    string,
  imageAlt:
    string,
};

export type {  products };
export type {carts};
