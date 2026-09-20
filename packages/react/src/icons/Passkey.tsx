import * as React from "react";
import { ZakIconProps } from "../types";

export const Passkey = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="8" cy="8" r="5"/><path d="m11.5 11.5 7 7M16 16l2.5-2.5m-1 4 2 2"/>
        {children}
      </svg>
    );
  }
);

Passkey.displayName = "Passkey";
