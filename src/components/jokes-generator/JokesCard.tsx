import React, { useState } from "react";
import { Button } from "../ui/Button";
import { json } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";

interface JokesCardProps {
  data: any;
}

const JokesCard: React.FC<JokesCardProps> = ({ data }) => {
  console.log(data);
  if (!data) {
    return <div>Data is not found!</div>;
  }
  return (
    <div className="min-w-80 w-full  flex items-center justify-center">
      <div className="max-w-[300px] w-full flex gap-8 flex-col bg-slate-200 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="bg-slate-300 p-2 text-sm rounded-md">
            {data.category}
          </div>
          <div className="bg-slate-300 p-2 text-sm rounded-md">{data.lang}</div>
          <div className="bg-slate-300 p-2 text-sm rounded-md">{data.type}</div>
        </div>
        <div className="flex items-center">
          {data.type === "single" ? (
            <SingleJoke joke={data.joke} />
          ) : (
            <SetUpJoke setup={data.setup} delivery={data.delivery} />
          )}
        </div>
      </div>
    </div>
  );
};

const SingleJoke = ({ joke }: { joke: string }) => {
  return <div>{joke}</div>;
};
const SetUpJoke = ({
  setup,
  delivery,
}: {
  setup: string;
  delivery: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4">
      <div>{setup}</div>
      {open && (
        <div className="flex items-center gap-4">
          <BiRightArrow /> {delivery}
        </div>
      )}
      <Button onClick={() => setOpen((prev) => !prev)}>
        {!open ? "Show up" : "close now!"}
      </Button>
    </div>
  );
};

export default JokesCard;
