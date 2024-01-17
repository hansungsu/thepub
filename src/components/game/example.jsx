"use client";
import * as Phaser from "phaser";

export default class Example extends Phaser.Scene {
  downKeyDebug;
  upKeyDebug;
  rightKeyDebug;
  leftKeyDebug;
  player;
  cursors;

  preload() {
    this.load.setBaseURL("https://labs.phaser.io");
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("elephant", "assets/sprites/elephant.png");
  }

  create() {
    this.add.image(400, 300, "sky");
    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.image(400, 300, "elephant");

    this.player.setCollideWorldBounds(true);
  }
  update() {
    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(300);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-300);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(300);
    }
  }
}
