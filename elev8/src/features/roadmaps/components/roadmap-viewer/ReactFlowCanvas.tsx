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
  return (
    <div className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 text-slate-100 shadow-xl backdrop-blur-md min-w-[220px] hover:border-cyan-500/50 transition-all cursor-pointer">
      <Handle type="target" position={Position.Top} className="!bg-cyan-500 !w-3 !h-3" />
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          {String(data.nodeType || "skill")}
        </span>
        {Boolean(data.estimatedHours) && (
          <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
            {String(data.estimatedHours)}h
          </span>
        )}
      </div>
      <div className="font-medium text-sm text-slate-100">{String(data.title || data.label || "")}</div>
      {Boolean(data.description) && (
        <div className="text-xs text-slate-400 mt-1 line-clamp-2">{String(data.description)}</div>
      )}
      <Handle type="source" position={Position.Bottom} className="!bg-cyan-500 !w-3 !h-3" />
    </div>
  );
};

export const ReactFlowCanvas: React.FC<ReactFlowCanvasProps> = ({ graph, onNodeClick }) => {
  const nodeTypes = useMemo(() => ({ customSkillNode: CustomSkillNode }), []);

  return (
    <div className="w-full h-[700px] border border-slate-800 rounded-2xl bg-slate-950 overflow-hidden relative shadow-2xl">
      <ReactFlow
        nodes={graph.nodes}
        edges={graph.edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        fitView
        onNodeClick={(_, node) => onNodeClick?.(node.id, node.data)}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#334155" gap={20} size={1} />
        <Controls className="!bg-slate-900 !border-slate-800 !text-slate-200 fill-slate-200" />
        <MiniMap
          nodeColor="#0284c7"
          maskColor="rgba(15, 23, 42, 0.7)"
          className="!bg-slate-900 !border-slate-800"
        />
      </ReactFlow>
    </div>
  );
};
