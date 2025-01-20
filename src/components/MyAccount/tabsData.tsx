import React, { useEffect } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Newsletter from "../Common/Newsletter";
import RecentlyViewdItems from "../ShopDetails/RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector } from "@/redux/store";
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { degrees, PDFDocument, rgb } from 'pdf-lib';  // For watermarking
import Page from "@/app/(site)/page";

// Function to add watermark to PDF before rendering
const addWatermarkToPDF = async (pdfUrl) => {
  const existingPdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  firstPage.drawText('© Brent Dunham, 2025', {
    x: width / 2 - 100,
    y: height / 2,
    size: 50,
    color: rgb(0.75, 0.75, 0.75),
    rotate: degrees(-45),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

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

  useEffect(() => {
    // Prevent right-click to reduce copy attempts
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    // Disable the print action
    const handlePrint = (event) => {
      event.preventDefault(); // Stop the print behavior
    };

    window.onbeforeprint = handlePrint;

    return () => {
      window.onbeforeprint = null; // Cleanup when the component is unmounted
    };
  }, []);

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
    author: "Brent Dunham", // Added author field
    isNewStory: true,  // New story flag
    isUnsoldStory: true, // Unsold story flag
    copyright: "© Brent Dunham, 2025",  // Added copyright
    comments: [
      { user: "John Doe", comment: "Amazing storyline!" },
      { user: "Jane Smith", comment: "Thrilling experience. Would watch again!" },
    ],
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
                    <p className="text-sm text-gray-500 mt-2">{productData.copyright}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">
                      Screenplay Preview
                    </h3>
                    <Worker
                      workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js"
                    >
                      <div className="border border-gray-300 rounded-md overflow-hidden">
                        <Viewer
                          fileUrl={productData.screenplay}
                          initialPage={0}
                          renderPage={(props) =>
                            props.pageIndex < 5 ? (
                              <Page key={props.pageIndex} {...props} />
                            ) : null
                          }
                        />
                      </div>
                    </Worker>

                    <p className="text-sm text-gray-500 mt-2">
                      *Only the first 5 pages are displayed. Download for full access.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-gray-800">
                      Description
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {productData.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Reviews & Comments</h3>
                    <div className="mt-4">
                      {productData.comments.map((comment, index) => (
                        <div key={index} className="border-t border-gray-200 pt-4">
                          <p className="font-semibold text-black">{comment.user}</p>
                          <p className="mt-2 text-black">{comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <div className="flex justify-center">
                    <button
                      className="px-6 py-3 text-lg font-semibold text-black bg-blue-600 hover:bg-blue-700 shadow-md transition"
                      onClick={() => alert("Proceeding to checkout...")}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Button Fixed at Bottom Right */}
          <div className="fixed bottom-5 right-5">
            <button
              className="px-6 py-3 text-lg font-semibold text-black bg-blue-600 hover:bg-blue-700 shadow-md transition"
              onClick={() => alert("Button action!")}
            >
              VKR Coups
            </button>
          </div>

          <RecentlyViewdItems />
          <Newsletter />
        </>
      )}
    </>
  );
};

export default ShopDetails;
