import { useEffect, useState } from "react";
import { GiCardJoker } from "react-icons/gi";
import JokesCard from "./JokesCard";
import { Button } from "../ui/Button";
import { RiErrorWarningLine } from "react-icons/ri";

const URL = `https://v2.jokeapi.dev/joke/Any?safe-mode`;

const JokesGenerator = () => {
  const [data, setData] = useState();
  const [err, setErr] = useState<string>("");
  const fetchJoke = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setErr("Failed to fetch Joke");
    }
  };
  useEffect(() => {
    fetchJoke();
  }, []);
  if (err) {
    return (
      <div className="h-full w-full flex items-center justify-center gap-2">
        <RiErrorWarningLine className="w-6 h-6" /> Something went Wrong! 500
      </div>
    );
  }
  return (
    <div className="h-full max-w-[1080px] mx-auto flex items-center justify-center flex-col gap-4">
      <div className="h-20 flex items-center justify-center font-medium text-xl underline underline-offset-4 text-slate-800 select-none">
        <GiCardJoker className="w-16 h-16" />
        <span>Jokes Generator</span>
      </div>
      <JokesCard data={data} />
      <Button onClick={() => fetchJoke()}>Generate Now</Button>
    </div>
  );
};

export default JokesGenerator;
