import { useRef } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

const Normal = () => {
  const ref = useRef<HTMLFormElement>(null);
  function handleSubmit(this: any, event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ref.current) return;
    const formData = new FormData(ref.current);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor={"name"}>Name</label>
          <Input type="text" id="name" name="name" placeholder="joe dan" />
        </div>
        <div>
          <label htmlFor={"username"}>Username</label>
          <Input type="text" id="username" name="username" placeholder="abc" />
        </div>
        <div>
          <label htmlFor={"email"}>Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
          />
        </div>
        <div>
          <label htmlFor={"password"}>Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="******"
          />
        </div>
        <div>
          <label htmlFor={"image"}>Image</label>
          <Input type="file" id="image" name="image" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cars">cars</label>
          <select
            id="cars"
            name="cars"
            className="h-10 border border-slate-800 bg-slate-200 px-3 rounded-lg cursor-pointer"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">address</label>
          <Textarea
            name="message"
            defaultValue="The cat was playing in the garden."
          />
        </div>
        <div className="flex px-4 gap-2 justify-center flex-col">
          <div className="flex items-center gap-4">
            <Input
              type="radio"
              id="html"
              name="lang"
              value="HTML"
              className="h-5 w-5"
            />
            <label htmlFor="html">HTML</label>
          </div>
          <div className="flex items-center  gap-4">
            <Input
              type="radio"
              className="h-5 w-5"
              id="css"
              name="lang"
              value="CSS"
            />
            <label htmlFor="css">CSS</label>
          </div>
          <div className="flex items-center  gap-4">
            <Input
              type="radio"
              id="javascript"
              name="lang"
              value="JavaScript"
              className="h-5 w-5"
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Normal;
