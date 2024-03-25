"use client";
import { ReactNode, forwardRef } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: string | ReactNode;
   btnType?: "primary" | "secondary" | string;
   className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   ({ children, btnType, type, className, disabled, ...props }, ref) => {
      return (
         <>
            <button
               ref={ref}
               {...props}
               className={["", className, btnType ? `btn ${btnType}` : ""].join(
                  " ",
               )}
            >
               {children}
            </button>
         </>
      );
   },
);

Button.displayName = "Button";

export { Button };
