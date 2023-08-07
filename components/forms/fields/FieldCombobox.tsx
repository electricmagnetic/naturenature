"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { useController } from "react-hook-form";
import { useCombobox } from "downshift";
import debounce from "lodash.debounce";

import Icon from "@/components/ui/Icon";
import Wrapper from "./Wrapper";
import type FieldProperties from "./Properties";
import type { PostgrestError } from "@supabase/supabase-js";

const DEBOUNCE_MS = 1000;

type Item = { id: string; name: string };

/* TEMP */
const places: Item[] = [
  {
    id: "6a4f66c9-8eb1-4684-9279-158198c0268f",
    name: "South Island Wildlife Hospital",
  },
  { id: "cc6a4f89-46bb-4cff-8e6d-6aed74770b2a", name: "Deaths Corner" },
];

/* TEMP END */

export default function FieldCombobox({
  name,
  label,
  searchItems,
  ...others
}: FieldProperties & {
  searchItems: (string?: string) => Promise<{
    data: Item[] | null;
    error: PostgrestError | null;
  }>;
}) {
  const {
    field: { onChange, value, ...fieldOthers },
    fieldState: { invalid, error },
  } = useController({ name });

  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>("");

  // Fetch items from provided function
  const getItems = useCallback(async () => {
    const { data, error } = await searchItems(search);
    if (error) throw Error(error.message);
    if (data) setItems(data);
  }, [searchItems, setItems, search]);

  // Get items when search changes
  useEffect(() => {
    getItems();
  }, [getItems, search]);

  // Handle debouncing
  const onInputValueChange = useMemo(
    () =>
      debounce(
        ({ inputValue }: { inputValue?: string }) =>
          setSearch(inputValue || ""),
        DEBOUNCE_MS,
      ),
    [],
  );

  // Cancel any timeouts on unmount
  useEffect(() => {
    return () => {
      onInputValueChange.cancel();
    };
  }, []);

  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset,
  } = useCombobox<Item>({
    items,
    onInputValueChange: onInputValueChange,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem?.id);
    },
    itemToString: (item) => (item ? item.name : ""),
    initialSelectedItem: places.filter((place) => place.id === value)[0],
    id: name,
  });

  return (
    <div className="dropdown">
      <Wrapper.InputGroup
        name={name}
        label={label}
        error={error}
        renderInputGroupLabel={() => (
          <label className="form-label" htmlFor={name} {...getLabelProps()}>
            {label}
          </label>
        )}
        renderInputGroupButton={() => (
          <>
            <button
              aria-label="toggle menu"
              className="btn btn-outline-secondary"
              type="button"
              {...getToggleButtonProps()}
            >
              <Icon
                iconName={isOpen ? "chevron-up" : "chevron-down"}
                label={isOpen ? "Open" : "Closed"}
              />
            </button>
            <button
              aria-label=""
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => {
                reset();
              }}
            >
              <Icon iconName="x-circle" label="Reset" />
            </button>
          </>
        )}
      >
        <input
          placeholder={label}
          className={clsx("form-control", invalid && "is-invalid")}
          {...fieldOthers}
          {...others}
          {...getInputProps()}
        />
        <ul
          className={clsx(`dropdown-menu`, isOpen && items.length && "show")}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => (
              <li key={`${item.id}`} {...getItemProps({ item, index })}>
                <button
                  className={clsx(
                    "dropdown-item",
                    highlightedIndex === index && "active",
                    selectedItem === item && "disabled",
                  )}
                  type="button"
                >
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
        </ul>
      </Wrapper.InputGroup>
    </div>
  );
}
