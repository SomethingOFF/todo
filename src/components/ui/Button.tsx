import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "flex item-center justify-center rounded-md transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white border hover:bg-slate-200/90 border-transparent hover:text-slate-800 hover:border-slate-800",
        link: "hover:underline hover:underline-offset-4",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      other: {
        default: "opacity-100",
        active: "opacity-60 pointer-events-none select-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      other: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, other, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, other, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button };
