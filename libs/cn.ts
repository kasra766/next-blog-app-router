import { ClassNameValue, twMerge } from "tailwind-merge";

function cn(...classLists: ClassNameValue[]) {
  return twMerge(...classLists);
}
