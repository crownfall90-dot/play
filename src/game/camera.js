// src/game/camera.js
// 3D camera transforms, board boundary clamping, pan deltas, and zoom math

export const TILE_SIZE = 88;
export const DEFAULT_CAM = {px: 0, py: 0, z: 0.92, tilt: 55, rot: 0};
export const TILTS = [[55, '3D'], [22, '2D']];

/**
 * Calculates board bounding box from placed tiles
 */
export function calcBounds(tiles) {
  let x0 = 0, x1 = 0, y0 = 0, y1 = 0;
  if (!tiles || !tiles.values) return {x0, x1, y0, y1};
  for (const t of tiles.values()) {
    x0 = Math.min(x0, t.x);
    x1 = Math.max(x1, t.x);
    y0 = Math.min(y0, t.y);
    y1 = Math.max(y1, t.y);
  }
  return {x0, x1, y0, y1};
}

/**
 * Clamps camera translation and zoom within reasonable board boundaries
 */
export function clampCam(cam, bounds, T = TILE_SIZE) {
  if (!cam || !bounds) return cam;
  cam.px = Math.max(-(bounds.x1 + 1.5) * T, Math.min(-(bounds.x0 - 1.5) * T, cam.px));
  cam.py = Math.max(-(bounds.y1 + 1.5) * T, Math.min(-(bounds.y0 - 1.5) * T, cam.py));
  cam.z = Math.max(0.45, Math.min(1.8, cam.z));
  return cam;
}

/**
 * Calculates the {px, py} offset to center camera on bounds
 */
export function centerCamTarget(bounds, T = TILE_SIZE) {
  if (!bounds) return {px: 0, py: 0};
  return {
    px: -(bounds.x0 + bounds.x1) / 2 * T,
    py: -(bounds.y0 + bounds.y1) / 2 * T
  };
}

/**
 * Translates 2D screen pan (dx, dy) into 3D world pan deltas based on camera angle and tilt
 */
export function panDelta(dx, dy, cam) {
  const r = (cam.rot || 0) * Math.PI / 180;
  const cosTilt = Math.cos((cam.tilt || 0) * Math.PI / 180);
  const sy = cosTilt ? dy / cosTilt : dy;
  const z = cam.z || 1;
  return {
    dpx: (dx * Math.cos(r) + sy * Math.sin(r)) / z,
    dpy: (-dx * Math.sin(r) + sy * Math.cos(r)) / z
  };
}

/**
 * Returns CSS transform string for 3D world styling
 */
export function formatTransform(cam) {
  return `rotateX(${cam.tilt}deg) rotateZ(${cam.rot}deg) scale3d(${cam.z},${cam.z},${cam.z}) translate3d(${cam.px}px,${cam.py}px,0)`;
}

/**
 * Calculates pan target if given board cell (x, y) is out of visible view
 */
export function ensureVisibleTarget(x, y, cam, viewWidth, viewHeight, T = TILE_SIZE) {
  if (!viewWidth || !viewHeight) return null;
  const cosTilt = Math.cos((cam.tilt || 55) * Math.PI / 180);
  const hx = (viewWidth / 2 - 58) / cam.z / T - 0.6;
  const hy = viewHeight / 2 / (cam.z * (cosTilt || 0.6)) / T * 0.7 - 0.6;

  const ox = x + cam.px / T;
  const oy = y + cam.py / T;

  if (Math.abs(ox) > hx || Math.abs(oy) > hy) {
    return {
      px: cam.px - (Math.abs(ox) > hx ? ox - Math.sign(ox) * hx : 0) * T,
      py: cam.py - (Math.abs(oy) > hy ? oy - Math.sign(oy) * hy : 0) * T
    };
  }
  return null;
}
