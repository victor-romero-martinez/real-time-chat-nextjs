import { getServerSession } from "next-auth";
import { MainLogin } from "./components/Button";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { IconChatLogo } from "./assets/Icon";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/chat");
  }

  return (
    <div className="max-w-xl mx-auto border border-slate-600 rounded-lg p-10 mt-32">
      <h1 className="text-xl text-center">Login to chat!</h1>
      <div className="mt-8">
        <MainLogin />
      </div>
      <div className="flex justify-center items-center mt-10">
      <IconChatLogo />
      </div>
    </div>
  );
}
