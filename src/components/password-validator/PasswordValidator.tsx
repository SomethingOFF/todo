import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[^a-zA-Z0-9]/,
    "Password must contain at least one special character"
  );

const schema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
type FormData = z.infer<typeof schema>;
const PasswordValidator = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="h-full w-full flex items-center justify-center gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-medium opacity-60">Password Validator!</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-w-80 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <Input type="password" {...field} />}
              />
              {errors.password && (
                <p className="text-red-700">{errors.password.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">confirmPassword</label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => <Input type="password" {...field} />}
              />
              {errors.confirmPassword && (
                <p className="text-red-700">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <Button type="submit">Submit Now</Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordValidator;
