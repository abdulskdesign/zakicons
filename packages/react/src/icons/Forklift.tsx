import * as React from "react";
import { ZakIconProps } from "../types";

export const Forklift = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="7" cy="18" r="2"/><circle cx="15" cy="18" r="2"/><path d="M9 18h4m-8 0H3v-5l4-3h4v8m0-11h3v11m3-13v13h4"/>
        {children}
      </svg>
    );
  }
);

Forklift.displayName = "Forklift";
