import * as React from "react";
import { ZakIconProps } from "../types";

export const AnchorDock = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="12" cy="7" r="3"/><path d="M12 10v12m-7-8H2a10 10 0 0 0 20 0h-3M2 22h20"/>
        {children}
      </svg>
    );
  }
);

AnchorDock.displayName = "AnchorDock";
