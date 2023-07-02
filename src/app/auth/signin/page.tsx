"use client";

import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useRef } from "react";

const SignIn = () => {
  const usernamee = useRef("");
  const pass = useRef("");
  const { data: session } = useSession();
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => (usernamee.current = e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => (pass.current = e.target.value)}
      />
      <button
        onClick={() =>
          signIn("credentials", {
            username: usernamee.current,
            password: pass.current,
            redirect: true,
            callbackUrl: "/",
          })
        }
      >
        log
      </button>
    </div>
  );
};

export default SignIn;
