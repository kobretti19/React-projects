import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [reamainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={reamainingTime} max={timer} />;
}
