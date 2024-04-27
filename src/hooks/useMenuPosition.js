import { useEffect, useState } from "react";

const useMenuPosition = (iconRef, isContextMenuOpen) => {
  const [menuPosition, setMenuPosition] = useState("below");

  useEffect(() => {
    if (isContextMenuOpen && iconRef.current) {
      const iconPosition = iconRef.current.getBoundingClientRect();
      const isIconNearBottom = window.innerHeight - iconPosition.bottom < 200;

      setMenuPosition(isIconNearBottom ? "above" : "below");
    }
  }, [isContextMenuOpen, iconRef]);

  return menuPosition;
};

export default useMenuPosition;
