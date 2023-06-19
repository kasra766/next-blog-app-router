export interface catEventType {
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
}

export interface allEventsType {
  data: {
    id: string;
    title: string;
    city: string;
    description: string;
    image: string;
    emails_registered: string[];
  }[];
}

export interface IProps {
  events_categories: catEventType["data"];
  allEvents: allEventsType["data"];
}
