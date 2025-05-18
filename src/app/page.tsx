import StarBackground from "@/components/StarBackground";
import ThemeToggle from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <ThemeToggle />

      <StarBackground />

      <Navbar />
    </div>
  );
}
