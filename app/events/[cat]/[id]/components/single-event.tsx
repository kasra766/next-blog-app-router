"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

import { fetchSingleEvent } from "../api";
import { useSubmit } from "../hooks";

import "./single-event-style.sass";

export function SingleEvent() {
  const { id, cat } = useParams();
  const { data } = useQuery(["singleEvent", id, cat], () =>
    fetchSingleEvent(cat, id)
  );
  const { description, image, title } = data?.event ?? {
    description: "",
    image: "",
    title: "",
  };
  const { inputEmail, messageDetail, onSubmit } = useSubmit();

  return (
    <div className="flex flex-col gap-3">
      <h1>{id}</h1>
      <Image src={image} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>{description}</p>
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <label htmlFor="email">Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
          className="p-2 rounded focus:outline-violet-400"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p style={{ color: messageDetail.color }}>{messageDetail.message}</p>
    </div>
  );
}
