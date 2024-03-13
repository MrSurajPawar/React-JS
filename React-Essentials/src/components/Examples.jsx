//This is just wrapper to an element Component TabButton
import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

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
    <Section title="Examples" id="examples">
      {/*working with multiple JSX slots*/}
      <Tabs
        buttons={
          <>
            {/* Component Composition : Wraping one component or content to other component   */}
            {/* <TabButton label='Components'></TabButton> */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              States
            </TabButton>
          </>
        }
      >
        {/* Rendering the content conditionally */}
        {tabContent}
      </Tabs>
    </Section>
  );
}
