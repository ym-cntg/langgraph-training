import React from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  // LangChain side (left)
  {
    id: 'lc-title',
    data: { label: '🔗 LangChain\n(Linear Flow)' },
    position: { x: 50, y: 0 },
    style: {
      background: '#3b82f6',
      color: 'white',
      fontWeight: 'bold',
      border: '3px solid #2563eb',
      borderRadius: '12px',
      padding: '15px',
      whiteSpace: 'pre-line',
      textAlign: 'center',
      fontSize: '16px'
    },
    draggable: false,
  },
  {
    id: 'lc-input',
    data: { label: 'Input' },
    position: { x: 80, y: 100 },
    style: {
      background: '#60a5fa',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #3b82f6',
      borderRadius: '8px',
      padding: '12px'
    },
  },
  {
    id: 'lc-prompt',
    data: { label: 'Prompt' },
    position: { x: 80, y: 180 },
    style: {
      background: '#60a5fa',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #3b82f6',
      borderRadius: '8px',
      padding: '12px'
    },
  },
  {
    id: 'lc-llm',
    data: { label: 'LLM' },
    position: { x: 80, y: 260 },
    style: {
      background: '#60a5fa',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #3b82f6',
      borderRadius: '8px',
      padding: '12px'
    },
  },
  {
    id: 'lc-output',
    data: { label: 'Output' },
    position: { x: 80, y: 340 },
    style: {
      background: '#60a5fa',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #3b82f6',
      borderRadius: '8px',
      padding: '12px'
    },
  },

  // LangGraph side (right)
  {
    id: 'lg-title',
    data: { label: '📊 LangGraph\n(Cyclic Flow)' },
    position: { x: 400, y: 0 },
    style: {
      background: '#8b5cf6',
      color: 'white',
      fontWeight: 'bold',
      border: '3px solid #7c3aed',
      borderRadius: '12px',
      padding: '15px',
      whiteSpace: 'pre-line',
      textAlign: 'center',
      fontSize: '16px'
    },
    draggable: false,
  },
  {
    id: 'lg-start',
    data: { label: 'Start' },
    position: { x: 430, y: 100 },
    style: {
      background: '#a78bfa',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #8b5cf6',
      borderRadius: '8px',
      padding: '12px'
    },
  },
  {
    id: 'lg-agent',
    data: { label: 'Agent' },
    position: { x: 430, y: 180 },
    style: {
      background: '#a78bfa',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #8b5cf6',
      borderRadius: '8px',
      padding: '12px'
    },
  },
  {
    id: 'lg-decision',
    data: { label: 'Decision' },
    position: { x: 423, y: 260 },
    style: {
      background: '#f59e0b',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #d97706',
      borderRadius: '8px',
      padding: '12px'
    },
  },
  {
    id: 'lg-tools',
    data: { label: 'Tools' },
    position: { x: 330, y: 340 },
    style: {
      background: '#a78bfa',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #8b5cf6',
      borderRadius: '8px',
      padding: '12px'
    },
  },
  {
    id: 'lg-end',
    data: { label: 'End' },
    position: { x: 530, y: 340 },
    style: {
      background: '#a78bfa',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #8b5cf6',
      borderRadius: '8px',
      padding: '12px'
    },
  },
];

const initialEdges: Edge[] = [
  // LangChain edges (linear)
  {
    id: 'lc-1',
    source: 'lc-input',
    target: 'lc-prompt',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
  },
  {
    id: 'lc-2',
    source: 'lc-prompt',
    target: 'lc-llm',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
  },
  {
    id: 'lc-3',
    source: 'lc-llm',
    target: 'lc-output',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
  },

  // LangGraph edges (cyclic)
  {
    id: 'lg-1',
    source: 'lg-start',
    target: 'lg-agent',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
  },
  {
    id: 'lg-2',
    source: 'lg-agent',
    target: 'lg-decision',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
  },
  {
    id: 'lg-3',
    source: 'lg-decision',
    target: 'lg-tools',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' },
    label: 'use tools',
    labelStyle: { fill: '#f59e0b', fontWeight: 'bold', fontSize: '12px' },
  },
  {
    id: 'lg-4',
    source: 'lg-decision',
    target: 'lg-end',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' },
    label: 'done',
    labelStyle: { fill: '#10b981', fontWeight: 'bold', fontSize: '12px' },
  },
  {
    id: 'lg-5',
    source: 'lg-tools',
    target: 'lg-agent',
    animated: true,
    style: { stroke: '#ef4444', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' },
    label: 'loop back',
    labelStyle: { fill: '#ef4444', fontWeight: 'bold', fontSize: '12px' },
    type: 'smoothstep',
  },
];

const LangChainVsLangGraphFlow: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '500px', border: '2px solid #e5e7eb', borderRadius: '8px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-right"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default LangChainVsLangGraphFlow;
