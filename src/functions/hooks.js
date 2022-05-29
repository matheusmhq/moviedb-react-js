import { useEffect, useState, useRef } from "react";

export const useComponentDidMount = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};

export const useDebounce = (effect, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
};

export function usePathname() {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname.toLocaleLowerCase());
  }, [window.location.pathname]);

  return pathname;
}
