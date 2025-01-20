import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Authentic Stories",
    description: "Real stories verified by our team.",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Global Reach",
    description: "Share and explore stories worldwide.",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "100% Secure Transactions",
    description: "Safe and encrypted payment processes.",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Dedicated User Support",
    description: "24/7 support for all story-related queries.",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt={`${item.title} icon`} width={40} height={41} />
            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
