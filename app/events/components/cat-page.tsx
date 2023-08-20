import { memo } from "react";
import { fetchEventCategories } from "@/services/file-api";
import { EventGenerator } from "@/components";

export const EventPage = memo(async function EventPage() {
  const { events_categories: data } = await fetchEventCategories();

  return (
    <div>
      <h1 className="text-3xl">Events</h1>
      <div className="list-of-link-wrapper mt-2">
        {data.map(i => (
          <EventGenerator {...i} />
        ))}
      </div>
    </div>
  );
});
