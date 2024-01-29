import { useLayoutEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
