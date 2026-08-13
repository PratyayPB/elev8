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
    <div className="px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900 text-white shadow-2xl min-w-[240px] hover:border-dashboard-metricHighlight transition-all cursor-pointer group">
      <Handle 
        type="target" 
        position={Position.Top} 
        className="!bg-dashboard-metricHighlight !w-3.5 !h-3.5 !border-2 !border-zinc-900" 
      />
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[11px] font-display font-bold uppercase tracking-wider text-dashboard-metricHighlight">
          {nodeType}
        </span>
        {Boolean(estimatedHours) && (
          <span className="text-[10px] bg-zinc-800 text-zinc-300 font-display font-medium px-2 py-0.5 rounded-full border border-zinc-700">
            {String(estimatedHours)}h
          </span>
        )}
      </div>
      <div className="font-display font-bold text-sm text-white group-hover:text-dashboard-metricHighlight transition-colors">
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
        className="!bg-dashboard-metricHighlight !w-3.5 !h-3.5 !border-2 !border-zinc-900" 
      />
    </div>
  );
};

export const ReactFlowCanvas: React.FC<ReactFlowCanvasProps> = ({ graph, onNodeClick }) => {
  const nodeTypes = useMemo(() => ({ customSkillNode: CustomSkillNode }), []);

  const defaultEdgeOptions = useMemo(
    () => ({
      style: { stroke: "#3f3f46", strokeWidth: 2 },
      animated: true,
    }),
    []
  );

  return (
    <div className="w-full h-[700px] border border-zinc-800 rounded-[var(--card-radius-lg)] bg-zinc-950 overflow-hidden relative shadow-2xl">
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
        <Background color="#27272a" gap={20} size={1} />
        <Controls className="!bg-zinc-900 !border-zinc-800 !text-white fill-white shadow-xl" />
        <MiniMap
          nodeColor="#FEF7AF"
          maskColor="rgba(0, 0, 0, 0.6)"
          className="!bg-zinc-900 !border-zinc-800"
        />
      </ReactFlow>
    </div>
  );
};
