import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      console.log("Ram clicked = ", ref.current);
      console.log(ref.current);
      console.log(event.target);
      console.log(!ref.current.contains(event.target));
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // document.addEventListener("click", handleClick);
    document.addEventListener("click", handleClick, true);

    return () => {
      // document.removeEventListener("click", handleClick);
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
