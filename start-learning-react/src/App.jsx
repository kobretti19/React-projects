import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Section from "./components/Section.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Section title="Examples" id="examples">
          <Examples />
        </Section>
      </main>
    </>
  );
}

export default App;
