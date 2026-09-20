import * as React from "react";
import { ZakIconProps } from "../types";

export const Move = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m5 9-3 3 3 3M9 5l3-3 3 3m0 14-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
        {children}
      </svg>
    );
  }
);

Move.displayName = "Move";
