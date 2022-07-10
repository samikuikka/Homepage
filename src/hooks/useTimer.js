import { useState, useRef, useEffect } from "react";

const useTimer = (id) => {
    const [timer, setTimer] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer(timer => timer + 1)
        }, 1000)
      }
    
      const handlePause = () => {
        clearInterval(countRef.current)
        localStorage.setItem(id, timer);
        setIsPaused(false)
      }

      useEffect( () => {
        setTimer(Number(localStorage.getItem(id)));
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    
    return { timer, isPaused, handleStart, handlePause}
}

export default useTimer;