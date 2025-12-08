import React from 'react';
import { BookOpen, ArrowRight, Zap, Network, GitBranch, Users, Database, CheckCircle2 } from 'lucide-react';
import BasicGraphFlow from './diagrams/BasicGraphFlow';
import ConditionalFlow from './diagrams/ConditionalFlow';
import LangChainVsLangGraphFlow from './diagrams/LangChainVsLangGraphFlow';
import ComponentsFlow from './diagrams/ComponentsFlow';

interface LangGraphTutorialProps {
  onStartTraining: () => void;
}

const LangGraphTutorial: React.FC<LangGraphTutorialProps> = ({ onStartTraining }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Network className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">LangGraph</h1>
          </div>
          <p className="text-2xl text-center text-blue-100 max-w-3xl mx-auto">
            Build stateful, multi-actor applications with LLMs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">

        {/* What is LangGraph */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 mr-3 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">What is LangGraph?</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              LangGraph is a library for building <strong>stateful, multi-actor applications</strong> with LLMs.
              It extends the LangChain Expression Language with the ability to coordinate multiple chains (or actors)
              across multiple steps of computation in a <strong>cyclic manner</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cycles and Branching: Implement loops and conditionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Persistence: Automatically save state after each step</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Human-in-the-Loop: Interrupt graph execution for human input</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Streaming: Stream outputs as they are produced</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Core Concept</h3>
                <p className="text-gray-700 mb-4">
                  LangGraph models agent workflows as <strong>graphs</strong>. You define the behavior of your agents
                  as nodes and edges in a graph, which are then coordinated to execute your workflow.
                </p>
                <div className="bg-white rounded p-4 border border-purple-200">
                  <code className="text-sm text-purple-900">
                    Nodes = Functions/Agents<br/>
                    Edges = Flow of execution<br/>
                    State = Shared data
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Graph Structure</h3>
              <BasicGraphFlow />
            </div>
          </div>
        </section>

        {/* Why, When, and Where */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 mr-3 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-800">Why, When, and Where to Use LangGraph?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Why */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 mb-4">
                <h3 className="text-2xl font-bold">Why?</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Complex workflows:</strong> Handle multi-step reasoning with state management</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Better control:</strong> Fine-grained control over agent behavior and flow</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Reliability:</strong> Built-in error handling, retries, and state persistence</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Observability:</strong> Track and debug complex agent interactions</span>
                </li>
              </ul>
            </div>

            {/* When */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4 mb-4">
                <h3 className="text-2xl font-bold">When?</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Building <strong>agent-based systems</strong> with multiple decision points</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Need for <strong>cyclic workflows</strong> (loops, retries, iterations)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Requiring <strong>human-in-the-loop</strong> interactions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Need to <strong>persist and resume</strong> conversation state</span>
                </li>
              </ul>
            </div>

            {/* Where */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4 mb-4">
                <h3 className="text-2xl font-bold">Where?</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Customer support:</strong> Multi-turn conversations with context</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Research assistants:</strong> Multi-step information gathering</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Code generation:</strong> Iterative code writing and testing</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Data pipelines:</strong> Complex ETL with LLM reasoning</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Components */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <GitBranch className="w-8 h-8 mr-3 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">Main Components of LangGraph</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <ComponentsFlow />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* StateGraph */}
              <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
                  <Database className="w-6 h-6 mr-2" />
                  StateGraph
                </h3>
                <p className="text-gray-700 mb-3">
                  The core graph class that manages the flow of your application. It maintains a shared state that is passed between nodes.
                </p>
                <div className="bg-white rounded p-3 font-mono text-sm text-gray-800 border border-blue-200">
                  graph = StateGraph(AgentState)
                </div>
              </div>

              {/* Nodes */}
              <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center">
                  <Network className="w-6 h-6 mr-2" />
                  Nodes
                </h3>
                <p className="text-gray-700 mb-3">
                  Functions that process the state. Each node receives the current state and returns an updated state.
                </p>
                <div className="bg-white rounded p-3 font-mono text-sm text-gray-800 border border-purple-200">
                  graph.add_node("agent", agent_fn)
                </div>
              </div>

              {/* Edges */}
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center">
                  <GitBranch className="w-6 h-6 mr-2" />
                  Edges
                </h3>
                <p className="text-gray-700 mb-3">
                  Define the flow between nodes. Can be static edges or conditional edges that route based on state.
                </p>
                <div className="bg-white rounded p-3 font-mono text-sm text-gray-800 border border-green-200">
                  graph.add_edge("agent", "tools")
                </div>
              </div>

              {/* Conditional Edges */}
              <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Conditional Edges
                </h3>
                <p className="text-gray-700 mb-3">
                  Dynamic routing based on the current state. Allows for branching logic and decision-making.
                </p>
                <div className="bg-white rounded p-3 font-mono text-sm text-gray-800 border border-orange-200">
                  graph.add_conditional_edges(...)
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conditional Flow Example</h3>
            <p className="text-gray-700 mb-6">
              LangGraph allows you to create dynamic workflows where the next step depends on the current state.
              This is perfect for agent systems that need to make decisions.
            </p>
            <ConditionalFlow />
          </div>
        </section>

        {/* LangChain vs LangGraph */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 mr-3 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-800">LangChain vs LangGraph</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              While LangChain provides building blocks for LLM applications, LangGraph extends it with
              <strong> stateful orchestration</strong> and <strong>cyclic workflows</strong>.
            </p>

            <LangChainVsLangGraphFlow />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* LangChain */}
              <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">LangChain</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Great for <strong>simple, linear chains</strong></span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Quick prototyping and basic workflows</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Component library (prompts, models, tools)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span className="text-gray-700">Limited state management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span className="text-gray-700">No built-in cycles or loops</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span className="text-gray-700">Harder to debug complex flows</span>
                  </div>
                </div>
              </div>

              {/* LangGraph */}
              <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">LangGraph</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700"><strong>Stateful, multi-actor</strong> applications</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Built-in <strong>cycles and branching</strong></span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700"><strong>Persistence</strong> and checkpointing</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700"><strong>Human-in-the-loop</strong> support</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Better debugging and observability</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Production-ready agent systems</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Advantages of LangGraph</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Cyclic Graphs:</strong> LangGraph allows cycles while LangChain is limited to DAGs (Directed Acyclic Graphs)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>State Persistence:</strong> Automatic checkpointing allows resuming from any point
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Human-in-the-Loop:</strong> Native support for interrupting and resuming with human input
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Streaming:</strong> Stream tokens, outputs, and intermediate steps in real-time
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Master LangGraph?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand the fundamentals, it's time to get hands-on experience with our practical training course!
            </p>
            <button
              onClick={onStartTraining}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
            >
              Go to Practical Training
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LangGraphTutorial;
