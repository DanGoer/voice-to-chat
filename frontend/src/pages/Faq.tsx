import Accordion from "react-bootstrap/Accordion";
import Footer from "../components/Footer";

const aboutContent = [
  {
    id: "0",
    title: "test1",
    content:
      "53j3n2 3j52j532 j532j532 j532j532 j532j532j532j532 j532  j532 j325j 52 j532j532j 532j 532 j532j53j5",
  },
  {
    id: "1",
    title: "test2",
    content:
      "53j3n2 3j52j532 j532j532 j532j532 j532j532j532j532 j532  j532 j325j 52 j532j532j 532j 532 j532j53j553j3n2 3j52j532 j532j532 j532j532 j532j532j532j532 j532  j532 j325j 52 j532j532j 532j 532 j532j53j5",
  },
];

const howToContent = [
  {
    id: "0",
    title: "test3",
    content:
      "53j3n2 3j52j532 j532j532 j532j532 j532j532j532j532 j532  j532 j325j 52 j532j532j 532j 532 j532j53j5",
  },
  {
    id: "1",
    title: "test4",
    content:
      "53j3n2 3j52j532 j532j532 j532j532 j532j532j532j532 j532  j532 j325j 52 j532j532j 532j 532 j532j53j553j3n2 3j52j532 j532j532 j532j532 j532j532j532j532 j532  j532 j325j 52 j532j532j 532j 532 j532j53j5",
  },
];

function Faq() {
  return (
    <>
      <h2>FAQ</h2>
      <section>
        <Accordion defaultActiveKey="0" flush>
          {aboutContent.map((accordionItem) => {
            return (
              <Accordion.Item
                key={accordionItem.title}
                eventKey={accordionItem.id}
              >
                <Accordion.Header>{accordionItem.title}</Accordion.Header>
                <Accordion.Body>{accordionItem.content}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </section>
      <section>
        <Accordion defaultActiveKey="0" flush>
          {howToContent.map((accordionItem) => {
            return (
              <Accordion.Item
                key={accordionItem.title}
                eventKey={accordionItem.id}
              >
                <Accordion.Header>{accordionItem.title}</Accordion.Header>
                <Accordion.Body>{accordionItem.content}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </section>
      <Footer />
    </>
  );
}

export default Faq;
