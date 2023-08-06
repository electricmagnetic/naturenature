"use client";

import clsx from "clsx";
import { useController } from "react-hook-form";

import Wrapper from "./Wrapper";
import type FieldProperties from "./Properties";
import { useCombobox } from "downshift";
import Icon from "@/components/ui/Icon";
import { useState } from "react";

/* TEMP */
type Place = { id: string; name: string };

const places: Place[] = [
  {
    id: "6a4f66c9-8eb1-4684-9279-158198c0268f",
    name: "South Island Wildlife Hospital",
  },
  { id: "cc6a4f89-46bb-4cff-8e6d-6aed74770b2a", name: "Deaths Corner" },
];

function getPlacesFilter(inputValue: string | undefined) {
  return function placesFilter(place: Place) {
    return (
      !inputValue || place.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
}
/* TEMP END */

export default function FieldCombobox({
  name,
  label,
  entity,
  ...others
}: FieldProperties & {
  entity: string;
}) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name });

  const [items, setItems] = useState(places);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(places.filter(getPlacesFilter(inputValue)));
    },
    items,
    itemToString(item) {
      return item ? item.name : "";
    },
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
          <button
            aria-label="toggle menu"
            className="btn btn-outline-primary"
            type="button"
            {...getToggleButtonProps()}
          >
            <Icon
              iconName={isOpen ? "chevron-up" : "chevron-down"}
              label={isOpen ? "Open" : "Closed"}
            />
          </button>
        )}
      >
        <input
          placeholder={label}
          className={clsx("form-control", invalid && "is-invalid")}
          {...field}
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
                    selectedItem === item && "active",
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
