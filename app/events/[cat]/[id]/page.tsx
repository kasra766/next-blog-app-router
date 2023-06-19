import { SingleEvent } from "./components";
export default function Event({
  params,
}: {
  params: { cat: string; id: string };
}) {
  return <SingleEvent {...params} />;
}
