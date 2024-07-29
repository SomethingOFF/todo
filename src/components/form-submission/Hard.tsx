import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { Controller, useForm } from "react-hook-form";

const Hard = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "joen",
      username: "abc12",
      email: "abc@email.com",
      password: "123**",
      cars: "volvo",
      address: "The cat was playing in the garden.",
      lang: "JS",
      image: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data); // Process form data
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Name field */}
        <div>
          <label htmlFor="name">Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input type="text" id="name" placeholder="Joe Dan" {...field} />
            )}
          />
          <small className="text-red-700">
            {errors.name && errors.name.message}
          </small>
        </div>

        {/* Username field */}
        <div>
          <label htmlFor="username">Username</label>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input type="text" id="username" placeholder="abc" {...field} />
            )}
          />
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                {...field}
              />
            )}
          />
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                id="password"
                placeholder="******"
                {...field}
              />
            )}
          />
        </div>

        {/* Image upload field */}
        <div>
          <label htmlFor="image">Image</label>
          <Controller
            name="image"
            control={control}
            render={({ field: { ref, name, onBlur, onChange } }) => (
              <Input
                type="file"
                id="image"
                name={name}
                onBlur={onBlur}
                onChange={(e) => onChange(e.target.files?.[0])}
                ref={ref}
              />
            )}
          />
        </div>

        {/* Cars select dropdown */}
        <div className="flex flex-col">
          <label htmlFor="cars">Cars</label>
          <Controller
            name="cars"
            control={control}
            render={({ field }) => (
              <select
                id="cars"
                className="h-10 border border-slate-800 bg-slate-200 px-3 rounded-lg cursor-pointer"
                {...field}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            )}
          />
        </div>

        {/* Address textarea */}
        <div>
          <label htmlFor="address">Address</label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => <Textarea {...field} />}
          />
        </div>

        {/* Radio buttons for selecting a language */}
        <div className="flex px-4 gap-2 justify-center flex-col">
          <div className="flex items-center gap-4">
            <Controller
              name="lang"
              control={control}
              render={({ field: { ref, name, onChange, value } }) => (
                <>
                  <Input
                    type="radio"
                    id="html"
                    className="h-5 w-5"
                    ref={ref}
                    name={name}
                    onChange={(e) => onChange(e.target.value)}
                    checked={value === "HTML"}
                    value="HTML"
                  />
                  <label htmlFor="html">HTML</label>
                </>
              )}
            />
          </div>
          <div className="flex items-center gap-4">
            <Controller
              name="lang"
              control={control}
              render={({ field: { ref, name, onChange, value } }) => (
                <>
                  <Input
                    type="radio"
                    id="html"
                    className="h-5 w-5"
                    ref={ref}
                    name={name}
                    onChange={(e) => onChange(e.target.value)}
                    checked={value === "CSS"}
                    value="CSS"
                  />
                  <label htmlFor="css">CSS</label>
                </>
              )}
            />
          </div>
          <div className="flex items-center gap-4">
            <Controller
              name="lang"
              control={control}
              render={({ field: { ref, name, onChange, value } }) => (
                <>
                  <Input
                    type="radio"
                    id="html"
                    className="h-5 w-5"
                    ref={ref}
                    name={name}
                    onChange={(e) => onChange(e.target.value)}
                    checked={value === "JS"}
                    value="JS"
                  />
                  <label htmlFor="javascript">JavaScript</label>
                </>
              )}
            />
          </div>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Hard;
