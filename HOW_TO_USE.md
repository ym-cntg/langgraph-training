# How to Use the LangGraph Training Dashboard

## Getting Started

### 1. Launch the Dashboard

```bash
cd frontend
npm run dev
```

The dashboard will open at `http://localhost:3000`

### 2. Set Your API Key

Click the **"Set API Key"** button in the header and enter your Anthropic API key.

### 3. Start Jupyter Notebook Server

Before clicking on topics, make sure you have Jupyter running:

```bash
# In a separate terminal, from the project root
source venv/bin/activate  # or venv\Scripts\activate on Windows
jupyter notebook
```

This will open Jupyter in your browser at `http://localhost:8888`

Keep this running in the background!

## Using the Dashboard

### Click on a Topic

When you click on a topic card (e.g., "1. Introduction to LangGraph"), a modal will appear with instructions.

### Two Ways to Open Notebooks

**Option A: From the Modal Instructions**
1. Follow the terminal commands shown
2. The notebook will open in Jupyter

**Option B: From Jupyter (Easier!)**
1. Keep Jupyter running in the background
2. Click on a topic in the dashboard
3. Close the modal
4. Go to your Jupyter tab (http://localhost:8888)
5. Navigate to `notebooks/` folder
6. Click on the notebook file shown in the modal

### Recommended Workflow

**Initial Setup:**
```bash
# Terminal 1: Start Jupyter
cd /path/to/langgraph-training
source venv/bin/activate
jupyter notebook

# Terminal 2: Start Dashboard
cd frontend
npm run dev
```

**While Learning:**
1. Dashboard tab: Click on topic to see what to open
2. Jupyter tab: Navigate to and open that notebook
3. Work through the notebook
4. Come back to dashboard for next topic

### Progress Tracking

- The dashboard tracks which topic you're on
- Topics unlock progressively
- Progress is saved automatically in your browser

## Tips

### Keep Both Open
- Dashboard in one browser tab
- Jupyter in another tab
- Switch between them as needed

### Start Jupyter First
Before using the dashboard, start Jupyter so notebooks open smoothly.

### Follow the Order
Topics build on each other - complete them in sequence.

### Complete Exercises
Each notebook has exercises - they're essential for learning!

## Troubleshooting

### "Jupyter notebook not found"
Make sure:
1. Jupyter is running (`jupyter notebook` in terminal)
2. You're in the project directory
3. Virtual environment is activated

### Modal keeps appearing
This is normal! The modal shows you which notebook to open. Just:
1. Note the filename
2. Close the modal
3. Open that file in Jupyter

### Can't find notebook in Jupyter
Navigate to the `notebooks/` folder in the Jupyter file browser.

## Quick Reference

**Start Everything:**
```bash
# Terminal 1
jupyter notebook

# Terminal 2
cd frontend && npm run dev
```

**Workflow:**
1. Dashboard → Click topic
2. Note the notebook filename
3. Jupyter → Open that notebook
4. Work through notebook
5. Repeat!

---

Need more help? Check [GETTING_STARTED.md](GETTING_STARTED.md) or [README.md](README.md)
