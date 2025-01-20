// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css/pagination";
// import "swiper/css";

// import Image from "next/image";

// const HeroCarousal = () => {
//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Autoplay, Pagination]}
//       className="hero-carousel"
//     >
//       <SwiperSlide>
//         <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
//           <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
//             <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
//               <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
//                 30%
//               </span>
//               <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
//                 Sale
//                 <br />
//                 Off
//               </span>
//             </div>

//             <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
//               <a href="#">True Wireless Noise Cancelling Headphone</a>
//             </h1>

//             <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis in
//             </p>

//             <a
//               href="#"
//               className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
//             >
//               Shop Now
//             </a>
//           </div>

//           <div>
//             {/* <Image
//               src="/images/hero/banner-1.jpeg"
//               alt="headphone"
//               width={351}
//               height={358}
//             /> */}
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         {" "}
//         <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
//           <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
//             <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
//               <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
//                 30%
//               </span>
//               <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
//                 Sale
//                 <br />
//                 Off
//               </span>
//             </div>

//             <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
//               <a href="#">True Wireless Noise Cancelling Headphone</a>
//             </h1>

//             <p>
//               Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum
//               nec suscipit.
//             </p>

//             <a
//               href="#"
//               className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
//             >
//               Shop Now
//             </a>
//           </div>

//           <div>
//             {/* <Image
//               src="/images/hero/hero-01.png"
//               alt="headphone"
//               width={351}
//               height={358}
//             /> */}
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default HeroCarousal;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {/* Slide 1: Sell Your Stories */}
      <SwiperSlide>
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-gray-100 text-gray-800 rounded-lg shadow-md h-[400px] sm:h-[500px] lg:h-[600px] p-6 sm:p-12">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
              Share Your Story <br /> with the World
            </h1>
            <h1 className=" my-4 text-dark text-xl sm:text-xl mb-3">
              Turn your creativity into opportunity by sharing your story with an international audience.
            </h1>
            <a
              href="#" className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2: Buy Inspiring Stories */}
      <SwiperSlide>
        <div className="flex items-center justify-center bg-gradient-to-r from-white to-gray-50 text-gray-800 rounded-lg shadow-md h-[400px] sm:h-[500px] lg:h-[600px] p-8 sm:p-12">
          <div className="max-w-xl text-center sm:text-left">
          <h1 className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
              Buy Stories for <br /> Your Next Big Project
            </h1>
            <h1 className=" my-4 text-dark text-xl sm:text-xl mb-3">
              Discover compelling stories crafted by talented storytellers across the globe.
            </h1>
            <a
              href="#" className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Browse Stories
            </a>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3: Collaborate Across Borders */}
      <SwiperSlide>
        <div className="flex items-center justify-center bg-gradient-to-r from-gray-50 to-blue-50 text-gray-800 rounded-lg shadow-md h-[400px] sm:h-[500px] lg:h-[600px] p-8 sm:p-12">
          <div className="max-w-xl text-center sm:text-left">
          <h1 className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
              Collaborate and <br /> Expand Your Reach
            </h1>
            <h1 className=" my-4 text-dark text-xl sm:text-xl mb-3">
              Join a global community of writers, buyers, and creators connecting through storytelling.
            </h1>
            <a
              href="#" className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Join Now
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
