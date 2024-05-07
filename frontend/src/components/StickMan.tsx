import "./stickman.css"

interface StickmanProps {
  position: { x: number; y: number };
}
const StickMan: React.FC<StickmanProps> = ({ position }) => {
  console.log(position)
  return (
    <>
      <div className="stickman relative" style={{ top: position.y, left: position.x }}>
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
