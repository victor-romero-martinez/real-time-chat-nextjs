"use client";

import { useRef, useState } from "react";
import { postData } from "../action";
import { IconSend } from "../assets/Icon";

export default function Form() {
  const [words, setWords] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onMessage = async (formData: FormData) => {
    await postData(formData);
    setWords("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords(e.target.value);
  };

  function disablebtn() {
    if (words.length > 0) {
      return false;
    }
    return true;
  }

  return (
    <form
      action={onMessage}
      ref={formRef}
      className="py-4 px-8 fixed bottom-0 left-0 w-full bg-white"
    >
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message"
          name="message"
          value={words}
          onChange={handleChange}
          className="flex-grow py-2 px-4 outline-none text-black"
        />
        <button
          type="submit"
          disabled={disablebtn()}
          className="bg-teal-500 disabled:bg-gray-500 disabled:hover:bg-gray-600 hover:bg-teal-600 text-white p-2 rounded-full"
        >
          <IconSend />
        </button>
      </div>
    </form>
  );
}
