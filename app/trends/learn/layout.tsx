import AgentsNavbar from "@/components/agents-navbar";

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AgentsNavbar />
      {children}
    </>
  );
}
