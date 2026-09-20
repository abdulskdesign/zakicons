import * as React from "react";
import { ZakIconProps } from "../types";

export const Contact = React.forwardRef<SVGSVGElement, ZakIconProps>(
  ({ size = 24, strokeWidth = 2, color = "currentColor", className = "", children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path d="M16 2v2M7 2v2m14 4.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.5"/><circle cx="12" cy="11" r="3"/><path d="M17 18.5a5 5 0 0 0-10 0"/>
        {children}
      </svg>
    );
  }
);

Contact.displayName = "Contact";
