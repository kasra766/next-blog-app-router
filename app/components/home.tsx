import Image from "next/image";
import Link from "next/link";

import { fetchEventCategories } from "@/services/file-api";

export async function HomePage() {
  const { events_categories: data } = await fetchEventCategories();
  return (
    <>
      {data.map(({ description, id, image, title }) => (
        <div key={id}>
          <Link href={`/events/${id}`} className="flex flex-col gap-1">
            <Image src={image} alt={title} width={200} height={100} />
            <h2 className="text-xl font-bold" data-testid={id}>
              {title}
            </h2>
            <p>{description}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
