import type { Metadata } from "next";
import HomePage from "./portfolio/HomePage";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return <HomePage />;
}