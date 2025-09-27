import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <div className="z-10 h-20 cursor-pointer text-sky-800 flex items-center justify-center">
        <span className="text-4xl font-black">Wir sind OG-Ima</span>
      </div>
    </header>
  );
}
