#!/usr/bin/env python3
"""
Script to create the remaining LangGraph training notebooks.
Run this to generate notebooks 04-10.
"""

import json

notebooks = {
    "04-loops-and-cycles": {
        "title": "Loops and Cycles",
        "description": "Master iterative workflows by creating loops and cycles in your graphs."
    },
    "05-human-in-the-loop": {
        "title": "Human-in-the-Loop",
        "description": "Add human approval and interaction to your workflows with breakpoints."
    },
    "06-subgraphs": {
        "title": "Subgraphs",
        "description": "Create modular, reusable graph components using subgraphs."
    },
    "07-persistence": {
        "title": "Persistence and Checkpointing",
        "description": "Implement persistence to save and resume graph execution."
    },
    "08-tool-calling": {
        "title": "Tool Calling and Function Execution",
        "description": "Integrate external tools and functions into your graphs."
    },
    "09-multi-agent": {
        "title": "Multi-Agent Systems",
        "description": "Build sophisticated multi-agent systems where multiple AI agents collaborate."
    },
    "10-advanced-patterns": {
        "title": "Advanced Patterns",
        "description": "Master advanced workflow patterns for production systems."
    }
}

template = {
    "cells": [
        {
            "cell_type": "markdown",
            "metadata": {},
            "source": []
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Setup\n",
                "import os\n",
                "import getpass\n",
                "from typing import TypedDict\n",
                "from langgraph.graph import StateGraph, START, END\n",
                "from langchain_anthropic import ChatAnthropic\n",
                "from langchain_core.messages import HumanMessage\n",
                "\n",
                "if \"ANTHROPIC_API_KEY\" not in os.environ:\n",
                "    os.environ[\"ANTHROPIC_API_KEY\"] = getpass.getpass(\"Enter your Anthropic API key: \")\n",
                "\n",
                "model = ChatAnthropic(model=\"claude-3-5-sonnet-20241022\")\n",
                "print(\"✓ Setup complete!\")"
            ]
        },
        {
            "cell_type": "markdown",
            "metadata": {},
            "source": [
                "## Coming Soon\n",
                "\n",
                "This notebook is under development. Check back soon for comprehensive examples and exercises!"
            ]
        }
    ],
    "metadata": {
        "kernelspec": {
            "display_name": "Python 3",
            "language": "python",
            "name": "python3"
        },
        "language_info": {
            "codemirror_mode": {
                "name": "ipython",
                "version": 3
            },
            "file_extension": ".py",
            "mimetype": "text/x-python",
            "name": "python",
            "nbconvert_exporter": "python",
            "pygments_lexer": "ipython3",
            "version": "3.11.0"
        }
    },
    "nbformat": 4,
    "nbformat_minor": 4
}

for filename, info in notebooks.items():
    nb = template.copy()
    nb["cells"][0]["source"] = [
        f"# {info['title']}\n",
        "\n",
        f"{info['description']}\n",
        "\n",
        "## Learning Objectives\n",
        "\n",
        "This notebook will teach you advanced LangGraph concepts through practical examples."
    ]

    with open(f"notebooks/{filename}.ipynb", "w") as f:
        json.dump(nb, f, indent=1)

    print(f"✓ Created {filename}.ipynb")

print("\n✓ All notebooks created successfully!")
