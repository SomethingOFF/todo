import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { useState } from "react";

const Medium = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    image: "",
    cars: "",
    message: "",
    lang: "CSS",
  });
  const changeHandler = (event: any) => {
    event.preventDefault();
    const { name, type, value, files } = event.target;
    setFormData((prev: any) => {
      return {
        ...prev,
        [name]: type === "file" ? files[0] : value,
      };
    });
  };
  console.log(formData);
  return (
    <form className="flex flex-col gap-4" onSubmit={() => {}}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor={"name"}>Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="joe dan"
            onChange={changeHandler}
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor={"username"}>Username</label>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="abc"
            onChange={changeHandler}
            value={formData.username}
          />
        </div>
        <div>
          <label htmlFor={"email"}>Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            onChange={changeHandler}
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor={"password"}>Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="******"
            onChange={changeHandler}
            value={formData.password}
          />
        </div>
        <div>
          <label htmlFor={"image"}>Image</label>
          <Input type="file" id="image" name="image" onChange={changeHandler} />
        </div>
        <div className="flex items-center w-full h-full">
          <select
            id="cars"
            name="cars"
            onChange={changeHandler}
            className="h-10 border border-slate-800 w-full bg-slate-200 px-3 rounded-lg cursor-pointer"
            value={formData.cars}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <Textarea
            name="message"
            onChange={changeHandler}
            value={formData.message}
          />
        </div>
        <div className="flex px-4 gap-2 justify-center flex-col">
          <div className="flex items-center gap-4">
            <Input
              type="radio"
              id="html"
              name="lang"
              value="HTML"
              onChange={changeHandler}
              className="h-5 w-5"
              checked={formData.lang === "HTML"}
            />
            <label htmlFor="html">HTML</label>
          </div>
          <div className="flex items-center  gap-4">
            <Input
              type="radio"
              className="h-5 w-5"
              id="css"
              onChange={changeHandler}
              name="lang"
              value="CSS"
              checked={formData.lang === "CSS"}
            />
            <label htmlFor="css">CSS</label>
          </div>
          <div className="flex items-center  gap-4">
            <Input
              type="radio"
              id="javascript"
              name="lang"
              value="JavaScript"
              onChange={changeHandler}
              className="h-5 w-5"
              checked={formData.lang == "JavaScript"}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Medium;
