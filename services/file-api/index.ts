import axios from "axios";
import { IProps } from "../types";

export async function fetchEventCategories(): Promise<IProps> {
  const { events_categories ,allEvents} = await import("@/data/data.json");

  return {events_categories,allEvents};
}



interface registerEmailType{
    email:string,
    eventId:string
}

export const registerEmail = (data:registerEmailType) => axios.post("/api",data);
