"use client";

import AuthForm from "@/components/AuthForm";
import { registerSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type="REGISTER"
    schema={registerSchema}
    defaultValues={{
      email: "",
      password: "",
      username: "",
      playerId: 0,
    }}
    onSubmit={signUp}
  />
);

export default Page;
