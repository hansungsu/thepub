"use client";

import { useEffect } from "react";
import * as Phaser from "phaser";

class Example extends Phaser.Scene {
  downKeyDebug;
  upKeyDebug;
  rightKeyDebug;
  leftKeyDebug;
  player;
  cursors;

  preload() {
    this.load.image("sky", "https://labs.phaser.io/assets/skies/space3.png");
    this.load.image(
      "elephant",
      "https://labs.phaser.io/assets/sprites/elephant.png"
    );
    this.load.spritesheet("body", "/walkcycle/BODY_male.png", {
      frameWidth: 64, // 각 프레임의 너비
      frameHeight: 64, // 각 프레임의 높이
    });
  }

  create() {
    this.add.image(400, 300, "sky");

    // sprite 이미지 등록 (x,y,"name")
    this.player = this.physics.add.sprite(400, 300, "body");

    // 움직임 create
    this.anims.create({
      key: "walk-up", // 이름
      frames: this.anims.generateFrameNumbers("body", {
        frames: [1, 2, 3, 4, 5, 6, 7, 8],
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "walk-left", // 이름
      frames: this.anims.generateFrameNumbers("body", {
        frames: [10, 11, 12, 13, 14, 15, 16, 17],
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "walk-down", // 이름
      frames: this.anims.generateFrameNumbers("body", {
        frames: [19, 20, 21, 22, 23, 24, 25, 26],
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "walk-right", // 이름
      frames: this.anims.generateFrameNumbers("body", {
        frames: [28, 29, 30, 31, 32, 33, 34, 35],
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.player.setCollideWorldBounds(true);
  }
  update() {
    this.player.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-300);
      this.player.play("walk-left", true);
    }
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(300);
      this.player.play("walk-right", true);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-300);
      this.player.play("walk-up", true);
    }
    if (this.cursors.down.isDown) {
      this.player.setVelocityY(300);
      this.player.play("walk-down", true);
    }
  }
}

export default function Home() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "phaser-container",
      scene: Example,
      pixelArt: true,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
        },
      },
    };

    const game = new Phaser.Game(config);
    return () => {
      game.destroy(true);
    };
  }, []);
  return (
    <div
      id="phaser-container"
      className="flex items-center justify-center"
    ></div>
  );
}
