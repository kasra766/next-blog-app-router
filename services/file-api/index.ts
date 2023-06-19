import { IProps } from "../types";
export async function fetchEventCategories(): Promise<IProps> {
  const { events_categories ,allEvents} = await import("@/data/data.json");

  return {events_categories,allEvents};
}

