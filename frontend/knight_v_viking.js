import { Engine, Render, World } from 'matter-js';

import {
  testBall
} from './bodies/environment_bodies_constructors';

import {
  leftWall, rightWall, ground, ceiling
} from './bodies/environment_composites_constructors';

export const worldWidth = 1200;
export const worldHeight = 600;

document.addEventListener('DOMContentLoaded', () => {
  const engine = Engine.create();

  const render = Render.create({
      element: document.querySelector(".canvas-wrapper"),
      engine,
      options: {
        background: 'transparent',
        width: worldWidth,
        height: worldHeight,
        wireframes: false
      }
  });

  World.add(
    engine.world,
    [
      ceiling(),
      leftWall(),
      rightWall(),
      ground(),
      testBall(),
    ]
  );

  Engine.run(engine);

  Render.run(render);

  window.leftWall = leftWall();
});
