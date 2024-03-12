import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

//Main App component : The root of Component tree
function App() {
  // Using the Hook useState()
  const [selectedTopic, setSelectedTopic] = useState(); //Passing the extactly two values

  function handleSelect(selectedbutton) {
    setSelectedTopic(selectedbutton);
    //console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
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
            {/*JSX is capable of outputing array of JSX elements*/}
            {CORE_CONCEPTS.map((conceptItems) => (
              <CoreConcepts key={conceptItems.title} {...conceptItems} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Component Composition : Wraping one component or content to other component   */}
            {/* <TabButton label='Components'></TabButton> */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              States
            </TabButton>
          </menu>
          {/* Rendering the content conditionally */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
