import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { fetchEventCategories } from "@/services/file-api";
import { EventGenerator } from "@/components";

export const EventCat = memo(async function EventCat({ cat }: { cat: string }) {
  const { allEvents: data } = await fetchEventCategories();

  return (
    <div>
      <h1>Events in {cat}</h1>
      <div className="list-of-link-wrapper  mt-2">
        {data.map(i => (
          <EventGenerator {...i} />
        ))}
      </div>
    </div>
  );
});
