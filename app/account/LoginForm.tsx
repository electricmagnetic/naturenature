"use client";

import { useState, SyntheticEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import Message from "@/components/ui/Message";
import Loader from "@/components/ui/Loader";
import type { Database } from "@/types/_supabase";

enum LoginType {
  EMAIL,
}

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  // fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // helpers
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleLogin = (loginType: LoginType) => (e: SyntheticEvent) => {
    e.preventDefault();

    // Reset on resubmission
    setStatus("");
    setIsError(false);

    startTransition(async () => {
      if (loginType === LoginType.EMAIL) {
        if (!email || !password) {
          setIsError(true);
          setStatus("Missing email or password");
          return;
        }

        const {
          data: { user },
          error,
        } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setIsError(true);
          setStatus(`${error.status}: ${error.message}`);
        }
        // TODO check implications of adding Error catcher (using 'throw')

        if (user) {
          setIsError(false);
          setStatus(`Login succeeded. Redirecting…`);
          router.refresh();
        }
      }
    });
  };

  return (
    <main className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title h3">Login</h1>
              <p>to {process.env.NEXT_PUBLIC_DATABASE_NAME}</p>
              {status && (
                <Message className="mb-3" isError={isError}>
                  {status}
                </Message>
              )}
              <form>
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

                <div className="d-grid">
                  <button
                    className="btn btn-primary"
                    onClick={handleLogin(LoginType.EMAIL)}
                  >
                    {isPending ? <Loader isButton /> : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
