"use client";

import LearnSidebar from "@/components/learn-sidebar";

export default function AIAgentsVsAssistants() {
  return (
    <div className="flex py-0 px-0">
      <div className="fixed top-28 left-0 w-72 h-[calc(100vh-7rem)] z-20">
        <LearnSidebar />
      </div>
      <main className="flex-1 pl-8 max-w-3xl ml-72">
        <h1 className="text-3xl font-bold mb-4 text-pink-600">AI Agents vs. AI Assistants</h1>
        <div className="text-sm text-muted-foreground mb-6"></div>
        <p className="mb-4">
          AI agents and AI assistants are both intelligent software systems, but they differ in autonomy, goal-setting, and the complexity of tasks they can handle. This section will help you understand the key differences, strengths, and use cases for each.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-emerald-600">What is an AI Assistant?</h2>
        <p className="mb-4">
          An AI assistant is an intelligent application that understands natural language commands and uses a conversational AI interface to complete tasks for a user. Many modern virtual assistants, such as Amazon’s Alexa and Apple’s Siri, rely on these capabilities to enhance user interactions.<sup>1</sup>
        </p>
        <p className="mb-4">
          The first AI assistants relied mostly on rule-based instructions, preprogrammed responses and predefined tasks. Today, AI assistants are almost entirely machine learning (ML) or foundation model-based.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-2 text-emerald-700">How AI Assistants Work</h3>
        <p className="mb-4">
          AI assistants are built by a foundation model (for example, IBM® Granite™, Meta’s Llama models or OpenAI’s models). Large language models (LLMs) are a subset of foundation models that specialize in text-related tasks. They enable assistants to understand queries that are submitted by humans and offer relevant information, suggestions or next step actions, which help organizations simplify access to information, automate repetitive tasks and streamline complicated workflows. In business, AI assistants also assist with data analysis, allowing users to efficiently extract insights.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-2 text-emerald-700">Key Features of AI Assistants</h3>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li className="mb-2"><strong>Conversational AI:</strong> LLM-based AI assistants can use natural language processing (NLP) to communicate with users through a chatbot interface. AI chatbot examples include Microsoft Copilot, ChatGPT and IBM watsonx™ Assistant. These assistants integrate with APIs to expand their capabilities.</li>
          <li className="mb-2"><strong>Prompts:</strong> AI assistants need a well-defined problem or a query to get started. AI assistants require continuous user input.</li>
          <li className="mb-2"><strong>Recommendation:</strong> An AI assistant can suggest information or actions based on data it can access. Users should review outputs for accuracy.</li>
          <li className="mb-2"><strong>Tuning:</strong> Users can adapt AI models to more specific tasks through tuning, which eliminates the need to retrain the model. With fine-tuning, they can give models that are labeled examples to tailor them to the target task. Through prompt-tuning, practitioners can give models a task-specific context.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-2 text-emerald-700">AI Assistant Limitations</h3>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li className="mb-2">They require defined prompts to take action. While AI assistants can use tools to perform tasks, their capabilities are limited to predefined functions they have been equipped and trained to handle. For example, an AI assistant can use a spreadsheet to generate a table comparing "x versus y," but it cannot independently decide to create such a comparison without a specific prompt.</li>
          <li className="mb-2">They do not necessarily have persistent memory. AI assistants can be tailored to fit a user’s needs, but they do not inherently retain information from past user interactions. The AI models that power assistants do not continuously learn or evolve based on usage; instead, improvements occur only when the developers release updated versions. However, some AI assistants can reference prior conversations within a session by storing relevant details in their context window or by using a feature that is called "memory" to recall selected information and improve future responses.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-emerald-600">AI Agents: Taking Initiative</h2>
        <p className="mb-4 italic">To quote Elvis Presley, “A little less conversation, a little more action, please.” Enter AI agents.</p>
        <p className="mb-4">An AI agent refers to a system or program that can autonomously complete tasks on behalf of users or another system by designing its own workflow and by using available tools.</p>
        <p className="mb-4">More autonomous, connected and sophisticated than AI assistants, AI agents can encompass a wide range of functions beyond NLP. These include decision-making, problem-solving, interacting with external environments and executing actions.</p>

        <h3 className="text-xl font-bold mt-8 mb-2 text-emerald-700">How AI Agents Work</h3>
        <p className="mb-4">Whereas AI assistants need users to provide prompts for every action, AI agents can operate independently after an initial kickoff prompt. They evaluate assigned goals, break tasks into subtasks and develop their own workflows to achieve specific objectives.</p>
        <p className="mb-4">These agents are deployed across various enterprise applications, from software design and IT automation to code-generation tools and conversational assistants. Using advanced NLP from LLMs, AI agents comprehend user inputs step-by-step, strategize their actions and determine when to call on external tools.</p>

        <h3 className="text-xl font-bold mt-8 mb-2 text-emerald-700">Key Features of AI Agents</h3>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li className="mb-2"><strong>Greater autonomy:</strong> After an initial prompt, AI agents can continue working without further input, reducing the need for human intervention at every stage. Unlike assistants, which suggest actions for users to approve, AI agents use multicomponent autonomy to independently reason, decide and problem-solve by using external data sets and tools. Their ability to break out of a pure chat-based framework enables proactive decision-making and learning, ultimately saving employees time by handling complex workflows on their own. Newer models are improving reasoning capabilities to support this.<sup>2</sup></li>
          <li className="mb-2"><strong>Connectivity:</strong> AI agents unify various capabilities into a single workflow, eliminating bottlenecks that arise from disconnected systems. By integrating seamlessly with external applications, data sources and other AI models, they enhance productivity while reducing friction between different components of a process.</li>
          <li className="mb-2"><strong>Decision-making and action:</strong> The ability to call on tools by itself does not make an LLM an agent. AI agents can also act autonomously and decide which tools to use and when. Grounded in foundation models, AI agents go beyond chat to accomplish tasks on their own, based on a specific goal and go beyond the foundation model for additional information and capabilities. They analyze problems, break them into subtasks and plan their next steps autonomously. This makes them effective for handling complex, ambiguous problems. Some agents, such as Anthropic’s Claude, even demonstrate computer use, where an LLM can click, type and operate a computer to complete tasks.<sup>3</sup></li>
          <li className="mb-2"><strong>Persistent memory and adaptive learning:</strong> Compared to AI assistants, AI agents have a greater capacity to learn. They store previous actions, conversations and experiences, enabling them to refine their approach over time. With persistent memory, AI agents can recall past interactions to improve future responses, while adaptive learning allows them to adjust their behavior based on feedback and outcomes. Because they integrate with external applications and tools, they can act on real-time data rather than relying solely on their initial training. Over repeated interactions, they become more efficient, context-aware and better aligned with user needs.</li>
          <li className="mb-2"><strong>Task chaining:</strong> AI agents don’t complete tasks in isolation—they break complex workflows into smaller, manageable steps. AI agents identify dependencies between tasks, which help ensure that each step logically flows into the next. This ability enables structured execution across multi-step processes and makes automation more dynamic.</li>
          <li className="mb-2"><strong>Team play:</strong> AI agents often specialize in specific tasks—one may excel at fact-checking, while another is better at research. These agents can collaborate, forming teams to tackle complex challenges together. IBM currently supports AI agents that are written in LangChain, with LlamaIndex integration coming soon. Instead of being developer-heavy, IBM’s framework enables users can compose and edit AI agents in a low-code or no-code environment.</li>
        </ul>

      </main>
    </div>
  );
}
