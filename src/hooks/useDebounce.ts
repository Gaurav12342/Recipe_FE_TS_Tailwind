import { useEffect, useCallback } from "react";

const useDebounce = (effect: any, dependencies: any, delay: any) => {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};

export default useDebounce;
