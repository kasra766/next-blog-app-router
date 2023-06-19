import { memo } from "react";
import Image from "next/image";

import { fetchSingleEvent } from "../api";

export const SingleEvent = memo(async function SingleEvent({
  id,
  cat,
}: {
  id: string;
  cat: string;
}) {
  const {
    event: { image, title, description },
  } = await fetchSingleEvent(cat, id);
  return (
    <div>
      <h1>{id}</h1>
      <Image src={image} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <form onSubmit={onSubmit}>
          <label htmlFor="email">Get Registered for this event!</label>
          <input
            ref={inputEmail}
            type="email"
            id="email"
            placeholder="Please insert your email here"
          />
          <button type="submit">Submit</button>
        </form>
        <p style={{ color: messageDetail.color }}>{messageDetail.message}</p> */}
    </div>
  );
});
