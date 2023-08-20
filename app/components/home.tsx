import { EventGenerator } from "@/components";
import { fetchEventCategories } from "@/services/file-api";

export async function HomePage() {
  const { events_categories: data } = await fetchEventCategories();

  return (
    <div className="list-of-link-wrapper">
      {data.map(i => (
        <EventGenerator {...i} />
      ))}
    </div>
  );
}
