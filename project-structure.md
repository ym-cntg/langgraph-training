# LangGraph Training Project Structure

## Learning Pathway Topics

### 1. Introduction to LangGraph
- What is LangGraph?
- Core concepts: Nodes, Edges, State
- Setting up your environment

### 2. Basic Graphs
- Creating your first graph
- State management
- Simple linear workflows

### 3. Conditional Edges
- Decision-making in graphs
- Routing based on state
- Dynamic workflow paths

### 4. Loops and Cycles
- Creating iterative workflows
- Loop conditions
- Preventing infinite loops

### 5. Human-in-the-Loop
- Adding breakpoints
- Human approval workflows
- Interactive decision points

### 6. Subgraphs
- Modular graph design
- Reusable components
- Nested workflows

### 7. Persistence and Checkpointing
- Saving graph state
- Resuming workflows
- Memory management

### 8. Tool Calling and Function Execution
- Integrating external tools
- Custom function nodes
- Error handling

### 9. Multi-Agent Systems
- Agent collaboration
- Communication patterns
- Coordination strategies

### 10. Advanced Patterns
- Parallel execution
- Map-reduce patterns
- Complex workflow orchestration

## Project Structure

```
langgraph-training/
├── frontend/               # React dashboard
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   └── App.tsx
│   └── package.json
├── notebooks/             # Jupyter notebooks
│   ├── 01-introduction.ipynb
│   ├── 02-basic-graphs.ipynb
│   ├── 03-conditional-edges.ipynb
│   ├── 04-loops-and-cycles.ipynb
│   ├── 05-human-in-the-loop.ipynb
│   ├── 06-subgraphs.ipynb
│   ├── 07-persistence.ipynb
│   ├── 08-tool-calling.ipynb
│   ├── 09-multi-agent.ipynb
│   └── 10-advanced-patterns.ipynb
├── resources/             # Learning materials
└── README.md
```
