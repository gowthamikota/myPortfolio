import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/Aboutme";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Highlights from "./components/sections/Highlights";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0B0B]">
        <Header />
        <main className="relative z-0"> {/* Added z-0 to establish stacking context */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutMe />
                  <Education />
                  <div className="relative z-10"> {/* Ensures Experience stays above */}
                    <Experience />
                    <Projects/>
                    <Highlights/>

           
                  </div>
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;