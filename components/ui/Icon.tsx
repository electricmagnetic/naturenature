import clsx from "clsx";

export default function Icon({
  iconName,
  className,
  ...others
}: {
  iconName: string;
  className?: string;
}) {
  return (
    <i className={clsx(`bi`, `bi-${iconName}`, className)} {...others}></i>
  );
}
