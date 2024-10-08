import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/Testimonials";
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
 
  return (
    <main className="min-h-screen  antialiased  dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[5]">
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}
