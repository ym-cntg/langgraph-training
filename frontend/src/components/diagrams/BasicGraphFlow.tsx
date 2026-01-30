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
    data: { label: '🤖 Agent Node\n(Process & Reason)' },
    position: { x: 200, y: 100 },
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
    id: 'tools',
    data: { label: '🛠️ Tool Node\n(Execute Actions)' },
    position: { x: 200, y: 220 },
    style: {
      background: '#8b5cf6',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #7c3aed',
      borderRadius: '8px',
      padding: '15px',
      whiteSpace: 'pre-line',
      textAlign: 'center'
    },
  },
  {
    id: 'end',
    type: 'output',
    data: { label: '✅ END' },
    position: { x: 250, y: 340 },
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
    id: 'e-agent-tools',
    source: 'agent',
    target: 'tools',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
    label: 'use tools',
  },
  {
    id: 'e-tools-end',
    source: 'tools',
    target: 'end',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
  },
];

const BasicGraphFlow: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '450px', border: '2px solid #e5e7eb', borderRadius: '8px' }}>
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

export default BasicGraphFlow;
