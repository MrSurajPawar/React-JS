import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data.js";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {/* passing the data between child and parent component via Props giving custom attributes to custome Components*/}
        {/*JSX is capable of outputing array of JSX elements*/}
        {CORE_CONCEPTS.map((conceptItems) => (
          <CoreConcept key={conceptItems.title} {...conceptItems} />
        ))}
      </ul>
    </section>
  );
}