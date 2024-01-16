import { useEffect, useState } from "react";
import { debounce } from "../shared/toolbox";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    const debouncedHandleResize = debounce(handleResize, 400);

    window.addEventListener("resize", debouncedHandleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Don't forget to remove event listener on cleanup
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  return windowSize;
};