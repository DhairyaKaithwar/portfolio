import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Self from "./components/Self";
import Skills from "./components/Skills";
import Stories from "./components/Stories";
import Contact from "./constants/Contact";

function App() {
  return (
    <>
      <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
        {/* Background image */}
        <div className="bg-image fixed inset-0 bg-cover bg-center -z-10"></div>

        {/* Content that allows scrolling */}
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <Self />
          <Projects />
          <Skills/>
          <Stories />
          <Education/>
          <Contact/>
        </div>
      </main>
    </>
  );
}

export default App;
