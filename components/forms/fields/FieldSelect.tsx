import { useEffect, useState } from "react";
import clsx from "clsx";
import { useController } from "react-hook-form";

import useDictionary from "@/components/dictionary/useDictionary";
import Wrapper from "./Wrapper";

import type { TableRow } from "@/types/database";
import type FieldProperties from "./Properties";

export default function FieldSelect({
  dictionaryClass,
  dictionaryType,
  name,
  label,
  ...others
}: FieldProperties & {
  dictionaryClass: string;
  dictionaryType?: string;
}) {
  const {
    field: { value, onChange, ...fieldOthers },
    fieldState: { invalid, error },
  } = useController({ name });

  const dictionary = useDictionary();
  const [options, setOptions] = useState<TableRow<"dictionary">[]>();

  // Get options from dictionary
  useEffect(() => {
    if (dictionary) {
      const dictionaryByClass = dictionary.filter(
        (term) => term.class === dictionaryClass,
      );

      const dictionaryByTypeAndClass =
        dictionaryType &&
        dictionaryByClass.filter((term) => term.type === dictionaryType);

      setOptions(dictionaryByTypeAndClass || dictionaryByClass);
    }
  }, [dictionary, dictionaryType, dictionaryClass, setOptions]);

  // Field should be disabled if a dictionaryType is expected but not provided (i.e. an empty string)
  // Note that this is different to a select field without a dictionaryType (i.e. undefined)
  const disabled = !!(!dictionaryType && dictionaryType !== undefined);

  return (
    <Wrapper name={name} label={label} error={error}>
      <select
        className={clsx("form-select", invalid && "is-invalid")}
        value={value || ""}
        onChange={(event) => onChange(event.target.value || null)}
        {...fieldOthers}
        {...others}
        disabled={disabled}
      >
        <option value=""></option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </Wrapper>
  );
}
