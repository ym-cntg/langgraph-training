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
    id: 'state',
    data: { label: '📊 State\n(Shared Memory)' },
    position: { x: 250, y: 0 },
    style: {
      background: '#8b5cf6',
      color: 'white',
      fontWeight: 'bold',
      border: '3px solid #7c3aed',
      borderRadius: '12px',
      padding: '20px',
      whiteSpace: 'pre-line',
      textAlign: 'center',
      fontSize: '16px'
    },
  },
  {
    id: 'node1',
    data: { label: '⚙️ Node 1' },
    position: { x: 50, y: 150 },
    style: {
      background: '#3b82f6',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #2563eb',
      borderRadius: '8px',
      padding: '15px'
    },
  },
  {
    id: 'node2',
    data: { label: '⚙️ Node 2' },
    position: { x: 250, y: 150 },
    style: {
      background: '#3b82f6',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #2563eb',
      borderRadius: '8px',
      padding: '15px'
    },
  },
  {
    id: 'node3',
    data: { label: '⚙️ Node 3' },
    position: { x: 450, y: 150 },
    style: {
      background: '#3b82f6',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid #2563eb',
      borderRadius: '8px',
      padding: '15px'
    },
  },
  {
    id: 'edges-box',
    data: { label: '🔀 Edges\n(Flow Control)' },
    position: { x: 230, y: 280 },
    style: {
      background: '#10b981',
      color: 'white',
      fontWeight: 'bold',
      border: '3px solid #059669',
      borderRadius: '12px',
      padding: '20px',
      whiteSpace: 'pre-line',
      textAlign: 'center',
      fontSize: '16px'
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e-state-node1',
    source: 'state',
    target: 'node1',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
    label: 'read',
  },
  {
    id: 'e-state-node2',
    source: 'state',
    target: 'node2',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
    label: 'read',
  },
  {
    id: 'e-state-node3',
    source: 'state',
    target: 'node3',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' },
    label: 'read',
  },
  {
    id: 'e-node1-state',
    source: 'node1',
    target: 'state',
    animated: true,
    style: { stroke: '#06b6d4', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' },
    label: 'update',
    type: 'smoothstep',
  },
  {
    id: 'e-node2-state',
    source: 'node2',
    target: 'state',
    animated: true,
    style: { stroke: '#06b6d4', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' },
    label: 'update',
    type: 'smoothstep',
  },
  {
    id: 'e-node3-state',
    source: 'node3',
    target: 'state',
    animated: true,
    style: { stroke: '#06b6d4', strokeWidth: 2, strokeDasharray: '5,5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' },
    label: 'update',
    type: 'smoothstep',
  },
  {
    id: 'e-node1-node2',
    source: 'node1',
    target: 'node2',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' },
    label: 'edge',
  },
  {
    id: 'e-node2-node3',
    source: 'node2',
    target: 'node3',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' },
    label: 'edge',
  },
];

const ComponentsFlow: React.FC = () => {
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

export default ComponentsFlow;
