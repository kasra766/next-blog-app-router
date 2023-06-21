import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { cwd } from "process";

type Data = {
  email: string;
  eventId: string;
};
type NextApiRequestRegisterEmail = NextApiRequest & Data;

function buildPath() {
  const dir = cwd();
  return path.join(dir, "data", "data.json");
}
function extractData(filePath: string) {
  const dataJson = fs.readFileSync(filePath);
  const data = JSON.parse(dataJson as unknown as string);
  return data;
}

export async function POST(req: Request & { body: Data }) {
  const { method, body } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return new Response("no events", {
      status: 404,
    });
  }

  const { email, eventId } = body;

  if (!email || !email.includes("a")) {
    new Response("Invalid email address", { status: 422 });
    return;
  }

  const newAllEvents = allEvents.map((ev: any) => {
    if (ev.id !== eventId) return ev;
    if (ev.emails_registered.includes(email)) {
      new Response("email already has been registered", { status: 409 });

      return ev;
    }
    return { ...ev, emails_registered: [...ev.emails_registered, email] };
  });

  fs.writeFileSync(
    filePath,
    JSON.stringify({ events_categories, allEvents: newAllEvents })
  );

  new Response(
    `your email registered successfully, email:${email} for the event: ${eventId}`,
    { status: 200 }
  );
}
