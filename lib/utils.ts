import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeDuplicatedItems = (arr: string[]) =>
  arr.filter((value, index, array) => array.indexOf(value) === index);
