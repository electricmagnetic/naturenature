import { DateTime as LuxonDateTime } from "luxon";

export default function DateTime({ datetime }: { datetime: string }) {
  return (
    <>
      {LuxonDateTime.fromISO(datetime).toLocaleString(
        LuxonDateTime.DATETIME_MED,
        { locale: process.env.NEXT_PUBLIC_LOCALE },
      )}
    </>
  );
}
