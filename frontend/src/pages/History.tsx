import { useSetup } from "../context/SetupProvider";

function History() {
  const { sideIsOpen } = useSetup();

  return (
    <section
      className={`${
        sideIsOpen ? "side-is-open" : ""
      } chat-section w-100 vh-75 `}
    >
      history
    </section>
  );
}

export default History;
