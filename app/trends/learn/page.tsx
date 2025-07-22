"use client";

import LearnSidebar from "@/components/learn-sidebar";

export default function LearnAgentsInAI() {
  return (
    <div className="flex py-0 px-0">
      <div className="fixed top-28 left-0 w-72 h-[calc(100vh-7rem)] z-20">
        <LearnSidebar />
      </div>
      <main className="flex-1 pl-8 max-w-3xl ml-72">
        <h1 className="text-3xl font-bold mb-4 text-pink-600">Introduction to Agents in AI</h1>
      <div className="text-sm text-muted-foreground mb-6"></div>
      <p className="mb-4">
        An AI agent is a software program that can interact with its surroundings, gather information, and use that information to complete tasks on its own to achieve goals set by humans.
      </p>
      <p className="mb-4">
        For instance, an AI agent on an online shopping platform can recommend products, answer customer questions, and process orders. If the agent needs more information, it can ask users for additional details.
      </p>
      <p className="mb-4">
        AI agents employ advanced natural language processing and machine learning techniques to understand user input, interact step-by-step, and use external tools when needed for accurate responses.
      </p>
      <p className="mb-4">
        <strong>Common AI Agent Applications</strong> are software development and IT automation, coding tools, chat assistants, and online shopping platforms.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-emerald-600">How do AI Agents Work?</h2>
      <p className="mb-2">
        AI agents follow a structured process to perceive, analyze, decide, and act within their environment. Here’s an overview of how AI agents operate:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-4">
          <strong>Collecting Information (Perceiving the Environment)</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li className="mb-2">Sensors: For example, a self-driving car uses cameras and radar to detect objects.</li>
            <li className="mb-2">User Input: Chatbots read text or listen to voice commands.</li>
            <li className="mb-2">Databases & Documents: Virtual assistants search records or knowledge bases for relevant data.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Processing Information & Making Decisions</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li className="mb-2">After gathering data, AI agents analyze it and decide what to do next. Some agents rely on pre-set rules, while others utilize machine learning to predict the best course of action. Advanced agents may also use retrieval-augmented generation (RAG) to access external databases for more accurate responses.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Taking Action (Performing Tasks)</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li className="mb-2">Once an agent makes a decision, it performs the required task, such as:</li>
            <li className="mb-2">Answering a customer query in a chatbot.</li>
            <li className="mb-2">Controlling a device, like a smart assistant turning off lights.</li>
            <li className="mb-2">Running automated tasks, such as processing orders on an online store.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Learning & Improving Over Time</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li className="mb-2">Some AI agents can learn from past experiences to improve their responses. This self-learning process, often referred to as reinforcement learning, allows agents to refine their behavior over time. For example, a recommendation system on a streaming platform learns users' preferences and suggests content accordingly.</li>
          </ul>
        </li>
      </ol>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-emerald-600">Goal Initialization and Planning</h2>
      <p className="mb-4">Although AI agents are autonomous in their decision-making processes, they require goals and predefined rules defined by humans.<sup>2</sup> There are three main influences on autonomous agent behavior:</p>
      <ul className="list-disc list-inside ml-6 mb-4">
        <li className="mb-2">The team of developers that design and train the agentic AI system.</li>
        <li className="mb-2">The team that deploys the agent and provides the user with access to it.</li>
        <li className="mb-2">The user that provides the AI agent with specific goals to accomplish and establishes available tools to use.</li>
      </ul>
      <p className="mb-4">Given the user's goals and the agent’s available tools, the AI agent then performs task decomposition to improve performance.<sup>3</sup> Essentially, the agent creates a plan of specific tasks and subtasks to accomplish the complex goal.</p>
      <p className="mb-4">For simple tasks, planning is not a necessary step. Instead, an agent can iteratively reflect on its responses and improve them without planning its next steps.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-emerald-600">Reasoning with Available Tools</h2>
      <p className="mb-4">AI agents base their actions on the information that they perceive. However, they often lack the full knowledge required to tackle every subtask within a complex goal. To bridge this gap, they turn to available tools such as external datasets, web searches, APIs and even other agents.</p>
      <p className="mb-4">Once the missing information is gathered, the agent updates its knowledge base and engages in agentic reasoning. This process involves continuously reassessing its plan of action and making self-corrections, which enables more informed and adaptive decision-making.</p>
      <p className="mb-4">To help illustrate this process, imagine a user planning their vacation. The user tasks an AI agent with predicting which week in the next year would likely have the best weather for their surfing trip in Greece.</p>
      <p className="mb-4">Because the LLM model at the core of the agent does not specialize in weather patterns, it cannot rely solely on its internal knowledge. Therefore, the agent gathers information from an external database containing daily weather reports for Greece over the past several years.</p>
      <p className="mb-4">Despite acquiring this new information, the agent still cannot determine the optimal weather conditions for surfing and so, the next subtask is created. For this subtask, the agent communicates with an external agent that specializes in surfing. Let’s say that in doing so, the agent learns that high tides and sunny weather with little to no rain provide the best surfing conditions.</p>
      <p className="mb-4">The agent can now combine the information it has learned from its tools to identify patterns. It can predict which week next year in Greece will likely have high tides, sunny weather and a low chance of rain. These findings are then presented to the user. This sharing of information between tools is what allows AI agents to be more general purpose than traditional AI models.<sup>3</sup></p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-emerald-600">Learning and Reflection</h2>
      <p className="mb-4">AI agents use feedback mechanisms, such as other AI agents and human-in-the-loop (HITL) to improve the accuracy of their responses. Let’s return to our previous surfing example to highlight this process. After the agent forms its response to the user, it stores the learned information along with the user’s feedback to improve performance and adjust to user preferences for future goals.</p>
      <p className="mb-4">If other agents were used to reach the goal, their feedback might also be used. Multiagent feedback can be especially useful in minimizing the time that human users spend providing direction. However, users can also provide feedback throughout the agent's actions and internal reasoning to better align the results with the intended goal.<sup>2</sup></p>
      <p className="mb-4">Feedback mechanisms improve the AI agent's reasoning and accuracy, which is commonly referred to as iterative refinement.<sup>3</sup> To avoid repeating the same mistakes, AI agents can also store data about solutions to previous obstacles in a knowledge base.</p>
      </main>
    </div>
  );
}
