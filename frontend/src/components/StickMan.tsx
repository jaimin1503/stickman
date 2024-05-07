import { useEffect, useState } from "react";
import "./stickman.css";

interface StickmanProps {
  position: { x: number; y: number };
}
interface Coordinates {
  x: boolean;
  y: boolean;
}

const StickMan: React.FC<StickmanProps> = ({ position }) => {
  const [previousPosition, setPreviousPosition] = useState<{ x: number; y: number }>({ x: position.x, y: position.y });
  const [isIncreasing, setIsIncreasing] = useState<Coordinates>({ x: false, y: false });

  useEffect(() => {
    const isXIncreasing = position.x > previousPosition.x;
    const isYIncreasing = position.y > previousPosition.y;

    setIsIncreasing({ x: isXIncreasing, y: isYIncreasing });
    setPreviousPosition({ x: position.x, y: position.y });
  }, [position.x, position.y]);

  return (
    <>
      <div className={`stickman relative ${isIncreasing.x ? "rotate-[90deg]" : "-rotate-[90deg]"} w-fit`} style={{ top: position.y, left: position.x }}>
        <div className="head w-10 bg-black rounded-full h-10"></div>
        <div className="body h-28 w-3 rounded-t-full bg-black rounded-b-full top-8 left-3 absolute"></div>
        <div className="left-hand bg-black rounded-t-full rounded-b-full h-16 w-3 rotate-45 absolute -left-2"></div>
        <div className="left-hand bg-black rounded-t-full rounded-b-full h-16 w-3 -rotate-45 absolute left-8"></div>
        <div className="left-hand bg-black rounded-t-full rounded-b-full h-16 w-3 rotate-45 absolute -left-2 top-32"></div>
        <div className="left-hand bg-black rounded-t-full rounded-b-full h-16 w-3 -rotate-45 absolute left-8 top-32"></div>
      </div>
    </>
  );
};
export default StickMan;
