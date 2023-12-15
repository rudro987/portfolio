import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import WorkExamples from "./Components/WorkExamples/WorkExamples";

function App() {
  return (
    <div className="font-openSans bg-mainBg text-white">
      <Header></Header>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <Skills></Skills>
      <WorkExamples></WorkExamples>
      <Contact></Contact>
      <h1 className="text-3xl">This is Home</h1>
    </div>
  );
}

export default App;
