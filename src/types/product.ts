export type Product = {
  title: string;
  reviews: number;
  price: number;
  video?:{
    trailer: string, // Fictitious YouTube trailer link
    fullVideo: string, // Fictitious Netflix full video link
  };
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
  screenplay:string;
  genre:string;
  description:string;
};
