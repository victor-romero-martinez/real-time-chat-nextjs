/* eslint-disable @next/next/no-img-element */
"use client";

import Pusher from "pusher-js";
import { useEffect, useRef, useState } from "react";

interface iAppProps {
  data: {
    User: {
      image: string | null;
      name: string | null;
    };
    message: string;
  }[];
}

export default function ChatComponent({ data }: iAppProps) {
  const [totalComents, setTotalComent] = useState(data);
  const messageEndRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
    });

    var channel = pusher.subscribe("chat");
    channel.bind("my-chat", function (data: any) {
      const parsedComents = JSON.parse(data.message);

      setTotalComent((prev) => [...prev, parsedComents]);
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [totalComents]);

  return (
    <div className="p-6 flex-grow max-h-screen overflow-y-auto py-32">
      <div className="flex flex-col gap-4">
        {totalComents.map((message, index) => (
          <div key={index}>
            <div className="flex items-center">
              <img
                src={message.User.image as string}
                alt="Profile user image"
                className="w-12 h-12 object-cover rounded-lg mr-4"
                width={50}
                height={50}
              />
              <p className="rounded-lg bg-white text-black px-4 py-2 shadow-md shadow-gray-500 self-start">
                {message.message}
              </p>
            </div>
            <p className="font-light text-sm text-gray-400 ml-4">
              {message.User.name}
            </p>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
    </div>
  );
}
