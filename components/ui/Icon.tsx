export default function Icon({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) {
  return <i className={`bi bi-${iconName} ${className}`}></i>;
}
