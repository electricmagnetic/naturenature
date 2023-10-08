import { notFound } from "next/navigation";
import { z } from "zod";

const uuidSchema = z.string().uuid();

export const uuidOrNotFound = (value: string) => {
  try {
    uuidSchema.parse(value);
  } catch {
    notFound();
  }
};

export const isUuid = (value: string) => uuidSchema.safeParse(value).success;
