export type catEventType = {
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
};

export interface allEventsType {
  data: Array<
    catEventType["data"][number] & {
      city: string;
      emails_registered: string[];
    }
  >;
}

export interface IProps {
  events_categories: catEventType["data"];
  allEvents: allEventsType["data"];
}
