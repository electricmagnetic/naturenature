"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { useController } from "react-hook-form";
import { useCombobox } from "downshift";
import debounce from "lodash.debounce";

import Icon from "@/components/ui/Icon";
import Wrapper from "./Wrapper";
import type { LookupItem } from "@/types/database";
import type FieldProperties from "./Properties";

const DEBOUNCE_MS = 1000;

export default function FieldCombobox({
  name,
  label,
  lookupItems,
  lookupItem,
  ...others
}: FieldProperties & {
  lookupItems: (string?: string) => Promise<LookupItem[]>;
  lookupItem: (id?: string) => Promise<LookupItem | null>;
}) {
  const {
    field: { onChange: fieldOnChange, value: fieldValue, ...fieldOthers },
    fieldState: { invalid, error },
  } = useController({ name });

  const [items, setItems] = useState<LookupItem[]>([]); // List of items in dropdown
  const [search, setSearch] = useState<string>(""); // Search term (text)
  const [selectedItem, setSelectedItem] = useState<LookupItem | null>(null); // selected item

  // Lookup items from provided function
  const getItems = useCallback(async () => {
    lookupItems(search).then((data) => setItems(data));
  }, [lookupItems, setItems, search]);

  // Get items when search changes
  useEffect(() => {
    getItems();
  }, [getItems, search]);

  // Handle selected item change
  const onSelectedItemChange = useMemo(
    () =>
      ({ selectedItem }: { selectedItem?: LookupItem | null }) => {
        setSelectedItem(selectedItem || null);
        fieldOnChange(selectedItem?.id);
      },
    [],
  );

  // Handle debouncing (to avoid spamming API)
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

  // TEMP (to resolve)
  const foo = useCallback(() => {
    lookupItem(fieldValue).then((data) => setSelectedItem(data));
  }, [lookupItem, setSelectedItem, fieldValue]);

  useEffect(() => {
    foo();
  }, [foo, fieldValue]);

  const combobox = useCombobox<LookupItem>({
    items,
    onInputValueChange,
    onSelectedItemChange,
    itemToString: (item) => (item ? item.name : ""),
    selectedItem: selectedItem,
    id: name,
  });

  return (
    <div className="dropdown">
      <Wrapper.InputGroup
        name={name}
        label={label}
        error={error}
        renderInputGroupLabel={() => (
          <label
            className="form-label"
            htmlFor={name}
            {...combobox.getLabelProps()}
          >
            {label}
          </label>
        )}
        renderInputGroupButton={() => (
          <>
            <button
              aria-label="toggle menu"
              className="btn btn-outline-secondary"
              type="button"
              {...combobox.getToggleButtonProps()}
            >
              {combobox.isOpen ? (
                <Icon iconName="chevron-up" label="Open" />
              ) : (
                <Icon iconName="chevron-down" label="Closed" />
              )}
            </button>
            <button
              aria-label=""
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => {
                combobox.reset();
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
          {...combobox.getInputProps()}
        />
        <ul
          className={clsx(
            `dropdown-menu`,
            combobox.isOpen && items.length && "show",
          )}
          {...combobox.getMenuProps()}
        >
          {combobox.isOpen &&
            items.map((item, index) => (
              <li
                key={`${item.id}`}
                {...combobox.getItemProps({ item, index })}
              >
                <button
                  className={clsx(
                    "dropdown-item",
                    combobox.highlightedIndex === index && "active",
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
