// Lightweight Web Audio wrappers for chiptune-like bleeps using OscillatorNode

export const playBleep = (freq = 440, durationMs = 120, type = 'square', volume = 0.05) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.value = volume;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    setTimeout(() => {
      o.stop();
      ctx.close();
    }, durationMs);
  } catch (e) {
    // ignore autoplay restrictions
  }
};

export const scrollBleep = (deltaY) => {
  const f = 200 + Math.min(600, Math.abs(deltaY));
  playBleep(f, 80, 'square', 0.03);
};

export const hoverBleep = () => playBleep(520, 60, 'triangle', 0.04);


