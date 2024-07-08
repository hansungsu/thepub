"use client";
import dynamic from "next/dynamic";
import { Container } from "@/components/container";
const Game = dynamic(() => import("@/components/game/example"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Container>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Joke Tax Chronicles
        </h1>
      </Container>
      <Game />
    </div>
  );
}
