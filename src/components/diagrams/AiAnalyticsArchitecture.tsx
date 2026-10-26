import { Bell, Cctv, Cloud, LayoutDashboard, Lock, Mail, Smartphone } from "lucide-react";
import {
  Arrow,
  Chip,
  DiagramSvg,
  Glyph,
  NODE_FILL,
  NODE_TEXT,
  NODE_TEXT_MUTED,
  Responsive,
} from "@/components/diagrams/parts";

/**
 * AI video analytics architecture (/solutions/ai-analytics).
 *
 * Facts drawn (src/lib/nebula-os.ts, solution-page-content.ts solutionFacts):
 * cameras over ONVIF / RTSP / vendor SDKs → on-site Nebula OS node (VMS
 * recording, AI analytics on GPU, health monitoring, asset and AMC records)
 * → alerts to dashboard, mobile app and email. Only health, alert and
 * configuration metadata syncs to Orion Cloud for multi-site management;
 * video stays on site. Do not add camera brands, counts or other channels.
 */

const TITLE = "AI video analytics architecture";
const DESC =
  "Inside your site, IP cameras connect over ONVIF, RTSP or vendor SDKs to an on-site Nebula OS node that runs VMS recording, AI analytics on a GPU, health monitoring and asset and AMC records. The node sends alerts to the dashboard, mobile app and email. Only health, alert and configuration metadata syncs to Orion Cloud for multi-site management; video stays on site.";

const MODULES = [
  { label: "VMS recording", tag: undefined },
  { label: "AI analytics", tag: "GPU" },
  { label: "Health monitoring", tag: undefined },
  { label: "Asset & AMC records", tag: undefined },
] as const;

const CHANNELS = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Mobile app", icon: Smartphone },
  { label: "Email", icon: Mail },
] as const;

function NodeModules({
  x,
  y,
  width,
  rowHeight,
  gap,
  fontSize,
}: {
  x: number;
  y: number;
  width: number;
  rowHeight: number;
  gap: number;
  fontSize: number;
}) {
  return (
    <g>
      {MODULES.map((m, i) => {
        const ry = y + i * (rowHeight + gap);
        const ai = m.tag !== undefined;
        return (
          <g key={m.label}>
            <rect
              x={x}
              y={ry}
              width={width}
              height={rowHeight}
              rx={10}
              fill={ai ? "rgba(126, 200, 255, 0.2)" : "rgba(255, 255, 255, 0.06)"}
              stroke={ai ? "rgba(126, 200, 255, 0.85)" : "rgba(126, 200, 255, 0.28)"}
              strokeWidth={1}
            />
            <circle cx={x + 18} cy={ry + rowHeight / 2} r={4} fill={ai ? "#7ec8ff" : NODE_TEXT_MUTED} />
            <text
              x={x + 34}
              y={ry + rowHeight / 2 + fontSize * 0.36}
              fontSize={fontSize}
              fontWeight={ai ? 600 : 500}
              fill={NODE_TEXT}
            >
              {m.label}
            </text>
            {m.tag ? (
              <g>
                <rect
                  x={x + width - 56}
                  y={ry + rowHeight / 2 - 12}
                  width={44}
                  height={24}
                  rx={12}
                  fill="#7ec8ff"
                />
                <text
                  x={x + width - 34}
                  y={ry + rowHeight / 2 + 4.5}
                  textAnchor="middle"
                  fontSize={12.5}
                  fontWeight={700}
                  fill={NODE_FILL}
                >
                  {m.tag}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}
    </g>
  );
}

function CameraStack({ cx, ys, size }: { cx: number[] | number; ys: number[] | number; size: number }) {
  const xs = Array.isArray(cx) ? cx : null;
  const yv = Array.isArray(ys) ? ys : null;
  const n = xs?.length ?? yv?.length ?? 0;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const x = xs ? xs[i] : (cx as number);
        const y = yv ? yv[i] : (ys as number);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={size * 0.95} className="fill-cyan/20" />
            <Glyph icon={Cctv} cx={x} cy={y} size={size} />
          </g>
        );
      })}
    </g>
  );
}

/** Wide layout: left-to-right, for lg screens and up. */
function Wide() {
  return (
    <DiagramSvg id="ai-arch-wide" viewBox="0 0 1000 448" title={TITLE} desc={DESC}>
      {/* Site boundary */}
      <rect
        x={8}
        y={28}
        width={648}
        height={404}
        rx={24}
        className="fill-cyan/[0.07] stroke-blue/35"
        strokeWidth={1.5}
        strokeDasharray="7 7"
      />
      <text x={32} y={58} fontSize={12.5} fontWeight={700} letterSpacing="0.14em" className="fill-muted-strong">
        YOUR SITE
      </text>

      {/* Cameras */}
      <rect x={32} y={96} width={168} height={284} rx={16} className="fill-surface stroke-blue/15" strokeWidth={1} />
      <text x={116} y={128} textAnchor="middle" fontSize={17} fontWeight={600} className="fill-text">
        IP cameras
      </text>
      <CameraStack cx={116} ys={[172, 222, 272]} size={26} />
      <text x={116} y={326} textAnchor="middle" fontSize={14} className="fill-muted-strong">
        ONVIF · RTSP
      </text>
      <text x={116} y={347} textAnchor="middle" fontSize={14} className="fill-muted-strong">
        vendor SDKs
      </text>

      <Arrow x1={202} y1={238} x2={258} y2={238} />
      <text x={230} y={226} textAnchor="middle" fontSize={13} fontWeight={600} className="fill-muted-strong">
        Video
      </text>

      {/* Nebula OS node */}
      <rect x={262} y={64} width={370} height={332} rx={20} fill={NODE_FILL} />
      <text x={286} y={102} fontSize={20} fontWeight={600} fill={NODE_TEXT}>
        Nebula OS node
      </text>
      <text x={286} y={126} fontSize={14} fill={NODE_TEXT_MUTED}>
        On-site appliance or server
      </text>
      <NodeModules x={286} y={146} width={322} rowHeight={50} gap={10} fontSize={16} />

      {/* Video stays on site */}
      <Glyph icon={Lock} cx={258} cy={416} size={16} className="text-text" />
      <text x={272} y={421} fontSize={14} fontWeight={600} className="fill-text">
        Video stays on site
      </text>

      {/* Metadata sync to Orion Cloud */}
      <Arrow x1={636} y1={112} x2={732} y2={112} dashed both />
      <Chip cx={684} cy={86} width={104} fontSize={12}>
        Metadata only
      </Chip>

      <rect x={736} y={36} width={256} height={152} rx={18} className="fill-surface stroke-blue/20" strokeWidth={1} />
      <Glyph icon={Cloud} cx={764} cy={70} size={24} />
      <text x={786} y={77} fontSize={18} fontWeight={600} className="fill-text">
        Orion Cloud
      </text>
      <text x={758} y={110} fontSize={15} fontWeight={500} className="fill-text">
        Multi-site management
      </text>
      <text x={758} y={140} fontSize={13.5} className="fill-muted-strong">
        Syncs health, alert and
      </text>
      <text x={758} y={160} fontSize={13.5} className="fill-muted-strong">
        configuration metadata
      </text>

      {/* Alerts */}
      <Arrow x1={636} y1={330} x2={732} y2={330} />
      <rect x={736} y={226} width={256} height={206} rx={18} className="fill-surface stroke-blue/20" strokeWidth={1} />
      <Glyph icon={Bell} cx={764} cy={258} size={22} />
      <text x={786} y={265} fontSize={18} fontWeight={600} className="fill-text">
        Alerts
      </text>
      {CHANNELS.map((c, i) => {
        const y = 284 + i * 46;
        return (
          <g key={c.label}>
            <rect x={756} y={y} width={216} height={38} rx={10} className="fill-cyan/15" />
            <Glyph icon={c.icon} cx={778} cy={y + 19} size={18} />
            <text x={798} y={y + 24.5} fontSize={15} fontWeight={500} className="fill-text">
              {c.label}
            </text>
          </g>
        );
      })}
    </DiagramSvg>
  );
}

/** Narrow layout: top-to-bottom, for phones and tablets. */
function Narrow() {
  return (
    <DiagramSvg id="ai-arch-narrow" viewBox="0 0 360 744" title={TITLE} desc={DESC}>
      <rect
        x={6}
        y={6}
        width={348}
        height={508}
        rx={22}
        className="fill-cyan/[0.07] stroke-blue/35"
        strokeWidth={1.5}
        strokeDasharray="7 7"
      />
      <text x={24} y={32} fontSize={12} fontWeight={700} letterSpacing="0.14em" className="fill-muted-strong">
        YOUR SITE
      </text>

      {/* Cameras */}
      <rect x={22} y={44} width={316} height={96} rx={14} className="fill-surface stroke-blue/15" strokeWidth={1} />
      <text x={40} y={78} fontSize={16} fontWeight={600} className="fill-text">
        IP cameras
      </text>
      <text x={40} y={104} fontSize={13} className="fill-muted-strong">
        ONVIF · RTSP
      </text>
      <text x={40} y={122} fontSize={13} className="fill-muted-strong">
        vendor SDKs
      </text>
      <CameraStack cx={[214, 260, 306]} ys={92} size={22} />

      <Arrow x1={180} y1={142} x2={180} y2={174} />
      <text x={192} y={163} fontSize={12} fontWeight={600} className="fill-muted-strong">
        Video
      </text>

      {/* Node */}
      <rect x={22} y={178} width={316} height={290} rx={18} fill={NODE_FILL} />
      <text x={42} y={210} fontSize={18} fontWeight={600} fill={NODE_TEXT}>
        Nebula OS node
      </text>
      <text x={42} y={232} fontSize={13} fill={NODE_TEXT_MUTED}>
        On-site appliance or server
      </text>
      <NodeModules x={40} y={248} width={280} rowHeight={44} gap={8} fontSize={15} />

      <Glyph icon={Lock} cx={124} cy={490} size={15} className="text-text" />
      <text x={137} y={495} fontSize={13} fontWeight={600} className="fill-text">
        Video stays on site
      </text>

      {/* Exits: alerts (left), metadata to cloud (right) */}
      <Arrow x1={90} y1={470} x2={90} y2={550} />
      <Arrow x1={270} y1={470} x2={270} y2={550} dashed both />
      <Chip cx={270} cy={514} width={100} fontSize={11.5}>
        Metadata only
      </Chip>

      <rect x={6} y={554} width={170} height={184} rx={16} className="fill-surface stroke-blue/20" strokeWidth={1} />
      <Glyph icon={Bell} cx={30} cy={580} size={18} />
      <text x={46} y={586} fontSize={16} fontWeight={600} className="fill-text">
        Alerts
      </text>
      {CHANNELS.map((c, i) => {
        const y = 600 + i * 44;
        return (
          <g key={c.label}>
            <rect x={18} y={y} width={146} height={36} rx={9} className="fill-cyan/15" />
            <Glyph icon={c.icon} cx={36} cy={y + 18} size={16} />
            <text x={52} y={y + 23} fontSize={14} fontWeight={500} className="fill-text">
              {c.label}
            </text>
          </g>
        );
      })}

      <rect x={184} y={554} width={170} height={184} rx={16} className="fill-surface stroke-blue/20" strokeWidth={1} />
      <Glyph icon={Cloud} cx={208} cy={580} size={20} />
      <text x={224} y={586} fontSize={16} fontWeight={600} className="fill-text">
        Orion Cloud
      </text>
      <text x={198} y={614} fontSize={14} fontWeight={500} className="fill-text">
        Multi-site
      </text>
      <text x={198} y={632} fontSize={14} fontWeight={500} className="fill-text">
        management
      </text>
      <text x={198} y={664} fontSize={12.5} className="fill-muted-strong">
        Syncs health, alert
      </text>
      <text x={198} y={682} fontSize={12.5} className="fill-muted-strong">
        and configuration
      </text>
      <text x={198} y={700} fontSize={12.5} className="fill-muted-strong">
        metadata
      </text>
    </DiagramSvg>
  );
}

export function AiAnalyticsArchitecture() {
  return <Responsive wide={<Wide />} narrow={<Narrow />} breakpoint="lg" narrowMaxWidth="26rem" />;
}
