"use client";
import { signOut, signIn } from "next-auth/react";
import { IconGitHub, IconLogin, IconLogout } from "../assets/Icon";

export function Logout() {
  return (
    <button
      type="button"
      onClick={() => signOut()}
      className="flex imtes-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-2 text-center text-sm font-semibold ring-red-500 transition duration-100 hover:bg-red-400 md:text-base"
    >
      <IconLogout />
    </button>
  );
}

export function NavLogin() {
  return (
    <button
      type="button"
      onClick={() => signIn("github")}
      className="flex imtes-center justify-center gap-2 rounded-lg bg-teal-500 px-8 py-2 text-center text-sm font-semibold ring-teal-500 transition duration-100 hover:bg-teal-400 md:text-base"
    >
      <IconLogin />
    </button>
  );
}

export function MainLogin() {
  return (
    <button
      type="button"
      onClick={() => signIn("github")}
      className="w-full flex imtes-center justify-center gap-2 rounded-lg bg-teal-500 px-8 py-2 text-center text-sm font-semibold ring-teal-500 transition duration-100 hover:bg-teal-400 md:text-base"
    >
      <IconGitHub />
      Login with GitHub
    </button>
  );
}
