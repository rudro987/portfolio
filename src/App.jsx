import About from "./Components/About/About";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="font-openSans bg-mainBg text-white">
      <Header></Header>
      <About></About>
      <h1 className="text-3xl">This is Home</h1>
    </div>
  );
}

export default App;
