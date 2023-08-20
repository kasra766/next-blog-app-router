export interface catEventType {
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
}

export interface partialEventProperty {
  city: string;
  emails_registered: string[];
}

export interface allEventsType {
  data: Array<catEventType["data"][number] & partialEventProperty>;
}

export interface IProps {
  events_categories: catEventType["data"];
  allEvents: allEventsType["data"];
}
