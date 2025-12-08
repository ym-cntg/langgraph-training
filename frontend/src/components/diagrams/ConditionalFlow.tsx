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
  {
    id: 'start',
    type: 'input',
    data: { label: '🚀 START' },
    position: { x: 250, y: 0 },
    style: {
      background: '#10b981',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #059669',
      borderRadius: '8px',
      padding: '10px'
    },
  },
  {
    id: 'agent',
    data: { label: '🤖 Agent\n(Analyze Task)' },
    position: { x: 225, y: 100 },
    style: {
      background: '#3b82f6',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #2563eb',
      borderRadius: '8px',
      padding: '15px',
      whiteSpace: 'pre-line',
      textAlign: 'center'
    },
  },
  {
    id: 'decision',
    data: { label: '❓ Decision\n(Need Tools?)' },
    position: { x: 225, y: 220 },
    style: {
      background: '#f59e0b',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #d97706',
      borderRadius: '8px',
      padding: '15px',
      whiteSpace: 'pre-line',
      textAlign: 'center'
    },
  },
  {
    id: 'tools',
    data: { label: '🛠️ Use Tools' },
    position: { x: 50, y: 350 },
    style: {
      background: '#8b5cf6',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #7c3aed',
      borderRadius: '8px',
      padding: '15px'
    },
  },
  {
    id: 'respond',
    data: { label: '💬 Respond' },
    position: { x: 400, y: 350 },
    style: {
      background: '#06b6d4',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #0891b2',
      borderRadius: '8px',
      padding: '15px'
    },
  },
  {
    id: 'end',
    type: 'output',
    data: { label: '✅ END' },
    position: { x: 250, y: 480 },
    style: {
      background: '#ef4444',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #dc2626',
      borderRadius: '8px',
      padding: '10px'
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e-start-agent',
    source: 'start',
    target: 'agent',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' },
  },
  {
    id: 'e-agent-decision',
    source: 'agent',
    target: 'decision',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
  },
  {
    id: 'e-decision-tools',
    source: 'decision',
    target: 'tools',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
    label: 'YES',
    labelStyle: { fill: '#8b5cf6', fontWeight: 'bold' },
  },
  {
    id: 'e-decision-respond',
    source: 'decision',
    target: 'respond',
    animated: true,
    style: { stroke: '#06b6d4', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' },
    label: 'NO',
    labelStyle: { fill: '#06b6d4', fontWeight: 'bold' },
  },
  {
    id: 'e-tools-agent',
    source: 'tools',
    target: 'agent',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
    label: 'continue',
    type: 'smoothstep',
  },
  {
    id: 'e-respond-end',
    source: 'respond',
    target: 'end',
    animated: true,
    style: { stroke: '#06b6d4', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' },
  },
];

const ConditionalFlow: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '600px', border: '2px solid #e5e7eb', borderRadius: '8px' }}>
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

export default ConditionalFlow;
