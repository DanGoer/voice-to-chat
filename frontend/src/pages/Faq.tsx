import Accordion from "react-bootstrap/Accordion";

const accordionContent = [
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

function Faq() {
  return (
    <Accordion defaultActiveKey="0" flush>
      {accordionContent.map((accordionItem) => {
        return (
          <Accordion.Item key={accordionItem.title} eventKey={accordionItem.id}>
            <Accordion.Header>{accordionItem.title}</Accordion.Header>
            <Accordion.Body>{accordionItem.content}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default Faq;
