import type { CSSProperties, ReactNode } from "react";

const colors = ["#ffffff", "#e8b4b8", "#b76e79", "#f7e7ce"];

export function Petal({ color = "#e8b4b8", size = 24, style, className = "" }: { color?: string; size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} style={style} className={className} aria-hidden>
      <path d="M20 2C33 10 33 28 20 38 7 28 7 10 20 2Z" fill={color} />
      <path d="M20 8v24" stroke="#fff" strokeOpacity=".5" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function layoutPetals(seed: number, count: number) {
  let s = seed * 9973 + 17;
  const rand = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  return Array.from({ length: count }, (_, i) => ({
    left: `${Math.round(rand() * 92)}%`,
    top: `${Math.round(rand() * 80)}%`,
    size: 14 + Math.round(rand() * 22),
    color: colors[i % colors.length],
    rotate: `${Math.round(rand() * 360)}deg`,
    delay: `${(rand() * -9).toFixed(2)}s`,
    falling: i % 3 === 0,
  }));
}

/** Soft gradient panel with floating and falling petals. Deterministic so it renders the same on server and client. */
export default function PetalScene({
  seed = 1,
  count = 9,
  className = "",
  children,
}: {
  seed?: number;
  count?: number;
  className?: string;
  children?: ReactNode;
}) {
  const petals = layoutPetals(seed, count);

  return (
    <div
      className={`${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} overflow-hidden bg-gradient-to-br from-champagne via-white to-blush/60 ${className}`}
    >
      <div className="absolute -left-10 -top-10 h-40 w-40 animate-float rounded-full bg-blush/40 blur-2xl" />
      <div className="absolute -bottom-12 -right-6 h-48 w-48 animate-float rounded-full bg-petal/25 blur-2xl [animation-delay:-3s]" />
      {petals.map((p, i) =>
        p.falling ? (
          <Petal
            key={i}
            color={p.color}
            size={p.size}
            className="absolute animate-drift opacity-80"
            style={{ left: p.left, top: "-10%", animationDelay: p.delay }}
          />
        ) : (
          <Petal
            key={i}
            color={p.color}
            size={p.size}
            className="absolute animate-float opacity-70"
            style={{ left: p.left, top: p.top, animationDelay: p.delay, ["--r" as string]: p.rotate }}
          />
        ),
      )}
      <div className="relative flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}
