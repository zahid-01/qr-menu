"use client";
import React, { useState } from "react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Input } from "../components/Input/page";
import { Label } from "../components/Label/page";
import { cn } from "../utils/util";
import { BASE_URI } from "../utils/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const showToast = (msg) => {
    setErrorMessage(msg);
    setTimeout(() => setErrorMessage(""), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URI}/api/v1/auth/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage =
          data?.message?.[0]?.message || "Signup failed. Please try again.";
        throw new Error(errorMessage);
      }

      const { user, token } = data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      router.push(`/createBusiness/${token}`);
    } catch (err) {
      console.error("Signup error:", err);
      showToast(err.message || "An unknown error occurred during signup.");
    }
  };

  const googleLogin = () => {
    window.location.href = `${BASE_URI}/api/v1/auth/google/signup`;
  };
  return (
    <div className="shadow-input mt-20 mx-auto max-w-md rounded-none bg-[#6220fb] p-4 md:rounded-2xl md:p-8">
      <h2 className="text-center text-xl font-bold text-white">
        Welcome to Menu
      </h2>
      <p className="text-center mt-2 max-w-sm text-sm text-white ">
        Signup to continue
      </p>
      {errorMessage && (
        <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded-md">
          {errorMessage}
        </div>
      )}
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="raybit@menu.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full mt-8 rounded-md bg-white font-medium text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
      <div className="flex flex-col space-y-4">
        <button
          className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-white px-4 font-medium text-black"
          type="submit"
          onClick={googleLogin}
        >
          <IconBrandGoogle className="h-4 w-4 text-black" />
          <span className="text-sm text-black">Signup with Google</span>
          <BottomGradient />
        </button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link href="/Login">
          <span className="text-md font-medium text-white hover:text-black underline hover:underline-offset-2 transition duration-200">
            Already have an account?
          </span>
        </Link>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-black to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
