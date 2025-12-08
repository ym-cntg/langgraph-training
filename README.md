# LangGraph Training - Interactive Learning Platform

A comprehensive, end-to-end training system for mastering LangGraph with interactive Jupyter notebooks and a beautiful React dashboard. Learn to build powerful AI workflows using LangGraph and the Anthropic API.

![LangGraph Training](https://img.shields.io/badge/LangGraph-Training-blue)
![React](https://img.shields.io/badge/React-18.2-blue)
![Python](https://img.shields.io/badge/Python-3.11+-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Features

- **10 Comprehensive Topics**: From beginner to advanced concepts
- **Interactive Jupyter Notebooks**: Learn by doing with runnable code examples
- **React Dashboard**: Beautiful, intuitive interface to navigate the learning path
- **Progressive Learning**: Topics unlock as you complete prerequisites
- **Real AI Integration**: All examples use Claude via Anthropic API
- **Progress Tracking**: Your learning progress is automatically saved
- **API Key Management**: Secure, local storage of your Anthropic API key

## Project Structure

```
langgraph-training/
├── frontend/                 # React dashboard application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ApiKeyModal.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── TopicCard.tsx
│   │   ├── data/
│   │   │   └── topics.ts    # Learning pathway definition
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── index.html
├── notebooks/               # Jupyter notebooks for each topic
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
├── resources/              # Additional learning materials
└── README.md
```

## Learning Path

### 1. Introduction to LangGraph (30 min) - Beginner
- What is LangGraph and its use cases
- Core concepts: nodes, edges, and state
- Setting up your environment
- Creating your first graph

### 2. Basic Graphs (45 min) - Beginner
- Creating multi-node graphs
- Managing state across nodes
- Building linear workflows
- Handling data transformations

### 3. Conditional Edges (50 min) - Intermediate
- Implementing conditional routing
- Creating decision nodes
- Building branching workflows
- Using state for routing decisions

### 4. Loops and Cycles (45 min) - Intermediate
- Creating iterative workflows
- Implementing loop conditions
- Preventing infinite loops
- Building retry mechanisms

### 5. Human-in-the-Loop (40 min) - Intermediate
- Adding breakpoints to workflows
- Creating human approval flows
- Implementing interactive decision points
- Handling user input in graphs

### 6. Subgraphs (50 min) - Intermediate
- Creating reusable subgraphs
- Composing complex workflows
- Managing state between subgraphs
- Building modular architectures

### 7. Persistence and Checkpointing (55 min) - Advanced
- Implementing graph persistence
- Using checkpointing effectively
- Resuming interrupted workflows
- Managing long-running processes

### 8. Tool Calling and Function Execution (60 min) - Advanced
- Integrating external tools
- Creating custom function nodes
- Implementing error handling
- Building tool-augmented workflows

### 9. Multi-Agent Systems (70 min) - Advanced
- Designing multi-agent architectures
- Implementing agent communication
- Creating coordination strategies
- Building collaborative workflows

### 10. Advanced Patterns (75 min) - Advanced
- Implementing parallel execution
- Using map-reduce patterns
- Building complex orchestrations
- Optimizing for production

## Prerequisites

### Required
- **Node.js** 18+ and npm (for the React dashboard)
- **Python** 3.11+ (for Jupyter notebooks)
- **Anthropic API Key** (get one at [console.anthropic.com](https://console.anthropic.com/))

### Recommended
- Basic knowledge of Python
- Familiarity with React (helpful but not required)
- Understanding of AI/LLM concepts (helpful but not required)

## Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd langgraph-training
```

### 2. Set Up the React Dashboard

```bash
cd frontend
npm install
```

### 3. Set Up Python Environment

```bash
# Create a virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install required packages
pip install langgraph langchain-anthropic langchain-core jupyter ipykernel
```

### 4. Get Your Anthropic API Key

1. Visit [console.anthropic.com](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to API Keys
4. Create a new API key
5. Copy it (you'll enter it in the dashboard)

## Usage

### Start the Dashboard

```bash
cd frontend
npm run dev
```

The dashboard will open automatically in your browser at `http://localhost:3000`.

### Enter Your API Key

1. Click the "Set API Key" button in the header
2. Paste your Anthropic API key
3. Click "Save API Key"

Your API key is stored securely in your browser's local storage and never sent anywhere except to Anthropic's API.

### Start Learning

1. Click on any topic card to open its Jupyter notebook
2. Work through the notebook, running code cells
3. Complete exercises
4. Progress automatically as you complete topics
5. Topics unlock progressively based on prerequisites

### Opening Notebooks Directly

You can also open notebooks directly with Jupyter:

```bash
# Activate your virtual environment
source venv/bin/activate

# Start Jupyter
jupyter notebook notebooks/
```

## Dashboard Features

### Progress Tracking
- Visual progress bar showing completion percentage
- Automatic progress saving
- Reset progress option

### Topic Cards
- Color-coded difficulty levels (Beginner/Intermediate/Advanced)
- Estimated completion time
- Learning objectives
- Prerequisite indicators
- Lock mechanism for topics requiring prerequisites

### API Key Management
- Secure local storage
- Easy update/change
- Visual indicator when key is set

## Notebook Features

Each notebook includes:
- Clear learning objectives
- Step-by-step explanations
- Runnable code examples
- Practical exercises
- Real-world use cases
- Key takeaways summary

## Troubleshooting

### Dashboard Issues

**Dashboard won't start:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Notebooks won't open:**
- Make sure you have Jupyter installed: `pip install jupyter`
- Check that notebooks exist in the `notebooks/` directory

### Notebook Issues

**Import errors:**
```bash
pip install --upgrade langgraph langchain-anthropic langchain-core
```

**API key errors:**
- Make sure you've entered your API key in the dashboard
- Or set it as an environment variable: `export ANTHROPIC_API_KEY=your-key-here`
- Check your API key is valid at [console.anthropic.com](https://console.anthropic.com/)

**Rate limit errors:**
- You may be making too many requests
- Wait a moment and try again
- Consider upgrading your Anthropic plan if needed

### General Issues

**Python version issues:**
- Ensure you're using Python 3.11 or higher
- Check with: `python3 --version`

**Module not found:**
- Make sure your virtual environment is activated
- Reinstall packages: `pip install -r requirements.txt`

## Learning Tips

1. **Follow the Order**: Topics build on each other - follow the numbered sequence
2. **Run Every Cell**: Don't just read - execute the code to understand it
3. **Experiment**: Modify examples and see what happens
4. **Complete Exercises**: They reinforce learning
5. **Take Notes**: Document your insights
6. **Build Projects**: Apply concepts to real problems
7. **Revisit Topics**: Come back to earlier topics as you learn more

## What You'll Build

Throughout this training, you'll create:
- Simple chatbots and assistants
- Content creation pipelines
- Customer support routing systems
- Research automation workflows
- Multi-agent collaboration systems
- Production-ready AI applications

## Additional Resources

### Official Documentation
- [LangGraph Docs](https://langchain-ai.github.io/langgraph/)
- [LangChain Docs](https://python.langchain.com/)
- [Anthropic API Docs](https://docs.anthropic.com/)

### Community
- [LangChain Discord](https://discord.gg/langchain)
- [LangChain GitHub](https://github.com/langchain-ai/langgraph)

### Learning More
- Check the `resources/` directory for additional materials
- Explore LangGraph examples on GitHub
- Join the LangChain community

## Contributing

Contributions are welcome! If you'd like to:
- Add new topics
- Improve existing notebooks
- Fix bugs
- Enhance the dashboard

Please open an issue or submit a pull request.

## Expanding the Training

You can easily add more notebooks:

1. Create a new notebook in `notebooks/`
2. Add the topic to `frontend/src/data/topics.ts`
3. Follow the existing notebook structure
4. Update this README

## Requirements File

Create a `requirements.txt` for easy installation:

```bash
langgraph>=0.2.0
langchain-anthropic>=0.1.0
langchain-core>=0.2.0
jupyter>=1.0.0
ipykernel>=6.29.0
```

## License

MIT License - feel free to use this for learning and teaching!

## Acknowledgments

- Built with [LangGraph](https://github.com/langchain-ai/langgraph)
- Powered by [Claude](https://www.anthropic.com/claude) (Anthropic)
- UI built with [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/)

## Support

If you encounter issues or have questions:
1. Check the Troubleshooting section above
2. Review the notebook examples
3. Consult the official LangGraph documentation
4. Open an issue in this repository

## Next Steps After Training

Once you complete all 10 topics, you'll be ready to:
- Build production AI applications
- Create complex multi-agent systems
- Contribute to open-source LangGraph projects
- Teach others about LangGraph
- Build your own AI products

---

**Happy Learning!** Start by running `cd frontend && npm run dev` to launch your dashboard.
