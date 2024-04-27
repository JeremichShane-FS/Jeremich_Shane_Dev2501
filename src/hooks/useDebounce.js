import { useCallback, useEffect, useRef } from "react";

const useDebounce = (fn, delay, deps) => {
  const { current } = useRef({ fn, timer: null });

  useEffect(() => {
    current.fn = fn;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn]);

  return useCallback(
    function f(...args) {
      clearTimeout(current.timer);
      current.timer = setTimeout(() => current.fn.apply(this, args), delay);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps, delay]
  ); // include delay in the dependencies
};

export default useDebounce;
