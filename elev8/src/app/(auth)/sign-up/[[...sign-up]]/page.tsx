import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign Up | Elev8",
};

export default function SignUpPage() {
  return <SignUp forceRedirectUrl="/dashboard" />;
}
