import { useEffect, useContext } from "react";
import { useMotionValue } from "framer-motion";

import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);
  const scrolly = useMotionValue(0);
  const scrollyProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current

    if (element) {
      const updateScrollValue = () => {
          const { scrollTop, scrollHeight, offsetHeight } = element;
          const fullScroll = scrollHeight - offsetHeight;

          scrolly.set(scrollTop);
          scrollyProgress.set(scrollTop / fullScroll);
      };

      element.addEventListener("scroll", updateScrollValue);

      return () =>
      element?.removeEventListener("scroll", updateScrollValue);
    }
  }, [scrolly, scrollyProgress, wrapperRef]);

  return { scrolly, scrollyProgress };
}
