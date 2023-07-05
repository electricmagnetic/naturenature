"use client";

import { useState, SyntheticEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Loader } from "@/app/components/utilities";
import type { Database } from "@/types/supabase";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  // fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // helpers
  const [status, setStatus] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSignIn = async (e: SyntheticEvent) => {
    e.preventDefault();

    setStatus("Logging in");

    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setStatus(`${error.status}: ${error.message}`);
    if (user) {
      setStatus(`Login succeeded`);
      startTransition(() => router.refresh());
    }
  };

  return (
    <main className="container">
      <form className="m-5">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSignIn}>
          Sign in
        </button>

        {isPending && <Loader />}
        {status && <span>{status}</span>}
      </form>
    </main>
  );
}
