"use client";

import React, { useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  NodeProps,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ReactFlowGraph } from "@/services/roadmaps/roadmap-render.service";

interface ReactFlowCanvasProps {
  graph: ReactFlowGraph;
  onNodeClick?: (nodeId: string, data: any) => void;
}

// Custom Node renderer for learning skills
const CustomSkillNode: React.FC<NodeProps> = ({ data }) => {
  const nodeType = String(data?.nodeType || "skill");
  const estimatedHours = data?.estimatedHours;
  const title = String(data?.title || data?.label || "");
  const description = String(data?.description || "");

  return (
    <div className="w-[280px] px-4 py-3.5 rounded-xl border border-zinc-700/60 bg-[#333333] text-white shadow-2xl hover:border-dashboard-metricHighlight transition-all cursor-pointer group">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-[#A7A7A7] !w-3.5 !h-3.5 !border-2 !border-[#333333]"
      />
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[11px] font-display font-bold uppercase tracking-wider text-dashboard-metricHighlight truncate">
          {nodeType}
        </span>
        {Boolean(estimatedHours) && (
          <span className="text-[10px] bg-[#242424] text-zinc-300 font-display font-medium px-2 py-0.5 rounded-full border border-zinc-700 shrink-0">
            {String(estimatedHours)}h
          </span>
        )}
      </div>
      <div className="font-display font-bold text-sm text-white group-hover:text-dashboard-metricHighlight transition-colors line-clamp-2">
        {title}
      </div>
      {Boolean(description) && (
        <div className="text-xs font-sans text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </div>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-[#A7A7A7] !w-3.5 !h-3.5 !border-2 !border-[#333333]"
      />
    </div>
  );
};

export const ReactFlowCanvas: React.FC<ReactFlowCanvasProps> = ({
  graph,
  onNodeClick,
}) => {
  const nodeTypes = useMemo(() => ({ customSkillNode: CustomSkillNode }), []);

  const defaultEdgeOptions = useMemo(
    () => ({
      style: { stroke: "#52525b", strokeWidth: 2 },
      animated: true,
    }),
    []
  );

  return (
    <div className="w-full h-[700px] border border-zinc-800 rounded-[var(--card-radius-lg)] bg-[#242424] overflow-hidden relative shadow-2xl">
      <ReactFlow
        nodes={graph.nodes}
        edges={graph.edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        colorMode="dark"
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        fitView
        onNodeClick={(_, node) => onNodeClick?.(node.id, node.data)}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#383838" bgColor="#242424" gap={20} size={1} />
        <Controls showInteractive={false} className="!bg-[#333333] !border-zinc-700 !text-white fill-white shadow-xl" />
        {/* <MiniMap
          nodeColor="#A7A7A7"
          maskColor="rgba(36, 36, 36, 0.7)"
          className="!bg-[#333333] !border-zinc-700"
        /> */}
      </ReactFlow>
    </div>
  );
};
