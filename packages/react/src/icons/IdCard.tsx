import * as React from "react";
import { ZakIconProps } from "../types";

export const IdCard = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="18" height="16" x="3" y="4" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M15 9h2m-2 4h2M7 17h10"/>
        {children}
      </svg>
    );
  }
);

IdCard.displayName = "IdCard";
