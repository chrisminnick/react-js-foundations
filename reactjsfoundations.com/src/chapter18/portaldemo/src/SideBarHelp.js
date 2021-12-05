import { createPortal } from "react-dom";

function SidebarHelp(props) {
  return createPortal(
    <p>{props.helpText}</p>,
    document.getElementById("sidebar")
  );
}

export default SidebarHelp;
