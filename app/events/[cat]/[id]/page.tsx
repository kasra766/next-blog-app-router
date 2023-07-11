import { Metadata } from "next";
import { SingleEvent } from "./components";
import { fetchSingleEvent } from "./api";

interface paramsType {
  params: { id: string; cat: string };
}

export async function generateMetadata({
  params,
}: paramsType): Promise<Metadata> {
  const {
    event: { image },
  } = await fetchSingleEvent(params.cat, params.id);

  return {
    title: params.id,
    icons: { icon: image },
  };
}

export default function Event() {
  return <SingleEvent />;
}
