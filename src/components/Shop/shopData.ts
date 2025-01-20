import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    title: "Unorthodox",
    reviews: 325,
    price: 14.99,
    discountedPrice: 9.99,
    id: 1,
    imgs: {
      thumbnails: [
        "/images/movies/1.png",
        "/images/movies/1.png",
      ],
      previews: [
        "/images/movies/1.png",
        "/images/movies/1.png",
      ],
    },
    video: {
      trailer: "https://www.youtube.com/watch?v=video1", // Fictitious YouTube trailer link
      fullVideo: "https://www.youtube.com/watch?v=video1", // Fictitious Netflix full video link
    },
    screenplay: "/screenplays/unorthodox-screenplay.pdf",
    genre: "Drama",
    description: "A young woman leaves her ultra-orthodox Jewish community in Brooklyn to forge a new path in Berlin. Her journey of self-discovery is a testament to courage and resilience."
  },
  {
    title: "After Life",
    reviews: 532,
    price: 12.99,
    discountedPrice: 8.99,
    id: 2,
    imgs: {
      thumbnails: [
        "/images/movies/2.png",
        "/images/movies/2.png",
      ],
      previews: [
        "/images/movies/2.png",
        "/images/movies/2.png",
      ],
    },
    video: {
      trailer: "https://www.youtube.com/watch?v=video2", // Fictitious YouTube trailer link
      fullVideo: "https://www.youtube.com/watch?v=video2", // Fictitious Netflix full video link
    },
    screenplay: "/screenplays/after-life-screenplay.pdf",
    genre: "Comedy | Drama",
    description: "A grieving man turns his pain into humor as he navigates the ups and downs of life after his wife’s death. A heartfelt exploration of loss and humanity."
  },
  {
    title: "Vis a Vis: El Oasis",
    reviews: 420,
    price: 18.99,
    discountedPrice: 13.99,
    id: 3,
    imgs: {
      thumbnails: [
        "/images/movies/3.png",
        "/images/movies/3.png",
      ],
      previews: [
        "/images/movies/3.png",
        "/images/movies/3.png",
      ],
    },
    video: {
      trailer: "https://www.youtube.com/watch?v=video3", // Fictitious YouTube trailer link
      fullVideo: "https://www.youtube.com/watch?v=video3", // Fictitious Netflix full video link
    },
    screenplay: "/screenplays/vis-a-vis-screenplay.pdf",
    genre: "Crime | Drama",
    description: "Two ex-convicts team up to execute the heist of a lifetime in this thrilling continuation of their post-prison lives."
  },
  {
    title: "The Palace",
    reviews: 254,
    price: 10.99,
    discountedPrice: 5.99,
    id: 4,
    imgs: {
      thumbnails: [
        "/images/movies/4.png",
        "/images/movies/4.png",
      ],
      previews: [
        "/images/movies/4.png",
        "/images/movies/4.png",
      ],
    },
    video: {
      trailer: "https://www.youtube.com/watch?v=video4", // Fictitious YouTube trailer link
      fullVideo: "https://www.youtube.com/watch?v=video4", // Fictitious Netflix full video link
    },
    screenplay: "/screenplays/the-palace-screenplay.pdf",
    genre: "Drama | Mystery",
    description: "Set against a luxurious European backdrop, the lives of royalty intertwine with scandal in this suspense-filled narrative."
  },
  {
    title: "Summertime",
    reviews: 361,
    price: 16.99,
    discountedPrice: 12.99,
    id: 5,
    imgs: {
      thumbnails: [
        "/images/movies/5.png",
        "/images/movies/5.png",
      ],
      previews: [
        "/images/movies/5.png",
        "/images/movies/5.png",
      ],
    },
    video: {
      trailer: "https://www.youtube.com/watch?v=video5", // Fictitious YouTube trailer link
      fullVideo: "https://www.youtube.com/watch?v=video5", // Fictitious Netflix full video link
    },
    screenplay: "/screenplays/summertime-screenplay.pdf",
    genre: "Romance | Drama",
    description: "In a small Italian town, two young people from different worlds fall deeply in love during a memorable summer."
  },
  {
    title: "The Valhalla Murders",
    reviews: 234,
    price: 12.49,
    discountedPrice: 9.49,
    id: 6,
    imgs: {
      thumbnails: [
        "/images/movies/6.png",
        "/images/movies/6.png",
      ],
      previews: [
        "/images/movies/6.png",
        "/images/movies/6.png",
      ],
    },
    video: {
      trailer: "https://www.youtube.com/watch?v=video6", // Fictitious YouTube trailer link
      fullVideo: "https://www.youtube.com/watch?v=video6", // Fictitious Netflix full video link
    },
    screenplay: "/screenplays/valhalla-murders-screenplay.pdf",
    genre: "Thriller | Mystery",
    description: "A Reykjavik detective pairs with a troubled officer to uncover chilling secrets behind Iceland’s first serial killings."
  },
  {
    title: "Alias Grace",
    reviews: 198,
    price: 15.99,
    discountedPrice: 11.99,
    id: 7,
    imgs: {
      thumbnails: [
        "/images/movies/7.png",
        "/images/movies/7.png",
      ],
      previews: [
        "/images/movies/7.png",
        "/images/movies/7.png",
      ],
    },
    video: {
      trailer: "https://www.youtube.com/watch?v=video7", // Fictitious YouTube trailer link
      fullVideo: "https://www.youtube.com/watch?v=video7", // Fictitious Netflix full video link
    },
    screenplay: "/screenplays/alias-grace-screenplay.pdf",
    genre: "Historical | Drama",
    description: "Based on true events, Grace Marks fights to prove her innocence in a case of double murder in 19th-century Canada."
  },
  {
    title: "Virgin River",
    reviews: 512,
    price: 13.99,
    discountedPrice: 10.99,
    id: 8,
    imgs: {
      thumbnails: [
        "/images/movies/8.png",
        "/images/movies/8.png",
      ],
      previews: [
        "/images/movies/8.png",
        "/images/movies/8.png",
      ],
    },
    video: {
      trailer: "https://www.youtube.com/watch?v=video8", // Fictitious YouTube trailer link
      fullVideo: "https://www.youtube.com/watch?v=video8", // Fictitious Netflix full video link
    },
    screenplay: "/screenplays/virgin-river-screenplay.pdf",
    genre: "Romantic Drama",
    description: "A nurse practitioner moves to a remote town for a fresh start and uncovers long-hidden community secrets."
  },
];

export default shopData;
