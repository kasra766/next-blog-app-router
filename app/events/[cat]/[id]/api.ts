import { redirect } from "next/navigation";
import { fetchEventCategories } from "@/services/file-api";

export async function fetchSingleEvent(cat: string, id: string) {
  const { allEvents } = await fetchEventCategories();
  const event = allEvents.find((ev) => ev.id === id);

  if (!event) {
    return redirect(`/event/${cat}`);
  }
  return { event };
}
