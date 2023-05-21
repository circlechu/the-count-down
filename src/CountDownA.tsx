import useCountDown from "./hooks/useCountDown";

interface IProps {
  mss: number;
}

export default function CountDown(props: IProps) {
  const { mss } = props;
  const [time] = useCountDown({ mss });

  return (
    <div className="CountDown">
      <p>{time.toString().padStart(2, "0")}</p>
    </div>
  );
}
