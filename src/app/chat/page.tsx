import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "../components/Form";
import { getData } from "../service/getData";
import ChatComponent from "../components/Chat";

export const dynamic = "force-dynamic";

export default async function ChatPage() {
  const session = await getServerSession(authOptions);
  const data = await getData();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-screen flex flex-col">
      <ChatComponent data={data as any} />
      <Form />
    </div>
  );
}
