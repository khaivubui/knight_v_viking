import { Bodies } from 'matter-js';
import { worldWidth, worldHeight } from '../knight_v_viking';

export const boundThickness = 50;

// Bodies.rectangle(x, y, width, height, [options])

export const wallBlock = (x, y) =>
  Bodies.rectangle(
    x, y,
    boundThickness, boundThickness,
    {
      isStatic: true,
      type: 'worldBoundary',
      render: {
        fillStyle: 'brown',
        // sprite: {
        //   texture: window.environmentWallPNG,
        //   xScale: 0.11,
        //   yScale: 0.11,
        // }
      }
    }
  );

export const groundBlock = (x, y) =>
  Bodies.rectangle(
    x, y,
    boundThickness, boundThickness,
    {
      isStatic: true,
      type: 'worldBoundary',
      render: {
        sprite: {
          texture: window.environmentGroundPNG,
          xScale: 0.1,
          yScale: 0.1,
        }
      }
    }
  );
