"use client";

import { usePathname, useSearchParams } from "next/navigation";

import createQueryString from "@/components/helpers/createQueryString";
import ActionButton from "./ActionButton";

export default function SelectButton({
  fieldName,
  value,
}: {
  fieldName: string;
  value: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <ActionButton
      href={`${pathname}?${createQueryString(fieldName, value, searchParams)}`}
      iconName="check2-circle"
      label="Select"
    />
  );
}
