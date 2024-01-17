"use client";
import { Container } from "@/components/container";
import { useEffect } from "react";
import Example from "@/components/game/Example";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "phaser-container",
  scene: Example,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

export default function Home() {
  useEffect(() => {
    const game = new Phaser.Game(config);
    return () => {
      game.destroy(true);
    };
  }, []);
  return (
    <div>
      <Container>방향키를 찌끄리면 코끼리를 움직일 수 있습니다.</Container>
      <div
        id="phaser-container"
        className="flex items-center justify-center"
      ></div>
    </div>
  );
}
