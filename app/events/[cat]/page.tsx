import { Metadata } from "next";
import { EventCat } from "./components";

export const metadata: Metadata = {
  title: "events categories",
};
export default function CatPage({ params }: { params: { cat: string } }) {
  return <EventCat cat={params.cat} />;
}
