#!/usr/bin/env python3
"""
Setup verification script for LangGraph Training
Run this to verify your environment is correctly configured.
"""

import sys
import os

def check_python_version():
    """Check if Python version is 3.11+"""
    version = sys.version_info
    if version.major >= 3 and version.minor >= 11:
        print(f"✅ Python {version.major}.{version.minor}.{version.micro} (Required: 3.11+)")
        return True
    else:
        print(f"❌ Python {version.major}.{version.minor}.{version.micro} (Required: 3.11+)")
        print("   Please upgrade Python: https://www.python.org/downloads/")
        return False

def check_package(package_name, import_name=None):
    """Check if a package is installed"""
    if import_name is None:
        import_name = package_name

    try:
        __import__(import_name)
        print(f"✅ {package_name} is installed")
        return True
    except ImportError:
        print(f"❌ {package_name} is not installed")
        return False

def check_api_key():
    """Check if API key is set"""
    if "ANTHROPIC_API_KEY" in os.environ:
        key = os.environ["ANTHROPIC_API_KEY"]
        if key.startswith("sk-ant-"):
            print("✅ ANTHROPIC_API_KEY is set in environment")
            return True
        else:
            print("⚠️  ANTHROPIC_API_KEY is set but doesn't look valid")
            return False
    else:
        print("ℹ️  ANTHROPIC_API_KEY not set in environment (you can set it in the dashboard)")
        return True

def check_notebooks():
    """Check if notebooks exist"""
    notebooks_dir = "notebooks"
    if not os.path.exists(notebooks_dir):
        print(f"❌ {notebooks_dir}/ directory not found")
        return False

    expected_notebooks = [
        "01-introduction.ipynb",
        "02-basic-graphs.ipynb",
        "03-conditional-edges.ipynb",
        "04-loops-and-cycles.ipynb",
        "05-human-in-the-loop.ipynb",
        "06-subgraphs.ipynb",
        "07-persistence.ipynb",
        "08-tool-calling.ipynb",
        "09-multi-agent.ipynb",
        "10-advanced-patterns.ipynb"
    ]

    missing = []
    for notebook in expected_notebooks:
        if not os.path.exists(os.path.join(notebooks_dir, notebook)):
            missing.append(notebook)

    if missing:
        print(f"❌ Missing notebooks: {', '.join(missing)}")
        return False
    else:
        print(f"✅ All {len(expected_notebooks)} notebooks found")
        return True

def check_frontend():
    """Check if frontend directory exists"""
    if not os.path.exists("frontend"):
        print("❌ frontend/ directory not found")
        return False

    if not os.path.exists("frontend/package.json"):
        print("❌ frontend/package.json not found")
        return False

    if not os.path.exists("frontend/src"):
        print("❌ frontend/src/ directory not found")
        return False

    print("✅ Frontend structure looks good")
    return True

def main():
    print("=" * 60)
    print("LangGraph Training - Setup Verification")
    print("=" * 60)
    print()

    checks = []

    print("Checking Python environment...")
    print("-" * 60)
    checks.append(check_python_version())
    print()

    print("Checking required packages...")
    print("-" * 60)
    checks.append(check_package("langgraph"))
    checks.append(check_package("langchain-anthropic", "langchain_anthropic"))
    checks.append(check_package("langchain-core", "langchain_core"))
    checks.append(check_package("jupyter"))
    checks.append(check_package("ipykernel"))
    print()

    print("Checking API key...")
    print("-" * 60)
    checks.append(check_api_key())
    print()

    print("Checking project structure...")
    print("-" * 60)
    checks.append(check_notebooks())
    checks.append(check_frontend())
    print()

    print("=" * 60)
    if all(checks):
        print("🎉 All checks passed! You're ready to start learning!")
        print()
        print("Next steps:")
        print("1. cd frontend && npm install")
        print("2. npm run dev")
        print("3. Open your browser to http://localhost:3000")
    else:
        print("⚠️  Some checks failed. Please fix the issues above.")
        print()
        print("For help, see:")
        print("- README.md")
        print("- QUICKSTART.md")
        print("- resources/LEARNING_GUIDE.md")
    print("=" * 60)

if __name__ == "__main__":
    main()
