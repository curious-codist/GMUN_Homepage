import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Events from "@/components/Events"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
