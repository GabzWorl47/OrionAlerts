import type { ComponentType } from "react";
import { Cctv, Cloud, Wrench } from "lucide-react";
import { nebulaDeployment } from "@/lib/nebula-os";
import { Arrow, Chip, DiagramSvg, Glyph, NODE_FILL, NODE_TEXT, NODE_TEXT_MUTED } from "@/components/diagrams/parts";

/**
 * Deployment models, one small panel each (ids match nebulaDeployment.models
 * in src/lib/nebula-os.ts): an on-site node at a single site, per-site nodes
 * with Orion Cloud, and partner-managed nodes across client sites. Facts only:
 * no counts, no brands. Three sites / two client sites are illustrative.
 */

export type DeploymentModelId = "edge" | "hybrid" | "managed";

const PANEL_COPY: Record<DeploymentModelId, { title: string; desc: string }> = {
  edge: {
    title: "On-site node deployment",
    desc: "Cameras at one site connect to a Nebula OS node on the same site. Video and AI processing stay inside the site.",
  },
  hybrid: {
    title: "Multi-site deployment with Orion Cloud",
    desc: "Each site runs its own Nebula OS node. Orion Cloud links the sites for central management, syncing metadata rather than video.",
  },
  managed: {
    title: "Partner-managed deployment",
    desc: "A partner team deploys and operates Nebula OS nodes at each of its client sites.",
  },
};

function SiteFrame({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        className="fill-cyan/[0.08] stroke-blue/35"
        strokeWidth={1.25}
        strokeDasharray="5 5"
      />
      <text
        x={x + 12}
        y={y + 20}
        fontSize={11}
        fontWeight={700}
        letterSpacing="0.12em"
        className="fill-muted-strong"
      >
        {label}
      </text>
    </g>
  );
}

function NodeChip({
  x,
  y,
  w,
  h,
  sub,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  sub?: string;
}) {
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={NODE_FILL} />
      <text
        x={cx}
        y={sub ? y + h / 2 - 2 : y + h / 2 + 4.5}
        textAnchor="middle"
        fontSize={13}
        fontWeight={600}
        fill={NODE_TEXT}
      >
        Nebula OS
      </text>
      {sub ? (
        <text x={cx} y={y + h / 2 + 15} textAnchor="middle" fontSize={11.5} fill={NODE_TEXT_MUTED}>
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function TopPill({ x, w, label, icon }: { x: number; w: number; label: string; icon: typeof Cloud }) {
  return (
    <g>
      <rect x={x} y={8} width={w} height={42} rx={21} className="fill-surface stroke-blue/25" strokeWidth={1} />
      <Glyph icon={icon} cx={x + 24} cy={29} size={18} />
      <text x={x + 40} y={34} fontSize={13.5} fontWeight={600} className="fill-text">
        {label}
      </text>
    </g>
  );
}

function EdgePanel() {
  return (
    <>
      <SiteFrame x={8} y={8} w={284} h={164} label="YOUR SITE" />
      {[66, 102, 138].map((cy) => (
        <g key={cy}>
          <circle cx={50} cy={cy} r={15} className="fill-cyan/20" />
          <Glyph icon={Cctv} cx={50} cy={cy} size={18} />
        </g>
      ))}
      <Arrow x1={76} y1={102} x2={142} y2={102} />
      <NodeChip x={146} y={70} w={128} h={64} sub="On-site node" />
    </>
  );
}

function HybridPanel() {
  const sites = [8, 106, 204];
  return (
    <>
      <TopPill x={88} w={124} label="Orion Cloud" icon={Cloud} />
      {sites.map((x) => (
        // Fan out from separate points on the pill so the arrowheads do not overlap.
        <Arrow key={x} x1={150 + (x + 44 - 150) * 0.4} y1={53} x2={x + 44} y2={96} dashed both head={6} />
      ))}
      <Chip cx={150} cy={74} width={72} fontSize={11}>
        Metadata
      </Chip>
      {sites.map((x) => (
        <g key={x}>
          <SiteFrame x={x} y={98} w={88} h={74} label="SITE" />
          <NodeChip x={x + 8} y={128} w={72} h={34} />
        </g>
      ))}
    </>
  );
}

function ManagedPanel() {
  const sites = [8, 156];
  return (
    <>
      <TopPill x={78} w={144} label="Partner team" icon={Wrench} />
      {sites.map((x) => (
        <Arrow key={x} x1={150} y1={52} x2={x + 68} y2={96} head={6} />
      ))}
      {sites.map((x) => (
        <g key={x}>
          <SiteFrame x={x} y={98} w={136} h={74} label="CLIENT SITE" />
          <NodeChip x={x + 12} y={126} w={112} h={36} />
        </g>
      ))}
    </>
  );
}

const PANELS: Record<DeploymentModelId, ComponentType> = {
  edge: EdgePanel,
  hybrid: HybridPanel,
  managed: ManagedPanel,
};

/** One deployment model as a small illustration, e.g. at the top of its card. */
export function DeploymentModelDiagram({
  model,
  idPrefix = "deploy",
  className = "",
}: {
  model: DeploymentModelId;
  idPrefix?: string;
  className?: string;
}) {
  const Panel = PANELS[model];
  const copy = PANEL_COPY[model];
  return (
    <DiagramSvg
      id={`${idPrefix}-${model}`}
      viewBox="0 0 300 180"
      title={copy.title}
      desc={copy.desc}
      className={className}
    >
      <Panel />
    </DiagramSvg>
  );
}

export function isDeploymentModelId(id: string): id is DeploymentModelId {
  return Object.prototype.hasOwnProperty.call(PANELS, id);
}

/** All three deployment models side by side (stacked on phones), named from nebula-os.ts. */
export function DeploymentModels({ idPrefix = "deploy-all" }: { idPrefix?: string }) {
  const models = nebulaDeployment.models.flatMap((m) =>
    isDeploymentModelId(m.id) ? [{ id: m.id, name: m.name }] : [],
  );
  return (
    <ul className="grid gap-4 lg:grid-cols-3">
      {models.map((m) => (
        <li key={m.id} className="rounded-[20px] bg-white/70 p-4 ring-1 ring-blue/10">
          <DeploymentModelDiagram
            model={m.id}
            idPrefix={idPrefix}
            className="mx-auto max-w-[20rem]"
          />
          <p className="mt-3 text-center text-sm font-semibold leading-snug text-text">{m.name}</p>
        </li>
      ))}
    </ul>
  );
}
