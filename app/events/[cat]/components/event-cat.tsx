import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { fetchEventCategories } from "@/services/file-api";

export const EventCat = memo(async function EventCat({ cat }: { cat: string }) {
  const { allEvents: data } = await fetchEventCategories();

  return (
    <div>
      <h1>Events in {cat}</h1>
      {data.map(({ city, description, id, image, title }) => (
        <Link key={id} href={`/events/${city}/${id}`}>
          <Image src={image} alt={title} width={300} height={300} />
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
      ))}
    </div>
  );
});
