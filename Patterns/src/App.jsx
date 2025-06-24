import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/Accordion/AccordionContent";
import AccordionTitle from "./components/Accordion/AccordionTitle";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";
import { PLACES } from "./Places";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.Item className="accordion-item" id="expirience">
            <AccordionTitle className="accordion-item-title">
              "We got 20 years of experience"
            </AccordionTitle>
            <AccordionContent className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="accordion-item" id="local-guides">
            <AccordionTitle className="accordion-item-title">
              "We are working with local guides"
            </AccordionTitle>
            <AccordionContent className="accordion-item-content">
              <article>
                <p>We are not doing this along fro our office.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleaseant vacation.
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item-2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
