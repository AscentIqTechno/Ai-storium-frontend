import Home from "@/components/Home";
import { Metadata } from "next";
import "antd/dist/reset.css"; // Import Ant Design styles

export const metadata: Metadata = {
  title: "NextCommerce | Nextjs E-commerce template",
  description: "This is Home for NextCommerce Template",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
