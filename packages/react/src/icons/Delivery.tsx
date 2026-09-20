import * as React from "react";
import { ZakIconProps } from "../types";

export const Delivery = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M2 17h10m-7-3h4m-6-3h8m3 6h2.5a2.5 2.5 0 0 0 2.5-2.5V8a1 1 0 0 0-1-1h-4"/><circle cx="18" cy="18" r="2"/><path d="m16 7 2-4h4"/>
        {children}
      </svg>
    );
  }
);

Delivery.displayName = "Delivery";
