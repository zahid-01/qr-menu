"use client";
import React from "react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { cn } from "../utils/util";
import { BASE_URI } from "../utils/constants";

export default function SignupForm() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch("http://localhost:5050/api/v1/auth/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (!res.ok) throw new Error("Signup failed");

  //     const data = await res.json();

  //     localStorage.setItem("user", JSON.stringify(data));

  //     router.push("/userprofile");
  //   } catch (err) {
  //     console.error("Signup error:", err);
  //     alert("Signup failed. Please try again.");
  //   }
  // };
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
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="raybit@menu.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          // onSubmit={handleSubmit}
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
