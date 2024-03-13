import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";

export default function Examples() {
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
  return (
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
  );
}
