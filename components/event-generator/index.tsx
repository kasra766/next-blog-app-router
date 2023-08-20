import Image from "next/image";
import Link from "next/link";
import type { partialEventProperty, catEventType } from "@/services/types";

type IProps = catEventType["data"][number] & Partial<partialEventProperty>;

export function EventGenerator({
  description,
  id,
  image,
  title,
  city,
  emails_registered,
}: IProps) {
  return (
    <div key={id}>
      <Link
        href={`/events${city ? "/" + city : ""}/${id}`}
        className="link-wrapper group"
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="cover-style"
        />
        <h1 className="text-xl font-bold mt-3" data-testid={id}>
          {title}
        </h1>
        <p className="whitespace-normal">{description}</p>
      </Link>
    </div>
  );
}
