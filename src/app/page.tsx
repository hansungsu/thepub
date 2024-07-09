"use client";
import dynamic from "next/dynamic";
const Game = dynamic(() => import("@/components/game/example"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Game />
    </div>
  );
}
