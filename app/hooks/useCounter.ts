import { useEffect, useState } from "react";

export const useCounter = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      setCount(Math.floor(progress * end));

      if (progress === 1) clearInterval(counter);
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};
