import { BellRing, Cctv, CirclePlay, Cpu, ListChecks } from "lucide-react";
import { Arrow, DiagramSvg, Glyph, Responsive } from "@/components/diagrams/parts";

/**
 * Generic detection flow for /use-cases/[slug]: camera → on-site AI → rule
 * match → alert to the team → review footage. Deliberately the same on every
 * use case; it makes no claim about any single detection.
 */

const TITLE = "How a detection becomes an alert";
const DESC =
  "An existing camera's video is analyzed by AI on the on-site Nebula OS node. When an event matches your zones and rules, an alert goes to the right team on the dashboard, mobile app and email, and they review the recorded footage.";

const STEPS = [
  { icon: Cctv, title: "Camera", lines: ["Your existing", "IP camera"] },
  { icon: Cpu, title: "On-site AI", lines: ["Runs on the", "Nebula OS node"] },
  { icon: ListChecks, title: "Rule match", lines: ["Your zones", "and schedules"] },
  { icon: BellRing, title: "Alert the team", lines: ["Dashboard, mobile", "app and email"] },
  { icon: CirclePlay, title: "Review footage", lines: ["Check the", "recorded video"] },
] as const;

const NARROW_LINES = [
  "Your existing IP camera",
  "Runs on the Nebula OS node",
  "Your zones and schedules",
  "Dashboard, mobile app and email",
  "Check the recorded video",
] as const;

function Wide({ idPrefix }: { idPrefix: string }) {
  const w = 152;
  const gap = 28;
  return (
    <DiagramSvg id={`${idPrefix}-wide`} viewBox="0 0 880 172" title={TITLE} desc={DESC}>
      {STEPS.map((s, i) => {
        const x = 4 + i * (w + gap);
        const cx = x + w / 2;
        const alert = i === 3;
        return (
          <g key={s.title}>
            <rect
              x={x}
              y={4}
              width={w}
              height={164}
              rx={18}
              className={alert ? "fill-cyan/15 stroke-blue/30" : "fill-surface stroke-blue/15"}
              strokeWidth={1}
            />
            <circle cx={cx} cy={46} r={24} className="fill-cyan/25" />
            <Glyph icon={s.icon} cx={cx} cy={46} size={24} />
            <text x={cx} y={98} textAnchor="middle" fontSize={16} fontWeight={600} className="fill-text">
              {s.title}
            </text>
            {s.lines.map((line, j) => (
              <text
                key={line}
                x={cx}
                y={124 + j * 19}
                textAnchor="middle"
                fontSize={13.5}
                className="fill-muted-strong"
              >
                {line}
              </text>
            ))}
            {i < STEPS.length - 1 ? <Arrow x1={x + w + 5} y1={86} x2={x + w + gap - 5} y2={86} head={6} /> : null}
          </g>
        );
      })}
    </DiagramSvg>
  );
}

function Narrow({ idPrefix }: { idPrefix: string }) {
  const h = 64;
  const gap = 22;
  const height = STEPS.length * h + (STEPS.length - 1) * gap + 8;
  return (
    <DiagramSvg id={`${idPrefix}-narrow`} viewBox={`0 0 340 ${height}`} title={TITLE} desc={DESC}>
      {STEPS.map((s, i) => {
        const y = 4 + i * (h + gap);
        const alert = i === 3;
        return (
          <g key={s.title}>
            <rect
              x={4}
              y={y}
              width={332}
              height={h}
              rx={16}
              className={alert ? "fill-cyan/15 stroke-blue/30" : "fill-surface stroke-blue/15"}
              strokeWidth={1}
            />
            <circle cx={38} cy={y + h / 2} r={20} className="fill-cyan/25" />
            <Glyph icon={s.icon} cx={38} cy={y + h / 2} size={20} />
            <text x={70} y={y + 27} fontSize={15} fontWeight={600} className="fill-text">
              {s.title}
            </text>
            <text x={70} y={y + 47} fontSize={13} className="fill-muted-strong">
              {NARROW_LINES[i]}
            </text>
            {i < STEPS.length - 1 ? (
              <Arrow x1={38} y1={y + h + 4} x2={38} y2={y + h + gap - 4} head={5} />
            ) : null}
          </g>
        );
      })}
    </DiagramSvg>
  );
}

export function DetectionFlow({ idPrefix = "detection-flow" }: { idPrefix?: string }) {
  return (
    <Responsive
      wide={<Wide idPrefix={idPrefix} />}
      narrow={<Narrow idPrefix={idPrefix} />}
      breakpoint="lg"
      narrowMaxWidth="24rem"
      narrowAlign="start"
    />
  );
}
