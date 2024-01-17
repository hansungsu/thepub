"use client";
import dynamic from "next/dynamic";
import { Container } from "@/components/container";
const Game = dynamic(() => import("@/components/game/example"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Container>오케이; 앞뒤양옆 완성</Container>
      <Game />
    </div>
  );
}
