/** Days since 1 Jan 1970 in the viewer's local time zone, so the story changes at their midnight. */
export function localDayNumber(d = new Date()) {
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000);
}

/**
 * Index of the story for a given day. Stories are shuffled into a new random order for each
 * cycle, so every story is shown once before any story repeats.
 */
export function dailyIndex(day: number, count: number) {
  const cycle = Math.floor(day / count);
  const order = Array.from({ length: count }, (_, i) => i);
  let seed = (cycle * 7919 + 104_729) % 233_280;
  for (let i = count - 1; i > 0; i--) {
    seed = (seed * 9301 + 49_297) % 233_280;
    const j = Math.floor((seed / 233_280) * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order[day % count];
}

/** Minutes left until the viewer's next local midnight. */
export function minutesUntilMidnight(d = new Date()) {
  const next = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  return Math.max(1, Math.ceil((next.getTime() - d.getTime()) / 60_000));
}
