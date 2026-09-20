import * as React from "react";
import { ZakIconProps } from "../types";

export const FolderOpen = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M2 11h20M2 11l3 9h14l3-9M2 11V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v3"/>
        {children}
      </svg>
    );
  }
);

FolderOpen.displayName = "FolderOpen";
