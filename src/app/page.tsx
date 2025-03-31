import { About } from "./_componentes/about";
import { Footer } from "./_componentes/footer";
import { Hero } from "./_componentes/hero";
import { Services } from "./_componentes/services";
import { Testimonials } from "./_componentes/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}