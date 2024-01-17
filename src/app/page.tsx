"use client";
import dynamic from "next/dynamic";
import { Container } from "@/components/container";
const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/game/example"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <Container>방향키를 찌끄리면 코끼리를 움직일 수 있습니다.</Container>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
