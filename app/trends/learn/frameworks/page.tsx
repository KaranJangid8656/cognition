"use client";

import LearnSidebar from "@/components/learn-sidebar";
import React from "react";

export default function Frameworks() {
  return (
    <div className="flex py-0 px-0">
      <div className="fixed top-28 left-0 w-72 h-[calc(100vh-7rem)] z-20">
        <LearnSidebar />
      </div>
      <main className="flex-1 pl-8 max-w-3xl ml-72">
        <h1 className="text-3xl font-bold mb-4 text-pink-600">Frameworks</h1>
        <section className="prose prose-blue max-w-none">
          <p>AI agents are programs that can autonomously perform a task on behalf of a user. These AI systems first devise a plan with a series of steps to accomplish a complex task.</p>
          <p>Then, they use function calling to connect to external tools—such as application programming interfaces (APIs), data sources, web searches and even other AI agents—that can help fill any gaps in their knowledge.</p>
          <p>After executing their plan of action, autonomous agents learn from feedback and store learned information in memory to improve future performance.</p>
          <p>Organizations can build AI agents from scratch by using programming languages such as Python or JavaScript. However, a quicker, more scalable approach involves using AI agent frameworks.</p>

          <hr />

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-emerald-600">What Are Agentic Frameworks?</h2>
          <p>Agentic frameworks are the building blocks for developing, deploying and managing AI agents. These software platforms have built-in features and functions that help streamline and speed up the process, including:</p>
          <ul>
            <li>A predefined architecture that outlines the structure, characteristics and capabilities of agentic AI.</li>
            <li>Communication protocols that facilitate the interaction between AI agents and human users or other agents.</li>
            <li>Task management systems to coordinate tasks.</li>
            <li>Integration tools for function calling.</li>
            <li>Monitoring tools to track agentic AI performance.</li>
          </ul>

          <hr />

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-emerald-600">Factors to Consider When Choosing an AI Agent Framework</h2>
          <p>Before diving into the world of AI agents, think about your organization’s goals and use cases. The ideal framework strikes a balance between your technical capabilities, your short-term requirements and your long-term objectives.</p>
          <ul>
            <li>Complexity</li>
            <li>Data privacy and security</li>
            <li>Ease of use</li>
            <li>Seamless integration</li>
            <li>Performance and scalability</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">Complexity</h3>
          <p>Identify the tasks that you want an AI agent to fulfill and how complex these tasks are. Determine whether you need a simple implementation with only a single agent or a multiagent ecosystem.</p>
          <p>For multiagent environments, map out the agent interactions required and where human intervention is still needed.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">Data Privacy and Security</h3>
          <p>Data privacy and security must be top of mind when selecting an agentic framework. Verify the security policies and measures of your framework of choice, including encryption for data at rest and in transit, access controls and removing any sensitive information.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">Ease of Use</h3>
          <p>Consider your development team’s skill level. A beginner-friendly AI framework such as CrewAI, for example, has a no-code interface for rapid prototyping and ready-made AI agent templates for swift deployment.</p>
          <p>More experienced AI developers might go for advanced agent frameworks such as LangGraph that offer low-level control and customizable code options.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">Seamless Integration</h3>
          <p>Evaluate agentic AI frameworks based on their compatibility with your existing tech stack. Check how well your choice of framework integrates with your current data sources, infrastructure and tools.</p>
          <p>Figure out how agentic AI will be deployed to your environment—be it on-premises or in the cloud—and if a small-scale or large-scale deployment is required.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">Performance and Scalability</h3>
          <p>Appraise the performance of your chosen AI agent framework. Think about response time or latency for real-time applications, and assess if performance degrades when processing huge volumes of data or multiple concurrent requests. And while the focus might be on the short term, think about how the framework scales as your business grows.</p>

          <hr />

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-emerald-600">Popular AI Agent Frameworks</h2>
          <p>Agentic AI is still in its early stages. As the technology behind AI agents evolves, so too will the frameworks underlying them. Here are some currently popular AI agent frameworks:</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">AutoGen</h3>
          <p>AutoGen is an open-source framework from Microsoft for creating multiagent AI applications to perform complex tasks. Its architecture consists of 3 layers:</p>
          <ul>
            <li><b>Core</b> is a programming framework for developing a scalable and distributed network of agents, with tools for tracing and debugging agent workflows. It employs asynchronous messaging, supporting both request-response and event-driven agent interactions.</li>
            <li><b>AgentChat</b> is built on top of Core and can be used to craft conversational AI assistants. It’s the proposed starting point for beginners, offering default single agents and multiagent teams with predefined behaviors and interaction patterns.</li>
            <li><b>Extensions</b> is a package containing implementations of Core and AgentChat components to further expand their capabilities and interface with external libraries and other services. You can use built-in extensions and those developed by the AutoGen community, or even create your own.</li>
          </ul>
          <p>AutoGen also provides 2 handy developer tools: AutoGen Bench for assessing and benchmarking agentic AI performance and AutoGen Studio for a no-code interface to develop agents. AutoGen is available to access on GitHub.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">CrewAI</h3>
          <p>CrewAI is an orchestration framework for multiagent AI solutions. Like AutoGen, CrewAI is open source.</p>
          <p>CrewAI’s role-based architecture treats agentic AI as a “crew” of “workers.” Here are the core components of a crew:</p>
          <ul>
            <li><b>Agents</b> are assigned specialized roles while still collaborating on complex workflows. Developers can use natural language to outline an agent’s role, goal and backstory.</li>
            <li><b>Tasks</b> define the specific responsibilities of each agent. Developers can also use natural language to describe the task and expected output for each agent.</li>
            <li><b>A process</b> identifies how agents work together and how tasks are executed. It can either be sequential, with tasks completed according to a preset order or hierarchical, with a custom manager agent overseeing task delegation, execution and completion.</li>
          </ul>
          <p>CrewAI supports connections to various large language models (LLMs), including Anthropic’s Claude, Google’s Gemini, Mistral’s AI models, OpenAI’s GPT models and the foundation models in IBM® watsonx.ai™.</p>
          <p>The framework also has a suite of retrieval augmented generation (RAG) tools to search different data sources.</p>
          <p>CrewAI is available to access on GitHub.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">LangChain</h3>
          <p>LangChain is another open-source framework for building LLM-powered applications, including chatbots such as ChatGPT and AI agents.</p>
          <p>It employs a modular architecture, with each module representing abstractions that encapsulate the complex concepts and steps necessary to work with LLMs.</p>
          <p>These modular components can then be chained together to create AI applications. LangChain is useful for developing simple AI agents with straightforward workflows. It provides support for vector databases and utilities for incorporating memory into applications, as a result retaining history and context.</p>
          <p>Its LangSmith platform allows for debugging, testing and performance monitoring.</p>
          <p>LangChain is available to access on GitHub.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">LangGraph</h3>
          <p>LangGraph lives within the LangChain ecosystem. The framework excels at orchestrating complex workflows for multiagent systems. It applies a graph architecture, wherein the specific tasks or actions of AI agents are depicted as nodes, while the transitions between those actions are represented as edges.</p>
          <p>A state component maintains the task list across all interactions. This type of architecture is suitable for cyclical, conditional or nonlinear workflows.</p>
          <p>LangGraph is available to access on GitHub.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">LlamaIndex</h3>
          <p>LlamaIndex is an open-source data orchestration framework for building generative AI (gen AI) and agentic AI solutions. It offers prepackaged agents and tools and recently introduced workflows, a mechanism for developing multiagent systems.</p>
          <p>Here are the main elements that make up a workflow in LlamaIndex:</p>
          <ul>
            <li><b>Steps</b> are the specific actions of an agent. These are the basic components of a workflow.</li>
            <li><b>Events</b> trigger steps and are the means by which steps communicate.</li>
            <li><b>Context</b> is shared across the workflow so steps can store, retrieve and pass data and maintain state throughout their run.</li>
          </ul>
          <p>This event-driven architecture enables workflow steps to be accomplished asynchronously. This means that, unlike a graph architecture, the paths between steps don’t need to be defined, resulting in more flexible transitions between agent actions.</p>
          <p>LlamaIndex is available to access on GitHub.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-emerald-600">Semantic Kernel</h3>
          <p>Semantic Kernel is an open-source development kit from Microsoft for building enterprise-grade generative AI applications. Its Agent Framework, currently marked as experimental, provides core abstractions for creating agents.</p>
          <p>It has 2 built-in agent implementations: a chat completion agent and a more advanced assistant agent.</p>
          <p>Multiple agents can be orchestrated through group chats or by using Semantic Kernel’s Process Framework (also marked as experimental) for more complex workflows.</p>
          <p>A process consists of steps, which represent the tasks assigned to AI agents, and outline how data flows between steps.</p>
          <p>Semantic Kernel is available to access on GitHub.</p>

          <hr />

          <p>For more informed decision-making, consider experimenting with your preferred frameworks. Start small with a simple, single-agent implementation to test how each framework operates and how it compares to others.</p>
          <p>The right agentic framework aligns with your enterprise needs and can help craft AI agents that automate workflows, leading to more efficient business processes.</p>
        </section>
      </main>
    </div>
  );
}

