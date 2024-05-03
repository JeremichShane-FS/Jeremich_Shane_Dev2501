import { createContext, useState } from "react";

export const OpenContextMenuContext = createContext();

export const OpenContextMenuProvider = ({ children }) => {
  const [openContextMenu, setOpenContextMenu] = useState(null);

  const handleContextMenu = (e, source = null, postId = null) => {
    e.stopPropagation();
    setOpenContextMenu(
      openContextMenu && openContextMenu.postId === postId ? null : { postId, source }
    );
  };

  return (
    <OpenContextMenuContext.Provider
      value={{ openContextMenu, setOpenContextMenu, handleContextMenu }}>
      {children}
    </OpenContextMenuContext.Provider>
  );
};
