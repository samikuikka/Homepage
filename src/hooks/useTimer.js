import { useState, useRef } from "react";

const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
      }
    
      const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
      }
    
    
    return { timer, isPaused, handleStart, handlePause}
}

export default useTimer;