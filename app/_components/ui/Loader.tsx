import clsx from "clsx";

export default function Loader({ isButton = false }: { isButton?: boolean }) {
  return (
    <div
      className={clsx(
        "spinner-border",
        isButton ? "spinner-border-sm" : "text-primary m-1",
      )}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
