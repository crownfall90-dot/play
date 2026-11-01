// src/game/timers.js
// Turn timing, countdown calculations, idle alerts, and meeple clock.

export function resolveTurnDuration({away, timerSecs, isNet}) {
  if (away) return 2;
  return timerSecs || (isNet ? 60 : 0);
}

export function calcTimeLeft(endTime, now = Date.now()) {
  return Math.max(0, Math.ceil((endTime - now) / 1000));
}

export function isLowTime(left, threshold = 10) {
  return left > 0 && left <= threshold;
}

export function isUrgentTime(left, threshold = 5) {
  return left > 0 && left <= threshold;
}

export function shouldWarnIdle({alertEnabled, left, isLocal, phase, idleDurationMs, idleThresholdMs = 2500}) {
  return Boolean(
    alertEnabled &&
    left > 0 &&
    left <= 10 &&
    isLocal &&
    (phase === 'place' || phase === 'meeple') &&
    idleDurationMs > idleThresholdMs
  );
}

export function createCountdown({
  durationSecs,
  onTick,
  onExpire,
  intervalMs = 250,
  nowFn = Date.now
}) {
  let end = nowFn() + durationSecs * 1000;
  let last = nowFn();
  let paused = false;
  let timerId = null;

  function tick() {
    const now = nowFn();
    if (paused) {
      end += now - last;
      last = now;
      return;
    }
    last = now;
    const left = Math.max(0, Math.ceil((end - now) / 1000));
    if (onTick) onTick(left);
    if (left <= 0) {
      stop();
      if (onExpire) onExpire();
    }
  }

  function start() {
    stop();
    end = nowFn() + durationSecs * 1000;
    last = nowFn();
    paused = false;
    tick();
    timerId = setInterval(tick, intervalMs);
  }

  function stop() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function pause() {
    paused = true;
  }

  function resume() {
    paused = false;
    last = nowFn();
  }

  function getTimeLeft() {
    return Math.max(0, Math.ceil((end - nowFn()) / 1000));
  }

  function isRunning() {
    return timerId !== null;
  }

  return {
    start,
    stop,
    pause,
    resume,
    tick,
    getTimeLeft,
    isRunning
  };
}
