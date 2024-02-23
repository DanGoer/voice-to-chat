import { useSetup } from "../../context/SetupProvider";

function SideBarWrapper({ children }) {
  const { sideIsOpen } = useSetup();

  return (
    <section
      className={`${
        sideIsOpen ? "side-is-open" : ""
      } chat-section w-100 vh-75 `}
    >
      {children}
    </section>
  );
}

export default SideBarWrapper;
