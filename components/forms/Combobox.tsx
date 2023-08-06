import { useState } from "react";
import clsx from "clsx";
import { useCombobox } from "downshift";

import Icon from "@/components/ui/Icon";

type Book = {
  author: string;
  title: string;
};

export default function ComboBoxExample() {
  const books: Book[] = [
    { author: "Harper Lee", title: "To Kill a Mockingbird" },
    { author: "Lev Tolstoy", title: "War and Peace" },
    { author: "Fyodor Dostoyevsy", title: "The Idiot" },
    { author: "Oscar Wilde", title: "A Picture of Dorian Gray" },
    { author: "George Orwell", title: "1984" },
    { author: "Jane Austen", title: "Pride and Prejudice" },
    { author: "Marcus Aurelius", title: "Meditations" },
    { author: "Fyodor Dostoevsky", title: "The Brothers Karamazov" },
    { author: "Lev Tolstoy", title: "Anna Karenina" },
    { author: "Fyodor Dostoevsky", title: "Crime and Punishment" },
  ];
  function getBooksFilter(inputValue: string | undefined) {
    return function booksFilter(book: Book) {
      return (
        !inputValue ||
        book.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        book.author.toLowerCase().includes(inputValue.toLowerCase())
      );
    };
  }

  function ComboBox() {
    const [items, setItems] = useState(books);
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
        setItems(books.filter(getBooksFilter(inputValue)));
      },
      items,
      itemToString(item) {
        return item ? item.title : "";
      },
    });

    return (
      <div className="dropdown">
        <div className="mb-3">
          <div className="input-group">
            <div className="form-floating">
              <input
                placeholder="Best book ever"
                className="form-control"
                {...getInputProps()}
              />
              <label className="form-label" {...getLabelProps()}>
                Choose your favorite book
              </label>
            </div>
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
          </div>
        </div>
        <ul
          className={clsx(`dropdown-menu`, isOpen && items.length && "show")}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => (
              <li key={`${index}`} {...getItemProps({ item, index })}>
                <button
                  className={clsx(
                    "dropdown-item",
                    highlightedIndex === index && "active",
                    selectedItem === item && "active",
                  )}
                  type="button"
                >
                  <span>{item.title}</span> <small>{item.author}</small>
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
  return <ComboBox />;
}
