import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchEventCategories } from "@/services/file-api";


export const EventPage = memo(async function EventPage() {
const {events_categories:data} = await fetchEventCategories()

  return (
    <div>
      <h1>Events</h1>
      {data.map(({ description, id, image, title }) => (
        <Link key={id} href={`/events/${id}`}>
          <Image src={image} alt={title} width={100} height={100} />
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
      ))}
    </div>
  );
})
