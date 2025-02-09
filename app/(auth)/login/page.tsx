"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { loginSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type="LOGIN"
    schema={loginSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={signInWithCredentials}
  />
);

export default Page;
