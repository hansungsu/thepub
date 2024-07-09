"use client";
import dynamic from "next/dynamic";
import { Container } from "@/components/container";
import { Dashboard } from "@/components/dashboard/DashBoard";
const Game = dynamic(() => import("@/components/game/example"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
