import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MOBILE_SIZE } from "../constants";
import { ACTION_TYPES } from "../redux/reducers/isMobileReducer";

type WindowSize = {
    width: number | undefined,
    height: number | undefined
}

function useWindowSize(): WindowSize {
    const dispatch = useDispatch();

    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        dispatch({type: ACTION_TYPES.UPDATE_IS_MOBILE, payload:  window.innerWidth > MOBILE_SIZE})
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return windowSize;
}

  export default useWindowSize;