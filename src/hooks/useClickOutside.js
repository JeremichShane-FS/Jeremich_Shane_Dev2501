import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = e => {
      let targetElement = e.target;

      do {
        if (targetElement.id === "burger-menu") {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      if (ref.current && !ref.current.contains(e.target)) {
        handler(e);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [ref, handler]);
};

export default useClickOutside;
