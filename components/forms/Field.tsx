"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { FieldError, useController } from "react-hook-form";
import clsx from "clsx";

import useDictionary from "@/components/dictionary/useDictionary";
import type { TableRow } from "@/types/database";

type FieldProperties = {
  name: string;
  label: string;
  error?: FieldError;
};

const Wrapper = ({
  name,
  label,
  error,
  children,
}: PropsWithChildren<FieldProperties>) => (
  <>
    <label className="form-label" htmlFor={name}>
      {label}
    </label>
    {children}
    {error && (
      <div className="invalid-feedback">{error.message?.toString()}</div>
    )}
  </>
);

export const FieldSelect = ({
  dictionaryClass,
  dictionaryType,
  name,
  label,
}: FieldProperties & {
  dictionaryClass: string;
  dictionaryType?: string;
}) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name });

  const dictionary = useDictionary();
  const [options, setOptions] = useState<TableRow<"dictionary">[]>();

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
  }, [dictionary, setOptions]);

  return (
    <Wrapper name={name} label={label} error={error}>
      <select
        className={clsx("form-select", invalid && "is-invalid")}
        {...field}
      >
        <option value="" selected></option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </Wrapper>
  );
};

const Field = ({
  type = "text",
  name,
  label,
  ...others
}: FieldProperties & {
  type: string;
}) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name });

  return (
    <Wrapper name={name} label={label} error={error}>
      <input
        className={clsx("form-control", invalid && "is-invalid")}
        id={name}
        {...field}
        {...others}
      />
    </Wrapper>
  );
};

Field.Select = FieldSelect;

export default Field;
