"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

import type { Database } from "@/types/supabase";

type Todo = Database["public"]["Tables"]["events"]["Row"];

export default function Home() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("events").select();
      setTodos(data);
    };

    getData();
  }, []);

  return todos ? (
    <pre>{JSON.stringify(todos, null, 2)}</pre>
  ) : (
    <p>Loading events...</p>
  );
}
