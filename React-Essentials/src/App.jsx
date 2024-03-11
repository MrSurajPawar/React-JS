import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

//Main App component : The root of Component tree
function App() {
  // Using the Hook useState()
  const [selectedTopic, setSelectedTopic] = useState('components'); //Passing the extactly two values

  function handleSelect(selectedbutton) {
    setSelectedTopic(selectedbutton);
    //console.log(selectedTopic);
  }

  console.log("App Component Executing");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* passing the data between child and parent component via Props giving custom attributes to custome Components*/}
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Component Composition : Wraping one component or content to other component   */}
            {/* <TabButton label='Components'></TabButton> */}
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}> JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}> Props</TabButton>
            <TabButton onSelect={() => handleSelect("States")}>
              States
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
