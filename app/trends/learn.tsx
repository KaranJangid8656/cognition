"use client";

export default function LearnAgentsInAI() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2 text-pink-600">Agents in AI</h1>
      <div className="text-sm text-muted-foreground mb-6">Last Updated : 03 Apr, 2025</div>
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
      <h2 className="text-2xl font-semibold mt-8 mb-2">How do AI Agents Work?</h2>
      <p className="mb-2">
        AI agents follow a structured process to perceive, analyze, decide, and act within their environment. Here’s an overview of how AI agents operate:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">
          <strong>Collecting Information (Perceiving the Environment)</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Sensors: For example, a self-driving car uses cameras and radar to detect objects.</li>
            <li>User Input: Chatbots read text or listen to voice commands.</li>
            <li>Databases & Documents: Virtual assistants search records or knowledge bases for relevant data.</li>
          </ul>
        </li>
        <li>
          <strong>Processing Information & Making Decisions</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>After gathering data, AI agents analyze it and decide what to do next. Some agents rely on pre-set rules, while others utilize machine learning to predict the best course of action. Advanced agents may also use retrieval-augmented generation (RAG) to access external databases for more accurate responses.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
