import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

//Main App component : The root of Component tree
function App() {
  return (
    //Using the Fragment component the lean & clean code
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
