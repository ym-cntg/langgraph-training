# Getting Started with LangGraph Training

Welcome! This guide will walk you through everything you need to start your LangGraph learning journey.

## What You'll Learn

By completing this training, you'll be able to:
- Build sophisticated AI workflows with LangGraph
- Create multi-agent systems
- Implement human-in-the-loop patterns
- Deploy production-ready AI applications
- Use Claude (Anthropic's AI) effectively in your applications

## Prerequisites

### Required Software

1. **Node.js 18+** - For the React dashboard
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **Python 3.11+** - For Jupyter notebooks
   - Download: https://www.python.org/
   - Verify: `python3 --version`

3. **Anthropic API Key** - To use Claude
   - Get one: https://console.anthropic.com/
   - Free tier available for testing

### Required Knowledge

- **Basic Python** - Variables, functions, dictionaries
- **Basic terminal usage** - Running commands
- **Optional**: React knowledge (helpful but not required)

## Installation Steps

### Step 1: Set Up the Frontend

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# This will take 1-2 minutes
```

### Step 2: Set Up Python Environment

```bash
# Go back to the project root
cd ..

# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
# On Mac/Linux:
source venv/bin/activate

# On Windows:
# venv\Scripts\activate

# Install Python packages
pip install -r requirements.txt

# This will take 2-3 minutes
```

### Step 3: Verify Your Setup

```bash
# Run the verification script
python3 verify_setup.py

# You should see checkmarks for most items
# Don't worry if packages aren't installed yet - they will be when you activate the venv
```

### Step 4: Get Your API Key

1. Visit https://console.anthropic.com/
2. Sign up for a free account
3. Go to "API Keys" section
4. Click "Create Key"
5. Copy the key (starts with `sk-ant-`)
6. Keep it safe - you'll enter it in the dashboard

## Starting the Application

### Launch the Dashboard

```bash
cd frontend
npm run dev
```

The dashboard will automatically open in your browser at `http://localhost:3000`

### Enter Your API Key

1. Click the **"Set API Key"** button in the header
2. Paste your Anthropic API key
3. Click **"Save API Key"**

Your API key is stored **only in your browser** and never sent anywhere except Anthropic's API.

## Your First Learning Session

### 1. Start with Topic 1

Click on **"1. Introduction to LangGraph"** in the dashboard.

This will open the notebook in a new tab. If you have Jupyter installed, it should open automatically. If not:

```bash
# In a new terminal, with your venv activated:
jupyter notebook notebooks/01-introduction.ipynb
```

### 2. Work Through the Notebook

- **Read each section carefully**
- **Run every code cell** (Shift + Enter)
- **Try the exercises**
- **Experiment with the code**

### 3. Complete the Exercises

Each notebook has exercises at the end. These are crucial for learning - don't skip them!

### 4. Move to the Next Topic

Once you complete a topic, come back to the dashboard and click the next topic.

Topics unlock progressively, so complete them in order.

## Learning Path Overview

### Week 1: Foundations (Topics 1-3)
**Time: 2-3 hours**

Learn the basics of LangGraph:
- Creating graphs
- Managing state
- Building workflows
- Conditional routing

**Goal**: Build a simple customer support router

### Week 2: Intermediate (Topics 4-6)
**Time: 3-4 hours**

Add sophistication:
- Loops and iterations
- Human approval flows
- Modular components

**Goal**: Create a content creation pipeline with approval

### Week 3: Advanced (Topics 7-10)
**Time: 4-5 hours**

Master production patterns:
- Persistence
- Tool integration
- Multi-agent systems
- Performance optimization

**Goal**: Build a multi-agent research system

## Tips for Success

### 1. Set a Schedule
Block out dedicated learning time:
- **Beginner**: 3-4 sessions of 30-45 min
- **Intermediate**: 4-5 sessions of 45-60 min
- **Advanced**: 4-5 sessions of 60-90 min

### 2. Code Along
Don't just read - type the code yourself. Muscle memory helps learning.

### 3. Take Notes
Keep a learning journal:
- Key concepts you learned
- Patterns you discovered
- Questions that came up

### 4. Build Projects
After every 2-3 topics, build a small project applying what you learned.

### 5. Join the Community
- LangChain Discord: https://discord.gg/langchain
- Ask questions
- Share your progress
- Help others

## Common Issues & Solutions

### Issue: Notebook won't open

**Solution:**
```bash
# Make sure Jupyter is installed
pip install jupyter

# Start Jupyter manually
jupyter notebook notebooks/
```

### Issue: Import errors in notebooks

**Solution:**
```bash
# Make sure your virtual environment is activated
source venv/bin/activate  # Mac/Linux
# or
venv\Scripts\activate  # Windows

# Reinstall packages
pip install -r requirements.txt
```

### Issue: API key errors

**Solution:**
- Verify your API key is correct at https://console.anthropic.com/
- Make sure you've entered it in the dashboard
- Check you have API credits remaining

### Issue: Dashboard won't start

**Solution:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Rate limits

**Solution:**
- You're making too many API calls
- Wait a few minutes
- Consider upgrading your Anthropic plan

## Getting Help

### 1. Check the Documentation
- README.md - Comprehensive guide
- LEARNING_GUIDE.md - Best practices and tips
- PROJECT_SUMMARY.md - Technical overview

### 2. Review the Code
- All code is well-commented
- Examples are designed to be clear
- Start simple, build complexity

### 3. Search Issues
- Check if others had the same problem
- LangGraph GitHub: https://github.com/langchain-ai/langgraph/issues

### 4. Ask the Community
- LangChain Discord is very helpful
- Be specific about your issue
- Share relevant code/error messages

## What to Expect

### By Topic 3, you'll be able to:
- Create basic AI workflows
- Route conversations
- Build decision trees

### By Topic 6, you'll be able to:
- Build complex workflows
- Add human oversight
- Create reusable components

### By Topic 10, you'll be able to:
- Build production systems
- Create multi-agent applications
- Optimize for scale

## Next Steps After Setup

1. **Verify Everything Works**
   ```bash
   python3 verify_setup.py
   ```

2. **Launch the Dashboard**
   ```bash
   cd frontend && npm run dev
   ```

3. **Start Topic 1**
   Click "Introduction to LangGraph" in the dashboard

4. **Join Discord**
   https://discord.gg/langchain

5. **Follow Along**
   Star the LangGraph repo: https://github.com/langchain-ai/langgraph

## Your Learning Checklist

Before you start:
- [ ] Node.js installed (18+)
- [ ] Python installed (3.11+)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Python packages installed (`pip install -r requirements.txt`)
- [ ] Anthropic API key obtained
- [ ] Verification script run (`python3 verify_setup.py`)
- [ ] Dashboard launched (`npm run dev`)
- [ ] API key entered in dashboard

All checked? You're ready to start learning!

## Time Investment

**Total training time: 8-12 hours**

- Self-paced
- Can be completed over 2-3 weeks
- Or intensive 2-3 day bootcamp

Take breaks between topics to let concepts sink in.

## After Completion

Once you finish all 10 topics:

1. **Build a Portfolio Project**
   - Combine multiple concepts
   - Deploy it
   - Share it

2. **Contribute to Open Source**
   - Report bugs
   - Improve documentation
   - Share examples

3. **Teach Others**
   - Write blog posts
   - Create videos
   - Host workshops

4. **Stay Updated**
   - Follow LangChain releases
   - Join community calls
   - Experiment with new features

---

## Ready to Start?

Run this command to begin:

```bash
cd frontend && npm run dev
```

Then click on **"1. Introduction to LangGraph"** in the dashboard!

**Happy Learning!** 🚀

---

*Questions? Check README.md or join the LangChain Discord*
