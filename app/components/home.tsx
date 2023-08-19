import Image from "next/image";
import Link from "next/link";

import { fetchEventCategories } from "@/services/file-api";
import { catEventType } from "@/services/types";

const eventList = ({
  description,
  id,
  image,
  title,
}: catEventType["data"][number]) => (
  <div key={id}>
    <Link
      href={`/events/${id}`}
      className="flex flex-col gap-4 max-w-xl group "
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] md:blur-sm md:grayscale group-hover:scale-110 group-hover:blur-none group-hover:grayscale-0 rounded-full transition-all"
      />
      <h1 className="text-xl font-bold mt-3" data-testid={id}>
        {title}
      </h1>
      <p className="whitespace-normal	">{description}</p>
    </Link>
  </div>
);

export async function HomePage() {
  const { events_categories: data } = await fetchEventCategories();

  return (
    <div className="min-w-full flex flex-col justify-around gap-6 md:flex-row">
      {data.map(eventList)}
    </div>
  );
}
