import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign In | Elev8",
};

export default function SignInPage() {
  return <SignIn />;
}
