// import { createSlice } from "@reduxjs/toolkit";
// import { Product } from "@/types/product";

// type InitialState = {
//   value: Product;
// };

// const initialState = {
//   value: {title: "",
//   reviews: 0,
//   price: 0,
//   discountedPrice: 0,
//   id: 1,
//   imgs: {
//     thumbnails: [
//       "/images/movies/1.png",
//       "/images/movies/1.png",
//     ],
//     previews: [
//       "/images/movies/1.png",
//       "/images/movies/1.png",
//     ],
//   },
//   video: {
//     trailer: "https://www.youtube.com/watch?v=video1", // Fictitious YouTube trailer link
//     fullVideo: "https://www.youtube.com/watch?v=video1", // Fictitious Netflix full video link
//   },
//   screenplay: "/screenplays/unorthodox-screenplay.pdf",
//   genre: "Drama",
//   description: "A young woman leaves her ultra-orthodox Jewish community in Brooklyn to forge a new path in Berlin. Her journey of self-discovery is a testament to courage and resilience."
// },
// } as InitialState;

// export const productDetails = createSlice({
//   name: "productDetails",
//   initialState,
//   reducers: {
//     updateproductDetails: (_, action) => {
//       return {
//         value: {
//           ...action.payload,
//         },
//       };
//     },
//   },
// });

// export const { updateproductDetails } = productDetails.actions;
// export default productDetails.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState: InitialState = {
  value:  {title: "Unorthodox",
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
};

export const productDetails = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
