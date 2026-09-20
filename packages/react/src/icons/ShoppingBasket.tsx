import * as React from "react";
import { ZakIconProps } from "../types";

export const ShoppingBasket = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m5 10 4-7m10 7-4-7M2 10h20v2a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8z"/>
        {children}
      </svg>
    );
  }
);

ShoppingBasket.displayName = "ShoppingBasket";
