"use client";
import dynamic from "next/dynamic";
import { Container } from "@/components/container";
import { Dashboard } from "@/components/dashboard/DashBoard";
import Handmadeblog from "./handmadeblog/page";
const Game = dynamic(() => import("@/components/game/example"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Handmadeblog />
    </div>
  );
}
