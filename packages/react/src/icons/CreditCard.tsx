import * as React from "react";
import { ZakIconProps } from "../types";

export const CreditCard = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="22" height="16" x="1" y="4" rx="2" ry="2"/><path d="M1 10h22"/>
        {children}
      </svg>
    );
  }
);

CreditCard.displayName = "CreditCard";
