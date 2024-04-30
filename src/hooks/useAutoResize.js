import { useEffect, useRef, useState } from "react";

const useAutoResize = (initialContent, handleInputChange) => {
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  const setRef = node => {
    if (node) {
      textareaRef.current = node;
      node.style.height = `${node.scrollHeight}px`;
    }
  };

  const setContentAndHandleInputChange = e => {
    setContent(e.target.value);
    handleInputChange(e);
  };

  return [setRef, setContentAndHandleInputChange];
};

export default useAutoResize;
