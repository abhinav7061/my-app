import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import { Education } from "@/components/Education";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <>
      <Hero />
      <Grid />
      <Education />
      <Experience />
      <Clients />
    </>
  );
}
