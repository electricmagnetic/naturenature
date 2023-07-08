"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/supabase";

/**
 * Delete an object with 'id' from the table 'from'. Require that the user clicks to confirm deletion.
 */
export default function DeleteObjectForm({
  from,
  id,
}: {
  from: string;
  id: string;
}) {
  const supabase = createClientComponentClient<Database>();

  const router = useRouter();
  const [error, setError] = useState<Error | undefined>();
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [helperText, setHelperText] = useState(`Delete ${id} from ${from}?`);
  const [buttonClassName, setButtonClassName] = useState("btn-warning");

  const handleDelete = async () => {
    if (!confirmDeletion) {
      setHelperText("Are you sure? Click again to confirm.");
      setButtonClassName("btn-danger");
      setConfirmDeletion(true);
    } else {
      const { error } = await supabase.from(from).delete().eq("id", id);

      if (error) setError(Error(error.message));
      router.push(`/${from}`, { shallow: false });
    }
  };

  if (error) throw error;

  return (
    <>
      <p>{helperText}</p>
      <button className={`btn ${buttonClassName}`} onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-light" onClick={() => router.back()}>
        Cancel
      </button>
    </>
  );
}
