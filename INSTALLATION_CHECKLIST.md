# Installation Checklist

Use this checklist to ensure everything is set up correctly.

## Pre-Installation

- [ ] Node.js 18+ installed (`node --version`)
- [ ] Python 3.11+ installed (`python3 --version`)
- [ ] Git installed (optional, for cloning)
- [ ] Text editor or IDE installed
- [ ] Terminal/command line access
- [ ] Internet connection

## Installation Steps

### Frontend Setup
- [ ] Navigate to `frontend/` directory
- [ ] Run `npm install`
- [ ] Wait for installation to complete (1-2 minutes)
- [ ] Check for no error messages

### Python Setup
- [ ] Create virtual environment: `python3 -m venv venv`
- [ ] Activate virtual environment
  - Mac/Linux: `source venv/bin/activate`
  - Windows: `venv\Scripts\activate`
- [ ] Verify activation (terminal prompt shows `(venv)`)
- [ ] Install packages: `pip install -r requirements.txt`
- [ ] Wait for installation (2-3 minutes)
- [ ] Check for no error messages

### API Key Setup
- [ ] Visit https://console.anthropic.com/
- [ ] Create account or log in
- [ ] Navigate to API Keys section
- [ ] Create new API key
- [ ] Copy the key (starts with `sk-ant-`)
- [ ] Store key securely

### Verification
- [ ] Run `python3 verify_setup.py`
- [ ] Review results
- [ ] Address any issues shown
- [ ] Re-run until all checks pass

## First Launch

### Start the Dashboard
- [ ] Navigate to `frontend/` directory
- [ ] Run `npm run dev`
- [ ] Browser opens automatically
- [ ] Dashboard loads at `http://localhost:3000`
- [ ] No error messages in terminal

### Configure API Key
- [ ] Click "Set API Key" button in header
- [ ] Paste your Anthropic API key
- [ ] Click "Save API Key"
- [ ] Button changes to "API Key Set" (green)

### Test First Notebook
- [ ] Click on "1. Introduction to LangGraph"
- [ ] Notebook opens in Jupyter
- [ ] Run first code cell
- [ ] No errors appear
- [ ] Claude responds successfully

## Troubleshooting Checks

If something doesn't work:

### Frontend Issues
- [ ] Check Node.js version is 18+
- [ ] Delete `node_modules` and `package-lock.json`
- [ ] Re-run `npm install`
- [ ] Check for firewall blocking port 3000

### Python Issues
- [ ] Verify Python version is 3.11+
- [ ] Ensure virtual environment is activated
- [ ] Re-run `pip install -r requirements.txt`
- [ ] Check for Python conflicts (multiple versions)

### API Key Issues
- [ ] Verify key starts with `sk-ant-`
- [ ] Check key is active at console.anthropic.com
- [ ] Verify you have API credits
- [ ] Try re-entering the key

### Jupyter Issues
- [ ] Verify Jupyter is installed: `jupyter --version`
- [ ] Start manually: `jupyter notebook notebooks/`
- [ ] Check browser doesn't block popups
- [ ] Try different browser

## Success Criteria

You're ready to start learning when:

✅ Dashboard loads without errors
✅ API key is set and shows green status
✅ First notebook opens successfully
✅ Code cells execute without errors
✅ Claude responds to prompts
✅ Progress tracking works

## Next Steps

Once everything is working:

1. Read [GETTING_STARTED.md](GETTING_STARTED.md)
2. Work through Topic 1: Introduction to LangGraph
3. Complete the exercises
4. Move to Topic 2 when ready

## Getting Help

If you're stuck:

1. Check [README.md](README.md) troubleshooting section
2. Review [GETTING_STARTED.md](GETTING_STARTED.md)
3. Run `python3 verify_setup.py` for diagnostics
4. Check [resources/LEARNING_GUIDE.md](resources/LEARNING_GUIDE.md)
5. Join LangChain Discord: https://discord.gg/langchain

---

**Ready?** Run: `cd frontend && npm run dev`
