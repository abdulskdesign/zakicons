import * as React from "react";
import { ZakIconProps } from "../types";

export const CodeXml = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m18 16 4-4-4-4M6 8l-4 4 4 4m8.5-12-5 16"/>
        {children}
      </svg>
    );
  }
);

CodeXml.displayName = "CodeXml";
