"use client";

import { useState, SyntheticEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import Message from "@/components/ui/Message";
import Loading from "@/app/loading";
import type { Database } from "@/types/supabase";

const DOMAINS = ["keadatabase.nz", "keaconservation.nz"];

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

    if (!email || !password) {
      setStatus("Missing email or password");
      return;
    }

    // Standard login
    setStatus("Logging in");

    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setStatus(`${error.status}: ${error.message}`);
    // TODO check implications of adding Error catcher

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

        {isPending && <Loading />}
        {status && <Message>{status}</Message>}
      </form>
    </main>
  );
}
