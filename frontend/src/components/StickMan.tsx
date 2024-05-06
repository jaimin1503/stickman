import "./stickman.css"

const StickMan = () => {
  return (
    <>
      <div className="stickman">
        <div className="head bg-black rounded-full h-8 w-8"></div>
        <div className="body h-16 w-2 bg-black"></div>
        <div className="arm rotate-45 left absolute bg-black h-10 w-2"></div>
        <div className="arm -rotate-45 right absolute bg-black h-10 w-2"></div>
        <div className="leg rotate-45 left absolute bg-black h-14 w-2"></div>
        <div className="leg -rotate-45 right absolute bg-black h-14 w-2"></div>
      </div>
    </>
  );
};
export default StickMan;
