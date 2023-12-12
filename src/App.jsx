import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="font-openSans bg-mainBg text-white">
      <Header></Header>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <h1 className="text-3xl">This is Home</h1>
    </div>
  );
}

export default App;
