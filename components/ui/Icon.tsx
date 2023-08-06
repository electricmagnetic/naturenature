import clsx from "clsx";

export default function Icon({
  iconName,
  className,
  label,
  ...others
}: {
  iconName: string;
  className?: string;
  label?: string;
}) {
  const classes = clsx(`bi`, `bi-${iconName}`, !label && "me-2", className);

  if (label) return <i className={classes} aria-label={label} {...others}></i>;

  return <i className={classes} aria-hidden="true" {...others}></i>;
}
