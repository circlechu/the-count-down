import { useState, useEffect, useRef } from "react";

interface IProps {
  hour?: string;
  minute?: string;
  second?: string;
  mss: number;
}

type Fnc = () => void;
const noop = () => {};

export default function CountDown(props: IProps) {
  const { mss } = props;
  const [time, setTime] = useState(mss);
  const tickRef = useRef<Fnc>(noop);

  const tick = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  };

  useEffect(() => {
    tickRef.current = tick;
  });

  useEffect(() => {
    const timer = setInterval(() => tickRef.current(), 1000);
    console.log("tick", timer);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="CountDown">
      <p>{time.toString().padStart(2, "0")}</p>
    </div>
  );
}
