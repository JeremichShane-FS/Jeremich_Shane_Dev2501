import { forwardRef } from "react";

const ContextMenu = forwardRef(({ isOpen, menuPosition, children }, ref) => {
  return (
    <div ref={ref} className={`context-menu ${menuPosition} ${isOpen ? "open" : "closed"}`}>
      <div className="context-menu__arrow" />
      {children}
    </div>
  );
});

export default ContextMenu;
