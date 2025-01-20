"use client";

import React, { useEffect } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Newsletter from "../Common/Newsletter";
import RecentlyViewdItems from "./RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector } from "@/redux/store";

const ShopDetails = () => {
  const { openPreviewModal } = usePreviewSlider();

  const alreadyExist = localStorage.getItem("productDetails");
  const productFromStorage = useAppSelector(
    (state) => state.productDetailsReducer.value
  );

  const product = alreadyExist ? JSON.parse(alreadyExist) : productFromStorage;

  useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(product));
  }, [product]);

  const productData = {
    title: "Edge of Tomorrow: Reckoning",
    reviews: 125,
    price: 12.99,
    discountedPrice: 7.99,
    id: 1,
    imgs: {
      thumbnails: ["/images/products/a.jpg", "/images/products/a.jpg"],
      previews: ["/images/products/a.jpg", "/images/products/a.jpg"],
    },
    video: {
      trailer: "https://www.youtube.com/embed/vw61gCe2oqI",
      fullVideo: "https://www.youtube.com/embed/vw61gCe2oqI",
    },
    screenplay: "/images/products/_500_DAYS_OF_SUMMER.pdf",
    genre: "Science Fiction | Thriller",
    description:
      "A soldier trapped in a time loop battles alien invaders while unraveling a conspiracy that could destroy humanity. Will he find a way to break free before it's too late?",
  };

  return (
    <>
      <Breadcrumb title={"Shop Details"} pages={["shop details"]} />

      {product?.title === "" ? (
        "Please add a product"
      ) : (
        <>
          <section className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="relative aspect-video group overflow-hidden rounded-lg shadow-md">
                    <iframe
                      src={productData.video.trailer}
                      title={`${productData.title} Trailer`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">
                      {productData.title}
                    </h2>
                    <p className="mt-1 text-gray-600">{productData.genre}</p>
                    <div className="mt-4 flex items-center justify-center gap-4">
                      <span className="text-lg font-semibold text-red-500 line-through">
                        ${productData.price}
                      </span>
                      <span className="text-2xl font-bold text-gray-800">
                        ${productData.discountedPrice}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      {productData.reviews} Reviews
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* <div>
                    <embed
                      src={`${productData.screenplay}#toolbar=0&page=1`}
                      width="100%"
                      height="330px"
                      type="application/pdf"
                      className="border border-gray-300 rounded-md"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      *Only the first 5 pages of the screenplay are available to view. Download for full access.
                    </p>
                  </div> */}

                  <div>
                    <h3 className="font-bold text-xl text-gray-800">
                      Description
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {productData.description}
                    </p>
                  </div>

                  {/* Checkout Button */}
                  <div className="flex justify-end">
                  <button
                  type="button"
                  className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                >
                   Add to Cart
                </button>
                  <button
                  type="button"
                  className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                >
                   Buy Story
                </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <RecentlyViewdItems />
          <Newsletter />
        </>
      )}
    </>
  );
};

export default ShopDetails;
