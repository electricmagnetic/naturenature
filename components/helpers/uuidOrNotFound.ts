import { notFound } from "next/navigation";
import { z } from "zod";

export default function uuidOrNotFound(value: string): void {
  const uuidSchema = z.string().uuid();

  try {
    uuidSchema.parse(value);
  } catch {
    notFound();
  }
}
