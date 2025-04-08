import { useEffect, useRef } from "react";
import "./AnimatedBg.css";

const AnimatedBg = () => {
  const interactiveRef = useRef(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    let curX = 0, curY = 0, tgX = 0, tgY = 0;

    function move() {
      curX += (tgX - curX) / 10; 
      curY += (tgY - curY) / 10;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute w-full h-full filter blur-3xl">
        <div className="absolute bg-purple-500 rounded-full w-[30%] h-[30%] top-1/2 animate-[moveVertical_30s_infinite] opacity-40" />
        <div className="absolute bg-blue-500 rounded-full w-[30%] h-[30%] top-1/2 animate-[moveInCircle_20s_infinite] opacity-40" />
        <div className="absolute bg-cyan-500 rounded-full w-[30%] h-[30%] top-[calc(50%+200px)] left-[calc(50%-500px)] animate-[moveInCircle_40s_linear_infinite] opacity-40" />
        <div className="absolute bg-[#C5C2AC] rounded-full w-[30%] h-[30%] animate-[moveHorizontal_20s_infinite] opacity-40" />
        <div className="absolute bg-zinc-600 rounded-full w-[30%] h-[30%] top-1/2 left-1/2 animate-[moveHorizontal_15s_infinite] opacity-40" />
        <div className="absolute bg-blue-200 rounded-full w-[40%] h-[30%] top-1/2 left-1/2 animate-[moveHorizontal_20s_infinite] opacity-40" />
      </div>
      <div 
        ref={interactiveRef} 
        className="absolute w-[5%] h-[5%] bg-blue-400 opacity-60 rounded-full blur-[30px] filter" 
        style={{ transform: 'translate(-50%, -50%)' }} 
      />
    </div>
  );
};

export default AnimatedBg;
