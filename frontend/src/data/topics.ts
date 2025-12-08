import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Introduction to LangGraph',
    description: 'Learn the fundamentals of LangGraph, including core concepts like nodes, edges, and state management. Set up your development environment and create your first graph.',
    notebookPath: '../notebooks/01-introduction.ipynb',
    duration: '30 min',
    difficulty: 'Beginner',
    learningObjectives: [
      'Understand what LangGraph is and its use cases',
      'Learn about nodes, edges, and state',
      'Set up your development environment',
      'Create a simple graph structure'
    ]
  },
  {
    id: 2,
    title: 'Basic Graphs',
    description: 'Dive deeper into creating graphs with state management. Build simple linear workflows and understand how data flows through your graph.',
    notebookPath: '../notebooks/02-basic-graphs.ipynb',
    duration: '45 min',
    difficulty: 'Beginner',
    prerequisites: [1],
    learningObjectives: [
      'Create graphs with multiple nodes',
      'Manage state across nodes',
      'Build linear workflows',
      'Handle data transformations'
    ]
  },
  {
    id: 3,
    title: 'Conditional Edges',
    description: 'Learn how to add decision-making capabilities to your graphs using conditional edges. Create dynamic workflows that adapt based on state.',
    notebookPath: '../notebooks/03-conditional-edges.ipynb',
    duration: '50 min',
    difficulty: 'Intermediate',
    prerequisites: [2],
    learningObjectives: [
      'Implement conditional routing',
      'Create decision nodes',
      'Build branching workflows',
      'Use state for routing decisions'
    ]
  },
  {
    id: 4,
    title: 'Loops and Cycles',
    description: 'Master iterative workflows by creating loops and cycles in your graphs. Learn best practices for preventing infinite loops.',
    notebookPath: '../notebooks/04-loops-and-cycles.ipynb',
    duration: '45 min',
    difficulty: 'Intermediate',
    prerequisites: [3],
    learningObjectives: [
      'Create iterative workflows',
      'Implement loop conditions',
      'Prevent infinite loops',
      'Build retry mechanisms'
    ]
  },
  {
    id: 5,
    title: 'Human-in-the-Loop',
    description: 'Add human approval and interaction to your workflows. Learn how to create breakpoints and interactive decision points.',
    notebookPath: '../notebooks/05-human-in-the-loop.ipynb',
    duration: '40 min',
    difficulty: 'Intermediate',
    prerequisites: [4],
    learningObjectives: [
      'Add breakpoints to workflows',
      'Create human approval flows',
      'Implement interactive decision points',
      'Handle user input in graphs'
    ]
  },
  {
    id: 6,
    title: 'Subgraphs',
    description: 'Learn to create modular, reusable graph components using subgraphs. Build complex workflows from smaller, maintainable pieces.',
    notebookPath: '../notebooks/06-subgraphs.ipynb',
    duration: '50 min',
    difficulty: 'Intermediate',
    prerequisites: [5],
    learningObjectives: [
      'Create reusable subgraphs',
      'Compose complex workflows',
      'Manage state between subgraphs',
      'Build modular architectures'
    ]
  },
  {
    id: 7,
    title: 'Persistence and Checkpointing',
    description: 'Implement persistence to save and resume graph execution. Learn about checkpointing and memory management strategies.',
    notebookPath: '../notebooks/07-persistence.ipynb',
    duration: '55 min',
    difficulty: 'Advanced',
    prerequisites: [6],
    learningObjectives: [
      'Implement graph persistence',
      'Use checkpointing effectively',
      'Resume interrupted workflows',
      'Manage long-running processes'
    ]
  },
  {
    id: 8,
    title: 'Tool Calling and Function Execution',
    description: 'Integrate external tools and functions into your graphs. Learn error handling and best practices for tool integration.',
    notebookPath: '../notebooks/08-tool-calling.ipynb',
    duration: '60 min',
    difficulty: 'Advanced',
    prerequisites: [7],
    learningObjectives: [
      'Integrate external tools',
      'Create custom function nodes',
      'Implement error handling',
      'Build tool-augmented workflows'
    ]
  },
  {
    id: 9,
    title: 'Multi-Agent Systems',
    description: 'Build sophisticated multi-agent systems where multiple AI agents collaborate. Learn coordination patterns and communication strategies.',
    notebookPath: '../notebooks/09-multi-agent.ipynb',
    duration: '70 min',
    difficulty: 'Advanced',
    prerequisites: [8],
    learningObjectives: [
      'Design multi-agent architectures',
      'Implement agent communication',
      'Create coordination strategies',
      'Build collaborative workflows'
    ]
  },
  {
    id: 10,
    title: 'Advanced Patterns',
    description: 'Master advanced workflow patterns including parallel execution, map-reduce, and complex orchestration strategies for production systems.',
    notebookPath: '../notebooks/10-advanced-patterns.ipynb',
    duration: '75 min',
    difficulty: 'Advanced',
    prerequisites: [9],
    learningObjectives: [
      'Implement parallel execution',
      'Use map-reduce patterns',
      'Build complex orchestrations',
      'Optimize for production'
    ]
  }
];
