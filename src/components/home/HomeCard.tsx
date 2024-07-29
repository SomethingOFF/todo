import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RoutesType } from "./routes";

interface HomeCardProps {
  route: RoutesType;
  index: number;
}

const HomeCard: React.FC<HomeCardProps> = ({ route, index }) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [position, setPosition] = useState({ positionX: 0, positionY: 0 });
  const mouseMoveHandler = (event: React.MouseEvent) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    console.log(rect.width);
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = -(y - centerY) / 8;
    const rotateX = (x - centerX) / 8;

    const positionY = Math.min(Math.max(y, 0), rect.height);
    const positionX = Math.min(Math.max(x, 0), rect.width);

    setRotation({ rotateX, rotateY });
    setPosition({ positionX, positionY });
  };
  const mouseLeaveHandler = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
    setPosition({ positionX: 0, positionY: 0 });
  };
  return (
    <Link
      to={route.url}
      className="h-full relative min-h-60 max-h-60 flex items-center justify-center font-medium text-lg"
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
      draggable={false}
    >
      <div
        className={`absolute border rounded-full w-5 h-5 z-30 ${
          position.positionX !== 0 && position.positionY !== 0
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        style={{
          left: `calc(${position.positionX}px)`,
          top: `calc(${position.positionY}px)`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="h-full absolute w-full flex items-center gap-4 justify-center flex-col bg-slate-600 text-white rounded-lg  hover:shadow-xl"
        style={{
          transform: `perspective(500px) rotateX(${rotation.rotateY}deg) rotateY(${rotation.rotateX}deg)`,
          transformStyle: "preserve-3d",
          transition: "0.1s",
        }}
      >
        <div className="text-xl font-medium">{index}</div>
        <div>{route.name}</div>
      </div>
    </Link>
  );
};

export default HomeCard;
